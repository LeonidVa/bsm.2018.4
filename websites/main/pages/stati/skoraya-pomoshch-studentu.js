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
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/stati/skorayaPomosh'

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";

const page = () => (
  <Wrapper title="«Cкорая помощь» студенту | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="С каждым годом все больше и больше студентов пользуются услугой диплом на заказ, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда бывают довольно суровы.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'«Cкорая помощь» студенту'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/skoraya-pomoshch-studentu" name="«Cкорая помощь» студенту" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <Diplom/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Диплом на заказ – «скорая помощь» студенту
        </h1>
        <p className="par">
          С каждым годом все больше и больше студентов пользуются услугой <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда
          бывают довольно суровы.
        </p>
        <p className="par">
          Сложно найти студентов, которые никогда не работали за время учебы, а многие к последнему году обучения уже успевают найти хорошее место работы, где планируют остаться и после получения диплома. Большинство работодателей с большой неохотой отпускают своих сотрудников в учебный отпуск, а если и отпускают, то не всегда
          оплачивают. На новом месте работы каждый хочет проявить себя по максимуму, именно поэтому, многие студенты даже и не упоминают в своей компании, что им нужно несколько дней, чтобы посетить хотя бы несколько занятий в вузе. Оказавшись в такой ситуации, весьма проблематично заниматься написанием диплома, ведь это большая и
          сложная работа, требующая много времени и внимания.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/20.jpeg')} altText="Диплом на заказ – «скорая помощь» студенту"/>

      <TextBlock>
        <p className="par">
          Может быть, писать диплом после работы – по ночам? Конечно, можно делать и так, но только возникает вопрос: а когда же спать? Современные технологии еще не дошли до такого уровня, чтобы человек мог бодрствовать целыми сутками и при этом оставаться в тонусе. Не забывайте еще и о том, что помимо самой работы за компьютером
          (то есть процесса непосредственной печати дипломной работы), нужно также регулярно ездить к научному руководителю, в библиотеки, собирать практический материал…
        </p>
        <p className="par">
          Все вышеперечисленные факторы в своей совокупности, вроде бы, ставят студента перед выбором: что важнее – работа и получение диплома? Работа, как говорится, не волк… Но кому хочется отказываться от хорошей работы и, тем более, зарплаты? Ведь после окончания вуза можно еще долгое время ходить по собеседованиям со своим уже
          полученным дипломом в поисках работы. Чтобы избежать такой неприятной ситуации, можно просто <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>
        </p>
        <p className="par">
          Наверняка, каждый слышал о предоставлении таких услуг, ведь интернет буквально пестрит объявлениями с подобными предложениями. Перед тем, как остановить свой выбор на той или иной фирме, почитайте отзывы клиентов на сайте фирмы, которые уже пользовались такими услугами, также стоит обратить внимание на то, сколько лет
          компания занимается данной деятельностью, есть ли у нее офис, куда можно приехать для заключения письменного договора. И будьте внимательны: многие фирмы предлагают купить уже готовый диплом или, что еще хуже, продают уже готовые корочки! Чтобы не попасть на удочку недобросовестных компаний, будьте предельно внимательны
          и, прежде чем оформлять свой заказ, выясните абсолютно все подробности работы у менеджеров фирмы.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
