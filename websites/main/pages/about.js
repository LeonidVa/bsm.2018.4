import Link from 'next/link';

import React, {Component} from 'react';

import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';

import ImageBlock from 'components/common/ImageBlock'
import Accordion from 'components/common/Accordion'
import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'

import fields from 'data/form/main';
import reviewBlockConfig from 'data/reviewBlockConfig';
import links from 'data/linksBlockConfig';
import TextBlock from 'components/common/TextBlock';
import MetaTags from 'react-meta-tags';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'
import ContactsPage from "components/common/ServiceBlock/ready-made/ContactsPage";
import MagisDisAnother from "components/common/ServiceBlock/ready-made/MagisDisAnother";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper title="О компании BeSmarter!" description="Информация о компании BeSmarter! Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img2">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'#', text:'О нас'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/about" name="О нас" position="2" />
        </ItemScope>

      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>

      <TextBlock>
        <h1 className="title">
          О компании BeSmarter!
        </h1>
        <p className="par">
          Методист требует хоть какую-то часть дипломной работы, на носу сложные экзамены, предстоит подготовка к выпускному? Если вам знакома любая из этих ситуаций, но совсем нет времени на изучение источников и написание диплома, не волнуйтесь. С вашим высшим образованием все будет в порядке, если вовремя обратиться к нам.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Кто мы такие?
        </h2>
        <p className="par">
          Компания BeSmarter, которая заинтересована в успехе каждого студента, как в своем собственном. Наша миссия – максимально упростить вам жизнь и помочь разобраться с непонятными моментами в учебном материале. Мы стремимся, чтобы каждый клиент защитился на «отлично», а потому делаем свою работу качественно и быстро.
        </p>
        <p className="par">
          Наша отличительная черта – искренняя забота о студентах и готовность оказать помощь на всех этапах подготовки и защиты проекта.
        </p>
      </TextBlock>

        <MagisDisAnother/>

      <TextBlock>
        <h2 className="title">
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
        <p className="par">
          Помните: мы живем без перерывов и выходных, поэтому при необходимости обращайтесь в любой день недели.
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <TextBlock>
        <h2 className="title">
          Что требуется от вас?
        </h2>
        <p className="par">
          Только подробная информация о предстоящей работе: тема, дисциплина, название учебного заведения и факультета. Желательно предоставить и методичку – тогда наши авторы смогут полностью погрузиться в работу и выдать проект, в точности соответствующий требованиям.
        </p>
      </TextBlock>

      <ImageBlock imageSrc={require('static/images/block/g.jpg')}/>

      <TextBlock>
        <h2 className="title">
          Что вы получаете в итоге?
        </h2>
        <p className="par">
          Первое и самое главное – качественную дипломную работу. Она выдержит все проверки на плагиат, ведь мы пишем ее полностью самостоятельно, «с нуля». Наши авторы не занимаются поверхностным рерайтом, а максимально погружаются в тему и применяют собственные теоретические знания и практический опыт.
        </p>
        <p className="par">
          Второе – уверенность. Ночные кошмары накануне защиты, трясущиеся руки, вспотевший лоб и полная пустота в голове – распространенные симптомы только у студентов, которые почти не готовились к сдаче. Не переживайте, вам не придется пить успокоительные препараты или мучительно ожидать своей очереди. С работой, написанной
          профессионалами BeSmarter, вы спокойно пойдете на защиту и без проблем выступите перед комиссией.
        </p>
        <p className="par">
          Нас выбирают студенты, для которых качество всегда стоит на первом месте. Обращайтесь, и будете уверены в успешной защите дипломного проекта!
        </p>
      </TextBlock>

      <FormOrder/>
      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <LinksBlock links={links}/>

    </PageWrapper>
  </Wrapper>
);

export default page
