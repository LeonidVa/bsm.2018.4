import React, {Component} from 'react';

import styled from 'styled-components';


const PageWrapper = styled.div`
  font-family: "Ubuntu", sans-serif;
  background-color: #eceff1;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 0;
  padding-top: 6rem;
  padding-bottom: 4rem;
  position: relative;
  &.main {
    background-image: url(${require('static/images/header/bg.svg')});
    background-size: 100% 100vh;
    background-attachment: fixed;
    padding-bottom: 50px;
  }
  &.bg {
    @media (max-width: 660px) {
      padding-top: 70px;
    }
  }
  &.bg-img {
    background-attachment: fixed;
    background-size: cover;
    background-position: center 0;
  }
  &.bg-img1 {
    background-image: url(${require('static/images/header/bg1.svg')});
  }
  &.bg-img2 {
    background-image: url(${require('static/images/header/bg2.svg')});
  }
  &.bg-img3 {
    background-image: url(${require('static/images/header/bg3.svg')});
  }
  &.bg-img4 {
    background-image: url(${require('static/images/header/bg4.svg')});
  }
  &.bg-img5 {
    background-image: url(${require('static/images/header/bg5.svg')});
  }
  &.bg-c1 {
    background-color: #857a95;
  }
  &.bg-c2 {
    background-color: #87bce7;
  }
  &.bg-c3 {
    background-color: #25b9a9;
  }
`;
/**/
class Comp extends Component {

    render() {
        return (<PageWrapper className={`wrapper ${this.props.className}`}>{this.props.children}</PageWrapper>)
    }

}

export default Comp;