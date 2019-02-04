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
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";


import links from "data/linksBlock/stati/stanluchshim";
import LinksBlock from "components/common/LinksBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";

const page = () => (
  <Wrapper title="Стань лучшим студентом в вузе! | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Чтобы изначально стать хорошим студентом, необходимо точно знать: хотите Вы учиться или нет. Можно сделать диплом на заказ и это будет равноценно тому, что Вы поступили не по своему желанию.  Если вас заставили учиться, то Вам будет тяжело стремиться к хорошей учебе. А если у Вас есть желание, то Вы будете полностью отдаваться учебе и обращать внимание на другие аспекты.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">




        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Стань лучшим студентом в вузе!'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/stan-luchshim-studentom-v-vuze" name="Стань лучшим студентом в вузе!" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <Diplom/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Стань лучшим студентом в вузе!
        </h1>
        <p className="par">
          Чтобы изначально стать хорошим студентом, необходимо точно знать: хотите Вы учиться или нет. Можно сделать <b><Link href="/diplom-na-zakaz"><a>диплом на заказ</a></Link></b> и это будет равноценно тому, что Вы поступили не по своему желанию. Если вас заставили учиться, то Вам будет тяжело стремиться к хорошей учебе. А
          если у Вас есть желание, то Вы будете полностью отдаваться учебе и обращать внимание на другие аспекты.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(15).jpg')} altText="Стань лучшим студентом в вузе!"/>

      <TextBlock>
        <p className="par">
          Прежде всего, нельзя пропускать занятия или спать на занятиях. Это сразу говорит о том, что Вы не хотите заниматься и получать хорошие знания. Очень хорошо ходить на все занятия, всегда активно участвовать в уроках и отвечать на них.
        </p>
        <p className="par">
          Хорошая учеба поможет стать лучшим студентом, но этого в большинстве случаев просто недостаточно. Чтобы отличиться, необходимо проявлять себя еще и в общественной деятельности. В вузе практически постоянно проходят различные соревнования, олимпиады, представления и так далее. Если студент постоянно участвует в таких
          мероприятиях и достаточно активно подходит к ним, то его больше замечают.
        </p>
        <p className="par">
          Также можно посещать различные спортивные секции, чтобы участвовать еще и в спортивных мероприятиях. Это повышает шансы того, чтобы студент завоевал звание лучшего студента.
        </p>
        <p className="par">
          Поможет в этом студенту правильный образ жизни и правильное питание. Чтобы студент хорошо соображал, и у него имелись силы для того, чтобы хорошо заниматься и все успевать, ему необходимо правильно питаться. Он должен получать все необходимые витамины и минералы, чтобы все функции организма правильно работали. Также важно
          высыпаться. Если человек не высыпается, то ему намного тяжелее будет усваивать задания и запоминать пройденный материал. Также плохо влияют и вредные привычки.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <p className="par">
          Для успешной учебы важна дисциплина. Если весь день расписан по порядку и каждому занятию уделено достаточно времени, то и на отдых времени останется предостаточно. Если заниматься в определенное время каждый день, то организм быстро привыкает к этому и будет эффективнее работать в это время. Дисциплина позволит студенту
          не опаздывать на занятия, хорошо высыпаться, быть более ответственным и организованным.
        </p>
        <p className="par">
          Все время студента должно быть расписано. Например, в определенное время занятия оканчиваются, и студент может позволить себе немного отдохнуть. После этого он снова готов заниматься и запоминать.
        </p>
        <p className="par">
          Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
        </p>
        <p className="par">
          Студенту важно много читать и получать новую информацию. Если на занятиях Вы орошо усвоили тему, то зацикливаться на ней не стоит, нужно идти дальше, узнавать новое. В любое удобное и свободное время необходимо читать или узнавать новую информацию. Это не будет лишним, а сам студент будет умным и продвинутым.
        </p>
        <p className="par">
          Если Вы хотите стать хорошим специалистом и отличным студентом, но у Вас нет времени на написание диплома, то можно и <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b>, ведь его напишем мы – действующие преподаватели вузов с большим практическим опытом. А если студент будет стараться и уделять занятиям
          большое внимание, то он станет лучшим студентом, а это означает и отличным специалистом. В этом мы Вам поможем, написав для Вас диплом!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <LinksBlock links={links}/>

    </PageWrapper>
  </Wrapper>
);


export default page
