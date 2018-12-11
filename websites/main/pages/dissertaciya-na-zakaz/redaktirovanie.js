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

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disRedaktirovanie from 'data/linksBlock/disRedaktirovanie';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";

const page = () => (
  <Wrapper title="Редактирование диссертации – стоимость (расценки) редактирование диссертации в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="В компании  BeSmarter! Вы сможете заказать редактирование диссертации от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">



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
          <Link href="#">
            <a>Редактирование</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/redaktirovanie">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Редактирование</span></a>
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
          Сколько стоит редактирование диссертации
        </h1>
        <ul>
          <li>
            <b>Любые специальности</b><br/>
            Мы принимаем на редактирование работы любой сложности, по техническим и гуманитарным дисциплинам.
          </li>
          <li>
            <b>Квалификация</b><br/>
            Редактирование диссертации под заказ будет поручено компетентному в данной теме специалисту, с ученой степенью не ниже кандидатской.
          </li>
          <li>
            <b>Честность</b><br/>
            Расценки на редактирование диссертаций устанавливаются согласно прозрачным и объективным критериям, действует гибкая система скидок.
          </li>
          <li>
            <b>Дополнительные услуги</b><br/>
            Также мы предоставляем помощь в написании диссертаций «с нуля» и подготовке необходимых дополнительных материалов.
          </li>
        </ul>
      </section>

      <FormEstimate/>

<MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-red.jpg')} altText="Сколько стоит редактирование диссертации"/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость редактирования диссертации?
        </h2>
        <p className="block-text__par">
          Разумеется, вас интересует, сколько стоит отредактировать диссертацию. Заранее назвать точную сумму мы не можем, поскольку трудоемкость работы может существенно варьироваться в зависимости от следующих объективных факторов.
        </p>
        <ul>
          <li>
            Объем. Стоимость редактирования диссертации, в первую очередь, зависит от ее фактического размера в страницах. Зависимость прямо пропорциональная.
          </li>
          <li>
            Сложность. Трудоемкость редактирования работ по техническим специальностям выше в сравнении с гуманитарными дисциплинами, поэтому и цены будут различаться.
          </li>
          <li>
            Срочность. Чем меньше времени вы нам даете, тем дороже будет услуга. Желаете сэкономить – оформляйте заказ заранее. Можно сделать это прямо сейчас!
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Наши гарантии
        </h2>
        <p className="block-text__par">
          Гарантия качества. Наш отдел контроля использует фирменный многоступенчатый алгоритм проверки работ (грамотность, оформление, уникальность и т. д.).
        </p>
        <p className="block-text__par">
          Гарантия соблюдения сроков. Точный день сдачи прописывается в официальном договоре, а стадии готовности отдельных глав и разделов контролируются личным менеджером.
        </p>
        <p className="block-text__par">
          Гарантия доступности. Мы всегда на связи и готовы помочь. Связаться с менеджером можно онлайн, по телефону или побеседовать лично в нашем офисе в Москве.
        </p>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Компания BeSmarter! – это уникальная возможность качественно, срочно и недорого отредактировать диссертацию по любой теме. Воспользуйтесь ей прямо сейчас!
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <p className="block-text__par">
          Все просто:
        </p>
        <ol>
          <li>
            Заявка. Оформить ее можно онлайн на сайте, по телефону +7 (495) 772-4090 или в нашем офисе по адресу: Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211.
          </li>
          <li>
            Договор. Оформляется по результатам предварительного собеседования, включает все ваши требования к диссертации и наши обязательства.
          </li>
          <li>
            Работа. После 50%-ной предоплаты наш специалист редактирует вашу диссертацию, сдает ее вам на проверку по главам, и при необходимости вносит бесплатные правки.
          </li>
        </ol>
        <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Станьте нашим клиентом уже сегодня, и вы не пожалеете об этом!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disRedaktirovanie}/>
    </div>
  </Wrapper>
);


export default page
