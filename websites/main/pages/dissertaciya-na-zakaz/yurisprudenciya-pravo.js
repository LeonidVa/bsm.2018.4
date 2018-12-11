import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

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

const page = () => (
  <Wrapper title="Заказать диссертацию по юриспруденции – сколько стоит написать диссертацию по юриспруденции в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Заказать диссертацию по юриспруденции. В компании  BeSmarter! Вы сможете заказать помощь в написании диссертации по юриспруденции от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать диссертацию по юриспруденции помощь в написании на заказ в Москве написать в короткие сроки срочно под заказ сколько стоит написать"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная </a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz">
            <a>Диссертация</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По юриспруденции</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Диссертация</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/yurisprudenciya-pravo">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По юриспруденции</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <section className="block-text">
        <h1 className="block-text__title">
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
      </section>

      <FormEstimate/>

      <MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-uri.jpg')} altText="Заказать диссертацию по юриспруденции"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Почему мы – лучшие?
        </h2>
        <p className="block-text__par">
          Главный козырь BeSmarter! – наши авторы. Мы сотрудничаем с ведущими учеными, преподавателями вузов с научной степенью не ниже кандидатской. Это очень важно, поскольку юриспруденция является одной из наиболее «изменчивых» наук.
        </p>
        <p className="block-text__par">
          Чтобы написать хорошую диссертацию по праву, нужно тонко разбираться в хитросплетениях современного законодательства и умело применять его для решения задач. Кто может сделать это лучше, чем профессиональный юрист?
        </p>
        <p className="block-text__par">
          При этом, даже работая с лучшими кадрами, мы контролируем каждый этап выполнения заказа. Вы получаете личного менеджера, который следит за всеми нюансами и доступен для связи в любой момент.
        </p>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Воспользуйтесь нашими услугами, и сами поймете, почему мы – лучшие!
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость написания диссертации по юриспруденции?
        </h2>
        <p className="block-text__par">
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
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как заказать диссертацию по юриспруденции?
        </h2>
        <p className="block-text__par">
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
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Попробуйте, и вы не пожалеете о сотрудничестве!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disserNew}/>
    </div>
  </Wrapper>
);


export default page
