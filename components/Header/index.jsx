import React, {Component} from 'react';

import Link from 'next/link';
import MenuMob from './components/MenuMob'
import MenuWide from './components/MenuWide'
import ButtonPhone from './components/ButtonPhone'

import {ToggleCallPopup} from "components/modals/Call"

import './header.scss';
import 'components/index.scss';

import triggerTarget from 'utils/analytics';
import Hamburger from "./components/Hamburger";

class Header extends Component {
  state = {
    menuMobileIsOpen: false,
    menuDesktopIsOpen: false,
  };

  menuMobileToggle() {
    console.log('calling menuMobileToggle()')
    this.setState({
      menuMobileIsOpen: !this.state.menuMobileIsOpen,
      menuDesktopIsOpen: false,
    });
  }

  menuDesktopToggle() {
    console.log('calling menuDesktopToggle()')
    this.setState({
      menuMobileIsOpen: false,
      menuDesktopIsOpen: !this.state.menuDesktopIsOpen,
    });
  }

  render() {
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
              <ButtonPhone/>
              <ToggleCallPopup targetID="call_me_top">
                <a className="header__order-tel">
                  <span style={{padding: "1em 0"}}>
                    <span className="header__order-call">Заказать звонок</span>
                  </span>
                </a>
              </ToggleCallPopup>
              <Hamburger
                open={this.state.menuMobileIsOpen || this.state.menuDesktopIsOpen}
                mobileHandler={this.menuMobileToggle.bind(this)}
                desktopHandler={this.menuDesktopToggle.bind(this)}
              />
            </div>
          </div>
        </div>
        <MenuMob showMenu={this.state.menuMobileIsOpen}/>
        <MenuWide showMenu={this.state.menuDesktopIsOpen} handler={this.menuDesktopToggle.bind(this)}/>
      </div>
    )
  }
}

export default Header;

