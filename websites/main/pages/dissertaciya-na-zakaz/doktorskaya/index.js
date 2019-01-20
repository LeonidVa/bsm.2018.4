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
import infoBlockConfig from 'data/infoBlock/disser-doc'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig'

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis1 from "components/common/ServiceBlock/ready-made/DoctorskayaDis1";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";

const page = () => (
  <Wrapper title="Докторская диссертация на заказ в Москве и РФ – заказать подготовку, написание докторской под ключ, цена и сроки" description="Подготовка и написание докторской диссертации на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img4">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/dissertaciya-na-zakaz', text:'Диссертация'},
            {url:'#', text:'>Докторская'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya" name="Докторская" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>



        <DoctorskayaDis1/>

        <KandidatDis/>

      <TextBlock>
        <h1 className="title">
          Докторская диссертация на заказ
        </h1>
        <p className="par">
          Докторская диссертация – это научный труд, по результатам защиты которого соискателю присваивают ученую степень доктора наук. Как правило, в ее основе находится кандидатская или даже магистерская диссертация. Важный момент подготовки докторской диссертации – автореферат. Это краткое изложение ключевых моментов и выводов
          научной работы. Его написание очень важно еще и потому, что без автореферата докторская диссертация не допускается к защите.
        </p>
      </TextBlock>

      <FormEstimate/>

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/ddoc.jpg')} altText="Докторская диссертация"/>

      <TextBlock>
        <h2 className="title">
          Почему лучше заказать докторскую диссертацию?
        </h2>
        <p className="par">
          Самостоятельная подготовка докторской диссертации часто занимает не один год. Текст включает 3 основные части:
        </p>
        <ul>
          <li>Теоретическую.</li>
          <li>Практическую.</li>
          <li>Методологическую.</li>
        </ul>
        <p className="par">
          Кроме того, обязательным является соблюдение требований ВАК, касающихся содержания работы и ее оформления. Неслучайно на подготовку докторской диссертации отводится значительный срок – около полутора лет. Нередко бывает, что написание научного труда занимает гораздо больше времени. ВАК подходит к оценке работ очень
          строго и взыскательно, поэтому авторы отшлифовывают их содержимое до безукоризненного состояния. Однако не все могут найти в плотном рабочем графике место для научных изысканий. Сложно одновременно решать семейные вопросы, заниматься наукой и карьерой. Особенно это касается людей, которым докторская степень нужна, чтобы
          занимать определенные должности, а о том, чтобы сделать карьеру ученого, речь не идет. В такой ситуации вполне логично обратиться к профессионалам для написания докторской диссертации на заказ, а не пытаться написать работу самостоятельно.
        </p>
        <p className="par">
          Главные преимущества этого решения:
        </p>
        <ul>
          <li>
            Качественно выполненная докторская диссертация под ключ с исчерпывающим раскрытием темы. Написанием вашей работы будут заниматься настоящие профессионалы со значительным опытом в освещаемых вопросах.
          </li>
          <li>
            Сопровождение вплоть до защиты. Возможно, что понадобится внесение дополнений и изменений в работу. Наши специалисты выполнят их.
          </li>
          <li>
            Полная конфиденциальность. Мы дорожим репутацией: как собственной, так и заказчиков, поэтому неразглашение личных данных заказчика гарантируется.
          </li>
          <li>
            Максимальный учет пожеланий клиента. Вы можете заказать докторскую диссертацию полностью или по отдельным главам, в зависимости от предпочтений.
          </li>
          <li>
            Приемлемая цена.
          </li>
          <li>
            При необходимости – подготовка докторской диссертации на заказ с консультационной поддержкой клиента.
          </li>
        </ul>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Стоит ли приобретать готовую работу?
        </h2>
        <p className="par">
          В интернете нередко можно встретить предложение купить докторскую в готовом виде. Однако такой шаг имеет множество недостатков:
        </p>
        <ul>
          <li>
            Готовая работа может полностью или частично не соответствовать утвержденному плану.
          </li>
          <li>
            Диссертация, приобретенная у сомнительного автора, как правило, оформлена не по стандартам (довольно строгим).
          </li>
          <li>
            Неуникальность работы. Это может стать основным камнем преткновения при защите.
          </li>
        </ul>
        <p className="par">
          В конечном итоге вы, в лучшем случае, заплатите за чистый плагиат, в худшем – за воздух. Случаев интернет-мошенничества, когда автор, получив предоплату, исчезает, – более чем достаточно. Написание докторской диссертации на заказ в проверенной компании – разумный и безопасный вариант. BeSmarter! поможет вам написать
          хорошую работу для успешной защиты.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Этапы совместной работы
        </h2>
        <p className="par">
          После согласования темы и плана диссертации с научным руководителем порядок действий следующий:
        </p>
        <ul>
          <li>
            Внесение аванса. После этого автор приступает к написанию задания.
          </li>
          <li>
            Когда часть докторской диссертации уже написана, следует ее проверка и внесение остатка заранее оговоренной суммы.
          </li>
          <li>
            Получение готовой работы клиентом на электронный адрес.
          </li>
        </ul>
        <p className="par">
          На протяжении гарантийного срока все дополнения и правки вносятся бесплатно. Компания BeSmarter! поможет вам защититься блестяще!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/docto-watch.jpg')} altText="Докторская диссертация на заказ"/>

      <TextBlock>
        <h2 className="title">
          Факторы, определяющие цену
        </h2>
        <p className="par">
          На стоимость написания докторской диссертации под ключ влияют: выбранная тема, объем и сложность работы. У «технарей» диссертационные труды сложнее, поэтому и стоимость будет выше.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Способы сэкономить
        </h2>
        <p className="par">
          Хотите, чтобы подготовка докторской диссертации обошлось вам в меньшую сумму? Есть несколько способов сэкономить:
        </p>
        <ul>
          <li>
            Написание не всего текста, а его части, по выбору заказчика.
          </li>
          <li>
            Акции и скидки.
          </li>
        </ul>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      {/* <LinksBlock links={links}/> */}
    </PageWrapper>
  </Wrapper>
);


export default page
