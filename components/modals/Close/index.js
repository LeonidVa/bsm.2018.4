import { Component } from 'react';
import{ СloseDivBlock }from "./style.js"

class Close extends Component {
    render() {
        return <СloseDivBlock name="close" isClose = { this.props.inverse ?  true : false} onClick={ this.props.onClick }/>;
    }
}

export default Close;

