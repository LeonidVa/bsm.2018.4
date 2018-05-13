import React, {Component} from 'react';
import Link from 'next/link';
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"


class BottomHelper extends Component {

    state = {
        modalIsOpen: false,
    };

    closeModal = () => {
        this.setState({modalIsOpen: false})
    };

    render() {
        return (
            <div>
                <section className="block-not-find">
                    <div className="inner">
                        <h2 className="block-not-find__title">Остались вопросы?</h2>
                        <div className="block-not-find__buttons">
                            <ToggleQuestionPopup><a className="block-not-find__button">Задать вопрос</a></ToggleQuestionPopup>
                            <ToggleCallPopup><a className="block-not-find__button to-modal__order-call">Заказать звонок</a></ToggleCallPopup>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BottomHelper
