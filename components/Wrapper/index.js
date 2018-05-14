import React, {Component, createContext} from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';


import ExitPopup, {exitPopupContext, exitPopupState} from 'components/modals/ExitPopup'

const lastExitSalePopupWas = 'LKjyGTFDd';

import CallPopup, {callPopupContext, callPopupState} from 'components/modals/Call'


class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.exitPopupState = exitPopupState;
        this.state.callPopupState = callPopupState;


        this.state.callPopupState.show = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: true, question: false}})
        };
        this.state.callPopupState.showWithQuestion = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: true, question: true}})
        };
        this.state.callPopupState.hide = () => {
            this.setState({callPopupState: {...this.state.callPopupState, isShown: false}})
        };
        this.state.exitPopupState.show = () => {
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
        };
        this.state.exitPopupState.hide = () => {
            this.setState({exitPopupState: {...this.state.exitPopupState, isShown: false}})
            if (process.browser) {
                window.localStorage.setItem(lastExitSalePopupWas, new Date().getTime());
            }
        }
    }

    static componentDidMount() {
        console.log('Wrapper componentDidMount')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Wrapper getDerivedStateFromProps');
        return nextProps;
    }

    static shouldComponentUpdate() {
        console.log('Wrapper shouldComponentUpdate')
    }

    static componentDidUpdate() {
        console.log('Wrapper componentDidUpdate')
    }

    static componentWillUnmount() {
        console.log('Wrapper componentWillUnmount')
    }

    render() {
        console.log('Wrapper render')
        return (
            <callPopupContext.Provider value={this.state.callPopupState}>
                <exitPopupContext.Provider value={this.state.exitPopupState}>
                    <div onMouseLeave={this.state.exitPopupState.show}>
                        <Head>
                            <title>BeSmarter! - {this.props.title}</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                        </Head>
                        <Header/>
                        {this.props.children}
                        <Footer/>
                        <ExitPopup className="modal-sale1"
                                   bonus={<div style={{position: "relative"}}>500<span
                                       style={{
                                           fontSize: "20%",
                                           position: "absolute",
                                           bottom: "0.5em",
                                           right: "-1.7em",
                                       }}>руб.</span></div>}
                                   message={<span style={{marginLeft: "4em", lineHeight: "1.33"}}>Лови бонус при заказе прямо сейчас!</span>}
                                   text="При сумме заказа от 2 000 рублей"
                        />
                        <CallPopup/>
                    </div>
                </exitPopupContext.Provider>
            </callPopupContext.Provider>
        )
    }
}


export default Wrapper;