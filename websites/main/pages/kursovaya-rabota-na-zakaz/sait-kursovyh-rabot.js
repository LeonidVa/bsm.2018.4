import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovaya';

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
  <Wrapper title="Где заказать курсовую работу – можно заказать курсовую работу в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Ищите где заказать курсовую работу надежно и быстро? Не можете решить где лучше купить курсовую? BeSmarter!– лучший сайт для заказа вашей курсовой работы в Москве!">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/kursovaya-rabota-na-zakaz', text:'Курсовая работа'},
            {url:'#', text:'Сайт'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz" name="Курсовая работа" position="2" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz/sait-kursovyh-rabot" name="Сайт" position="3" />
        </ItemScope>


      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <TextBlock>
        <h1 className="title">
          Где заказать курсовую работу
        </h1>
        <p className="par">
          Где лучше купить курсовую работу? Этот вопрос мучает в конце года многих студентов. Причем недостатка в предложениях нет – сайтов для заказа курсовых работ в Интернете хватает. Однако далеко не везде выполнить подобный заказ смогут срочно, недорого, и главное – качественно.
        </p>
        <p className="par">
          Поэтому вам нужны лучшие сайты для заказа курсовых работ!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kur-rab-sayt-s-rurs.jpg')} altText="Где заказать курсовую работу"/>

      <TextBlock>
        <h2 className="title">
          BeSmarter!
        </h2>
        <p className="par">
          Вас приветствует лучший сайт написания курсовых работ в Интернете! Почему мы так уверены в этом? Дело в том, что на большинстве сайтов, где можно заказать курсовую работу, в качестве исполнителей задействуют фрилансеров – обычно таких же студентов.
        </p>
        <p className="par">
          И все, на что там можно рассчитывать, – это плагиат (рерайт) старой чужой работы. Наш сайт по написанию курсовых устроен принципиально иначе.
        </p>
        <p className="par">
          Компания BeSmarter! не сотрудничает с неквалифицированными кадрами. В нашем штате – действующие преподаватели вузов, имеющие кандидатскую степень по различным направлениям. Они обладают огромным опытом написания научных трудов и способны выполнить заказ быстро и качественно.
        </p>
        <p className="par">
          Именно поэтому наша компания – это лучшее место, где заказать курсовую работу можно с гарантией качества.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Почему мы лучший сайт для заказа курсовых работ?
        </h2>
        <ul>
          <li>
            <b>Контроль.</b> Помимо тщательного отбора авторов, в нашей компании имеется отдел контроля, который осуществляет всестороннюю проверку каждой работы. Проверяется ее оригинальность, актуальность, грамотность, оформление и уникальность текста согласно основным онлайн-сервисам проверки (Антиплагиат, text.ru и т. д.).
          </li>
          <li>
            <b>Оперативность.</b> День сдачи готовой работы, а также обязательства о неразглашении прописываются в официальном договоре. В случае необходимости мы можем под заказ написать хорошую курсовую работу срочно (от 1 дня), но за дополнительную плату, поскольку автору придется трудиться внеурочно.
          </li>
          <li>
            <b>Доступность.</b> BeSmarter! – компания, где купить курсовую работу можно по доступной цене и без ущерба ее качеству. Это достигается благодаря использованию гибкой системы ценообразования, а также различным скидкам и льготам. Например, мы можем снизить стоимость заказа, если вы предоставите нам свои материалы по
            теме.
          </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Как мы работаем?
        </h2>
        <ul className="fitted">
          <li>
            1. Вы заходите на наш сайт по выполнению курсовых работ, заполняете заявку или лично связываетесь с нами. Проводится собеседование, оформляется договор.
          </li>
          <li>
            2. После 50% предоплаты наш автор пишет курсовую работу и сдает ее вам на проверку по главам. В случае необходимости вносятся бесплатные правки.
          </li>
          <li>
            3. Вы оплачиваете остаток суммы и получаете полностью готовый курсач. Автор отвечает на вопросы и помогает вам подготовиться к защите.
          </li>
        </ul>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <TextBlock>
        <h2 className="title">
          Как и где купить курсовую работу в Москве?
        </h2>
        <p className="par">
          Итак, вы решили, где лучше заказать курсовую работу, осталось уладить формальности. Выберите удобный для себя способ связи.
        </p>
        <ul>
          <li>
            Онлайн – заполните <b><a href="#form">онлайн-форму</a></b> и дождитесь ответа менеджера компании.
          </li>
          <li>
            Звонок – свяжитесь с нами по телефону 8 495 772-40-90.
          </li>
          <li>
            Визит – наш <b><Link href="/contacts"><a>адрес</a></Link></b> в Москве: Большой Кисловский переулок, д. 1 стр. 2, офис 211.
          </li>
        </ul>
        <p className="par italic">
          Если вам понравилась работать с нами, посоветуйте, где заказать курсовую работу своим знакомым, и они вам будут благодарны!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={
        [
          {url: "/kursovaya-rabota-na-zakaz/skolko-stoit", text: "Сколько стоит курсовая работа"},
          {url: "/kursovoj-proekt-na-zakaz", text: "Заказать курсовой проект"},
        ]
      }/>
    </PageWrapper>
  </Wrapper>
);


export default page
