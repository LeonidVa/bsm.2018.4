
import React, { Component } from 'react';
import Timer from 'components/common/Timer';
import Close from 'components/modals/Close';
import PhoneAndSubmit from 'components/common/forms/PhoneAndSubmit';

import './index.scss';

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
              <div className="timer">
                <Timer size={timerSize} duration={timerDuration}/>
              </div>
              {this.props.children}
            </React.Fragment>
          : <div className="block-form-timer__message">{this.props.children}</div>

        const successNotification =
          <div 
            className="block-form__message form_notification"
            style={{display: notifyOpen ? "flex" : "none"}}
          >
            <Close onClick={this.toggleNotify} inverse/>
            <img style={{ width: '100%' }}src={require("static/images/fox-circle.svg")} alt="Fox"/>
            <div className="block-form__title">Спасибо!</div>
            <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
          </div>;

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
                />
            </div>
        );
    }
}

export default FormWithTimer;
