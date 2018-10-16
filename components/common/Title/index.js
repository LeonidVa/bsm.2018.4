import React, {Component} from 'react';
import "./Title.scss"

class Title extends Component {
    render() {
        return <div className="inner"><h1>{this.props.children}</h1></div>
    };
}

export default Title