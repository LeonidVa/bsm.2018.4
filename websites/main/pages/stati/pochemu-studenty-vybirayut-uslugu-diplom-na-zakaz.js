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


const page = () => (
  <Wrapper title="Почему студенты выбирают услугу «диплом на заказ»? | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Многие студенты в настоящее время отказываются от самостоятельного написания диплома и предпочитают поручать написание дипломного проекта профессиональным исполнителям. Почему так происходит, почему многие предпочитают диплом на заказ?">
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
            <a>Почему студенты выбирают услугу «диплом на заказ»?</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/pochemu-studenty-vybirayut-uslugu-diplom-na-zakaz" name="Почему студенты выбирают услугу «диплом на заказ»?" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <section className="block-service">
        <Link href="/stati/pochemu-studenty-vybirayut-uslugu-diplom-na-zakaz#form">
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

      <TextBlock>
        <h1 className="title">
          Почему студенты выбирают услугу «диплом на заказ»?
        </h1>
        <p className="par">
          Многие студенты в настоящее время отказываются от самостоятельного написания диплома и предпочитают поручать написание дипломного проекта профессиональным исполнителям. Почему так происходит, почему многие предпочитают <a href="/diplom-na-zakaz" target="_blank">диплом на заказ</a>?
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(11).jpg')} altText="Почему студенты выбирают услугу «диплом на заказ»?"/>

      <TextBlock>
        <ol className="fitted">
          <li>
            <b>1. </b>Нехватка времени. Многие студенты давно успешно работают и времени на подготовку проекта просто не остается. Немногие родители могут обеспечить учебу ребенка в платном вузе. Отсутствие интереса к кропотливому муторному труду, исправление многочисленных ошибок и замечаний научного руководителя - также является
            одной из причин. Зачем тратить свое время на поиск уймы материалов, если нужно продвигаться вверх по карьерной лестнице, если важен сам документ об образовании, а не диплом? Такие студенты не могут выкроить силы и время на полноценное обучение. Да и наличие денежных средств также играет свою роль. Зачем терять деньги,
            беря отпуск за свой счет (а большинство работодателей не оплачивают отпуска), если можно работать, а написание диплома поручить нам - грамотным специалистам?
          </li>
          <li>
            <b>2. </b>Отсутствие заинтересованности в выбранной специализации. Часто, специальность была выбрана не самим студентом, а его родителями. Именно они отдали студента учиться в это заведение. Часто студенты не уделяют внимание базовым дисциплинам и получению практических навыков. Поэтому они не могут защитить проект на
            достойном уровне и написать сильную дипломную работу.
          </li>
          <li>
            <b>3. </b>Семейные обстоятельства. Особенно актуальна данная причина для молодых мам-студенток. Старательная учеба на протяжении всех учебных курсов не помогает. Ее перекрывает нехватка времени вследствие различных семейных обстоятельств (свадьба, рождение ребенка, ухудшение собственного здоровья, болезнь близкого
            человека). В этом случае проект диплома на заказ становится спасением.
          </li>
        </ol>
        <p className="par">
          Причины могут быть разные. Но каждый студент понимает важность дипломной работы. Если у Вас нет времени, если Вы не уверены в своих силах – обращайтесь к проверенным специалистам. Таковыми специалистами являемся мы - высококвалифицированные специалисты с большим преподавательским стажем.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <p className="par">
          Каждый из сотрудников, работающих над Вашими дипломными проектами, обладает огромным опытом создания теоретических работ и написанием отчётов по наработанной обширной практической базе. Готовый дипломный проект по правоведению, дизайну, экономике, международным отношениям или любой другой профилирующей дисциплине пишется
          легко, качественно и быстро, избавляя Вас от ненужного волнения. Поэтому стоит <b><Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link></b> у нас!
        </p>
        <p className="par">
          На защите дипломного проекта часто присутствуют руководители из предприятий по выбранной специальности. В момент презентации диплома многие присматриваются к Вам, как к потенциальному сотруднику. Мы сделаем Вашу дипломную работу интересной, качественной, максимально полно раскрывающей выбранную вами тематику. Ведь именно
          от этих характеристик и зависит итоговая оценка за диплом и итоговое решение – решение в Вашу пользу.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </PageWrapper>
  </Wrapper>
);


export default page
