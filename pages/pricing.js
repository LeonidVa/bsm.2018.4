import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'

import './index.scss'

const PricingPage = () => (
    <div>
        <Head>
            <title>BeSmarter - Услуги и цены</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="wrapper pricing">
            <Header />
                <Pricing />
            <Footer />
        </div>
    </div>
)

export default PricingPage