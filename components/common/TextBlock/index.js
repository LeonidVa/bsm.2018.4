import React, {Component} from 'react';
import {BlockText} from "./style.js"

class TextBlock extends Component{
    render() {
        return (<BlockText>{this.props.children}</BlockText>);
    }
}

export default TextBlock