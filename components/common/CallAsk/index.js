import React, {Component} from 'react';
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"
import triggerTarget from 'utils/analytics';


class BottomHelper extends Component {

    render() {
        return (
            <div>
                <section className="block-callask">
                    <div className="inner">
                        <h2 className="block-callask__title">Остались вопросы?</h2>
                        <div className="block-callask__buttons">
                            <ToggleQuestionPopup targetID="question"><a className="block-callask__button">Задать вопрос</a></ToggleQuestionPopup>
                            <ToggleCallPopup targetID="call_me_bottom"><a className="block-callask__button">Заказать звонок</a></ToggleCallPopup>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default BottomHelper
