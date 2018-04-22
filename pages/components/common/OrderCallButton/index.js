import React, { Component } from 'react';
import OrderCall from '../../Header/components/OrderCallModal';

class OrderCallButton extends Component{
    state = {
        modalIsOpen: false,

    };

    closeModal = () => {

        this.setState({ modalIsOpen: false })
    }

    render(){
        return(
            <div>
                <a onClick={() => this.setState({ modalIsOpen: true })}
                    className="header__order-tel to-modal__order-call">Заказать звонок
                </a>
                <OrderCall closeModal={this.closeModal}
                           display={this.state.modalIsOpen ? 'block' : 'none'} />
            </div>
        )
    }
}

export default OrderCallButton