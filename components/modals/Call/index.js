import React, {Component, createContext} from 'react';
import './style.scss';
import axios from 'axios';
import Close from '../Close';
import analytics from 'utils/analytics';

const callPopupState = {
    phone: '',
    name: '',
    comment: '',
    question: false,
    isShown: false,
    show: () => {
    },
    hide: () => {
    },
};

const callPopupContext = createContext(callPopupState);


class CallPopup extends Component {

    constructor(props) {
        super(props);
        this.state = callPopupState
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const {name, phone, comment, question} = this.state;
        /*        if (!this.state.verified) {
                    window.alert('Пожалуйста, пройдите каптчу');
                    return
                }*/
        let formtype = 'call';
        if (this.state.question) {
            formtype = 'question'
        }
        let formData = new FormData();
        formData.set('form', question ? 'Вопрос' : 'Заказ обратного звонка');
        formData.set('source', '2018.besmarter.ru');
        formData.set('name', name);
        formData.set('phone', phone);
        formData.set('comment', comment);
        formData.set('verified', true);
        axios({
            method: 'POST',
            url: '/api/form_data',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(function (response) {
            //handle success
            console.log(response);
        }).catch(function (response) {
            //handle error
            console.log(response);
        });

        analytics('Отправка_формы_попап1');

        /*        axios.post('http://localhost:3001/api/form_data', {name, phone, email, theme, worktype: worktype.value, discipline, deadline, size, comment, files, fileName, Extended, verified})
                    .then(res => this.setState({formSended: {bool: true, number: res.data.id, error: false}}))
                    .catch(err => this.setState({formSended: {bool: true, number: '', error: err}}))*/
        return false;
    };

    render() {
        return (
            <callPopupContext.Consumer>
                {(context) => {
                    if (context.isShown === undefined || context.isShown === null || context.isShown === false) {
                        return null
                    }
                    this.state.question = context.question;
                    console.log('call is rendering');
                    return (
                        <div className="modal__order-call"
                             style={{display: "block"}}
                             onClick={() => {
                                 context.hide()
                             }}>
                            <div className="block-form block-form2 modal-form modal__body" onClick={(e) => {
                                e.stopPropagation();
                            }}>
                                <Close onClick={() => { context.hide() }} inverse/>
                                <h2 className="block-form__title">{context.question ? 'Задать вопрос' : 'Заказать звонок'}</h2>
                                <form className="block-form__form" onSubmit={this.handleSubmit}>
                                    <div className="block-form__item">
                                        <label htmlFor="form-name">Имя*</label>
                                        <input type="text"
                                               name=""
                                               id="form-name"
                                               placeholder="Ваше имя"
                                               required
                                               value={this.state.name}
                                               onChange={(e) => this.setState({name: e.target.value})}
                                        />
                                    </div>
                                    <div className="block-form__item">
                                        <label htmlFor="form-phone">Телефон*</label>
                                        <input type="text"
                                               name=""
                                               id="form-phone"
                                               placeholder="Ваш телефон"
                                               required
                                               value={this.state.phone}
                                               onChange={(e) => this.setState({phone: e.target.value})}/>
                                    </div>
                                    <div className="block-form__item textarea" style={{display: context.question ? 'block' : 'none'}}>
                                        <label htmlFor="form-phone">Вопрос</label>
                                        <textarea
                                            type="textarea"
                                            name=""
                                            placeholder="Ваш вопрос"
                                            value={this.state.comment}
                                            onChange={(e) => this.setState({comment: e.target.value})}
                                        />
                                    </div>

                                    <button type="submit" className="block-form__btn">Позвоните мне!</button>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </callPopupContext.Consumer>
        )
    }
}


class ToggleCallPopup extends Component {
    render() {
        return (
            <callPopupContext.Consumer>
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
            </callPopupContext.Consumer>
        )
    }
}


class ToggleQuestionPopup extends Component {
    render() {
        return (
            <callPopupContext.Consumer>
                {(context) => {
                    if (context === undefined || context === null) {
                        return null
                    }
                    let oncl = context.showWithQuestion;
                    if (context.isShown) {
                        oncl = context.hide;
                    }
                    return <div onClick={oncl}>{this.props.children}</div>
                }}
            </callPopupContext.Consumer>
        )
    }
}


export {ToggleCallPopup, ToggleQuestionPopup, callPopupState, callPopupContext}
export default CallPopup
