import React, {Component} from 'react';
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"
import './index.scss'


class BottomHelper extends Component {

    render() {
        return (
            <div>
                <section className="block-callask">
                    <div className="inner">
                        <div className="block-callask__title">Остались вопросы?</div>
                        <div className="block-callask__title">Мы ответим!</div>
                        <div className="block-callask__buttons">
                            <ToggleQuestionPopup targetID="question"><a className="block-callask__button">Задай вопрос</a></ToggleQuestionPopup>
                            <ToggleCallPopup targetID="call_me_bottom"><a className="block-callask__button">Закажи звонок</a></ToggleCallPopup>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BottomHelper
