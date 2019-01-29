import React, { Component } from 'react';
import Timer from 'components/common/Timer/index.js';
import Close from 'components/modals/Close';
import PhoneAndSubmit from 'components/common/forms/PhoneAndSubmit';
import {
  FormTimer,
  BlockFormTimerMessage,
  BlockFormMessage,
  Notification,
  BlockFormTitle,
  FormP
} from "./style.js"

class FormWithTimer extends Component {
    state = {
      notifyOpen: false,
    };

    toggleNotify = () => this.setState(state => ({ notifyOpen: !state.notifyOpen}));

    closeNotifyAfterTimeOut = () => {
      setTimeout(() => this.setState({ notifyOpen: false }), 15000);
    };

    render() {
      const { notifyOpen } = this.state;

        const {timerSize = 1.6, timerDuration, buttonText = 'Позвоните мне!' } = this.props;

        const abc = timerDuration !== undefined && timerDuration !== null && Number(timerDuration) > 0
          ? <React.Fragment>
              <FormTimer className="timer">
                <Timer size={timerSize} duration={timerDuration}/>
              </FormTimer>
              {this.props.children}
            </React.Fragment>
          : <BlockFormTimerMessage className="block-form-timer__message">{this.props.children}</BlockFormTimerMessage>

        const successNotification =
        
        <Notification>
          
          <BlockFormMessage 
            className="block-form__message form_notification"
            style={{display: notifyOpen ? "flex" : "none"}}
          >
            <Close onClick={this.toggleNotify} inverse/>
            <img style={{ width: '100%' }}src={require("static/images/fox-circle.svg")} alt="Fox"/>
            <BlockFormTitle className="block-form__title">Спасибо!</BlockFormTitle>
            <FormP>Мы получили Ваше сообщение и скоро свяжемся с Вами!</FormP>
          </BlockFormMessage>
          
          </Notification>;
          
        return (
            <div>
              {successNotification}
              {abc}
              
                <PhoneAndSubmit
                  closeNotifyAfterTimeOut={this.closeNotifyAfterTimeOut}
                  formType={this.props.formType}
                  targetID={this.props.targetID}
                  placeholder="+7 123 456 7890"
                  submitLabel={buttonText}
                  formfontsize= "1em"
                  inputfontsize= "1rem"
                  inputmarginright= "3em"
                  inputwidth="14rem"
                  />
            </div>
        );
    }
}

export default FormWithTimer;
