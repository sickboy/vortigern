import * as React from 'react';
const s = require('./style.css');
const ReactMarkdown = require('react-markdown');
import About from '../About';
import BlogPostsList from '../../components/Footer/BlogPostsList';
import ConnectList from '../../components/Footer/ConnectList';

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
          <div className="row grid-container">
            <div className="col m5 l3">
              <div className="card">
                <div className="card-image">
                  <img className="responsive-img circle" src={require('./avatar.png')} />
                </div>
                <div className="card-content">
                <span className="card-title">
                  Patrick Roza
                </span>
                <div><ReactMarkdown className="markdown" source={require('./intro.md')}
                  renderers={renderers} />
                </div>
                <div>
                  <h5>Connect</h5>
                  <ConnectList />
                </div>
              </div>
            </div>
          </div>
            <div className="col m7 l9">
            <div id="about">
                <h3>About me</h3>
                <About />
              </div>
              <div id="posts"  style={{'margin-top': '800px'}}>
                <h3>Posts</h3>
                <BlogPostsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
