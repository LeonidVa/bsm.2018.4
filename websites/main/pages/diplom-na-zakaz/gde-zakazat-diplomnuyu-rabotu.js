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
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplom';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"

const page = () => (
  <Wrapper title="Где заказать дипломную работу – лучше заказать дипломную работу в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Ищите, где заказать лучше дипломную работу на выгодных условиях? Конечно в BeSmarter! – это единственный ресурс, где можно заказать дипломную работу и быть уверенным в отличном качестве! Звоните Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/diplom-na-zakaz">
            <a>Дипломная работа</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Где заказать</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Дипломная работа</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz/gde-zakazat-diplomnuyu-rabotu">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Где заказать</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <Diplom/>

     <MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Где заказать дипломную работу
        </h1>
        <p className="block-text__par">
          Где заказать дипломную работу? Каждый год данный вопрос ставят перед собой тысячи студентов вузов. И вовсе не потому, что в России низкий уровень образования – просто времени на подготовку диплома критически не хватает.
        </p>
        <p className="block-text__par">
          Ведь параллельно нужно ходить на пары, сдавать экзамены, проходить практику, а кто-то еще и подрабатывает. И при этом должно еще остаться время на личную жизнь.
        </p>
        <p className="block-text__par">
          С другой стороны, заказать диплом где угодно – это прямой путь к провалу на защите. Именно поэтому не стоит в целях ложной экономии пользоваться услугами многочисленных фрилансеров, предлагающих написать работу «за 3 копейки». Это почти гарантированно будет плагиат с рерайтом текстов из интернета, что всплывет на
          проверке.
        </p>
        <p className="block-text__par">
          В таком случае, назревает вопрос: где лучше заказать дипломную работу?
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/gde-zak-dip-rabotu.jpg')} altText="Где заказать дипломную работу"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Где заказать дипломную работу
        </h2>
        <p className="block-text__par">
          Наша компания занимается написанием научных трудов на профессиональной основе. Мы принципиально не сотрудничаем с фрилансерами и прочими копирайтерами, а исключительно с действующими преподавателями вузов, имеющими кандидатскую научную степень.
        </p>
        <p className="block-text__par">
          BeSmarter! – это единственный ресурс, где можно заказать дипломную работу и быть уверенным в отличном качестве!
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Наши преимущества:
        </h2>
        <ul>
          <li>
            качество – каждый диплом проходит двойную проверку в отделе контроля;
          </li>
          <li>
            оперативность – мы можем выполнить работу срочно от 1 дня (но при этом качественно);
          </li>
          <li>
            универсальность – любые специальности и темы, от гуманитарных до технических;
          </li>
          <li>
            конфиденциальность – все аспекты нашего сотрудничества останутся между нами;
          </li>
          <li>
            ответственность – мы сопровождаем и консультируем вас вплоть до успешной защиты;
          </li>
          <li>
            доступность – где купить дипломную работу высокого качества недорого? Ответ очевиден – в BeSmarter!
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <ol>
          <li>
            Заявка. Вы оформляете заявку на диплом под заказ одним из указанных ниже способов. Проводится собеседование, и мы заключаем с вами официальный договор.
          </li>
          <li>
            Выполнение. После 50% предоплаты наш автор пишет дипломную работу и по главам сдает ее вам на проверку. В случае необходимости вносятся бесплатные правки.
          </li>
          <li>
            Результат. В согласованные сроки вы получаете хороший, уникальный диплом. Автор поможет вам подготовиться к успешной защите.
          </li>
        </ol>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Оформляем заявку (Москва и другие города России)
        </h2>
        <ul style={{listStyle: 'none'}}>
          <li>
            Поздравляем, вы уже нашли, где лучше заказать диплом. Осталось лишь выбрать удобный способ связи.
          </li>
          <li>
            сайт – заполните онлайн-форму и дождитесь ответа нашего менеджера;
          </li>
          <li>
            телефон – позвоните нам по телефону +7 495 772-4090;
          </li>
          <li>визит – наш адрес офиса в Москве – Большой Кисловский переулок, д. 1 стр. 2, офис 211.</li>
        </ul>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
