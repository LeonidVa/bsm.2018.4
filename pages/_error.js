import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';
import FormOrder from 'components/common/forms/Order';
import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';
import Title from 'components/common/Title'
import telega from 'utils/telega';

// Script errors occuring during initial client render can cause the server-rendered
// content to be hidden by an error page. Track router events to determine if the
// error being handled happened during initial render, and throw within
// getInitialProps to allow the server-rendered content to remain visible.
const isClient = typeof window !== 'undefined';
let isInitialClientRender = isClient;
if (isClient) {
    if (Router.ready !== undefined
        && Router.ready !== null
        && Router.router !== undefined
        && Router.router !== null
        && Router.router.once !== undefined
        && Router.router.once !== null
    ) {
        Router.ready(() => {
            Router.router.once('routeChangeStart', () => {
                isInitialClientRender = false;
            });
        });
    }
}


export default class Error extends React.Component {
    static getInitialProps({err, res, xhr, req}) {
        if (isInitialClientRender) {
            telega('Error rendering on page ' + url + '```' + err.message + '``` and ```' + err.toString() + '```');
            // rethrow to prevent the error view from displaying on initial client render
            throw err;
        }
        const statusCode = (res && res.statusCode) || (xhr && xhr.status) || null;
        const url = (req && req.url) || null;
        if (!isClient) {
            telega('Error ' + statusCode + ' on page ' + url);
        }
        return {statusCode, url};
    }


    render() {
        const {statusCode} = this.props;
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
                            <span style={{fontSize: "5em", marginTop: "-3em"}}>{statusCode}</span><br/>
                            Не работает сайт? Работает телефон!
                        </h2>
                        <CallMeFormWithTimer timerDuration={0}>
                            <p>Звони нам, мы на связи!<br/><br/><a href="tel:+79257724099">+7 925 772 4099</a></p>
                        </CallMeFormWithTimer>
                    </section>

                    <a name="form" id="form"/>
                    <FormOrder/>

                </div>
            </Wrapper>
        )
    }
}