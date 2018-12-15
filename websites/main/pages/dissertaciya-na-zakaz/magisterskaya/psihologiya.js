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

import Video from 'components/common/VideoBlock';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import MagisDisGdeZakazat from "components/common/ServiceBlock/ready-made/MagisDisGdeZakazat"


const page = () => (
  <Wrapper title="Магистерская диссертация по психологии на заказ в Москве и РФ – цены, сроки написания под ключ" description="Магистерская диссертация по психологии на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
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
          <Link href="/dissertaciya-na-zakaz/magisterskaya">
            <a>Магистерская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По психологии</a>
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
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/magisterskaya/psihologiya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По психологии</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "4"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>

      <MessBlock/>

        <MagisDisGdeZakazat/>

<MatZashGirl/>

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

      <ImageBlock imageSrc={require('static/images/block/magi-psih.jpg')} altText="Магистерская диссертация по психологии на заказ"/>

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

      <CurrentOfferH2/>

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
            <iframe src="https://www.youtube.com/embed/jsAcoRW_Uno" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
