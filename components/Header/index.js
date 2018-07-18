import React, {Component} from 'react';
import {isMobile, isTablet} from 'react-device-detect';

import Link from 'next/link';
import MenuMob from './components/MenuMob'

import {ToggleCallPopup} from "components/modals/Call"

import './header.scss';
import 'components/index.scss';


class Header extends Component {

    state = {
        showMenuMob: false,
    };

    handleMobMenu = () => {
        this.setState({showMenuMob: !this.state.showMenuMob})
    };



    render() {
        const {showMenuMob} = this.state;
        return (
            <div>
                <div className="header">
                    <div className="inner">
                        <div className="header__left">

                            <Link href="/">
                                <a className="header__logo">
                                    Be<span>Smarter!</span>
                                </a>
                            </Link>
                            <nav className="nav">
                                <ul>
                                    <li>
                                        <Link href="/price">
                                            <a>Услуги и цены</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contacts">
                                            <a>Контакты</a>
                                        </Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="header__right">

                            {isMobile || isTablet ?
                                <a className="header__telanckor" href="tel:+74957724090"><span className="header__tel">+7 495 772 40 90</span></a>
                                :
                                <ToggleCallPopup><a className="header__telanckor"><span className="header__tel">+7 495 772 40 90</span></a></ToggleCallPopup>
                                //<OrderCallButton><a className="header__telanckor">+7 495 772 40 90</a></OrderCallButton>
                            }

                            <ToggleCallPopup><a className="header__order-tel"><span style={{padding: "1em 0"}}>Заказать звонок</span></a></ToggleCallPopup>
                        </div>
                        <div id="nav-icon3"
                             className={`humburger ${showMenuMob ? 'open' : ''}`}
                             onClick={() => this.handleMobMenu()}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
                <MenuMob showMenu={this.state.showMenuMob}/>
            </div>
        )
    }
}

export default Header;
