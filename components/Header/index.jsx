import React, { Component } from 'react';

import Link from 'next/link';
import MenuMob from './components/MenuMob';
import MenuWide from './components/MenuWide';
import ButtonPhone from './components/ButtonPhone';
import Hamburger from './components/Hamburger';
import { ToggleCallPopup } from 'components/modals/Call';

import 'components/index.scss';
import  { HeaderBlock } from './style.js';

import  {
  InnerBlock, 
  HeaderHamburger,
  HeaderLeftDiv,
  HeaderLi,
  HeaderLogoBlock,
  HeaderUl,
  HeaderOrderCall,
  HeaderOrderTel,
  HeaderNavA,
  LogoSpan,
  HeaderNav,
  HeaderRightDiv,
  ButtonPhoneS,
 
} from './style';

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
    const navButtonsDefault = 
    <HeaderUl>
      <HeaderLi>
        <Link href="/price">
          <HeaderNavA>Услуги и цены</HeaderNavA>
        </Link>
      </HeaderLi>
      <HeaderLi>
        <Link href="/contacts">
          <HeaderNavA>Контакты</HeaderNavA>
        </Link>
      </HeaderLi>
    </HeaderUl>;
    const {navButtons = navButtonsDefault, showHamburger = true} = this.props;
    return (
      <React.Fragment>
        <HeaderBlock>
          <InnerBlock>
            <HeaderLeftDiv>
              <Link href="/">
                <HeaderLogoBlock>
                  Be<LogoSpan>Smarter!</LogoSpan>
                </HeaderLogoBlock>
              </Link>
              <HeaderNav>{navButtons}</HeaderNav>
            </HeaderLeftDiv>
            <HeaderRightDiv>
            <ButtonPhoneS>
              <ButtonPhone/>
            </ButtonPhoneS>
                <ToggleCallPopup targetID="call_me_top">
                <HeaderOrderTel>
                  <LogoSpan style={{padding: "1em 0"}}>
                    <HeaderOrderCall>Заказать звонок</HeaderOrderCall>
                  </LogoSpan>
                </HeaderOrderTel>
              </ToggleCallPopup>
            <HeaderHamburger>
              {showHamburger ? <Hamburger
                open={this.state.menuMobileIsOpen || this.state.menuDesktopIsOpen}
                mobileHandler={this.menuMobileToggle.bind(this)}
                desktopHandler={this.menuDesktopToggle.bind(this)}
              /> : ''}
            </HeaderHamburger>
          </HeaderRightDiv>
        </InnerBlock>
      </HeaderBlock>
        {showHamburger ? <MenuMob showMenu={this.state.menuMobileIsOpen}/> : ''}
        {showHamburger ? <MenuWide showMenu={this.state.menuDesktopIsOpen} handler={this.menuDesktopToggle.bind(this)}/> : ''}
      </React.Fragment>
    )
  }
}

export default Header;