import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Заказать курсовую работу по праву в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по праву по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать курсовую работу по праву сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь" />
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
                        <a>По праву</a>
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

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Заказать курсовую работу по праву
                </h1>
                <p className="block-text__par">
                    Курсовые работы по праву – тип проекта, обязательный для всех студентов юридических специальностей. Их написание требует умения пользоваться материалами судебной практики и другой информацией из различных профильных источников, а также глубоко разбираться в нюансах актуального российского законодательства.
                </p>
                <p className="block-text__par">
                    Далеко не каждый студент владеет достаточным количеством свободного времени и опытом для качественного решения подобных задач. Компания BeSmarter! предлагает не рисковать своим профессиональным будущим и заручиться помощью опытных экспертов. Заказать курсовую работу по праву у нас можно срочно и с гарантией качества.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Наши преимущества
                </h2>
                <ul>
                    <li>
                        <b>Компетентность.</b> Мы поручим написать курсовую работу кандидату юридических наук и действующему преподавателю права.
                    </li>
                    <li>
                        <b>Оригинальность.</b> Никакого «интернет-плагиата» – работа пишется с нуля. За этим следит отдел контроля. Уникальность текста проверяется на нескольких онлайн сервисах.
                    </li>
                    <li>
                        <b>Универсальность.</b> У нас вы сможете заказать курсовую по праву любой отрасли – уголовному, гражданскому, трудовому, семейному, конституционному и пр.
                    </li>
                    <li>
                        <b>Доступная стоимость.</b> Мы придерживаемся политики прозрачных цен и индивидуально подходим к каждому клиенту. У нас действительно недорого – убедитесь в этом сами!
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
                    Алгоритм сотрудничества
                </h2>
                <p className="block-text__par">
                    Чтобы купить курсовую по праву, вам следует оформить заявку одним из перечисленных ниже способов. Мы оперативно ее рассмотрим и обсудим с вами все детали заказа. По итогам собеседования будет подписан официальный договор.
                </p>
                <p className="block-text__par">
                    Далее вы вносите 50%-ную предоплату, и наш автор приступает к выполнению работы. Готовая курсовая сдается вам на проверку в оговоренный срок. По вашему требованию вносятся бесплатные корректировки. Финальный этап – подготовка к защите работы, автор консультирует и отвечает на ваши вопросы.
                </p>
                <p className="block-text__par">
                    Главный козырь BeSmarter! – ответственность. Личный менеджер сопровождает клиента вплоть до получения оценки, оперативно решая все вопросы. От вас нужно только желание – остальное сделаем мы!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как купить курсовую работу по праву?
                </h2>
                <p className="block-text__par">
                    Оставьте заявку удобным для себя способом:
                </p>
                <ul>
                    <li>
                        <b><a href="#form">заполните форму</a></b> на сайте и дождитесь ответа сотрудника;
                    </li>
                    <li>
                        свяжитесь с нами по телефону 8 (495) 772-40-90 или закажите обратный звонок.
                    </li>
                    <li>
                        зайдите к нам в <b><Link href="/contacts"><a>офис</a></Link></b> по адресу: Москва, пер. Большой Кисловский, дом 1, стр. 2, оф. 211.
                    </li>
                </ul>
                <p className="block-text__par">
                    Курсовая работа по праву на заказ в компании BeSmarter! – это выгодно, надежно и качественно. Поручите ее настоящим специалистам!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <Video>
                <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
            </Video>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
