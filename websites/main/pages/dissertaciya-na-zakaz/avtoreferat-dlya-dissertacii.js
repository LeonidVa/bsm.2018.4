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
import infoBlockConfig from 'data/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disAvtoref from 'data/linksBlock/disAvtoref';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";


import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis2 from "components/common/ServiceBlock/ready-made/DoctorskayaDis2";
import KandidatDisForm from "components/common/ServiceBlock/ready-made/KandidatDisForm";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"

const page = () => (
  <Wrapper title="Заказать автореферат диссертации в Москве и РФ – цены, сроки написания под ключ" description="Заказать автореферат диссертации недорого! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img2">


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
            <a>Автореферат</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii" name="Автореферат" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDisForm/>

        <DoctorskayaDis2/>

      <TextBlock>
        <h1 className="title">
          Автореферат диссертации на заказ
        </h1>
        <p className="par">
          Автореферат представляет собой краткую выдержку из диссертации, докторской или кандидатской. Это документ, имеющий юридическую силу. Без его написания диссертационная работа не будет принята к защите. Изначально получается право на размножение автореферата, после чего следует допуск соискателя к защите. Компания
          BeSmarter! предлагает вам заказать написание автореферата диссертации под ключ.
        </p>
      </TextBlock>

      <FormEstimate/>

<MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/aspirant.jpg')}/>

      <TextBlock>
        <h2 className="title">
          Вопросы, освещаемые в автореферате
        </h2>
        <ul>
          <li>
            Цель написания диссертационной работы, ее актуальность и задачи.
          </li>
          <li>
            Новизна и достоверность использованных методов.
          </li>
          <li>
            Значимость путей и методов решения поставленных задач для использования на практике.
          </li>
        </ul>
        <p className="par">
          Содержание, структура и объем автореферата определяются Высшей аттестационной комиссией (ВАК). Его написание – трудоемкая и кропотливая работа, требующая специальных знаний. Если у вас не хватает времени на выполнение, обратитесь в нашу компанию.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Преимущества написания на заказ
        </h2>
        <p className="par">
          Заказывая услугу по написанию автореферата в нашей компании, вы получаете такие выгоды:
        </p>
        <ul>
          <li>
            Приемлемая цена услуг.
          </li>
          <li>
            Экономия времени. Вам не нужно тратить его на написание автореферата и проверку строгого соответствия содержанию диссертации и требованиям ГОСТ.
          </li>
          <li>
            Оперативность выполнения заказа.
          </li>
          <li>
            Возможность самостоятельного выбора компетентного исполнителя.
          </li>
        </ul>
        <p className="par">
          Почему лучше заказать написание, а не купить готовый автореферат? Приобретение готового автореферата сопряжено с определенными рисками:
        </p>
        <ul>
          <li>
            Несоответствие содержанию диссертации или паспортом деятельности.
          </li>
          <li>
            Нет гарантии того, что у конкретного совета защита пройдет нормально.
          </li>
          <li>
            Несоблюдение стандартов ГОСТ.
          </li>
        </ul>
        <p className="par">
          Беспроигрышный вариант – узнать точные требования к оформлению и лишь после этого оформлять заказ автореферата диссертации. Этим вы повышаете вероятность успешной защиты.
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          От чего зависит цена
        </h2>
        <p className="par">
          На стоимость подготовки автореферата влияют:
        </p>
        <ul>
          <li>
            Тема и сложность диссертации.
          </li>
          <li>
            Объем документа.
          </li>
          <li>
            Срочность написания.
          </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Этапы сотрудничества с BeSmarter!
        </h2>
        <p className="par">
          Работа по написанию автореферата к кандидатской или докторской диссертации выполняется по такому алгоритму:
        </p>
        <ul>
          <li>
            Оформление заказа с подробным изложением требований и согласование сроков выполнения.
          </li>
          <li>
            Предварительная оплата. После этого наши авторы приступают к выполнению.
          </li>
          <li>
            Вы получаете написанный автореферат. На протяжении 2 месяцев все правки выполняются бесплатно.
          </li>
        </ul>
        <p className="par">
          Чтобы оформить заказ в BeSmarter!, заполните специальную контактную форму на сайте или позвоните нам по телефону: +7 (495) 772-40-90, +7 (495) 772-90-40. В самом скором времени наш специалист свяжется с вами. Сотрудничество с проверенной командой специалистов – залог вашего успеха на защите.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disAvtoref}/>
    </PageWrapper>
  </Wrapper>
);


export default page
