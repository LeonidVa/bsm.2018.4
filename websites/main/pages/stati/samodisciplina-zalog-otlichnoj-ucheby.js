import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom';

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";


import links from "data/linksBlock/stati/samodiscip";
import LinksBlock from "components/common/LinksBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"

const page = () => (
  <Wrapper title="Самодисциплина – залог отличной учебы | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Известно с давних пор: самодисциплина – ключ к покорению мира. Самодисциплине учились самые стойкие характеры в истории человечества. Однако сейчас это слово затерто до дыр. Данной тематике посвящены сотни тренингов и множество книг. Но, даже осознав слабые места в своей дисциплине и разобравшись в теме, нелегко исправить свою дисциплину. Ведь мы так любим это слово – «завтра».">
    <div className="wrapper bg bg-c2 bg-img bg-img3">



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
            <a>Самодисциплина – залог отличной учебы</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati/samodisciplina-zalog-otlichnoj-ucheby">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Самодисциплина – залог отличной учебы</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

     <Diplom/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Самодисциплина – залог отличной учебы
        </h1>
        <p className="block-text__par">
          Известно с давних пор: самодисциплина – ключ к покорению мира. Самодисциплине учились самые стойкие характеры в истории человечества. Однако сейчас это слово затерто до дыр. Данной тематике посвящены сотни тренингов и множество книг. Но, даже осознав слабые места в своей дисциплине и разобравшись в теме, нелегко исправить
          свою дисциплину. Ведь мы так любим это слово – «завтра».
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(3).jpg')} altText="Самодисциплина – залог отличной учебы"/>

      <section className="block-text">
        <p className="block-text__par">
          Самодисциплина – это основа всех основ. Только систематизированный подход к решению того или другого вопроса даст положительный результат. И этот подход невозможен без самодисциплины. Особенно это касается учебы. Скажем, не каждый дипломник может усидчиво работать над своей дипломной работой. Что он делает? Он покупает <a
          href="/diplom-na-zakaz" target="_blank">диплом на заказ</a> у квалифицированных преподавателей. Но у многих людей есть конкретная цель – научиться самодисциплине, воспитать себя. Не прав тот, кто сказал – «человека не изменить». Человека изменить. Более того, человека нужно менять!
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как изменить себя
        </h2>
        <ul className="fitted">
          <li>
            <b>—</b> Учитесь самодисциплине. Самодисциплина – такая же наука, как и любая другая. Разбейте сложные задачи на несколько мелких. Поставьте перед собой определенные сроки выполнения данных задач. На первых этапах не относитесь к себе слишком строго, не ставьте план «выполнить пятилетку за год», обязательно
            рассчитывайте время с запасом. Ведь если Вы не выполните поставленную задачу – Вы разочаруетесь в себе и испортите репутацию. Оно Вам надо?
          </li>
          <li>
            <b>—</b> Будьте обязательны. Если Вы что-то запланировали – хоть что сделайте, но выполните обещанное.
          </li>
          <li>
            <b>—</b> Бейте лень. Боритесь с нею. Не позволяйте ей одержать верх над Вами. Например, пропустив одно занятие, Вам захочется пропустить второе, третье, десятое – а там уже и совсем бросить. Как только чувствуете дуновение лени, ее сладкий шепот – гоните врага прочь!
          </li>
          <li>
            <b>—</b> Правильно рассчитывайте время. Это немаловажный вопрос. Правильно рассчитанное время – половина пройденной цели. Не нужно сидеть до умопомрачения за учебниками. Работа мозга на износ ни к чему хорошему не приведет. Выделите время для отдыха, это очень важно. И для занятий спортом.
          </li>
          <li>
            <b>—</b> Балуйте себя. Позвольте себе хотя бы 3 раза в месяц своевольничать. Давайте себе отдых, наслаждайтесь блаженной ленью и безмятежностью. Нельзя постоянно держать себя в заведенном состоянии, Вы ведь не механизм. Даже механизмы высокой точности рано или поздно ломаются от перегрузок. Также можете сломаться и Вы –
            сдадут нервы или будет еще хуже.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <p className="block-text__par">
          Множество заочников сталкиваются с проблемой самодисциплины. Заочник поступает в вуз обычно спустя энное время после окончания школы. Вследствие этого школьные знания, которые необходимы для обучения в вузе, оказываются утрачены. В некоторых вузах для таких студентов организуют дополнительные занятия при поддержке
          деканата. Данные занятия являются бесплатными как для платников, так и для бюджетников. Студенты – заочники общаются с преподавателями не ежедневно, а только несколько раз в год. Общение происходит во время сессий. Однако некоторые преподаватели дают консультации и отвечают на вопросы очно, по электронной почте в любое
          время. Но все же, студенту-заочнику приходится сложно. Ведь для обучения на заочном отделении (даже по гуманитарной специальности) требуется жесткая дисциплина. Самодисциплина необходима в распределении соотношения времени между учебой и работой. Человек, который владеет навыками самодисциплины, перестает сталкиваться с
          негативными последствиями обучения на заочном отделении. Все потому, что он уже умеет организовывать и планировать свое время с самой максимальной эффективностью.
        </p>
        <p className="block-text__par">
          Поскольку заочная форма предполагает самостоятельную подготовку в течение всего года, для работающих студентов это превращается в головную боль. Даже при должной самодисциплине может не хватить времени на качественное написание курсовых и контрольных работ, на работу с учебными материалами, на работу над дипломными
          проектами. Поэтому многие студенты приходят к одной единственной верной мысли – <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link> у нас! Мы напишем для Вас качественную, сильную работу, подкрепленную практическими результатами и грамотно проанализированным базисом. Хватит думать, пора заказывать диплом у
          нас!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <LinksBlock links={links}/>

    </div>
  </Wrapper>
);


export default page
