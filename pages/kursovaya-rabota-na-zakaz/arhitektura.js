import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
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
    <Wrapper title="Заказать курсовую работу по архитектуре в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по архитектуре по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать курсовую работу по архитектуре сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь проект" />
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
                        <a>По архитектуре</a>
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
                    Заказать курсовую работу по архитектуре
                </h1>
                <p className="block-text__par">
                    У студентов строительных специальностей курсовые работы по архитектуре традиционно вызывают повышенные трудности. Здесь нельзя отделаться абстракциями и теоретическими опусами. Каждый проект представляет собой совокупность индивидуальных решений по внешнему виду, компоновке, планировке, применяемым материалам и другим параметрам, которыми отличается конкретный объект.
                </p>
                <p className="block-text__par">
                    Найти идентичный вариант в Интернете или попытаться переделать чужой проект практически невозможно. Нужно или выполнить работу самостоятельно, или прибегнуть к экспертной помощи. Если у вас не хватает времени или навыков, предлагаем недорого заказать курсовой проект по архитектуре в компании BeSmarter!
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/kurs-po-arh.jpg')}/>




            <section className="block-text">
                <h2 className="block-text__title">
                    Какие мы даем гарантии?
                </h2>
                <ul>
                    <li>
                        <b>Гарантия качества.</b> Вы можете быть уверены в грамотном выполнении выкладок и чертежей, поскольку написание работы будет поручено действующему преподавателю по строительным дисциплинам с кандидатской научной степенью.
                    </li>
                    <li>
                        <b>Гарантия пунктуальности.</b> День сдачи готового проекта фиксируется в официальном договоре. По желанию клиента мы можем написать работу срочно (от 24 часов) без ущерба ее качеству.
                    </li>
                    <li>
                        <b>Гарантия оригинальности.</b> Курсовая работа по архитектуре на заказ от BeSmarter! – это проект, выполненный с нуля без малейшей доли плагиата или заимствований. Уникальность текста проверяется в нескольких онлайн сервисах (eTXT, Advego, АП.вуз).
                    </li>
                </ul>
                <p className="block-text__par">
                    Желаете гарантировать себе успешную защиту? Достаточно заказать курсовую работу по архитектуре в BeSmarter!
                </p>
            </section>



            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Стоимость курсового проекта по архитектуре?
                </h2>
                <p className="block-text__par">
                    Цена курсового проекта по архитектуре определяется несколькими объективными факторами. Прежде всего – это трудоемкость, которая зависит от конкретного объекта. Чем он сложнее, тем больше труда потребуется для выполнения расчетов и построения чертежей.
                </p>
                <p className="block-text__par">
                    Вторым важным критерием ценообразования является срочность, поэтому для экономии средств выгоднее будет оформить заказ заранее. Также на стоимость влияют специфические требования к оформлению. Чтобы прикинуть ориентировочную сумму, откройте наш прайс-лист или свяжитесь с менеджером.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
            </Video>



            <section className="block-text">
                <h2 className="block-text__title">
                    Готовы купить курсовую работу по архитектуре?
                </h2>
                <p className="block-text__par">
                    Тогда оформите заявку удобным способом:
                </p>
                <ul>
                    <li>
                        <b><a href="#form">заполнив форму</a></b> на сайте;
                    </li>
                    <li>
                        позвонив по телефону  <span className="tel">8 (495) 772-40-90</span>;
                    </li>
                    <li>
                        посетив наш <b><Link href="/contacts"><a>офис</a></Link></b> в Москве (пер. Большой Кисловский, дом 1, стр. 2, оф. 211).
                    </li>
                </ul>
                <p className="block-text__par">
                    Купить курсовую по архитектуре в BeSmarter! – грамотное решение, которое избавит вас от лишних забот.
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />



            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
