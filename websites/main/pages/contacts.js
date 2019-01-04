import React, {Component} from 'react'
import Link from 'next/link';
import 'components/contacts/style.scss'

import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';
import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';

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
import ImageBlock from 'components/common/ImageBlock';
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"

class page extends Component {
    render() {
        return (
            <Wrapper title="BeSmarter - Контакты" description="На этой страницы указан наш адрес офиса, наша почта и телефоны в Москве, звоните, приезжайте в компанию.">
                <PageWrapper className="bg bg-c2 bg-img bg-img5">
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

                    <ItemScope type="http://schema.org/BreadcrumbList">
                        <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
                        <ItemListElement url="https://besmarter.ru/contacts" name="Контакты" position="2" />
                    </ItemScope>



                    <BlockNav>
                        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
                    </BlockNav>

                    <div itemScope itemType="http://schema.org/Organization">
                        <TextBlock>
                            <h2 itemProp="name" className="title">Офис</h2>
                            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                <p className="subtitle subtitle-orange__micro">
                                    <span itemProp="addressLocality">Москва, </span>
                                    <span itemProp="streetAddress">Большой Кисловский переулок {"\n"}д. 1, стр. 2, офис 211</span>
                                </p>
                            </div>
                            <p className="par">
                                Понедельник - пятница <span className="bold">с 09:00 до 19:30</span><br/>
                                Суббота - Воскресенье <span className="bold">с 10:00 до 18:30</span><br/>
                            </p>
                            <p className="par finish-text">
                                График работы в новогодние праздники:
                            </p>
                            <ul class='schedule'>
                                <li>28 декабря с 9-00 до 15-30</li>
                                <li>29 декабря, 3, 4 и 8 января с 10-00 до 19-00</li>
                                <li>30 декабря с 10-00 до 15-00 </li>
                                <li>31 декабря и 1,2,5,6,7 января - выходной</li>
                            </ul>
                            <p className="par finish-text">
                                Приходите – мы ждём Вас!
                            </p>

                            <h2 className="title">
                                Телефон
                            </h2>
                            <p className="subtitle subtitle-orange">
                                <span itemProp="telephone" className="phone">+7 (495) 772-40-90</span>
                                <span itemProp="telephone" className="phone">+7 (495) 772-90-40</span>
                            </p>
                            <p className="par">
                                Понедельник - пятница <span className="bold">с 09:00 до 23:00</span><br/>
                                Суббота - воскресенье <span className="bold">с 09:00 до 22:00</span>
                            </p>
                            <p className="par finish-text">
                                График работы в новогодние праздники:
                            </p>
                            <ul class='schedule'>
                                <li>28 декабря с 9-00 до 19-00</li>
                                <li>29, 30 декабря с 9-00 до 22-00 </li>
                                <li>31 декабря, 1,2,5,6,7 января с 12-00 до 18-00  </li>
                                <li>3,4 января с 10-00 до 22-00 </li>
                                <li>8 января – с 10-00 до 19-00</li>
                            </ul>
                            <p className="par finish-text">
                                Звоните – будем рады поговорить!
                            </p>
                            <h2 className="title">
                                Почта
                            </h2>
                            <p itemProp="email" className="subtitle subtitle-orange">
                                <a href="mailto:zakaz@besmarter.ru?subject=Новая заявка" onClick={() => {
                                    stat.triggerTarget.emailClicked();
                                    return true;
                                }} style={{color: "#f4511e"}}>zakaz@besmarter.ru</a>
                            </p>
                            <p className="par">
                                Возникли вопросы?
                            </p>
                            <p className="par finish-text">
                                Пишите – ответим!
                            </p>
                            <div className="block-callask__buttons">
                                <ToggleQuestionPopup targetID="question_contacts"><a className="block-callask__button">Задать вопрос</a></ToggleQuestionPopup>
                                <ToggleCallPopup targetID="call_me_contacts"><a className="block-callask__button">Заказать звонок</a></ToggleCallPopup>
                            </div>
                        </TextBlock>
                    </div>

                    <ImageBlock imageSrc={require('static/images/block/happy-new-year.jpg')}/>

                    <MapBlock/>
                    <TextBlock>
                        <h2 className="title">
                            Как пройти
                        </h2>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Арбатская"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >
                            <p className="par">
                                Выход к кинотеатру «Художественный».
                            </p>
                            <p className="par">
                                Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="par">
                                На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="par">
                                Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="par">Рады видеть Вас!</p>

                        </Address>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Александровский сад"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >

                            <p className="par">Выход на ул. Воздвиженка.
                            </p>
                            <p className="par">Из метро налево по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="par">Рады видеть Вас!
                            </p>
                        </Address>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Библиотека им. Ленина"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                        >

                            <p className="par">Идём по указателям «Выход в город на ул. Воздвиженка».

                            </p>
                            <p className="par">Из стеклянных дверей метро по подземному переходу вперед до упора и наверх.
                                Вы на Воздвиженке: сзади Кремль, слева Библиотека, впереди «Детский мир».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="par">Рады видеть Вас!
                            </p>
                        </Address>
                        <Address
                            handleMaps={this.handleMaps}
                            metro="м. Боровицкая"
                            schema={schemaSrc}
                            time="8 минут"
                            distance="690 метров"
                        >

                            <p className="par">В метро переходим на станцию Арбатская.
                                Выход к кинотеатру «Художественный»
                            </p>
                            <p className="par">Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
                            </p>
                            <p className="par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
                            </p>
                            <p className="par">Мимо охраны на второй этаж направо.
                                Комната 211 с лисенком - это уже мы.
                            </p>
                            <p className="par">Рады видеть Вас!
                            </p>
                        </Address>
                    </TextBlock>

                    <ContactsPage/>

                    <FormOrder/>
                    <LinksBlock links={links}/>
                </PageWrapper>
            </Wrapper>
        )
    }
}


export default page
