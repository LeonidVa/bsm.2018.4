import React, {Component} from 'react';
import {isMobile, isTablet} from 'react-device-detect';

import Link from 'next/link';
import MenuMob from './components/MenuMob'

import {ToggleCallPopup} from "components/modals/Call"

import './header.scss';
import 'components/index.scss';

import triggerTarget from 'utils/analytics';


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
                                <a className="header__telanckor" href="tel:+74957724090" onClick={()=>{triggerTarget("click_phone"); return true;}}><span className="header__tel">+7 495 772 40 90</span></a>
                                :
                                <ToggleCallPopup targetID="call_me_top"><a className="header__telanckor"><span className="header__tel">+7 495 772 40 90</span></a></ToggleCallPopup>
                                //<OrderCallButton><a className="header__telanckor">+7 495 772 40 90</a></OrderCallButton>
                            }

                            <ToggleCallPopup targetID="call_me_top"><a className="header__order-tel"><span style={{padding: "1em 0"}}><span className="header__order-call">Заказать звонок</span></span></a></ToggleCallPopup>
                            
                            <a className="humburger-desk">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
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

                <div className="menu-desk"> 
                    <div className="inner">
                        <div className="menu-desk__item">
                            <span className="menu-desk__title">Flights</span>
                            <div className="menu-desk__lists">
                                <ul className="menu-desk__list">
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Departures</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Arrivals</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Transfers</a>
                                    </li>
                                </ul>
                            </div>

                            <span className="menu-desk__title">Things to do at Schiphol</span>
                            <div className="menu-desk__lists">
                                <ul className="menu-desk__list">
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Shop</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Eat & drink</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Relax & enjoy</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Services</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu-desk__item">
                            <span className="menu-desk__title">Check-in</span>
                            <div className="menu-desk__lists">
                                <ul className="menu-desk__list">
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Ways to check in</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Baggage rules and checks</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">How busy is Schiphol</a>
                                    </li>
                                </ul>
                            </div>

                            <span className="menu-desk__title">Schiphol parking</span>
                            <div className="menu-desk__lists">
                                <ul className="menu-desk__list">
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Parking at Schiphol</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Short term parking</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Long term parking</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Affiliate programme Parking</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu-desk__item">
                            <span className="menu-desk__title">All Schiphol websites</span>
                            <div className="menu-desk__lists">
                                <ul className="menu-desk__list">
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Royal Schiphol Group</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Careers at Schiphol</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Work at Schiphol</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Advertise at Schiphol</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Real Estate</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Cargo</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Company Directory</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Route Development</a>
                                    </li>
                                </ul>
                                <ul className="menu-desk__list">
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Travel professionals</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Airport Utilities</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Operations</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">You and Schiphol</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Projects at Schiphol</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Schiphol Telematics</a>
                                    </li>
                                    <li className="menu-desk__list--item">
                                        <a href="#" className="menu-desk__list--link">Developer center</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <MenuMob showMenu={this.state.showMenuMob}/>
            </div>
        )
    }
}

export default Header;

