import React, {Component} from 'react';
import './SaleModal.scss';
import {exitPopupContext} from '../contexts'


class ExitPopup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            isShown: false,
        };
    }

    render() {
        const {className, bonus, message, text} = this.props;
        return (
            <exitPopupContext.Consumer>
                {(context) => {
                    if (context.isShown === false) {
                        console.log('exitpoput not rendering');
                        return null
                    }
                    console.log('exitpoput is rendering');

                    return <div id="modal_sale"
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
                }}
            </exitPopupContext.Consumer>
        )
    }
}

export default ExitPopup

/*
                                                <exitPopupContext.Consumer>
                                                    {(context) => {
                                                        console.log('/components/Header.js', context, this.state);
                                                        let buttonEP = <span onClick={() => {
                                                            context.show()
                                                        }}>show</span>;
                                                        if (context.isShown) {
                                                            buttonEP = <span onClick={() => {
                                                                context.hide()
                                                            }}>hide</span>
                                                        }
                                                        let oncl = () => this.setState({modalIsOpen: true});
                                                        oncl = context.show;
                                                        if (context.isShown) {
                                                            oncl = context.hide;
                                                        }
                                                        return <a className="header__telanckor" onClick={oncl}>+7 495 772 40 90</a>
                                                    }}

                                                </exitPopupContext.Consumer>
*/