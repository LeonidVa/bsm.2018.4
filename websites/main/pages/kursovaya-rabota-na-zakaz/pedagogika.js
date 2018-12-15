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
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota";


const page = () => (
  <Wrapper title="Заказать курсовую работу по педагогике в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по педагогике по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
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
            <a>По педагогике</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kursovaya-rabota-na-zakaz/pedagogika">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По педагогике</span></a>
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
          Заказать курсовую работу по педагогике
        </h1>
        <p className="block-text__par">
          Педагогика – одна из ключевых профессий для человечества, и соперничать с ней может только медицина. В последние годы число студентов, желающих стать педагогами, существенно возросло благодаря улучшению материального обеспечения. Но чтобы получить высокооплачиваемую должность, нужно добиться весомых результатов в вузе.
        </p>
        <p className="block-text__par">
          Курсовые работы по педагогике – одно из важных испытаний на пути профессионального становления. Преодолеть его можно самостоятельно или заручившись сторонней квалифицированной помощью. Второй вариант надежнее и безопаснее. Чтобы недорого заказать курсовую по педагогике, обращайтесь в компанию BeSmarter!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kurs-po-pedag.jpg')} altText="Заказать курсовую работу по педагогике"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что мы предлагаем?
        </h2>
        <ul>
          <li>
            <b>Качество.</b> Курсовая работа по педагогике от BeSmarter! – это оригинальное исследование, в котором проводится анализ актуальной проблемы и предлагается эффективное ее решение. Все выводы строго аргументируются.
          </li>
          <li>
            <b>Оперативность.</b> В случае необходимости мы можем выполнить заказ срочно и написать курсовую работу в течение суток. День сдачи регламентируется официальным договором и контролируется личным менеджером.
          </li>
          <li>
            <b>Профессионализм.</b> Мы оказываем клиенту квалифицированную поддержку на всех этапах сотрудничества, вплоть до момента защиты. Исполнитель вносит бесплатные правки, консультирует, отвечает на вопросы. Наши сотрудники всегда на связи и готовы помочь.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Сколько стоит написание курсовой по педагогике?
        </h2>
        <p className="block-text__par">
          Ориентировочный порядок цен указан в прайс-листе. Точная стоимость заказа определяется по результатам предварительного собеседования. Каждая курсовая работа на заказ по педагогике уникальна, поэтому нам нужно знать вашу тему, требования, сроки сдачи и остальные нюансы.
        </p>
        <p className="block-text__par">
          С другой стороны, подобная неопределенность открывает перед вами возможности для экономии. Если вы желаете недорого купить курсовую по педагогике, проконсультируйтесь с нами при выборе темы, а также постарайтесь оформить заказ как можно раньше. Экономьте свое время, деньги и нервы!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить курсовую по педагогике?
        </h2>
        <p className="block-text__par">
          Тогда выберите предпочтительный для себя способ связи:
        </p>
        <ul>
          <li>
            онлайн – <b><a href="#form">заполните форму</a></b> на сайте и дождитесь ответа менеджера компании;
          </li>
          <li>
            телефон – позвоните нам по номеру 8 (495) 772-40-90;
          </li>
          <li>
            визит – зайдите к нам в <b><Link href="/contacts"><a>офис</a></Link></b>: Москва, пер. Большой Кисловский, дом 1, стр. 2, оф. 211.
          </li>
        </ul>
        <p className="block-text__par">
          Курсовая работа от компании BeSmarter! – это гарантия вашей успешной защиты. Не упустите свой шанс!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
