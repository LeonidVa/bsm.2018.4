import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'

import './index.scss'

const AboutPage = () => (
    <div>
        <Head>
            <title>BeSmarter - О нас</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="wrapper about">
            <Header />
                <About />
            <Footer />
        </div>
    </div>
)

export default AboutPage