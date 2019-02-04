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

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";

const page = () => (
  <Wrapper title="Выбираем вуз своей мечты | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="На дворе лето. Для тысяч школьников это возможно самые волнующие три месяца в жизни, потому что это их последнее лето в школе. Они – выпускники. И в этом году им предстоит начать полную незабываемых деньков студенческую жизнь. Но прежде придется решить по-настоящему серьезный вопрос – выбрать вуз своей мечты. Это трудно, ведь каждый думает: «А вдруг выберу не то? А что если не справлюсь? А кто поможет мне, ведь семья занимается абсолютно другим?». Но не нужно бояться, ведь Вы всегда сможете найти помощь у специалистов и выполнить любое задание, например, курсовую работу или диплом на заказ.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Выбираем вуз своей мечты'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/vybiraem-vuz-svoej-mechty" name="Выбираем вуз своей мечты" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <Diplom/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Выбираем вуз своей мечты
        </h1>
        <p className="par">
          На дворе лето. Для тысяч школьников это возможно самые волнующие три месяца в жизни, потому что это их последнее лето в школе. Они – выпускники. И в этом году им предстоит начать полную незабываемых деньков студенческую жизнь. Но прежде придется решить по-настоящему серьезный вопрос – выбрать вуз своей мечты. Это трудно,
          ведь каждый думает: «А вдруг выберу не то? А что если не справлюсь? А кто поможет мне, ведь семья занимается абсолютно другим?». Но не нужно бояться, ведь Вы всегда сможете найти помощь у специалистов и выполнить любое задание, например, курсовую работу или <b><Link href="/diplom-na-zakaz"><a>диплом на
          заказ</a></Link></b>.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(1).jpg')} altText="Выбираем вуз своей мечты"/>

      <TextBlock>
        <p className="par">
          Так как же все-таки выбрать место учебы, которое по-настоящему раскроет Ваш талант, станет основой счастливой и успешной карьеры? Начать стоит с себя. Не нужно искать советов у других, ведь только Вы знаете, чего Вы действительно хотите. Ведь так? Бывает, что есть много увлечений, много того, что дается Вам легко, но Вы
          не знаете что именно выбрать. А выбирать следует хорошо, ведь этот выбор, возможно, определит Ваше будущее. Эта статья поможет Вам сделать этот выбор.
        </p>
        <p className="par">
          Начните со следующего: разделите чистый лист бумаги на три колонки. В первую очередь, занесите то, что у Вас получается делать действительно хорошо, во вторую – те хобби, которые Вас делают по-настоящему счастливым, в третью – те свои таланты, которые могли бы приносить или уже приносят доход. Не стесняйтесь писать все,
          что придет в голову, возможно однажды это станет Вашей профессией. Дальше стоит выделить те направления, в которых Вы имеете возможность развиваться, которым можно обучаться. Хотя это прекрасное занятие, вряд ли запуск воздушного змея может стать Вашей профессией. Итак, выделив, эти направления выберете из последней
          колонки такие, которые прямо или косвенно присутствуют в двух других. Хорошо, если таких направлений будет несколько.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <p className="par">
          Теперь, когда Вы провели анализ своих занятий и интересов, стоит узнать, где можно им достойно обучиться. Если у Вас есть возможность отправиться учиться в другие города или страны, не бойтесь ей воспользоваться. Помните, самое важное – выбрать вуз своей мечты, где Вас обучали бы тому, что Вам по-настоящему интересно.
          Составьте список мест, где обучают по направлениям близким к тем, что Вы выбрали на предыдущем этапе.
        </p>
        <p className="par">
          Таким образом, Вы имеете несколько вариантов в том, чему будете обучаться и тому, где будете это делать. Здесь уже имеет смысл обратиться к родителям или преподавателям, чтобы они подсказали те специальности, которые более престижны и перспективны, и те вузы, которые готовят студентов по-настоящему хорошо.
        </p>
        <p className="par">
          Так Ваш выбор будет легче. А как насчет того, чтобы поступить в вуз? Ведь многие учебные заведения требуют не только аттестат и результаты ЕГЭ, но и различные вступительные работы. Часто бывает, что работы эти по тем предметам, которых Вы не изучали в школе. Как быть тогда? В таких ситуациях стоит обращаться к
          профессионалам, которые помогут Вам выполнить работы в срок, да еще и понять новый и интересный для Вас предмет. Вам легко будет сделать любую работу с нами, и Вы будете приятно удивлены, чувствуя, что мы помогаем Вам по-настоящему в них разобраться. Быть уверенным в своих силах – что может быть важнее?
        </p>
        <p className="par">
          Решайтесь, побеждайте, идите к цели! Выбор вуза своей мечты в Ваших руках. Сделайте процесс его поиска интересным, творческим и запоминающимся. Отдавайте предпочтение тому, что подсказывает Ваше сердце, но не забывайте и о здравом смысле. Помните, добившись успеха в определенной области, став высококлассным специалистом,
          профессионалом своего дела, Вы обеспечите себе жизнь, которая позволит развиваться в любом русле. Поэтому все-таки будьте благоразумны при выборе профессии. И пусть Вас не останавливает необходимость решать различные задания, выполнять огромные вступительные работы, сдавать экзамены. Позвоните и заручитесь поддержкой
          специалистов, которые помогают выполнять огромное количество работ каждый день.
        </p>
        <p className="par">
          Вы всегда сможете сделать с нами вступительные тесты, задания, рефераты, так же легко, как и <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b> у грамотных специалистов. Верьте в себя, обращайтесь к нам за написанием дипломных работ, рефератов и курсовых, и вы легко не только выберете вуз своей мечты, но и
          закончите в нем обучение блестяще!
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </PageWrapper>
  </Wrapper>
);


export default page
