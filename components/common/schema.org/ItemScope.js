import {Component} from 'react';

class ItemScope extends Component {

    render() {
        return (
            <span itemScope itemType={this.props.type} style={{visibility: "hidden", width: "0", height: "0"}}>
            {this.props.children}
        </span>
        )
    }

}

export default ItemScope;