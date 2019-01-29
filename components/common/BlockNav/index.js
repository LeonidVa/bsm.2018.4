import React, {Component} from 'react';
import {
  BlockNavWrapper
}from './style.js'



class BlockNav extends Component {
    render() {
        return (
            <BlockNavWrapper className="block-nav">{this.props.children}</BlockNavWrapper>
        )
    }
}

export default BlockNav;