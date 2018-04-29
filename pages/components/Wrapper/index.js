import React, {Component} from 'react';
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

class Wrapper extends Component{

    state = {
        showSaleModal: false
    }

    handleSaleModal = () => {
        const time = new Date()

        //показываем окно скидки один раз и ставим на коллдаун
        if (!window.localStorage.getItem("showSaleModal")) {
                                                                    //часы, минуты, секунды, милисекунды
            window.localStorage.setItem("showSaleModal", time.getTime() + (1000))

            this.setState({ showSaleModal: true })

        }

        if (Number(window.localStorage.getItem("showSaleModal")) < time.getTime()){
            this.setState({ showSaleModal: true })
            // обновляем коллдаун
            window.localStorage.setItem("showSaleModal", time.getTime() + (1000))
        }
        
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(nextState.showSaleModal !== this.state.showSaleModal){
            return true
        }

        return false
    }

    render(){
        return(
           <div onMouseLeave={() => this.handleSaleModal()}>
                <Head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                </Head>
                <Header showSaleModal={this.state.showSaleModal} />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}


export default Wrapper;