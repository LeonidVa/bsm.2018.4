import React, { Component } from 'react'

import Head from 'next/head'

import Header from './components/Header'
import Footer from './components/Footer'
import OrderCall from './components/Header/components/OrderCallModal';

import Link from 'next/link';
import Title from './components/common/Title'
import MapBlock from './components/common/MapBlock';
import ImageBlock from './components/common/ImageBlock'
import OrderForm from './components/common/OrderForm'
import Work from './components/common/Work'
import Service from './components/common/Service'
import LinksBlock from './components/common/LinksBlock'
import ReviewBlockSlider from './components/common/ReviewBlockSlider'

import { formConfig } from './components/config/formConfig';
import reviewBlockConfig from './components/config/reviewBlockConfig';
import links from './components/config/linksBlockConfig';
import imageSrc from '../img/contacts/1.jpg';
import schemaSrc from '../img/contacts/how-to-go.jpg';

import ContactsInfo from './components/contacts/ContactsInfo'
import Address from './components/contacts/Address'


import './index.scss'

class ContactPage extends Component {
    state = {
        display: false,
        modalIsOpen: false,
    }


    handleMobMenu = () => {

        this.setState({ showMenuMob: !this.state.showMenuMob })
    }

    closeModal = () => {

        this.setState({ modalIsOpen: false })
    }
    openModal = () => {

        this.setState({ modalIsOpen: true })
    }
    render() {

        const { display } = this.state
        return (
            <div>
                <Head>
                    <title>BeSmarter - Контакты</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                </Head>
                 <div className="wrapper contacts">
                    <Header />
                    <Title name="Контакты" />
                    <OrderCall closeModal={this.closeModal}
                        display={this.state.modalIsOpen ? 'block' : 'none'} />
                    <ContactsInfo openModal={this.openModal} />
                    <MapBlock />
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Как пройти
                        </h2>
                        <Address
                            display={display}
                            handleMaps={this.handleMaps}
                            metro="м. Арбатская"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                            route="Выход на ул. Воздвиженка. Из метро налево по ул. Воздвиженка в сторону Кремля до подземного перехода напротив «Детского мира». Из перехода в переулок между салоном «Мерседес» и «Детским миром» – Вы уже на Большом Кисловском. Сразу по левой стороне дом с кафе – это уже наш: дом 1, строение 2. Проходите мимо всех кафе в коричневую стеклянную дверь бизнес-центра."
                            officeRoute="Мимо охраны на второй этаж направо. Комната 211 с лисёнком – это уже мы. Рады видеть Вас!"
                        />
                        <Address
                            display={display}
                            handleMaps={this.handleMaps}
                            metro="м. Александровский сад"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                            route="Выход на ул. Воздвиженка. Из метро налево по ул. Воздвиженка в сторону Кремля до подземного перехода напротив «Детского мира». Из перехода в переулок между салоном «Мерседес» и «Детским миром» – Вы уже на Большом Кисловском. Сразу по левой стороне дом с кафе – это уже наш: дом 1, строение 2. Проходите мимо всех кафе в коричневую стеклянную дверь бизнес-центра."
                            officeRoute="Мимо охраны на второй этаж направо. Комната 211 с лисёнком – это уже мы. Рады видеть Вас!"
                        />
                        <Address
                            display={display}
                            handleMaps={this.handleMaps}
                            metro="м. Боровицкая"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                            route="Выход на ул. Воздвиженка. Из метро налево по ул. Воздвиженка в сторону Кремля до подземного перехода напротив «Детского мира». Из перехода в переулок между салоном «Мерседес» и «Детским миром» – Вы уже на Большом Кисловском. Сразу по левой стороне дом с кафе – это уже наш: дом 1, строение 2. Проходите мимо всех кафе в коричневую стеклянную дверь бизнес-центра."
                            officeRoute="Мимо охраны на второй этаж направо. Комната 211 с лисёнком – это уже мы. Рады видеть Вас!"
                        />
                        <Address
                            display={display}
                            handleMaps={this.handleMaps}
                            metro="м. Библиотека им. Ленина"
                            schema={schemaSrc}
                            time="5 минут"
                            distance="420 метров"
                            route="Выход на ул. Воздвиженка. Из метро налево по ул. Воздвиженка в сторону Кремля до подземного перехода напротив «Детского мира». Из перехода в переулок между салоном «Мерседес» и «Детским миром» – Вы уже на Большом Кисловском. Сразу по левой стороне дом с кафе – это уже наш: дом 1, строение 2. Проходите мимо всех кафе в коричневую стеклянную дверь бизнес-центра."
                            officeRoute="Мимо охраны на второй этаж направо. Комната 211 с лисёнком – это уже мы. Рады видеть Вас!"
                        />
                    </section>
                    <ImageBlock imageSrc={imageSrc} />
                    <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig} />
                    <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig} />
                    <section className="block-service diplom-work-serv">
                        <Work url="diplome" workName="Дипломная работа" workDescription="Поможем написать дипломную работу на заказ" cost="от 1 500 ₽" time="от 1 дня" />
                        <div className="block-service__list list-big">
                            <Service serviceName="Презентация" />
                            <Service serviceName="Диплом" cost="от 2 500 ₽" />
                            <Service serviceName="Диплом МВА" cost="от 4 500 ₽" time="от 2 недель" />
                        </div>
                    </section>
                    <LinksBlock links={links} />
                    <Footer />
                </div>
            </div>
        )
    }
}


export default ContactPage