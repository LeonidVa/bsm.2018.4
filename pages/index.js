import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

import './index.scss'

const Index = () => (
  <div>
    <Head>
      <title>BeSmarter - Главная</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    <div className="wrapper main">
      <Header />
        <Main />
      <Footer />
    </div>
  </div>
)

export default Index