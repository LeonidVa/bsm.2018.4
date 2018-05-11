import React, {Component} from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ExitPopup from 'components/modals/ExitPopup'

import {exitPopupContext} from 'components/modals/contexts'
const lastExitSalePopupWas = 'LKjyGTFDd';


class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.exitPopupState = {
            phone: '',
            isShown: false,
            show: () => {
                if (process.browser) {
                    const lastWasShown = window.localStorage.getItem(lastExitSalePopupWas);
                    const now = new Date().getTime();
                    const shouldShow = !(lastWasShown !== null && (Number(lastWasShown) + 120000) > now);
                    if (!shouldShow) {
                        return null;
                    }
                    window.localStorage.setItem(lastExitSalePopupWas, now);
                    this.setState({exitPopupState: {...this.state.exitPopupState, isShown: true}})
                }
            },
            hide: () => {
                this.setState({exitPopupState: {...this.state.exitPopupState, isShown: false}})
            },
            toggle: () => {
            },
        }
    }

    render() {
        return (
            <exitPopupContext.Provider value={this.state.exitPopupState}>
                <div onMouseLeave={this.state.exitPopupState.show}>
                    <Head>
                        <title>BeSmarter! - {this.props.title}</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                    </Head>
                    <Header/>
                    {this.props.children}
                    <Footer/>
                    <ExitPopup isShown={true}
                               className="modal-sale1"
                               bonus="10%"
                               message="поздравляем"
                               text="Напишите номер и мы с вами свяжемся"/>
                </div>
            </exitPopupContext.Provider>
        )
    }
}


export default Wrapper;