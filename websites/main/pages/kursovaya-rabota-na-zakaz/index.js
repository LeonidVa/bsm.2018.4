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
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch'

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
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Заказать курсовую работу недорого – написание курсовой работы на заказ в Москве, цены под ключ"
           description="Хотите качественно заказать курсовую работу в Москве? Только в BeSmarter! можно заказать курсовую работу онлайн, недорого и срочно, даже за 1 день. Не теряйте времени, оформляйте заказ курсовых работ прямо сейчас | Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'#', text:'Курсовая работа'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz" name="Курсовая работа" position="2" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <TextBlock>
        <h1 className="title">
          Заказать курсовую работу
        </h1>
        <p className="par">
          Многим студентам требуется помощь в написании курсовой работы. Чаще всего трудности возникают из-за недостатка времени.
        </p>
        <p className="par">
          Если вам срочно нужна курсовая, предлагаем воспользоваться услугами специалистов BeSmarter! Наша компания успешно работает в данной сфере более 10 лет. Мы можем написать курсовую на заказ в срок от 1 дня, вне зависимости от сложности темы и без ущерба для качества.
        </p>
        <p className="par">
          Своевременность сдачи готовой работы гарантируется официальным договором, подписываемым на стадии предварительного собеседования. В случае необходимости мы будем вам сдавать на проверку каждую главу.
        </p>
        <p className="par" style={{fontStyle: 'italic'}}>
          Только в BeSmarter! можно заказать курсовую работу онлайн, недорого, срочно и качественно. Не теряйте времени!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kur-rab-na-zakaz.jpg')} altText="Заказать курсовую работу"/>

      <TextBlock>
        <h2 className="title">
          Как купить курсовую работу на заказ недорого?
        </h2>
        <p className="par">
          На стоимость услуги влияют несколько объективных факторов.
        </p>
        <ul>
          <li>
            <b>Тема. </b>Заказ написания курсовой работы по гуманитарной дисциплине стоит не так дорого. Технические специальности оцениваются в среднем дороже. Кроме того, цена написания будет определяться сложностью конкретной темы. Здесь мы сможем помочь сэкономить. Чтобы заказать курсовую
            работу недорого, пришлите список доступных тем (если доступен выбор), и мы подберем самую «дешевую».
          </li>
          <li>
            <b>Сроки. </b>Заказ курсовой работы недорого возможен только при оптимальном количестве времени, доступном для ее выполнения. Если же сроки сокращаются до 1-2 суток, то нам приходится привлекать нескольких специалистов. Или предлагать им писать курсовую на заказ внеурочно. Это, разумеется, сказывается на расценках.
            Поэтому, чтобы заказать курсовую работу онлайн недорого, постарайтесь подать заявку как можно раньше.
          </li>
          <li>
            <b>Материалы. </b>При наличии готовых наработок они сэкономят нам время на написание, а вам – деньги.
          </li>
        </ul>
        <p className="par" style={{fontStyle: 'italic'}}>
          Следуйте этим советам, и сможете писать курсовые работы на заказ недорого!
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Хотите заказать курсовую работу онлайн или лично?
        </h2>
        <ol>
          <li>
            Сайт. Заполняется онлайн-заявка (для клиентов из Москвы и других городов).
          </li>
          <li>
            Телефон. Позвоните и расскажите нам о задаче.
          </li>
          <li>
            Визит. Лучший способ заказать курсовую работу в Москве – посетить наш уютный офис в центре столицы!
          </li>
        </ol>
        <p className="par" style={{fontStyle: 'italic'}}>
          Закажите курсовую работу сегодня – это быстро и удобно!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
