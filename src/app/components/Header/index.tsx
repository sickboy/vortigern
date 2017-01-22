import * as React from 'react';
// import { Link } from 'react-router';

export default class Header extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <div className="navbar-fixed">
        <nav className={[s.nav, 'blue'].join(' ')}>
          <ul>
            <li><a href="/#top">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#posts">Blog</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
