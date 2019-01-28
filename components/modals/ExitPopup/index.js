import React, {Component, createContext} from 'react';

import Close from "../Close/index";
import PhoneAndSubmit from 'components/common/forms/PhoneAndSubmit';
import styled from 'styled-components';

const ModalSale = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  top: 0;
  left: 0;
  font-size: 1em;
  z-index: 4;
  font-family: "Ubuntu-Regular", sans-serif;
`;

const FormAlert = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4A4A4A;
`;

const BlockFormTitle = styled.div`
  font-size: 2em;
`;

const ModalSaleTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .4em;
  display: flex;
         justify-content: space-between;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        align-items: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        margin-bottom: .4em;
        span {
            display: block;
            color: #fff;
            &.percent {
                font-size: 9em;
                margin-right: 2px;
            }
            &.top-text {
                font-size: 1.5em;
            }
        }
`;

const Percent = styled.span`
  text-align: center;
`;

const ModalSaleBody=styled.div`
position: relative;
  width: 34.18em;
  max-width: 100%;
  left: 50%;
  top: 50%;
  margin-left: -17.09em;
  transform: translateY(-50%);
  padding: 1.5em 2.18em 2.5em;
  background-color: #FF8A65;
  background-size: cover;
  background-position: 50% 0%;
  font-size: 1em;
  @media (max-width: 550px) {
    width: 100%;
    left: 0;
    margin-left: 0;
    font-size: .8em;
  }
  @media (max-width: 420px) {
    font-size: .7em;
  }
  @media (max-width: 370px) {
    font-size: .6em;
  }
`;

const FormWrap = styled.form`
 display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        justify-content: space-between;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        align-items: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        font-size: 2em;
        width: 14.9em;
        @media (max-width: 545px) {
            width: 100%;
        }
        input {
            font-size: .469em;
            width: 14.73em;
            height: 3em;
            padding: 0 .67em;
            color: #4a4a4a;
            border: none;
            &:focus {
                border: 1px solid #f4511e;
            }
        }
        button {
            font-size: .56em;
            width: 12.28em;
            height: 2.78em;
            color: #fff;
            border: none;
            background-color: #f4511e;
            cursor: pointer;
            transition: all .4s;
            &:hover {
                background-color: #922d0e;
            }
        }
`;

const P = styled.p`
  text-align: center;
`;

const TopText = styled.span`
  font-size: 1.5em;
`;

const PText = styled.p`
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: .5em;
`;

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
                        <ModalSale id="modal_sale"
                             className={`modal-sale ${className}`}
                             style={{display: 'block'}}
                             onClick={() => context.hide()}
                        >
                            <ModalSaleBody className={"modal-sale__body modal__body" + (this.state.sent ? " body-white" : "")}
                                 onClick={(e) => e.stopPropagation()}
                            >
                              <Close onClick={() => {
                                context.hide()
                              }}/>
                                <FormAlert className="block-form__message form_alert" style={{display: this.state.sent ? "flex" : "none"}}>
                                  <Close onClick={() => {
                                    context.hide()
                                  }} inverse/>
                                  <img style={{ width: '100%' }} src={require("static/images/fox-circle.svg")} alt="Fox"/>
                                  <BlockFormTitle className="block-form__title">Спасибо!</BlockFormTitle>
                                  <P>Мы получили Ваше сообщение и скоро свяжемся с Вами!</P>
                                </FormAlert>
                                <div className="block-form__message" style={{display: this.state.sent ? "none" : "block"}}>
                                    <ModalSaleTop className="modal-sale__top">
                                        <Percent className="percent">{bonus}</Percent>
                                        <TopText className="top-text">{message}</TopText>
                                    </ModalSaleTop>
                                    <PText>{text}</PText>
                                    <FormWrap>
                                    <PhoneAndSubmit
                                        formType="Бонус при заказе 500р"
                                        targetID="sale_500"
                                        placeholder="Ваш телефон"
                                        submitLabel="Хочу получить!"
                                        onSent={this.onSent}
                                    />
</FormWrap>
                                </div>
                            </ModalSaleBody>
                        </ModalSale>
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
