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
  <Wrapper title="Диссертация по философии на заказ в Москве и РФ – цены, сроки написания под ключ" description="Диссертация по философии на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
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
            <a>По философии</a>
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
          <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/doctorskaya.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Докторская диссертация</span>
              <p className="block-service__par">Актуальность и научная новизна</p>
              <p className="block-service__par">Ваши и наши данные</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-35">
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
          Диссертация по философии
        </h1>
        <p className="block-text__par">
          В каких случаях обращаются к нам за помощью с написанием работы? Вы можете заказать диссертацию по философии в компании BeSmarter!, если не успеваете со сроками. Обычно приходится жертвовать либо учебой, либо работой, а распределить время между двумя этими занятиями не получается. В этом случае мы поможем собрать и
          структурировать материал так, что клиент успешно пройдет защиту. Чаще всего заказывают диссертацию, если:
        </p>
        <ul>
          <li>
            работа сделана, но не оформлена;
          </li>
          <li>
            написана только вводная часть;
          </li>
          <li>
            готовы к защите только отдельные части диссертации.
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
          В чем преимущества написания на заказ?
        </h2>
        <p className="block-text__par">
          Итак, вы можете заказать диссертацию по философии абсолютно анонимно, что гарантирует сохранность репутации. Есть и другие выгоды и преимущества:
        </p>
        <ul>
          <li>
            каждая работа пишется под ключ, а потому исключены инциденты с копированием чужой интеллектуальной собственности;
          </li>
          <li>
            есть возможность написать как сразу всю работу целиком, так и работать по главам;
          </li>
          <li>
            вы гарантированно получаете работу в срок и не переживаете из-за времени! Написание под заказ всегда сопровождается консультацией личного менеджера.
          </li>
        </ul>
        <p className="block-text__par">
          Почему лучше не покупать готовую работу? Если вы делаете заказ в BeSmarter!, то исследование пишется под ключ. Вы можете заказать диссертацию, дипломную, курсовую по философии без опасения, что вам продадут частично или полностью скопированный материал.
        </p>
        <p className="block-text__par">
          Также заказ под ключ позволяет учитывать рекомендации, правки и требования научного руководителя. Естественно, полной степени соответствия его пожеланиям невозможно добиться, если покупать готовый материал.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества с BeSmarter!
        </h2>
        <p className="block-text__par">
          Вы заполняете форму заявки на сайте, указывая исходные данные. Все детали обсуждаются лично с менеджером компании, после чего подписывается договор на оказание услуг. Вы также можете просто позвонить по телефону <br/>+7 (495) 772-40-90 или <span className="tel1">+7 (495) 772-90-40</span>, чтобы сэкономить время на
          заполнение онлайн-анкеты.
        </p>
        <p className="block-text__par">
          Можно договориться как о выполнении всего заказа полностью, так и о написании частями.
        </p>
        <p className="block-text__par">
          Лучше всего, конечно, сразу иметь на руках полностью готовый и оформленный по ГОСТ материал, ведь так вы всегда сможете ответить на вопросы научного руководителя.
        </p>
        <p className="block-text__par">
          Если вас интересует заказ диссертации по философии, обращайтесь к нам – мы гарантированно поможем с выполнением всех заданий, а также сэкономим вам массу времени. Агентство BeSmarter! тщательно отбирает авторов, чтобы вы остались довольны.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит цена услуги
        </h2>
        <p className="block-text__par">
          Стоимость зависит от сложности работы, а также объемов и сроков исполнения:
        </p>
        <ul>
          <li>
            Кандидатская работа обычно должна иметь 150 страниц. Цена услуги в этом случае – от 180 до 450 тыс. рублей.
          </li>
          <li>
            Докторская диссертация стоит от 450 до 950 тыс. рублей (средний объем – 250 страниц).
          </li>
        </ul>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как можно сэкономить?
        </h2>
        <p className="block-text__par">
          Воспользуйтесь этими советами, если вам критически важно не переплачивать:
        </p>
        <ul>
          <li>
            можете написать часть сами, а часть поручить профессионалам;
          </li>
          <li>
            заказ обойдется дешевле, если у вас уже есть план диссертации;
          </li>
          <li>
            если вы обращаетесь в компанию BeSmarter! заранее, то не переплачиваете за срочность;
          </li>
          <li>
            цена также определяется сложностью исследуемой тематики и предмета;
          </li>
          <li>
            наличие обязательной практической части делает заказ дороже.
          </li>
          <li>
            Чтобы заказать диссертацию по философии приходите к нам в офис по адресу: г. Москва, пер. Большой Кисловский, дом 1, стр. 2, офис 211
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
