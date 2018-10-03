import React, {Component} from 'react';
import {isMobile, isTablet} from 'react-device-detect';

import Link from 'next/link';
import MenuMob from './components/MenuMob'
import MenuWide from './components/MenuWide'

import {ToggleCallPopup} from "components/modals/Call"

import './header.scss';
import 'components/index.scss';

import triggerTarget from 'utils/analytics';


class Header extends Component {

    state = {
        showMenuMob: false,
        showMenuWide: false,
    };

    handleMobMenu = () => {
        console.log('handleMobMenu call');
        // detect device and show appropriate menu
        if (isMobile) {
            this.setState({showMenuWide: false, showMenuMob: !this.state.showMenuMob});
        } else {
            this.setState({showMenuMob: false, showMenuWide: !this.state.showMenuWide})
        }
    };


    render() {
        const {showMenuMob = false, showMenuWide = false} = this.state;
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

                            {isMobile ?
                                <a className="header__telanckor" href="tel:+74957724090" onClick={() => {
                                    triggerTarget("click_phone");
                                    return true;
                                }}><span className="header__tel">+7 495 772 40 90</span></a>
                                :
                                <ToggleCallPopup targetID="call_me_top"><a className="header__telanckor"><span className="header__tel">+7 495 772 40 90</span></a></ToggleCallPopup>
                                //<OrderCallButton><a className="header__telanckor">+7 495 772 40 90</a></OrderCallButton>
                            }

                            <ToggleCallPopup targetID="call_me_top"><a className="header__order-tel"><span style={{padding: "1em 0"}}><span className="header__order-call">Заказать звонок</span></span></a></ToggleCallPopup>
                            <div id="nav-icon3"
                                 className={`humburger ${showMenuMob || showMenuWide ? 'open' : ''}`}
                                 onClick={() => this.handleMobMenu()}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                    </div>

                </div>

                <MenuMob showMenu={this.state.showMenuMob}/>
                <MenuWide showMenu={this.state.showMenuWide}/>
            </div>
        )
    }
}

export default Header;

