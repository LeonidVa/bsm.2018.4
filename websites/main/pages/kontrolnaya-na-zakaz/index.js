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
import infoBlockConfig from 'data/infoBlock/kontrol-na-zakaz';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Kontrolnaya from "components/common/ServiceBlock/ready-made/Kontrolnaya"


const page = () => (
  <Wrapper title="Заказать контрольную работу – решение контрольных работ на заказ недорого онлайн в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите заказать контрольную работу недорого онлайн? Нужно срочно решение контрольных работ?  И тогда на выручку придет BeSmarter! – компания, где сделать контрольную работу можно недорого, срочно и с качественным результатом.">
    <div className="wrapper bg bg-c2 bg-img bg-img1">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Контрольная</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kontrolnaya-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Контрольная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Kontrolnaya/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать контрольную работу
        </h1>
        <p className="block-text__par">
          Сторонняя помощь в написании контрольных работ может понадобиться даже прилежному студенту. Никто не застрахован от нехватки времени, недопонятой темы или даже плохого самочувствия. И тогда на выручку придет BeSmarter! – компания, где заказать контрольную работу можно недорого, срочно и с качественным результатом.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kontrol-rab.jpg')} altText="Заказать контрольную работу "/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что вы получаете, заказывая у нас контрольную работу?
        </h2>
        <ul>
          <li>
            <b>Профессиональный подход.</b> Решение контрольных работ на заказ поручается действующим преподавателям вузов, кандидатам соответствующих наук.
          </li>
          <li>
            <b>Универсальность.</b> Доступно выполнение контрольных работ на заказ по всем техническим и гуманитарным предметам на любую тему.
          </li>
          <li>
            <b>Оперативность.</b> В случае необходимости мы можем написать контрольную работу на заказ срочно (от 1 дня).
          </li>
          <li>
            <b>Последовательность.</b> Написание контрольных работ на заказ завершается подробной консультацией со стороны автора, чтобы вы смогли объяснить решение преподавателю.
          </li>
          <li>
            <b>Удобство.</b> У нас можно заказать контрольную онлайн, поэтому услуга доступна для жителей всех регионов России.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит цена контрольных работ на заказ
        </h2>
        <p className="block-text__par">
          Разумеется, вас интересует, сколько стоит сделать контрольную работу. К сожалению, назвать точную сумму заранее невозможно. Ориентировочно узнать, сколько стоит заказать контрольную работу, можно в соответствующем разделе нашего сайта.
        </p>
        <p className="block-text__par">
          Точная цена будет определена после собеседования на основании конкретной дисциплины, темы, сроков, требований и т. д.
        </p>
        <p className="block-text__par">
          Если вы желаете заказать контрольную недорого, есть два простых способа экономии. Во-первых, можно частично сделать работу самостоятельно – то, что сумеете или успеете. А во-вторых, следует заказать выполнение контрольной работы заранее, например, за неделю.
        </p>
        <p className="block-text__par italic">
          Чем больше вы выделите нам времени, тем ниже будет стоимость услуги.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/kontrolnaya.jpg')} altText="Контрольная работа на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Хотите заказать контрольную работу онлайн или в офисе?
        </h2>
        <p className="block-text__par">
          Выберите удобный для себя вариант:
        </p>
        <ol>
          <li>
            Через сайт – самый быстрый способ заказать контрольную работу недорого (<b><a href="#form">онлайн</a></b>)
          </li>
          <li>
            По телефону – свяжитесь с нами по номеру<br/>+7 (495) 772-4090
          </li>
          <li>
            В <b><Link href="/contacts"><a>офисе</a></Link></b> – наш адрес: Москва, Большой Кисловский переулок, д. 1 стр. 2, офис 211
          </li>
        </ol>
        <p className="block-text__par italic">
          Не теряйте времени! BeSmarter! – это ваша готовая контрольная работа на заказ, недорого и с гарантией качества!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

    </div>
  </Wrapper>
);


export default page
