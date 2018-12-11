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
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovayaNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota";


const page = () => (
  <Wrapper title="Заказать курсовую работу онлайн – курсовая работа на заказ в Москве | Купить курсовую работу срочно недорого в РФ – цены, сроки написания под ключ"
           description="Хотите качественно заказать курсовую работу в Москве? Только в BeSmarter! можно заказать курсовую работу онлайн, недорого и срочно, даже за 1 день. Не теряйте времени, оформляйте заказ курсовых работ прямо сейчас | Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img1">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Курсовая работа</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/kursovaya-rabota-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Курсовая работа</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать курсовую работу
        </h1>
        <p className="block-text__par">
          Многим студентам требуется помощь в написании курсовой работы. Чаще всего трудности возникают из-за недостатка времени.
        </p>
        <p className="block-text__par">
          Если вам срочно нужна курсовая, предлагаем воспользоваться услугами специалистов BeSmarter! Наша компания успешно работает в данной сфере более 10 лет. Мы можем срочно написать курсовую от 1 дня, вне зависимости от сложности темы.
        </p>
        <p className="block-text__par">
          Своевременность сдачи готовой работы гарантируется официальным договором, подписываемым на стадии предварительного собеседования. При этом у нас вы сможете срочно заказать курсовую работу без ущерба качеству. В случае необходимости мы будем вам сдавать на проверку каждую главу.
        </p>
        <p className="block-text__par" style={{fontStyle: 'italic'}}>
          Только в BeSmarter! можно заказать курсовую работу онлайн, недорого, срочно и качественно. Не теряйте времени!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kur-rab-na-zakaz.jpg')} altText="Заказать курсовую работу"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как купить курсовую работу на заказ недорого?
        </h2>
        <p className="block-text__par">
          На стоимость услуги влияют несколько объективных факторов.
        </p>
        <ul>
          <li>
            <b>Тема. </b>По гуманитарным дисциплинам можно достаточно недорого купить курсовую работу на заказ. Технические специальности стоят в среднем дороже. Кроме того, если вы решите написать курсовую на заказ, цена будет определяться сложностью конкретной темы. Здесь мы сможем помочь сэкономить. Чтобы заказать курсовую
            работу недорого, пришлите список доступных тем (если доступен выбор), и мы подберем самую «дешевую».
          </li>
          <li>
            <b>Сроки. </b>Заказ курсовой работы недорого возможен только при оптимальном количестве времени, доступном для ее выполнения. Если же сроки сокращаются до 1-2 суток, то нам приходится привлекать нескольких специалистов. Или предлагать им писать курсовые на заказ внеурочно. Это, разумеется, сказывается на расценках.
            Поэтому, чтобы заказать курсовую работу онлайн недорого, постарайтесь подать заявку как можно раньше.
          </li>
          <li>
            <b>Материалы. </b>При наличии готовых наработок можно оформить онлайн-заказ курсовой дешево. Ваши материалы сэкономят нам время, а вам – деньги.
          </li>
        </ul>
        <p className="block-text__par" style={{fontStyle: 'italic'}}>
          Следуйте этим советам, и сможете писать курсовые работы на заказ недорого!
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Хотите заказать курсовую работу онлайн или лично?
        </h2>
        <ol>
          <li>
            Сайт. Оформляется курсовая работа на заказ посредством заполнения <a href="#form">онлайн-заявки</a> (Москва и другие города).
          </li>
          <li>
            Телефон. Принимаются заявки на написание курсовых работ на заказ по бесплатному номеру (Москва и другие города).
          </li>
          <li>
            Визит. Лучший способ заказать курсовую работу в Москве – посетить наш уютный офис в центре столицы!
          </li>
        </ol>
        <p className="block-text__par" style={{fontStyle: 'italic'}}>
          Закажите курсовую работу сегодня – это быстро и удобно!
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
