import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser-doc'

import CurrentOffer from 'components/content/offers/CurrentOffer';

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
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";

const page = () => (
  <Wrapper title="Докторская диссертация по медицине на заказ в Москве и РФ – цены, сроки написания под ключ" description="Докторские диссертации по медицине на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img4">

        <Breadcrumbs links={[
        {url:'/', text:'Главная'},
        {url:'/dissertaciya-na-zakaz', text:'Диссертация'},
        {url:'/dissertaciya-na-zakaz/doktorskaya', text:'Докторская'},
        {url:'#', text:'По медицине'},
    ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya" name="Докторская" position="3" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/doktorskaya/medicina" name="По медицине" position="4" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <DoctorskayaDis1/>

        <KandidatDis/>



      <TextBlock>
        <h1 className="title">
          Докторские диссертации по медицине
        </h1>
        <p className="par">
          Для присвоения ученой степени по медицинской специальности в России необходимо выполнить квалификационную работу – докторскую диссертацию по медицине. В основу научного труда закладываются разработки соискателя, эксперименты, новшества, аналитика уже известных сведений по теме исследования.
        </p>
        <p className="par">
          Для написания диссертации нужны время, знания и опыт. И здесь могут возникнуть проблемы, особенно это касается свободного времени. Если его катастрофически не хватает, то написание докторской диссертации по медицине нужно доверить профессионалам. Компания BeSmarter! решит ваши проблемы за короткий срок. Над подготовкой
          исследования будет работать штат опытных авторов.
        </p>
      </TextBlock>

      <FormEstimate/>

      <MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/doc-med2.jpg')} altText="Докторская диссертация по медицине"/>

      <TextBlock>
        <h2 className="title">
          Преимущества написания в BeSmarter!
        </h2>
        <p className="par">
          Заказ докторской диссертации по медицине – это правильный и оптимальный шаг для соискателей ученой степени. У написания научного труда специалистами есть масса преимуществ:
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
        <p className="par">
          Наши исполнители имеют большой опыт в сфере написания докторских работ, дипломных и других проектов. Авторы знают тонкости оформления и все секреты успешной защиты.
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Почему лучше заказать работу, а не купить готовую?
        </h2>
        <p className="par">
          Покупка готовой докторской диссертации для соискателя ученой степени по медицине грозит обернуться неудачей по нескольким причинам:
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
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          От чего зависит цена
        </h2>
        <p className="par">
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
        <p className="par">
          Если вы сами составили план, начали выполнять введение или основные главы, и требуется только доработка, то цена снижается. Стоимость докторских диссертаций по медицине в BeSmarter! определяется индивидуально, исходя из тонкостей выполнения задания.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/doc-med.jpg')} altText="Докторская диссертация по медицине на заказ"/>

      <TextBlock>
        <h2 className="title">
          Как можно сэкономить?
        </h2>
        <p className="par">
          Снизить затраты на докторскую диссертацию можно следующим образом:
        </p>
        <ul>
          <li>
            Выполните часть работы по медицине самостоятельно.
          </li>
          <li>
            Обратитесь за помощью к профессионалам заранее.
          </li>
          <li>
            Согласуйте с руководителем конечный вариант плана докторской, чтобы избежать доработок впоследствии.
          </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Этапы сотрудничества
        </h2>
        <p className="par">
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
        <p className="par">
          Чтобы сделать докторскую диссертацию по медицине, свяжитесь с нами по телефону в Москве +7 (495) 772-90-40 или через форму онлайн-заказа на сайте. Компания BeSmarter! заключает официальный договор с клиентами и гарантирует успешную сдачу работы.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      {/* <LinksBlock links={links}/> */}
    </PageWrapper>
  </Wrapper>
);


export default page
