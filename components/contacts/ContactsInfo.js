import Link from 'next/link'

const ContactsInfo = (props) => (
    <section className="block-text">
        <h2 className="block-text__title">
            Офис
			</h2>
        <p className="block-text__subtitle subtitle-orange">
            Москва, Большой Кисловский переулок,<br /> д. 1 стр. 2, офис 211
			</p>
        <p className="block-text__par">
            Понедельник - пятница <span className="bold">с 10:00 до 19:30</span><br />
            Суббота, воскресенье <span className="bold">с 10:00 до 18:30</span>
        </p>
        <p className="block-text__par finish-text">
            Приходите – мы ждём Вас!
			</p>

        <h2 className="block-text__title">
            По телефону
			</h2>
        <p className="block-text__subtitle subtitle-orange">
            <span>+7 (495) 772-40-90</span>
            +7 (495) 772-90-40
			</p>
        <p className="block-text__par">
            Понедельник - пятница <span className="bold">с 10:00 до 19:30</span><br />
            Суббота, воскресенье <span className="bold">с 10:00 до 18:30</span>
        </p>
        <p className="block-text__par finish-text">
            Звоните – будем рады поговорить!
			</p>
        <h2 className="block-text__title">
            По почте
			</h2>
        <p className="block-text__subtitle subtitle-orange">
            zakaz@besmarter.ru
			</p>
        <p className="block-text__par">
            Возникли вопросы?
			</p>
        <p className="block-text__par finish-text">
            Пишите – ответим!
			</p>
        <div className="block-not-find__buttons">
            <Link href="#">   
                <a className="block-not-find__button">Задать вопрос</a>
            </Link>
            <a className="block-not-find__button"
                   onClick={props.openModal}>
                   Заказать звонок
            </a>
    
        </div>
    </section>
)

export default ContactsInfo