import React, {Component, createContext} from 'react';
import './style.scss';

const callPopupState = {
    phone: '',
    name: '',
    question: '',
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

    render() {
        return (
            <callPopupContext.Consumer>
                {(context) => {
                    if (context.isShown === undefined || context.isShown === null || context.isShown === false) {
                        console.log('call not rendering');
                        return null
                    }
                    console.log('call is rendering');
                    return (
                        <div className="modal__order-call"
                             style={{display: "block"}}
                             onClick={() => {
                                 context.hide()
                             }}>
                            <div className="block-form block-form2 modal-form" onClick={(e) => {
                                e.stopPropagation();
                            }}>

                                <h2 className="block-form__title">{context.question ? 'Задать вопрос' : 'Заказать звонок'}</h2>
                                <form className="block-form__form" onSubmit={this.handleForm}>
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
                                    {context.question ? (
                                        <div className="block-form__item">
                                            <label htmlFor="form-phone">Вопрос</label>
                                            <textarea
                                                type="textarea"
                                                name="comment"
                                                placeholder="Ваш вопрос"
                                                value={this.state.question}
                                                onChange={(e) => this.setState({question: e.target.value})}
                                            />
                                        </div>
                                    ) : ''}
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
            </callPopupContext.Consumer>
        )
    }
}


class ToggleQuestionPopup extends Component {
    render() {
        return (
            <callPopupContext.Consumer>
                {(context) => {
                    console.log('toggleCallPopup callPopupContext', context, this.state);
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