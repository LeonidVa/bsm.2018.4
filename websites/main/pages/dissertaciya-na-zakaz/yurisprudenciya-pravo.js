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
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disserNew from 'data/linksBlock/disserNew';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";

const page = () => (
  <Wrapper title="Заказать диссертацию по юриспруденции – сколько стоит написать диссертацию по юриспруденции в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Заказать диссертацию по юриспруденции. В компании  BeSmarter! Вы сможете заказать помощь в написании диссертации по юриспруденции от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать диссертацию по юриспруденции помощь в написании на заказ в Москве написать в короткие сроки срочно под заказ сколько стоит написать"/>
      </MetaTags>


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/dissertaciya-na-zakaz', text:'Диссертация'},
            {url:'#', text:'По юриспруденции'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/yurisprudenciya-pravo" name="По юриспруденции" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <TextBlock>
        <h1>
          Заказать диссертацию по юриспруденции
        </h1>
        <ul>
          <li>
            <b>Удобство сотрудничества</b><br/>
            Заказать диссертацию по юриспруденции могут жители не только Москвы, но и других регионов РФ.
          </li>
          <li>
            <b>Все виды диссертационных работ</b><br/>
            В BeSmarter! можно заказать <Link href="/dissertaciya-na-zakaz/magisterskaya"><a>магистерскую</a></Link>, <Link href="/dissertaciya-na-zakaz/kandidatskaya"><a>кандидатскую</a></Link> или <Link href="/dissertaciya-na-zakaz/doktorskaya"><a>докторскую</a></Link> диссертацию по любой тематике, связанной с юриспруденцией.
          </li>
          <li>
            <b>Оригинальность и актуальность</b><br/>
            Все работы пишутся с «нуля» и базируются на исследованиях в сфере современного права. Уникальность текста проверяется в онлайн-сервисах антиплагиата;
          </li>
          <li>
            <b>Комплексный подход</b><br/>
            Мы не только предлагаем помощь в написании диссертации, но и оказываем содействие в подготовке к защите, включая изготовление дополнительных материалов;
          </li>
        </ul>
      </TextBlock>

      <FormEstimate/>

      <MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-uri.jpg')} altText="Заказать диссертацию по юриспруденции"/>

      <TextBlock>
        <h2 className="title">
          Почему мы – лучшие?
        </h2>
        <p className="par">
          Главный козырь BeSmarter! – наши авторы. Мы сотрудничаем с ведущими учеными, преподавателями вузов с научной степенью не ниже кандидатской. Это очень важно, поскольку юриспруденция является одной из наиболее «изменчивых» наук.
        </p>
        <p className="par">
          Чтобы написать хорошую диссертацию по праву, нужно тонко разбираться в хитросплетениях современного законодательства и умело применять его для решения задач. Кто может сделать это лучше, чем профессиональный юрист?
        </p>
        <p className="par">
          При этом, даже работая с лучшими кадрами, мы контролируем каждый этап выполнения заказа. Вы получаете личного менеджера, который следит за всеми нюансами и доступен для связи в любой момент.
        </p>
        <p className="par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Воспользуйтесь нашими услугами, и сами поймете, почему мы – лучшие!
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          От чего зависит стоимость написания диссертации по юриспруденции?
        </h2>
        <p className="par">
          Конечно же, вас интересует, сколько стоит написать диссертацию по юриспруденции под заказ. Ориентировочные цены указаны в прайс-листе. Точную стоимость услуги мы озвучим после собеседования. Она будет зависеть от объективных факторов:
        </p>
        <ul>
          <li>
            фактического объема работы – чем больше страниц, тем выше стоимость диссертации по юриспруденции;
          </li>
          <li>
            сложности конкретной темы – желаете сэкономить, – проконсультируйтесь с нами при ее выборе;
          </li>
          <li>
            времени – если вам нужна диссертация срочно – за дополнительную плату мы ускорим ее написание, и наоборот, если оформите заказ заранее – мы напишем работу недорого.
          </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Как заказать диссертацию по юриспруденции?
        </h2>
        <p className="par">
          Все просто:
        </p>
        <ol>
          <li>
            Вы оформляете заявку на сайте, по телефону <br/>+7 (495) 772-4090 или при личной встрече в Москве (пер. Большой Кисловский, д. 1, стр. 2, оф. 211).
          </li>
          <li>
            Мы проводим с вами собеседование и составляем официальный договор, в котором прописываются все ваши требования и наши обязательства.
          </li>
          <li>
            Согласованный автор пишет диссертацию и поглавно сдает ее вам на проверку, вносит бесплатные правки и помогает подготовиться к защите.
          </li>
        </ol>
        <p className="par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Попробуйте, и вы не пожалеете о сотрудничестве!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disserNew}/>
    </PageWrapper>
  </Wrapper>
);


export default page
