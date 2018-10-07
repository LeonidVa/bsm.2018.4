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
import infoBlockConfig from 'components/config/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'components/config/linksBlock/disser';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Заказать диссертацию по медицине – сколько стоит написать диссертацию по медицине в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Заказать диссертацию по медицине. В компании BeSmarter! Вы сможете заказать помощь в написании диссертации по медицине от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать диссертацию по медицине помощь в написании на заказ в Москве написать в короткие сроки срочно под заказ сколько стоит написать"/>
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
            <a>По медицине</a>
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
            url="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
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
        <Link href="#form">
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
          Заказать диссертацию по медицине
        </h1>
        <ul>
          <li>
            <b>Уникальность</b><br/>
            Вы получите оригинальную, написанную «с нуля» диссертационную работу по медицине, полностью раскрывающую заданную тему.
          </li>
          <li>
            <b>Ответственность</b><br/>
            Мы оказываем комплексные услуги, сопровождая вас вплоть до момента успешной защиты, личный менеджер всегда на связи.
          </li>
          <li>
            <b>Универсальность</b><br/>
            Любые шифры специальностей и темы. Заказать диссертацию по медицине можно не только в Москве, но и в любом другом регионе России.
          </li>
          <li>
            <b>Конфиденциальность</b><br/>
            Все аспекты нашего сотрудничества останутся между нами, обязательства о неразглашении фиксируются в официальном договоре.
          </li>
        </ul>
      </section>

      <FormEstimate/>

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

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Кто будет писать диссертацию по медицине на заказ?
        </h2>
        <p className="block-text__par">
          Особенностью научных трудов по медицине является крайне строгое отношение к любым неточностям. Терпимость к ошибкам здесь традиционно нулевая. Поэтому диссертации под заказ в компании BeSmarter! пишут только настоящие профессионалы – кандидаты и доктора медицинских наук, действующие преподаватели вузов. Это гарантия
          безошибочности и идеального оформления работы.
        </p>
        <p className="block-text__par">
          Наши эксперты не только оказывают квалифицированную помощь в написании диссертации по медицине, но и последовательно подводят вас к ее защите. Они ответят на вопросы, дадут советы по подготовке доклада и дополнительных материалов. Мы сделаем все, чтобы вы добились поставленной цели, от вас требуется только желание!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-med.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Какова стоимость диссертации по медицине?
        </h2>
        <p className="block-text__par">
          Узнать сколько стоит написать диссертацию по медицине, можно из нашего прайс-листа, в котором указан диапазон цен. Например, магистерская диссертация обойдется вам от 25 000 до 85 000 рублей. Точная стоимость услуги озвучивается после собеседования и определяется следующими факторами:
        </p>
        <ol>
          <li>
            сложность – здесь все зависит от шифра специальности и конкретной темы;
          </li>
          <li>
            время – если диссертация по медицине на заказ пишется срочно, вводится наценка;
          </li>
          <li>
            требования – желаемая уникальность текста, количество страниц, язык написания и т. д.
          </li>
        </ol>
        <p className="block-text__par" style={{fontStyle: 'italic'}}>
          Желаете заказать диссертацию по медицине недорого – оформите заявку как можно раньше!
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как это работает:
        </h2>
        <ul>
          <li>
            чтобы заказать помощь в написании медицинской диссертации, вы оформляете заявку на сайте, по телефону +7 (495) 772-4090 или по адресу: Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211;
          </li>
          <li>
            наши менеджеры проводят с вами собеседование и подписывают официальный договор с фиксацией всех требований к диссертации;
          </li>
          <li>
            наш автор пишет и в оговоренные сроки сдает работу на проверку, а затем последовательно готовит вас к успешной защите.
          </li>
        </ul>
        <p className="block-text__par" style={{fontStyle: 'italic'}}>
          Компания BeSmarter! – это качественная и недорогая помощь в написании медицинской диссертации. Не упустите свой шанс!
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disser}/>
    </div>
  </Wrapper>
);


export default page
