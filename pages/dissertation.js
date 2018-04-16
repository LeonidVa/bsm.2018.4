import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Dissertation from '../components/Dissertation'

import './index.scss'

const DissertationPage = () => (
    <div>
        <Head>
            <title>BeSmarter - Докторская диссертация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="wrapper dissertation">
            <Header />
                <Dissertation />
            <Footer />
        </div>
    </div>
)

export default DissertationPage