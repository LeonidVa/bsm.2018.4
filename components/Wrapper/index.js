import React, {Component} from 'react';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SaleModal from 'components/Header/components/SaleModal'


class Wrapper extends Component {

    state = {
        showSaleModal: false
    };

    render() {
        console.log('Wrapper.render() ', this.state.showSaleModal)
        return (
            <div onMouseLeave={() => this.setState({showSaleModal: true})}>
                <Head>
                    <title>BeSmarter! - {this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                </Head>
                <Header/>
                {this.props.children}
                <Footer/>
                <SaleModal show={this.state.showSaleModal}
                           className="modal-sale1"
                           bonus="10%"
                           message="поздравляем"
                           text="Напишите номер и мы с вами свяжемся"/>
            </div>
        )
    }
}


export default Wrapper;