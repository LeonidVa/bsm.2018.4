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
import infoBlockConfig from 'data/infoBlock/referat'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import referatLinks from 'data/linksBlock/referat'

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Referat from "components/common/ServiceBlock/ready-made/Referat";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Сколько стоит заказать реферат – стоимость реферата на заказ в компании «BeSmarter!» - 1 500 рублей, закажите реферат сейчас - тел. +7 (495) 772-40-90."
           description="Хотите узнать, сколько стоит заказать реферат в Москве? Звоните в компанию BeSmarter! и мы вам скажем сколько стоит написать реферат | Звоните: +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img5">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/referat-na-zakaz', text:'Реферат'},
            {url:'#', text:'Стоимость'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/referat-na-zakaz" name="Реферат" position="2" />
            <ItemListElement url="https://besmarter.ru/referat-na-zakaz/skolko-stoit-referat" name="Стоимость" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Referat/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Сколько стоит заказать реферат
        </h1>
        <p className="par">
          Выяснить, сколько стоит заказать реферат в компании «BeSmarter!», можно с помощью нашего <Link href="/price"><a>прайс-листа</a></Link>. Ориентировочный диапазон цен составляет от 1 500 до <br/>7 000 рублей.
        </p>
        <p className="par">
          Чтобы узнать точно, сколько стоит написать реферат, заданную именно вам, понадобится собеседование. Мы определим ее цену на основании следующих факторов.
        </p>
        <ul>
          <li>
            Предмет. Расценки на гуманитарные дисциплины несколько ниже в сравнении с тем, сколько стоит сделать реферат по математике или электротехнике.
          </li>
          <li>
            Объем. Чем больше задание (количество задач, требуемое число страниц), тем выше цена реферата на заказ.
          </li>
          <li>
            Сроки. Чтобы минимизировать стоимость написания реферата, оформите заявку как можно раньше.
          </li>
        </ul>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/skolko-stiot-ref.jpg')} altText="Сколько стоит реферат"/>

      <TextBlock>
        <h2 className="title">
          Что мы гарантируем?
        </h2>
        <ul>
          <li>
            Никаких ошибок. Каждый реферат в «BeSmarter!» проходит многоступенчатую проверку на правильность решения и грамотность оформления.
          </li>
          <li>
            Любой предмет. Компания принимает заказы на выполнение рефератов по любым гуманитарным, естественнонаучным или техническим дисциплинам.
          </li>
          <li>
            Максимальная оперативность. Даже, если вам нужно сдавать работу завтра утром, мы успеем ее сделать вовремя и качественно.
          </li>
          <li>
            Профессиональный подход. Мы не просто выполним ваш реферат, но и подробно объясним все ее нюансы, чтобы у вас не возникло проблем с «придирчивым» преподавателем.
          </li>
          <li>
            Гарантия неразглашения. Мы строго придерживаемся принципа строгой конфиденциальности, гарантии которой прописываются в официальном договоре.
          </li>
        </ul>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Кто будет выполнять реферат?
        </h2>
        <p className="par">
          Лучше всего пишет рефераты тот, кто их задает! Поэтому мы делегируем такие заказы действующим вузовским преподавателям по соответствующим предметам. Они абсолютно точно знают, как правильно выполнить и грамотно оформить реферат, поскольку сами их регулярно проверяют.
        </p>
        <p className="par">
          Такой подход совместно с фирменной системой многоступенчатого контроля качества позволил нам добиться невероятной статистики – почти 99% отличных оценок! Если хотите получить высший балл за реферат по любому предмету – обращайтесь, мы поможем!
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Как мы работаем?
        </h2>
        <ul>
          <li>
            Подготовка. Вы оформляете заявку, и после предварительного собеседования подписывается договор, в котором фиксируются все ваши требования к заказу и наши обязательства.
          </li>
          <li>
            Исполнение. Утвержденный вами исполнитель выполняет реферат и сдает его на проверку в оговоренный срок. В случае необходимости вносятся бесплатные корректировки.
          </li>
          <li>
            Завершение. Вы консультируетесь с автором по всем непонятным моментам, сдаете готовый реферат и получаете отличную оценку.
          </li>
        </ul>
        <p className="par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Все элементарно – попробуйте сами и не пожалеете!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/skolko-stoit-ref-2.jpg')} altText="Сколько стоит заказать реферат"/>

      <TextBlock>
        <h2 className="title">
          Как узнать, сколько стоит реферат?
        </h2>
        <ul>
          <li>
            онлайн-заявка – просто <a href="/#form">заполните форму</a> на сайте и дождитесь ответа менеджера;
          </li>
          <li>
            заявка по телефону – свяжитесь с нами по номеру <br/>+7 (495) 772-4090
          </li>
          <li>
            личная заявка – наш адрес: Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211.
          </li>
        </ul>
        <p className="par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Оформляйте заявку прямо сейчас и узнайте сколько будет стоить написание вашего реферата!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={referatLinks}/>
    </PageWrapper>
  </Wrapper>
);


export default page
