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

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Дипломная работа по юриспруденции на заказ в Москве и РФ – сколько стоит написание диплома под ключ, купить недорого" description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по юриспруденции по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/diplom-na-zakaz', text:'Дипломная работа'},
            {url:'#', text:'>По юриспруденции'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/diplom-na-zakaz" name="Дипломная работа" position="2" />
            <ItemListElement url="https://besmarter.ru/diplom-na-zakaz/yurisprudenciya-pravo" name="По юриспруденции" position="3" />
        </ItemScope>




      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Diplom/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Заказать дипломную работу по юриспруденции
        </h1>
        <ul style={{listStyle: 'none'}}>
          <li>
            Вам необходима высококачественная, содержательная дипломная работа по юриспруденции, написанная всего за несколько дней?
          </li>
          <li>
            Хотите купить дипломную работу по юриспруденции, подготовленную профессиональными авторами?
          </li>
          <li>
            Нужна презентация дипломной работы по юриспруденции, которая поможет защититься на «отлично»?
          </li>
        </ul>
        <p className="par">
          Тогда Вам обязательно нужно обратиться к специалистам компании BeSmarter!
        </p>
        <p className="par">
          Мы напишем для Вас интересный и содержательный диплом по юриспруденции на заказ!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-po-uri.jpg')} altText="Заказать дипломную работу по юриспруденции"/>

      <TextBlock>
        <h2 className="title">
          Написание дипломной работы по юриспруденции
        </h2>
        <p className="par">
          Если у Вас нет времени на написание работы, то Вы можете заказать диплом по юриспруденции у опытных авторов компании BeSmarter! Став нашим клиентом,Вы получите такие преимущества:
        </p>
        <ul style={{listStyle: 'none'}}>
          <li>
            <b>Гарантии качества</b><br/>
            Все свои обязательства по отношению к клиенту мы прописываем в договоре. Заказать дипломную работу по юриспруденции у наших специалистов – значит получить труд, написанный по итогам исследований, проведенных кандидатами и докторами юридических наук.
          </li>
          <li>
            <b>Отличную уникальность текста</b><br/>
            Дипломные работы по юриспруденции, написанные в нашей компании, проходят проверку по системе «Антиплагиат». Это означает, что Вы получаете текст с уникальностью более 70%.
          </li>
          <li>
            <b>Срочность подготовки работы</b><br/>
            Наши авторы готовы выполнить написание диплома юридической тематики в срок от одного дня.
          </li>
          <li>
            <b>Приемлемая цена</b><br/>
            Мы предлагаем Вам доступную стоимость дипломной работы по юриспруденции. Цена дипломной работы по юриспруденции варьируется в пределах от 14 до 45 тысяч рублей.
          </li>
          <li>
            <b>Внесение правок в работу</b><br/>
            Если у Вашего научного руководителя есть замечания к тексту работы, наши специалисты бесплатно внесут изменения в гарантийный срок до 30 дней.
          </li>
          <li>
            <b>Сопровождение до успешной защиты</b><br/>
            По Вашему желанию мы напишем для Вас не только сам дипломный проект, но и презентацию или доклад к диплому по юриспруденции. А советы наших менеджеров и преподавателей помогут Вам получить на защите твёрдую «пятёрку».
          </li>
        </ul>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Купить дипломную работу по юриспруденции
        </h2>
        <p className="par">
          Получив ваш заказ, мы составляем техническое задание для нашего автора. В нём мы указываем, какие методики Вы предпочитаете, и на каком материале для Вас должны быть проведены исследования. Автор пишет диплом в соответствии с Вашими пожеланиями.
        </p>
        <p className="par">
          Поэтому Вы получаете грамотную именно для Вас написанную работу. Мы убеждены, что Вы сможете превосходно защититься!
        </p>
        <p className="par">
          Нужно заказать диплом и вы хотите узнать, сколько стоит его написание? Звоните нам по номеру <br/>+7 495 772 40 90, заполните форму заявки или приезжайте в наш <Link href="/contacts"><b><a>офис</a></b></Link> расположенный на Арбате!
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
