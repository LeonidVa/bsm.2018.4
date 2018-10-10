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
import infoBlockConfig from 'data/infoBlock/referat'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/filReferat'
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


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

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/ref1.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Реферат</span>
              <p className="block-service__par">Не парься сам – доверься нам!</p>
              <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
              <p className="block-service__par">От 1 500 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-5">
          <CardPopInfo
            url="/zakazat-otchet-po-praktike"
            title="Отчет по практике"
            text={[<p>от 3 000 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovaya-rabota-na-zakaz"
            title="Курсовая работа"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/kontrolnaya-na-zakaz"
            title="Эссе Контрольная"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-k-ekzamenu"
            title="Экзамены Тесты"
            text={[<p>от 200 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovoj-proekt-na-zakaz"
            title="Курсовой проект"
            text={[<p>от 8 000 руб.</p>]}
          />

        </div>
      </section>

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

      <ImageBlock imageSrc={require('static/images/block/ref-po-filos.jpg')}/>

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

      <CurrentOffer/>

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

      <ImageBlock imageSrc={require('static/images/block/ref-po-fil.jpg')}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
