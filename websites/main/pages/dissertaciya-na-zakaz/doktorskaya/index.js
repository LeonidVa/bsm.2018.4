import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser-doc'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

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

const page = () => (
  <Wrapper title="Докторская диссертация на заказ в Москве и РФ – подготовка и написание под ключ, цена и сроки" description="Подготовка и написание докторской диссертации на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img4">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная </a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz">
            <a>Диссертация</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Докторская</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Диссертация</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Докторская</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>



        <DoctorskayaDis1/>

        <KandidatDis/>

      <section className="block-text">
        <h1 className="block-text__title">
          Докторская диссертация на заказ
        </h1>
        <p className="block-text__par">
          Докторская диссертация – это научный труд, по результатам защиты которого соискателю присваивают ученую степень доктора наук. Как правило, в ее основе находится кандидатская или даже магистерская диссертация. Важный момент подготовки докторской диссертации – автореферат. Это краткое изложение ключевых моментов и выводов
          научной работы. Его написание очень важно еще и потому, что без автореферата диссертация не допускается к защите.
        </p>
      </section>

      <FormEstimate/>

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/ddoc.jpg')} altText="Докторская диссертация"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества нашего предложения
        </h2>
        <p className="block-text__par">
          Самостоятельная подготовка докторской диссертации часто занимает не один год. Текст включает 3 основные части:
        </p>
        <ul className="marker">
          <li>Теоретическую.</li>
          <li>Практическую.</li>
          <li>Методологическую.</li>
        </ul>
        <p className="block-text__par">
          Кроме того, обязательным является соблюдение требований ВАК, касающихся содержания работы и ее оформления. Неслучайно на подготовку докторской диссертации отводится значительный срок – около полутора лет. Нередко бывает, что подготовка научного труда занимает гораздо больше времени. ВАК подходит к оценке работ очень
          строго и взыскательно, поэтому авторы отшлифовывают их содержимое до безукоризненного состояния. Однако не все могут найти в плотном рабочем графике место для научных изысканий. Сложно одновременно решать семейные вопросы, заниматься наукой и карьерой. Особенно это касается людей, которым докторская степень нужна, чтобы
          занимать определенные должности, а о том, чтобы сделать карьеру ученого, речь не идет. В такой ситуации вполне логично обратиться к профессионалам для написания докторской диссертации на заказ, а не пытаться написать работу самостоятельно.
        </p>
        <p className="block-text__par">
          Главные преимущества этого решения:
        </p>
        <ul className="marker">
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
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Стоит ли приобретать готовую работу?
        </h2>
        <p className="block-text__par">
          В интернете нередко можно встретить предложение купить научную работу в готовом виде. Однако такой шаг имеет множество недостатков:
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
        <p className="block-text__par">
          В конечном итоге вы, в лучшем случае, заплатите за чистый плагиат, в худшем – за воздух. Случаев интернет-мошенничества, когда автор, получив предоплату, исчезает, – более чем достаточно. Написание докторской диссертации на заказ в проверенной компании – разумный и безопасный вариант. BeSmarter! поможет вам написать
          хорошую работу для успешной защиты.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы совместной работы
        </h2>
        <p className="block-text__par">
          После согласования темы и плана диссертации с научным руководителем порядок действий следующий:
        </p>
        <ul>
          <li>
            Внесение аванса. После этого автор приступает к выполнению задания.
          </li>
          <li>
            Когда часть диссертации уже написана, следует ее проверка и внесение остатка заранее оговоренной суммы.
          </li>
          <li>
            Получение готовой работы клиентом на электронный адрес.
          </li>
        </ul>
        <p className="block-text__par">
          На протяжении гарантийного срока все дополнения и правки вносятся бесплатно. Компания BeSmarter! поможет вам защититься блестяще!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/docto-watch.jpg')} altText="Докторская диссертация на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Факторы, определяющие цену
        </h2>
        <p className="block-text__par">
          На стоимость написания докторской диссертации под ключ влияют: выбранная тема, объем и сложность работы. У «технарей» диссертационные труды сложнее, поэтому и стоимость будет выше.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Способы сэкономить
        </h2>
        <p className="block-text__par">
          Хотите, чтобы написание диссертационного труда обошлось вам в меньшую сумму? Есть несколько способов сэкономить:
        </p>
        <ul>
          <li>
            Написание не всего текста, а его части, по выбору заказчика.
          </li>
          <li>
            Акции и скидки.
          </li>
        </ul>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      {/* <LinksBlock links={links}/> */}
    </div>
  </Wrapper>
);


export default page
