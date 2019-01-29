import React from 'react';
import Link from 'next/link';
import TextBlock from 'components/common/TextBlock/index.js'


const renderLinks = (links) => (
    links.map((item, index) => {
        if (item.url === undefined) {
            item.url = ""
        }
        return (
            <li key={index}>
                <Link href={item.url}>
                    <a>{item.text}</a>
                </Link>
            </li>
        )
    })
);

const LinksBlock = ({links}) => (<TextBlock><ul>{renderLinks(links)}</ul></TextBlock>);

export default LinksBlock