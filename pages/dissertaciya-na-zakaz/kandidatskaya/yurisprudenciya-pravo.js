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
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig'

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../../components/common/ImageBlock";
import disKanYuri from "../../../data/linksBlock/disKanYuri";
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";
import disser from "../../../data/linksBlock/disser";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import servicecards from "data/serviceCards";
import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";


const page = () => (
  <Wrapper title="Кандидатская диссертация по праву – заказать в Москве и РФ, цены, сроки написания под ключ" description="Кандидатская диссертация по праву на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content=""/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz">
            <a>Диссертация</a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz/kandidatskaya">
            <a>Кандидатская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По юриспруденция</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/kandidat.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Кандидатская диссертация</span>
              <p className="block-service__par">Написание и оформление</p>
              <p className="block-service__par">Публикации</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-4">
            <CardPopInfo
                url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
                title="Аспирантские работы"
                text={[<p>От поступления до защиты</p>]}
            />
          <CardPopInfo
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Статьи"
            text={[<p>Написание и размещение</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii"
            title="Автореферат"
            text={[<p>Строго по ГОСТу</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Апробация"
            text={[<p>Реальные эксперименты</p>]}
          />

        </div>
      </section>

      <section className="block-service">
        <Link href="/dissertaciya-na-zakaz/doktorskaya">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/doctorskaya.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Докторская диссертация</span>
              <p className="block-service__par">Актуальность и научная новизна</p>
              <p className="block-service__par">Ваши и наши данные</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Прямая связь с автором"
            text={[<p>Постоянный контроль</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Публикации"
            text={[<p>Журналы ВАК и иностранные</p>]}
          />

          <CardPopInfo
            url="/diplom-mba-na-zakaz"
            title="Обзор литературы"
            text={[<p>Свежие источники</p>]}
          />

        </div>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Кандидатская диссертация по праву на заказ
        </h1>
        <p className="block-text__par">
          Успешная защита кандидатской диссертации в области права требует значительных усилий. Важно, чтобы подготовленный научный труд соответствовал требованиям ВАК, а тема была актуальной и пригодной для практического применения. От этого во многом зависит успешность защиты. Заказать кандидатскую диссертацию по праву – один из
          лучших способов решения этого вопроса.
        </p>
        <p className="block-text__par">
          Реалии современного общества таковы, что в нормативные акты часто вносятся дополнения и изменения. Поэтому необходимо написать диссертационную работу в как можно более короткие сроки. Для специалиста с плотным рабочим графиком это непростая задача. Разумный выход в подобной ситуации – заказать написание кандидатской
          диссертации в проверенной компании. Компания BeSmarter! предлагает свои услуги по подготовке подобных работ. Вы получите результат под ключ с учетом всех требований ВАК.
        </p>
        <p className="block-text__par">
          К выполнению кандидатской диссертации по праву будут привлечены высококвалифицированные специалисты с учеными степенями в области юриспруденции. Вы можете заказать как написание всей работы полностью, так и часть научного труда, по собственному выбору. Заказ будет выполнен строго в оговоренный срок за разумную сумму.
        </p>
      </section>

      <FormEstimate/>

      <MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/kand-uri.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания диссертации
        </h2>
        <ul>
          <li>
            Профессиональное выполнение заказа. К вашим услугам – квалифицированные специалисты со значительным практическим опытом.
          </li>
          <li>
            Сопровождение работы до защиты. Автор выполнит все правки, изменения и (или) дополнения к вашей работе.
          </li>
          <li>
            Конфиденциальность. Вам не следует беспокоиться, что сведения о вас будут разглашены.
          </li>
          <li>
            Умеренная стоимость.
          </li>
        </ul>
        <p className="block-text__par">
          Возможно, покупка готового диссертационного труда в интернете стоит несколько дешевле, но заказать кандидатскую диссертацию по вопросам права значительно безопаснее. Вы утверждаете план работы, а затем, по мере подготовки, выполняете согласование отдельных глав. Возможно также написание всей работы под ключ. Вы сможете
          заранее сказать научному руководителю, над какими вопросами вам предстоит работать. Таким образом, вы сотрудничаете с научным руководителем, он указывает на возможные недочеты, а мы их оперативно исправляем.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость
        </h2>
        <p className="block-text__par">
          Цена написания кандидатской в области права зависит от объема работы и сложности выбранной темы. Кроме того, наши специалисты выполняют срочные задания. Естественно, это стоит дороже.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Есть ли возможность сэкономить?
        </h2>
        <p className="block-text__par">
          Чтобы заказ обошелся в меньшую сумму, вы можете заказать частичное написание диссертации. Кроме того, мы предлагаем воспользоваться актуальными спецпредложениями компании. В итоге вы получаете возможность заказа не только качественной, но и по-настоящему недорогой работы.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества с BeSmarter!
        </h2>
        <p className="block-text__par">
          Написание на заказ состоит из таких этапов:
        </p>
        <ul>
          <li>
            Согласование плана кандидатской диссертации по праву с научным руководителем.
          </li>
          <li>
            Внесения аванса. На этом этапе наши специалисты начинают выполнять задание.
          </li>
          <li>
            После того как часть проекта подготовлена, вы оплачиваете его стоимость. Затем частично выполненное задание отправляется на вашу электронную почту, а мы переходим к завершению работы.
          </li>
          <li>
            Все правки и дополнения в течение гарантийного срока вносятся бесплатно.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disKanYuri}/>
    </div>
  </Wrapper>
);


export default page
