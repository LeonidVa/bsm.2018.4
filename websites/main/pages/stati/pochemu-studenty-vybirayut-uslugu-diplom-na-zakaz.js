import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Почему студенты выбирают услугу «диплом на заказ»? | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Многие студенты в настоящее время отказываются от самостоятельного написания диплома и предпочитают поручать написание дипломного проекта профессиональным исполнителям. Почему так происходит, почему многие предпочитают диплом на заказ?">
    <div className="wrapper bg bg-c2 bg-img bg-img3">



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

        <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Статьи</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati/pochemu-studenty-vybirayut-uslugu-diplom-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Почему студенты выбирают услугу «диплом на заказ»?</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
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

      <section className="block-text">
        <h1 className="block-text__title">
          Почему студенты выбирают услугу «диплом на заказ»?
        </h1>
        <p className="block-text__par">
          Многие студенты в настоящее время отказываются от самостоятельного написания диплома и предпочитают поручать написание дипломного проекта профессиональным исполнителям. Почему так происходит, почему многие предпочитают <a href="/diplom-na-zakaz" target="_blank">диплом на заказ</a>?
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(11).jpg')} altText="Почему студенты выбирают услугу «диплом на заказ»?"/>

      <section className="block-text">
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
        <p className="block-text__par">
          Причины могут быть разные. Но каждый студент понимает важность дипломной работы. Если у Вас нет времени, если Вы не уверены в своих силах – обращайтесь к проверенным специалистам. Таковыми специалистами являемся мы - высококвалифицированные специалисты с большим преподавательским стажем.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <p className="block-text__par">
          Каждый из сотрудников, работающих над Вашими дипломными проектами, обладает огромным опытом создания теоретических работ и написанием отчётов по наработанной обширной практической базе. Готовый дипломный проект по правоведению, дизайну, экономике, международным отношениям или любой другой профилирующей дисциплине пишется
          легко, качественно и быстро, избавляя Вас от ненужного волнения. Поэтому стоит <b><Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link></b> у нас!
        </p>
        <p className="block-text__par">
          На защите дипломного проекта часто присутствуют руководители из предприятий по выбранной специальности. В момент презентации диплома многие присматриваются к Вам, как к потенциальному сотруднику. Мы сделаем Вашу дипломную работу интересной, качественной, максимально полно раскрывающей выбранную вами тематику. Ведь именно
          от этих характеристик и зависит итоговая оценка за диплом и итоговое решение – решение в Вашу пользу.
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </div>
  </Wrapper>
);


export default page
