import * as React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <nav className={[s.nav, 'blue'].join(' ')}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><a href="https://blog.patrickroza.com">Blog</a></li>
        </ul>
      </nav>
    );
  }
}
