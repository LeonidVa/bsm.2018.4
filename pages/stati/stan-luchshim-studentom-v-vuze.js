import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


import links from "../../data/linksBlock/stati/stanluchshim";
import LinksBlock from "../../components/common/LinksBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"


const page = () => (
  <Wrapper title="Стань лучшим студентом в вузе! | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Чтобы изначально стать хорошим студентом, необходимо точно знать: хотите Вы учиться или нет. Можно сделать диплом на заказ и это будет равноценно тому, что Вы поступили не по своему желанию.  Если вас заставили учиться, то Вам будет тяжело стремиться к хорошей учебе. А если у Вас есть желание, то Вы будете полностью отдаваться учебе и обращать внимание на другие аспекты.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content=""/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/stati">
            <a>Статьи</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Стань лучшим студентом в вузе!</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/diplom-na-zakaz">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Дипломная работа</span>
              <p className="block-service__par">Быстро и качественно!</p>
              <p className="block-service__par">С нами твоя защита пройдет легко!</p>
              <p className="block-service__par">От 14 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Дипломный проект"
            text={[<p>от 21 000 руб.</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Магистерская диссертация"
            text={[<p>от 23 000 руб.</p>]}
          />

            <CardPopInfo
                url="/diplom-mba-na-zakaz"
                title="Диплом MBA"
                text={[<p>от 25 000 руб.</p>]}
            />
        </div>
      </section>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Стань лучшим студентом в вузе!
        </h1>
        <p className="block-text__par">
          Чтобы изначально стать хорошим студентом, необходимо точно знать: хотите Вы учиться или нет. Можно сделать <b><Link href="/diplom-na-zakaz"><a>диплом на заказ</a></Link></b> и это будет равноценно тому, что Вы поступили не по своему желанию. Если вас заставили учиться, то Вам будет тяжело стремиться к хорошей учебе. А
          если у Вас есть желание, то Вы будете полностью отдаваться учебе и обращать внимание на другие аспекты.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(15).jpg')}/>

      <section className="block-text">
        <p className="block-text__par">
          Прежде всего, нельзя пропускать занятия или спать на занятиях. Это сразу говорит о том, что Вы не хотите заниматься и получать хорошие знания. Очень хорошо ходить на все занятия, всегда активно участвовать в уроках и отвечать на них.
        </p>
        <p className="block-text__par">
          Хорошая учеба поможет стать лучшим студентом, но этого в большинстве случаев просто недостаточно. Чтобы отличиться, необходимо проявлять себя еще и в общественной деятельности. В вузе практически постоянно проходят различные соревнования, олимпиады, представления и так далее. Если студент постоянно участвует в таких
          мероприятиях и достаточно активно подходит к ним, то его больше замечают.
        </p>
        <p className="block-text__par">
          Также можно посещать различные спортивные секции, чтобы участвовать еще и в спортивных мероприятиях. Это повышает шансы того, чтобы студент завоевал звание лучшего студента.
        </p>
        <p className="block-text__par">
          Поможет в этом студенту правильный образ жизни и правильное питание. Чтобы студент хорошо соображал, и у него имелись силы для того, чтобы хорошо заниматься и все успевать, ему необходимо правильно питаться. Он должен получать все необходимые витамины и минералы, чтобы все функции организма правильно работали. Также важно
          высыпаться. Если человек не высыпается, то ему намного тяжелее будет усваивать задания и запоминать пройденный материал. Также плохо влияют и вредные привычки.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <p className="block-text__par">
          Для успешной учебы важна дисциплина. Если весь день расписан по порядку и каждому занятию уделено достаточно времени, то и на отдых времени останется предостаточно. Если заниматься в определенное время каждый день, то организм быстро привыкает к этому и будет эффективнее работать в это время. Дисциплина позволит студенту
          не опаздывать на занятия, хорошо высыпаться, быть более ответственным и организованным.
        </p>
        <p className="block-text__par">
          Все время студента должно быть расписано. Например, в определенное время занятия оканчиваются, и студент может позволить себе немного отдохнуть. После этого он снова готов заниматься и запоминать.
        </p>
        <p className="block-text__par">
          Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
        </p>
        <p className="block-text__par">
          Студенту важно много читать и получать новую информацию. Если на занятиях Вы орошо усвоили тему, то зацикливаться на ней не стоит, нужно идти дальше, узнавать новое. В любое удобное и свободное время необходимо читать или узнавать новую информацию. Это не будет лишним, а сам студент будет умным и продвинутым.
        </p>
        <p className="block-text__par">
          Если Вы хотите стать хорошим специалистом и отличным студентом, но у Вас нет времени на написание диплома, то можно и <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b>, ведь его напишем мы – действующие преподаватели вузов с большим практическим опытом. А если студент будет стараться и уделять занятиям
          большое внимание, то он станет лучшим студентом, а это означает и отличным специалистом. В этом мы Вам поможем, написав для Вас диплом!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <LinksBlock links={links}/>

    </div>
  </Wrapper>
);


export default page
