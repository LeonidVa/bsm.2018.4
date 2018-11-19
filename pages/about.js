import Link from 'next/link';

import React, {Component} from 'react';

import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';

import ImageBlock from 'components/common/ImageBlock'
import Accordion from 'components/common/Accordion'
import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'

import fields from 'data/form/main';
import reviewBlockConfig from 'data/reviewBlockConfig';
import links from 'data/linksBlockConfig';

import MetaTags from 'react-meta-tags';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'
import ContactsPage from "components/common/ServiceBlock/ready-made/ContactsPage";
import MagisDisAnother from "components/common/ServiceBlock/ready-made/MagisDisAnother";


const page = () => (
  <Wrapper title="О компании BeSmarter!" description="Информация о компании BeSmarter! Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>О нас</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          О компании BeSmarter!
        </h1>
        <p className="block-text__par">
          Методист требует хоть какую-то часть дипломной работы, на носу сложные экзамены, предстоит подготовка к выпускному? Если вам знакома любая из этих ситуаций, но совсем нет времени на изучение источников и написание диплома, не волнуйтесь. С вашим высшим образованием все будет в порядке, если вовремя обратиться к нам.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Кто мы такие?
        </h2>
        <p className="block-text__par">
          Компания BeSmarter, которая заинтересована в успехе каждого студента, как в своем собственном. Наша миссия – максимально упростить вам жизнь и помочь разобраться с непонятными моментами в учебном материале. Мы стремимся, чтобы каждый клиент защитился на «отлично», а потому делаем свою работу качественно и быстро.
        </p>
        <p className="block-text__par">
          Наша отличительная черта – искренняя забота о студентах и готовность оказать помощь на всех этапах подготовки и защиты проекта.
        </p>
      </section>

        <MagisDisAnother/>

      <section className="block-text">
        <h2 className="block-text__title">
          Почему именно BeSmarter?
        </h2>
        <ul>
          <li>
            <b>Грамотные авторы.</b> Мы доверяем написание работы только людям, имеющим соответствующее вашей теме образование. У нас вы не найдете плагиата с просторов интернета, неумело слепленного в один файл. Более того, наши сотрудники – практикующие преподаватели, которые точно знают, как писать научную работу. Вам не
            придется удалять лишние пробелы, расставлять точки или редактировать текст.
          </li>
          <li>
            <b>Консультации.</b> Создание диплома – только часть задачи, его еще предстоит защитить. Со своей стороны мы прилагаем все усилия, чтобы этот процесс прошел для вас максимально легко. Все непонятные теоретические моменты пояснит непосредственно автор работы, также он даст практические советы по выступлению.
          </li>
          <li>
            <b>Строгое соответствие требованиям, заявленным в ВУЗе.</b> Вам не придется самостоятельно формировать список источников или выделять цитаты – мы четко следуем правилам оформления и придерживаемся научного стиля изложения. От вас требуется только максимально точно пояснить все требования учебного заведения и пожелания
            конкретного руководителя.
          </li>
          <li>
            <b>Четкие сроки.</b> Пунктуальность – еще одно качество, из-за которого студенты выбирают именно нас. Конечно, мы не сможем помочь, если защита уже состоялась вчера. Но когда до дня «Х» есть хоть немного времени, наши авторы работают с утроенной силой, чтобы выдать отменный результат.
          </li>
          <li>
            <b>Независимость от темы и предмета.</b> Сложные технические дисциплины, дебри филологии, философские направления, исследования животного и растительного мира – для нас нет «запретных» тематик. Для любой работы мы ищем ответственного и компетентного автора, который точно справится с поставленной задачей.
          </li>
        </ul>
        <p className="block-text__par">
          Помните: мы живем без перерывов и выходных, поэтому при необходимости обращайтесь в любой день недели.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что требуется от вас?
        </h2>
        <p className="block-text__par">
          Только подробная информация о предстоящей работе: тема, дисциплина, название учебного заведения и факультета. Желательно предоставить и методичку – тогда наши авторы смогут полностью погрузиться в работу и выдать проект, в точности соответствующий требованиям.
        </p>
      </section>

      <ImageBlock imageSrc={require('static/images/block/g.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что вы получаете в итоге?
        </h2>
        <p className="block-text__par">
          Первое и самое главное – качественную дипломную работу. Она выдержит все проверки на плагиат, ведь мы пишем ее полностью самостоятельно, «с нуля». Наши авторы не занимаются поверхностным рерайтом, а максимально погружаются в тему и применяют собственные теоретические знания и практический опыт.
        </p>
        <p className="block-text__par">
          Второе – уверенность. Ночные кошмары накануне защиты, трясущиеся руки, вспотевший лоб и полная пустота в голове – распространенные симптомы только у студентов, которые почти не готовились к сдаче. Не переживайте, вам не придется пить успокоительные препараты или мучительно ожидать своей очереди. С работой, написанной
          профессионалами BeSmarter, вы спокойно пойдете на защиту и без проблем выступите перед комиссией.
        </p>
        <p className="block-text__par">
          Нас выбирают студенты, для которых качество всегда стоит на первом месте. Обращайтесь, и будете уверены в успешной защите дипломного проекта!
        </p>
      </section>

      <FormOrder/>
      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <LinksBlock links={links}/>

    </div>
  </Wrapper>
);

export default page
