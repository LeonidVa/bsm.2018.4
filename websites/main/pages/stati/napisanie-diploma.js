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
import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper title="Написание диплома | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Представьте себе, что написание диплома может стать очень приятным занятием! Никаких бессонных ночей за монитором компьютера, часов просиживания в библиотеках в поисках нужного материала и необходимости избегать научного руководителя в вузе, поскольку Вы еще не готовы предоставить ему свои наработки. Ваше время можно потратить гораздо более интересно и продуктивно, например, посвятив его работе, семье или встречам с лучшими друзьями. И мы поможем Вам в этом!">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Написание диплома'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/napisanie-diploma" name="Написание диплома" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__top-title">Дипломная работа</span>
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


      <TextBlock>
        <h1 className="title">
          Написание диплома
        </h1>
        <p className="par">
          Представьте себе, что <b>написание диплома</b> может стать очень приятным занятием! Никаких бессонных ночей за монитором компьютера, часов просиживания в библиотеках в поисках нужного материала и необходимости избегать научного руководителя в вузе, поскольку Вы еще не готовы предоставить ему свои наработки. Ваше время
          можно потратить гораздо более интересно и продуктивно, например, посвятив его работе, семье или встречам с лучшими друзьями. И мы поможем Вам в этом!
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19-(7).jpg')} altText="Написание диплома"/>

      <TextBlock>
        <p className="par">
          Наша компания предоставляет всем студентам <b>помощь в написании дипломов</b>, на любой, даже начальной стадии работы. Если у Вас уже имеются какие-то собственные наработки, мы возьмем их за основу и доведем до завершающего этапа. Если же их еще нет, мы с радостью выполним всю работу самостоятельно от начала и до конца!
        </p>
        <p className="par">
          Мы – современные и энергичные люди, которые прекрасно понимают насколько трудно сегодня совместить работу и учебу. И именно поэтому мы прикладываем максимум усилий, чтобы Вам это удалось! Учиться и при этом работать – сегодня это возможно! Вы на себе ощутите результативность нашей помощи, даже один раз воспользовавшись
          услугами компании BeSmarter!
        </p>
        <p className="par">
          Ваше время и Ваше здоровье – бесценны, мы прекрасно это понимаем, и именно поэтому сотрудничаем только с лучшими специалистами – кандидатами и докторами наук, преподавателями головных вузов нашей страны, которые выполнят Ваш заказ на самом высоком уровне. А чтобы дать Вам дополнительные гарантии, мы предлагаем заключить
          договор в офисе компании BeSmarter!, в котором прописаны все наши обязательства перед Вами.
        </p>
        <p className="par">
          Все правки, внесенные Вашим научным руководителем, будут учтены нашими авторами, которые доведут работу до совершенства. Отличный качественный диплом – это гарант успешной защиты и Вашего хорошего настроения!
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <p className="par">
          <b>Написание дипломных работ</b>, а также диссертаций, курсовых, рефератов – специализация нашей компании. Тысячи клиентов, заказывавших у нас дипломные работы и отлично защитившихся в вузах – наглядный показатель нашей профессиональной работы.
        </p>
        <p className="par">
          Помимо написания самой дипломной работы, наши авторы готовы подготовить Вам речь-доклад к Вашему диплому для аттестационной комиссии, в котором коротко и основательно будут изложены все основные положения и выводы Вашей дипломной работы. Кроме того, мы готовы подготовить для Вас раскладку для комиссии и презентацию, что
          сделает Ваше выступление на защите ярким, интересным и запоминающимся!
        </p>
        <p className="par">
          Зачем откладывать на завтра то, что можно сделать сейчас? Начинать подготовку к защите дипломной работы лучше всего заранее, ведь в этом случае у Вас будет в запасе больше времени на то, чтобы лучше подготовиться и блестяще выступить перед аттестационной комиссией! Просто заполните на нашем сайте <a href="#form"
                                                                                                                                                                                                                                                                                                                       target="_blank">форму
          заказа</a> или наберите номер <b>+7 495 772-4090</b>, наши менеджеры предоставят детальную информацию относительно Вашей работы и рассчитают ее стоимость. Пусть учеба будет в радость, а BeSmarter! поможет Вам в этом!
        </p>
      </TextBlock>

      <Video>
        <iframe src="https://www.youtube.com/embed/Hf0lm60VUE8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </PageWrapper>
  </Wrapper>
);


export default page
