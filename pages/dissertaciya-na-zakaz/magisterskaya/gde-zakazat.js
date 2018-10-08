import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Где заказать (купить) магистерскую диссертацию – можно заказать диссертацию магистра в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Где заказать магистерскую диссертацию? Лучшее место в Москве, где заказать магистерскую диссертацию можно с гарантией успешной защиты – компания BeSmarter!">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Где заказать купить магистерскую диссертацию магистра"/>
      </MetaTags>

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
            <a>Где заказать</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Магистерская диссертация</span>
              <p className="block-service__par">Быстро и качественно!</p>
              <p className="block-service__par">С нами твоя защита пройдет легко!</p>
              <p className="block-service__par">От 23 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
            <CardPopInfo
                url="/dissertaciya-na-zakaz"
                title="Диссертация под ключ"
                text={[<p>Берем заботы на себя</p>]}
            />


            <CardPopInfo
                url="/diplom-mba-na-zakaz"
                title="Консультация автора"
                text={[<p>Прямая связь</p>]}
            />

            <CardPopInfo
                url="/dissertaciya-na-zakaz/magisterskaya"
                title="Сопровождение до защиты"
                text={[<p>Надежно, спокойно</p>]}
            />
        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/dissertaciya-na-zakaz/doktorskaya">
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
              url="/razrabotka-diplomnogo-proekta"
              title="Пакет «Успешная Защита»"
              text={[<p>от 5 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Доклад"
              text={[<p>от 1 500 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Оригинальность текста"
              text={[<p>Во всех системах</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Ответы к защите"
              text={[<p>от 200 руб.</p>]}
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Мини-диплом Раскладка"
              text={[<p>от 2 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Получение по главам"
              text={[<p>Гибкие условия</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Аннотация Отзыв Рецензия"
              text={[<p>от 1 200 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Слайды"
              text={[<p>от 350 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Распечатка Переплеты"
              text={[<p>от 1 200 руб.</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Где заказать магистерскую диссертацию
        </h1>
        <p className="block-text__par">
          Не секрет, что большинство студентов старших курсов помимо учебы еще и работают. И времени на написание магистерской диссертации у них не так много. Кроме того, отсутствует и опыт выполнения научных работ такого уровня. Обычные курсовые и даже диплом не идут ни в какое сравнение с диссертацией.
        </p>
        <p className="block-text__par">
          Предлагаем не рисковать получением магистерской степени, которая открывает дорогу к вашему всестороннему профессиональному развитию. Закажите выполнение работы высококлассным ученым, работающим в компании BeSmarter!. А сами продолжайте спокойно зарабатывать деньги и не спеша готовиться к защите.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/mag-gde-z.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как определяется стоимость услуги?
        </h2>
        <p className="block-text__par">
          В первом приближении диапазон цен вы сможете прикинуть в соответствующем разделе нашего сайта. Стоимость именно вашей магистерской диссертации мы определим в процессе предварительной консультации. Следует понимать, что трудоемкость конкретной работы существенно варьируется в зависимости от сопутствующих факторов.
        </p>
        <p className="block-text__par">
          Главный критерий ценообразования – это, конечно же, сложность предмета и выбранной темы. Дешевле всего стоят диссертации по гуманитарным специальностям, в то время, как расценки по техническим дисциплинам существенно выше среднего. Также влияние на итоговую стоимость услуги оказывает срочность выполнения и специальные
          требования.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как мы работаем?
        </h2>
        <ul>
          <li>
            Заявка. Чтобы воспользоваться нашими услугами, заполните <b><a href="#form">онлайн-форму</a></b> на сайте, свяжитесь с нами по телефону (+7(495)772-4090, +7(495)772-9040) или посетите <b><Link href="/contacts"><a>офис</a></Link></b> компании (Большой Кисловский переулок, д. 1 стр. 2, офис 211).
          </li>
          <li>
            Договор. Гарантией вашего спокойствия является официальный договор, в котором прописываются все детали нашего сотрудничества – сроки сдачи, стоимость, требования к работе и т. д.
          </li>
          <li>
            Исполнение. После всех формальностей наши сотрудники приступают к работе. В случае необходимости они по вашему запросу внесут необходимые правки и ответят на любые вопросы.
          </li>
          <li>
            Защита. Мы поможем вам качественно подготовиться к защите диссертации, включая содействие в подготовке доклада и презентации, тренировку ответов на вопросы комиссии и другие аспекты.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="//vk.com/video_ext.php?oid=372065572&id=456239032&hash=e0751038dfbca771&hd=2"></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={
        [
          {url: "/dissertaciya-na-zakaz/magisterskaya/skolko-stoit", text: "Сколько стоит магистерская диссертация"},
        ]
      }/>

    </div>
  </Wrapper>
);


export default page
