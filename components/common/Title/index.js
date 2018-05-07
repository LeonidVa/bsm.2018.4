import React, {Component} from 'react';

class Title extends Component {
    render() {
        return <section className="main-title">
            <div className="inner">
                <h1>{this.props.children}</h1>
            </div>
        </section>
    };
}

export default Title