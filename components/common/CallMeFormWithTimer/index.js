import React, {Component} from 'react';
import Timer from 'components/common/Timer'

class CallMeFormWithTimer extends Component {

    state = {
        phone: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('позвоните мне на номер ' + this.state.phone + ' по-поводу диссертации')
    }

    render() {
        const {timerSize = 1.6, timerDuration} = this.props;
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
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           name="phone"
                           placeholder="+7 123 456 7890"
                           required=""
                           value={this.state.phone}
                           onChange={(e) => this.setState({phone: e.target.value})}/>
                    <button type="submit">Позвоните мне!</button>
                </form>
            </div>
        )
    }
}

export default CallMeFormWithTimer;