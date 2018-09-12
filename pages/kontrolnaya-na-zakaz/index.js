import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/kontrol-na-zakaz';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Заказать контрольную работу – решение контрольных работ на заказ недорого онлайн в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Хотите заказать контрольную работу недорого онлайн? Нужно срочно решение контрольных работ?  И тогда на выручку придет BeSmarter! – компания, где сделать контрольную работу можно недорого, срочно и с качественным результатом.">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать контрольную работу решение на заказ недорого онлайн где сделать написать выполнение помощь в написании купить сайты цена стоимость Москва" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Контрольная</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link>
                    <a href="#form" className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/kontr-ekz.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Контрольная работа</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 2 000 руб.</p>
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
                            <span className="block-service__list-title">Эссе</span>
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
                <Link href="/zashitit">
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
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
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
                    Заказать контрольную работу
                </h1>
                <p className="block-text__par">
                    Сторонняя помощь в написании контрольных работ может понадобиться даже прилежному студенту. Никто не застрахован от нехватки времени, недопонятой темы или даже плохого самочувствия. И тогда на выручку придет BeSmarter! – компания, где заказать контрольную работу можно недорого, срочно и с качественным результатом.
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/kontrol-rab.jpg')}/>




            <section className="block-text">
                <h2 className="block-text__title">
                    Что вы получаете, заказывая у нас контрольную работу?
                </h2>
                <ul>
                    <li>
                        <b>Профессиональный подход.</b> Решение контрольных работ на заказ поручается действующим преподавателям вузов, кандидатам соответствующих наук.
                    </li>
                    <li>
                        <b>Универсальность.</b> Доступно выполнение контрольных работ на заказ по всем техническим и гуманитарным предметам на любую тему.
                    </li>
                    <li>
                        <b>Оперативность.</b> В случае необходимости мы можем написать контрольную работу на заказ срочно (от 1 дня).
                    </li>
                    <li>
                        <b>Последовательность.</b> Написание контрольных работ на заказ завершается подробной консультацией со стороны автора, чтобы вы смогли объяснить решение преподавателю.
                    </li>
                    <li>
                        <b>Удобство.</b> У нас можно заказать контрольную онлайн, поэтому услуга доступна для жителей всех регионов России.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>


            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит цена контрольных работ на заказ
                </h2>
                <p className="block-text__par">
                    Разумеется, вас интересует, сколько стоит сделать контрольную работу. К сожалению, назвать точную сумму заранее невозможно. Ориентировочно узнать, сколько стоит заказать контрольную работу, можно в соответствующем разделе нашего сайта.
                </p>
                <p className="block-text__par">
                    Точная цена будет определена после собеседования на основании конкретной дисциплины, темы, сроков, требований и т. д.
                </p>
                <p className="block-text__par">
                    Если вы желаете заказать контрольную недорого, есть два простых способа экономии. Во-первых, можно частично сделать работу самостоятельно – то, что сумеете или успеете. А во-вторых, следует заказать выполнение контрольной работы заранее, например, за неделю.
                </p>
                <p className="block-text__par italic">
                    Чем больше вы выделите нам времени, тем ниже будет стоимость услуги.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <ImageBlock imageSrc={require('static/images/block/kontrolnaya.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Хотите заказать контрольную работу онлайн или в офисе?
                </h2>
                <p className="block-text__par">
                    Выберите удобный для себя вариант:
                </p>
                <ol>
                    <li>
                        Через сайт – самый быстрый способ заказать контрольную работу недорого (<b><a href="#form">онлайн</a></b>)
                    </li>
                    <li>
                        По телефону – свяжитесь с нами по номеру<br/>+7 (495) 772-4090
                    </li>
                    <li>
                        В <b><Link href="/contacts"><a>офисе</a></Link></b> – наш адрес: Москва, Большой Кисловский переулок, д. 1 стр. 2, офис 211
                    </li>
                </ol>
                <p className="block-text__par italic">
                    Не теряйте времени! BeSmarter! – это ваша готовая контрольная работа на заказ, недорого и с гарантией качества!
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />
            
        </div>
    </Wrapper>
);


export default page
