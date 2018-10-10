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
  <Wrapper title="Дипломная работа по юриспруденции на заказ в Москве и РФ – сколько стоит написание диплома под ключ, купить недорого" description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по юриспруденции по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="купить заказать дипломная работа по юриспруденции стоимость цена диплома"/>
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
            <a>По юриспруденции</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/diplom-na-zakaz/yurisprudenciya-pravo#form">
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
          Заказать дипломную работу по юриспруденции
        </h1>
        <ul style={{listStyle: 'none'}}>
          <li>
            Вам необходима высококачественная, содержательная дипломная работа по юриспруденции, написанная всего за несколько дней?
          </li>
          <li>
            Хотите купить дипломную работу по юриспруденции, подготовленную профессиональными авторами?
          </li>
          <li>
            Нужна презентация дипломной работы по юриспруденции, которая поможет защититься на «отлично»?
          </li>
        </ul>
        <p className="block-text__par">
          Тогда Вам обязательно нужно обратиться к специалистам компании BeSmarter!
        </p>
        <p className="block-text__par">
          Мы напишем для Вас интересный и содержательный диплом по юриспруденции на заказ!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-po-uri.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Написание дипломной работы по юриспруденции
        </h2>
        <p className="block-text__par">
          Если у Вас нет времени на написание работы, то Вы можете заказать диплом по юриспруденции у опытных авторов компании BeSmarter! Став нашим клиентом,Вы получите такие преимущества:
        </p>
        <ul style={{listStyle: 'none'}}>
          <li>
            <b>Гарантии качества</b><br/>
            Все свои обязательства по отношению к клиенту мы прописываем в договоре. Заказать дипломную работу по юриспруденции у наших специалистов – значит получить труд, написанный по итогам исследований, проведенных кандидатами и докторами юридических наук.
          </li>
          <li>
            <b>Отличную уникальность текста</b><br/>
            Дипломные работы по юриспруденции, написанные в нашей компании, проходят проверку по системе «Антиплагиат». Это означает, что Вы получаете текст с уникальностью более 70%.
          </li>
          <li>
            <b>Срочность подготовки работы</b><br/>
            Наши авторы готовы выполнить написание диплома юридической тематики в срок от одного дня.
          </li>
          <li>
            <b>Приемлемая цена</b><br/>
            Мы предлагаем Вам доступную стоимость дипломной работы по юриспруденции. Цена дипломной работы по юриспруденции варьируется в пределах от 14 до 45 тысяч рублей.
          </li>
          <li>
            <b>Внесение правок в работу</b><br/>
            Если у Вашего научного руководителя есть замечания к тексту работы, наши специалисты бесплатно внесут изменения в гарантийный срок до 30 дней.
          </li>
          <li>
            <b>Сопровождение до успешной защиты</b><br/>
            По Вашему желанию мы напишем для Вас не только сам дипломный проект, но и презентацию или доклад к диплому по юриспруденции. А советы наших менеджеров и преподавателей помогут Вам получить на защите твёрдую «пятёрку».
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Купить дипломную работу по юриспруденции
        </h2>
        <p className="block-text__par">
          Получив ваш заказ, мы составляем техническое задание для нашего автора. В нём мы указываем, какие методики Вы предпочитаете, и на каком материале для Вас должны быть проведены исследования. Автор пишет диплом в соответствии с Вашими пожеланиями.
        </p>
        <p className="block-text__par">
          Поэтому Вы получаете грамотную именно для Вас написанную работу. Мы убеждены, что Вы сможете превосходно защититься!
        </p>
        <p className="block-text__par">
          Нужно заказать диплом и вы хотите узнать, сколько стоит его написание? Звоните нам по номеру <br/>+7 495 772 40 90, заполните форму заявки или приезжайте в наш <Link href="/contacts"><b><a>офис</a></b></Link> расположенный на Арбате!
        </p>
      </section>

      <Video>
        <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameBorder="0" allowfullscreen></iframe>
      </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
