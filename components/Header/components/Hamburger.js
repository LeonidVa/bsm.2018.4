import {Component} from 'react';

import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  width: 3em;
  height: 3em;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  position: relative;
  margin: 0.5em 2em 0;
  span {
    display: block;
    position: absolute;
    height: 0.33rem;
    width: 100%;
    background: #f4511e;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2), &:nth-child(3) {
      top: 1rem;
    }
    &:nth-child(4) {
      top: 2rem;
    }
  }
  .open span {
    &:nth-child(1) {
      top: 1rem;
      width: 0;
      left: 50%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 1rem;
      width: 0;
      left: 50%;
    }
  }
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
  @media (max-width: 660px) {
    display: block;
  }
  @media (min-width: 661px) {
    display: none;
  }
`;

const HamburgerDesktop = styled.div`
  @media (max-width: 660px) {
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
