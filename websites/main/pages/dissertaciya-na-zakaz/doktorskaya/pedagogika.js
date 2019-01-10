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
import infoBlockConfig from 'data/infoBlock/disser-doc'

import CurrentOffer from 'components/content/offers/CurrentOffer';

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
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"

const page = () => (
  <Wrapper title="Докторская диссертация по педагогике на заказ в Москве и РФ – цены, сроки написания под ключ" description="Докторские диссертации по педагогике на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img4">

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

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya" name="Докторская" position="3" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya/pedagogika" name="По педагогике" position="4" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <DoctorskayaDis1/>

        <KandidatDis/>

      <TextBlock>
        <h1 className="title">
          Докторская диссертация по педагогике на заказ
        </h1>
        <p className="par">
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
      </TextBlock>

      <FormEstimate/>

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/doc-ped.jpg')} altText="Докторская диссертация по педагогике на заказ"/>

      <TextBlock>
        <h2 className="title">
          Сэкономьте свои силы и время!
        </h2>
        <p className="par">
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
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Этапы работы специалистов BeSmarter!
        </h2>
        <p className="par">
          Поскольку докторская диссертация является венцом научной деятельности, самой сложной из научных работ, то к ее подготовке привлекаются лучшие специалисты. В некоторых ситуациях их деятельность связана не только с подготовкой самого текста научной работы, но и с написанием и публикацией необходимых статей и монографий.
        </p>
        <p className="par">
          При необходимости специалисты нашей компании проведут социологические и иные полевые, статистические исследования. Постоянная обратная связь с соискателем ученой степени служит не только элементом контроля, но залогом качественного написания научной работы. Это дает возможность заказчику своевременно предоставлять
          научному руководителю результаты своего труда и при необходимости вносить коррективы в разработанный план и ход работы.
        </p>
        <p className="par">
          Следует учитывать, что подготовка к защите докторской диссертации по педагогике – это длительный процесс. Соответственно, чем сложнее тема и короче сроки подготовки, тем дороже будут оцениваться услуги авторов компании BeSmarter! Активное взаимодействие соискателя со специалистами компании и установление приемлемых сроков
          дает возможность несколько снизить цену.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
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
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      {/* <LinksBlock links={links}/> */}
    </PageWrapper>
  </Wrapper>
);


export default page
