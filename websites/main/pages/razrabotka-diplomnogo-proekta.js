import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'
import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplomnyproekt'
import CurrentOffer from 'components/content/offers/CurrentOffer';
import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';
import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/dipRazrab';
import VideoBlock from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import DipProekt from "components/common/ServiceBlock/ready-made/DipProekt"


const page = () => (
  <Wrapper title="Разработка и написание дипломного проекта в Москве и РФ – цены, сроки написания под ключ" description="Разработка и написание дипломного проекта. Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img5">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/razrabotka-diplomnogo-proekta">
            <a>Дипломный проект</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/razrabotka-diplomnogo-proekta">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Дипломный проект</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <DipProekt/>

      <MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">Разработка и написание дипломного проекта</h1>
        <p className="block-text__par">
          Вы можете заказать дипломный проект в BeSmarter!, чтобы сэкономить время и нервы, и, конечно же, успешно защититься. К нам обращаются в таких ситуациях:
        </p>
        <ul>
          <li>
            нет возможности структурировать имеющуюся информацию из-за нехватки времени;
          </li>
          <li>
            работа написана лишь частично;
          </li>
          <li>
            нет возможности завершить проект из-за болезни, декрета, беременности;
          </li>
          <li>
            не получается посвятить время исследованиям и практической части.
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/dip-proekt.jpg')} altText="Разработка и написание дипломного проекта"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества выполнения под заказ
        </h2>
        <p className="block-text__par">
          Поскольку разработка дипломного проекта всегда начинается с подготовки плана, то при сотрудничестве с BeSmarter! под ключ вы получите действительно уникальный материал, а не частично скопированный из сети. Есть и другие преимущества:
        </p>
        <ol>
          <li>
            Вы можете указать те источники, которые необходимо исследовать более тщательно. Например, если на них как раз указал ваш научный руководитель.
          </li>
          <li>
            Гарантирована научная новизна. Наши авторы используют только проверенные и актуальные данные. С вами не случится ситуация, когда во время защиты члены комиссии укажут на неуникальность работы.
          </li>
          <li>
            Структурированная и понятная форма подачи материала. Вам не потребуется слишком много времени для того, чтобы все изучить, поэтому и защититься на «отлично» более чем реально.
          </li>
        </ol>
        <p className="block-text__par">
          Почему лучше заказывать написание, а не совершать покупку готового материала? Мы гарантируем вам уникальность и актуальность подготовленного проекта. Кроме того, есть возможность договориться о внесении бесплатных правок и уточнений.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что входит в стоимость
        </h2>
        <p className="block-text__par">
          Цена обговаривается индивидуально по каждому заказу, однако типичный набор услуг включает в себя:
        </p>
        <ul>
          <li>
            Проработку источников.
          </li>
          <li>
            Написание материала по главам, структурирование контента.
          </li>
          <li>
            Вычитка и внесение правок.
          </li>
          <li>
            Оформление и верстка по критериям ГОСТа.
          </li>
          <li>
            Проверка системой «Антиплагиат».
          </li>
          <li>
            Сдача в оговоренный срок.
          </li>
        </ul>
        <p className="block-text__par">
          Если есть необходимость, то техническая документация для дипломной работы прорабатывается отдельно.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Факторы, от которых зависит цена
        </h2>
        <p className="block-text__par">
          Стоимость зависит от:
        </p>
        <ol>
          <li>
            Срочности заказа.
          </li>
          <li>
            Необходимой глубины исследований, которые должны присутствовать в материале.
          </li>
          <li>
            Сложности и обширности тематики вопроса.
          </li>
          <li>
            Объема.
          </li>
        </ol>
        <p className="block-text__par">
          Также нужно понимать, что технический дипломный проект, как правило, будет стоить дороже, ведь в нем обязательно должны быть чертежи и схемы.
        </p>
      </section>

      <VideoBlock>
          <iframe src="https://www.youtube.com/embed/vlRE-nF5CRo" frameBorder="0"
              allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </VideoBlock>

      <section className="block-text">
        <h2 className="block-text__title">
          Хотите сэкономить?
        </h2>
        <ul>
          <li>
            Вы можете оплатить только практическую или теоретическую часть, а также какую-то отдельную (непроработанную) главу / раздел.
          </li>
          <li>
            Если дедлайны не горят, то цена на выполнение дипломного проекта будет не такой высокой.
          </li>
          <li>
            Исследования по гуманитарным направлениям всегда стоят дешевле, чем заказы по техническим дисциплинам (а также по информатике, лингвистике).
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <VideoBlock>
        <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameBorder="0" allowFullScreen></iframe>
      </VideoBlock>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <ul>
          <li>
            Позвоните по телефону <span className="tel">+7 (495) 772-40-90</span>, <span className="tel">+7 (495) 772-90-40</span> или заполните заявку на сайте.
          </li>
          <li>
            С вами будут согласованы все детали и нюансы, включая стоимость дипломного проекта. Вы можете заказать написание целиком или по главам. Мы рекомендуем первый вариант, ведь когда на руках имеется вся работа полностью, можно без проблем и переживаний отвечать на любые вопросы научного руководителя.
          </li>
          <li>
            Внесите предоплату, чтобы задание поступило в работу авторам BeSmarter!
          </li>
        </ul>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
