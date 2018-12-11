import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota";


const page = () => (
  <Wrapper title="Написание курсовых работ | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="О, сколько нервов было потрачено, сколько ночей просижено и сколько кофе выпито не одним поколением студентов в процессе написания курсовых работ! И ведь всегда времени совсем немного до ее сдачи, хотя, казалось, что до сессии еще очень далеко. Мы прекрасно понимаем, что работа, учеба, семья отнимают большую часть Вашего драгоценного времени, и именно поэтому хотим предложить выход из такой непростой, казалось бы, ситуации – написание курсовых работ на заказ!">
    <div className="wrapper bg bg-c2 bg-img bg-img1">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/stati">
            <a>Статьи</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Написание курсовых работ</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Статьи</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati/napisanie-kursovyh-rabot">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Написание курсовых работ</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Написание курсовых работ
        </h1>
        <p className="block-text__par">
          О, сколько нервов было потрачено, сколько ночей просижено и сколько кофе выпито не одним поколением студентов в процессе написания курсовых работ! И ведь всегда времени совсем немного до ее сдачи, хотя, казалось, что до сессии еще очень далеко. Мы прекрасно понимаем, что работа, учеба, семья отнимают большую часть Вашего
          драгоценного времени, и именно поэтому хотим предложить выход из такой непростой, казалось бы, ситуации – <b>написание курсовых работ</b> на заказ!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(8).jpg')} altText="Написание курсовых работ"/>

      <section className="block-text">
        <p className="block-text__par">
          Помните, чтобы успешно сдать сессию нужно как следует высыпаться. Доктора советуют отводить на сон не менее восьми часов, именно это время необходимо, чтобы организм полностью отдохнул и набрал сил. Не стоит забывать об этой рекомендации даже тогда, когда накопилась масса неотложных дел, Ваше здоровье прежде всего! Но как
          же быть, если до сдачи курсовой всего несколько дней, а Вы к ней еще даже и не приступали? Конечно, обратиться за помощью к нам!
        </p>
        <p className="block-text__par">
          Вы сами указываете нужные сроки выполнения работы, ровно в которые и получаете уже готовую курсовую. Наши авторы – профессионалы с многолетним стажем работы, кандидаты и доктора наук, которые качественно и грамотно выполнят курсовую любого уровня сложности и абсолютно любой тематики.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <p className="block-text__par">
          <b>Написание курсовых</b> – занятие кропотливое, требующее высокого уровня знаний в определенной дисциплине, понимания всех нюансов, основ содержания и оформления работ такого типа. Мы выполнили не одну тысячу курсовых для наших клиентов, поэтому не понаслышке знакомы со всеми тонкостями подобных работ. Автор, выполняющий
          Вашу курсовую работу, учтет все пожелания и замечания, как лично Ваши, так и Вашего научного руководителя. Кроме того, если по завершении работы Вы обнаружите какие-то недочеты (что, признаемся, бывает крайне редко), все необходимые правки будут выполнены абсолютно бесплатно!
        </p>
        <p className="block-text__par">
          Мы уже много лет работаем в сфере образования, поэтому в совершенстве изучили все нюансы студенческих работ и даже с закрытыми глазами можем назвать Вам перечень всех характеристик курсовой. Стоит ли говорить о том, что заказанная у нас работа будет выполнена на «отлично»?
        </p>
        <p className="block-text__par">
          Почему Вы можете быть спокойны и рассчитывать на нас? Во-первых, Вы можете обратить свое внимание на многочисленные отзывы наших клиентов (многие из которых из года в год обращаются в нашу компанию). Во-вторых, мы предлагаем Вам в любое удобное время приехать в наш <Link href="/contacts"><a>офис</a></Link> на Большом Кисловском переулке и заключить договор, в котором подробно зафиксированы все наши обязательства и санкции, которые налагаются за их невыполнение.
        </p>
        <p className="block-text__par">
          Но это еще не все хорошие новости. При заказе второй работы у нас (а также при каждом последующем заказе) Вы получаете скидку от 5%! Кроме того, у нас постоянно действуют разные акции, о которых Вы можете узнать на сайте или у нашего менеджера, позвонив прямо сейчас по телефону <b>+7 495 772-4090</b>.
        </p>
        <p className="block-text__par">
          BeSmarter! Оказывает профессиональную <b>помощь в написании курсовых</b>, а также всех других видов студенческих работ. С полным перечнем наших услуг Вы можете ознакомиться <Link href="/price"><a>здесь</a></Link>.
        </p>
        <p className="block-text__par">
          Пусть учеба приносит только радость, мы поможем Вам в этом!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </div>
  </Wrapper>
);


export default page
