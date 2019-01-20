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
import links from 'data/linksBlock/dipDorab';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import DiplomDorabotka from "components/common/ServiceBlock/ready-made/DiplomDorabotka"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";

const page = () => (
  <Wrapper title="Доработка дипломной работы срочно в Москве, заказать исправление диплома – цены и сроки" description="Доработка дипломной работы срочно! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img5">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/diplom-na-zakaz', text:'Дипломная работа'},
            {url:'#', text:'Доработка'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/diplom-na-zakaz" name="Дипломная работа" position="2" />
            <ItemListElement url="https://besmarter.ru/dorabotka-diplomnoj-raboty" name="Доработка" position="3" />
        </ItemScope>




      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <DiplomDorabotka/>

      <MatZashGirl/>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-rabota.jpg')} altText="Доработка дипломной работы"/>

        <TextBlock>
            <h1 className="title">
                Доработка дипломной работы
            </h1>
            <p className="par">
                Сроки сдачи становятся минимальными и нужно дописать дипломную работу?
            </p>
            <p className="par">
                Хотите заказать корректировку дипломной работы у лучших специалистов по выгодной цене?
            </p>
            <p className="par">
                Специалисты компании BeSmarter! с радостью помогут в решении этих задач. Это отличное решение для выхода из сложившейся ситуации. Выполнить доработку диплома срочно смогут только квалифицированные исполнители, которые знают все особенности данного проекта.
            </p>
            <p className="par">
                Сегодня в интернете можно найти самые разные сервисы, которые помогают дописать дипломную работу. Только не все они могут сравниться с услугами компании BeSmarter!
            </p>
            <p className="par">
                Огромный опыт работы авторов позволит быстро доделать диплом. Только здесь смогут взяться за любое задание и помочь со сложным проектом. Вы будете уверены в качестве и правильности выполненной работы. Компания BeSmarter! всегда приходит на помощь в трудное для студентов время!
            </p>
        </TextBlock>

      <TextBlock>
        <h2 className="title">
          Корректировка дипломных работ – надежно и качественно!
        </h2>
        <p className="par">
          Только наша компания предлагает самые выгодные и удобные условия сотрудничества. Мы долгое время работаем в данном направлении и всегда радуем клиентов. Колоссальный опыт работы позволяет переделать дипломную работу в кратчайшие сроки.
        </p>
        <p className="par">
          Диплом – это не простое задание, а фундаментальный труд. Если преподаватель возвращает его для исправления, то многие студенты не знают что делать дальше. Они уверены, что работа заслуживает самой высокой оценки, но их труды не могут оценить правильно. К тому же доработка диплома требует большого количества сил и времени.
          Что же делать студенту, когда времени практически нет?
        </p>
        <p className="par">
          Компания BeSmarter! знает, как помочь. Здесь помогут, даже если до сдачи остались дни или часы. Специалисты гарантируют положительный результат проделанной работы!
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <TextBlock>
        <h2 className="title">
          Компания BeSmarter! обладает рядом преимуществ:
        </h2>
        <ul>
          <li>
            Доработка диплома срочно по выгодной стоимости
          </li>
          <li>
            Уникальность работы
          </li>
          <li>
            Диплом будет сделан качественно и грамотно
          </li>
          <li>
            Выполнение работы проводится оперативно
          </li>
          <li>
            Сопровождение до сдачи и консультирование. Заключение договора.
          </li>
        </ul>
        <p className="par">
          Исправление дипломных работ срочно – это уникальная возможность быстро, качественно и надежно получить желаемую специальность.
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Как заказать рерайт диплома или его исправление?
        </h2>
        <p className="par">
          Компания BeSmarter! каждый день ждет новых клиентов. Здесь всегда рады прийти на помощь в трудную минуту. На редактирование дипломной работы цена оговаривается в индивидуальном порядке. Она зависит от:
        </p>
        <ul>
          <li>
            Сложности,
          </li>
          <li>
            Сроков,
          </li>
          <li>
            Объемов,
          </li>
          <li>
            Оригинальности.
          </li>
        </ul>
        <p className="par">
          Главная задача компании BeSmarter! – это помощь студентам. Каждый, кому понадобилась помощь, может сюда обратиться и получить ее. Только здесь на доработку диплома цена будет приемлемая и доступная каждому студенту. Мы как никто другой понимаем студентов.
        </p>
        <p className="par">
          Если вы решили заказать рерайт дипломной работы или его исправление, то:
        </p>
        <ul>
          <li>
            Оформите заявку через онлайн-форму на сайте биржи.
          </li>
          <li>
            Позвоните по контактному номеру и менеджеры с радостью помогут в решении любой проблемы.
          </li>
          <li>
            Приходите в офис.
          </li>
        </ul>
        <p className="par">
          Мы рады видеть новых клиентов и готовы всем помочь в срочной доработке диплома!
        </p>
      </TextBlock>

      <Video>
          <iframe src="https://www.youtube.com/embed/FRUcAFM9y9M" frameBorder="0"
              allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameBorder="0" allowFullScreen></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
