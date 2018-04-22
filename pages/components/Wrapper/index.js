import React, {Component} from 'react';
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

class Wrapper extends Component{

    state = {
        showSaleModal: false
    }

    render(){
        return(
           <div onMouseLeave={() => this.setState({ showSaleModal: true })}>
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