import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';
import OrderForm from 'components/common/forms/Big/Order';
import FormWithTimer from 'components/common/forms/WithTimer';
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

function getIP(req) {
  if (typeof req === "undefined"
    || req === null
    || req.connection === undefined
    || req.connection === null
    || req.connection.remoteAddress === undefined
    || req.connection.remoteAddress === null
  ) {
    return false;
  }
  return req.connection.remoteAddress;
}

export default class Error extends React.Component {
  static getInitialProps({err, res, xhr, req}) {

    /*   console.log('req.headers');
       const {headers =[]}=req;
       console.log(headers);*/
    ////////////

    const statusCode = (res && res.statusCode) || (xhr && xhr.status) || null;
    const url = (req && req.url) || null;
    /* check if redirect is required and if yes - do it and exit */

    if (isInitialClientRender) {
      telega('Error rendering on page ' + url + '```' + err.message + '``` and ```' + err.toString() + '```');
      // rethrow to prevent the error view from displaying on initial client render
      throw err;
    }
    const ip = getIP(req);
    if (!isClient) {
      if (ip === "::1"
        || ip === "::ffff:127.0.0.1") {
      } else {
        const {connection = null} = req;
        if (connection !== null) {
          const {remoteAddress = 'unknown'} = connection;
          telega('Error ' + statusCode + ' on page ' + url + ' ip ' + remoteAddress);
        }
      }
    }
    return {statusCode, url};
  }


  render() {
    const {statusCode} = this.props;
    return (
      <Wrapper title="Главная">
        <PageWrapper className="bg bg-c2 bg-img bg-img4">

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

          <BlockNav>
            <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            <NavRow url='/price' title="Услуги и цены" description="Все для твоей учебы"/>
            <NavRow url='/contacts' title="Контакты" description="Узнай, где нас найти"/>
          </BlockNav>

          <MessBlock/>

          <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
            <h2 className="block-form-timer__title">
              <span style={{fontSize: "5em", marginTop: "-3em"}}>{statusCode}</span><br/>
              Не работает сайт? Работает телефон!
            </h2>
            <FormWithTimer timerDuration={0}>
              <p>Звони нам, мы на связи!<br/><br/><a href="tel:+79257724090">+7 925 772 4090</a></p>
            </FormWithTimer>
          </section>

          <a name="form" id="form"/>
          <OrderForm />

        </PageWrapper>
      </Wrapper>
    )
  }
}
