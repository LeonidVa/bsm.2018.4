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
  <Wrapper title="Заказать отчет по практике – сколько стоит написать отчет по практике недорого с печатью в Москве и РФ, цена и сроки на заказ" description="В компании BeSmarter! вы можете заказать отчет по практике недорого с печатью в Москве. Тел. +7 (495) 772-40-90.">

    <div className="wrapper bg bg-c2 bg-img bg-img4">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать отчет по практике купить недорого с печатью где помощь в написании на заказ сколько стоит преддипломную производственную учебную"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Отчёт по практике</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link>
          <a href="#form" className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/otch-prakrik1.jpg') + ")",}}>
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
            url="/kursovoj-proekt-na-zakaz"
            title="Курсовой проект"
            text={[<p>от 8 000 руб.</p>]}
          />

        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/zashitit">
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
              url="/zashitit"
              title="Пакет «Успешная Защита»"
              text={[<p>от 5 000 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Доклад"
              text={[<p>от 1 500 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Оригинальность текста"
              text={[<p>Во всех системах</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Ответы к защите"
              text={[<p>от 200 руб.</p>]}
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/zashitit"
              title="Мини-диплом Раскладка"
              text={[<p>от 2 000 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Получение по главам"
              text={[<p>Гибкие условия</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Аннотация Отзыв Рецензия"
              text={[<p>от 1 200 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Слайды"
              text={[<p>от 350 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Распечатка Переплеты"
              text={[<p>от 1 200 руб.</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать отчет по практике
        </h1>
        <p className="block-text__par">
          В большинстве вузов, чтобы получить допуск к защите дипломной работы, необходимо пройти преддипломную практику и написать соответствующий отчет. Несмотря на формальность данного документа, подготовить его не так просто, поскольку потребуются навыки составления таблиц, построения графиков, выполнения расчетов и
          использования других сложных инструментов обобщения.
        </p>
        <p className="block-text__par">
          Если вы не готовы выполнить данную работу самостоятельно, предлагаем квалифицированную помощь в написании отчета по практике по разумной цене. Специалисты компании BeSmarter! сделают все максимально быстро, качественно и недорого.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/zakazat-otchet-po-praktike.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Наши преимущества
        </h2>
        <ul>
          <li>
            <b>Подтверждение. </b>У нас вы сможете заказать отчет по практике с печатью. Руководители требуют, чтобы работа была основана на реальных фактах. В отличие от скачанных в Интернете текстов, наши документы скреплены печатью конкретных организаций.
          </li>
          <li>
            <b>Качество. </b>Составление отчета по учебной практике поручается вузовскому преподавателю с кандидатской степенью. Это гарантирует правильность всех расчетов и выводов. Каждый отчет по практике на заказ проходит проверку на качество и оригинальность в отделе контроля.
          </li>
          <li>
            <b>Профессионализм. </b>Мы работаем по официальному договору, в котором прописаны сроки сдачи отчета и все требования к работе. За его соблюдением следит ваш личный менеджер. Вам нужно лишь оформить заказать отчет по производственной практике – об остальном мы позаботимся сами!
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>
      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Сколько стоит написать отчет по практике?
        </h2>
        <p className="block-text__par">
          Разумеется, любого студента интересует, сколько стоит заказать отчет по практике. Ориентировочный диапазон цен представлен в нашем <Link href="/price"><a>прайс-листе</a></Link>. Точная стоимость услуги определяется в процессе предварительного собеседования и зависит от объективных факторов – объема текста, сложности темы,
          срочности и пр.
        </p>
        <p className="block-text__par">
          Чтобы <b>недорого заказать отчет по практике</b>, постарайтесь оформить заявку как можно раньше. Если у вас уже есть собственные наработки – присылайте их нам, и мы снизим цену. Компания BeSmarter! стремится обеспечить клиентам самые выгодные условия, чтобы <b>купить отчет по практике</b> смог каждый студент.
          Воспользуетесь своим шансом!
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Алгоритм сотрудничества
        </h2>
        <ul>
          <li>
            Шаг 1. Чтобы <b>купить преддипломную практику</b> вам, нужно оформить заявку одним из способов, перечисленных ниже. Мы рассмотрим ее и проведем с вами собеседование.
          </li>
          <li>
            Шаг 2. По результатам собеседования мы выбираем и согласовываем с вами исполнителя и фиксируем все договоренности документально. Вы вносите 50%-ную предоплату.
          </li>
          <li>
            Шаг 3. Согласованный автор оформляет отчет и сдает его вам на проверку в оговоренные сроки. В случае необходимости вносятся бесплатные правки.
          </li>
          <li>
            Шаг 4. Автор отвечает на ваши вопросы и помогает подготовиться к сдаче ответа. Вы получаете хорошую оценку. Как видите, все очень просто – попробуйте сами!
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://drive.google.com/file/d/1pOfa1kQsnKv9gwPUNAkv3pnd29Pxwouq/preview"></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить отчет по практике?
        </h2>
        <p className="block-text__par">
          Для наших клиентов нет никакой разницы, <b>где заказать отчет по практике</b> – в Москве или Владивостоке. В любом случае уровень сервиса будет одинаково высоким. Желаете оформить заявку на сайте – пожалуйста, по телефону – тоже никаких проблем <b>8 495 772-4090</b>
        </p>
        <p className="block-text__par">
          Наконец, вы можете посетить наш <Link href="/contacts"><b><a>офис</a></b></Link> в центре Москвы (пер. Большой Кисловский, дом 1, стр. 2, оф. 211). Мы ждем вас!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={otchet}/>
    </div>
  </Wrapper>
);


export default page

