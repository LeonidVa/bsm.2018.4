import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Как составить план дипломной работы образец – пример содержания дипломной работы на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В статье раскрыта тема: «Как составить план дипломной работы», приведены общие рекомендации, примеры и образцы заключений дипломных работ.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Как составить план дипломной работы содержание образец пример оформление выглядит сделать правильно написать оглавление 2018"/>
      </MetaTags>

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
            <a>Как составить план дипломной работы</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/stati/kak-sostavit-plan-diplomnoj-raboty#form">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Дипломная работа</span>
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

          <Link href="/diplom-mba-na-zakaz">
            <a className="block-service__list-item">
              <span className="block-service__list-title">Диплом MBA</span>
              <p>от <b>25 000</b> руб.</p>
            </a>
          </Link>
        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/diplom-na-zakaz">
            <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
              <div className="block-service__text gradient-l-black">
                <span className="block-service__title">Материалы для успешной защиты</span>
                <p className="block-service__par">Не парься сам – доверься нам!</p>
                <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                <p className="block-service__par">Доступные цены</p>
                <p className="block-service__par">Срочно от 2 часов</p>
              </div>
            </a>
          </Link>
          <div className="block-service__list list-4">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Пакет «Успешная Защита»"
              text={[<p>от 5 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Доклад"
              text={[<p>от 1 500 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Оригинальность текста"
              text={[<p>Во всех системах</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Ответы к защите"
              text={[<p>от 200 руб.</p>]}
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Мини-диплом Раскладка"
              text={[<p>от 2 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Получение по главам"
              text={[<p>Гибкие условия</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Аннотация Отзыв Рецензия"
              text={[<p>от 1 200 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Слайды"
              text={[<p>от 350 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Распечатка Переплеты"
              text={[<p>от 1 200 руб.</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Как составить план дипломной работы (образец)
        </h1>
        <p className="block-text__par italic">
          "План – это «карта», по которой двигается процесс. Именно с его составления и начинается вся <Link href="/diplom-na-zakaz"><b><a>дипломная работа</a></b></Link>. Он позволяет структурировать информацию, определится с чего начать и на чем заострить особое внимание."
        </p>
        <p className="block-text__par">
          Данный этап имеет свои особенности и нюансы, поэтому чтобы правильно составить план дипломной работы, нужно знать, как это сделать. В этом вам поможет данная статья.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(4).jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
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
        <p className="block-text__par">
          Первый – это тот, что предоставляется для ознакомления и проверки преподавателю. Второй необходим лично для вас, также, как и третий. Он помогает подробно раскрыть тему и не упустить важных моментов. В календарном плане необходимо расписать сроки выполнения каждого пункта – это позволит контролировать работу и все сделать
          вовремя.
        </p>
        <p className="block-text__par">
          Поначалу, кажется, что проще <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>, чем его написать, из-за пугающего большого объема. Возможно, для некоторых это действительно выход, но можно собраться с силами и попробовать сделать все самим. Если подойти к составлению плана со всей ответственностью и
          подробно структурировать каждый пункт, то в голове вырисовывается необходимая работа и все становится гораздо проще.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Краткий план дипломной работы
        </h2>
        <p className="block-text__par">
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
        <p className="block-text__par">
          Сделать содержание в дипломной работе не всегда бывает просто. Если возникают затруднения обязательно обратитесь к научному руководителю, ведь он приставлен к вам именно для того чтобы помогать. Преподаватель также может внести необходимые правки в ваше представление о содержании диплома.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://www.youtube.com/embed/VkuU_zZP-z4" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Содержание дипломной работы (образец)
        </h2>
        <p className="block-text__par">
          Составить краткий план дипломной работы поможет также стандартный образец, на который можно опираться, чтобы правильно выстроить структуру.
        </p>
        <p className="block-text__par">
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
        <p className="block-text__par">
          Каждую часть необходимо полностью раскрыть и довести до логического завершения. План составляется из основных пунктов и подпунктов, которые прописываются в обязательном порядке, когда оформляется содержание дипломной работы.
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/19-(5).jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Раскрытие понятий «тезисный план»
        </h2>
        <p className="block-text__par">
          После проверки и утверждения преподавателем простого плана, не стоит спешить с написанием и раскрытием тем. Лучше всего после этого составить тезисную структуру. Она представляет собой написание наводящих вопросов, цитат, заголовков для каждого пункта простого плана.
        </p>
        <p className="block-text__par">
          Таким образом сделать план дипломной работы в виде тезисов, можно описав в коротких фразах все свои представления и мысли по тому, о чем вы будете писать. Тем самым исключается лишняя работа, ведь предоставив подробный план преподавателю вы сразу может узнать, что вы мыслите не в том направлении или наоборот убедиться,
          что все делается правильно.
        </p>
        <p className="block-text__par">
          Таким образом, можно заранее найти свои ошибки и не трудится над тем, что является лишним в дипломной работе.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Ошибки при составлении плана
        </h2>
        <p className="block-text__par">
          Существует ряд распространенных ошибок, которые допускают студенты. Перед сдачей обратите еще раз внимание на оформление содержания дипломной работы.
        </p>
        <p className="block-text__par">
          Нужно следить, чтобы план был последовательный, а описание соответствовало заявленному заголовку. Не стоит забывать и о грамотности. На защите больше всего внимания уделяется плану, именно его в основном изучает комиссия, слушая ваш доклад. Поэтому несколько раз проверьте правописание и орфографию, чтобы не пришлось
          краснеть из-за неправильно написанного слова.
        </p>
        <p className="block-text__par">
          Не пренебрегайте советами наставника, но надейтесь только на себя. Ведь от сдачи дипломной работы зависит ваша судьба. Также знайте, что, в крайнем случае, можно <Link href="/diplom-na-zakaz"><b><a>заказать дипломную работу</a></b></Link> у опытных в этом деле людей.
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

    </div>
  </Wrapper>
);


export default page
