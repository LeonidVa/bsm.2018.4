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
import infoBlockConfig from 'data/infoBlock/kontrol-na-zakaz';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Kontrolnaya from "components/common/ServiceBlock/ready-made/Kontrolnaya"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"


const page = () => (
  <Wrapper title="Заказать контрольную работу – решение контрольных работ на заказ недорого онлайн в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите заказать контрольную работу недорого онлайн? Нужно срочно решение контрольных работ?  И тогда на выручку придет BeSmarter! – компания, где сделать контрольную работу можно недорого, срочно и с качественным результатом.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">


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

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kontrolnaya-na-zakaz" name="Контрольная" position="2" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Kontrolnaya/>

<MatZashGirl/>

      <TextBlock>
        <h1 className="title">
          Заказать контрольную работу
        </h1>
        <p className="par">
          Сторонняя помощь в написании контрольных работ может понадобиться даже прилежному студенту. Никто не застрахован от нехватки времени, недопонятой темы или даже плохого самочувствия. И тогда на выручку придет BeSmarter! – компания, где заказать контрольную работу можно недорого, срочно и с качественным результатом.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kontrol-rab.jpg')} altText="Заказать контрольную работу "/>

      <TextBlock>
        <h2 className="title">
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
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          От чего зависит цена контрольных работ на заказ
        </h2>
        <p className="par">
          Разумеется, вас интересует, сколько стоит сделать контрольную работу. К сожалению, назвать точную сумму заранее невозможно. Ориентировочно узнать, сколько стоит заказать контрольную работу, можно в соответствующем разделе нашего сайта.
        </p>
        <p className="par">
          Точная цена будет определена после собеседования на основании конкретной дисциплины, темы, сроков, требований и т. д.
        </p>
        <p className="par">
          Если вы желаете заказать контрольную недорого, есть два простых способа экономии. Во-первых, можно частично сделать работу самостоятельно – то, что сумеете или успеете. А во-вторых, следует заказать выполнение контрольной работы заранее, например, за неделю.
        </p>
        <p className="par italic">
          Чем больше вы выделите нам времени, тем ниже будет стоимость услуги.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/kontrolnaya.jpg')} altText="Контрольная работа на заказ"/>

      <TextBlock>
        <h2 className="title">
          Хотите заказать контрольную работу онлайн или в офисе?
        </h2>
        <p className="par">
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
        <p className="par italic">
          Не теряйте времени! BeSmarter! – это ваша готовая контрольная работа на заказ, недорого и с гарантией качества!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);


export default page
