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
import infoBlockConfig from 'data/infoBlock/mba'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplomNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import servicecards from "data/serviceBlock/matzash";
import DipMBA from "components/common/ServiceBlock/ready-made/DipMBA"


const page = () => (
  <Wrapper title="Диплом MBA (мва, мба) – заказать диплом MBA! Помощь в написании дипломной работы mba | Диплом mba на заказ в Москве – Besmarter!"
           description="Многие задаются вопросом: «Как успеть написать диплом МВА срочно и при этом уделить достаточно времени работе?» Оптимальным решением в такой ситуации становится диплом MBA на заказ в Москве от компании BeSmarter!: мы выполняем для Вас эту трудоёмкую работу на самом высоком уровне, а Вы в это время спокойно занимаетесь своим делом и зарабатываете деньги.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/"><a>Главная</a></Link>
          <span> / </span>
          <Link href="/diplom-mba-na-zakaz"><a>Диплом MBA</a></Link>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-mba-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Диплом MBA</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>

      <MessBlock/>

        <DipMBA/>

      <ServiceBlock
        image={require('static/images/block/10.jpg')}
        gradient="rgba(213,222,231,0.95),rgba(213,222,231,0.7)"
        title="Материалы для успешной защиты"
        text={<div>
          <p>Не парься сам – доверься нам!</p>
          <p>Легко разберёшься, точно сдашь!</p>
          <p>Доступные цены</p>
          <p>Срочно от 2 часов</p>
        </div>}
        cards={[
          [
            servicecards["Пакет «Успешная Защита»"],
            servicecards["Доклад"],
            servicecards["Оригинальность текста"],
            servicecards["Ответы к защите"],
          ],
          [
            servicecards["Мини-диплом Раскладка"],
            servicecards["Получение по главам"],
            servicecards["Аннотация Отзыв Рецензия"],
            servicecards["Слайды"],
            servicecards["Распечатка Переплеты"],
          ],
        ]}
      />

      <section className="block-text">
        <h1 className="block-text__title">
          Диплом MBA на заказ
        </h1>
        <ul>
          <li>
            <b>Гарантия качества</b><br/>
            Напишем диплом МБА в соответствии с вашими требованиями и оформим по правилам.
          </li>
          <li>
            <b>Уникальность текста</b><br/>
            Проверка работы осуществляется с помощью всех основных онлайн-сервисов антиплагиата (АП, АП.вуз, Etxt, Advego).
          </li>
          <li>
            <b>Пунктуальность</b><br/>
            Срок сдачи готового диплома фиксируется в официальном договоре и отслеживается вашим менеджером.
          </li>
          <li>
            <b>Последовательность</b><br/>
            Мы сопровождаем вас до успешной защиты, консультируя и помогая с подготовкой дополнительных материалов.
          </li>
          <li>
            <b>Удобство</b><br/>
            С помощью нашего сайта заказать диплом MBA можно не только в Москве, но и в любом регионе России.
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/diplom MBA.jpg')} altText="Диплом MBA на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как мы работаем?
        </h2>
        <p className="block-text__par">
          Вы оформляете заявку на помощь в написании дипломной работы MBA удобным для себя способом – онлайн, по телефону (<b>+7 495 772-40-90</b>) или в нашем <a href="/contacts">офисе</a> (Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211).
        </p>
        <p className="block-text__par">
          Мы проводим с вами собеседование и уточняем все детали заказа. Определяется стоимость услуги и согласовывается автор. По результатам переговоров подписывается официальный договор с указанием всех ваших требований и наших обязательств.
        </p>
        <p className="block-text__par">
          Согласованный исполнитель пишет диплом МВА на заказ и сдает его в оговоренные сроки. При необходимости вы можете заказать бесплатные корректировки. Далее автор консультирует вас и помогает подготовиться к защите.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Кто наши авторы?
        </h2>
        <p className="block-text__par">
          Они – наша главная гордость! Компания BeSmarter! принципиально не пользуется услугами фрилансеров-копирайтеров и прочих ненадежных кадров. В нашем штате – исключительно действующие преподаватели вузов различных дисциплин, имеющие научную степень как минимум кандидата наук.
        </p>
        <p className="block-text__par">
          Более того, мы предоставляем вам уникальную возможность предварительно удостовериться в компетентности потенциального исполнителя и переговорить с ним. Благодаря такому профессиональному подходу более 98% наших клиентов защищаются на «отлично»!
        </p>
      </section>

      <Video>
        <iframe src="https://www.youtube.com/embed/mzDkG6XRKuc" frameBorder="0" allowFullScreen></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как сэкономить при заказе диплома MBA?
        </h2>
        <p className="block-text__par">
          Хотите <b>написать диплом MBA недорого</b>? Вот три простых способа экономии:
        </p>
        <ol>
          <li>
            Не теряйте времени. Заказать диплом МВА лучше заранее. Мы, конечно, можем написать работу срочно, даже за 1 день, но это обойдется вам значительно дороже.
          </li>
          <li>
            Проконсультируйтесь с нами. Если есть возможность выбора темы, позвольте нам помочь найти оптимальный вариант.
          </li>
          <li>
            Предложите свои наработки. Если вы уже приступили к написанию работы, принесите эти материалы, и мы снизим цену.
          </li>
        </ol>
        <p className="block-text__par italic">
          <b>Воспользуйтесь услугами специалистов BeSmarter!, и вы не пожалеете об этом!</b>
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
          <iframe src="https://www.youtube.com/embed/sC_LJF0WhXM" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
