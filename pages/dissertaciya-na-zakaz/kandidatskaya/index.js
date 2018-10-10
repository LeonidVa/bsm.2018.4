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
import disser from 'data/linksBlock/disser';

import MetaTags from 'react-meta-tags';

import ImageBlock from 'components/common/ImageBlock';
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import servicecards from "data/servicecards";
import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";


const page = () => (
  <Wrapper title="Кандидатская диссертация на заказ в Москве и РФ – цены, сроки написания под ключ и сколько стоит" description="Кандидатская диссертация на заказ! Быстрое, недорогое и профессиональное написание – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img1">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать кандидатскую диссертацию на заказ работу написание купить в Москве помощь"/>
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
          <Link href="#">
            <a>Кандидатская</a>
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
          Кандидатская диссертация на заказ
        </h1>
        <p className="block-text__par">
          Кандидатская диссертация – квалифицированная научная работа на соискание ученой степени кандидата наук. Это сложная и кропотливая работа, которая занимает 1-2 года. Подготовка кандидатской диссертации предполагает изучение большого количества литературных источников по теме, публикацию статей, выполнение экспериментальных
          исследований.
        </p>
        <p className="block-text__par">
          Уложиться в отведенный срок непросто. Семья и работа занимают большую часть времени. Заказать кандидатскую диссертацию в компании BeSmarter! – отличное решение этой проблемы. Помощь может понадобиться и тем, кому кандидатская степень нужна для того, чтобы занять определенную должность, а не для построения научной карьеры.
          Компания BeSmarter! предлагает написание работ на соискание кандидатской степени по самым разнообразным темам.
        </p>
      </section>

      <FormEstimate/>

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/kandidatskie.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания под ключ
        </h2>
        <p className="block-text__par">
          За годы пребывания на рынке мы заработали репутацию надежного партнера, который неизменно выполняет взятые на себя обязательства. Мы дорожим собственным именем и мнением клиентов. Сотрудничество с нами по написанию кандидатской диссертации на заказ связано с такими выгодами для заказчиков:
        </p>
        <ul>
          <li>
            Высокий уровень уникальности работ.
          </li>
          <li>
            Неукоснительное соблюдение сроков выполнения заказа.
          </li>
          <li>
            Сопровождение работы до защиты.
          </li>
          <li>
            Внесение исправлений и дополнений.
          </li>
          <li>
            Соблюдение конфиденциальности.
          </li>
          <li>
            Консультационная поддержка клиента по всем вопросам, связанным с выполнением заказа.
          </li>
          <li>
            Удобные способы оплаты.
          </li>
          <li>
            Предельная простота оформления заказа и дальнейшей совместной работы.
          </li>
          <li>
            Приемлемая цена кандидатской диссертации, написанной на заказ под ключ.
          </li>
        </ul>
      </section>
      <section className="block-text">
        <h2 className="block-text__title">
          Стоит ли покупать готовую работу в интернете?
        </h2>
        <p className="block-text__par">
          В принципе, это возможно. Таких предложений немало, цены почти демпинговые, но и рисков, связанных с ними, предостаточно. Нередко бывает так, что заказчик вместо уникального труда получает компиляцию из скопированных текстов. И это – в лучшем случае. В худшем – исполнитель, получив деньги, попросту исчезает. Написание
          кандидатской диссертации в специализированной компании, которая успела себя зарекомендовать – гарантия высокого качества и 100% безопасности. У нас вы можете заказать подготовку исследования полностью «под ключ» или по частям. Все зависит от характера вашей работы с научным руководителем.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Факторы, определяющие стоимость
        </h2>
        <p className="block-text__par">
          Цена кандидатской диссертации на заказ зависит от таких моментов:
        </p>
        <ul>
          <li>
            Срочность выполнения. Естественно, что за сверх оперативность требуется дополнительная оплата.
          </li>
          <li>
            Объем диссертации в соответствии с требованиями.
          </li>
          <li>
            Тема и область исследования. Для технической специальности диссертация, как правило, стоит дороже.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Можно ли сэкономить и как это сделать?
        </h2>
        <p className="block-text__par">
          Если вы хотите, чтобы работа обошлась в меньшую сумму, есть несколько способов сэкономить:
        </p>
        <ul>
          <li>
            Заказ не всего текста диссертации, а его части.
          </li>
          <li>
            «Оптом – дешевле». Заказ одновременно нескольких диссертационных работ помогает существенно снизить цену.
          </li>
          <li>
            Акции и скидки.
          </li>
        </ul>
        <p className="block-text__par">
          В любом случае, вы будете знать заранее, сколько стоит написать кандидатскую диссертацию частями или полностью.
        </p>
      </section>

      <ImageBlock imageSrc={require('static/images/block/kandidatskie2.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Порядок сотрудничества с BeSmarter!
        </h2>
        <p className="block-text__par">
          Первый этап – это утверждение с научным руководителем темы и плана диссертационной работы. Алгоритм дальнейшего сотрудничества следующий:
        </p>
        <ul>
          <li>
            Оформление заказа на сайте компании.
          </li>
          <li>
            Предоплата работы.
          </li>
          <li>
            После написания диссертации – оплата полной стоимости заказа.
          </li>
          <li>
            Получение заказчиком готовой работы на электронный адрес.
          </li>
        </ul>
        <p className="block-text__par">
          Все правки, изменения и дополнения вносятся бесплатно в течение гарантийного срока от момента получения клиентом готового заказа. Какой бы сложной ни была тема, наши специалисты успешно справятся с ней.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disser}/>

    </div>
  </Wrapper>
);


export default page
