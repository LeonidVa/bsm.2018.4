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
import Video from 'components/common/VideoBlock';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper title="Как написать рецензию на дипломную работу образец – пример рецензии дипломной работы на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В статье раскрыта тема: «Как написать рецензию на дипломную работу», приведены общие рекомендации, примеры и образцы заключений дипломных работ.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Рецензия на дипломную работу'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/recenziya-na-diplomnuyu-rabotu" name="Рецензия на дипломную работу" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <section className="block-service">
        <Link href="/stati/recenziya-na-diplomnuyu-rabotu#form">
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
          Рецензия на дипломную работу (образец)
        </h1>
        <p className="par">
          Первоначальное предназначение рецензии состоит в создании внешней объективной оценки исследовательской деятельности, которую провел студент при написании дипломной работы. В этом дополнении к работе пишется мнение независимого рецензента (другого преподавателя, представителя предприятия, где выпускник проходил практику) о
          дипломной работе после ознакомления с материалом. Таким образом, исключается субъективность мнения, что позволяет дать правильную оценку проделанной работе.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(12).jpg')} altText="Рецензия на дипломную работу (образец)"/>

      <TextBlock>
        <p className="par">
          По правилам рецензент должен полностью ознакомиться со всеми частями работы:
        </p>
        <ul>
          <li>
            оценить структуру;
          </li>
          <li>
            используемую литературу;
          </li>
          <li>
            изучить практическую часть и значимость исследования;
          </li>
          <li>
            прочесть каждый раздел работы.
          </li>
        </ul>
        <p className="par">
          К счастью или к прискорбию студента, преподаватели далеко в каждом случае имеют достаточно времени, чтобы тратить по несколько часов, а то и дней на тщательное изучение напечатанного. По этой причине студенту важно знать, как писать рецензию на дипломную работу, ведь в некоторых случаях именно ему придется составлять
          данный документ. А преподаватель, если его устроит содержание рецензии, просто подписавшись под готовым документом.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Оформление рецензии на дипломную работу
        </h2>
        <p className="par">
          Строгих требований о том, как должна быть оформлена дипломная работа, нет. Но некоторые негласные правила профессионального структурирования документа все же существуют. В большей степени строгость оформления рецензии зависит от того, на какую оценку рассчитывает студент.
        </p>
        <p className="par">
          Если анализ диплома сводится к рекомендации поставить наивысший балл, необходимо глубоко оценить все части исследовательской работы, аргументировано доказать достижение всех поставленных задач, оценить качество подачи материала, уделить внимание влиянию на материал собственных идей и мыслей автора. Необходимости в таком
          строгом подходе нет, если предполагается более низкая оценка за дипломную работу.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Как написать рецензию на дипломную работу?
        </h2><br/>
        <p className="par italic center">
          "Рецензия – структурированный отзыв одного или нескольких преподавателей вуза, который суммирует и подводит итоговую оценку работе студента. Написание рецензии является обязательным этапом защиты выпускного исследовательского проекта."
        </p><br/>
        <p className="par">
          Особых проблем с самостоятельным написанием анализа работы у вас возникнуть не должно, ведь, кто как не вы должен знать сильные и слабые стороны научной работы. Но даже если было решено <a href="/diplom-na-zakaz">заказать дипломную работу</a>, вы все равно будете иметь преимущества перед преподавателем-рецензентом, так
          как, как минимум, у вас будет больше времени на изучение материала.
        </p>
        <p className="par">
          Обычно рецензия пишется простым, свободным языком. Рекомендуется только избегать разговорных размытых фраз, включая: «отличная дипломная работа», «проведены серьезные исследования», «полностью раскрыта тема», «проделана большая работа» и т.д. Отзыв должен писаться максимально сжато, четко и основываясь на реальные факты.
        </p>
        <p className="par">
          Базовая структура рецензии следующая:
        </p>
        <ol>
          <li>
            Вступительная часть, в которой указывается актуальность темы и дается оценка правильности структуры.
          </li>
          <li>
            Основная часть, где детально разбираются основные структурные элементы и разделы работы, находятся ее преимущества и основные неточности, ошибки.
          </li>
          <li>
            Короткий вывод обо всей дипломной работе в целом, где необходимо указать, допускается ли работа к защите, какова рекомендуемая оценка от автора документа.
          </li>
        </ol>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://www.youtube.com/embed/-heyiD9tCLc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <TextBlock>
        <h2 className="title">
          Рецензия включает следующие составные части:
        </h2>
        <ol>
          <li>
            Шапка рецензии содержит тему исследовательской работы, название факультета и данные о студенте.
          </li>
          <li>
            Сразу за заголовком кратко указывается обоснование актуальности выбранной темы, указывается, что рассмотрены основные понятия и методы анализа по теме материала. Указывается, какие проблемы поднял автор, примененные методики и техники в рамках темы.
          </li>
          <li style={{marginBottom: 'unset'}}>
            Далее следует оценка работы с точки зрения рецензента:
            <br/><br/>
            <ul>
              <li>
                Приводится оценка структуры дипломной работы и соответствия содержания материала изначальному заданию (1 предложение). Описывается, из какого количества глав состоит работа, насколько логично подан текст, оценивается наличие и грамотность примененных терминов.
              </li>
              <li>
                Дается краткое содержание, и оценка каждой главы материла.
              </li>
              <li>
                Общая оценка всей работы, указание ее недостатков и достоинств, практической значимости проекта. Рекомендуемый итоговый балл от рецензента.
              </li>
              <li style={{marginBottom: 'unset'}}>
                Личная информация о рецензенте, дата, инициалы, подпись.
              </li>
            </ul>
          </li>
        </ol>
        <p className="par">
          Важно грамотно заполнить каждую часть рецензии, в том числе, указать недостатки. Можно указать нейтральные, не влияющие на оценку недостатки. К примеру, написать, что в материале имеется малое число графиков, диаграмм и изображений или, что в некоторых частях материала не до конца выдержать строгий научный стиль
          повествования.
        </p>
        <p className="par">
          Обязательно нужно самостоятельно указать, что данные неточности не влияют на качественный уровень научно-исследовательской работы. Если у вас возникнут сложности в написании рецензии, эту задачу можно всегда поручить более опытному рецензенту.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);


export default page
