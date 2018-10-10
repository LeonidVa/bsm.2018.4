import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig'
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";


const page = () => (
    <Wrapper title="">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/kursovaya-rabota-na-zakaz">
                        <a>Курсовая</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>По водному транспорту</a>
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

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

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

            <FormEstimate/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Страница ожидает наполнения
                </h1>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <CurrentOffer/>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>
            <a name="form" id="form"/>

            <FormOrder/>

            <LinksBlock links={
                [
                    {url: "/kursovaya-rabota-na-zakaz/sait-kursovyh-rabot", text: "Где заказать курсовую работу"},
                    {url: "/kursovoj-proekt-na-zakaz", text: "Заказать курсовой проект"},
                ]
            }/>
        </div>
    </Wrapper>
);


export default page
