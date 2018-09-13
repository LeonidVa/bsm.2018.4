import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/kurs-na-zakaz-arch';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Сколько стоит курсовая работа – стоимость курсовой работы в Москве - 2000 рублей, звоните в компанию «BeSmarter!». Тел. +7 (495) 772-40-90." description="Хотите узнать сколько стоит написать курсовую работу на заказ в Москве? Примерная стоимость курсовой работы – 2000 рублей! Звоните в компанию BeSmarter! И мы вам скажем точно сколько стоит написать курсовую работу.">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Стоимость цена курсовой работы сколько стоит написать заказать  написание на заказ сделать купить в Москве" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/kursovaya-rabota-na-zakaz">
                        <a>Курсовая работа</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Стоимость</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="#form">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/kurs-rab.jpg') + ")",}}>
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
                    <Link href="/referat-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zakazat-esse">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/stati/kak-podgotovitsya-k-ekzamenu">
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



            <section className="block-service__dis">
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
            </section>



            <section className="block-text">
                <h1 className="block-text__title">
                    Сколько стоит курсовая работа
                </h1>
                <p className="block-text__par">
                    Сколько стоит курсовая работа в Москве? Данным вопросом каждый год интересуются десятки тысяч студентов столичных вузов. Не потому, что они ленивы или недостаточно прилежны – просто времени на все не хватает.
                </p>
                <p className="block-text__par">
                    Если вы относитесь к числу таких студентов, то мы надеемся, что данная статья поможет вам узнать, сколько стоит написать курсовую работу в Москве сегодня. А также как сэкономить на данной услуге и найти ответственного и грамотного исполнителя.
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/kurs-skolko-stoit.jpg')}/>



            <section className="block-text">
                <h2 className="block-text__title">
                    Как определяется стоимость курсовой работы?
                </h2>
                <p className="block-text__par">
                    Прежде всего, следует понимать, что регион проживания никак не влияет на цены. Если вам нужна курсовая работа на заказ, цена в Москве, Калининграде или Владивостоке будет одинаковой. Благодаря интернету расстояния исчезли, поэтому клиент и исполнитель могут находиться где угодно и эффективно сотрудничать.
                </p>
                <p className="block-text__par">
                    Тем не менее, расценки все же варьируются. На то, сколько стоит курсовая работа, оказывают влияние несколько объективных факторов. В частности: дисциплина (технические специальности дороже), сложность конкретной темы, срочность заказа, фактический объем текста, необходимость написания на иностранном языке и т. д.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>



            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Сколько стоит курсовая работа в компании BeSmarter!
                </h2>
                <ul>
                    <li>
                        Стоимость курсовой работы по юриспруденции - от 2000 рублей, минимальный срок – от 1 дня.
                    </li>
                    <li>
                        Цена курсовой работы по экономике с практической частью - от 3500 рублей, от 1 дня.
                    </li>
                    <li>
                        Написание курсовой работы по информатике - от 7000 рублей, от 3 дней.
                    </li>
                    <li>
                        Стоимость курсовой работы  по деталям машин от 8000 рублей, от 3 дней.
                    </li>
                    <li>
                        Заказать курсовую работу на иностранном языке будет стоить примерно в 1,5-2 раза дороже стандартных расценок.
                    </li>
                </ul>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества сотрудничества с нами
                </h2>
                <ul>
                    <li>
                        Компетентность. Работу будет выполнять кандидат соответствующих наук.
                    </li>
                    <li>
                        Оперативность. Мы способны написать хороший курсовик даже за 1 день, и это обойдется вам совсем недорого.
                    </li>
                    <li>
                        Уникальность. Только оригинальные работы, никакого плагиата.
                    </li>
                    <li>
                        Ответственность. Обеспечивается поддержка клиента вплоть до успешной защиты.
                    </li>
                    <li>
                        Конфиденциальность. Все аспекты нашего сотрудничества останутся между нами.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
            </Video>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как заказать?
                </h2>
                <p className="block-text__par">
                    Выберите наиболее удобный для себя способ связи:
                </p>
                <ol>
                    <li>
                        С помощью сайта – <b><a href="#form">оставьте заявку</a></b> на нашем сайте и дождитесь ответа менеджера.
                    </li>
                    <li>
                        По телефону – позвоните нам по номеру <br/>+7 (495) 772-40-90.
                    </li>
                    <li>
                        Лично – наш <b><Link href="/contacts"><a>адрес</a></Link></b>: Москва, пер. Большой Кисловский, дом 1 строение 2, офис 211.
                    </li>
                </ol>
            </section>

            <a name="form" id="form"/>
            <FormOrder />



            <LinksBlock links={
                [
                    { url: "/kursovaya-rabota-na-zakaz/sait-kursovyh-rabot", text: "Где заказать курсовую работу" },
                    { url: "/kursovoj-proekt-na-zakaz", text: "Заказать курсовой проект" },
                ]
            }/>
        </div>
    </Wrapper>
);


export default page
