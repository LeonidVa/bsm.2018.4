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
import disSkolkostoit from 'data/linksBlock/disSkolkostoit';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";

const page = () => (
  <Wrapper title="Сколько стоит написать диссертацию – стоимость диссертации от 150 000 рублей | Написание диссертации по выгодным ценам в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите узнать, сколько стоит написать диссертацию? Позвоните нам по тел. +7 (495) 772-40-90, и мы вам скажем точную стоимость диссертации - BeSmarter!">
    <PageWrapper className="bg bg-c2 bg-img bg-img2">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/dissertaciya-na-zakaz', text:'Диссертация'},
            {url:'#', text:'Написание'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/skolko-stoit-napisat" name="Написание" position="3" />
        </ItemScope>


      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <TextBlock>
        <h1>
          Сколько стоит написать диссертацию
        </h1>
        <p className="par">
          Для любого будущего ученого своевременное и качественное написание диссертации – цена получения очередной научной степени (магистра, кандидата или доктора). Таким образом, ставки весьма велики, и рисковать своей профессиональной карьерой никто не желает.
        </p>
        <p className="par">
          Профессиональная помощь в написании диссертационных работ – приоритетное направление деятельности компании BeSmarter! Если у вас возникли трудности или просто не хватает времени, воспользуйтесь нашими услугами. Мы напишем диссертацию по любой теме максимально качественно, срочно и недорого!
        </p>
      </TextBlock>

      <FormEstimate/>

<MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/skolko-stoit-nap-dis.jpg')} altText="Сколько стоит написать диссертацию"/>

      <TextBlock>
        <h2 className="title">
          От чего зависит стоимость диссертации?
        </h2>
        <p className="par">
          Цена написания диссертации на заказ, в первую очередь, определяются типом работы (магистерская, кандидатская, докторская), поскольку требования к объему, степени оригинальности и актуальности к ним существенно разнятся.
        </p>
        <p className="par">
          Второй критерий – это сложность специальности и конкретной темы. Традиционно по техническим дисциплинам будет дороже всего написать диссертацию, цена работ по гуманитарным направлениям в разы ниже. Это связанно с трудоемкостью расчетов.
        </p>
        <p className="par">
          Наконец, третий важный критерий – срочность. Чем больше вы предоставите нам времени, тем меньше придется заплатить. Если же хотите еще больше сэкономить – присылайте нам свои наработки по теме, и мы их учтем. Звоните уже сегодня!
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Хотите узнать, сколько стоит написание диссертации?
        </h2>
        <p className="par">
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
        <p className="par center italic">
          Сделайте свой заказ прямо сейчас, и успешная защита диссертации станет реальностью!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disSkolkostoit}/>

    </PageWrapper>
  </Wrapper>
);


export default page
