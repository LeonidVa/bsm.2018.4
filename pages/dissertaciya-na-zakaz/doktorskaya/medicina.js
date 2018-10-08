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
import infoBlockConfig from 'components/config/infoBlock/disser-doc'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'
import ImageBlock from "../../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Докторская диссертация по медицине на заказ в Москве и РФ – цены, сроки написания под ключ" description="Докторские диссертации по медицине на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
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
          <Link href="/dissertaciya-na-zakaz/doktorskaya">
            <a>Докторская</a>
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

      <section className="block-text">
        <h1 className="block-text__title">
          Докторские диссертации по медицине
        </h1>
        <p className="block-text__par">
          Для присвоения ученой степени по медицинской специальности в России необходимо выполнить квалификационную работу – докторскую диссертацию по медицине. В основу научного труда закладываются разработки соискателя, эксперименты, новшества, аналитика уже известных сведений по теме исследования.
        </p>
        <p className="block-text__par">
          Для написания диссертации нужны время, знания и опыт. И здесь могут возникнуть проблемы, особенно это касается свободного времени. Если его катастрофически не хватает, то написание докторской диссертации по медицине нужно доверить профессионалам. Компания BeSmarter! решит ваши проблемы за короткий срок. Над подготовкой
          исследования будет работать штат опытных авторов.
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
              url="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii"
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

      <ImageBlock imageSrc={require('static/images/block/doc-med2.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания в BeSmarter!
        </h2>
        <p className="block-text__par">
          Заказ докторской диссертации – это правильный и оптимальный шаг для соискателей ученой степени. У написания научного труда специалистами есть масса преимуществ:
        </p>
        <ul>
          <li>
            Экономия времени и сил. Поиск исходной информации, оформление диссертации согласно ГОСТам – титанический и во многом ненужный труд. Сохранить ценное время можно, используя помощь сотрудников BeSmarter!
          </li>
          <li>
            Гарантия получения качественной диссертации по любому направлению, в том числе и по медицине.
          </li>
          <li>
            Соответствие оформления работы ГОСТам и требованиям научного руководителя.
          </li>
        </ul>
        <p className="block-text__par">
          Наши исполнители имеют большой опыт в сфере написания докторских работ, дипломных и других проектов. Авторы знают тонкости оформления и все секреты успешной защиты.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Почему лучше заказать работу, а не купить готовую?
        </h2>
        <p className="block-text__par">
          Покупка готовой диссертации для соискателя ученой степени по медицине грозит обернуться неудачей по нескольким причинам:
        </p>
        <ol>
          <li>
            Нет возможности создать научный труд с учетом требований именно вашего НР.
          </li>
          <li>
            Переделкой и доработкой придется заниматься самостоятельно, а это порой равносильно написанию работы с нуля.
          </li>
          <li>
            Нет связи между исполнителем и заказчиком. Руководитель может вносить изменения в план, структуру диссертации по ходу ее написания. В готовой работе структура уже есть.
          </li>
          <li>
            Возможность обмана. Низкая стоимость привлекает небогатых клиентов, но чаще всего готовая работа за малые деньги – это некачественный материал, взятый из сети и даже толком не переработанный.
          </li>
          <li>
            Вы не выбираете исполнителя и уровень его профессионализма. Кем и когда написана диссертация в готовом виде, узнать сложно.
          </li>
        </ol>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит цена
        </h2>
        <p className="block-text__par">
          Стоимость докторской диссертации по медицине зависит от:
        </p>
        <ul>
          <li>
            Срока исполнения. Авральное написание работы стоит дороже.
          </li>
          <li>
            Объема диссертации. Обычно размер научного труда для соискания ученой степени не превышает 200-250 страниц. Когда требуется больше, цена увеличивается.
          </li>
          <li>
            Сложности темы и новизны исследования.
          </li>
        </ul>
        <p className="block-text__par">
          Если вы сами составили план, начали выполнять введение или основные главы, и требуется только доработка, то цена снижается. Стоимость докторской диссертации по медицине в BeSmarter! определяется индивидуально, исходя из тонкостей выполнения задания.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/doc-med.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как можно сэкономить?
        </h2>
        <p className="block-text__par">
          Снизить затраты на докторскую диссертацию можно следующим образом:
        </p>
        <ul>
          <li>
            Выполните часть диссертации самостоятельно.
          </li>
          <li>
            Обратитесь за помощью к профессионалам заранее.
          </li>
          <li>
            Согласуйте с руководителем конечный вариант плана докторской, чтобы избежать доработок впоследствии.
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <p className="block-text__par">
          Авторы BeSmarter! сотрудничают с заказчиками по следующему плану:
        </p>
        <ul>
          <li>
            Получают заказ.
          </li>
          <li>
            Составляют план диссертации.
          </li>
          <li>
            Подготавливают материалы.
          </li>
          <li>
            Согласовывают этапы написания с заказчиком и выполняют работу по частям или целиком. Рекомендуем заказывать написание всей работы сразу. Так вы сможете ответить на каверзные вопросы руководителя о том, что будет в следующей главе. При желании клиента написание по частям тоже возможно.
          </li>
          <li>
            Внесение правок при наличии замечаний.
          </li>
          <li>
            Подготовка плана защиты.
          </li>
        </ul>
        <p className="block-text__par">
          Чтобы сделать докторскую диссертацию по медицине, свяжитесь с нами по телефону в Москве +7 (495) 772-90-40 или через форму онлайн-заказа на сайте. Компания BeSmarter! заключает официальный договор с клиентами и гарантирует успешную сдачу работы.
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      {/* <LinksBlock links={links}/> */}
    </div>
  </Wrapper>
);


export default page
