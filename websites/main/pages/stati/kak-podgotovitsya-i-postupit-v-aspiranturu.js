import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";



const page = () => (
  <Wrapper title="Как подготовиться и поступить в аспирантуру | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Обучение в аспирантуре недаром называют сверх-высшей формой образования. Аспирантура – это уникальная форма обучения, которая ставит перед собой задачу подготовить научно- педагогические и научные кадры. Аспирантура является следующим этапом после получения высшего образования. Многие студенты при защите заказывают диплом на заказ у нас. Мы пишем дипломные работы качественно и в короткие сроки. Диплом завершает обучение в вузе. А аспирантуру стремятся окончить люди, желающие всерьез заниматься научными изысканиями или (и) преподавать в вузах. По окончании аспирантуры выпускник получает степень кандидата наук.">
    <div className="wrapper bg bg-c2 bg-img bg-img1">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/stati">
            <a>Статьи</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Как подготовиться и поступить в аспирантуру</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Статьи</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Как подготовиться и поступить в аспирантуру</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KandidatDis/>

        <MatZashDisser/>

      <section className="block-text">
        <h1 className="block-text__title">
          Как подготовиться и поступить в аспирантуру
        </h1>
        <p className="block-text__par">
          Обучение в аспирантуре недаром называют сверх-высшей формой образования. Аспирантура – это уникальная форма обучения, которая ставит перед собой задачу подготовить научно- педагогические и научные кадры. Аспирантура является следующим этапом после получения высшего образования. Многие студенты при защите заказывают <Link
          href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link> у нас. Мы пишем дипломные работы качественно и в короткие сроки. Диплом завершает обучение в вузе. А аспирантуру стремятся окончить люди, желающие всерьез заниматься научными изысканиями или (и) преподавать в вузах. По окончании аспирантуры выпускник получает
          степень кандидата наук.
        </p>
        <p className="block-text__par">
          В аспирантуре существует три формы обучения – соискательство, заочная и очная. Соискатель учится до пяти лет, на очной форме обучение длится три года, а на заочной – четыре года. Обучение в аспирантуре может быть бесплатным и платным. Результатом обучения является научная работа по строго определенной теме. Ее называют
          диссертацией. Человек, решающийся посвятить себя науке, задается вопросом – как поступить на учебу в аспирантуру?
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/postup-v-aspir.jpg')} altText="Как подготовиться и поступить в аспирантуру"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы поступления в аспирантуру
        </h2>
        <p className="block-text__par">
          Во-первых, необходимо законченное высшее образование. Без высшего образования поступить учиться в аспирантуру просто невозможно. Однако, при наличии законченного высшего образования, любой человек может претендовать на обучение в аспирантуре. Это право не зависит от сексуальной ориентации, пола, национальности, возраста,
          вероисповедания и т.п.
        </p>
        <p className="block-text__par">
          Во-вторых, при решении вопроса о поступлении в аспирантуру, выбирайте специальность, по которой хотите в дальнейшем пройти обучение. Вам не обязательно обучаться в аспирантуре именно по той специальности, которую Вы получали при получении высшего образования. К примеру, если Вы получали образование историка, то можете
          пройти обучение в аспирантуре вуза по программированию или по какой-нибудь химической специальности. Весь вопрос заключается в том, сумеете ли Вы сдать экзамены в аспирантуру. Это самое сложное.
        </p>
        <p className="block-text__par">
          В-третьих, выберете вуз, в котором Вы ранее никогда не обучались. Это полезно, так как в разных «альма-матер» разные подходы и разные научные школы. После выбора специализации и вуза, узнайте, какие именно документы необходимы от поступающего в аспирантуру для предоставления в данный вуз. Обычно, требуется предоставить
          копию диплома о законченном высшем образовании, фотографии, заявление, список опубликованных работ и т.п.
        </p>
        <p className="block-text__par">
          В-четвертых, с особой тщательностью подготовьте все необходимые для поступления документы. Основательно подготовьтесь к вступительным экзаменам в аспирантуру. Вступительные экзамены в аспирантуру вуза представляют собой написание творческой работы – реферата и три основных экзамена – иностранный язык, экзамен по
          специальности и философия.
        </p>
        <p className="block-text__par">
          Конечно, задумываться о поступлении в аспирантуру лучше заранее. Однако, даже при доскональном изучении всей выбранной специальности, с иностранным языком и с философией все может быть гораздо сложнее. Вы можете изучать философию самостоятельно, но на это потребуется некоторое время. К экзамену по иностранному языку
          подготовиться гораздо сложнее. Ведь в большинстве вузов иностранный язык заканчивается на 3 курсе. Вам, скорее всего, придется обращаться к репетитору. Если Вы готовиться к поступлению в аспирантуру еще в студенческие годы, это серьезно облегчит Вам поступление в нее. В качестве реферата в этом случае Вы можете
          предоставить статью, представленную ранее на студенческих конференциях. Сложность вызывает, если у Вас нет статьи в качестве предоставления вместо реферата - тогда его придется писать с нуля.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Вступительный реферат
        </h2>
        <p className="block-text__par">
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
        <p className="block-text__par">
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
        <p className="block-text__par">
          Затем формулируется цель исследования. Как Вы видите, это колоссальная работа. Поэтому Вам стоит поступить так же, как поступают студенты вузов при написании диплома - <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>. А в Вашем случае – заказать вступительный реферат. Ведь Вы же не хотите ждать год или
          учиться платно? Выход есть – реферат, написанный нашими специалистами с высшим образованием и множеством научных работ!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

    </div>
  </Wrapper>
);


export default page
