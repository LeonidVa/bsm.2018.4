import React, {Component, createContext} from 'react';
import './style.scss';
import axios from 'axios';

const exitPopupState = {
    formtype: 'exitpopup',
    phone: '',
    name: '',
    comment: '',
    verified: true,
    isShown: false,
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

        this.state = exitPopupState
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {formtype, name, phone, comment, verified} = this.state;
/*        if (!this.state.verified) {
            window.alert('Пожалуйста, пройдите каптчу');
            return
        }*/
        let formData = new FormData();
        formData.set('formtype', formtype);
        formData.set('name', name);
        formData.set('phone', phone);
        formData.set('comment', comment);
        formData.set('verified', verified);
        axios({
            method: 'POST',
            url: 'http://localhost:3001/api/form_data',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            //handle success
            console.log(response);
        }).catch(function (response) {
            //handle error
            console.log(response);
        });


        /*        axios.post('http://localhost:3001/api/form_data', {name, phone, email, theme, worktype: worktype.value, discipline, deadline, size, comment, files, fileName, Extended, verified})
                    .then(res => this.setState({formSended: {bool: true, number: res.data.id, error: false}}))
                    .catch(err => this.setState({formSended: {bool: true, number: '', error: err}}))*/
        return false;
    };

    render() {
        const {className, bonus, message, text} = this.props;
        return (
            <exitPopupContext.Consumer>
                {(context) => {
                    if (context.isShown === undefined || context.isShown === null || context.isShown === false) {
                        console.log('exitpoput not rendering');
                        return null
                    }
                    console.log('exitpoput is rendering');
                    return (
                        <div id="modal_sale"
                             className={`modal-sale ${className}`}
                             style={{display: 'block'}}
                             onClick={() => {
                                 context.hide()
                             }}
                        >
                            <div className="modal-sale__body"
                                 onClick={(e) => {
                                     e.stopPropagation();
                                 }}
                                //style={{backgroundImage: 'url(' + require('static/images/modal/1.jpg') + ')'}}
                            >
                                <div className="modal-sale__top">
                                    <span className="percent">{bonus}</span>
                                    <span className="top-text">{message}</span>
                                </div>
                                <p>{text}</p>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text"
                                           name=""
                                           id="form-phone"
                                           placeholder="Ваш телефон"
                                           required
                                           value={this.state.phone}
                                           onChange={(e) => this.setState({phone: e.target.value})}
                                    />
                                    <button type="submit">Хочу получить!</button>
                                </form>
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
                    console.log('toggleCallPopup callPopupContext', context, this.state);
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