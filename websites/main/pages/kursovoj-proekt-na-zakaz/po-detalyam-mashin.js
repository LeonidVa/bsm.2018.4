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
import infoBlockConfig from 'data/infoBlock/kurs-proekt'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovayaNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import KursovoyProekt from "components/common/ServiceBlock/ready-made/KursovoyProekt";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Заказать курсовую работу по деталям машин в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании «BeSmarter!» можно срочно и недорого заказать курсовую работу по деталям машин по выгодной цене в Москве. Тел. +7 (495) 772-40-90">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/kursovoj-proekt-na-zakaz', text:'Курсовой проект'},
            {url:'#', text:'По деталям машин'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kursovoj-proekt-na-zakaz" name="Курсовой проект" position="2" />
            <ItemListElement url="https://besmarter.ru/kursovoj-proekt-na-zakaz/po-detalyam-mashin" name="По деталям машин" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KursovoyProekt/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Заказать курсовую работу по деталям машин
        </h1>
        <p className="par">
          «Детали машин» – это одна из базовых дисциплин для студентов любых машиностроительных вузов. Процесс обучения подразумевает выполнение курсовых проектов как эффективного способа контроля знаний и умений.
        </p>
        <p className="par">
          Важной особенностью данной работы является высокая степень индивидуализации. Из-за огромной номенклатуры деталей (в сложных машинах их тысячи) найти даже похожий курсач в Интернете практически невозможно.
        </p>
        <p className="par">
          Если у вас не хватает навыков или времени, чтобы самостоятельно написать работу, выполнить расчеты или сделать чертеж, предлагаем воспользоваться услугами опытных экспертов компании BeSmarter! У нас вы сможете срочно и недорого заказать курсовой проект по деталям машин на выгодных условиях.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/detali-mash.jpg')} altText="Заказать курсовую работу по деталям машин"/>

      <TextBlock>
        <h2 className="title">
          Наши преимущества
        </h2>
        <ul>
          <li>
            <b>Квалификация. </b>Написание курсового проекта будет поручено кандидату технических наук, действующему преподавателю данной дисциплины. Это гарантия правильности всех расчетов и грамотного оформления.
          </li>
          <li>
            <b>Ответственность. </b>Все наши обязательства фиксируются в официальном договоре. Каждому клиенту присваивается индивидуальный куратор, который готов прийти на помощь в любой момент.
          </li>
          <li>
            <b>Прозрачные цены. </b>Стоимость наших услуг определяется объективными критериями – сложность конкретной темы, требования к объему и уникальности текста, срочность и так далее.
          </li>
        </ul>
        <p className="par">
          Курсовые работы по деталям машин от BeSmarter! – это безупречное качество доступное каждому, убедитесь в этом сами!
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Основные этапы сотрудничества
        </h2>
        <p className="par">
          Чтобы воспользоваться нашими услугами, вам нужно заказать курсовой «Детали машин» одним из перечисленных ниже способов. После рассмотрения заявки мы проводим с вами собеседование, по итогам которого составляется официальный договор.
        </p>
        <p className="par">
          Далее вы вносите 50% предоплаты, и согласованный с вами автор приступает к работе. Проект сдается вам на проверку в оговоренный срок. В случае необходимости вносятся бесплатные корректировки. Затем исполнитель помогает вам подготовиться к защите.
        </p>
        <p className="par">
          Узнать более подробно о том, как мы работаем, и какие преимущества вы получите при сотрудничестве с нами, можно у менеджеров компании.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
      </Video>

      <TextBlock>
        <h2 className="title">
          Как заказать курсовой проект по деталям машин?
        </h2>
        <p className="par">
          Доступны три варианта связи:
        </p>
        <ul>
          <li>
            на сайте – нужно оформить <b><a href="#form">онлайн заявку</a></b> и дождаться ответа;
          </li>
          <li>
            по телефону – позвоните нам по номеру <br/>8 (495) 772-40-90;
          </li>
          <li>
            в Москве – приходите <Link href="/contacts"><b><a>к нам</a></b></Link> по адресу: пер. Большой Кисловский, дом 1, стр. 2, оф. 211.
          </li>
        </ul>
        <p className="par">
          Сделайте заказ прямо сейчас и избавьте себя от лишних проблем!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
