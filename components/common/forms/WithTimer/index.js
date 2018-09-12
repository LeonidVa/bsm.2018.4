import {Component} from 'react';
import Timer from 'components/common/Timer';
import PhoneAndSubmit from 'components/common/forms/PhoneAndSubmit';
import './index.scss'


class FormWithTimer extends Component {

    render() {
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
        return (
            <div>
                {abc}
                <PhoneAndSubmit
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
