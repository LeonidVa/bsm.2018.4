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
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disSkolkostoit from 'data/linksBlock/disSkolkostoit';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";

const page = () => (
  <Wrapper title="Сколько стоит написать диссертацию – стоимость диссертации от 150 000 рублей | Написание диссертации по выгодным ценам в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите узнать, сколько стоит написать диссертацию? Позвоните нам по тел. +7 (495) 772-40-90, и мы вам скажем точную стоимость диссертации - BeSmarter!">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



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

        <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Диссертация</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/skolko-stoit-napisat">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Написание</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

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

      <ImageBlock imageSrc={require('static/images/block/skolko-stoit-nap-dis.jpg')} altText="Сколько стоит написать диссертацию"/>

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

      <CurrentOfferH2/>

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
