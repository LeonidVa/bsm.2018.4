import Link from 'next/link';
// import './Title.scss';

const Title = ({name}) => (
    <div>
        <section className="breadcrumbs">
            <div className="inner">
                <Link href="/pricing">
                    <a>Услуги</a>
                </Link>
                <span> / </span>
                <Link href="/course">
                    <a>Курсовая работа</a>
                </Link>
            </div>
        </section>

        <section className="main-title">
            <div className="inner">
                <h1>{name}</h1>
            </div>
        </section>

    </div>
)

export default Title;