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
import links from 'data/linksBlock/dipDorab';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";


const page = () => (
  <Wrapper title="Доработка дипломной работы срочно в Москве, заказать исправление диплома – цены и сроки" description="Доработка дипломной работы срочно! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="доработка дипломной работы диплома корректировка срочно заказать рерайт редактирование цена дописать переделать исправление"/>
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
            <a>Доработка</a>
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
          <Link href="">
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

        <section className="block-text">
          <h1 className="block-text__title">
            Доработка дипломной работы
          </h1>
          <p className="block-text__par">
            Сроки сдачи становятся минимальными и нужно дописать дипломную работу?
          </p>
          <p className="block-text__par">
            Хотите заказать корректировку дипломной работы у лучших специалистов по выгодной цене?
          </p>
          <p className="block-text__par">
            Специалисты компании BeSmarter! с радостью помогут в решении этих задач. Это отличное решение для выхода из сложившейся ситуации. Выполнить доработку диплома срочно смогут только квалифицированные исполнители, которые знают все особенности данного проекта.
          </p>
          <p className="block-text__par">
            Сегодня в интернете можно найти самые разные сервисы, которые помогают дописать дипломную работу. Только не все они могут сравниться с услугами компании BeSmarter!
          </p>
          <p className="block-text__par">
            Огромный опыт работы авторов позволит быстро доделать диплом. Только здесь смогут взяться за любое задание и помочь со сложным проектом. Вы будете уверены в качестве и правильности выполненной работы. Компания BeSmarter! всегда приходит на помощь в трудное для студентов время!
          </p>
        </section>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-rabota.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Корректировка дипломных работ – надежно и качественно!
        </h2>
        <p className="block-text__par">
          Только наша компания предлагает самые выгодные и удобные условия сотрудничества. Мы долгое время работаем в данном направлении и всегда радуем клиентов. Колоссальный опыт работы позволяет переделать дипломную работу в кратчайшие сроки.
        </p>
        <p className="block-text__par">
          Диплом – это не простое задание, а фундаментальный труд. Если преподаватель возвращает его для исправления, то многие студенты не знают что делать дальше. Они уверены, что работа заслуживает самой высокой оценки, но их труды не могут оценить правильно. К тому же доработка диплома требует большого количества сил и времени.
          Что же делать студенту, когда времени практически нет?
        </p>
        <p className="block-text__par">
          Компания BeSmarter! знает, как помочь. Здесь помогут, даже если до сдачи остались дни или часы. Специалисты гарантируют положительный результат проделанной работы!
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Компания BeSmarter! обладает рядом преимуществ:
        </h2>
        <ul>
          <li>
            Доработка диплома срочно по выгодной стоимости
          </li>
          <li>
            Уникальность работы
          </li>
          <li>
            Диплом будет сделан качественно и грамотно
          </li>
          <li>
            Выполнение работы проводится оперативно
          </li>
          <li>
            Сопровождение до сдачи и консультирование. Заключение договора.
          </li>
        </ul>
        <p className="block-text__par">
          Исправление дипломных работ срочно – это уникальная возможность быстро, качественно и надежно получить желаемую специальность.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как заказать рерайт диплома или его исправление?
        </h2>
        <p className="block-text__par">
          Компания BeSmarter! каждый день ждет новых клиентов. Здесь всегда рады прийти на помощь в трудную минуту. На редактирование дипломной работы цена оговаривается в индивидуальном порядке. Она зависит от:
        </p>
        <ul>
          <li>
            Сложности,
          </li>
          <li>
            Сроков,
          </li>
          <li>
            Объемов,
          </li>
          <li>
            Оригинальности.
          </li>
        </ul>
        <p className="block-text__par">
          Главная задача компании BeSmarter! – это помощь студентам. Каждый, кому понадобилась помощь, может сюда обратиться и получить ее. Только здесь на доработку диплома цена будет приемлемая и доступная каждому студенту. Мы как никто другой понимаем студентов.
        </p>
        <p className="block-text__par">
          Если вы решили заказать рерайт дипломной работы или его исправление, то:
        </p>
        <ul>
          <li>
            Оформите заявку через онлайн-форму на сайте биржи.
          </li>
          <li>
            Позвоните по контактному номеру и менеджеры с радостью помогут в решении любой проблемы.
          </li>
          <li>
            Приходите в офис.
          </li>
        </ul>
        <p className="block-text__par">
          Мы рады видеть новых клиентов и готовы всем помочь в срочной доработке диплома!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameBorder="0" allowfullscreen></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
