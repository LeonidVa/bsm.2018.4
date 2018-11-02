import {Component} from 'react';
import Timer from 'components/common/Timer';
import PhoneAndSubmit from 'components/common/forms/PhoneAndSubmit';
import './index.scss'
import Close from "../../../modals/Close";


class FormWithTimer extends Component {
    state = {
      notifyOpen: false
    };

    toggleNotify = () => this.setState(state => ({ notifyOpen: !state.notifyOpen}));

    closeNotifyAfterTimeOut = () => {
      setTimeout(() => this.setState({ notifyOpen: false }), 15000);
    };

    render() {
      const { notifyOpen } = this.state;

        const {timerSize = 1.6, timerDuration, buttonText = "Позвоните мне!"} = this.props;
        let abc = <div className="block-form-timer__message">{this.props.children}</div>;
        if (timerDuration !== undefined && timerDuration !== null && Number(timerDuration) > 0) {
            abc = <div className="block-form-timer__timer">
                <div className="timer">
                    <Timer size={timerSize} duration={timerDuration}/>
                </div>
                {this.props.children}
            </div>;
        }

        const successNotification =
          <div className="block-form__message form_notification"
               style={{display: notifyOpen ? "flex" : "none"}}
          >
            <Close onClick={this.toggleNotify} inverse/>
            <img width="100%" src={require("static/images/fox-logo.png")}/>
            <h2 className="block-form__title">Спасибо!</h2>
            <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
          </div>;

        return (
            <div>
              {successNotification}
                {abc}
                <PhoneAndSubmit
                    toggleNotify={this.toggleNotify}
                    closeNotifyAfterTimeOut={this.closeNotifyAfterTimeOut}
                    formType={this.props.formType}
                    targetID={this.props.targetID}
                    placeholder="+7 123 456 7890"
                    submitLabel={buttonText}
                />
            </div>
        )
    }
}

export default FormWithTimer;
