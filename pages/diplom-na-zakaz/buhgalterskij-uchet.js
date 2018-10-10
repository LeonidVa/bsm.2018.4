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
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplomNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";


const page = () => (
  <Wrapper title="Заказать дипломную работу по бухгалтерскому учёту в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по бухгалтерскому учету по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="дипломная работа по бухгалтерскому учету"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/diplom-na-zakaz">
            <a>Дипломная работа</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По бухгалтерскому учёту</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Дипломная работа</span>
              <p className="block-service__par">Быстро и качественно!</p>
              <p className="block-service__par">С нами твоя защита пройдет легко!</p>
              <p className="block-service__par">От 14 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Дипломный проект"
            text={[<p>от 21 000 руб.</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Магистерская диссертация"
            text={[<p>от 23 000 руб.</p>]}
          />

            <CardPopInfo
                url="/diplom-mba-na-zakaz"
                title="Диплом MBA"
                text={[<p>от 25 000 руб.</p>]}
            />
        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/diplom-na-zakaz">
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
          Заказать дипломную работу по бухгалтерскому учёту
        </h1>
        <ul>
          <li>
            Хотите, чтобы для Вас в сжатые сроки была написана дипломная работа по бухгалтерскому учёту?
          </li>
          <li>
            Вам нужно купить дипломную работу по бухучёту, которая написана высококлассными специалистами?
          </li>
          <li>
            Необходима дипломная работа по бухучёту с высокой уникальностью?
          </li>
        </ul>
        <p className="block-text__par">
          Тогда Вам помогут специалисты компании BeSmarter!
        </p>
        <p className="block-text__par">
          Мы напишем для Вас актуальную и содержательную работу по бухучёту в срок и даже от одного дня!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-po-buch.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Купить дипломную работу по бухгалтерскому учёту
        </h2>
        <p className="block-text__par">
          Заказать дипломную работу по бухгалтерскому учёту – это отличный выход для студентов, у которых нет времени на написание диплома.
        </p>
        <p className="block-text__par">
          Опытные кандидаты и доктора наук, работающие в компании BeSmarter!, охотно напишут для Вас качественную работу.
        </p>
        <p className="block-text__par">
          Став нашим заказчиком, Вы получите:
        </p>
        <ul style={{listStyle: 'none'}}>
          <li>
            <b>Оперативность выполнения работы</b><br/>
            Мы напишем для Вас диплом в срок от одного дня.
          </li>
          <li>
            <b>Полную безопасность</b><br/>
            Все свои обязательства перед клиентом мы прописываем в официальном договоре.
          </li>
          <li>
            Сделав у нас заказ, Вы можете быть уверены в получении качественной работы, написанной настоящими профессионалами своего дела.
          </li>
          <li>
            <b>Приемлемую стоимость</b><br/>
            Мы предлагаем своим клиентам разумное соотношение цены и качества работы. Заказать диплом по бухучёту можно по цене от 14000 рублей.
          </li>
          <li>
            <b>Высокую уникальность работы</b><br/>
            Заказать диплом по бухгалтерскому учёту в нашей компании – значит получить текст с уникальностью более 70% по системе «Антиплагиат».
          </li>
          <li>
            <b>Бесплатное внесение правок</b><br/>
            При возникновении замечаний к работе со стороны Вашего преподавателя, мы охотно внесем необходимые правки в гарантий срок.
          </li>
          <li>
            <b>Сопровождение до успешной защиты</b><br/>
            Мы готовы написать для Вас не только диплом, но и речь для защиты, презентацию проекта и другие материалы. Также наши менеджеры дадут Вам полезные советы о том, как уверенно и отлично защититься.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Написание диплома по бухгалтерскому учёту
        </h2>
        <p className="block-text__par">
          Получив от Вас заказ на написание диплома, мы составляем техническое задание для нашего автора. В нём мы указываем предпочитаемые Вами научные методики и компании, на базе которых нужно провести исследования для Вас.
        </p>
        <p className="block-text__par">
          Благодаря этому Вы получаете отличную работу, которая написана специально для Вас. Мы уверены: Вы сможете защититься на высший балл.
        </p>
        <p className="block-text__par">
          Вам нужна интересная и качественная работа по бухучёту? Напишем!
        </p>
        <p className="block-text__par">
          Звоните нам прямо сейчас +7 495 772 40 90, посетите наш офис на Арбате!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <Video>
        <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameBorder="0" allowfullscreen></iframe>
      </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
