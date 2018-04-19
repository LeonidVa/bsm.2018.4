import Link from 'next/link';

const Service = ({ serviceName, linkAdress = "#", cost = '1 500', time = 'от 1 дня' }) => (
    <Link href={`/${linkAdress}`}>
        <a href="" className="block-service__list-item">
            <span className="block-service__list-title">{serviceName}</span>
            <div>
                <p>{cost}</p>
                <p>{time}</p>
            </div>
        </a>
    </Link>
)

export default Service;