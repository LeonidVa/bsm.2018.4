import Link from 'next/link';

//import './NotFind.scss'



const NotFind = () => (
    <section className="block-not-find">
        <div className="inner">
            <h2 className="block-not-find__title">Не нашли что искали?</h2>
            <div className="block-not-find__buttons">
                <Link href="#" >
                    <a className="block-not-find__button">Задать вопрос</a>
                </Link>
                <Link href="#" >
                    <a className="block-not-find__button to-modal__order-call">Заказать звонок</a>
                </Link>
            </div>
        </div>
    </section>
)

export default NotFind
