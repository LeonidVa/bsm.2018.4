import React, {Component} from 'react';
import Link from 'next/link'

import './MenuWide.scss';

class MenuWide extends Component {

    state = {
        showMenu: false
    };

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.showMenu !== this.state.showMenu) {
            this.setState({showMenu: nextProps.showMenu})
        }
    };

    render() {
        return (
            <div className={"menu-desk " + ( this.state.showMenu ? "open" : "")} onMouseLeave={this.props.handler}>
                <div className="inner">
                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Диплом</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Дипломная работа</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Бухгалтерский учет</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Менеджемент</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Педагогика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Психология</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Программирование</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Доработка дипломной</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Дипломный проект</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Диплом МВА</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Диссертация</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Магистерская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Менеджмент</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Психология</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Аспирантура</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Соискательство</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Автореферат</a>
                                </li>
                            </ul>
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Кандидатская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Философия</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Медицина</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Докторская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Медицина</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Педагогика</a>
                                </li>
                            </ul>
                        </div>
                    </div>




                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Курсовая</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Курсовая работа</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Архитектура</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Бухгалтерский учет</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Педагогика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Право</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Ппсихология</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link--black">Курсовой проект</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Детали машин</a>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Реферат</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Философия</a>
                                </li>
                                <span className="menu-desk__title">Отчет по практике</span>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Производственная</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Преддипломная</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Учебная</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Педагогическая</a>
                                </li>
                                <span className="menu-desk__title">Контрольная работа</span>
                                <span className="menu-desk__title">Эссе</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default MenuWide
