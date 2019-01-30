import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/esse';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';

import ImageBlock from 'components/common/ImageBlock';
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Esse from "components/common/ServiceBlock/ready-made/Esse"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper title="Заказать эссе срочно и недорого – написание эссе на заказ по философии в Москве и РФ – цены и сроки под ключ" description="Заказать эссе. Напишем эссе на заказ недорого в Москве. Срочная помощь в написании эссе от надежных профессионалов в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'#', text:'Эссе'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/zakazat-esse" name="Эссе" position="2" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Esse/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Заказать эссе
        </h1>
        <p className="par">
          Написание эссе – популярный вид заданий для студентов, позволяющий проверить их уровень творческого независимого мышления. С одной стороны, здесь нет никаких строгих рамок – вы просто высказываете свои соображения по какой-то проблематике, не претендуя на исчерпывающее ее освещение.
        </p>
        <p className="par">
          Однако все не так просто. Чтобы качественно выполнить эссе, необходимо: во-первых, достаточно хорошо владеть предметом, во-вторых, уметь грамотно выражать свои мысли и, в-третьих, обладать временным ресурсом для данной работы. Наконец, нужно вдохновение, без которого никакое творчество невозможно.
        </p>
        <p className="par">
          Если у вас не хватает чего-то из вышеперечисленного, предлагаем срочно и недорого заказать написание эссе по философии или другой дисциплине в компании BeSmarter!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/zakazat-esse.jpg')} altText="Заказать эссе"/>

      <TextBlock>
        <h2 className="title">
          Почему именно у нас? Вот лишь несколько причин
        </h2>
        <ul>
          <li>
            У нас есть опыт и квалификация. Мы не пользуемся услугами «залетных фрилансеров», а сформировали штат высококлассных специалистов из преподавателей вузов с научной степенью. Внедрена многоступенчатая система контроля качества каждой работы.
          </li>
          <li>
            Мы можем написать эссе на заказ срочно. Вы забыли о задании, а сдавать его уже завтра? Не беда! Мы предлагаем заказать эссе срочно с гарантией выполнения в минимальные сроки (от 24 часов). День сдачи фиксируется в официальном договоре – вам остается спокойно ждать назначенной даты.
          </li>
          <li>
            Мы работаем профессионально. Помощь в написании эссе включает круглосуточную поддержку, вплоть до момента получения вами оценки. Ваш личный менеджер всегда на связи. С нами вас ждет успех, убедитесь в этом сами!
          </li>
        </ul>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Хотите заказать эссе недорого?
        </h2>
        <p className="par">
          Разумеется, любой студент хочет заказать эссе недорого, поэтому в BeSmarter! действует гибкая система ценообразования с привязкой к конкретной работе. Стоимость услуги определяется во время собеседования на основании объективных факторов – сложности темы, количества страниц, срочности, наличия специфических требований и
          пр.
        </p>
        <p className="par">
          При этом у вас всегда есть возможность экономии. Желаете получить эссе по философии, экономике или другому предмету на заказ недорого? Заранее проконсультируйтесь с нами по поводу выбора темы. Или принесите нам свои наработки, и мы снизим цену. И, конечно, старайтесь заказать написание как можно раньше.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Написание эссе на заказ
        </h2>
        <ul>
          <li>
            Этап 1. Вы оформляете заявку одним из перечисленных ниже способов. Мы проводим с вами собеседование и подписываем договор с указанием всех ваших требований к эссе. Вы вносите 50%-ную предоплату.
          </li>
          <li>
            Этап 2. Согласованный с вами автор приступает к работе и в оговоренный срок сдает ее на проверку после окончательной оплаты. Вы имеете право запросить внесение бесплатных корректировок.
          </li>
          <li>
            Этап 3. Исполнитель и индивидуальный менеджер сопровождают вас вплоть до получения хорошей оценки за эссе – отвечают на вопросы и консультируют.
          </li>
        </ul>
      </TextBlock>
      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>
      <ImageBlock imageSrc={require('static/images/block/zakazar-esse2.jpg')} altText="эссе на заказ"/>

      <TextBlock>
        <h2 className="title">
          Как оформить эссе на заказ?
        </h2>
        <p className="par">
          Нашими услугами могут воспользоваться студенты из любого уголка России. Самый универсальный вариант – заказать эссе на сайте. Желаете переговорить лично – позвоните нам по номеру 8 (495) 772-40-90.
        </p>
        <p className="par">
          Наконец, жители Москвы могут просто зайти к нам по адресу: переулок Большой Кисловский, дом 1, строение 2, офис 211. Выбирайте удобный для себя вариант – мы ждем вас!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);


export default page
