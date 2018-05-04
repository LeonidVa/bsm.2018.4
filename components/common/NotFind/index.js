import React, { Component } from 'react';
import Link from 'next/link';


import OrderCall from 'components/Header/components/OrderCallModal';


class Header extends Component {

    state = {
        modalIsOpen: false,
    };

    closeModal = () => {

        this.setState({ modalIsOpen: false })
    }

    render() {
        return (
            <div>
                <OrderCall closeModal={this.closeModal}
                    display={this.state.modalIsOpen ? 'block' : 'none'} />
                <section className="block-not-find">
                    <div className="inner">
                        <h2 className="block-not-find__title">Не нашли что искали?</h2>
                        <div className="block-not-find__buttons">
                            <Link href="#" >
                                <a className="block-not-find__button">Задать вопрос</a>
                            </Link>
                   
                            <a className="block-not-find__button to-modal__order-call"
                                onClick={() => this.setState({ modalIsOpen: true })} >

                                Заказать звонок
                            </a>
                   
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header
