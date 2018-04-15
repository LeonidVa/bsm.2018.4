import Header from '../components/Header'
import Footer from '../components/Footer'
import Dissertation from '../components/Dissertation'

import './index.scss'

const DissertationPage = () => (
    <div className="wrapper dissertation">
        <Header />
            <Dissertation />
        <Footer />
    </div>
)

export default DissertationPage