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

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplomNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import React from "react";
import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";

const page = () => (
  <Wrapper title="Дипломная работа по педагогике – стоимость и сроки написания, сколько стоит заказать диплом по педагогике в Москве" description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по педагогике по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/diplom-na-zakaz', text:'Дипломная работа'},
            {url:'#', text:'По педагогике'},
        ]}/>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/diplom-na-zakaz" name="Дипломная работа" position="2" />
            <ItemListElement url="https://besmarter.ru/diplom-na-zakaz/pedagogika" name="По педагогике" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
      <MessBlock/>

        <Diplom/>

<MatZashGirl/>


      <TextBlock>
        <h1 className="title">
          Заказать дипломную работу по педагогике
        </h1>
        <ul style={{listStyle: 'none'}}>
          <li>
            Вас интересует, сколько стоит дипломная работа по дошкольной, социальной педагогике, подготовленная опытными специалистами?
          </li>
          <li>
            Хотите сдать преподавателям проект с высокой уникальностью?
          </li>
          <li>
            Требуется профессионально написанный диплом по педагогике?
          </li>
        </ul>
        <p className="par">
          Тогда вам достаточно обратиться в компанию BeSmarter!
        </p>
        <p className="par">
          Наши специалисты охотно подготовят для вас диплом по коррекционной педагогике и другим педагогическим дисциплинам!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-po-ped.jpg')} altText="Заказать дипломную работу по педагогике"/>

      <TextBlock>
        <h2 className="title">
          Преимущества написания в BeSmarter!
        </h2>
        <p className="par">
          Если у вас нет достаточного количества времени для написания главного студенческого труда, то специалисты нашей компании подготовят для вас дипломную работу по педагогике в наиболее сжатые сроки.
        </p>
        <p className="par">
          Обратившись в BeSmarter!, Вы получаете:
        </p>
        <ul style={{listStyle: 'none'}}>
          <li>
            <b>Гарантии качества</b><br/>
            Все наши обязательства перед клиентом указываются в контракте. Дипломы от наших авторов – это итог научных исследований, проведенных специалистами с большим педагогическим опытом.
          </li>
          <li>
            <b>Высокую уникальность текста</b><br/>
            Все дипломные работы по педагогике, написанные нашими авторами, проверяются по системе «Антиплагиат». Их уникальность – более 70%.
          </li>
          <li>
            <b>Оперативность выполнения работ</b><br/>
            Мы готовы написать для вас диплом в срок от одного дня.
          </li>
          <li>
            <b>Приемлемую стоимость</b><br/>
            Мы предлагаем выгодное соотношение качества и цены. «Сколько стоит дипломная работа по педагогике?» – это частый вопрос наших новых клиентов. Отвечаем: стоимость варьируется в пределах 14 000-45 000 рублей.
          </li>
          <li>
            <b>Сопровождение до защиты</b><br/>
            Мы готовы вносить правки в работу в течение гарантийного срока совершенно бесплатно. Но и после этого мы продолжаем сотрудничать с вами до вашей успешной защиты.
          </li>
        </ul>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Как сделать заказ?
        </h2>
        <p className="par">
          Если вы приняли решение о сотрудничестве, то мы охотно принимаем вашу заявку и подготавливаем техническое задание, по которому наш специалист пишет дипломную работу. В задании мы перечисляем предпочитаемые вами методики, желаемый возраст и количество детей в группах, а также другие важные детали проекта.
        </p>
        <p className="par">
          Нужен качественный диплом по педагогике? Напишем!
        </p>
        <p className="par">
        Позвоните нам по номеру +7 (495) 772 40 90, воспользуйтесь удобной формой заказа на сайте или сразу приезжайте в наш <Link href="/contacts"><b><a>офис</a></b></Link> в Москве, который находится на Арбате!
        </p>
      </TextBlock>

        <Video>
            <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
