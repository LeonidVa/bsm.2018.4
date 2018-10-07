import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'components/config/linksBlock/disser';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Соискательство | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Если у Вас нет времени учиться в аспирантуре, а Вы хотите защитить кандидатскую диссертацию, то Вы можете стать соискателем ученой степени кандидата наук.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content=""/>
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
            <a>Соискательство</a>
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
          <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
            <a className="block-service__list-item">
              <span className="block-service__list-title">Аспирантские работы</span>
              <p>От поступления<br/>до защиты</p>
            </a>
          </Link>
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
          Соискательство
        </h1>
        <p className="block-text__par">
          Если у Вас нет времени учиться в аспирантуре, а Вы хотите защитить кандидатскую диссертацию, то Вы можете стать <b>соискателем ученой степени кандидата наук</b>.
        </p>
        <p className="block-text__par">
          Соискательство позволяет сократить срок обучения в аспирантуре и докторантуре до 2-х и даже до 1-го года. Если все же и за три года обучения в аспирантуре или докторантуре соискателю научной степени не удалось завершить исследование, срок обучения, по усмотрению ректора, может быть продлен еще на один год для завершения
          диссертации. После 3-х лет обучения у соискателя меняется статус; переводясь на 4-ый год обучения для завершения диссертации, соискатель становится стажером.
        </p>
        <p className="block-text__par">
          Для подготовки диссертации в качестве соискателя нужно прикрепиться к организации (НИИ или ВУЗу), имеющей Диссертационный совет по Вашей специальности, которая может принять кандидатские экзамены и провести защиту.
        </p>
        <p className="block-text__par">
          Команда научно-консалтингового центра компании BeSmarter!, состоящая из опытных профессионалов высочайшего уровня, подключится и поможет Вам на любом этапе решения стоящих перед Вами задач. Наши сотрудники имеют ученые степени кандидатов и докторов наук и ученые звания доцентов и профессоров с многолетним опытом успешной
          подготовки множества диссертантов из разных городов России и других стран. С нами также работают бизнес-консультанты, аналитики, статистики, научные редакторы, библиотекари, архивисты и другие специалисты.
        </p>
      </section>

      <FormEstimate/>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/dissertaciya-na-zakaz/doktorskaya">
            <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/mat-dlya-zash.jpg') + ")",}}>
              <div className="block-service__text gradient-l-black">
                <span className="block-service__title">Материалы для успешной защиты</span>
                <p className="block-service__par">Эффектная презентация</p>
                <p className="block-service__par">Быстро и качественно</p>
                <p className="block-service__par">С нами твоя защита пройдет легко!</p>
              </div>
            </a>
          </Link>
          <div className="block-service__list list-4">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Монография"
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Автореферат"
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Оригинальность текста до 98%"
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Получение по главам"
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Ответы к защите"
            />

            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Доклад Слайды"
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Аннотация Отзыв Рецензия"
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Плакаты к защите"
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Распечатка Переплеты"
            />

          </div>
        </section>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <p className="block-text__par">
          При прикреплении желательно иметь уже<strong> опубликованные научные работы и развернутый план по теме будущего диссертационного исследования</strong>. В некоторых случаях требуется иметь не менее 30% текста готовой диссертации, например, одну из глав. Специалисты компании BeSmarter! помогут Вам в написании и
          опубликовании требуемого объема работ.
        </p>
        <p className="block-text__par">
          Если у Вас не сданы экзамены кандидатского минимума, то ответы на вопросы экзаменов индивидуально для Вас или для группы соискателей подготовит наш автор. Вам останется только выучить их.
        </p>
      </section>

      <section className="block-text">
        <p className="block-text__par">
          Итак, прикрепившись к организации (ВУЗу или НИИ), имеющей соответствующий Вашей специальности Диссертационный совет, Вы с нашей помощью быстро и качественно завершите свой научный труд и успешно защитите диссертацию.
        </p>
        <p className="block-text__par">
          Доверьтесь нашим опытным специалистам!
        </p>
        <p className="block-text__par">
          Мы сможем рассказать уже сегодня, чем мы можем Вам помочь, когда Вы <a href="#form">заполните форму заказа</a> или позвоните нам для бесплатной консультации по телефону <br/>+7 495 772 40 90!
        </p>
        <p className="block-text__par" style={{textAlign: 'center'}}>
          Мы ждем Вас, мы всегда с Вами!
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
