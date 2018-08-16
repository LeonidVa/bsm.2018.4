import Link from 'next/link';

import React, {Component} from 'react';

import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';

import ImageBlock from 'components/common/ImageBlock'
import Accordion from 'components/common/Accordion'
import OrderForm from 'components/common/OrderForm'
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'

import formConfig from 'components/config/formConfig';
import reviewBlockConfig from 'components/config/reviewBlockConfig';
import links from 'components/config/linksBlockConfig';

import MetaTags from 'react-meta-tags';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'


const page = () => (
    <Wrapper title="Услуги и цены">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="На этой страниц представленны цены на дипломные, курсовые работы и многие другие услуги компании BeSmarter!, звоните Тел. +7 (495) 772-40-90" />
                <meta name="keywords" content="стоимость дипломной работы написать диплом цена написания на заказ заказать" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/price">
                        <a>Услуги и цены</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>

            <section className="block-text">
                <h1 className="block-text__title">Цена вашей работы</h1>
                <p className="block-text__par">
                    Ваша работа пишется преподавателем только для вас, на ваших условиях и строго по вашим требованиям.
                </p>
                <p className="block-text__par">
                    В прайс-листе мы указываем лишь ориентировочный ценовой диапазон.
                </p>
                <p className="block-text__par">
                    Стоимость заказа зависит от нескольких объективных факторов:
                </p>
                <ul>
                    <li>
                        специальности:<br/>
                        работы по техническим дисциплинам дороже по сравнению с гуманитарными или естественнонаучными
                    </li>
                    <li>
                        сложности:<br/>
                        даже в рамках одной специальности трудоемкость (а значит, и стоимость) написания работы будет зависеть от выбранной темы
                    </li>
                    <li>
                        требований:<br/>
                        сюда относится объем текста, язык его написания, особенности оформления, необходимая уникальность
                    </li>
                    <li>
                        срочности:<br/>
                        чем меньше вы нам даете времени на написание, тем дороже будет заказ.
                    </li>
                </ul>
                <p className="block-text__par">
                    Чтобы узнать точную стоимость вашего заказа, свяжитесь с нами по <Link href="tel:+74957724090"><a>телефону</a></Link>, а лучше с приезжайте к нам в офис в центре Москвы в 5-ти минутах от метро.
                </p>
                <p className="block-text__par center"><b>
                    Экономьте ваши деньги – <Link href="#form"><a>заказывайте</a></Link> прямо сейчас!
                </b></p>
            </section>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">От эссе до настоящей диссертации</span>
                            <p className="block-service__par">Уникальные авторские работы</p>
                            <p className="block-service__par">Сложные и срочные</p>
                            <p className="block-service__par">Технические и креативные</p>
                            <p className="block-service__par">На иностранных языках</p>
                        </div>
                    </a>
                </Link>
            </section>

            <Accordion
                title="Дипломная работа, от"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Стандартный вуз", "12 000"],
                    ["Вуз с повышенными требованиями", "15 000"],
                    ["Техническая специальность", "19 000"],
                    ["На иностранном языке", "20 000"],
                    ["Для европейского вуза", "35 000"],
                    ["Колледж", "8 900"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["", ""],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                ]}
            />

            <Accordion
                title="Магистерская диссертация, от"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Стандартный вуз", "12 000"],
                    ["Вуз с повышенными требованиями", "15 000"],
                    ["Техническая специальность", "19 000"],
                    ["На иностранном языке", "20 000"],
                    ["Для европейского вуза", "35 000"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["", ""],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                ]}
            />

            <Accordion
                title="Дипломная работа MBA, от"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Написание диплома mba", "25 000"],
                    ["Кейсы mba", "5 000"],
                    ["Эссе mbа", "1 500"],
                    ["Оформление по ГОСТам", ""],
                    ["Повышение оригинальности", ""],
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["", ""],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                ]}
            />

            <Accordion
                title="Курсовая работа, от"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Теоретическая", "2 000"],
                    ["С практикой", "3 500"],
                    ["Курсовой проект", "5 000"],
                    ["Техническая специальность", "8 000"],
                    ["На иностранном языке", ""],
                    ["Оформление по ГОСТам", ""],
                    ["Повышение оригинальности", ""],
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и сдаче</span>],
                    ["", ""],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к сдаче"],
                    ["Доклад"],
                    ["Слайды"],
                ]}
            />

            <Accordion
                title="Аспирантура и диссертации"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Докторская", "450 000"],
                    ["Кандидатская", "180 000"],
                    ["Магистерская", "24 000"],
                    ["Реферат для поступления в аспирантуру", "1 500"],
                    ["Аспирантский реферат", "1 500"],
                    ["На иностранном языке", "35 000"],
                    ["Автореферат", "15 000"],
                    ["Монография", ""],
                    ["Статьи СМИ и ВАК", ""],
                    ["Публикация статьи СМИ и ВАК", ""],
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["", ""],
                    ["Консультация с автором"],
                    ["Сдача по главам"],
                    ["Ответы к консультации и к защите"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                    ["Доклад"],
                    ["Слайды"],
                ]}
            />

            <Accordion
                title="Отчет по практике"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Производственный отчет", "3 000"],
                    ["Преддипломный отчет", "3 000"],
                    ["Дневник практиканта", ""],
                ]}
            />

            <Accordion
                title="Реферат"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Теоретический", "1 500"],
                    ["С практикой", "1 500"],
                    ["На иностранном языке", ""],
                ]}
            />

            <Accordion
                title="Другие работы"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Подготовка к успешной защите", ""],
                    ["Консультация с автором"],
                    ["Повышение оригинальности"],
                    ["Оформление по ГОСТам"],
                    ["Тесты и онлайн-тесты", ""],
                    ["Дистанционный экзамен", ""],
                    ["Экзамены и ГОСы", "50"],
                    ["Бизнес-план", ""],
                    ["Эссе", "1 500"],
                    ["Контрольная работа", "2 000"],
                    ["Лабораторная работа", ""],
                    ["Решение задач", ""],
                    ["Чертежи (А0-А4)", "500"],
                    ["Аннотация", ""],
                    ["Отзыв", ""],
                    ["Рецензия внутренняя", ""],
                    ["Рецензия внешняя", ""],
                    ["Корректор", ""],
                    ["Перевод текста", ""],
                    ["Набор текста", ""],
                    ["Переплет на пружинке", ""],
                    ["Твердый переплет", ""],
                    ["Распечатка работы", ""],
                ]}
            />

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <ImageBlock imageSrc={require('static/images/block/g.jpg')}/>
            <OrderForm title="Заказать работу" formConfig={formConfig}/>
            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <LinksBlock links={links}/>

        </div>
    </Wrapper>
);

export default page

