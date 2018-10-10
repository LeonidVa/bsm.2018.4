import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplomNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import React from "react";
import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Дипломная работа по педагогике на заказ – цена и сроки написания, сколько стоит заказать диплом в Москве" description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по педагогике по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Дипломная работа по дошкольной социальной коррекционной педагогике"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/diplom-na-zakaz">
            <a>Дипломная работа</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По педагогике</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/diplom-na-zakaz/pedagogika#form">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Дипломная работа</span>
              <p className="block-service__par">Быстро и качественно!</p>
              <p className="block-service__par">С нами твоя защита пройдет легко!</p>
              <p className="block-service__par">От 14 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Дипломный проект"
            text={[<p>от 21 000 руб.</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Магистерская диссертация"
            text={[<p>от 23 000 руб.</p>]}
          />

          <CardPopInfo
            url="/diplom-mba-na-zakaz"
            title="Диплом MBA"
            text={[<p>от 25 000 руб.</p>]}
          />
        </div>
      </section>

<MatZashGirl/>


      <section className="block-text">
        <h1 className="block-text__title">
          Заказать дипломную работу по педагогике
        </h1>
        <ul style={{listStyle: 'none'}}>
          <li>
            Вас интересует, сколько стоит дипломная работа по дошкольной педагогике, подготовленная опытными педагогами?
          </li>
          <li>
            Вы хотите сдать преподавателям диплом по социальной педагогике с высокой уникальностью?
          </li>
          <li>
            Вам требуется качественная и интересно написанная дипломная работа по педагогике?
          </li>
        </ul>
        <p className="block-text__par">
          Тогда Вам просто необходимо обратиться в компанию BeSmarter!
        </p>
        <p className="block-text__par">
          Наши специалисты охотно подготовят для Вас диплом по коррекционной педагогике и другим педагогическим дисциплинам!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-po-ped.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Дипломная работа по педагогике
        </h2>
        <p className="block-text__par">
          Если у Вас не достаточного количества времени для написания главного студенческого труда, то специалисты нашей компании подготовят для Вас дипломные работы по социальной педагогике в наиболее сжатые сроки.
        </p>
        <p className="block-text__par">
          Обратившись в BeSmarter!, Вы получаете:
        </p>
        <ul style={{listStyle: 'none'}}>
          <li>
            <b>Гарантии качества</b><br/>
            Все наши обязательства перед клиентом указываются в контракте. Дипломные проекты от наших авторов – это итог научных исследований, проведенных специалистами с большим педагогическим опытом.
          </li>
          <li>
            <b>Гарантии качества</b><br/>
            Все наши обязательства перед клиентом указываются в контракте. Дипломные проекты от наших авторов – это итог научных исследований, проведенных специалистами с большим педагогическим опытом.
          </li>
          <li>
            <b>Высокую уникальность текста</b><br/>
            Дипломная работа по коррекционной педагогике, написанная нашими авторами, проверяется по системе «Антиплагиат». Ее уникальность – более 70%.
          </li>
          <li>
            <b>Оперативность выполнения работ</b><br/>
            Мы готовы написать для Вас диплом в срок от одного дня.
          </li>
          <li>
            <b>Приемлемая стоимость</b><br/>
            Мы предлагаем выгодное соотношение качества и цены, которая варьируется в пределах 14000-45000 рублей.
          </li>
          <li>
            <b>Сопровождение до защиты</b><br/>
            Мы готовы вносить правки в работу в течение гарантийного срока совершенно бесплатно. Но и после этого мы продолжаем сотрудничать с Вами до Вашей успешной защиты.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Заказать диплом по педагогике
        </h2>
        <p className="block-text__par">
          Если Вы решили заказать дипломную работу по педагогике, то мы охотно принимаем Вашу заявку и подготавливаем техническое задание, по которому наш специалист пишет работу. В задании мы перечисляем предпочитаемые Вами методики, желаемый возраст и количество детей в группах, а также другие важные детали проекта.
          Нужен качественный диплом по педагогике?

        </p>
        <p className="block-text__par">
          Нужен качественный дипломный проект по педагогике? Напишем!
        </p>
        <p className="block-text__par">
          звоните нам +7 495 772 40 90, воспользуйтесь удобной формой заказа или сразу приезжайте в наш <Link href="/contacts"><b><a>офис</a></b></Link>, который находится на Арбате!
        </p>
      </section>

      <Video>
        <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameBorder="0" allowfullscreen></iframe>
      </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
