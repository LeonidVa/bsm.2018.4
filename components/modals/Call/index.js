import {Component, createContext} from 'react';
import './style.scss';
import Close from '../Close';
import Form from './form'

const callPopupState = {
    question: false,
    isShown: false,
    sent: false,
    show: () => {
    },
    hide: () => {
    }
};

const callPopupContext = createContext(callPopupState);

//
class CallPopup extends Component {

    constructor(props) {
        super(props);
        this.state = callPopupState;
    };

    render() {
        return (
            <callPopupContext.Consumer>
                {(context) => {
                    if (context.isShown === undefined || context.isShown === null || context.isShown === false) {
                        return null
                    }
                    console.log('call is rendering');
                    return (
                        <div className="modal__order-call"
                             style={{display: "block"}}
                             onClick={context.hide}>
                            <div className="block-form block-form2 modal-form modal__body" onClick={(e) => e.stopPropagation()}>
                                <Close onClick={context.hide} inverse/>
                                <div className="block-form__message" style={{display: context.sent ? "block" : "none"}}>
                                    <img style="width:100%" src={require("static/images/fox-circle.svg")} alt=""/>
                                    <br/>
                                    <br/>
                                    <div className="block-form__title">Спасибо!</div>
                                    <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
                                </div>
                                <div className="block-form__message" style={{display: context.sent ? "none" : "block"}}>
                                    <Form
                                      question={context.question}
                                      targetID={context.targetID}
                                      formType={context.question ? 'Вопрос' : 'Заказ обратного звонка'}
                                      onSent={context.onSent}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </callPopupContext.Consumer>
        )
    }
}


class ToggleCallPopup extends Component {
    render() {
        return (
            <callPopupContext.Consumer>
                {(context) => {
                    if (context === undefined || context === null) {
                        return null
                    }
                      let oncl = () => {
                        context.show(this.props.targetID);
                      };
                      if (context.isShown) {
                        oncl = context.hide;
                      }
                    return <div onClick={oncl}>{this.props.children}</div>
                }}
            </callPopupContext.Consumer>
        )
    }
}


class ToggleQuestionPopup extends Component {
    render() {
        return (
            <callPopupContext.Consumer>
                {(context) => {
                    if (context === undefined || context === null) {
                        return null
                    }
                      let oncl = () => {
                        context.show(this.props.targetID);
                      };
                      if (context.isShown) {
                        oncl = context.hide;
                      }
                    return <div onClick={oncl}>{this.props.children}</div>
                }}
            </callPopupContext.Consumer>
        )
    }
}


export {ToggleCallPopup, ToggleQuestionPopup, callPopupState, callPopupContext}
export default CallPopup
