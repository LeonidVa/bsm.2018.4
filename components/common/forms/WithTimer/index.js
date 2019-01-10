
import React, { Component } from 'react';
import Timer from 'components/common/Timer';
import Close from 'components/modals/Close';
import PhoneAndSubmit from 'components/common/forms/PhoneAndSubmit';
import styled from 'styled-components'
import './index.scss';

const FormTimer = styled.div`
  @media (max-width: 660px) {
    display: inline-block;
  }
`;

const BlockFormTimerMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  width: 14.9em;
  margin-bottom: .875em;
  @media (max-width: 660px) {
    display: block;
  }
`;

const BlockFormMessage = styled.div`
  text-align: center;
  img { 
    width: 7em; 
    margin-left: 41px;
  }
  p {  
    font-size: 1rem; 
    margin-bottom: 7px;
  }
`;

const Notification = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4A4A4A;
  border: 2px solid #d84315;
`;

const BlockFormTitle = styled.div`
  color: #f4511e;
  font-size: 1em;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  line-height: 1.19;
  text-align: center;
  margin-bottom: .625em;
  letter-spacing: -1px;
`;

const FormP = styled.p`
  font-size: .688em;
  line-height: normal;
  width: 100%;
`;

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
                  />
            </div>
        );
    }
}

export default FormWithTimer;
