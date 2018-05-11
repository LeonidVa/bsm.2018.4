import Link from 'next/link';
import Arrow from './arrow.svg'


const NavRow = ({ title, description, url }) => (
    <Link href={url}>
        <a className="block-nav__item">
            <span className="block-nav__title">{title}</span>
            <span className="block-nav__subtitle">{description}</span>
            <img className="arrow" src={Arrow} alt="->" />
        </a>
    </Link>
)


export default NavRow;