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
import infoBlockConfig from 'data/infoBlock/magisterskaya'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfigMagisteskaya';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import MagisDisGdeZakazat from "components/common/ServiceBlock/ready-made/MagisDisGdeZakazat"


const page = () => (
  <Wrapper title="Магистерская диссертация по менеджменту на заказ в Москве и РФ – цены, сроки написания под ключ" description="Магистерская диссертация по менеджменту на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



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
          <Link href="/dissertaciya-na-zakaz/magisterskaya">
            <a>Магистерская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По менеджменту</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <MagisDisGdeZakazat/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Магистерская диссертация по менеджменту на заказ
        </h1>
        <p className="block-text__par">
          Эффективное управление – это умение грамотно распределять имеющиеся ресурсы. Кроме того, хороший менеджер – специалист, который постоянно приобретает новые навыки, знает все актуальные нормативы и, конечно же, непрерывно совершенствуется. Одно из условий для работы по данной специальности – написание магистерской
          диссертации по менеджменту.
        </p>
        <p className="block-text__par">
          Однако реалии студенческой жизни таковы, что выкроить время для написания диссертационной работы непросто. Тем более, что требования к ней значительно строже, чем к традиционной дипломной работе или проекту. Решение этой проблемы – написание магистерской диссертации на заказ. Специалисты компании BeSmarter! предлагают
          подготовку диссертационных работ в сжатые сроки по умеренным ценам.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/mag-men.jpg')} altText="Магистерская диссертация по менеджменту"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания под ключ
        </h2>
        <p className="block-text__par">
          Обратившись в нашу компанию, вы получите работу с высоким уровнем уникальности, при этом тема будет раскрыта исчерпывающе. Теоретическая, практическая и аналитическая части будут четко структурированы и оформлены в соответствии с вузовскими требованиями. Это даст вам возможность хорошо подготовиться к защите. Достоинства
          заказа написания магистерской диссертации следующие:
        </p>
        <ul>
          <li>
            Качественная проработка магистерской диссертации по менеджменту, поскольку ее выполняют профессионалы, имеющие значительный опыт и отличное знание предмета.
          </li>
          <li>
            Сопровождение задания до защиты. В процессе подготовки могут возникать правки и дополнения. Мы вносим их бесплатно.
          </li>
          <li>
            Неразглашение данных клиента. Гарантия конфиденциальности — одна из профессиональных черт компании BeSmarter!
          </li>
          <li>
            Консультации по выполненному заказу.
          </li>
          <li>
            Умеренные цены.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Готовая диссертация или сделанная на заказ?
        </h2>
        <p className="block-text__par">
          Написание диссертации на соискание степени магистра — это постоянное сотрудничество с научным руководителем. Как правило, студент после согласования плана написания работы выполняет задание поэтапно и по мере необходимости вносит дополнения или изменения в уже готовый текст. В интернете можно найти готовую магистерскую
          диссертацию по специальности «Менеджмент», но ее использование связано с определенными рисками:
        </p>
        <ul>
          <li>
            Ошибки в расчетах и текстах.
          </li>
          <li>
            Несоответствие готовой диссертации требованиям по оформлению.
          </li>
          <li>
            Работа, купленная или скачанная в интернете, не уникальна. Приобретение готового проекта оправдано лишь в одном случае: если вы работаете над заданием самостоятельно. Тогда такая диссертация может быть использована как основа.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость
        </h2>
        <p className="block-text__par">
          Цена написания зависит от объема задания и сложности темы. Бывает так, что выполнить заказ нужно срочно. Естественно, что срочная магистерская диссертация по менеджменту стоит дороже.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Можно ли немного сэкономить?
        </h2>
        <p className="block-text__par">
          Многие клиенты задают вопрос: возможно ли удешевление заказа? Вот несколько способов реально сэкономить:
        </p>
        <ul>
          <li>
            Заказ не на всю работу, а на ее часть: теоретическую, практическую или аналитические расчеты.
          </li>
          <li>
            Заказ нескольких заданий одновременно. Срабатывает принцип «оптом — дешевле».
          </li>
          <li>
            Акции и специальные предложения. Это отличная возможность для получения по-настоящему недорогой работы.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/mag-po-men.jpg')} altText="Магистерская диссертация по менеджменту на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества с нами
        </h2>
        <p className="block-text__par">
          Первый этап работы над магистерским проектом – согласование темы и плана написания диссертации. Далее вы оформляете заказ в нашей компании и действуете в таком порядке:
        </p>
        <ul>
          <li>
            После внесения аванса автор компании BeSmarter! начинает выполнение заказа.
          </li>
          <li>
            После выполнения задания вы оплачиваете полную стоимость работы, и готовая диссертация отправляется на ваш электронный адрес.
          </li>
        </ul>
        <p className="block-text__par">
          В течении гарантированного срока все изменения и дополнения вносятся бесплатно. Оформите заказ, и защита вашей магистерской диссертации по менеджменту пройдет на отлично!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page