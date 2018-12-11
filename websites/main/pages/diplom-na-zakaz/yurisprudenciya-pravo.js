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
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

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


const page = () => (
  <Wrapper title="Дипломная работа по юриспруденции на заказ в Москве и РФ – сколько стоит написание диплома под ключ, купить недорого" description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по юриспруденции по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/diplom-na-zakaz">
            <a>Дипломная работа</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Дипломная работа</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz/yurisprudenciya-pravo">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По юриспруденции</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Diplom/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
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
        <p className="block-text__par">
          Тогда Вам обязательно нужно обратиться к специалистам компании BeSmarter!
        </p>
        <p className="block-text__par">
          Мы напишем для Вас интересный и содержательный диплом по юриспруденции на заказ!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-po-uri.jpg')} altText="Заказать дипломную работу по юриспруденции"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Написание дипломной работы по юриспруденции
        </h2>
        <p className="block-text__par">
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
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Купить дипломную работу по юриспруденции
        </h2>
        <p className="block-text__par">
          Получив ваш заказ, мы составляем техническое задание для нашего автора. В нём мы указываем, какие методики Вы предпочитаете, и на каком материале для Вас должны быть проведены исследования. Автор пишет диплом в соответствии с Вашими пожеланиями.
        </p>
        <p className="block-text__par">
          Поэтому Вы получаете грамотную именно для Вас написанную работу. Мы убеждены, что Вы сможете превосходно защититься!
        </p>
        <p className="block-text__par">
          Нужно заказать диплом и вы хотите узнать, сколько стоит его написание? Звоните нам по номеру <br/>+7 495 772 40 90, заполните форму заявки или приезжайте в наш <Link href="/contacts"><b><a>офис</a></b></Link> расположенный на Арбате!
        </p>
      </section>

        <Video>
            <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
