import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
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
import Video from 'components/common/VideoBlock';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Речь к дипломной работе образец – как написать речь (доклад) к дипломной работе пример | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Полезная статья на тему «Как написать речь к дипломной работе», приведены примеры и образцы докладов и защитных речей.">
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
            <a>Речь к дипломной работе</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati/rech-k-diplomnoj-rabote">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Речь к дипломной работе</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/stati/rech-k-diplomnoj-rabote#form">
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

      <section className="block-text">
        <h1 className="block-text__title">
          Как написать речь к дипломной работе
        </h1>
        <p className="block-text__par">
          Подготавливая речь к дипломной работе, важно ответить самому себе на следующие вопросы:
        </p>
        <ul>
          <li>
            Что я хочу донести до слушателей?
          </li>
          <li>
            Что я должен сказать педагогическому составу, чтобы ими была понята вся актуальность проблем в проекте?
          </li>
          <li>
            Какой временной интервал необходим мне для доклада?
          </li>
        </ul>
        <p className="block-text__par">
          Методические требования вашего учебного заведения помогут вам ответить на вышестоящие вопросы. При написании речи к дипломной работе необходимо учитывать пару-тройку нюансов.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(13).jpg')} altText="Как написать речь к дипломной работе"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Структура доклада к дипломной работе
        </h2>
        <ul>
          <li>
            Вступление
          </li>
          <li>
            Главная мысль
          </li>
          <li>
            Заключительная часть
          </li>
        </ul>
        <p className="block-text__par">
          Современное выступление, раскрывающее цели, заинтересует членов комиссии. Главным считается начать ее с приветствия членов комиссии
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Вступление
        </h2>
        <ul>
          <li>
            Заострение внимания членов комиссии.
          </li>
          <li>
            Установление доверительного контакта между выпускником и преподавательским составом.
          </li>
          <li>
            Речь должна быть простой, связной, доступной. Аудитория должна понимать автора.
          </li>
        </ul>
        <p className="block-text__par">
          Выделяют 3 главные задачи правильно подготовленной речи:
        </p>
        <p className="block-text__par">
          Постарайтесь писать кратко. 15% времени от выступления отводится вступительной части.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Основная мысль
        </h2>
        <p className="block-text__par">
          В этой части излагаются основные тезисы работы. Не усложняйте речь данной части слишком сложным описанием темы. Стоит задача определения базы и раскрытие взгляда на теоретическую суть вопроса и плавно перешагнуть к разбору объекта работы. Лаконично изложить суть задачи или главной темы. Кратко подытожить свой анализ.
          Добавьте короткие описания, советы, рекомендации. 65-70% предполагаемого времени занимает именно эта часть.
        </p>
      </section>

      <section className="block-text">
        <p className="block-text__par italic center">
          Можно сказать, что именно практическая часть работы играет главную роль в оценке академических успехов студента и определяет его оценку . Если нет логически завершенной и продуманной речи к дипломной работе, про хорошую оценку можно забыть.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Заключительная часть
        </h2>
        <p className="block-text__par">
          Эта часть включает в себя написание выводов. Как и в любом другом научном проекте, мысль должна быть высказана кратко и лаконично. Для создания эффектного заключения следует придерживаться нескольких пунктов:
        </p>
        <ul>
          <li>
            Кратко подытожить основное выступление речи к дипломной работе.
          </li>
          <li>
            Позаботиться о логическом завершении презентации.
          </li>
          <li>
            Окончание выступление следует акцентировать на положительном аспекте.
          </li>
        </ul>
        <p className="block-text__par">
          На заключительную часть отводится 10% отведенного времени. Задав уточняющие вопросы, комиссия восполнит поток потерянной или непонятной информации из защитной речи к дипломной работе. Написав проект самостоятельно, вы с легкостью ответите на поставленные вопросы.
        </p>
      </section>

      <Video>
        <iframe src="https://www.youtube.com/embed/XpYziQhuZaw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как эффектно выступить на защите дипломной работы?
        </h2>
        <p className="block-text__par">
          Чтобы защитная речь к дипломной работе создала хорошее впечатление, следуйте трем правилам:
        </p>
        <ul>
          <li>
            Понимать, чего ждет от вас комиссия.
          </li>
          <li>
            Не упускать бдительность к своему монологу.
          </li>
          <li>
            Не волноваться.
          </li>
        </ul>
        <p className="block-text__par">
          Пробуйте ответить на следующие вопросы:
        </p>
        <ul>
          <li>
            Логичен ли ваш монолог?
          </li>
          <li>
            Не возникает ли трудностей в понимании вашего доклада?
          </li>
          <li>
            Верны ли выражения в докладе?
          </li>
          <li>
            Возможно ли составление ясного заключения после прослушивания доклада?
          </li>
        </ul>
        <p className="block-text__par">
          Если ответом на все вопросы стало «ДА!», вы отлично справились с подготовкой речи к дипломному проекту.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </div>
  </Wrapper>
);


export default page
