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
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";


const page = () => (
  <Wrapper title="Заказать отчет по учебной практике – купить отчет по учебной практике в Москве и РФ срочно – цены, сроки написания под ключ" description="Предлагаем заказать отчет по учебной практике! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img4">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать отчет по учебной практике купить недорого"/>
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
            <a>Учебной</a>
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
            url="/referat-na-zakaz"
            title="Реферат"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/kontrolnaya-na-zakaz"
            title="Эссе Контрольная"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-k-ekzamenu"
            title="Экзамены Тесты"
            text={[<p>от 200 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovaya-rabota-na-zakaz"
            title="Курсовая работа"
            text={[<p>от 4 000 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovoj-proekt-na-zakaz"
            title="Курсовой проект"
            text={[<p>от 8 000 руб.</p>]}
          />

        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/kursovaya-rabota-na-zakaz">
            <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
              <div className="block-service__text gradient-l-black">
                <span className="block-service__title">Материалы для успешной защиты</span>
                <p className="block-service__par">Не парься сам – доверься нам!</p>
                <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                <p className="block-service__par">Доступные цены</p>
                <p className="block-service__par">Срочно от 2 часов</p>
              </div>
            </a>
          </Link>
          <div className="block-service__list list-4">
<CardPopInfo
title={servicecards["Пакет «Успешная Защита»"].title}
text={servicecards["Пакет «Успешная Защита»"].text}
description={servicecards["Пакет «Успешная Защита»"].description}
/>
<CardPopInfo
title={servicecards["Доклад"].title}
text={servicecards["Доклад"].text}
description={servicecards["Доклад"].description}
/>
<CardPopInfo
title={servicecards["Оригинальность текста"].title}
text={servicecards["Оригинальность текста"].text}
description={servicecards["Оригинальность текста"].description}
/>
<CardPopInfo
title={servicecards["Ответы к защите"].title}
text={servicecards["Ответы к защите"].text}
description={servicecards["Ответы к защите"].description}
/>

          </div>
          <div className="block-service__list list-5">
<CardPopInfo
title={servicecards["Мини-диплом Раскладка"].title}
text={servicecards["Мини-диплом Раскладка"].text}
description={servicecards["Мини-диплом Раскладка"].description}
/>
<CardPopInfo
title={servicecards["Получение по главам"].title}
text={servicecards["Получение по главам"].text}
description={servicecards["Получение по главам"].description}
/>
<CardPopInfo
title={servicecards["Аннотация Отзыв Рецензия"].title}
text={servicecards["Аннотация Отзыв Рецензия"].text}
description={servicecards["Аннотация Отзыв Рецензия"].description}
/>
<CardPopInfo
title={servicecards["Слайды"].title}
text={servicecards["Слайды"].text}
description={servicecards["Слайды"].description}
/>
<CardPopInfo
title={servicecards["Распечатка Переплеты"].title}
text={servicecards["Распечатка Переплеты"].text}
description={servicecards["Распечатка Переплеты"].description}
/>

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать отчет по учебной практике
        </h1>
        <p className="block-text__par">
          В нашей компании собран лучший преподавательский состав, состоящий из действующих специалистов разных дисциплин с учеными степенями, начиная от преподавателей вузов до кандидатов наук. Вы будете довольны результатом!
        </p>
        <p className="block-text__par">
          Перед совершением заказа клиент может лично пообщаться с возможными исполнителями и выбрать на свой взгляд лучшего кандидата. Более 98% наших заказчиков защищаются на «отлично» вследствие такого профессионального подхода.
        </p>
      </section>

      <FormEstimate/>
      <ImageBlock imageSrc={require('static/images/block/otchet-po-uchebnoy-praktike.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как заказать отчет по учебной практике недорого
        </h2>
        <ul>
          <li>
            Не теряйте времени. Заказать отчет по учебной практике лучше заблаговременно. Наши сотрудники смогут написать вашу работу срочно.
          </li>
          <li>
            Проконсультируйтесь с менеджером. При возможности свободного выбора темы, предоставьте нам право подобрать наилучший вариант, а также посоветовать вам, как купить отчет по учебной практике недорого!
          </li>
          <li>
            Предложите свои наработки. Если вы начали самостоятельно писать учебную практику, принесите нам эти наработки, мы применим их при написании вашего отчета и снизим цену за помощь в написании учебной практики.
          </li>
          <li>
            Особые требования. Мы поможем, если вам требуется заказать написание отчета по учебной практике на другом иностранном языке или 100% уникальность текста (при стандартных 80-98%).
          </li>
        </ul>
      </section>
      <InfoBlock infoBlockConfig={infoBlockConfig}/>
      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Какие гарантии предоставляет компания BeSmarter!
        </h2>
        <ul>
          <li>
            <b>Качество</b>. Отдел контроля компании проводит несколько этапов проверки работ, написанных под заказ.
          </li>
          <li>
            <b>Оригинальность</b>. Специалисты пишут каждый отчет по учебной практике «с нуля», с учетом поставленных требований заказчика, не опираясь на ранее написанные личные или чужие работы.
          </li>
          <li>
            <b>Пунктуальность</b>. Ни у одной заказанной работы не было задержек со сдачей ни на день. Все работы сдаются в срок, прописанный в договоре.
          </li>
          <li>
            <b>Конфиденциальность</b>. Факт сотрудничества остается втайне. В юридически заверенном договоре прописываются обязательства о неразглашении. В нашей компании вы сможете заказать отчет по учебной практике недорого, срочно и с гарантией качества.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить отчет по учебной практике в Москве
        </h2>
        <p className="block-text__par">
          Есть несколько способов заказать работу:
        </p>
        <ul>
          <li>
            На нашем сайте можно заполнить <b><a href="#form">онлайн-заявку</a></b>.
          </li>
          <li>
            Наши менеджеры всегда рады вашему звонку <br/>+7(495) 772-40-90.
          </li>
          <li>
            Либо встретиться лично у нас - в удобном офисе, в центре столицы по адресу, указанному в наших <Link href="/contacts"><b><a>контактах</a></b></Link>.
          </li>
        </ul>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          BeSmarter! – это качественные, уникальные, грамотно оформленные работы под заказ в Москве на выгодных условиях!
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
