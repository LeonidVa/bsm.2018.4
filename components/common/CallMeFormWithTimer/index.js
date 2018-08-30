import React, {Component} from 'react';
import Timer from 'components/common/Timer';
import analytics from 'utils/analytics';
import axios from 'axios/index';

class CallMeFormWithTimer extends Component {

    state = {
        phone: '',
        msg:null, // можно вывести сообщение при желании
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('позвоните мне на номер ' + this.state.phone + ' по-поводу диссертации')
        const {phone} = this.state;

        const formData = new FormData();
        formData.set('form', 'Успешная Защита');
        formData.set('phone', phone);
        axios({
            method: 'POST',
            url: '/api/form_data',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
            .then(function (response) {
                const {
                    error=true, id, msg,
                } = response;
                if ( !error ) {
                    this.setState({msg});
                }
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        const { targetID = "form submit" } = this.props;
        analytics(targetID);
    }

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
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           name="phone"
                           placeholder="+7 123 456 7890"
                           required=""
                           value={this.state.phone}
                           onChange={(e) => this.setState({phone: e.target.value})}/>
                    <button type="submit">{buttonText}</button>
                </form>
            </div>
        )
    }
}

export default CallMeFormWithTimer;
