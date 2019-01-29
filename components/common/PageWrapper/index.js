import React, {Component} from 'react';
import {PageWrapper} from "./style.js"

class Comp extends Component {

    render() {
        return (<PageWrapper className={`wrapper ${this.props.className}`}>{this.props.children}</PageWrapper>)
    }

}

export default Comp;