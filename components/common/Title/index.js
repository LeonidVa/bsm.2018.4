import React, {Component} from 'react';
import {TitleDiv} from './style.js';

class Comp extends Component {
    render() {
        return <TitleDiv className={`inner ${this.props.className}`}><h1>{this.props.children}</h1></TitleDiv>
    };
}

export default Comp