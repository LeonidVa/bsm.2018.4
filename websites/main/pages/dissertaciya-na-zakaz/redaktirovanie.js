import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
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
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"

const page = () => (
  <Wrapper title="Редактирование диссертации – стоимость (расценки) редактирование диссертации в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="В компании  BeSmarter! Вы сможете заказать редактирование диссертации от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img5">



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

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/redaktirovanie" name="Редактирование" position="3" />
        </ItemScope>


      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <TextBlock>
        <h1 className="title">
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
      </TextBlock>

      <FormEstimate/>

<MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-red.jpg')} altText="Сколько стоит редактирование диссертации"/>

      <TextBlock>
        <h2 className="title">
          От чего зависит стоимость редактирования диссертации?
        </h2>
        <p className="par">
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
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Наши гарантии
        </h2>
        <p className="par">
          Гарантия качества. Наш отдел контроля использует фирменный многоступенчатый алгоритм проверки работ (грамотность, оформление, уникальность и т. д.).
        </p>
        <p className="par">
          Гарантия соблюдения сроков. Точный день сдачи прописывается в официальном договоре, а стадии готовности отдельных глав и разделов контролируются личным менеджером.
        </p>
        <p className="par">
          Гарантия доступности. Мы всегда на связи и готовы помочь. Связаться с менеджером можно онлайн, по телефону или побеседовать лично в нашем офисе в Москве.
        </p>
        <p className="par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Компания BeSmarter! – это уникальная возможность качественно, срочно и недорого отредактировать диссертацию по любой теме. Воспользуйтесь ей прямо сейчас!
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Этапы сотрудничества
        </h2>
        <p className="par">
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
        <p className="par" style={{fontStyle: 'italic', textAlign: 'center'}}>
          Станьте нашим клиентом уже сегодня, и вы не пожалеете об этом!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disRedaktirovanie}/>
    </PageWrapper>
  </Wrapper>
);


export default page
