import * as React from 'react';

// import BlogPostsList from './BlogPostsList';
import ConnectList from './ConnectList';

export default class Footer extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <footer className={[s.footer, 'page-footer', 'blue'].join(' ')}>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <span>_</span>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Connect</h5>
              <ConnectList />
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            © 2017 Patrick Roza
          </div>
        </div>
      </footer>
    );
  }
}
