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
import Video from 'components/common/VideoBlock';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper title="Речь к дипломной работе образец – как написать речь (доклад) к дипломной работе пример | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Полезная статья на тему «Как написать речь к дипломной работе», приведены примеры и образцы докладов и защитных речей.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Речь к дипломной работе'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/rech-k-diplomnoj-rabote" name="Речь к дипломной работе" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
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

      <TextBlock>
        <h1>
          Как написать речь к дипломной работе
        </h1>
        <p className="par">
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
        <p className="par">
          Методические требования вашего учебного заведения помогут вам ответить на вышестоящие вопросы. При написании речи к дипломной работе необходимо учитывать пару-тройку нюансов.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(13).jpg')} altText="Как написать речь к дипломной работе"/>

      <TextBlock>
        <h2 className="title">
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
        <p className="par">
          Современное выступление, раскрывающее цели, заинтересует членов комиссии. Главным считается начать ее с приветствия членов комиссии
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
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
        <p className="par">
          Выделяют 3 главные задачи правильно подготовленной речи:
        </p>
        <p className="par">
          Постарайтесь писать кратко. 15% времени от выступления отводится вступительной части.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Основная мысль
        </h2>
        <p className="par">
          В этой части излагаются основные тезисы работы. Не усложняйте речь данной части слишком сложным описанием темы. Стоит задача определения базы и раскрытие взгляда на теоретическую суть вопроса и плавно перешагнуть к разбору объекта работы. Лаконично изложить суть задачи или главной темы. Кратко подытожить свой анализ.
          Добавьте короткие описания, советы, рекомендации. 65-70% предполагаемого времени занимает именно эта часть.
        </p>
      </TextBlock>

      <TextBlock>
        <p className="par italic center">
          Можно сказать, что именно практическая часть работы играет главную роль в оценке академических успехов студента и определяет его оценку . Если нет логически завершенной и продуманной речи к дипломной работе, про хорошую оценку можно забыть.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Заключительная часть
        </h2>
        <p className="par">
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
        <p className="par">
          На заключительную часть отводится 10% отведенного времени. Задав уточняющие вопросы, комиссия восполнит поток потерянной или непонятной информации из защитной речи к дипломной работе. Написав проект самостоятельно, вы с легкостью ответите на поставленные вопросы.
        </p>
      </TextBlock>

      <Video>
        <iframe src="https://www.youtube.com/embed/XpYziQhuZaw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <TextBlock>
        <h2 className="title">
          Как эффектно выступить на защите дипломной работы?
        </h2>
        <p className="par">
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
        <p className="par">
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
        <p className="par">
          Если ответом на все вопросы стало «ДА!», вы отлично справились с подготовкой речи к дипломному проекту.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </PageWrapper>
  </Wrapper>
);


export default page
