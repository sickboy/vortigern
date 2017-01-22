import * as React from 'react';
const s = require('./style.css');

const ReactMarkdown = require('react-markdown');

export default class About extends React.Component<any, any> {
  public render() {
    const link = (props) => props.href.startsWith('http')
      ? <a href={props.href} target="_blank">{props.children}</a>
      : <a href={props.href}>{props.children}</a>;
    const list = (props) => props.type === 'Bullet'
      ? <ul className="browser-default">{props.children}</ul>
      : <ol className="browser-default">{props.children}</ol>;
    const renderers = { Link: link, List: list };

    return (
      <div className={[s.about].join(' ')}>
        <div className="row masonry grid-container">
          <div className="col m6">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={require('./intro.jpg')} />
              </div>
              <div className="card-content">
                <span className="card-title activator">
                  Intro
                  <i className="material-icons right">more_vert</i>
                </span>
                </div>
                <div className="card-reveal">
                  <span className="card-title activator">
                   Intro
                <i className="material-icons right">close</i>
                </span>
                <ReactMarkdown className="markdown" source={require('./intro.md')}
                  renderers={renderers} />
              </div>
            </div>
          </div>

          <div className="col m6">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={require('./development.jpg')} />
              </div>
              <div className="card-content">
                <span className="card-title activator">
                  My Development experience
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title activator">
                  My Development experience
                <i className="material-icons right">close</i>
                </span>

                <ReactMarkdown className="markdown" source={require('./development.md')}
                  renderers={renderers} />
              </div>
            </div>
          </div>

          <div className="col m6">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={require('./network.jpg')} />
              </div>
              <div className="card-content">
                <span className="card-title activator">
                  My Network, System and Software Management experience
                <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title activator">
                  My Network, System and Software Management experience
                <i className="material-icons right">close</i>
                </span>
                <ReactMarkdown className="markdown" source={require('./network.md')}
                  renderers={renderers} />
              </div>
            </div>
          </div>

          <div className="col m6">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={require('./heroes.jpg')} />
              </div>
              <div className="card-content">
                <span className="card-title activator">
                  My Heroes in IT
                <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title activator">
                  My Heroes in IT
                <i className="material-icons right">close</i>
                </span>
                <ReactMarkdown className="markdown" source={require('./heroes.md')}
                  renderers={renderers} />
              </div>
            </div>
          </div>

          <div className="col m6">
            <div className="card hoverable">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={require('./favorites.jpg')} />
              </div>
              <div className="card-content">
                <span className="card-title activator">
                  My Favorite Tools
                <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title activator">
                  My Favorite Tools
                <i className="material-icons right">close</i>
                </span>
                <ReactMarkdown className="markdown" source={require('./favorites.md')}
                  renderers={renderers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
