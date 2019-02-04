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
import infoBlockConfig from 'data/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
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
  <Wrapper title="Как составить план дипломной работы образец – пример содержания дипломной работы на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В статье раскрыта тема: «Как составить план дипломной работы», приведены общие рекомендации, примеры и образцы заключений дипломных работ.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Как составить план дипломной работы'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/kak-sostavit-plan-diplomnoj-raboty" name="Как составить план дипломной работы" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <section className="block-service">
        <Link href="/stati/kak-sostavit-plan-diplomnoj-raboty#form">
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
        <h1>
          Как составить план дипломной работы (образец)
        </h1>
        <p className="par italic">
          "План – это «карта», по которой двигается процесс. Именно с его составления и начинается вся <Link href="/diplom-na-zakaz"><b><a>дипломная работа</a></b></Link>. Он позволяет структурировать информацию, определится с чего начать и на чем заострить особое внимание."
        </p>
        <p className="par">
          Данный этап имеет свои особенности и нюансы, поэтому чтобы правильно составить план дипломной работы, нужно знать, как это сделать. В этом вам поможет данная статья.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(4).jpg')} altText="Как составить план дипломной работы"/>

      <TextBlock>
        <h2 className="title">
          Для написания успешной дипломной работы необходимо создать не один, а несколько планов:
        </h2>
        <ul>
          <li>
            простой;
          </li>
          <li>
            тезисный;
          </li>
          <li>
            календарный.
          </li>
        </ul>
        <p className="par">
          Первый – это тот, что предоставляется для ознакомления и проверки преподавателю. Второй необходим лично для вас, также, как и третий. Он помогает подробно раскрыть тему и не упустить важных моментов. В календарном плане необходимо расписать сроки выполнения каждого пункта – это позволит контролировать работу и все сделать
          вовремя.
        </p>
        <p className="par">
          Поначалу, кажется, что проще <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>, чем его написать, из-за пугающего большого объема. Возможно, для некоторых это действительно выход, но можно собраться с силами и попробовать сделать все самим. Если подойти к составлению плана со всей ответственностью и
          подробно структурировать каждый пункт, то в голове вырисовывается необходимая работа и все становится гораздо проще.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Краткий план дипломной работы
        </h2>
        <p className="par">
          Чтобы написать план дипломной работы нужно ознакомиться с основными задачами, которые она должна решать. Во-первых, тему диплома необходимо полностью раскрыть. Поэтому вносите в содержание все требуемые для этого пункты. Не бойтесь переусердствовать, на проверке вам укажут, если что-то будет лишним.
        </p>
        <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
          <li>
            Во-вторых, необходимы доказательства актуальности. Один-два заголовка должны давать представление о роли описываемой темы на сегодняшний день.
          </li>
          <li>
            В-третьих, должна быть база методов. В дипломной работе описывается способы достижения задачи и подробно - используемый при этом материал.
          </li>
          <li>
            В-четвёртых, нужно сделать объективные выводы о проделанной работе. Вывод очень важная часть, которой стоит уделить особое внимание раскрывая его подробно, а не сделав отписку.
          </li>
        </ul>
        <p className="par">
          Сделать содержание в дипломной работе не всегда бывает просто. Если возникают затруднения обязательно обратитесь к научному руководителю, ведь он приставлен к вам именно для того чтобы помогать. Преподаватель также может внести необходимые правки в ваше представление о содержании диплома.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://www.youtube.com/embed/Hf0lm60VUE8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <TextBlock>
        <h2 className="title">
          Содержание дипломной работы (образец)
        </h2>
        <p className="par">
          Составить краткий план дипломной работы поможет также стандартный образец, на который можно опираться, чтобы правильно выстроить структуру.
        </p>
        <p className="par">
          Примерно, из чего состоит содержание дипломной работы:
        </p>
        <ol>
          <li>Введение;</li>
          <li>Теоретическая часть;</li>
          <li>Практическая часть;</li>
          <li>Применение и развитие темы в современном мире;</li>
          <li>Заключение;</li>
          <li>Список литературы;</li>
          <li>Приложения.</li>
        </ol>
        <p className="par">
          Каждую часть необходимо полностью раскрыть и довести до логического завершения. План составляется из основных пунктов и подпунктов, которые прописываются в обязательном порядке, когда оформляется содержание дипломной работы.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/19-(5).jpg')} altText="Пример содержания дипломной работы"/>

      <TextBlock>
        <h2 className="title">
          Раскрытие понятий «тезисный план»
        </h2>
        <p className="par">
          После проверки и утверждения преподавателем простого плана, не стоит спешить с написанием и раскрытием тем. Лучше всего после этого составить тезисную структуру. Она представляет собой написание наводящих вопросов, цитат, заголовков для каждого пункта простого плана.
        </p>
        <p className="par">
          Таким образом сделать план дипломной работы в виде тезисов, можно описав в коротких фразах все свои представления и мысли по тому, о чем вы будете писать. Тем самым исключается лишняя работа, ведь предоставив подробный план преподавателю вы сразу может узнать, что вы мыслите не в том направлении или наоборот убедиться,
          что все делается правильно.
        </p>
        <p className="par">
          Таким образом, можно заранее найти свои ошибки и не трудится над тем, что является лишним в дипломной работе.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Ошибки при составлении плана
        </h2>
        <p className="par">
          Существует ряд распространенных ошибок, которые допускают студенты. Перед сдачей обратите еще раз внимание на оформление содержания дипломной работы.
        </p>
        <p className="par">
          Нужно следить, чтобы план был последовательный, а описание соответствовало заявленному заголовку. Не стоит забывать и о грамотности. На защите больше всего внимания уделяется плану, именно его в основном изучает комиссия, слушая ваш доклад. Поэтому несколько раз проверьте правописание и орфографию, чтобы не пришлось
          краснеть из-за неправильно написанного слова.
        </p>
        <p className="par">
          Не пренебрегайте советами наставника, но надейтесь только на себя. Ведь от сдачи дипломной работы зависит ваша судьба. Также знайте, что, в крайнем случае, можно <Link href="/diplom-na-zakaz"><b><a>заказать дипломную работу</a></b></Link> у опытных в этом деле людей.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);


export default page
