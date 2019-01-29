import Link from 'next/link';
import Arrow from './arrow.svg'
import { Item } from "./style.js";

const NavRow = ({title, description, url}) => {
    if (url.charAt(0) === '#') {
        return (
            <Item href={url} className="item">
                <div className="title">{title}</div>
                <div className="subtitle">{description}</div>
                <img className="arrow" src={Arrow} alt="->"/>
            </Item>
        )
    }
    return (
        <Link href={url}>
            <Item className="item">
                <div className="title">{title}</div>
                <div className="subtitle">{description}</div>
                <img className="arrow" src={Arrow} alt="->"/>
            </Item>
        </Link>
    )
}

export default NavRow;