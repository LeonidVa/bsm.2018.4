import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
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

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";


import links from "data/linksBlock/stati/neskolkoPravil";
import LinksBlock from "components/common/LinksBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";


const page = () => (
  <Wrapper title="Несколько правил удачной защиты | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Самообладанием может похвастаться не каждый, особенно при таком важном процессе, как защита дипломной работы, от которой зависит будущее. Зачастую, волнительным бывает не только процесс защиты, но и написания. Поэтому, чтобы оградить себя от лишних переживаний, стоит незамедлительно сделать диплом на заказ и быть уверенным в успехе.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



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
            <a>Несколько правил удачной защиты</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/neskolko-pravil-uspeshnoj-zashhity" name="Несколько правил удачной защиты" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__top-title">Дипломная работа</span>
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

      <TextBlock>
        <h1 className="title">
          Несколько правил удачной защиты
        </h1>
        <p className="par">
          Самообладанием может похвастаться не каждый, особенно при таком важном процессе, как защита дипломной работы, от которой зависит будущее. Зачастую, волнительным бывает не только процесс защиты, но и написания. Поэтому, чтобы оградить себя от лишних переживаний, стоит незамедлительно сделать <Link
          href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link> и быть уверенным в успехе.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(10).jpg')} altText="Несколько правил удачной защиты"/>

      <TextBlock>
        <p className="par">
          После того, как диплом будет готов, а перед его защитой будут оставаться считанные дни, стоит начать подготовку, которая не так уж и сложна по своей сути.
        </p>
        <p className="par">
          Во-первых, прочитайте весь материал, ведь следует ознакомиться с его содержанием перед защитой, пусть, даже если Вы писали его самостоятельно не стоит надеяться на свою память, освежите ее прочтением написанного. После чего выделите с помощью тезисов самое главное и нужное, не будет лишним, выписывать все отдельно на
          листок или перепечатывать на компьютер для последующего распечатывания. Нужно это в первую очередь для лучшего запоминания, так будет работать не только зрительная память.
        </p>
        <p className="par">
          Не стоит искать замысловатые фразы, которыми Вы собираетесь блеснуть, показывая совершенство своих знаний, они никому не нужны, главная задача для Вас – успешная защита. Как правило, защищая диплом нужно его рассказывать, поэтому не поленитесь выучить все свои заметки, в том числе таблицы или диаграммы, если они имеются.
          Зрительные образы, которые Вы представите на сдаче, помогут не только Вам лучше представить дипломную работу, но и экзаменаторам понять, о чем, же Вы им рассказываете, ведь правило того, что зрительный материал усваивается лучше, распространяется и на них.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <p className="par">
          Если в Вашем вузе при защите дипломной работы разрешается использовать презентации, то не поленитесь и воспользуйтесь этой возможностью. Этим Вы поднимете свой уровень в глазах экзаменатора, он будет знать, что Вы готовились к защите и потратили немало времени и сил, а значит, заслуживаете высокой отметки. Кроме всего
          прочего презентация будет полезна и для Вас, с ее помощью не стоит запоминать большой объем информации, она будет написана и ее можно будет прочесть.
        </p>
        <p className="par">
          Закончив свою подготовку можно и расслабиться, провести время с друзьями и немного отвлечься от предстоящего события. Психологический настрой важен, ведь подготовившись морально, шансы на успех увеличиваются. Вы не будете думать о своем провале или о том, что от волнения забудете обо всем заученном, наоборот воспримете
          предстоящее как простое публичное выступление, за которое будет небольшое поощрение в виде диплома об окончании факультета. Так же, можете посоветовать друзьям, и сокурсникам, не столь расторопным как Вы, где можно <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link> и получить его в кратчайшие сроки. Вы
          очень поможете им, ведь диплом будет написан специалистами, работающими на рынке образовательных услуг уже много лет.
        </p>
        <p className="par">
          Мы напишем для Вас и Ваших друзей курсовую, практику, диплом, диссертацию, реферат и т.д. Вы будете приятно удивлены качеством и сроками исполнения. Поэтому не медлите, звоните нам!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <LinksBlock links={links}/>

    </PageWrapper>
  </Wrapper>
);


export default page
