import { Component } from 'react';
import './style.scss';

class Close extends Component {
    render() {
        return <div className={ 'modal__close' + (this.props.inverse ? ' modal__close--inverse' : '') } onClick={ this.props.onClick }/>;
    }
}

export default Close;

