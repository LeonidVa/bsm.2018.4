import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const BreadcrumbsWrapper = styled.div `
  font-size: 2em;
  position: relative;
  z-index: 1;
  .inner {
    width: 100%;
    max-width: 17em;
    @media (max-width: 900px) {
      width: 70%;
      min-width: 273px;
      max-width: none;
    }
    @media (max-width: 660px) {
      width: 100%;
      padding: 0 10px;
    }
  }
  a, span {
    font-size: .5em;
    color: #333333;
    text-decoration: none;
  }
`;

const renderLinks = (links) => {
    return links.map((item, index) => {
        if (item.url === undefined) {
            item.url = "/"
        }
        return (
            <Link href={item.url} key={index}>
                <a>{item.text}</a>
            </Link>
        )
    }).reduce((prev, curr) => [prev, <span> / </span>, curr]);

};

const Breadcrumbs = ({links}) => (<BreadcrumbsWrapper>
    <div className="inner">{renderLinks(links)}</div>
</BreadcrumbsWrapper>);

export default Breadcrumbs

/*      <section className="breadcrumbs">
        <div className="inner">

          <Link href="/">
            <a>Главная</a>
          </Link>

          <span> / </span>

          <Link href="/diplom-na-zakaz">
            <a>Дипломная работа</a>
          </Link>

          <span> / </span>
          <Link href="#">
            <a>Где заказать</a>
          </Link>

        </div>
      </section>*/