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
  <Wrapper title="Ищите где заказать диссертацию за деньги в Москве? Конечнов компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Ищите где заказать диссертацию за деньги в Москве? Единственное место, где можно заказать качественную диссертацию с гарантией, – это компания BeSmarter! Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Где заказать диссертацию"/>
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
            <a>Где заказать</a>
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
            url=" /stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
            title="Статьи"
            text={[<p>Написание и размещение</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii"
            title="Автореферат"
            text={[<p>Строго по ГОСТу</p>]}
          />

          <CardPopInfo
            url=" /stati/kak-podgotovitsya-i-postupit-v-aspiranturu"
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
            url=" /dissertaciya-na-zakaz/doktorskaya"
            title="Прямая связь с автором"
            text={[<p>Постоянный контроль</p>]}
          />

          <CardPopInfo
            url=" /dissertaciya-na-zakaz/doktorskaya"
            title="Публикации"
            text={[<p>Журналы ВАК и иностранные</p>]}
          />

          <CardPopInfo
            url=" /dissertaciya-na-zakaz/doktorskaya"
            title="Обзор литературы"
            text={[<p>Свежие источники</p>]}
          />

        </div>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Где заказать диссертацию
        </h1>
        <p className="block-text__par">
          Написание и успешная защита диссертации является обязательным условием получения очередной ученой степени, начиная от магистра и заканчивая доктором наук. При этом требования к данной работе намного выше в сравнении с курсовыми и даже дипломами.
        </p>
        <p className="block-text__par">
          Дело в том, что защищаться придется перед независимой комиссией из представителей ученого сообщества, поэтому важно обеспечить максимальное качество и актуальность. Данная задача, в особенности для вчерашнего студента или аспиранта – не из самых простых.
        </p>
        <p className="block-text__par">
          Чтобы избежать ненужного риска, многие ищут, где заказать диссертацию за деньги. Обычные фрилансеры выполнить такую работу не смогут. В лучшем случае они сделают рерайт какого-нибудь старого научного труда из Интернета. Единственное место, где можно заказать качественную диссертацию с гарантией, – это компания BeSmarter!
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

      <ImageBlock imageSrc={require('static/images/block/dis-eko.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Какие мы предоставляем гарантии?
        </h2>
        <ul>
          <li>
            <b>Оригинальность.</b> Каждая наша диссертация под заказ – это с нуля написанная работа, причем исполнителем является кандидат наук по соответствующему направлению.
          </li>
          <li>
            <b>Пунктуальность.</b> День сдачи готовой диссертации прописывается в официальном договоре. В случае необходимости мы можем выполнить работу срочно – от 1 дня.
          </li>
          <li>
            <b>Конфиденциальность.</b> Также в договоре прописываются обязательства компании о неразглашении факта нашего сотрудничества.
          </li>
          <li>
            <b>Комплексность.</b> Мы сопровождаем заказчика на всех этапах подготовки к защите. Консультируем, помогаем оформить презентацию, отвечаем на вопросы и т. д.
          </li>
        </ul>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Сколько это стоит?
        </h2>
        <p className="block-text__par">
          BeSmarter! – это компания, где заказать диссертацию можно недорого и абсолютно без ущерба качеству. Мы используем гибкую политику ценообразования, максимально подстраиваясь под финансовые возможности клиента.
        </p>
        <p className="block-text__par">
          Конкретная стоимость определяется в процессе предварительного собеседования и зависит от следующих факторов:
        </p>
        <ul>
          <li>
            специальность – диссертации по техническим дисциплинам стоят дороже;
          </li>
          <li>
            срочность – при сокращении сроков ниже стандартных вводится наценка;
          </li>
          <li>
            материалы – наличие собственных наработок – напротив, уменьшает стоимость заказа.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как воспользоваться нашими услугами в Москве и регионах?
        </h2>
        <p className="block-text__par">
          Итак, вам нужна хорошая диссертация, где заказать вы уже решили, осталось только оформить заявку. Выберите удобный для себя способ связи:
        </p>
        <ul>
          <li>
            онлайн – заполните веб-форму на сайте и дождитесь ответа нашего менеджера;
          </li>
          <li>
            по телефону – свяжитесь с нами по номеру <br/>8 495 772-4090;
          </li>
          <li>
            лично – <Link href="/contacts"><b><a>адрес</a></b></Link> офиса: Москва, Большой Кисловский переулок, д. 1 стр. 2, офис 211.
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
