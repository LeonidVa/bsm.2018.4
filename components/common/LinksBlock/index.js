import Link from 'next/link';

const renderLinks=(links)=>(
    links.map((item, index)=>{
        return (
            <li key={index}>
                <Link href={item.url}>
                    <a>{item.text}</a>
                </Link>
            </li>
        )
    })
)

const LinksBlock = ({links})=>(
    <section className="block-text">
        <ul className="block-text__links-list">
            {renderLinks(links)}
        </ul>
    </section>
)

export default LinksBlock