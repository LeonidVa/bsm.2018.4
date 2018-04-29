import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';

import Link from 'next/link';
import OrderCall from './components/OrderCallModal';
import SaleModal from './components/SaleModal'
import MenuMob from './components/MenuMob'

import OrderCallButton from '../common/OrderCallButton'



import './header.scss';
import '../../index.scss';


class Header extends Component{
    
    state = {
        modalIsOpen: false,
        showMenuMob: false,
        saleModalIsOpen: false
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
        if (nextProps.showSaleModal && nextProps.showSaleModal !== this.state.saleModalIsOpen){
            this.setState({ saleModalIsOpen: true })
        }
    }

    

    render(){
        const { showMenuMob } = this.state;
        return(
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