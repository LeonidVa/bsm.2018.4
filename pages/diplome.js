import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Diplome from '../components/Diplome'

import './index.scss'

const DiplomePage = () => (
    <div>
        <Head>
            <title>BeSmarter - Дипломная диссертация</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="wrapper diplome">
            <Header />
               <Diplome  />
            <Footer />
        </div>
    </div>
)

export default DiplomePage