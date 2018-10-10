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
import infoBlockConfig from 'data/infoBlock/otchet-po-prak'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import otchet from 'data/linksBlock/otchet';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';

import ImageBlock from 'components/common/ImageBlock';
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Заказать отчет по производственной практике – купить отчет по практике в Москве и РФ срочно – цены, сроки написания на заказ" description="Предлагаем заказать отчет по производственной практике! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img4">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="отчёт по производственной практике заказать купить написание написать на заказ сколько стоит стоимость срочно"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/zakazat-otchet-po-praktike">
            <a>Отчёт по практике</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Производственной</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/otch-prakrik1.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Отчет по практике</span>
              <p className="block-service__par">Не парься сам – доверься нам!</p>
              <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
              <p className="block-service__par">От 3 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-5">
          <CardPopInfo
            url="/kursovaya-rabota-na-zakaz"
            title="Курсовая работа"
            text={[<p>от 4 000 руб.</p>]}
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
          Заказать отчет по производственной практике
        </h1>
        <p className="block-text__par">
          Производственная практика – последний рывок перед защитой диплома и окончанием обучения. Не все студенты сами проходят связанную с написанием работы практику, в связи с этим составление отчета дается им с огромным трудом, ведь в отчете должны быть реальные данные с расчетами. Вы можете купить производственную практику у
          нас, чтобы избавить себя от лишних хлопот.
        </p>
        <p className="block-text__par">
          Наши специалисты окажут вам помощь в написании отчета по производственной практике, а у вас появится свободное время для подготовки к ГОСам, а нервы будут в намного лучшем состоянии.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/otchet-po-proizvodstvennoyp-praktike.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Почему лучше всего работать с нами
        </h2>
        <ul>
          <li>
            <b>Гарантия качества</b>. Специалисты нашей фирмы напишут производственный отчет под заказ в соответствии со всеми требованиями вашего учебного заведения и руководителя.
          </li>
          <li>
            <b>Уникальность текста</b>. Наши сотрудники каждую работу пишут с «чистого листа». Осуществляют обязательную проверку уникальности на онлайн-ресурсах.
          </li>
          <li>
            <b>Удобство</b>. Заказать отчет можно не только в Москве, но и с любого города России. Благодаря нашему сайту.
          </li>
          <li>
            <b>Оперативность</b>. Если заказчик пожелает, наши специалисты напишут производственную практику недорого (даже за день!), но на качество это не повлияет.
          </li>
          <li>
            <b>Компетентность</b>. В нашем штате сотрудников работают только действующие преподаватели вузов, а не копирайтеры. Поэтому ваша заказанная работа будет уникальной.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить отчет по производственной практике
        </h2>
        <p className="block-text__par">
          Есть несколько способов:
        </p>
        <ul>
          <li>
            Через сайт, заполнив <a href="#form">онлайн-заявку</a>.
          </li>
          <li>
            По телефону +7 495 772-4090. Мы вам перезвоним сами, если вам так удобнее.
          </li>
          <li>
            Чтобы заказать отчет по производственной практике, также приходите к нам в офис по адресу: г. Москва, пер. Большой Кисловский, дом 1, стр. 2, офис 211.
          </li>
        </ul>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Мы приложим все усилия для того, чтобы вы получили отличную оценку по производственной практике.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://drive.google.com/file/d/1pOfa1kQsnKv9gwPUNAkv3pnd29Pxwouq/preview"></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={otchet}/>
    </div>
  </Wrapper>
);


export default page
