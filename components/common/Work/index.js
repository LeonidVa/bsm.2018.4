import Link from 'next/link';
// import './Works.scss';

const Work = ({ url, workName, workDescription, cost, time }) => (
    <Link href={`/${url}`} >
        <a className="block-service__top">
            <span className="block-service__title">{workName}</span>
            <p className="block-service__par">
                {workDescription}
            </p>
            <p className="block-service__par">
                {cost}
                    <br/>
                {time}
            </p>
        </a>
    </Link>
)


export default Work