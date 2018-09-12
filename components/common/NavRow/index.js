import Link from 'next/link';
import Arrow from './arrow.svg'
import './index.scss'


const NavRow = ({title, description, url}) => {
    if (url.charAt(0) === '#') {
        return (
            <a href={url} className="block-nav__item">
                <span className="block-nav__title">{title}</span>
                <span className="block-nav__subtitle">{description}</span>
                <img className="arrow" src={Arrow} alt="->"/>
            </a>
        )
    }
    return (
        <Link href={url}>
            <a className="block-nav__item">
                <span className="block-nav__title">{title}</span>
                <span className="block-nav__subtitle">{description}</span>
                <img className="arrow" src={Arrow} alt="->"/>
            </a>
        </Link>
    )
}

export default NavRow;