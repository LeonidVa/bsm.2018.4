import {Component} from 'react';
import {
  HamburgerWrapper,
  HamburgerMobile,
  HamburgerDesktop
} from "./style.js"

class Hamburger extends Component {

  render() {
    const hMobile = (
      <HamburgerMobile 
        className={"header__hamburger " + (this.props.open ? " open" : "")}
        onClick={this.props.mobileHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMobile>

    );
    const hDesktop = (
      <HamburgerDesktop 
        className={"header__hamburger " + (this.props.open ? " open" : "")}
        onClick={this.props.desktopHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerDesktop>
    );
    return (<HamburgerWrapper>{hMobile}{hDesktop}</HamburgerWrapper>);
  }
}

export default Hamburger;
