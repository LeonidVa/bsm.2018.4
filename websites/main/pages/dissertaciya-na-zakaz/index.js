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
import infoBlockConfig from 'data/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disserNew from 'data/linksBlock/disserNew';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";


const page = () => (
  <Wrapper title="Заказать диссертацию – написание диссертации на заказ в Москве, заказать диссертационную работу срочно в BeSmarter!, цена"
           description="Заказать диссертацию. В компании  BeSmarter! Вы сможете заказать помощь в написании диссертации от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная </a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Диссертация</a>
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
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <section className="block-text">
        <ul className="marker-dot">
          <li>
            Есть идеи и наработки, но нет времени на написание?
          </li>
          <li>
            Мы поможем с настоящей серьезной диссертацией!
          </li>
          <li>
            Прямо сейчас обратитесь к нам, и Вы отлично
          </li>
        </ul>
        <p className="block-text__par">
          &nbsp;&nbsp;&nbsp;&nbsp;защититесь!
        </p>
      </section>

      <FormEstimate/>

   <MatZashDisser/>


      <section className="block-text">
        <h1 className="block-text__title">
            Написание диссертации на заказ
        </h1>
        <ul>
          <li>
            <b>Оперативность</b><br/>
            По желанию клиента мы можем написать диссертацию на заказ в короткие сроки без ущерба ее качеству.
          </li>
          <li>
            <b>Квалификация</b><br/>
              Компания BeSmarter! имеет многолетний опыт написания диссертаций на заказ по любым дисциплинам. Свыше 98% наших клиентов защитились на «отлично».
          </li>
          <li>
            <b>Профессионализм</b><br/>
            Мы работаем строго в соответствии с договором, в котором прописаны все требования к работе, включая обязательства о неразглашении.
          </li>
          <li>
            <b>Индивидуальный подход</b><br/>
            К клиенту прикрепляется личный менеджер, контролирующий выполнение заказа и готовый помочь в любую минуту.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dissertaciya-na-zakaz.jpg')} altText="Докторская диссертация по педагогике на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Основные этапы сотрудничества
        </h2>
        <ul>
          <li>

            Этап 1. Вы оформляете заявку на помощь в написании диссертации. Сделать заказ можно прямо на сайте или в нашем <Link href="/contacts"><b><a>офисе</a></b></Link> в Москве.

          </li>
          <li>
            Этап 2. Мы проводим с вами собеседование и составляем официальный договор с указанием всех аспектов заказа – сроки, стоимость, исполнитель, требования и так далее. Вы вносите 50% предоплаты.
          </li>
          <li>
            Этап 3. Согласованный автор пишет диссертацию под заказ и сдает ее вам на проверку по частям. По Вашему требованию вносятся бесплатные доработки. После 100%-ной оплаты и сдачи диссертационной работы наш эксперт помогает вам подготовиться к отличной защите.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Наши специалисты
        </h2>
        <p className="block-text__par">
            В нашей компании написанием диссертаций на заказ занимаются действующие преподаватели ведущих российских ВУЗов по соответствующим специальностям с ученой степенью не ниже кандидатской. Это гарантирует максимально полное раскрытие темы и грамотность оформления.
        </p>
        <p className="block-text__par">
          Перед тем как заказать диссертационную работу, каждому клиенту предоставляется возможность переговорить с потенциальными исполнителями. Это позволит вам убедиться в их компетентности и выбрать наиболее подходящую на ваш взгляд кандидатуру.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Можно ли сэкономить при заказе диссертации?
        </h2>
        <p className="block-text__par">
          Разумеется! Есть несколько простых способов заказать диссертацию недорого.
        </p>
        <ol>
          <li>
            Согласуйте тему с нами (если ее можно выбрать). Диссертация на заказ оценивается в соответствии с ее сложностью, поэтому мы можем подсказать, какая тема «выгоднее».
          </li>
          <li>
            Принесите свои материалы. Если у вас накопились собственные наработки по теме диссертации, мы используем их в работе и снизим цену.
          </li>
          <li>
            Время – деньги. Мы можем написать диссертацию даже очень срочно – за сутки, но для вашей экономии лучше оформить заказ заранее. Сделайте это прямо сейчас!
          </li>
        </ol>
        <p className="block-text__par" style={{textAlign: 'center', fontStyle: 'italic'}}>
          <b>
            Заказать диссертацию в BeSmarter! могут жители не только Москвы, но и других регионов РФ. Воспользуйтесь нашим удобным сервисом!
          </b>
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <LinksBlock links={disserNew}/>
    </div>
  </Wrapper>
);


export default page
