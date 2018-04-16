import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Candidate from '../components/Candidate'
import './index.scss'

const CandidatePage = () => (
    <div>
        <Head>
            <title>BeSmarter - Кандидатская диссертация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="wrapper candidate">
            <Header />
                <Candidate />
            <Footer />
        </div>
    </div>
)

export default CandidatePage