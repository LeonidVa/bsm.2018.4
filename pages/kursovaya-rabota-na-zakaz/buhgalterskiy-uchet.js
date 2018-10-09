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
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";


const page = () => (
  <Wrapper title="Заказать курсовую работу по бухгалтерскому учету в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по бухгалтерскому учету по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
    <div className="wrapper bg bg-c2 bg-img bg-img1">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать курсовую работу по бухгалтерскому учету сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь"/>
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
            <a>По бухгалтерскому учету</a>
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

      <ImageBlock imageSrc={require('static/images/block/kur-rab-buhuch.jpg')}/>

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

      <CurrentOffer/>

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
        <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
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
