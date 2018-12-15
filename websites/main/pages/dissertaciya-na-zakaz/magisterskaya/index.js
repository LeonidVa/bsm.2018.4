import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/magisterskaya'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfigMagisteskaya';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import Video from "components/common/VideoBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import MagisDis from "components/common/ServiceBlock/ready-made/MagisDis"


const page = () => (
  <Wrapper title="Магистерская диссертация – заказать в Москве и РФ, цена и сроки написания диплома магистра на заказ под ключ" description="Магистерская диссертация на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img2">



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
            <a>Магистерская</a>
          </Link>
        </div>
      </section>

        <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Диссертация</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/magisterskaya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Магистерская</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <MagisDis/>

<MatZashGirl/>


      <section className="block-text">
        <h1 className="block-text__title">
          Магистерская диссертация на заказ
        </h1>
        <p className="block-text__par">
          Написание дипломной работы – сложная задача. Тем более, если речь идет о магистерской диссертации. Собрать и обработать качественный и актуальный материал, а затем представить его в виде диссертационной работы — все это требует значительных усилий и временных затрат. Решение проблемы – диплом магистра на заказ. Это одна
          из услуг, профессионально оказываемых специалистами компании BeSmarter!.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/magisr.jpg')} altText="Магистерская диссертация на заказ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания магистерской диссертации под ключ
        </h2>
        <p className="block-text__par">
          Авторы нашей компании подготовят для вас качественную и уникальную работу с полным раскрытием заданной темы. В составе диплома будут хорошо структурированные и продуманные теоретический, аналитический и практический разделы. Это позволит вам проявить себя на защите с наилучшей стороны. К преимуществам нашего подхода
          относятся:
        </p>
        <ul>
          <li>
            Отличное качество написания магистерской диссертации на заказ, поскольку работу выполняют профессионалы с большим практическим опытом.
          </li>
          <li>
              Сопровождение заказа вплоть до успешной защиты. Если необходимо внести правки в диплом магистра, мы выполняем их бесплатно.
          </li>
          <li>
            Конфиденциальность. Неразглашение личных данных гарантировано.
          </li>
          <li>
            Консультационная поддержка.
          </li>
          <li>
            Доступная стоимость, с учетом бесплатных доработок и изменений.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Магистерская диссертация: на заказ или готовая?
        </h2>
        <p className="block-text__par">
            Решение заказать магистерскую диссертацию предусматривает тесное сотрудничество с научным руководителем проекта. Вначале вы согласовываете с ним план диплома, затем отдаете на проверку отдельные главы. Специалист нашей компании при необходимости вносит дополнения и правки. Простое скачивание и редактирование готовой работы из
          интернета связано с дополнительными рисками:
        </p>
        <ul>
          <li>
            Возможные грамматические ошибки и погрешности в расчетах.
          </li>
          <li>
            Работа не всегда соответствует требованиям ВУЗа в плане оформления.
          </li>
          <li>
            Отсутствие уникальности. Приобретение диплома в банке готовых заданий оправдано лишь в том случае, если вы сами решили работать над проектом. В такой ситуации готовая диссертация служит как основа для написания.
          </li>
        </ul>
      </section>

      <Video>
        <iframe src="https://www.youtube.com/embed/ajkrUquzqB4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит цена
        </h2>
        <p className="block-text__par">
          Сколько стоит написать магистерскую диссертацию на заказ в Москве? Стоимость выполнения работы зависит от степени сложности, выбранной темы и объема. Например, заказ диплома магистра по архитектуре с большим количеством графического материала имеет более высокую стоимость, чем диссертация по менеджменту или экономике. Влияет на цену и
          срочность выполнения задания.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как можно сэкономить
        </h2>
        <p className="block-text__par">
          Существует несколько способов заказать магистерскую диссертацию и сэкономить при этом деньги:
        </p>
        <ul>
          <li>
              Заявка на написание не всей работы, а лишь ее части. Это может быть расчетная, теоретическая или практическая часть.
          </li>
          <li>
              Оформление заказа на выполнение нескольких дипломов магистра (можно договориться с однокурсниками).
          </li>
          <li>
            Спецпредложения, акции со снижением цен. Это шанс получить качественную услугу по невысокой стоимости.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
          <iframe src="https://www.youtube.com/embed/jsAcoRW_Uno" frameBorder="0"
                  allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <p className="block-text__par">
          Написание дипломной работы магистра на заказ состоит из таких этапов:
        </p>
        <ul>
          <li>
            Согласование плана диссертации с научным руководителем.
          </li>
          <li>
            Частичная оплата работы. На этом этапе наши авторы начинают выполнять задание.
          </li>
          <li>
            После того, как часть проекта выполнена, вы оплачиваете его стоимость, и частично выполненное задание отправляется на вашу электронную почту.
          </li>
          <li>
            Все правки и дополнения в течение 2 месяцев вносятся бесплатно.
          </li>
        </ul>
        <p className="block-text__par">
            Оформите заказ на написание диплома магистра в BeSmarter!, и ваша защита пройдет блестяще!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
