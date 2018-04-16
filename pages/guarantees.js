import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Guarantees from '../components/Guarantees'

import './index.scss'

const GuaranteesPage = () => (
    <div>
        <Head>
            <title>BeSmarter - Гарантии</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        
        <div className="wrapper guarantees">
            <Header />
                <Guarantees />
            <Footer />
        </div>
    </div>
)

export default GuaranteesPage