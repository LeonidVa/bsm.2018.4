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
  <Wrapper title="Заказать диссертацию по экономике – сколько стоит написать диссертацию по экономике в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Заказать диссертацию по экономике. В компании  BeSmarter! Вы сможете заказать помощь в написании диссертации по экономике от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать диссертацию по экономике помощь в написании на заказ в Москве написать в короткие сроки срочно под заказ сколько стоит написать"/>
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
            <a>По экономике</a>
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

      <ImageBlock imageSrc={require('static/images/block/dis-eko.jpg')}/>

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

      <LinksBlock links={disser}/>
    </div>
  </Wrapper>
);


export default page

