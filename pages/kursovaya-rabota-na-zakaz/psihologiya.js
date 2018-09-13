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
    <Wrapper title="Заказать курсовую работу по психологии в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по психологии по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать курсовую работу по психологии сколько стоит цена стоимость купить на заказ В Москве срочно недорого помощь" />
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
                        <a>По психологии</a>
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
                    Заказать курсовую работу по психологии
                </h1>
                <p className="block-text__par">
                    Хорошая курсовая работа по экономике – цель, достичь которой не так просто. Во-первых, как и любой серьезный научный труд, она требует немалых затрат времени, которого у студента всегда не хватает. А во-вторых, сам предмет предполагает наличие умения применять полученные знания к актуальным экономическим реалиям.
                </p>
                <p className="block-text__par">
                    Курсач по экономике нельзя скачать из интернета, поскольку если он там появился, то, скорее всего, давно потерял актуальность (в отличие от сопромата или теормеха). Его нужно написать здесь и сейчас (если вы, конечно, рассчитываете на высокую оценку). Или же можно недорого заказать курсовую работу по экономике в компании BeSmarter!
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/kurs-rab-po-psih.jpg')}/>



            <section className="block-text">
                <h2 className="block-text__title">
                    Что мне это даст?
                </h2>
                <ul>
                    <li>
                        <b>Оригинальность.</b> Вы получите работу написанную «с нуля», содержащую исследования актуальных экономических проблем. Уникальность самого текста проверяется в онлайн сервисах (eTXT, Advego, АП.вуз).
                    </li>
                    <li>
                        <b>Качество.</b> Вы сможете быть уверены в грамотности написания и оформления курсовой работы. Ее будет выполнять действующий преподаватель вуза, кандидат экономических наук.
                    </li>
                    <li>
                        <b>Оперативность.</b> Если вас поджимает время, курсовая на заказ по экономике будет выполнена срочно, при необходимости даже за одни сутки. День сдачи фиксируется в официальном договоре.
                    </li>
                </ul>
                <p className="block-text__par">
                    Хотите узнать больше – проконсультируйтесь с нашими менеджерами, они всегда рады помочь!
                </p>
            </section>



            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Как мы работаем?
                </h2>
                <p className="block-text__par">
                    Если вы решите купить курсовую работу по экономике, следует оформить заявку одним из перечисленных ниже способов. Мы проведем с вами предварительное собеседование и подпишем официальный договор с указанием всех деталей (цена, сроки, требования…).
                </p>
                <p className="block-text__par">
                    После 50%-ной предоплаты согласованный с вами автор приступает к выполнению заказа. Готовая курсовая на заказ по экономике сдается вам после уплаты полной стоимости услуги. В случае необходимости исполнитель вносит бесплатные правки, отвечает на вопросы и помогает подготовиться к успешной защите.
                </p>
                <p className="block-text__par">
                    Наша главная цель – результат, а именно высокая оценка за курсовую работу. И мы достигаем этой цели почти в 100% случаев, поэтому обязательно оправдаем ваше доверие!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
            </Video>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как купить курсовую работу по психологии?
                </h2>
                <p className="block-text__par">
                    Выберите удобный для себя вариант:
                </p>
                <ul>
                    <li>
                        на сайте – <b><a href="#form">заполните форму</a></b> и дождитесь ответа сотрудника компании;
                    </li>
                    <li>
                        по телефону – свяжитесь с нами по номеру <br/>8 (495) 772-40-90 (перезвоним);
                    </li>
                    <li>
                        в офисе – <b><Link href="/contacts"><a>наш адрес</a></Link></b>: Москва, пер. Большой Кисловский, дом 1, стр. 2, оф. 211.
                    </li>
                </ul>
                <p className="block-text__par">
                    Услуги компании BeSmarter! – это залог вашего спокойствия и успешной защиты курсовой работы по экономике.
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />



            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
