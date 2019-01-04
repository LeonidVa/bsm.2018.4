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
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplomNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"

const page = () => (
  <Wrapper title="Диплом по экономике на заказ – цена и сроки написания, сколько стоит заказать дипломную работу в Москве" description="Диплом по экономике на заказ! Быстро и профессионально – компания BeSmarter!. Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/diplom-na-zakaz">
            <a>Дипломная работа</a>
          </Link>
          <span> / </span>
          <Link href="/diplom-na-zakaz">
            <a>По экономике</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/diplom-na-zakaz" name="Дипломная работа" position="2" />
            <ItemListElement url="https://besmarter.ru/diplom-na-zakaz/ekonomika" name="По экономике" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
        
      <MessBlock/>

        <Diplom/>

<MatZashGirl/>

      <TextBlock>
        <h1 className="title">
          Диплом по экономике на заказ
        </h1>
        <p className="par">
          Получение высшего образования обязательно связано с написанием дипломной работы. Это научный труд, который требует хороших знаний по специальности. Выполнить хороший диплом по экономике сложно, поэтому студенты предпочитают заказывать его у профессионалов. Компания BeSmarter! специализируется на предоставлении таких
          услуг. К нам обращаются, если:
        </p>
        <ul>
          <li>
            Нет времени написать дипломную работу по экономике самостоятельно.
          </li>
          <li>
            Есть некоторые пробелы в знаниях.
          </li>
          <li>
            Студенты обзаводятся семьей, нужно находить время для детей и подрабатывать.
          </li>
          <li>
            Имеется желание получить работу, выполненную на «отлично».
          </li>
        </ul>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-rab-eko.jpg')} altText="Диплом по экономике на заказ"/>

      <TextBlock>
        <h2 className="title">
          Преимущества написания диплома на заказ
        </h2>
        <p className="par">
          Самостоятельное написание ВКР сопряжено с некоторыми сложностями – это переработка массы источников и потеря времени на поиск информации, большая часть которой будет лишней или не используется позже в работе. Написание диплома по экономике на заказ избавит вас от этих проблем. Вы получите несколько преимуществ:
        </p>
        <ol>
          <li>
            Будете уверены в правильности выполнения работы.<br/>
            ВКР пишут авторы, проверенные временем, преподаватели ВУЗов Москвы и других городов России. Диплом по экономике на заказ выполняют узкие специалисты этой сферы, имеющие практический опыт.
          </li>
          <li>
            Текст работы оформляется согласно ГОСТу.<br/>
            Чаще всего студенты тратят массу времени на подготовку ВКР к сдаче по требованиям стандартов, подгоняют диплом по стилю, корректируют абзацы, шрифты. Наша команда использует специальные программы, которые не допустят ошибок и недочетов по оформлению.
          </li>
          <li>
            Работа будет уникальной.<br/>
            В процессе подготовки к написанию диплома по экономике студенты используют интернет, книги, написанные научные труды. Часто их работы грешат плагиатом. На заказ вы получите уникальный научный труд, который смело пройдет проверку на уникальность.
          </li>
        </ol>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Купить или заказать диплом – что лучше?
        </h2>
        <p className="par">
          Объяснить, чем заказ ВКР лучше, чем покупка готового проекта, можно следующим:
        </p>
        <ol>
          <li>При заказе работы вы сможете предъявить исполнителю требования по срокам, цене и другим тонкостям. В результате получите качественный продукт по разумной стоимости и вовремя!</li>
          <li>Многие студенты подрабатывают написанием дипломных работ, но делают их некачественно. Покупая готовую ВКР через интернет или у посредников, вы не сможете быть уверенным в качестве продаваемого текста и узнать точно, кто выполнял задание и какой у него имеется опыт в нужной вам сфере.</li>
          <li>В случае с готовой дипломной работой вы берете на себя все правки и коррекции, о которых вас попросит научный руководитель. При заказе в BeSmarter! ваш диплом по экономике исполнители ведут до его защиты, то есть перерабатывают и исправляют по необходимости сами.</li>
        </ol>
      </TextBlock>

        <Video>
            <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <TextBlock>
        <h2 className="title">
          От чего зависит цена
        </h2>
        <p className="par">
          Стоимость диплома по экономике на заказ зависит от срока выполнения, количества страниц, сложности проблематики. Наличие чертежей, графиков, таблиц, необходимость написать рецензию и речь для защиты – все это повышает цену диплома. Срочные заказы выполняются по более высокой стоимости.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Как можно сэкономить?
        </h2>
        <p className="par">
          Если вы хотите купить диплом по экономике на заказ по более низкой цене, следуйте нашим советам:
        </p>
        <ul>
          <li>
            Оформите заявку на написание заранее, за 2-3 месяца до защиты ВКР.
          </li>
          <li>
            Выполните самую простую часть дипломной работы самостоятельно, например, введение, заключение, графики или таблицы.
          </li>
          <li>
            Максимально точно ставьте задачи перед исполнителем во время заказа. Это позволит избежать доработок вашего диплома по экономической дисциплине.
          </li>
        </ul>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
