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
import infoBlockConfig from 'data/infoBlock/magisterskaya';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import MagisDisGdeZakazat from "components/common/ServiceBlock/ready-made/MagisDisGdeZakazat"


const page = () => (
  <Wrapper title="Сколько стоит магистерская диссертация – цена написания магистерской диссертации на заказ – от 24 000 руб. | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Интересует, цена магистерской диссертации? Позвоните в компанию BeSmarter! и мы вам скажем сколько стоит магистерская диссертация | Тел. +7 (495) 772-40-90.">
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
            <a>Стоимость</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/magisterskaya/skolko-stoit">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Стоимость</span></a>
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
          Сколько стоит магистерская диссертация
        </h1>
        <p className="block-text__par">
          Грамотно написанная и уверенно защищенная магистерская диссертация – цена получения первого значительного научного звания в карьере будущего ученого. Тем не менее, далеко не каждый студент обладает навыками и, главное – достаточным количеством свободного времени, чтобы выполнить данную работу.
        </p>
        <p className="block-text__par">
          Предлагаем заказать магистерскую диссертацию по доступной цене у опытных специалистов компании BeSmarter! Мы напишем работу в сжатые сроки и в полном соответствии со всеми вузовскими требованиями. Кроме того, вы получите квалифицированную поддержку вплоть до момента успешной защиты.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/mag-ckolko.jpg')} altText="Сколько стоит магистерская диссертация"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Почему написать магистерскую диссертацию в BeSmarter – надежно?
        </h2>
        <ul className="fitted">
          <li>
            Во-первых, мы гарантируем, что диссертацию будет писать действующий преподаватель вуза с кандидатской степенью в соответствующей научной сфере. Качество работы непрерывно проверяется нашим отделом контроля. В случае необходимости по вашему запросу автор вносит бесплатные правки.
          </li>
          <li>
            Во-вторых, компания BeSmarter! оказывает комплексную помощь при подготовке к защите. Наше сотрудничество не заканчивается вместе с последней главой диссертации. Мы продолжаем консультировать вас, помогаем подготовить доклад и презентацию, тренируем отвечать на вопросы комиссии и так далее.
          </li>
          <li>
            Наконец, компания придерживается политики прозрачного ценообразования, поэтому стоимость магистерской диссертации на заказ полностью соответствует трудоемкости и сложности конкретной работы. Кроме того, вы можете рассчитывать на скидки и гибкую систему оплаты.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость написания магистерской диссертации на заказ?
        </h2>
        <p className="block-text__par">
          Разумеется, этот вопрос волнует каждого. Ориентировочно узнать, сколько стоит написать магистерскую диссертацию на заказ, можно в соответствующем разделе нашего сайта. Точная цена будет определена во время общения с менеджером на основании следующих критериев.
        </p>
        <ul>
          <li>
            Шифр специальности. Написание работы по гуманитарным вопросам обычно обходится дешевле в сравнении с тем, сколько стоит магистерская диссертация по техническим дисциплинам.
          </li>
          <li>
            Сложность тематики. Если у вас есть возможность выбора, мы готовы помочь вам выбрать тему для написания магистерской диссертации на заказ, цена которой будет минимальной.
          </li>
          <li>
            Сроки сдачи. Оптимальное время, необходимое для написания работы – от 5 дней. Если же вам нужно за день-два написать магистерскую диссертацию, цена будет немного выше, поскольку нам придется привлечь несколько авторов.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как узнать сколько стоит магистерская диссертация на заказ?
        </h2>
        <p className="block-text__par">
          Выберите наиболее удобный для себя способ связи. Жители Москвы имеют возможность непосредственно посетить наш <b><Link href="/contacts"><a>офис</a></Link></b> по адресу Большой Кисловский переулок, д. 1 стр. 2, офис 211. А если вы живете в другом регионе России, заполните <b><a href="#form">онлайн-форму</a></b> на сайте
          или позвоните по одному из номеров: +7(495)772-40-90, +7(495)772-90-40.
        </p>
        <p className="block-text__par">
          После собеседования мы, заключим с вами официальный договор и зафиксируем в нем все важные моменты сотрудничества, в том числе стоимость написания магистерской диссертации. Далее согласованный с вами автор приступит к написанию магистерской диссертации, а вы сможете заниматься другими делами, не переживая за будущее своей
          научной карьеры!
        </p>
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
          {url: "/dissertaciya-na-zakaz/magisterskaya/gde-zakazat", text: "Где заказать магистерскую диссертацию"},
          {url: "/diplom-na-zakaz#form", text: "Дипломная работа срочно"},
        ]
      }/>
    </div>
  </Wrapper>
);


export default page
