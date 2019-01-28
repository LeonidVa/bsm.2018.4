import { Component } from 'react';

import styled from 'styled-components'

const СloseDivBlock = styled.div`
display: block;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 1em;
  right: .8em;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: ${props => props.isClose ? "#f4511e" :  "#fff"};
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -1.5px;
  }

  &:before {
    transform: rotate(44deg);
  }

  &:after {
    transform: rotate(-44deg);
  }
`;


class Close extends Component {
    render() {
        return <СloseDivBlock  isClose = { this.props.inverse ?  true : false} onClick={ this.props.onClick }/>;
    }
}

export default Close;

