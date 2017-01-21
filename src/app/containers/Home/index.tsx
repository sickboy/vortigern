import * as React from 'react';
const s = require('./style.css');
const ReactMarkdown = require('react-markdown');

export default class Home extends React.Component<any, any> {
  public render() {
    const link = (props) => props.href.startsWith('http')
      ? <a href={props.href} target="_blank">{props.children}</a>
      : <a href={props.href}>{props.children}</a>;
    const list = (props) => props.type === 'Bullet'
      ? <ul className="browser-default">{props.children}</ul>
      : <ol className="browser-default">{props.children}</ol>;
    const renderers = { Link: link, List: list };

    return (
      <div className={s.home}>
        <div className="container">
          <div className="row">
            <div className="grid-container">
              <div className="col m3 l2 offset-m1 offset-l2">
                <img className="responsive-img circle" src={require('./avatar.png')} />
              </div>
              <div className="col m7 l6">
                <ReactMarkdown className="markdown" source={require('./intro.md')}
                  renderers={renderers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
