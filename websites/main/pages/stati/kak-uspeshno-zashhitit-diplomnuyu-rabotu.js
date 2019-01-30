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
import infoBlockConfig from 'data/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper title="Как успешно защитить дипломную работу | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Многие из студентов ведущих вузов защищают в первый раз (и частенько в последний) в своей жизни дипломный проект. Поэтому только одно упоминание о защите дипломной работы и недостаток опыта в данном деле приводит в ужас. Еще бы, ведь испытание для дипломника предстоит не из легких! Возникает мысль – купить диплом на заказ. Однако не стоит бояться, страх Вам отнюдь не товарищ. А вот сведущие специалисты с высшим образованием, написавшие не одну сотню дипломов – как раз наоборот, верные помощники и опора. Ведь кто кроме их знает досконально все правила написания дипломного проекта или работы.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Как успешно защитить дипломную работу'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/kak-uspeshno-zashhitit-diplomnuyu-rabotu" name="Как успешно защитить дипломную работу" position="3" />
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
        <h1>
          Как успешно защитить дипломную работу
        </h1>
        <p className="par">
          Многие из студентов ведущих вузов защищают в первый раз (и частенько в последний) в своей жизни дипломный проект. Поэтому только одно упоминание о защите дипломной работы и недостаток опыта в данном деле приводит в ужас. Еще бы, ведь испытание для дипломника предстоит не из легких! Возникает мысль – купить <Link
          href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>. Однако не стоит бояться, страх Вам отнюдь не товарищ. А вот сведущие специалисты с высшим образованием, написавшие не одну сотню дипломов – как раз наоборот, верные помощники и опора. Ведь кто кроме их знает досконально все правила написания дипломного проекта
          или работы.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(6).jpg')} altText="Как успешно защитить дипломную работу"/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Основные правила написания диплома
        </h2>
        <ul>
          <li>
            Каждому из студентов всегда назначают научного руководителя. Научным руководителем чаще всего бывает преподаватель. Научный руководитель знает требования каждого из преподавателей, которые могут быть в комиссии по защите. Поэтому не избегайте встреч с Вашим руководителем. Заранее обсудите с ним тему и каждую главу вашей
            дипломной работы.
          </li>
          <li>
            Конечно, лучше писать диплом самому. Тогда Вы удете сами ориентироваться в материале «как рыба в воде». Но подобрать сильный материал на нужную тему достаточно сложно. Мы поможем Вам в написании дипломного проекта. Работа на заказ будет выполнена в срок. Все будет четко структурированно. Вы с легкостью разберетесь даже
            в самой сложной теме, ведь работу на тему напишет человек с большим преподавательским опытом и множеством научных публикаций по данной тематике дипломного проекта или работы.
          </li>
          <li>
            Заказ диплома у специалиста нашей компании выгоден в связи с маленькими сроками предзащиты. Студенту дается максимум два дня для подготовки к предзащите дипломной работы. А ведь готовиться к предзащите нужно серьезнее, чем к защите. Именно от предзащиты зависит – справитесь ли Вы с защитой на все 100 %. Мы напишем Ваш
            диплом в короткие сроки, тем самым Вы сможете грамотно подойти к предзащите и выстроить сильную презентацию своего дипломного проекта.
          </li>
          <li>
            Несмотря на то, что Вам помогают в написании работы – все равно следует посещать консультации преподавателей и научного руководителя. Станьте частым гостем в стенах их кабинетов. Во-первых, Вы выкажете уважение к ним. Во-вторых, оперативно узнаете о возможных недочетах в работе. В-третьих, посоветуетесь и поймете, на
            что нужно обратить более пристальное внимание, а чего лучше не касаться вовсе.
          </li>
        </ul>
        <p className="par">
          Защита диплома – самая ответственная часть Вашего обучения. Ведь она показывает итоги всей учебы в вузе. По ней понятно, какой из Вас получится специалист. Многие компании набирают в свой штат сотрудников по результатам защиты дипломной работы. Поэтому стоит <Link href="/diplom-na-zakaz"><b><a>заказать
          диплом</a></b></Link> у проверенных специалистов, которыми являются сотрудники нашей компании. Тысячи довольных выпускников, с блеском защитившие свои дипломные работы – тому яркое подтверждение. Мы пишем, мы творим, мы делаем дипломы быстро, качественно, разбираясь досконально в самых сложнейших темах – от истории
          межэтнических конфликтов до создания двигателя Николы Тесла.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </PageWrapper>
  </Wrapper>
);


export default page
