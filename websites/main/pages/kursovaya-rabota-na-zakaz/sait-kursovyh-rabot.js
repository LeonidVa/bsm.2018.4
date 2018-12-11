import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

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


const page = () => (
  <Wrapper title="Где заказать курсовую работу – можно заказать курсовую работу в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Ищите где заказать курсовую работу надежно и быстро? Не можете решить где лучше купить курсовую? BeSmarter!– лучший сайт для заказа вашей курсовой работы в Москве!">
    <div className="wrapper bg bg-c2 bg-img bg-img1">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/kursovaya-rabota-na-zakaz">
            <a>Курсовая работа</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Сайт</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kursovaya-rabota-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Курсовая работа</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kursovaya-rabota-na-zakaz/sait-kursovyh-rabot">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Сайт</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Где заказать курсовую работу
        </h1>
        <p className="block-text__par">
          Где лучше купить курсовую работу? Этот вопрос мучает в конце года многих студентов. Причем недостатка в предложениях нет – сайтов для заказа курсовых работ в Интернете хватает. Однако далеко не везде выполнить подобный заказ смогут срочно, недорого, и главное – качественно.
        </p>
        <p className="block-text__par">
          Поэтому вам нужны лучшие сайты для заказа курсовых работ!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kur-rab-sayt-s-rurs.jpg')} altText="Где заказать курсовую работу"/>

      <section className="block-text">
        <h2 className="block-text__title">
          BeSmarter!
        </h2>
        <p className="block-text__par">
          Вас приветствует лучший сайт написания курсовых работ в Интернете! Почему мы так уверены в этом? Дело в том, что на большинстве сайтов, где можно заказать курсовую работу, в качестве исполнителей задействуют фрилансеров – обычно таких же студентов.
        </p>
        <p className="block-text__par">
          И все, на что там можно рассчитывать, – это плагиат (рерайт) старой чужой работы. Наш сайт по написанию курсовых устроен принципиально иначе.
        </p>
        <p className="block-text__par">
          Компания BeSmarter! не сотрудничает с неквалифицированными кадрами. В нашем штате – действующие преподаватели вузов, имеющие кандидатскую степень по различным направлениям. Они обладают огромным опытом написания научных трудов и способны выполнить заказ быстро и качественно.
        </p>
        <p className="block-text__par">
          Именно поэтому наша компания – это лучшее место, где заказать курсовую работу можно с гарантией качества.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
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
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
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
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как и где купить курсовую работу в Москве?
        </h2>
        <p className="block-text__par">
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
        <p className="block-text__par italic">
          Если вам понравилась работать с нами, посоветуйте, где заказать курсовую работу своим знакомым, и они вам будут благодарны!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={
        [
          {url: "/kursovaya-rabota-na-zakaz/skolko-stoit", text: "Сколько стоит курсовая работа"},
          {url: "/kursovoj-proekt-na-zakaz", text: "Заказать курсовой проект"},
        ]
      }/>
    </div>
  </Wrapper>
);


export default page
