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

import ImageBlock from 'components/common/ImageBlock';
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper title="Как написать заключение к дипломной работе образец – написание заключения в дипломной работе пример на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="В статье раскрыта тема: «Как правильно написать заключение к дипломной работе», приведены общие рекомендации, примеры и образцы заключений дипломных работ.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Заключение к дипломной работе'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/zakluchenie-k-diplomnoj-rabote" name="Заключение к дипломной работе" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <section className="block-service">
        <Link href="/stati/zakluchenie-k-diplomnoj-rabote#form">
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
          Как написать заключение к дипломной работе (образец)
        </h1>
        <p className="par">
          Пришло время завершать дипломную работу, а значит — необходимо написать заключение. Здесь представляется картина в одной из аудиторий: сидят три студента и ломают голову над требованиями введения к диплому, спустя неделю они штудируют методические указания, дабы разобраться в правилах оформления второго и третьего
          раздела. И вот, казалось бы, трудности позади, <b><Link href="/diplom-na-zakaz"><a>дипломная</a></Link></b> почти готова, но они все спорят и выясняют, как правильно писать заключение в дипломной работе.
        </p>
        <p className="par">
          Пути студента неисповедимы — каждый раздел требует своей точности в исполнении и тщательности в выполнении всех требований. Кто-то решается <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b> и избавиться от всех проблем сразу, а кто-то, вопреки всему тянет тяжелую ношу и решается трудиться самостоятельно.
          В этой статье мы обсудим, как написать заключение к дипломной работе, чтобы все требования были учтены.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/zakluchenie-k-diplomnoy-rabote.jpg')} altText="Как написать заключение к дипломной работе (образец)"/>

      <TextBlock>
        <h2 className="title">
          Написание заключения в дипломной работе
        </h2>
        <p className="par">
          Написание заключения в дипломной работе подразумевает размещение в конце дипломной:
        </p>
        <ul>
          <li>
            основных выводов касательно теоретических и экспериментальных (практических) аспектов раскрываемой проблемы;
          </li>
          <li>
            профессиональной оценки проведенной работы;
          </li>
          <li>
            рекомендаций касательно улучшений объекта исследования;
          </li>
          <li>
            собственное полное мнение касательно перспектив темы; общие итоги, строгие размышления о сфере исследования.
          </li>
        </ul>
        <p className="par">
          Простыми словами, заключение требует понимания темы и самого процесса исследования.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Как правильно писать заключение в дипломной работе
        </h2>
        <p className="par">
          Заключение должно составлять, чаще всего, около 4 страниц. Некоторые тематики подразумевает малое заключение, некоторые — большое, превышающее размер введения. Сделать эти две структурные части равными по объему символов — вполне нормально, ошибкой такое не считается. Зачастую, методические указания не содержат конкретных
          инструкций о пропорциях "Введение/Заключение".
        </p>
        <p className="par">
          Чтобы работа была оценена на отлично, следует помнить, что выводы должны составляться отдельно по каждому разделу, а объединяться должны складно. Поэтому,рекомендуется писать по 1-2 странице выводов на каждый раздел в отдельности. Затем нужно сливать эти заметки воедино и вычитывать их, лишая смысловые переходы нестыковок
          и диссонансов.
        </p>
        <p className="par">
          Основная задача последнего раздела — отобразить целостность и логическую завершенность всей работы.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Структура заключения дипломной работы
        </h2>
        <ul>
          <li>
            Стартовые, вступительные строки. Пара предложений вначале — вводные. Манера заключения должна быть целостной и соответствовать всей работе. Не спешите переходить к цифрам.
          </li>
          <li>
            Основная часть. Здесь располагаются выводы, полученные цифры, показатели. Прочитав заключение, преподаватель должен ощущать полную осведомленность.
          </li>
          <li>
            Заключение. Финальная часть заключения должна содержать ваше мнение касательно перспектив, рекомендации, инновационные размышления касательно улучшений.
          </li>
        </ul>
        <p className="par">
          Все разделы заключения должны быть плавно связаны и не "выдернуты из контекста".
        </p>
      </TextBlock>

      <a name="form" id="form"/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://www.youtube.com/embed/9szbyVEYtMg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <FormOrder/>
    </PageWrapper>
  </Wrapper>
);


export default page
