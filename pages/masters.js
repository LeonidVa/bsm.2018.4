import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Masters from '../components/Masters'

import './index.scss'

const MastersPage = () => (
    <div>
        <Head>
            <title>BeSmarter - Магистерская диссертация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="wrapper masters">
            <Header />
                <Masters/>
            <Footer />
        </div>
    </div>
)

export default MastersPage