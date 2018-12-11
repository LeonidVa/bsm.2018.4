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
import infoBlockConfig from 'data/infoBlock/magisterskaya'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig'

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import MagisDisGdeZakazat from "components/common/ServiceBlock/ready-made/MagisDisGdeZakazat"

const page = () => (
  <Wrapper title="Где заказать (купить) магистерскую диссертацию – можно заказать диссертацию магистра в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Где заказать магистерскую диссертацию? Лучшее место в Москве, где заказать магистерскую диссертацию можно с гарантией успешной защиты – компания BeSmarter!">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



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
          <Link href="/dissertaciya-na-zakaz/magisterskaya">
            <a>Магистерская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Где заказать</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/magisterskaya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Магистерская</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/magisterskaya/gde-zakazat">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Где заказать</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "4"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <MagisDisGdeZakazat/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Где заказать магистерскую диссертацию
        </h1>
        <p className="block-text__par">
          Не секрет, что большинство студентов старших курсов помимо учебы еще и работают. И времени на написание магистерской диссертации у них не так много. Кроме того, отсутствует и опыт выполнения научных работ такого уровня. Обычные курсовые и даже диплом не идут ни в какое сравнение с диссертацией.
        </p>
        <p className="block-text__par">
          Предлагаем не рисковать получением магистерской степени, которая открывает дорогу к вашему всестороннему профессиональному развитию. Закажите выполнение работы высококлассным ученым, работающим в компании BeSmarter!. А сами продолжайте спокойно зарабатывать деньги и не спеша готовиться к защите.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/mag-gde-z.jpg')} altText="Где заказать магистерскую диссертацию"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как определяется стоимость услуги?
        </h2>
        <p className="block-text__par">
          В первом приближении диапазон цен вы сможете прикинуть в соответствующем разделе нашего сайта. Стоимость именно вашей магистерской диссертации мы определим в процессе предварительной консультации. Следует понимать, что трудоемкость конкретной работы существенно варьируется в зависимости от сопутствующих факторов.
        </p>
        <p className="block-text__par">
          Главный критерий ценообразования – это, конечно же, сложность предмета и выбранной темы. Дешевле всего стоят диссертации по гуманитарным специальностям, в то время, как расценки по техническим дисциплинам существенно выше среднего. Также влияние на итоговую стоимость услуги оказывает срочность выполнения и специальные
          требования.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как мы работаем?
        </h2>
        <ul>
          <li>
            Заявка. Чтобы воспользоваться нашими услугами, заполните <b><a href="#form">онлайн-форму</a></b> на сайте, свяжитесь с нами по телефону (+7(495)772-4090, +7(495)772-9040) или посетите <b><Link href="/contacts"><a>офис</a></Link></b> компании (Большой Кисловский переулок, д. 1 стр. 2, офис 211).
          </li>
          <li>
            Договор. Гарантией вашего спокойствия является официальный договор, в котором прописываются все детали нашего сотрудничества – сроки сдачи, стоимость, требования к работе и т. д.
          </li>
          <li>
            Исполнение. После всех формальностей наши сотрудники приступают к работе. В случае необходимости они по вашему запросу внесут необходимые правки и ответят на любые вопросы.
          </li>
          <li>
            Защита. Мы поможем вам качественно подготовиться к защите диссертации, включая содействие в подготовке доклада и презентации, тренировку ответов на вопросы комиссии и другие аспекты.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/jsAcoRW_Uno" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={
        [
          {url: "/dissertaciya-na-zakaz/magisterskaya/skolko-stoit", text: "Сколько стоит магистерская диссертация"},
        ]
      }/>

    </div>
  </Wrapper>
);


export default page
