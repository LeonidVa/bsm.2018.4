import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';

import Link from 'next/link';
import OrderCall from './components/OrderCallModal';
import SaleModal from './components/SaleModal'
import MenuMob from './components/MenuMob'

import OrderCallButton from '../common/OrderCallButton'



import './index.scss';


class Header extends Component{
    
    state = {
        modalIsOpen: false,
        showMenuMob: false,
        saleModalIsOpen: false,
        dontShowSaleModalInThisSession: false
    };

    handleMobMenu = () => {

        this.setState({ showMenuMob: !this.state.showMenuMob })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }
    closeSaleModal = () => {

        this.setState({ saleModalIsOpen: false })
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.showSaleModal && nextProps.showSaleModal !== this.state.saleModalIsOpen && !this.state.dontShowSaleModalInThisSession){
            this.setState({ saleModalIsOpen: true, dontShowSaleModalInThisSession: true})
        }
    }

    render(){
        return(
                <div>
                    <div className="header">
                        <div className="inner">
                            <div className="header__left">
                                
                                    <a className="humburger" onClick={() => this.handleMobMenu()}>
                                        <div className="humburger__line"></div>
                                        <div className="humburger__line"></div>
                                        <div className="humburger__line"></div>
                                    </a>
                                
                                <Link href="/">
                                    <a className="header__logo">
                                        Be<span>Smarter!</span>
                                    </a>
                                </Link>
                                <nav className="nav">
                                    <ul>
                                        <li>
                                            <Link href="/pricing">
                                                <a>Услуги и цены</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>О нас</a>
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
                                    <span className="header__tel">
                                        { isMobile || isTablet ? 
                                            <a className="header__telanckor" href="tel:+1-495-772-4090">+7 495 772 40 90</a>
                                            :
                                            <a className="header__telanckor" onClick={() => this.setState({ modalIsOpen: true })}>+7 495 772 40 90</a>
                                        }
                                    </span>
                                        <OrderCallButton />
                                    </div>
                            </div>
                            <div className="menu-mob__close" 
                                 style={{ display: this.state.showMenuMob ? 'block' : 'none'}}
                                 onClick={()=>this.setState({showMenuMob: false})}>
                                <div className="menu-mob__line"></div>
                                <div className="menu-mob__line"></div>
                            </div>
                    </div>
                    <OrderCall closeModal={this.closeModal} 
                               display={ this.state.modalIsOpen ? 'block' : 'none' }/>

                    <MenuMob showMenu={this.state.showMenuMob}/>

                    <SaleModal  display={this.state.saleModalIsOpen ? 'block' : 'none'}
                                closeSaleModal={this.closeSaleModal} 
                                className="modal-sale1"
                                bonus="10%" 
                                message="поздравляем"
                                text="Напишите номер и мы с вами свяжемся"/>
                </div>
        )
    }
}

export default Header;