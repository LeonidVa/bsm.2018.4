import Link from 'next/link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight'

const NavRow = ({ action, url }) => (
    <Link href={`/${url}`}>
        <a className="block-nav__item">
            <span className="block-nav__title">{action}</span>
            <span className="block-nav__subtitle">Узнайте сроки и цену вашей работы</span>

            <FontAwesomeIcon className="fas" icon={faArrowRight} />

        </a>
    </Link>
)


export default NavRow;