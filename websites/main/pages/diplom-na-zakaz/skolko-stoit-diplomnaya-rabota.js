import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

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
import links from 'data/linksBlock/diplom';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"


const page = () => (
  <Wrapper title="Сколько стоит дипломная работа – написать диплом на заказ в Москве в BeSmarter!, цена 8 900 р."
           description="Интересуетесь сколько стоит написать дипломную работу на заказ в Москве? Хотите разобраться сколько стоит заказать диплом? Звоните в компанию BeSmarter! И мы вам скажем точную стоимость дипломной работы!">
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
            <a>Сколько стоит</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz/skolko-stoit-diplomnaya-rabota">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Сколько стоит</span></a>
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
          Сколько стоит дипломная работа
        </h1>
        <p className="block-text__par">
          Сколько стоит дипломная работа? Для человека, который выполнил ее сам, – она бесценна, так как было потрачено личное время, нервы и силы. Но если поручить написать дипломную работу, стоимость ее приобретает вполне реальное цифровое значение. Причем иногда такой вариант даже предпочтительнее, особенно, если времени до
          защиты почти не осталось.
        </p>
        <p className="block-text__par">
          Давайте выясним, сколько стоит дипломная работа на заказ. И какими факторами определяется ее цена.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/skolko-stoit-dip-rab.jpg')} altText="Сколько стоит дипломная работа"/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость написания дипломной работы
        </h2>
        <ul>
          <li>
            <b>Дисциплина.</b> Расценки на работы по гуманитарным дисциплинам в среднем ниже в сравнении с тем, сколько стоит сделать диплом по технической специальности. Это связанно с повышенной сложностью из-за наличия расчетов, чертежей, графиков и т. д.
          </li>
          <li>
            <b>Тема.</b> Даже в рамках одной специальности стоимость написания дипломной работы может значительно варьироваться в зависимости от конкретной темы. Поэтому, при наличии выбора, желательно проконсультироваться с исполнителем.
          </li>
          <li>
            <b>Время.</b> Стоимость дипломной работы существенно возрастает, если сроки ее выполнения сужаются. Это обуславливается необходимостью сверхурочной работы и привлечением дополнительных авторов.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Сколько стоит написать дипломную работу
        </h2>
        <p className="block-text__par">
          А теперь проиллюстрируем сколько стоит написать диплом на примере прайс-листа компании BeSmarter!
        </p>
        <p className="block-text__par">
          Стоимость дипломных работ по гуманитарным дисциплине? От 9000 рублей при наличии только теоретической части, и от 14000 – с практической частью.
        </p>
        <p className="block-text__par">
          Цена дипломных работ по технической дисциплине примерно в 2 раза дороже – от 22000 рублей.
        </p>
        <p className="block-text__par">
          Цена написания дипломной работы на иностранном языке увеличивается в 1,5-2 раза.
        </p>
      </section>

      <Video>
          <iframe src="https://www.youtube.com/embed/aOWtDx1wAHY" frameBorder="0"
              allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Алгоритм сотрудничества
        </h2>
        <p className="block-text__par">
          Вы оформляете заявку одним из перечисленных ниже способов, и мы проводим собеседование – лично, по телефону или в онлайн-режиме. По его результатам составляется договор, в котором прописывается, сколько будет стоит написать диплом, сроки его сдачи заказчику, а также все предъявляемые требования, включая обязательства о неразглашении данных.
        </p>
        <p className="block-text__par">
          Далее после 50%-ной предоплаты согласованный с вами автор (кандидат наук) пишет хорошую дипломную работу и по главам сдает ее вам на проверку. После окончательной оплаты вы в оговоренный срок получаете готовый диплом, а исполнитель отвечает на вопросы и помогает подготовиться к защите.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как воспользоваться нашими услугами в Москве и регионах?
        </h2>
        <p className="block-text__par">
          Итак, вы узнали, сколько стоит купить дипломную работу в компании BeSmarter!, и цена вас устраивает. В таком случае вам следует оформить заявку удобным для себя способом:
        </p>
        <ul>
          <li>
            онлайн – заполните форму на сайте и дождитесь ответа нашего менеджера;
          </li>
          <li>
            звонок – свяжитесь с нами по телефону 8 (495) 772-4090;
          </li>
          <li>
            визит – наш <a href="/contacts">адрес</a>: Москва, пер. Большой Кисловский, дом 1 строение 2, офис 211.
          </li>
        </ul>
        <p className="block-text__par">
          <b>Не теряйте времени – чем раньше вы оформите свой заказ, тем дешевле окажется услуга!</b>
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
