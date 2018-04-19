import Head from 'next/head';


import Header from './components/Header';
import Footer from './components/Footer';
// import Main from './components/Main'

import NavRow from './components/common/NavRow';
import MessBlock from './components/common/MessagersBlock';
import ServiceBlock from './components/common/ServiceBlock';
import TextBlock from './components/common/TextBlock';

import './index.scss'

const Index = () => (
  <div>
    <Head>
      <title>BeSmarter - Главная</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    <div className="wrapper main">
      <Header />
        <section className="block-nav">
            <NavRow action="Заказать работу" url='#' />
            <NavRow action="Услуги и цены" url='pricing' />
            <NavRow action="Контакты" url='contacts' />
        </section>
        <MessBlock />
        <ServiceBlock />
        <TextBlock />
      <Footer />
    </div>
  </div>
)

export default Index