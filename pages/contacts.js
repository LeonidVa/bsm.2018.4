import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Contacts from '../components/Contacts'

import './index.scss'

const ContactPage = ()=>{

        return(
            <div>
                <Head>
                    <title>BeSmarter - Контакты</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                </Head>
                <div className="wrapper contacts">
                    <Header />
                        <Contacts />
                    <Footer />
                </div>
            </div>
        )
}


export default ContactPage