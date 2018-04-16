import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Diplome from '../components/Diplome'

import './index.scss'

const DiplomePage = () => (
    <div>
        <Head>
            <title>BeSmarter - Дипломная диссертация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="wrapper diplome">
            <Header />
               <Diplome  />
            <Footer />
        </div>
    </div>
)

export default DiplomePage