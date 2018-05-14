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


import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'


const page = () => (
    <Wrapper title="BeSmarter - Услуги и цены">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

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
                <h2 className="block-text__title">Только индивидуальные работы</h2>
                <p className="block-text__par">
                    Твоя работа пишется преподавателем только для тебя,
                    на твоих условиях и строго по твоим требованиям.
                </p>
                <p className="block-text__par">
                    Опытный преподаватель и наш менеджер рядом с тобой до самой защиты.
                </p>
                <p className="block-text__par">С нами ты защитишься!</p>
            </section>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <div className="block-service__top color-33" style={{backgroundImage: "url(" + require('img/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">От эссе до настоящей диссертации</span>
                            <p className="block-service__par">Уникальные авторские работы</p>
                            <p className="block-service__par">Сложные и срочные</p>
                            <p className="block-service__par">Технические и креативные</p>
                            <p className="block-service__par">На иностранных языках</p>
                        </div>
                    </div>
                </Link>
            </section>

            <Accordion
                title="Дипломная работа"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />

            <Accordion
                title="Магистерская диссертация"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />

            <Accordion
                title="Дипломная работа MBA"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />


            <Accordion
                title="Аспирантура и диссертации"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />


            <Accordion
                title="Курсовая работа"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />

            <Accordion
                title="Отчет по практике"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />

            <Accordion
                title="Реферат"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />

            <Accordion
                title="Другие работы"
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
                    ["", ""],
                    [<span style={{fontWeight: "bold"}}>Подготовка к консультации и защите</span>],
                    ["Пакет «Успешная Защита»"],
                    ["Консультация с автором"],
                    ["Ответы к консультации и к защите"],
                    ["Доклад"],
                    ["Слайды"],
                    ["Раздаток/Мини-диплом"],
                    ["Сдача по главам"],
                    ["Доработка дипломной работы"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                ]}
            />

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <ImageBlock imageSrc={require('img/block/g.jpg')}/>
            <OrderForm title="Заказать работу" formConfig={formConfig}/>
            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <LinksBlock links={links}/>

        </div>
    </Wrapper>
);

export default page