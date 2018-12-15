import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

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
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota";


const page = () => (
  <Wrapper title="Заказать курсовую работу по праву в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по праву по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
    <div className="wrapper bg bg-c2 bg-img bg-img1">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/kursovaya-rabota-na-zakaz">
            <a>Курсовая работа</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По праву</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kursovaya-rabota-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Курсовая работа</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kursovaya-rabota-na-zakaz/yurisprudenciya-pravo">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По праву</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать курсовую работу по праву
        </h1>
        <p className="block-text__par">
          Курсовые работы по праву – тип проекта, обязательный для всех студентов юридических специальностей. Их написание требует умения пользоваться материалами судебной практики и другой информацией из различных профильных источников, а также глубоко разбираться в нюансах актуального российского законодательства.
        </p>
        <p className="block-text__par">
          Далеко не каждый студент владеет достаточным количеством свободного времени и опытом для качественного решения подобных задач. Компания BeSmarter! предлагает не рисковать своим профессиональным будущим и заручиться помощью опытных экспертов. Заказать курсовую работу по праву у нас можно срочно и с гарантией качества.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kursovayz-rab-po-uris.jpg')} altText="Заказать курсовую работу по праву"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Наши преимущества
        </h2>
        <ul>
          <li>
            <b>Компетентность.</b> Мы поручим написать курсовую работу кандидату юридических наук и действующему преподавателю права.
          </li>
          <li>
            <b>Оригинальность.</b> Никакого «интернет-плагиата» – работа пишется с нуля. За этим следит отдел контроля. Уникальность текста проверяется на нескольких онлайн сервисах.
          </li>
          <li>
            <b>Универсальность.</b> У нас вы сможете заказать курсовую по праву любой отрасли – уголовному, гражданскому, трудовому, семейному, конституционному и пр.
          </li>
          <li>
            <b>Доступная стоимость.</b> Мы придерживаемся политики прозрачных цен и индивидуально подходим к каждому клиенту. У нас действительно недорого – убедитесь в этом сами!
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Алгоритм сотрудничества
        </h2>
        <p className="block-text__par">
          Чтобы купить курсовую по праву, вам следует оформить заявку одним из перечисленных ниже способов. Мы оперативно ее рассмотрим и обсудим с вами все детали заказа. По итогам собеседования будет подписан официальный договор.
        </p>
        <p className="block-text__par">
          Далее вы вносите 50%-ную предоплату, и наш автор приступает к выполнению работы. Готовая курсовая сдается вам на проверку в оговоренный срок. По вашему требованию вносятся бесплатные корректировки. Финальный этап – подготовка к защите работы, автор консультирует и отвечает на ваши вопросы.
        </p>
        <p className="block-text__par">
          Главный козырь BeSmarter! – ответственность. Личный менеджер сопровождает клиента вплоть до получения оценки, оперативно решая все вопросы. От вас нужно только желание – остальное сделаем мы!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить курсовую работу по праву?
        </h2>
        <p className="block-text__par">
          Оставьте заявку удобным для себя способом:
        </p>
        <ul>
          <li>
            <b><a href="#form">заполните форму</a></b> на сайте и дождитесь ответа сотрудника;
          </li>
          <li>
            свяжитесь с нами по телефону 8 (495) 772-40-90 или закажите обратный звонок.
          </li>
          <li>
            зайдите к нам в <b><Link href="/contacts"><a>офис</a></Link></b> по адресу: Москва, пер. Большой Кисловский, дом 1, стр. 2, оф. 211.
          </li>
        </ul>
        <p className="block-text__par">
          Курсовая работа по праву на заказ в компании BeSmarter! – это выгодно, надежно и качественно. Поручите ее настоящим специалистам!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
