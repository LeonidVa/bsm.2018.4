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
import infoBlockConfig from 'data/infoBlock/disser-doc'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig'
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis1 from "components/common/ServiceBlock/ready-made/DoctorskayaDis1";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";

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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Докторская</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya/medicina">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По медицине</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "4"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <DoctorskayaDis1/>

        <KandidatDis/>



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

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/doc-med2.jpg')} altText="Докторская диссертация по медицине"/>

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

      <CurrentOfferH2/>

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

      <ImageBlock imageSrc={require('static/images/block/doc-med.jpg')} altText="Докторская диссертация по медицине на заказ"/>

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
