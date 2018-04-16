import React, { Component } from 'react';

import Link from 'next/link';
import Title from '../common/Title'
import ProfitsBlockSlider from '../common/ProfitsBlockSlider'
import ImageBlock from '../common/ImageBlock'
import OrderForm from '../common/OrderForm'
import Work from '../common/Work'
import Service from '../common/Service'
import LinksBlock from '../common/LinksBlock'
import ReviewBlockSlider from '../common/ReviewBlockSlider'


import { formConfig } from '../config/formConfig';
import { profitBlockConfigShort } from '../config/profitBlockConfig';
import reviewBlockConfig from '../config/reviewBlockConfig';
import links from '../config/linksBlockConfig'
import imageSrc from '../../img/contacts/1.jpg';

import Accordion from './components/Accordion'

class Index extends Component {
    state = {
        display: false
    }

    handleAccordions = () => {
        this.setState({ display: false })
    }
    render() {

    const { display } = this.state

        return(
            <div>
                <Title name="Цены и сроки"/>
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Написание кандидатской диссертации на заказ
                        </h2>
                        <p className="block-text__par">
                            Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний.
                        </p>
                    </section>
                <Accordion
                    display={display}
                    handleAccordions={this.handleAccordions} 
                    name="Написание кандидатской диссертации на заказ"
                    introduction="Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний."
                    tableNames={["Ответы на вопросы", "ГОСы, экзамены, шпаргалки", "Презентация в Power Point", "Контрольная работа", "Чертежи (А0-А4)", "Реферат", "Реферат"]}
                    tablePrices={["от 50", "от 50", "от 50", "от 50", "от 50", "от 150 т.р.", "от 150 т.р."]}
                />
                <Accordion
                    display={display}
                    handleAccordions={this.handleAccordions} 
                    name="Виды работ — 3"
                    introduction="Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний."
                    tableNames={["Ответы на вопросы", "ГОСы, экзамены, шпаргалки", "Презентация в Power Point", "Контрольная работа", "Чертежи (А0-А4)", "Реферат", "Реферат"]}
                    tablePrices={["от 50", "от 50", "от 50", "от 50", "от 50", "от 150 т.р.", "от 150 т.р."]}
                />
                <Accordion
                    display={display}
                    handleAccordions={this.handleAccordions} 
                    name="Виды работ — 4"
                    introduction="Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний."
                    tableNames={["Ответы на вопросы", "ГОСы, экзамены, шпаргалки", "Презентация в Power Point", "Контрольная работа", "Чертежи (А0-А4)", "Реферат", "Реферат"]}
                    tablePrices={["от 50", "от 50", "от 50", "от 50", "от 50", "от 150 т.р.", "от 150 т.р."]}
                />
                <ProfitsBlockSlider profitBlockConfig={ profitBlockConfigShort } />
                <ImageBlock imageSrc={imageSrc}/>
                <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig}/>
                <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig} />
                <section className="block-service diplom-work-serv">
                    <Work url="diplome" workName="Дипломная работа" workDescription="Поможем написать дипломную работу на заказ" cost="от 1 500 ₽" time="от 1 дня"/>
                    <div className="block-service__list list-big">
                        <Service serviceName="Презентация"/>
                        <Service serviceName="Диплом" cost="от 2 500 ₽"/>
                        <Service serviceName="Диплом МВА" cost="от 4 500 ₽" time="от 2 недель"/>
                    </div>
                </section>
                <LinksBlock links={links}/>
            </div>
    )
  }
}

export default Index;