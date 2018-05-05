import Link from 'next/link';
import Arrow from './arrow.svg'


const NavRow = ({ action, url }) => (
    <Link href={`/${url}`}>
        <a className="block-nav__item">
            <span className="block-nav__title">{action}</span>
            <span className="block-nav__subtitle">Узнайте сроки и цену вашей работы</span>

            <img className="arrow" src={Arrow} alt="->" />

        </a>
    </Link>
)


export default NavRow;