import React, {Component} from 'react';

import './Hamburger.scss';

class Hamburger extends Component {


  render() {
    const hMobile = (
      <div
        className={"header__hamburger header__hamburger-mobile " + (this.props.open ? " open" : "")}
        onClick={this.props.mobileHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
    const hDesktop = (
      <div
        className={"header__hamburger header__hamburger-desktop " + (this.props.open ? " open" : "")}
        onClick={this.props.desktopHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
    return (<div>{hMobile}{hDesktop}</div>);
  }
}

export default Hamburger;
