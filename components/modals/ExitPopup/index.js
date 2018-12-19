import React, {Component, createContext} from 'react';
import './style.scss';
import Close from "../Close/index";
import PhoneAndSubmit from 'components/common/forms/PhoneAndSubmit';


const exitPopupState = {
    isShown: false,
    sent: false,
    show: () => {
    },
    hide: () => {
    },
    toggle: () => {
    },
};

const exitPopupContext = createContext(exitPopupState);


class ExitPopup extends Component {

    constructor(props) {
        super(props);
        this.state = exitPopupState;
        this.onSent = this.onSent.bind(this);
    }

    onSent() {
        console.log('a popup sees that form was sent');
        this.setState({sent: true});
    }

    render() {
        const {className, bonus, message, text} = this.props;
        return (
            <exitPopupContext.Consumer>
                {(context) => {
                    if (context.isShown === undefined || context.isShown === null || context.isShown === false) {
                        return null
                    }
                    return (
                        <div id="modal_sale"
                             className={`modal-sale ${className}`}
                             style={{display: 'block'}}
                             onClick={() => context.hide()}
                        >
                            <div className={"modal-sale__body modal__body" + (this.state.sent ? " body-white" : "")}
                                 onClick={(e) => e.stopPropagation()}
                            >
                              <Close onClick={() => {
                                context.hide()
                              }}/>
                                <div className="block-form__message form_alert" style={{display: this.state.sent ? "flex" : "none"}}>
                                  <Close onClick={() => {
                                    context.hide()
                                  }} inverse/>
                                  <img style={{ width: '100%' }} src={require("static/images/fox-circle.svg")} alt="Fox"/>
                                  <div className="block-form__title">Спасибо!</div>
                                  <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
                                </div>
                                <div className="block-form__message" style={{display: this.state.sent ? "none" : "block"}}>
                                    <div className="modal-sale__top">
                                        <span className="percent">{bonus}</span>
                                        <span className="top-text">{message}</span>
                                    </div>
                                    <p>{text}</p>
                                    <PhoneAndSubmit
                                        formType="Бонус при заказе 500р"
                                        targetID="sale_500"
                                        placeholder="Ваш телефон"
                                        submitLabel="Хочу получить!"
                                        onSent={this.onSent}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }}
            </exitPopupContext.Consumer>
        )
    }
}


class ToggleExitPopup extends Component {
    render() {
        return (
            <exitPopupContext.Consumer>
                {(context) => {
                    if (context === undefined || context === null) {
                        return null
                    }
                    let oncl = context.show;
                    if (context.isShown) {
                        oncl = context.hide;
                    }
                    return <div onClick={oncl}>{this.props.children}</div>
                }}
            </exitPopupContext.Consumer>
        )
    }
}


export {ToggleExitPopup, exitPopupState, exitPopupContext}


export default ExitPopup
