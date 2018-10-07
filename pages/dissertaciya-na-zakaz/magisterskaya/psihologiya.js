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
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig';

import Video from 'components/common/VideoBlock';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Магистерская диссертация по психологии на заказ в Москве и РФ – цены, сроки написания под ключ" description="Магистерская диссертация по психологии на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать магистерскую диссертацию по психологии сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь написать написание"/>
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
          <Link href="/dissertaciya-na-zakaz/magisterskaya">
            <a>Магистерская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По психологии</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>

      <MessBlock/>

      <section className="block-service">
        <Link href="#form">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Магистерская диссертация</span>
              <p className="block-service__par">Быстро и качественно!</p>
              <p className="block-service__par">С нами твоя защита пройдет легко!</p>
              <p className="block-service__par">От 23 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <Link href="/dissertaciya-na-zakaz">
            <a className="block-service__list-item">
              <span className="block-service__list-title">Диссертация<br/>под ключ</span>
              <p>Берем заботы на себя</p>
            </a>
          </Link>
          <CardPopInfo
            url="/diplom-mba-na-zakaz"
            title="Консультация автора"
            text={[<p>Прямая связь</p>]}
          />

          <Link href="/dissertaciya-na-zakaz/magisterskaya">
            <a className="block-service__list-item">
              <span className="block-service__list-title">Сопровождение<br/>до защиты</span>
              <p>Надежно, спокойно</p>
            </a>
          </Link>
        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/dissertaciya-na-zakaz/doktorskaya">
            <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
              <div className="block-service__text gradient-l-black">
                <span className="block-service__title">Материалы для успешной защиты</span>
                <p className="block-service__par">Не парься сам – доверься нам!</p>
                <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                <p className="block-service__par">Доступные цены</p>
                <p className="block-service__par">Срочно от 2 часов</p>
              </div>
            </a>
          </Link>
          <div className="block-service__list list-4">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Пакет «Успешная Защита»"
              text={[<p>от 5 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Доклад"
              text={[<p>от 1 500 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Оригинальность текста"
              text={[<p>Во всех системах</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Ответы к защите"
              text={[<p>от 200 руб.</p>]}
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Мини-диплом Раскладка"
              text={[<p>от 2 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Получение по главам"
              text={[<p>Гибкие условия</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Аннотация Отзыв Рецензия"
              text={[<p>от 1 200 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Слайды"
              text={[<p>от 350 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Распечатка Переплеты"
              text={[<p>от 1 200 руб.</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Магистерская диссертация по психологии на заказ
        </h1>
        <p className="block-text__par">
          Каждый студент факультета психологии, вне зависимости от специальности, после долгих лет обучения должен сделать финальный шаг – написать и защитить магистерскую работу. Психология – очень тонкая наука, требующая, помимо хорошего знания теории и умения грамотно искать информацию, глубокого понимания человеческой психики,
          внутреннего мира и состояния. Так, дипломный проект часто становится для студентов настоящим камнем преткновения. Выбор темы, поиск информации, разработка практической части проекта и его оформление порой вызывают огромные сложности.
        </p>
        <p className="block-text__par">
          И дело не только в тонкостях непростой специальности, содержащей в себе множество дисциплин, но иногда и в простой занятости выпускников, особенно работающих, у которых зачастую просто нет времени на круглосуточный поиск необходимой информации. Кроме того, у всех по-разному складываются жизненные обстоятельства – у
          каждого человека может быть сложный период, много работы, вопросы личного характера. Всё это не способствует хорошей подготовке и работе над диссертацией. Вполне возможно, что именно в такой непростой ситуации и потребуется дополнительная помощь профессионалов BeSmarter!, способных максимально упростить и организовать
          работу над магистерской диссертацией.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/magi-psih.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Стоимость услуги
        </h2>
        <p className="block-text__par">
          Цена на написание магистерской диссертации по психологии в BeSmarter! начинается от 25 000 рублей и может варьироваться в зависимости от темы диссертации и сроков выполнения. Звоните: +7 (495) 772-40-90 или <br/>+7 (495) 772-90-40.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания в BeSmarter!
        </h2>
        <p className="block-text__par">
          Очень часто студенты-выпускники, не имея возможности написать магистерскую диссертацию лично из-за загруженности, отсутствия правильной организации процесса или даже нехватки необходимой подготовки, предпочитают покупать готовую работу. Это, возможно, сэкономит время и совсем не потребует никаких усилий, однако готовая
          магистерская работа – не самый лучший вариант. Прежде всего, в таком случае студент не принимает участия в работе над проектом, что очень сильно усложняет его последующую защиту. Кроме того, написание магистерской работы может быть понятным и интересным и в дальнейшем стимулировать на создание собственных разработок в
          данной теме, а правильный подход к поиску информации существенно увеличит запас знаний в родной специальности.
        </p>
        <p className="block-text__par">
          Именно поэтому лучше прибегнуть к услугам написания диссертации на заказ у специалистов, которые помогут написать работу, а не выполнят ее вместо заказчика. Компания BeSmarter! предлагает услугу написания магистерской диссертации по психологии на заказ, гарантируя целый ряд преимуществ:
        </p>
        <ul>
          <li>
            высокое качество – работы создаются преподавателями ВУЗов с наличием кандидатской степени и огромным опытом работы. На каждом этапе написания проекта осуществляется контроль качества выполнения;
          </li>
          <li>
            оригинальность работы – все диссертации пишутся с нуля, без опоры на готовые проекты из сети. Специалисты компании гарантируют уникальность текста от 80 до 98% по Антиплагиату в зависимости от тематики;
          </li>
          <li>
            пунктуальность и быстрые сроки написания – оптимальный срок выполнения заказа составляет от 5 дней, но даже если по какой-то причине работа над диссертацией была отложена вами в очень долгий ящик, и на выполнение остался всего 1 день, все будет выполнено в срок на самом высоком уровне;
          </li>
          <li>
            сопровождение вплоть до защиты – услуги компании не ограничиваются одним только написанием диссертации, заказчик получает полную поддержку в подготовке презентации проекта и доклада. При необходимости авторы ответят на все интересующие вопросы и подготовят к защите теоретической части;
          </li>
          <li>
            официальный договор – сотрудничество проходит на официальном уровне, с заключением договора и соблюдением прав обеих сторон. Договор гарантирует высокое качество работы, пунктуальность и полную конфиденциальность, что очень важно для тех, кто решит продолжить академическое образование.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="//vk.com/video_ext.php?oid=372065572&id=456239032&hash=e0751038dfbca771&hd=2" frameBorder="0" allowfullscreen></iframe>
      </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
