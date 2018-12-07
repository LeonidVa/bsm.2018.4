import Link from 'next/link';
import Arrow from './arrow.svg'
import './index.scss'
import styles from 'styled-components'


const BlockNavItem = styles.a `
display: block;
text-decoration: none;
font-size: 2em;
margin: 0 1em;
padding: .94em 0;
border-bottom: .5px solid #dadada;
position: relative;
&:last-child {
    border-bottom: none;
}
&:hover .fas {
    right: -6px;
    color: #f4511e;
}
`;


const Span = styles.span `
    display: block;
`;


const BlockNavTitle = styles.span`
    color: #333333;
    font-weight: 500;
    margin-bottom: 3px;
    transition: all .25s;
`; 


const BlockNavSubtitle = styles.span`
color: #9b9b9b;
font-size: .5em;
`;

const BlockNavArrow = styles.img`
//color: #4a4a4a;
        color: #f4511e;
        font-size: .700em;
        width: 20px;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -0.375em;
        transition: all .4s;
`;

const NavRow = ({title, description, url}) => {
    if (url.charAt(0) === '#') {
        return (
            <BlockNavItem href={url} className="block-nav__item">
                <Span className="block-nav__title"><BlockNavTitle>{title}</BlockNavTitle></Span>
                <Span className="block-nav__subtitle">{description}</Span>
                <img className="arrow" src={Arrow} alt="->"/>
            </BlockNavItem>
        )
    }
    return (
        <Link href={url}>
            <a className="block-nav__item">
                <Span className="block-nav__subtitle"><BlockNavSubtitle>{description}</BlockNavSubtitle></Span>
                <BlockNavArrow className="arrow" src={Arrow} alt="->"/>
            </a>
        </Link>
    )
}

export default NavRow;