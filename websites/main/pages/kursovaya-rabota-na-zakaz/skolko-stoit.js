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
import links from 'data/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Сколько стоит курсовая работа – стоимость курсовой работы в Москве - 2000 рублей, звоните в компанию «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите узнать сколько стоит написать курсовую работу на заказ в Москве? Примерная стоимость курсовой работы – 2000 рублей! Звоните в компанию BeSmarter! И мы вам скажем точно сколько стоит написать курсовую работу.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/kursovaya-rabota-na-zakaz', text:'Курсовая работа'},
            {url:'#', text:'Стоимость'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz" name="Курсовая работа" position="2" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz/skolko-stoit" name="Стоимость" position="3" />
        </ItemScope>




      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Сколько стоит курсовая работа
        </h1>
        <p className="par">
          Сколько стоит курсовая работа в Москве? Данным вопросом каждый год интересуются десятки тысяч студентов столичных вузов. Не потому, что они ленивы или недостаточно прилежны – просто времени на все не хватает.
        </p>
        <p className="par">
          Если вы относитесь к числу таких студентов, то мы надеемся, что данная статья поможет вам узнать, сколько стоит написать курсовую работу в Москве сегодня. А также как сэкономить на данной услуге и найти ответственного и грамотного исполнителя.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kurs-skolko-stoit.jpg')} altText="Сколько стоит курсовая работа"/>

      <TextBlock>
        <h2 className="title">
          Как определяется стоимость курсовой работы?
        </h2>
        <p className="par">
          Прежде всего, следует понимать, что регион проживания никак не влияет на цены. Если вам нужна курсовая работа на заказ, цена в Москве, Калининграде или Владивостоке будет одинаковой. Благодаря интернету расстояния исчезли, поэтому клиент и исполнитель могут находиться где угодно и эффективно сотрудничать.
        </p>
        <p className="par">
          Тем не менее, расценки все же варьируются. На то, сколько стоит курсовая работа, оказывают влияние несколько объективных факторов. В частности: дисциплина (технические специальности дороже), сложность конкретной темы, срочность заказа, фактический объем текста, необходимость написания на иностранном языке и т. д.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Сколько стоит курсовая работа в компании BeSmarter!
        </h2>
        <ul>
          <li>
            Стоимость курсовой работы по юриспруденции - от 2000 рублей, минимальный срок – от 1 дня.
          </li>
          <li>
            Цена курсовой работы по экономике с практической частью - от 3500 рублей, от 1 дня.
          </li>
          <li>
            Написание курсовой работы по информатике - от 7000 рублей, от 3 дней.
          </li>
          <li>
            Стоимость курсовой работы по деталям машин от 8000 рублей, от 3 дней.
          </li>
          <li>
            Заказать курсовую работу на иностранном языке будет стоить примерно в 1,5-2 раза дороже стандартных расценок.
          </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Преимущества сотрудничества с нами
        </h2>
        <ul>
          <li>
            Компетентность. Работу будет выполнять кандидат соответствующих наук.
          </li>
          <li>
            Оперативность. Мы способны написать хороший курсовик даже за 1 день, и это обойдется вам совсем недорого.
          </li>
          <li>
            Уникальность. Только оригинальные работы, никакого плагиата.
          </li>
          <li>
            Ответственность. Обеспечивается поддержка клиента вплоть до успешной защиты.
          </li>
          <li>
            Конфиденциальность. Все аспекты нашего сотрудничества останутся между нами.
          </li>
        </ul>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <TextBlock>
        <h2 className="title">
          Как заказать?
        </h2>
        <p className="par">
          Выберите наиболее удобный для себя способ связи:
        </p>
        <ol>
          <li>
            С помощью сайта – <b><a href="#form">оставьте заявку</a></b> на нашем сайте и дождитесь ответа менеджера.
          </li>
          <li>
            По телефону – позвоните нам по номеру <br/>+7 (495) 772-40-90.
          </li>
          <li>
            Лично – наш <b><Link href="/contacts"><a>адрес</a></Link></b>: Москва, пер. Большой Кисловский, дом 1 строение 2, офис 211.
          </li>
        </ol>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={
        [
          {url: "/kursovaya-rabota-na-zakaz/sait-kursovyh-rabot", text: "Где заказать курсовую работу"},
          {url: "/kursovoj-proekt-na-zakaz", text: "Заказать курсовой проект"},
        ]
      }/>
    </PageWrapper>
  </Wrapper>
);


export default page
