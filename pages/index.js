import React, { Component } from 'react';
import Head from 'next/head';

// import Header from './components/Header';
// import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import NavRow from './components/common/NavRow';
import MessBlock from './components/common/MessagersBlock';
import ServiceBlock from './components/common/ServiceBlock';
import TextBlock from './components/common/TextBlock';

class Index extends Component {

  state = {
    showSaleModal: false
  }

  render(){

    return(
      <Wrapper title="BeSmarter - Главная">
        <div className="wrapper main">
              <section className="block-nav">
                  <NavRow action="Заказать работу" url='#' />
                  <NavRow action="Услуги и цены" url='pricing' />
                  <NavRow action="Контакты" url='contacts' />
              </section>
              <MessBlock />
              <ServiceBlock />
              <TextBlock />
          </div>
      </Wrapper>
 
    )
  }
}

export default Index