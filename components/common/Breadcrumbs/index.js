import React from 'react';
import Link from 'next/link';
import {BreadcrumbsWrapper } from "./style.js"

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

