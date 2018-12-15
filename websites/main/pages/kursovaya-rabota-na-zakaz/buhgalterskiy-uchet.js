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
  <Wrapper title="Заказать курсовую работу по бухгалтерскому учету в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по бухгалтерскому учету по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
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
            <a>По бухгалтерскому учету</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kursovaya-rabota-na-zakaz/buhgalterskiy-uchet">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По бухгалтерскому учету</span></a>
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
          Заказать курсовую работу по бухгалтерскому учету
        </h1>
        <p className="block-text__par">
          Из всего экономического курса бухгалтерский учет – самая простая и формализованная дисциплина. Здесь не нужны сложные теоретические изыскания и умозаключения. Но это «палка о двух концах» – курсовые работы по бухгалтерскому учету требуют глубоких знаний нормативной базы и грамотных расчетов. Ведь практика здесь важнее
          теории.
        </p>
        <p className="block-text__par">
          А нормативная база постоянно обновляется и меняется, поэтому скачать готовую работу в интернете не получится. Придется или написать ее самостоятельно или заказать курсовую по бухгалтерскому учету у квалифицированного специалиста. Если у вас не хватает времени или навыков, воспользуетесь услугами компании BeSmarter!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kur-rab-buhuch.jpg')} altText="Заказать курсовую работу по бухгалтерскому учету"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Какие мы даем гарантии?
        </h2>
        <ul>
          <li>
            <b>Гарантия качества.</b> Написание курсовой работы поручается кандидату экономических наук и действующему вузовскому преподавателю экономики. Он в точности знает, какой она должна быть, поскольку сам их и задает студентам.
          </li>
          <li>
            <b>Гарантия пунктуальности.</b> День сдачи готовой работы прописывается в официальном договоре. Если курсач нужен срочно, мы сделаем его за 24 часа без ущерба качеству. Весь процесс контролирует ваш персональный менеджер.
          </li>
          <li>
            <b>Гарантия конфиденциальности.</b> Все аспекты нашего сотрудничества останутся между нами – обязательства о неразглашении фиксируются в договоре. Мы всегда заботимся о ваших интересах, убедитесь в этом сами!
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Сколько стоит курсовая по бухгалтерскому учету?
        </h2>
        <p className="block-text__par">
          Ориентировочные расценки приведены в соответствующем разделе нашего сайта. Точная стоимость определяется в процессе предварительного собеседования, заносится в договор и больше не меняется.
        </p>
        <p className="block-text__par">
          Мы используем объективные и прозрачные критерии ценообразования. Прежде всего, это сложность темы – объем расчетов, количество графиков, таблиц и так далее. Также цена зависит от требуемого объема текста (в страницах), и срочности.
        </p>
        <p className="block-text__par">
          Если вы желаете недорого купить курсовую работу по бухгалтерскому учету, проконсультируйтесь с нами перед выбором темы (если это возможно), а также постарайтесь оформить заявку как можно раньше.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить курсовую курсовую работу по бухгалтерскому учету?
        </h2>
        <p className="block-text__par">
          Вы можете выбрать один из трех вариантов:
        </p>
        <ul>
          <li>
            онлайн – <b><a href="#form">заполните форму</a></b> на сайте и дождитесь ответа менеджера компании;
          </li>
          <li>
            звонок – свяжитесь с нами по телефону 8 (495) 772-40-90 (мы перезвоним);
          </li>
          <li>
            визит – <b><Link href="/contacts"><a>адрес</a></Link></b>: Москва, переулок Большой Кисловский, дом 1, стр. 2, офис 211.
          </li>
        </ul>
        <p className="block-text__par">
          Закажите курсовую работу по экономике в компании BeSmarter! и обеспечьте себе высокую оценку на защите!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
