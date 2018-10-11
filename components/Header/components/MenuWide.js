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
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Магистерская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Менеджмент</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Психология</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#" >Дипломная работа</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Бухгалтерский учет</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Менеджемент</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Педагогика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Психология</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Программирование</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Доработка дипломной</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Дипломный проект</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Диплом МВА</a>
                                </li>
                            </ul>
                        </div>
                    </div>




                    <div className="menu-desk__item">
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Кандидатская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Юриспруденция</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Философия</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Медицина</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Докторская</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Медицина</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Педагогика</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Аспирантура</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Соискательство</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Автореферат</a>
                                </li>
                            </ul>
                        </div>
                    </div>





                    <div className="menu-desk__item">
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Курсовая работа</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Архитектура</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Бухгалтерский учет</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Педагогика</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Право</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Ппсихология</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Экономика</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Курсовой проект</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Детали машин</a>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="menu-desk__item">
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Реферат</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Философия</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Отчет по практике</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Производственная</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Преддипломная</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Учебная</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#">Педагогическая</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Контрольная работа</a>
                                </li>
                                <li className="menu-desk__list--item menu-desk__list--item-subheader">
                                    <a href="#">Эссе</a>
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
