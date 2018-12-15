import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disserNew from 'data/linksBlock/disserNew';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";


const page = () => (
  <Wrapper title="Заказать диссертацию по экономике – сколько стоит написать диссертацию по экономике в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Заказать диссертацию по экономике. В компании  BeSmarter! Вы сможете заказать помощь в написании диссертации по экономике от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



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
            <a>По экономике</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/ekonomika">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По экономике</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать диссертацию по экономике
        </h1>
        <ul>
          <li>
            <b>Компетентность</b><br/>
            Вашу диссертацию будет писать действующий вузовский преподаватель со степенью кандидата или доктора экономических наук.
          </li>
          <li>
            <b>Пунктуальность</b><br/>
            У нас можно заказать диссертацию по экономике срочно. Точный день сдачи готовой работы фиксируется в официальном договоре.
          </li>
          <li>
            <b>Профессионализм</b><br/>
            Отдел контроля осуществляет многоступенчатую проверку каждой работы. Ваш личный менеджер всегда на связи.
          </li>
          <li>
            <b>Доступность</b><br/>
            Наши цены прозрачны и объективны. Узнать, сколько стоит диссертация по экономике под заказ, вы сможете из прайс-листа.
          </li>
        </ul>
      </section>

      <FormEstimate/>

 <MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-eko.jpg')} altText="Заказать диссертацию по экономике"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Можно ли сэкономить?
        </h2>
        <p className="block-text__par">
          Конечно! Существует несколько способов недорого заказать диссертацию. Прежде всего, помните, что наше время – это ваши деньги. Чем больше вы нам дадите времени на написание диссертации, тем дешевле она будет. И, наоборот, за срочность придется доплатить.
        </p>
        <p className="block-text__par">
          Еще один способ экономии – выбор «правильной» темы. Дело в том, что сложность, а значит и стоимость диссертации, насыщенной математическими выкладками, намного выше в сравнении с теоретическим исследованием. Если есть возможность выбора – воспользуйтесь ею.
        </p>
        <p className="block-text__par">
          Наконец, можно сэкономить, приложив собственные знания. Принесите нам свои наработки по теме диссертации, и мы учтем это, снизив стоимость заказа.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <ol>
          <li>
            <b>Заявка.</b> Чтобы воспользоваться нашими услугами в Москве или другом регионе России, оформите заявку удобным для себя способом.
          </li>
          <li>
            <b>Собеседование.</b> Мы обсудим с вами все детали работы, согласуем автора и составим договор с фиксацией всех требований к диссертации.
          </li>
          <li>
            <b>Исполнение.</b> После 50% предоплаты наш специалист напишет диссертацию по экономике и точно в срок сдаст вам на проверку готовую работу. При необходимости будут внесены бесплатные правки.
          </li>
          <li>
            <b>Защита.</b> Автор ответит на любые ваши вопросы и поможет качественно подготовиться к защите.
          </li>
        </ol>
        <p className="block-text__par" style={{fontStyle: 'italic'}}>
          Сотрудничество с BeSmarter! – гарантия вашего успеха, убедитесь в этом сами!
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Итак, что вы получаете:
        </h2>
        <ul>
          <li>
            оригинальную диссертационную работу по актуальным экономическим вопросам, написанную опытным экспертом;
          </li>
          <li>
            уникальный текст, проверенный на всех основных онлайн-сервисах антиплагиата (АП, АП.вуз, Etxt, Advego);
          </li>
          <li>
            помощь в написании доклада и подготовке дополнительных материалов – иллюстративных и раздаточных;
          </li>
          <li>
            квалифицированную поддержку вплоть до момента успешной защиты, включая консультации автора;
          </li>
          <li>
            несколько способов связи – онлайн, по телефону <br/>+7 (495) 772-4090 или личная встреча (Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211). Выбирайте самый удобный и не тратьте времени на поиски лучших условий!
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disserNew}/>
    </div>
  </Wrapper>
);


export default page

