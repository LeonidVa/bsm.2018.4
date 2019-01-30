import React, {Component, Fragment} from 'react';
import Head from 'next/head';
import { connect as reduxConnect } from 'react-redux'
import Header from 'components/Header';
import Footer from 'components/Footer';

import ExitPopup, {exitPopupContext, exitPopupState} from 'components/modals/ExitPopup'
import CallPopup, {callPopupContext, callPopupState} from 'components/modals/Call'
import ErrorModal from 'components/modals/Error'
import getConfig from 'next/config';
import stat from 'utils/analytics'
import { sendForm } from '@redux/data/form';
import { isStringEmpty } from '@helpers/isStringEmpty';

import  { GlobalStyle } from './style';

const {publicRuntimeConfig = {}} = getConfig();

class Wrapper extends Component {
    static getInitialProps({req}) {
        if (typeof window === 'undefined' || window.location === undefined || window.location === null) {
            return;
        }
        const url = window.location.href;
        stat.triggerTarget.pageView(url);
    }

    onSendFormAction(){};

    constructor(props) {
        super(props);
        this.state = {};
        this.state.yaID = 0;
        if (publicRuntimeConfig.production) {
            this.state.yaID = publicRuntimeConfig.analytics.yaID;
        }
        this.state.exitPopupState = exitPopupState;
        this.state.callPopupState = callPopupState;

        this.state.callPopupState.show = targetID => {
            this.setState({callPopupState: {
                ...this.state.callPopupState,
                isShown: true,
                question: false,
                targetID
            }})
        };

        this.onSendFormAction = this.props.onSendFormAction;

        this.state.callPopupState.showWithQuestion = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: true, question: true}})
        };
        this.state.callPopupState.hide = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: false, sent: false}})
        };
        this.state.callPopupState.onSent = () => {
            this.setState({callPopupState: {...this.state.callPopupState, sent: true}})
        };
        this.state.callPopupState.onSentWithError = () => {
            this.setState({ callPopupState: { ...this.state.callPopupState, sent: true, error: true } })
        };

        this.state.exitPopupState.show = () => {
            this.setState({exitPopupState: {...this.state.exitPopupState, isShown: true}});
        };

        this.state.exitPopupState.hide = () => {
            this.setState({exitPopupState: {
                ...this.state.exitPopupState,
                isShown: false,
                targetID: null
              }});
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

    onSendForm () {
      if (isStringEmpty(this.props.form.email) || isStringEmpty(this.props.form.phone)) {
        this.onSendFormAction(this.props.form);
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
        for (let positionInfo of this._data) {
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
        for (let {y} of this._data) {
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
        if (diff > 60) {
            this.state.exitPopupState.show();
            document.removeEventListener('mousemove', this._mouseMoveCallback);
            this.onSendForm();
        }
    }

    componentDidMount () {
      window.addEventListener('beforeunload', () => {
        this.onSendForm()
      });
    }

    componentWillUnmount () {
      window.removeEventListener('beforeunload', () => {
        this.onSendForm()
      });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps;
    }

    render() {
      return (
        <callPopupContext.Provider value={this.state.callPopupState}>
          <exitPopupContext.Provider value={this.state.exitPopupState}>
            <GlobalStyle />
            <Head>
              <title>{this.props.title}</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
              <meta name="description" content={this.props.description}/>
              <link rel="icon" href={require('static/favicon.ico')} type="image/x-icon"/>
            </Head>
            <Header navButtons={this.props.headerNavButtons} showHamburger={this.props.showHamburger}/>
            {this.props.children}
            <Footer navButtons={this.props.footerNavButtons} isSiteMapShown={this.props.isSiteMapShown} />
            <script dangerouslySetInnerHTML={{__html: `window.recaptchaOptions = {lang: 'ru'}`}}/>
            <ExitPopup className="modal-sale1"
              bonus={
                <div style={{position: "relative"}}>500
                  <span
                    style={{
                      fontSize: "20%",
                      position: "absolute",
                      bottom: "0.5em",
                      right: "-1.7em",
                    }}>руб.
                  </span>
                </div>
              }
              message={<span style={{marginLeft: "3em", lineHeight: "1.33", textAlign: "left"}}>Лови бонус при заказе прямо сейчас!</span>}
              text="При сумме заказа от 2 000 рублей"
            />
            <CallPopup/>
            <ErrorModal isShown={this.props.modal} />
          </exitPopupContext.Provider>
        </callPopupContext.Provider>
      )
    }
}

const mapStateToProps = ({data: { form }, ui: { modal }}) => {
  return {
    form,
    modal,
  }
};
const mapDispatchToProps = {
  onSendFormAction: data => sendForm(data),
};

export function connect(Component) {
  return reduxConnect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}

export default connect(Wrapper);
