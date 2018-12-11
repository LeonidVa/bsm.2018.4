import React, {Component} from 'react'
import Link from 'next/link';
import 'components/contacts/style.scss'

import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';

import Title from 'components/common/Title'
import MapBlock from 'components/common/MapBlock';
import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import LinksBlock from 'components/common/LinksBlock'
import fields from 'data/form/main';
import links from 'data/linksBlockConfig';
import schemaSrc from 'static/images/contacts/how-to-go.jpg';
import Address from 'components/contacts/Address'
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"
import MetaTags from "react-meta-tags";
import stat from 'utils/analytics';
import ContactsPage from "components/common/ServiceBlock/ready-made/ContactsPage";

class page extends Component {
    render() {
        return (
            <Wrapper title="BeSmarter - Контакты" description="На этой страницы указан наш адрес офиса, наша почта и телефоны в Москве, звоните, приезжайте в компанию.">
                <div className="wrapper bg bg-c2 bg-img bg-img5">
                    <Title>Контакты</Title>

                    <section className="breadcrumbs">
                        <div className="inner">
                            <Link href="/">
                                <a>Главная</a>
                            </Link>
                            <span> / </span>
                            <Link href="/contacts">
                                <a>Контакты</a>
                            </Link>
                        </div>
                    </section>

                    <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/contacts">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Контакты</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

                    <section className="block-nav">
                        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
                    </section>

                    <div itemScope itemType="http://schema.org/Organization">
                        <section className="block-text">
                            <h2 itemProp="name" className="block-text__title">Офис</h2>
                            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                <p className="block-text__subtitle subtitle-orange__micro">
                                    <span itemProp="addressLocality">Москва, </span>
                                    <span itemProp="streetAddress">Большой Кисловский переулок {"\n"}д. 1, стр. 2, офис 211</span>
                                </p>
                            </div>
                            <p className="block-text__par">
                                Понедельник - пятница <span className="bold">с 09:00 до 19:30</span><br/>
                                Суббота - Воскресенье <span className="bold">с 10:00 до 18:30</span><br/>
                            </p>
                            <p className="block-text__par finish-text">
                                Приходите – мы ждём Вас!
                            </p>

                            <h2 className="block-text__title">
                                Телефон
                            </h2>
                            <p className="block-text__subtitle subtitle-orange">
                                <span itemProp="telephone" className="phone">+7 (495) 772-40-90</span>
                                <span itemProp="telephone" className="phone">+7 (495) 772-90-40</span>
                            </p>
                            <p className="block-text__par">
                                Понедельник - пятница <span className="bold">с 09:00 до 23:00</span><br/>
                                Суббота - воскресенье <span className="bold">с 09:00 до 22:00</span>
                            </p>
                            <p className="block-text__par finish-text">
                                Звоните – будем рады поговорить!
                            </p>
                            <h2 className="block-text__title">
                                Почта
                            </h2>
                            <p itemProp="email" className="block-text__subtitle subtitle-orange">
                                <a href="mailto:zakaz@besmarter.ru?subject=Новая заявка" onClick={() => {
                                    stat.triggerTarget.emailClicked();
                                    return true;
                                }} style={{color: "#f4511e"}}>zakaz@besmarter.ru</a>
                            </p>
                            <p className="block-text__par">
                                Возникли вопросы?
                            </p>
                            <p className="block-text__par finish-text">
                                Пишите – ответим!
                            </p>
                            <div className="block-callask__buttons">
                                <ToggleQuestionPopup targetID="question_contacts"><a className="block-callask__button">Задать вопрос</a></ToggleQuestionPopup>
                                <ToggleCallPopup targetID="call_me_contacts"><a className="block-callask__button">Заказать звонок</a></ToggleCallPopup>
                            </div>
                        </section>
                    </div>

                    <MapBlock/>
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Как пройти
                        </h2>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Арбатская"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >
                            <p className="block-text__par">
                                Выход к кинотеатру «Художественный».
                            </p>
                            <p className="block-text__par">
                                Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">
                                На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">
                                Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!</p>

                        </Address>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Александровский сад"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >

                            <p className="block-text__par">Выход на ул. Воздвиженка.
                            </p>
                            <p className="block-text__par">Из метро налево по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!
                            </p>
                        </Address>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Библиотека им. Ленина"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >

                            <p className="block-text__par">Идём по указателям «Выход в город на ул. Воздвиженка».

                            </p>
                            <p className="block-text__par">Из стеклянных дверей метро по подземному переходу вперед до упора и наверх.
                                Вы на Воздвиженке: сзади Кремль, слева Библиотека, впереди «Детский мир».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!
                            </p>
                        </Address>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Боровицкая"
                            schema={schemaSrc}
                            time="8 минут"
                            distance="690 метров"
                        >

                            <p className="block-text__par">В метро переходим на станцию Арбатская.
                                Выход к кинотеатру «Художественный»
                            </p>
                            <p className="block-text__par">Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="block-text__par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="block-text__par">Рады видеть Вас!
                            </p>
                        </Address>
                    </section>

                    <ContactsPage/>

                    <FormOrder/>
                    <LinksBlock links={links}/>
                </div>
            </Wrapper>
        )
    }
}


export default page
