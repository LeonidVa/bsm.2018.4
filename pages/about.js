import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'

import './index.scss'

const AboutPage = () => (
    <div className="wrapper about">
        <Header />
            <About />
        <Footer />
    </div>
)

export default AboutPage