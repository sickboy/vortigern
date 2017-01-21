const appConfig = require('../../../../config/main');

import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header, Footer } from 'components';
const s = require('./style.css');

export default class App extends React.Component<any, any> {
  public render() {
    return (
      <section className={s.appContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <noscript className="container" style={{ display: 'block' }}>
          Your browser does not support JavaScript!
          You will not be able to read the information on the back of cards.
        </noscript>
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
