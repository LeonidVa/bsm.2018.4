import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'



const page = () => (
    <Wrapper title="Заказать реферат по философии в Москве и РФ – цены, сроки написания под ключ" description="Написание реферата по философии на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img5">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/referat-na-zakaz">
                        <a>Реферат</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>По философии</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>



            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/i.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Курсовая работа</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 4 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-otchet-po-praktike">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">Доступные цены</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Реферат по философии на заказ
                </h1>
                <p className="block-text__par">
                    Философия, прародительница всех современных наук, многим студентам кажется сложной для восприятия и запоминания. Для того чтобы выполнить реферат по философии, недостаточно подобрать первичные источники, скопировать из них определенные отрывки, увязать эти фрагменты с темой работы, выделить причинно-следственные связи и сформулировать выводы. Такая работа очень кропотливая, требует больших временных затрат и не всегда приносит нужный результат.
                </p>
                <p className="block-text__par">
                    Свободного времени для написания реферата по философии может не оказаться по нескольким причинам:
                </p>
                <ul>
                    <li>
                        Болезнь
                    </li>
                    <li>
                        Загруженность на основном месте работы (важно для заочников)
                    </li>
                    <li>
                        Беременность и необходимость ухаживать за ребенком 
                    </li>
                    <li>
                        Другие личные причины
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Воспользоваться помощью профессионалов – это просто и быстро!
                </h2>
                <p className="block-text__par">
                    Один из вариантов решения проблемы – покупка уже готовой работы в сети интернет. Однако в таком случае соответствие содержания теме работы, ее уникальность и качество не гарантируется. Наиболее эффективный способ сдать реферат по философии в срок – заказать его подготовку в специализированной компании BeSmarter!
                </p>
                <p className="block-text__par">
                    Преимуществами этого варианта являются:
                </p>
                <ul>
                    <li>
                        Уникальность работы
                    </li>
                    <li>
                        Точное соответствие содержания теме
                    </li>
                    <li>
                        Возможность написания работы по главам для периодических консультаций с научным руководителем
                    </li>
                </ul>
                <p className="block-text__par">
                    Алгоритм сотрудничества с нами выглядит следующим образом:
                </p>
                <ul>
                    <li>
                        Заказ работы, установление сроков выполнения
                    </li>
                    <li>
                        Определение плана работы
                    </li>
                    <li>
                        Внесение предоплаты
                    </li>
                    <li>
                        Написание работы
                    </li>
                    <li>
                        Контроль качества, полная оплата и сопровождение до защиты
                    </li>
                </ul>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    
                </h2>
                <p className="block-text__par">
                    Заказать реферат по философии под ключ удобно в BeSmarter! – специалисты нашей компании окажут всю необходимую помощь. Стоимость написания зависит от нескольких критериев:
                </p>
                <ul>
                    <li>
                        Сроки сдачи
                    </li>
                    <li>
                        Требуемый уровень уникальности
                    </li>
                    <li>
                        Сложность темы
                    </li>
                    <li>
                        Объем работы
                    </li>
                </ul>
                <p className="block-text__par">
                    Для того чтобы сэкономить и купить реферат по философии на выгодных условиях, необходимо поставить перед исполнителем конкретную задачу, четко сформулировать тему и, что самое главное – сделать заказ заранее.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
