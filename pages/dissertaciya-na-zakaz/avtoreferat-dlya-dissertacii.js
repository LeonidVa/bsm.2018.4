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
import infoBlockConfig from 'data/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'data/linksBlock/disser';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Заказать автореферат диссертации в Москве и РФ – цены, сроки написания под ключ" description="Заказать автореферат диссертации недорого! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

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
            <a>Автореферат</a>
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

      <section className="block-service__dis">
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
              url="/dissertaciya-na-zakaz/doktorskaya"
              title="Прямая связь с автором"
              text={[<p>Постоянный контроль</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/doktorskaya"
              title="Публикации"
              text={[<p>Журналы ВАК и иностранные</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/doktorskaya"
              title="Обзор литературы"
              text={[<p>Свежие источники</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Автореферат диссертации на заказ
        </h1>
        <p className="block-text__par">
          Автореферат представляет собой краткую выдержку из диссертации, докторской или кандидатской. Это документ, имеющий юридическую силу. Без его написания диссертационная работа не будет принята к защите. Изначально получается право на размножение автореферата, после чего следует допуск соискателя к защите. Компания
          BeSmarter! предлагает вам заказать написание автореферата диссертации под ключ.
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

      <ImageBlock imageSrc={require('static/images/block/aspirant.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Вопросы, освещаемые в автореферате
        </h2>
        <ul>
          <li>
            Цель написания диссертационной работы, ее актуальность и задачи.
          </li>
          <li>
            Новизна и достоверность использованных методов.
          </li>
          <li>
            Значимость путей и методов решения поставленных задач для использования на практике.
          </li>
        </ul>
        <p className="block-text__par">
          Содержание, структура и объем автореферата определяются Высшей аттестационной комиссией (ВАК). Его написание – трудоемкая и кропотливая работа, требующая специальных знаний. Если у вас не хватает времени на выполнение, обратитесь в нашу компанию.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания на заказ
        </h2>
        <p className="block-text__par">
          Заказывая услугу по написанию автореферата в нашей компании, вы получаете такие выгоды:
        </p>
        <ul>
          <li>
            Приемлемая цена услуг.
          </li>
          <li>
            Экономия времени. Вам не нужно тратить его на написание автореферата и проверку строгого соответствия содержанию диссертации и требованиям ГОСТ.
          </li>
          <li>
            Оперативность выполнения заказа.
          </li>
          <li>
            Возможность самостоятельного выбора компетентного исполнителя.
          </li>
        </ul>
        <p className="block-text__par">
          Почему лучше заказать написание, а не купить готовый автореферат? Приобретение готового автореферата сопряжено с определенными рисками:
        </p>
        <ul>
          <li>
            Несоответствие содержанию диссертации или паспортом деятельности.
          </li>
          <li>
            Нет гарантии того, что у конкретного совета защита пройдет нормально.
          </li>
          <li>
            Несоблюдение стандартов ГОСТ.
          </li>
        </ul>
        <p className="block-text__par">
          Беспроигрышный вариант – узнать точные требования к оформлению и лишь после этого оформлять заказ автореферата диссертации. Этим вы повышаете вероятность успешной защиты.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит цена
        </h2>
        <p className="block-text__par">
          На стоимость подготовки автореферата влияют:
        </p>
        <ul>
          <li>
            Тема и сложность диссертации.
          </li>
          <li>
            Объем документа.
          </li>
          <li>
            Срочность написания.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества с BeSmarter!
        </h2>
        <p className="block-text__par">
          Работа по написанию автореферата к кандидатской или докторской диссертации выполняется по такому алгоритму:
        </p>
        <ul>
          <li>
            Оформление заказа с подробным изложением требований и согласование сроков выполнения.
          </li>
          <li>
            Предварительная оплата. После этого наши авторы приступают к выполнению.
          </li>
          <li>
            Вы получаете написанный автореферат. На протяжении 2 месяцев все правки выполняются бесплатно.
          </li>
        </ul>
        <p className="block-text__par">
          Чтобы оформить заказ в BeSmarter!, заполните специальную контактную форму на сайте или позвоните нам по телефону: +7 (495) 772-40-90, +7 (495) 772-90-40. В самом скором времени наш специалист свяжется с вами. Сотрудничество с проверенной командой специалистов – залог вашего успеха на защите.
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
