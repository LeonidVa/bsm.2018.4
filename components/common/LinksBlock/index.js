import Link from 'next/link';
import './index.scss'

const renderLinks=(links)=>(
    links.map((item, index)=>{
        if (item.url === undefined ){
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
)

const LinksBlock = ({links})=>(
    <section className="block-text">
        <ul className="block-text__links-list">
            {renderLinks(links)}
        </ul>
    </section>
)

export default LinksBlock