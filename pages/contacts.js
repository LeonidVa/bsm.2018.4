import React, {Component} from 'react'
import Wrapper from 'components/Wrapper';
import Link from 'next/link';
import Title from 'components/common/Title'
import MapBlock from 'components/common/MapBlock';
import ImageBlock from 'components/common/ImageBlock'
import OrderForm from 'components/common/OrderForm'
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'
import formConfig from 'components/config/formConfig';
import reviewBlockConfig from 'components/config/reviewBlockConfig';
import links from 'components/config/linksBlockConfig';
import schemaSrc from 'img/contacts/how-to-go.jpg';
import ContactsInfo from 'components/contacts/ContactsInfo'
import Address from 'components/contacts/Address'


class page extends Component {
    state = {
        display: false,
        modalIsOpen: false,
    }


    handleMobMenu = () => {

        this.setState({showMenuMob: !this.state.showMenuMob})
    }

    closeModal = () => {

        this.setState({modalIsOpen: false})
    }
    openModal = () => {

        this.setState({modalIsOpen: true})
    }

    render() {

        const {display} = this.state
        return (
            <Wrapper title="BeSmarter - Контакты">
                <div className="wrapper bg bg-c2 bg-img bg-img5">
                    <Title>Контакты</Title>
                    <ContactsInfo openModal={this.openModal}/>
                    <MapBlock/>
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
                    <ImageBlock imageSrc={require('img/block/f.jpg')}/>
                    <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig}/>
                    <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

                    <section className="block-service">
                        <Link href="/diplom">
                            <div className="block-service__top" style={{backgroundImage: "url(" + require('img/block/j.jpg') + ")"}}>
                                <div className="block-service__text gradient-l-white">
                                    <span className="block-service__title">Дипломная работа</span>
                                    <p className="block-service__par">
                                        Поможем написать дипломную работу на заказ
                                    </p>
                                    <p className="block-service__par">
                                        от 10 500 ₽<br/>
                                        от 10 дня
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className="block-service__list list-3">
                            <Link href="/">
                                <div className="block-service__list-item">
                                    <span className="block-service__list-title">Курсовая</span>
                                    <p>от 4 500 ₽</p>
                                    <p>от 2 недель</p>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="block-service__list-item">
                                    <span className="block-service__list-title">Курсовая</span>
                                    <p>от 4 500 ₽</p>
                                    <p>от 2 недель</p>
                                </div>
                            </Link>
                            <Link href="/">
                                <div className="block-service__list-item">
                                    <span className="block-service__list-title">Курсовая</span>
                                    <p>от 4 500 ₽</p>
                                    <p>от 2 недель</p>
                                </div>
                            </Link>
                        </div>
                    </section>
                    <LinksBlock links={links}/>
                </div>
            </Wrapper>
        )
    }
}


export default page