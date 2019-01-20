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
import disAspirant from 'data/linksBlock/disAspirant';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Аспирантура в Москве | «BeSmarter!». Тел. +7 (495) 772-40-90." description="В наше время диплом о высшем образовании есть практически у всех, включая продавцов розничной торговли; тем самым нивелируется звание дипломированного специалиста.">
    <PageWrapper className="bg bg-c2 bg-img bg-img2">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/dissertaciya-na-zakaz', text:'Диссертация'},
            {url:'#', text:'Аспирантура'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/aspirantura" name="Аспирантура" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <a name="form-block" id="form-block"/>
      <TextBlock>
        <h1 className="title">
          Аспирантура
        </h1>
        <p className="par">
          <b>
            В наше время диплом о высшем образовании есть практически у всех, включая продавцов розничной торговли; тем самым нивелируется звание дипломированного специалиста.
          </b>
        </p>
        <p className="par">
          <b>
            Поэтому все больше не только ученых, но и топ-менеджеров и бизнесменов понимают, что поступить в аспирантуру, стать соискателем ученой степени, защитить диссертацию актуально и престижно.
          </b>
        </p>
        <p className="par">
          Ученые степени и порождаемый ими научный имидж — необходимая веха на пути к повышению качества жизни и личного статуса в обществе. Очевидно, что продвижение по карьерной лестнице во многом зависит от наличия ученой степени. И это естественно, так как человек, защитивший диссертацию, имеет более широкие знания, опыт
          анализа.
        </p>
        <p className="par">
          Автор напишет вступительный реферат в аспирантуру по теме исследования и подготовит Вас к собеседованию по его теме.
        </p>
        <p className="par">
          При поступлении нередко требуется предъявить опубликованные научные работы, изобретения и отчёты по уже проделанной научно-исследовательской работе. В написании и опубликовании таких работ Вам помогут специалисты нашей компании.
        </p>
      </TextBlock>

      <FormEstimate/>

<MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/aspirant.jpg')} altText="Аспирантура"/>

      <TextBlock>
        <h2 className="title">
          Вступительные экзамены
        </h2>
        <p className="par">
          Программы вступительных экзаменов имеются у методистов и на официальных сайтах аспирантур.
        </p>
        <p className="par">
          Ответы на вопросы вступительных экзаменов индивидуально для Вас или для всей Вашей группы подготовит автор. Вам останется только выучить их.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Научное руководство
        </h2>
        <p className="par">
          У многих руководителей не находится достаточного количества времени для консультаций. Поэтому мы можем прикрепить к Вам консультирующего научного руководителя, у которого всегда можно прояснить то, что остается непонятным после общения с Вашим научным руководителем и подготовиться к следующему обсуждению. Вам будет легко
          решать любые вопросы с Вашим руководителем.
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Выбор и обоснование темы исследования
        </h2>
        <p className="par">
          Аспирант представляет на обсуждение не только название работы, но и ее структуру и предполагаемое содержание, то есть весь замысел диссертации.
        </p>
        <p className="par">
          От выбора темы будет зависеть сложность или относительная легкость защиты. Правильный выбор темы определит результат Ваших усилий.
        </p>
        <p className="par">
          Если Вы пока не выбрали тему будущей диссертационной работы, то после обсуждения с Вами автор очертит круг тем, исходя из Ваших предпочтений. Автор предложит несколько тем, и Вы выберете одну из них.
        </p>
        <p className="par">
          После этого автор оформит для Вас обоснование выбора темы и составит развернутый план диссертации.
        </p>
        <p className="par">
          Кандидатский минимум можно сдать даже до поступления в аспирантуру, что увеличит Ваши шансы на зачисление.
        </p>
        <p className="par">
          Мы окажем Вам любую помощь в подготовке и сдаче всех экзаменов кандидатского минимума. Ответы на вопросы экзаменов кандидатского минимума, как и любые другие, индивидуально для Вас или для группы аспирантов подготовит наш автор.
        </p>
        <p className="par">
          Подготовка материалов и особенно написание диссертации — не только главная, но самая трудная часть работы в силу ее творческого, эксклюзивного характера.
        </p>
        <p className="par">
          В настоящее время задачу сочетания написания и подготовки к защите качественной диссертации с одновременной необходимостью зарабатывания средств на жизнь часто невозможно решить в одиночку в течение этого срока.
        </p>
        <p className="par">
          <b>
            Специалисты компании BeSmarter! окажут Вам все виды помощи, которые могут потребоваться аспирантам и соискателям степени кандидата и доктора наук на любых этапах от принятия решения о поступлении в аспирантуру до написания диссертации вплоть до ее защиты.
          </b>
        </p>
        <p className="par">
          <b>
            С помощью нашей компании Вы уверенно и комфортно защитите и кандидатскую, и докторскую диссертационную работу по любой специальности, включая естественные и точные науки.
          </b>
        </p>
        <p className="par">
          <b>
            Узнайте прямо сейчас, чем мы готовы Вам помочь, <Link href="#form"><a>заполнив форму заказа</a></Link> или позвонив нам по телефону +7 495 772 40 90!
          </b>
        </p>
        <p className="par">
          <b>
            Мы ждем Вас, мы всегда с Вами!
          </b>
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disAspirant}/>
    </PageWrapper>
  </Wrapper>
);


export default page
