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
import infoBlockConfig from 'data/infoBlock/referat'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import referatLinks from 'data/linksBlock/referat'

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Referat from "components/common/ServiceBlock/ready-made/Referat";


const page = () => (
  <Wrapper title="Сколько стоит заказать реферат – стоимость реферата на заказ в компании «BeSmarter!» - 1 500 рублей, закажите реферат сейчас - тел. +7 (495) 772-40-90."
           description="Хотите узнать, сколько стоит заказать реферат в Москве? Звоните в компанию BeSmarter! и мы вам скажем сколько стоит написать реферат | Звоните: +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/referat-na-zakaz">
            <a>Реферат</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/referat-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Реферат</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/referat-na-zakaz/skolko-stoit-referat">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Стоимость</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Referat/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Сколько стоит заказать реферат
        </h1>
        <p className="block-text__par">
          Выяснить, сколько стоит заказать реферат в компании «BeSmarter!», можно с помощью нашего <Link href="/price"><a>прайс-листа</a></Link>. Ориентировочный диапазон цен составляет от 1 500 до <br/>7 000 рублей.
        </p>
        <p className="block-text__par">
          Чтобы узнать точно, сколько стоит написать реферат, заданную именно вам, понадобится собеседование. Мы определим ее цену на основании следующих факторов.
        </p>
        <ul>
          <li>
            Предмет. Расценки на гуманитарные дисциплины несколько ниже в сравнении с тем, сколько стоит сделать реферат по математике или электротехнике.
          </li>
          <li>
            Объем. Чем больше задание (количество задач, требуемое число страниц), тем выше цена реферата на заказ.
          </li>
          <li>
            Сроки. Чтобы минимизировать стоимость написания реферата, оформите заявку как можно раньше.
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/skolko-stiot-ref.jpg')} altText="Сколько стоит реферат"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что мы гарантируем?
        </h2>
        <ul>
          <li>
            Никаких ошибок. Каждый реферат в «BeSmarter!» проходит многоступенчатую проверку на правильность решения и грамотность оформления.
          </li>
          <li>
            Любой предмет. Компания принимает заказы на выполнение рефератов по любым гуманитарным, естественнонаучным или техническим дисциплинам.
          </li>
          <li>
            Максимальная оперативность. Даже, если вам нужно сдавать работу завтра утром, мы успеем ее сделать вовремя и качественно.
          </li>
          <li>
            Профессиональный подход. Мы не просто выполним ваш реферат, но и подробно объясним все ее нюансы, чтобы у вас не возникло проблем с «придирчивым» преподавателем.
          </li>
          <li>
            Гарантия неразглашения. Мы строго придерживаемся принципа строгой конфиденциальности, гарантии которой прописываются в официальном договоре.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Кто будет выполнять реферат?
        </h2>
        <p className="block-text__par">
          Лучше всего пишет рефераты тот, кто их задает! Поэтому мы делегируем такие заказы действующим вузовским преподавателям по соответствующим предметам. Они абсолютно точно знают, как правильно выполнить и грамотно оформить реферат, поскольку сами их регулярно проверяют.
        </p>
        <p className="block-text__par">
          Такой подход совместно с фирменной системой многоступенчатого контроля качества позволил нам добиться невероятной статистики – почти 99% отличных оценок! Если хотите получить высший балл за реферат по любому предмету – обращайтесь, мы поможем!
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как мы работаем?
        </h2>
        <ul>
          <li>
            Подготовка. Вы оформляете заявку, и после предварительного собеседования подписывается договор, в котором фиксируются все ваши требования к заказу и наши обязательства.
          </li>
          <li>
            Исполнение. Утвержденный вами исполнитель выполняет реферат и сдает его на проверку в оговоренный срок. В случае необходимости вносятся бесплатные корректировки.
          </li>
          <li>
            Завершение. Вы консультируетесь с автором по всем непонятным моментам, сдаете готовый реферат и получаете отличную оценку.
          </li>
        </ul>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Все элементарно – попробуйте сами и не пожалеете!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/skolko-stoit-ref-2.jpg')} altText="Сколько стоит заказать реферат"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как узнать, сколько стоит реферат?
        </h2>
        <ul>
          <li>
            онлайн-заявка – просто <a href="/#form">заполните форму</a> на сайте и дождитесь ответа менеджера;
          </li>
          <li>
            заявка по телефону – свяжитесь с нами по номеру <br/>+7 (495) 772-4090
          </li>
          <li>
            личная заявка – наш адрес: Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211.
          </li>
        </ul>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Оформляйте заявку прямо сейчас и узнайте сколько будет стоить написание вашего реферата!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={referatLinks}/>
    </div>
  </Wrapper>
);


export default page
