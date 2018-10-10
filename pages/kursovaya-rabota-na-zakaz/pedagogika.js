import Link from 'next/link';
import Wrapper from 'components/Wrapper';

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
import links from 'data/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import servicecards from "data/serviceCards";
import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Заказать курсовую работу по педагогике в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по педагогике по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
    <div className="wrapper bg bg-c2 bg-img bg-img1">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать курсовую работу по педагогике сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь"/>
      </MetaTags>

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

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/kurs-rab.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Курсовая работа</span>
              <p className="block-service__par">Не парься сам – доверься нам!</p>
              <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
              <p className="block-service__par">От 4 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-5">
          <CardPopInfo
            url="/zakazat-otchet-po-praktike"
            title="Отчет по практике"
            text={[<p>от 3 000 руб.</p>]}
          />

          <CardPopInfo
            url="/referat-na-zakaz"
            title="Реферат"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/zakazat-esse"
            title="Эссе Контрольная"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-k-ekzamenu"
            title="Экзамены Тесты"
            text={[<p>от 200 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovoj-proekt-na-zakaz"
            title="Курсовой проект"
            text={[<p>от 8 000 руб.</p>]}
          />

        </div>
      </section>

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

      <ImageBlock imageSrc={require('static/images/block/kurs-po-pedag.jpg')}/>

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
        <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
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
