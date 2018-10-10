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
import infoBlockConfig from 'data/infoBlock/magisterskaya'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'data/linksBlock/disser'

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../../components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import servicecards from "data/serviceCards";
import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Магистерская диссертация по экономике на заказ в Москве и РФ – цены, сроки написания под ключ" description="Магистерская диссертация по экономике на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать магистерскую диссертацию по экономике сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь написать написание"/>
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
            <a>По экономике</a>
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

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Магистерская диссертация по экономике
        </h1>
        <p className="block-text__par">
          Если вам срочно нужна магистерская диссертация по экономике, а самостоятельно вы никак не укладываетесь в сроки, обратитесь за помощью в агентство BeSmarter! Мы занимаемся подготовкой научных работ по индивидуальным запросам клиентов. Чаще всего к нам обращаются, когда:
        </p>
        <ul>
          <li>
            нет времени писать и проводить исследования;
          </li>
          <li>
            материал собран, но оформить его и структурировать нет возможности;
          </li>
          <li>
            срочно нужно поступать в иностранный ВУЗ, а готовиться к защите не получается;
          </li>
          <li>
            из-за беременности, декрета, не совсем удовлетворительного самочувствия невозможно плотно заняться учебой;
          </li>
          <li>
            вы слишком заняты практической работой, поэтому нет времени и сил на сбор данных, аналитику и формулирование собственных выводов.
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/mag-po-ekon.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания диссертации на заказ
        </h2>
        <p className="block-text__par">
          Можно попасть в очень неприятную ситуацию, если вы покупаете готовый материал, а не делаете заказ на написание под ключ. Любая магистерская диссертация по экономике должна иметь высокий процент уникальности, новизну, отличительную особенность изложения и обладать прочими аспектами качественно выполненной исследовательской
          работы.
        </p>
        <p className="block-text__par">
          Конкретные преимущества при заказе BeSmarter:
        </p>
        <ul>
          <li>
            учитываются все ваши требования и пожелания;
          </li>
          <li>
            авторы работают с источниками, которые вы указали как обязательные;
          </li>
          <li>
            всегда есть возможность договориться о внесении правок.
          </li>
        </ul>
        <p className="block-text__par">
          <b>
            Почему лучше заказать, а не купить готовую работу?
          </b>
        </p>
        <p className="block-text__par">
          Мы работаем с каждым клиентом по индивидуальной схеме, начиная от разработки плана и заканчивая оформлением по ГОСТу. Гарантирована высокая уникальность работы, поэтому никто не сможет уличить вас в том, что материал скопирован, вы занимаетесь плагиатом и из-за этого не можете защитить проект.
        </p>
        <p className="block-text__par">
          Нами используются только свежие и актуальные источники данных, а наши авторы – преподаватели из Москвы и других городов России, что позволяет удерживать невысокие цены при достойном уровне услуг.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит цена
        </h2>
        <p className="block-text__par">
          На формирование окончательной стоимости работы влияет целый ряд различных факторов:
        </p>
        <ul>
          <li>
            Объем (количество страниц). Каждая магистерская диссертация, курсовая или дипломная по экономике оценивается исходя из необходимого для ее написания времени.
          </li>
          <li>
            Срочность выполнения заказа.
          </li>
          <li>
            Есть ли у клиента готовый план, согласованный с преподавателем, или эту часть также необходимо проработать с нуля.
          </li>
          <li>
            Сложность темы и глубина исследований, которые необходимо будет провести.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как сэкономить и если в этом есть необходимость?
        </h2>
        <p className="block-text__par">
          Обычно магистерские диссертации по экономике должны содержать данные исследований. Вы можете сэкономить на заказе, если напишете теорию сами, а практическую часть доверите агентству BeSmarter!
        </p>
        <p className="block-text__par">
          Другие способы сэкономить:
        </p>
        <ul>
          <li>
            обратитесь к нам заранее, чтобы не пришлось переплачивать за срочность;
          </li>
          <li>
            если есть план работы и его не нужно разрабатывать с нуля, заказ обойдется дешевле;
          </li>
          <li>
            чем выше оригинальность (уникальность), тем дороже может обойтись услуга.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/mag-eko.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <ol>
          <li>
            Заполните заявку на сайте или позвоните по телефону +7 (495) 772-40-90, +7 (495) 772-90-40.
          </li>
          <li>
            После согласования всех деталей и предоплаты ваш заказ сразу поступает в работу авторам.
          </li>
          <li>
            Вы можете заказать написание магистерской диссертации по экономике по частям, но лучше всего всегда иметь полную версию работы на руках, ведь тогда можно легко ответить на любой вопрос научного руководителя.
          </li>
        </ol>
        <p className="block-text__par">
          Обратитесь в агентство BeSmarter!, если вам нужна помощь в написании любого научного труда, требуется срочно поступать или дальше заниматься развитием своей карьеры. Наши авторы (практикующие преподаватели) не только учтут все пожелания, но и структурируют материал так, что во время защиты не возникнет никаких проблем.
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disser}/>
    </div>
  </Wrapper>
);


export default page

