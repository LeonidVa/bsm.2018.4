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
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";



const page = () => (
  <Wrapper title="Как подготовиться и поступить в аспирантуру | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Обучение в аспирантуре недаром называют сверх-высшей формой образования. Аспирантура – это уникальная форма обучения, которая ставит перед собой задачу подготовить научно- педагогические и научные кадры. Аспирантура является следующим этапом после получения высшего образования. Многие студенты при защите заказывают диплом на заказ у нас. Мы пишем дипломные работы качественно и в короткие сроки. Диплом завершает обучение в вузе. А аспирантуру стремятся окончить люди, желающие всерьез заниматься научными изысканиями или (и) преподавать в вузах. По окончании аспирантуры выпускник получает степень кандидата наук.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Как подготовиться и поступить в аспирантуру'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/kak-naladit-otnosheniya-s-nauchnym-rukovoditelem" name="https://besmarter.ru/stati/kak-podgotovitsya-i-postupit-v-aspiranturu" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDis/>

        <MatZashDisser/>

      <TextBlock>
        <h1 className="title">
          Как подготовиться и поступить в аспирантуру
        </h1>
        <p className="par">
          Обучение в аспирантуре недаром называют сверх-высшей формой образования. Аспирантура – это уникальная форма обучения, которая ставит перед собой задачу подготовить научно- педагогические и научные кадры. Аспирантура является следующим этапом после получения высшего образования. Многие студенты при защите заказывают <Link
          href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link> у нас. Мы пишем дипломные работы качественно и в короткие сроки. Диплом завершает обучение в вузе. А аспирантуру стремятся окончить люди, желающие всерьез заниматься научными изысканиями или (и) преподавать в вузах. По окончании аспирантуры выпускник получает
          степень кандидата наук.
        </p>
        <p className="par">
          В аспирантуре существует три формы обучения – соискательство, заочная и очная. Соискатель учится до пяти лет, на очной форме обучение длится три года, а на заочной – четыре года. Обучение в аспирантуре может быть бесплатным и платным. Результатом обучения является научная работа по строго определенной теме. Ее называют
          диссертацией. Человек, решающийся посвятить себя науке, задается вопросом – как поступить на учебу в аспирантуру?
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/postup-v-aspir.jpg')} altText="Как подготовиться и поступить в аспирантуру"/>

      <TextBlock>
        <h2 className="title">
          Этапы поступления в аспирантуру
        </h2>
        <p className="par">
          Во-первых, необходимо законченное высшее образование. Без высшего образования поступить учиться в аспирантуру просто невозможно. Однако, при наличии законченного высшего образования, любой человек может претендовать на обучение в аспирантуре. Это право не зависит от сексуальной ориентации, пола, национальности, возраста,
          вероисповедания и т.п.
        </p>
        <p className="par">
          Во-вторых, при решении вопроса о поступлении в аспирантуру, выбирайте специальность, по которой хотите в дальнейшем пройти обучение. Вам не обязательно обучаться в аспирантуре именно по той специальности, которую Вы получали при получении высшего образования. К примеру, если Вы получали образование историка, то можете
          пройти обучение в аспирантуре вуза по программированию или по какой-нибудь химической специальности. Весь вопрос заключается в том, сумеете ли Вы сдать экзамены в аспирантуру. Это самое сложное.
        </p>
        <p className="par">
          В-третьих, выберете вуз, в котором Вы ранее никогда не обучались. Это полезно, так как в разных «альма-матер» разные подходы и разные научные школы. После выбора специализации и вуза, узнайте, какие именно документы необходимы от поступающего в аспирантуру для предоставления в данный вуз. Обычно, требуется предоставить
          копию диплома о законченном высшем образовании, фотографии, заявление, список опубликованных работ и т.п.
        </p>
        <p className="par">
          В-четвертых, с особой тщательностью подготовьте все необходимые для поступления документы. Основательно подготовьтесь к вступительным экзаменам в аспирантуру. Вступительные экзамены в аспирантуру вуза представляют собой написание творческой работы – реферата и три основных экзамена – иностранный язык, экзамен по
          специальности и философия.
        </p>
        <p className="par">
          Конечно, задумываться о поступлении в аспирантуру лучше заранее. Однако, даже при доскональном изучении всей выбранной специальности, с иностранным языком и с философией все может быть гораздо сложнее. Вы можете изучать философию самостоятельно, но на это потребуется некоторое время. К экзамену по иностранному языку
          подготовиться гораздо сложнее. Ведь в большинстве вузов иностранный язык заканчивается на 3 курсе. Вам, скорее всего, придется обращаться к репетитору. Если Вы готовиться к поступлению в аспирантуру еще в студенческие годы, это серьезно облегчит Вам поступление в нее. В качестве реферата в этом случае Вы можете
          предоставить статью, представленную ранее на студенческих конференциях. Сложность вызывает, если у Вас нет статьи в качестве предоставления вместо реферата - тогда его придется писать с нуля.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Вступительный реферат
        </h2>
        <p className="par">
          Поскольку реферат является одним из условий поступления, ему нужно уделить особое внимание. Тему для реферата Вы определяете самостоятельно. При этом следует руководствоваться возможной темой своей диссертации. В реферате следует осветить следующие моменты:
        </p>
        <ul>
          <li>
            Формулировку основной цели Вашего исследования (актуальность данной темы)
          </li>
          <li>
            Методы и подходы, при помощи которых Вы предполагаете решение поставленной научной задачи
          </li>
          <li>
            Потенциальная востребованность ожидаемых результатов исследования
          </li>
        </ul>
        <p className="par">
          В первой части реферата следует раскрыть всю актуальность проблемы исследования, а также аргументированно ответить на вопросы:
        </p>
        <ol>
          <li>
            Почему данное направление интересно для Вас?
          </li>
          <li>
            Что осталось без внимания научного сообщества и что было сделано до Вас?
          </li>
          <li>
            Почему решение научной задачи должно принести значительные практические и теоретические результаты?
          </li>
        </ol>
        <p className="par">
          Затем формулируется цель исследования. Как Вы видите, это колоссальная работа. Поэтому Вам стоит поступить так же, как поступают студенты вузов при написании диплома - <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>. А в Вашем случае – заказать вступительный реферат. Ведь Вы же не хотите ждать год или
          учиться платно? Выход есть – реферат, написанный нашими специалистами с высшим образованием и множеством научных работ!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);


export default page
