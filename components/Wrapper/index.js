import React, {Component, createContext} from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';


import ExitPopup, {exitPopupContext, exitPopupState} from 'components/modals/ExitPopup'
import CallPopup, {callPopupContext, callPopupState} from 'components/modals/Call'


class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.exitPopupState = exitPopupState;
        this.state.callPopupState = callPopupState;

        this.state.callPopupState.show = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: true, question: false}})
        };
        this.state.callPopupState.showWithQuestion = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: true, question: true}})
        };
        this.state.callPopupState.hide = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: false}})
        };
        this.state.exitPopupState.show = () => {
            this.setState({exitPopupState: {...this.state.exitPopupState, isShown: true}});
        };
        this.state.exitPopupState.hide = () => {
            this.setState({exitPopupState: {...this.state.exitPopupState, isShown: false}});
        };

        if (process.browser) {
            this._data = [];

            // Отслеживаем его движение курсора с целью
            // показать сообщение о скидке если клиент захочет
            // покинуть этот сайт~~, я бы захотел~~
            // TODO Добавить проверку колличества заказов, если есть заказы то не показывать
            this._mouseMoveCallback = this.onMouseMove.bind(this);
            document.addEventListener('mousemove', this._mouseMoveCallback);
        }
    }

    onMouseMove(e) {
        // Процент от высоты окна браузера
        this._data.push({
            y: e.clientY / (window.innerHeight / 100),
            date: Date.now(),
        });

        // Убираем все движения мыши которые старше 2х секунд
        let newData = [];
        let date = Date.now();
        for(let positionInfo of this._data) {
            if (date - positionInfo.date < 2000) {
                newData.push(positionInfo);
            }
        }
        this._data = newData;

        // Убираем лишнее, оставляем только последние 10 положений курсора мыши, если меньше не чего не делаем
        if (this._data.length > 20) {
            this._data.splice(0, 1);
        } else {
            return;
        }

        // Собираем данные о движении мыши строго вверх,
        // если она последний раз двигалась в другую сторону
        // на выходе будет пустой массив
        let upsY = [];
        let prev = null;
        for(let { y } of this._data) {
            if (prev === null) {
                prev = y;
            } else if (prev > y) {
                prev = y;
                upsY.push(y);
            } else {
                upsY = [];
                prev = null;
            }
        }

        // Если недостаточно данных для расчёта сколько прошла мышь,
        // то выходим
        if (upsY.length < 3) {
            return;
        }

        // Просчитываю сколько процентов экрана прошёл курсор мыши
        let first = upsY[0];
        let last = upsY[upsY.length - 1];
        let diff = first - last;

        // Если курсор мыши прошёл больше 50 процентов экрана за
        // 2 секунды и он движется вверх, вероятно пользователь
        // хочет закрыть вкладку или нажать на кнопку меню :)
        //
        // Показываем сообщение о скидке
        if (diff > 50) {
            this.state.exitPopupState.show();
            document.removeEventListener('mousemove', this._mouseMoveCallback);
        }
    }

    static componentDidMount() {
        console.log('Wrapper componentDidMount')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Wrapper getDerivedStateFromProps');
        return nextProps;
    }

    static shouldComponentUpdate() {
        console.log('Wrapper shouldComponentUpdate')
    }

    static componentDidUpdate() {
        console.log('Wrapper componentDidUpdate')
    }

    static componentWillUnmount() {
        console.log('Wrapper componentWillUnmount')
    }

    render() {
        console.log('Wrapper render')
        return (
            <callPopupContext.Provider value={this.state.callPopupState}>
                <exitPopupContext.Provider value={this.state.exitPopupState}>
                    <div>
                        <Head>
                            <title>{this.props.title}</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                            <meta name="description" content={this.props.description}/>
                        </Head>
                        <Header/>
                        {this.props.children}
                        <Footer/>
                        <script dangerouslySetInnerHTML={{__html: `window.recaptchaOptions = {lang: 'ru'}`}}/>
                        <ExitPopup className="modal-sale1"
                                   bonus={<div style={{position: "relative"}}>500<span
                                       style={{
                                           fontSize: "20%",
                                           position: "absolute",
                                           bottom: "0.5em",
                                           right: "-1.7em",
                                       }}>руб.</span></div>}
                                   message={<span style={{marginLeft: "4em", lineHeight: "1.33"}}>Лови бонус при заказе прямо сейчас!</span>}
                                   text="При сумме заказа от 2 000 рублей"
                        />
                        <CallPopup/>
                    </div>
                </exitPopupContext.Provider>
            </callPopupContext.Provider>
        )
    }
}


export default Wrapper;
