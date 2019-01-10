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
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovayaNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Заказать курсовую работу по архитектуре в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по архитектуре по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/kursovaya-rabota-na-zakaz', text:'Курсовая работа'},
            {url:'#', text:'По архитектуре'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz" name="Курсовая работа" position="2" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz/arhitektura" name="По архитектуре" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <TextBlock>
        <h1 className="title">
          Заказать курсовую работу по архитектуре
        </h1>
        <p className="par">
          У студентов строительных специальностей курсовые работы по архитектуре традиционно вызывают повышенные трудности. Здесь нельзя отделаться абстракциями и теоретическими опусами. Каждый проект представляет собой совокупность индивидуальных решений по внешнему виду, компоновке, планировке, применяемым материалам и другим
          параметрам, которыми отличается конкретный объект.
        </p>
        <p className="par">
          Найти идентичный вариант в Интернете или попытаться переделать чужой проект практически невозможно. Нужно или выполнить работу самостоятельно, или прибегнуть к экспертной помощи. Если у вас не хватает времени или навыков, предлагаем недорого заказать курсовой проект по архитектуре в компании BeSmarter!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kurs-po-arh.jpg')} altText="Заказать курсовую работу по архитектуре"/>

      <TextBlock>
        <h2 className="title">
          Какие мы даем гарантии?
        </h2>
        <ul>
          <li>
            <b>Гарантия качества.</b> Вы можете быть уверены в грамотном выполнении выкладок и чертежей, поскольку написание работы будет поручено действующему преподавателю по строительным дисциплинам с кандидатской научной степенью.
          </li>
          <li>
            <b>Гарантия пунктуальности.</b> День сдачи готового проекта фиксируется в официальном договоре. По желанию клиента мы можем написать работу срочно (от 24 часов) без ущерба ее качеству.
          </li>
          <li>
            <b>Гарантия оригинальности.</b> Курсовая работа по архитектуре на заказ от BeSmarter! – это проект, выполненный с нуля без малейшей доли плагиата или заимствований. Уникальность текста проверяется в нескольких онлайн сервисах (eTXT, Advego, АП.вуз).
          </li>
        </ul>
        <p className="par">
          Желаете гарантировать себе успешную защиту? Достаточно заказать курсовую работу по архитектуре в BeSmarter!
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Стоимость курсового проекта по архитектуре?
        </h2>
        <p className="par">
          Цена курсового проекта по архитектуре определяется несколькими объективными факторами. Прежде всего – это трудоемкость, которая зависит от конкретного объекта. Чем он сложнее, тем больше труда потребуется для выполнения расчетов и построения чертежей.
        </p>
        <p className="par">
          Вторым важным критерием ценообразования является срочность, поэтому для экономии средств выгоднее будет оформить заказ заранее. Также на стоимость влияют специфические требования к оформлению. Чтобы прикинуть ориентировочную сумму, откройте наш прайс-лист или свяжитесь с менеджером.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
          <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <TextBlock>
        <h2 className="title">
          Готовы купить курсовую работу по архитектуре?
        </h2>
        <p className="par">
          Тогда оформите заявку удобным способом:
        </p>
        <ul>
          <li>
            <b><a href="#form">заполнив форму</a></b> на сайте;
          </li>
          <li>
            позвонив по телефону <span className="tel">8 (495) 772-40-90</span>;
          </li>
          <li>
            посетив наш <b><Link href="/contacts"><a>офис</a></Link></b> в Москве (пер. Большой Кисловский, дом 1, стр. 2, оф. 211).
          </li>
        </ul>
        <p className="par">
          Купить курсовую по архитектуре в BeSmarter! – грамотное решение, которое избавит вас от лишних забот.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
