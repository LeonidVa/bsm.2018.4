import React, {Component} from 'react';

import Wrapper from 'components/Wrapper';

import Title from 'components/common/Title'
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider'
import ImageBlock from 'components/common/ImageBlock'
import Accordion from 'components/common/Accordion'
import OrderForm from 'components/common/OrderForm'
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'

import {formConfig} from 'components/config/formConfig';
import {profitBlockConfigShort} from 'components/config/profitBlockConfig';
import reviewBlockConfig from 'components/config/reviewBlockConfig';
import links from 'components/config/linksBlockConfig';

const page = () => (
    <Wrapper title="BeSmarter - Услуги и цены">
        <div className="wrapper bg bg-c2 bg-img bg-img2">
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
                open={true}
                title="Виды работ — 4"
                button={true}
                buttonLabel="Нажми меня"
                buttonURL="/"
                rows={[
                    ["Ответы на вопросы", "от 50"],
                    [<a href="/dfdf">dfdfdf</a>, "от 50"],
                    ["Презентация в Power Point", "от 50"],
                    ["Контрольная работа", "от 50"],
                    ["Чертежи (А0-А4)", "от 50"],
                    ["Реферат", "от 50"]
                ]}
            >
                Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний.
            </Accordion>
            <Accordion
                title="Виды работ — 4"
                rows={[
                    ["Ответы на вопросы", "от 50"],
                    [<a href="/dfdf">dfdfdf</a>, "от 50"],
                    ["Презентация в Power Point", "от 50"],
                    ["Контрольная работа", "от 50"],
                    ["Чертежи (А0-А4)", "от 50"],
                    ["Реферат", "от 50"]
                ]}
            >
                Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний.
            </Accordion>
            <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort}/>
            <ImageBlock imageSrc={require('img/block/g.jpg')}/>
            <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig}/>
            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <LinksBlock links={links}/>

        </div>
    </Wrapper>
);

export default page