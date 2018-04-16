import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Course from '../components/Course'

import './index.scss'

const CoursePage = () => (
    <div>
        <Head>
            <title>BeSmarter - Курсовая диссертация</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <div className="wrapper course">
            <Header />
                <Course />
            <Footer />
        </div>
    </div>
)

export default CoursePage