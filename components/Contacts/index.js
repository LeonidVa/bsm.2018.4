import React, { Component } from 'react'


import Link from 'next/link';
import Title from '../common/Title'
import MapBlock from '../common/MapBlock';
import ImageBlock from '../common/ImageBlock'
import OrderForm from '../common/OrderForm'
import Work from '../common/Work'
import Service from '../common/Service'
import LinksBlock from '../common/LinksBlock'
import ReviewBlockSlider from '../common/ReviewBlockSlider'

import { formConfig } from '../config/formConfig';
import reviewBlockConfig from '../config/reviewBlockConfig';
import links from '../config/linksBlockConfig';
import imageSrc from '../../img/contacts/1.jpg';
import schemaSrc from '../../img/contacts/how-to-go.jpg';

import ContactsInfo from './components/ContactsInfo'
import Address from './components/Address'

class Index extends Component {
    state = {
        display: false
    }

    handleMaps = () => {
        this.setState({display: false})
    }
    render() {
  
        const { display } = this.state
        return (
            <div>
                <Title name="Контакты" />
                <ContactsInfo />
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
            </div>
        )
    }
}

export default Index