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
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disSkolkostoit from 'data/linksBlock/disSkolkostoit';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";

const page = () => (
  <Wrapper title="Сколько стоит написать диссертацию – стоимость диссертации от 150 000 рублей | Написание диссертации по выгодным ценам в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите узнать, сколько стоит написать диссертацию? Позвоните нам по тел. +7 (495) 772-40-90, и мы вам скажем точную стоимость диссертации - BeSmarter!">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Сколько стоит написать диссертацию цена на заказ стоимость цена написание сколько стоит заказать"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz">
            <a>Диссертация</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Написание</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/dissertaciya-na-zakaz/kandidatskaya">
          <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/kandidat.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Кандидатская диссертация</span>
              <p className="block-service__par">Написание и оформление</p>
              <p className="block-service__par">Публикации</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-4">
            <CardPopInfo
                url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
                title="Аспирантские работы"
                text={[<p>От поступления до защиты</p>]}
            />
          <CardPopInfo
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Статьи"
            text={[<p>Написание и размещение</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii"
            title="Автореферат"
            text={[<p>Строго по ГОСТу</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Апробация"
            text={[<p>Реальные эксперименты</p>]}
          />

        </div>
      </section>

      <section className="block-service">
        <Link href="/dissertaciya-na-zakaz/doktorskaya">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/doctorskaya.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Докторская диссертация</span>
              <p className="block-service__par">Актуальность и научная новизна</p>
              <p className="block-service__par">Ваши и наши данные</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Прямая связь с автором"
            text={[<p>Постоянный контроль</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Публикации"
            text={[<p>Журналы ВАК и иностранные</p>]}
          />

          <CardPopInfo
            url="/diplom-mba-na-zakaz"
            title="Обзор литературы"
            text={[<p>Свежие источники</p>]}
          />

        </div>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Сколько стоит написать диссертацию
        </h1>
        <p className="block-text__par">
          Для любого будущего ученого своевременное и качественное написание диссертации – цена получения очередной научной степени (магистра, кандидата или доктора). Таким образом, ставки весьма велики, и рисковать своей профессиональной карьерой никто не желает.
        </p>
        <p className="block-text__par">
          Профессиональная помощь в написании диссертационных работ – приоритетное направление деятельности компании BeSmarter! Если у вас возникли трудности или просто не хватает времени, воспользуйтесь нашими услугами. Мы напишем диссертацию по любой теме максимально качественно, срочно и недорого!
        </p>
      </section>

      <FormEstimate/>

<MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/skolko-stoit-nap-dis.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость диссертации?
        </h2>
        <p className="block-text__par">
          Цена написания диссертации на заказ, в первую очередь, определяются типом работы (магистерская, кандидатская, докторская), поскольку требования к объему, степени оригинальности и актуальности к ним существенно разнятся.
        </p>
        <p className="block-text__par">
          Второй критерий – это сложность специальности и конкретной темы. Традиционно по техническим дисциплинам будет дороже всего написать диссертацию, цена работ по гуманитарным направлениям в разы ниже. Это связанно с трудоемкостью расчетов.
        </p>
        <p className="block-text__par">
          Наконец, третий важный критерий – срочность. Чем больше вы предоставите нам времени, тем меньше придется заплатить. Если же хотите еще больше сэкономить – присылайте нам свои наработки по теме, и мы их учтем. Звоните уже сегодня!
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Хотите узнать, сколько стоит написание диссертации?
        </h2>
        <p className="block-text__par">
          Оформите заявку одним из перечисленных ниже способов и узнайте, сколько будет стоить ваша диссертация:
        </p>
        <ul>
          <li>
            на сайте – заполните <b><a href="#form">онлайн-форму</a></b> и дождитесь ответа менеджера;
          </li>
          <li>
            по телефону – свяжитесь с нами по телефону <br/>+7 (495) 772-4090;
          </li>
          <li>
            непосредственно – адрес <b><Link href="/contacts"><a>офиса</a></Link></b>: Москва, пер. Большой Кисловский, д. 1, стр. 2, офис 211.
          </li>
        </ul>
        <p className="block-text__par center italic">
          Сделайте свой заказ прямо сейчас, и успешная защита диссертации станет реальностью!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disSkolkostoit}/>

    </div>
  </Wrapper>
);


export default page
