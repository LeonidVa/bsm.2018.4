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
import infoBlockConfig from 'data/infoBlock/disser-doc'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig'
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis1 from "components/common/ServiceBlock/ready-made/DoctorskayaDis1";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";

const page = () => (
  <Wrapper title="Докторская диссертация по педагогике на заказ в Москве и РФ – цены, сроки написания под ключ" description="Докторские диссертации по педагогике на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img4">

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
          <Link href="/dissertaciya-na-zakaz/doktorskaya">
            <a>Докторская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По педагогике</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Докторская</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya/pedagogika">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По педагогике</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "4"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <DoctorskayaDis1/>

        <KandidatDis/>

      <section className="block-text">
        <h1 className="block-text__title">
          Докторская диссертация по педагогике на заказ
        </h1>
        <p className="block-text__par">
          Присвоение научной степени – важнейший элемент признания научных заслуг любого педагога, а докторская степень по педагогике – своего рода атрибут «гуру» в сфере образования. Доктор наук – человек, которые обрел все навыки профессии, защитил диссертацию, имеет опыт научной и практической работы. Подготовка докторской
          диссертации – это серьезнейший научный труд, требующий больших умственных и временных затрат. Необходимо изучить, проанализировать и обобщить множество первичных источников, провести социологические и статистические исследования, выработать инновации в области педагогики. Причины, по которым подготовка диссертации может
          быть затруднена:
        </p>
        <ul>
          <li>
            Активная педагогическая деятельность и отсутствие достаточного времени на выполнение плановых мероприятий
          </li>
          <li>
            Невозможность самостоятельно изучать первичные источники
          </li>
          <li>
            Сложности в проведении полевых исследований, подготовке и публикации статей и монографий
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/doc-ped.jpg')} altText="Докторская диссертация по педагогике на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Сэкономьте свои силы и время!
        </h2>
        <p className="block-text__par">
          Любой сложный научный труд состоит из нескольких этапов. При этом докторская диссертация по педагогике должна не только иметь научное содержание, но и предлагать инновации для внедрения в процессе обучения и воспитания. Инновации не могут быть вымышленными, они должны подкрепляться результатами практической деятельности и
          разнообразных исследований. Для того чтобы сэкономить свое время и силы, можно обратиться в специализированную компанию, которая осуществляет подготовку докторских диссертаций по педагогике на заказ. Преимуществами данного варианта являются:
        </p>
        <ul>
          <li>
            Значительное уменьшение трудозатрат, экономия свободного времени
          </li>
          <li>
            Высокая уникальность научной работы, основанная на практической деятельности
          </li>
          <li>
            Полное сопровождение при подготовке к защите докторской диссертации по педагогике
          </li>
        </ul>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы работы специалистов BeSmarter!
        </h2>
        <p className="block-text__par">
          Поскольку докторская диссертация является венцом научной деятельности, самой сложной из научных работ, то к ее подготовке привлекаются лучшие специалисты. В некоторых ситуациях их деятельность связана не только с подготовкой самого текста научной работы, но и с написанием и публикацией необходимых статей и монографий.
        </p>
        <p className="block-text__par">
          При необходимости специалисты нашей компании проведут социологические и иные полевые, статистические исследования. Постоянная обратная связь с соискателем ученой степени служит не только элементом контроля, но залогом качественного написания научной работы. Это дает возможность заказчику своевременно предоставлять
          научному руководителю результаты своего труда и при необходимости вносить коррективы в разработанный план и ход работы.
        </p>
        <p className="block-text__par">
          Следует учитывать, что подготовка к защите докторской диссертации по педагогике – это длительный процесс. Соответственно, чем сложнее тема и короче сроки подготовки, тем дороже будут оцениваться услуги авторов компании BeSmarter! Активное взаимодействие соискателя со специалистами компании и установление приемлемых сроков
          дает возможность несколько снизить цену.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Почему лучше сделать заказ у нас?
        </h2>
        <ol>
          <li>
            Авторы компании BeSmarter! не только имеют большой опыт подготовки различных по сложности научных работ, но и сами являются обладателями различных ученых степеней в ВУЗах. Признанные ученые и практики в области педагогической науки готовы оказать всеобъемлющую помощь в подготовке и защите вашей главной научной работы!
          </li>
          <li>
            Гарантируется практическая направленность, высокая уникальность, обоснованность и логичность докторской диссертации по педагогике.
          </li>
          <li>
            Нами практикуется индивидуальный подход к каждому клиенту, учитываются его пожелания и потребности. Работа ведется вплоть до успешной защиты.
          </li>
        </ol>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      {/* <LinksBlock links={links}/> */}
    </div>
  </Wrapper>
);


export default page
