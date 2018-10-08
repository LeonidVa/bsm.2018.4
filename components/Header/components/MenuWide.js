import React, {Component} from 'react';
import Link from 'next/link'

import './MenuWide.scss';

class MenuWide extends Component {

    state = {
        showMenu: false
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.showMenu !== this.state.showMenu) {
            this.setState({showMenu: nextProps.showMenu})
        }
    }

    render() {
        return (
            <div className={"menu-desk " + ( this.state.showMenu ? "open" : "")}>
                <div className="inner">
                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Диплом</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Дипломная работа</a>
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
                                    <a href="#" className="menu-desk__list--link">Доработка дипломной работы</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Дипломный проект</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Диплом МВА</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Диссертация</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Кандидатская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Докторская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Медицина</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Педагогика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Магистерская</a>
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
                            </ul>
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Медицина</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Философия</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Соискательство</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Аспирантура</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Как защитить диссертацию</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Редактирование диссертации</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Автореферат для диссертации</a>
                                </li>
                            </ul>
                        </div>
                    </div>




                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Курсовая</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Курсовая работа</a>
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
                                <span className="menu-desk__title">Курсовой проект</span>
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
                                <span className="menu-desk__title">Практика</span>
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
                                <span className="menu-desk__title">Контрольная</span>
                                <li className="menu-desk__list--item">
                                <a href="#" className="menu-desk__list--link">Контрольная работа</a></li>
                                <li className="menu-desk__list--item">
                                <a href="#" className="menu-desk__list--link">Эссе</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default MenuWide
