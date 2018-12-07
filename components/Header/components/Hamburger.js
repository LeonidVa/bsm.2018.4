import React, {Component} from 'react';

import './Hamburger.scss';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
width: 3em;
    height: 3em;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    position: relative;
    margin: 0.5em 2em 0;
    @media (min-width: 1331px) {
      margin: .66em -5em 0 2em;
    }
    @media (max-width: 1330px) {
      position: relative;
    }
    @media (max-width: 900px) {
      display: block;
      margin: 0.5em 1em 0;
    }
    @media (max-width: 660px) {
      position: absolute;
      right: 1em;
      top: 0.5em;
    }
    @media (max-width: 350px) {
      position: absolute;
      right: 0;
    }
`;

const HamburgerMobile = styled.div`
@media (max-width: 660px) 
{
    display: block;
}
@media (min-width: 661px) {
  display: none;
}
`;

const HamburgerDesktop = styled.div`
@media (max-width: 660px) 
{
    display: none;
}
@media (min-width: 661px) {
  display: block;
}
`;

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
