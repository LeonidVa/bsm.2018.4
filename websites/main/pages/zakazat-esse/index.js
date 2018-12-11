import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/esse';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

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


const page = () => (
  <Wrapper title="Заказать эссе срочно и недорого – написание эссе на заказ по философии в Москве и РФ – цены и сроки под ключ" description="Заказать эссе. Напишем эссе на заказ недорого в Москве. Срочная помощь в написании эссе от надежных профессионалов в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img1">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Эссе</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/zakazat-esse">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Эссе</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Esse/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать эссе
        </h1>
        <p className="block-text__par">
          Написание эссе – популярный вид заданий для студентов, позволяющий проверить их уровень творческого независимого мышления. С одной стороны, здесь нет никаких строгих рамок – вы просто высказываете свои соображения по какой-то проблематике, не претендуя на исчерпывающее ее освещение.
        </p>
        <p className="block-text__par">
          Однако все не так просто. Чтобы качественно выполнить эссе, необходимо: во-первых, достаточно хорошо владеть предметом, во-вторых, уметь грамотно выражать свои мысли и, в-третьих, обладать временным ресурсом для данной работы. Наконец, нужно вдохновение, без которого никакое творчество невозможно.
        </p>
        <p className="block-text__par">
          Если у вас не хватает чего-то из вышеперечисленного, предлагаем срочно и недорого заказать написание эссе по философии или другой дисциплине в компании BeSmarter!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/zakazat-esse.jpg')} altText="Заказать эссе"/>

      <section className="block-text">
        <h2 className="block-text__title">
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
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Хотите заказать эссе недорого?
        </h2>
        <p className="block-text__par">
          Разумеется, любой студент хочет заказать эссе недорого, поэтому в BeSmarter! действует гибкая система ценообразования с привязкой к конкретной работе. Стоимость услуги определяется во время собеседования на основании объективных факторов – сложности темы, количества страниц, срочности, наличия специфических требований и
          пр.
        </p>
        <p className="block-text__par">
          При этом у вас всегда есть возможность экономии. Желаете получить эссе по философии, экономике или другому предмету на заказ недорого? Заранее проконсультируйтесь с нами по поводу выбора темы. Или принесите нам свои наработки, и мы снизим цену. И, конечно, старайтесь оформить заказ как можно раньше.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
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
      </section>
      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>
      <ImageBlock imageSrc={require('static/images/block/zakazar-esse2.jpg')} altText="эссе на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как оформить эссе на заказ?
        </h2>
        <p className="block-text__par">
          Нашими услугами могут воспользоваться студенты из любого уголка России. Самый универсальный вариант – оформление заявки на сайте. Желаете переговорить лично – позвоните нам по номеру 8 (495) 772-40-90.
        </p>
        <p className="block-text__par">
          Наконец, жители Москвы могут просто зайти к нам по адресу: переулок Большой Кисловский, дом 1, строение 2, офис 211. Выбирайте удобный для себя вариант – мы ждем вас!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

    </div>
  </Wrapper>
);


export default page
