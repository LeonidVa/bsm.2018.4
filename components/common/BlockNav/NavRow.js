import Link from 'next/link';
import Arrow from './arrow.svg'

import styled from "styled-components";

const Item = styled.a`
  cursor: pointer;
  display: block;
  text-decoration: none;
  font-size: 2em;
  margin: 0 1em;
  padding: .94em 0;
  border-bottom: .5px solid #dadada;
  position: relative;
  @media (max-width: 660px) {
    margin: 0 .5em;
  }
  :last-child {
    border-bottom: none;
  }
  :hover .fas {
  right: -6px;
  color: #f4511e;
  }
  .title {
  color: #333333;
  font-weight: 500;
  margin-bottom: 3px;
  transition: all .25s;
  }
  :hover .title {
    color: #f4511e;
  }
  .subtitle {
    color: #9b9b9b;
    font-size: .5em;
  }
  .arrow {
    color: #f4511e;
    font-size: .700em;
    width: 20px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.375em;
    transition: all .4s;
  }
`;

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