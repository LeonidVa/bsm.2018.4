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
import infoBlockConfig from 'data/infoBlock/referat'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/filReferat'
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Referat from "components/common/ServiceBlock/ready-made/Referat"


const page = () => (
  <Wrapper title="Заказать реферат по философии в Москве и РФ – цены, сроки написания под ключ" description="Написание реферата по философии на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/referat-na-zakaz">
            <a>Реферат</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По философии</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/referat-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Реферат</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/referat-na-zakaz/filosofiya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По философии</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Referat/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Реферат по философии на заказ
        </h1>
        <p className="block-text__par">
          Философия, прародительница всех современных наук, многим студентам кажется сложной для восприятия и запоминания. Для того чтобы выполнить реферат по философии, недостаточно подобрать первичные источники, скопировать из них определенные отрывки, увязать эти фрагменты с темой работы, выделить причинно-следственные связи и
          сформулировать выводы. Такая работа очень кропотливая, требует больших временных затрат и не всегда приносит нужный результат.
        </p>
        <p className="block-text__par">
          Свободного времени для написания реферата по философии может не оказаться по нескольким причинам:
        </p>
        <ul>
          <li>
            Болезнь
          </li>
          <li>
            Загруженность на основном месте работы (важно для заочников)
          </li>
          <li>
            Беременность и необходимость ухаживать за ребенком
          </li>
          <li>
            Другие личные причины
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/ref-po-filos.jpg')} altText="Реферат по философии"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Воспользоваться помощью профессионалов – это просто и быстро!
        </h2>
        <p className="block-text__par">
          Один из вариантов решения проблемы – покупка уже готовой работы в сети интернет. Однако в таком случае соответствие содержания теме работы, ее уникальность и качество не гарантируется. Наиболее эффективный способ сдать реферат по философии в срок – заказать его подготовку в специализированной компании BeSmarter!
        </p>
        <p className="block-text__par">
          Преимуществами этого варианта являются:
        </p>
        <ul>
          <li>
            Уникальность работы
          </li>
          <li>
            Точное соответствие содержания теме
          </li>
          <li>
            Возможность написания работы по главам для периодических консультаций с научным руководителем
          </li>
        </ul>
        <p className="block-text__par">
          Алгоритм сотрудничества с нами выглядит следующим образом:
        </p>
        <ul>
          <li>
            Заказ работы, установление сроков выполнения
          </li>
          <li>
            Определение плана работы
          </li>
          <li>
            Внесение предоплаты
          </li>
          <li>
            Написание работы
          </li>
          <li>
            Контроль качества, полная оплата и сопровождение до защиты
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">

        </h2>
        <p className="block-text__par">
          Заказать реферат по философии под ключ удобно в BeSmarter! – специалисты нашей компании окажут всю необходимую помощь. Стоимость написания зависит от нескольких критериев:
        </p>
        <ul>
          <li>
            Сроки сдачи
          </li>
          <li>
            Требуемый уровень уникальности
          </li>
          <li>
            Сложность темы
          </li>
          <li>
            Объем работы
          </li>
        </ul>
        <p className="block-text__par">
          Для того чтобы сэкономить и купить реферат по философии на выгодных условиях, необходимо поставить перед исполнителем конкретную задачу, четко сформулировать тему и, что самое главное – сделать заказ заранее.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/ref-po-fil.jpg')} altText="Реферат по философии на заказ"/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
