import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../../components/common/ImageBlock";
import disKandSkolko from "../../../data/linksBlock/disKandSkolko";
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";
import disser from "../../../data/linksBlock/disser";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import servicecards from "data/serviceCards";
import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";

const page = () => (
  <Wrapper title="Сколько стоит кандидатская диссертация – цена кандидатской диссертации от 150 000 рублей | Закажите кандидатскую диссертацию по выгодной стоимости, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите узнать, сколько стоит кандидатская диссертация? Позвоните нам по тел. +7 (495) 772-40-90, и мы вам скажем, сколько стоит написать кандидатскую диссертацию в компании «BeSmarter!».">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Написать кандидатскую диссертацию стоимость сколько стоит купить цена написание"/>
      </MetaTags>

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
          <Link href="/dissertaciya-na-zakaz/kandidatskaya">
            <a>Кандидатская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Стоимость</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/dissertaciya-na-zakaz/kandidatskaya">
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
          Сколько стоит кандидатская диссертация
        </h1>
        <p className="block-text__par">
          Качественно написанная кандидатская диссертация – цена успеха на защите и шанс обеспечить безоблачное профессиональное будущее молодого ученого. К сожалению, далеко не всегда долгие месяцы кропотливой работы приводят к ожидаемому результату. Не каждый аспирант владеет соответствующими навыками для написания оригинальной и
          актуальной работы.
        </p>
        <p className="block-text__par">
          Иногда бывает проще купить кандидатскую диссертацию – цена ее будет намного меньше в сравнении со стоимостью напрасно потерянного времени, нервов и сил. Квалифицированную помощь в написании работы вы сможете получить в компании BeSmarter! Мы сделаем все качественно и недорого, просто доверьтесь нам!
        </p>
      </section>

      <FormEstimate/>

      <MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/kandidatskie2.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Какова цена кандидатской диссертации?
        </h2>
        <p className="block-text__par">
          Мы понимаем, что вас в первую очередь интересует, сколько стоит написать кандидатскую диссертацию. Ее цена обуславливается следующими факторами.
        </p>
        <ul>
          <li>
            <b>Сложность темы.</b> Написание работ по гуманитарным дисциплинам оценивается значительно дешевле в сравнении с тем, сколько стоит кандидатская диссертация по техническим специальностям. Это связано с более высокой трудоемкостью последних.
          </li>
          <li>
            <b>Требования.</b> Стоимость написания кандидатской диссертации пропорционально зависит от ее фактического объема. Также влияние оказывают специфические требования, например, 100% уникальность текста или нестандартное оформление.
          </li>
          <li>
            <b>Оперативность.</b> Если вам нужно срочно написать кандидатскую диссертацию, стоимость ее будет тем выше, чем ближе день защиты. Желаете сэкономить – оформите свой заказ как можно раньше!
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Алгоритм сотрудничества
        </h2>
        <p className="block-text__par">
          На первом этапе вы выбираете удобный для себя способ связи и оформляете заявку. Далее наши менеджеры проводят с вами собеседования и подписывают официальный договор. Данный документ фиксирует все детали – день, когда должна быть сдана кандидатская диссертация на заказ, цена услуги, исполнитель, ваши требования к работе и
          так далее.
        </p>
        <p className="block-text__par">
          Следующий этап – написание. После 50% предоплаты утвержденный ваш автор пишет диссертацию и по главам сдает ее вам на согласование. В случае необходимости вносятся бесплатные правки. После полной оплаты и приемки работы исполнитель помогает вам подготовиться к успешной защите.
        </p>
        <p className="block-text__par italic center">
          Теперь вам известен алгоритм, осталось позвонить нашим менеджерам!
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как узнать точную стоимость кандидатской диссертации?
        </h2>
        <p className="block-text__par">
          Это можно сделать любым из трех способов:
        </p>
        <ul>
          <li>
            заполнив <b><a href="#form">форму</a></b> на сайте;
          </li>
          <li>
            позвонив по номеру +7 (495) 772-4090;
          </li>
          <li>
            После написания диссертации – оплата полной стоимости заказа.
          </li>
          <li>
            посетив <b><Link href="/contacts"><a>нас</a></Link></b> по адресу: Москва, пер. Большой Кисловский, д. 1, стр. 2, офис 211.
          </li>
        </ul>
        <p className="block-text__par">
          Не теряйте времени – сделайте свой заказ прямо сейчас и избавьте себя от лишних проблем.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disKandSkolko}/>

    </div>
  </Wrapper>
);


export default page
