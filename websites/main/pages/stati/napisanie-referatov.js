import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/referat';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Referat from "components/common/ServiceBlock/ready-made/Referat";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";


const page = () => (
  <Wrapper title="Написание рефератов | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Каждому студенту знакома такая ситуация: через пару дней уже начинается сессия, а рефераты, которые нужно было сделать в течение семестра, еще не готовы. Казалось бы, всего лишь какие-то рефераты могут стать препятствием на пути к сессии! Но, увы и ах, это так. Время летит так быстро, а работа, семья, друзья, естественно, требуют к себе внимания. Чтобы написание реферата не превратилось в препятствие к успешной сессии, наша компания BeSmarter! всегда готова протянуть свою руку помощи!">
    <PageWrapper className="bg bg-c2 bg-img bg-img5">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/stati">
            <a>Статьи</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Написание рефератов</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/napisanie-referatov" name="Написание рефератов" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Referat/>

<MatZashGirl/>

      <TextBlock>
        <h1 className="title">
          Написание рефератов
        </h1>
        <p className="par italic right">
          "Важно не количество знаний, а качество их. Можно знать очень многое, не зная самого нужного."
        </p>
        <p className="par bold right">
          Лев Николаевич Толстой
        </p>
        <p className="par">
          Каждому студенту знакома такая ситуация: через пару дней уже начинается сессия, а рефераты, которые нужно было сделать в течение семестра, еще не готовы. Казалось бы, всего лишь какие-то рефераты могут стать препятствием на пути к сессии! Но, увы и ах, это так. Время летит так быстро, а работа, семья, друзья, естественно,
          требуют к себе внимания. Чтобы <b>написание реферата</b> не превратилось в препятствие к успешной сессии, наша компания BeSmarter! всегда готова протянуть свою руку помощи!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(9).jpg')} altText="Написание рефератов"/>

      <TextBlock>
        <p className="par">
          Помните, чтобы успешно сдать сессию нужно как следует высыпаться. Доктора советуют отводить на сон не менее восьми часов, именно это время необходимо, чтобы организм полностью отдохнул и набрал сил. Не стоит забывать об этой рекомендации даже тогда, когда накопилась масса неотложных дел, Ваше здоровье прежде всего! Но как
          же быть, если до сдачи курсовой всего несколько дней, а Вы к ней еще даже и не приступали? Конечно, обратиться за помощью к нам!
        </p>
        <p className="par">
          Вы сами указываете нужные сроки выполнения работы, ровно в которые и получаете уже готовую курсовую. Наши авторы – профессионалы с многолетним стажем работы, кандидаты и доктора наук, которые качественно и грамотно выполнят курсовую любого уровня сложности и абсолютно любой тематики.
        </p>
      </TextBlock>

      <TextBlock>
        <p className="par">
          Секрет успешной сессии несложен: главное – вовремя сдавать все работы в течение семестра, но ведь не у всех это получается, и причины этого могут быть совершенно разными. И если уж так сложилось, что Вы никак не успеваете закрыть все «хвосты», мы всегда поможем Вам преодолеть трудности!
        </p>
        <p className="par">
          Представьте себе, что Вам больше не придется отпрашиваться у начальника домой, чтобы провести вечер наедине с компьютером и рефератом, больше не нужно выкраивать драгоценные часы на то, чтобы сходить в кафе с друзьями или съездить на пикник со своей семьей! Все это становится возможно с нашей помощью и поддержкой!
        </p>
        <p className="par">
          Реферат – это работа, суть которой заключается в сборе информации определенной тематики, то есть, это, своего рода изложение различных точек зрения на некую проблему и подведение итогов. Реферат не является очень сложной работой, но при этом требует к себе довольно много времени и внимания, которое, если задуматься, можно
          потратить с куда большей пользой.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <p className="par">
          В нашей компании работают специалисты высочайшего уровня профессионализма – кандидаты и доктора наук, не понаслышке знакомые с выполнением не только рефератов, но и всех других видов студенческих работ – контрольных, эссе, курсовых, дипломов. Вы указываете тему и дисциплину, по которой нужно написать реферат, сроки, в
          которые должен уложиться наш автор, в <a href="#form">заявке</a> или по телефону <b>+7 495 772-4090</b> нашему менеджеру, а все остальное сделаем мы!
        </p>
        <p className="par">
          В офисе компании BeSmarter! на Никитском бульваре мы ждем Вас в любое, удобное для Вас, время для заключения договора, где прописаны все наши обязательства перед Вами. А на нашем сайте Вы всегда можете почитать многочисленные отзывы клиентов компании, которым мы оказали <b>помощь в написании рефератов</b> (и не только
          рефератов!). Многие из них, кстати говоря, стали нашими постоянными клиентами.
        </p>
        <p className="par">
          Мы не случайно в начале этой статьи привели цитату Льва Николаевича Толстого, чья мудрость прошла через годы и никогда не перестанет быть актуальной. Уделяйте время тем занятиям, которые любите, только тогда Вы сможете получить истинные знания. Отвлекайтесь только на самое важное, а все остальное возьмем на себя мы.
        </p>
        <p className="par">
          Звоните прямо сейчас, мы Вас ждем!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </PageWrapper>
  </Wrapper>
);


export default page
