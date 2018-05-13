import React, {Component, createContext} from 'react';
import './style.scss';

const exitPopupState = {
    phone: '',
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
                            <div className="modal-sale__body" onClick={(e) => {
                                e.stopPropagation();
                            }}>
                                <div className="modal-sale__top">
                                    <span className="percent">{bonus}</span>
                                    <span className="top-text">{message}</span>
                                </div>
                                <p>{text}</p>
                                <form>
                                    <input type="text"
                                           name=""
                                           id="form-phone"
                                           placeholder="Ваш телефон"
                                           required
                                           value={this.state.phone}
                                           onChange={(e) => this.setState({phone: e.target.value})}
                                    />
                                    <button type="submit">Заказать звонок</button>
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