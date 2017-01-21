import { IStore } from 'redux/IStore';
import * as React from 'react';
import * as Helmet from 'react-helmet';
import ApolloClient from 'apollo-client';

interface IHtmlProps {
  manifest?: Object;
  markup?: string;
  store?: Redux.Store<IStore>;
  client?: ApolloClient;
}

export default class Html extends React.Component<IHtmlProps, {}> {
  private resolve(files) {
    return files.map((src) => {
      if (!this.props.manifest[src]) { return; }
      return '/public/' + this.props.manifest[src];
    }).filter((file) => file !== undefined);
  }

  public render() {
    const head = Helmet.rewind();
    const { markup, store, client } = this.props;

    const styles = this.resolve(['vendor.css', 'app.css']);
    const renderStyles = styles.map((src, i) =>
      <link key={i} rel="stylesheet" type="text/css" href={src} />,
    );

    const scripts = this.resolve(['vendor.js', 'app.js']);
    const renderScripts = scripts.map((src, i) =>
      <script src={src} key={i} />,
    );

    const initialClientState = {
      [client.reduxRootKey]: {
        data: client.store.getState()[client.reduxRootKey].data,
      },
    };

    // tslint:disable-next-line:max-line-length
    const initialState = (<script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())}; window.__APOLLO_STATE__=${JSON.stringify(initialClientState)};` }} charSet="UTF-8" />);

    return (
      <html>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          {renderStyles}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
        </head>
        <body>
          <main id="app" dangerouslySetInnerHTML={{ __html: markup }} />
          {initialState}
          {renderScripts}
        </body>
      </html>
    );
  }
}
