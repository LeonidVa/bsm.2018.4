import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovayaNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";


const page = () => (
    <Wrapper title="Заказать курсовую работу по праву в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по праву по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать курсовую работу по праву сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь"/>
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
                    <CardPopInfo
                        url="/zakazat-otchet-po-praktike"
                        title="Отчет по практике"
                        text={[<p>от 3 000 руб.</p>]}
                    />

                    <CardPopInfo
                        url="/referat-na-zakaz"
                        title="Реферат"
                        text={[<p>от 1 500 руб.</p>]}
                    />

                    <CardPopInfo
                        url="/zakazat-esse"
                        title="Эссе Контрольная"
                        text={[<p>от 1 500 руб.</p>]}
                    />

                    <CardPopInfo
                        url="/stati/kak-podgotovitsya-k-ekzamenu"
                        title="Экзамены Тесты"
                        text={[<p>от 200 руб.</p>]}
                    />

                    <CardPopInfo
                        url="/kursovoj-proekt-na-zakaz"
                        title="Курсовой проект"
                        text={[<p>от 8 000 руб.</p>]}
                    />

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
                        <CardPopInfo
                            title={servicecards["Пакет «Успешная Защита»"].title}
                            text={servicecards["Пакет «Успешная Защита»"].text}
                            description={servicecards["Пакет «Успешная Защита»"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Доклад"].title}
                            text={servicecards["Доклад"].text}
                            description={servicecards["Доклад"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Оригинальность текста"].title}
                            text={servicecards["Оригинальность текста"].text}
                            description={servicecards["Оригинальность текста"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Ответы к защите"].title}
                            text={servicecards["Ответы к защите"].text}
                            description={servicecards["Ответы к защите"].description}
                        />

                    </div>
                    <div className="block-service__list list-5">
                        <CardPopInfo
                            title={servicecards["Мини-диплом Раскладка"].title}
                            text={servicecards["Мини-диплом Раскладка"].text}
                            description={servicecards["Мини-диплом Раскладка"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Получение по главам"].title}
                            text={servicecards["Получение по главам"].text}
                            description={servicecards["Получение по главам"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Аннотация Отзыв Рецензия"].title}
                            text={servicecards["Аннотация Отзыв Рецензия"].text}
                            description={servicecards["Аннотация Отзыв Рецензия"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Слайды"].title}
                            text={servicecards["Слайды"].text}
                            description={servicecards["Слайды"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Распечатка Переплеты"].title}
                            text={servicecards["Распечатка Переплеты"].text}
                            description={servicecards["Распечатка Переплеты"].description}
                        />

                    </div>
                </section>
            </section>

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

            <FormEstimate/>

            <ImageBlock imageSrc={require('static/images/block/kursovayz-rab-po-uris.jpg')}/>

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

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer/>

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

            <Video>
                <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
            </Video>

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

            <a name="form" id="form"/>
            <FormOrder/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
