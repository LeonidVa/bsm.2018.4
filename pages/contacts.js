import Header from '../components/Header'
import Footer from '../components/Footer'
import Contacts from '../components/Contacts'

import './index.scss'

const ContactPage = () => (
    <div className="wrapper contacts">
        <Header />
            <Contacts />
        <Footer />
    </div>
)

export default ContactPage