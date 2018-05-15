import React from 'react'

import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'

import Title from 'components/common/Title'

/*<p>
{this.props.statusCode
    ? `An error ${this.props.statusCode} occurred on server`
    : 'An error occurred on client'}
</p>*/

export default class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {statusCode}
    }

    render() {
        return (
            <Wrapper title="Главная">
                <div className="wrapper bg bg-c2 bg-img bg-img4">

                    <section className="breadcrumbs">
                        <div className="inner">
                            <Link href="/">
                                <a>Главная</a>
                            </Link>
                            <span> / </span>
                            <a>Страница не найдена</a>
                        </div>
                    </section>

                    <Title>Не найдена страница? Попробуй другую</Title>

                    <section className="block-nav">
                        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
                        <NavRow url='/price' title="Услуги и цены" description="Все для твоей учебы"/>
                        <NavRow url='/contacts' title="Контакты" description="Узнай, где нас найти"/>
                    </section>

                    <MessBlock/>

                    <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                        <h2 className="block-form-timer__title">
                            <span style={{fontSize: "5em", marginTop: "-3em"}}>404</span><br/>
                            Не работает сайт? Работает телефон!
                        </h2>
                        <CallMeFormWithTimer timerDuration={0}>
                            <p>Звони нам, мы на связи!<br/><br/><a href="tel:+79457724090">+7 945 772 4090</a></p>
                        </CallMeFormWithTimer>
                    </section>


                    <a name="form"/>
                    <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

                </div>
            </Wrapper>
        )
    }
}



