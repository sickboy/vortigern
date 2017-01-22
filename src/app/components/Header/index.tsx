    const s = require('./style.css');
import * as React from 'react';
const Scroll  = require('react-scroll');

const Link       = Scroll.Link;
/*
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;
*/

export default class Header extends React.Component<any, any> {
  public handleSetActive = (to) => {
    window.history.pushState(null, null, to === 'top' ? '/' : '#' + to);
  }
  public render() {
    const offSet = -72;

    return (
      <div className="navbar-fixed" id="top">
        <nav className={[s.nav, 'blue'].join(' ')}>
          <ul>
            <li><Link to="top" spy={true} smooth={true} offset={0} activeClass="active"
            onSetActive={this.handleSetActive} >Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={offSet} activeClass="active"
            onSetActive={this.handleSetActive}>About</Link></li>
            <li><Link to="posts" spy={true} smooth={true} offset={offSet} activeClass="active"
            onSetActive={this.handleSetActive}>Blog</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
