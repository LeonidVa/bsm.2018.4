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

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

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

const page = () => (
  <Wrapper title="«Cкорая помощь» студенту | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="С каждым годом все больше и больше студентов пользуются услугой диплом на заказ, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда бывают довольно суровы.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/stati">
            <a>Статьи</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>«Cкорая помощь» студенту</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Статьи</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati/skoraya-pomoshch-studentu">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">«Cкорая помощь» студенту</span></a>
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
          Диплом на заказ – «скорая помощь» студенту
        </h1>
        <p className="block-text__par">
          С каждым годом все больше и больше студентов пользуются услугой <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда
          бывают довольно суровы.
        </p>
        <p className="block-text__par">
          Сложно найти студентов, которые никогда не работали за время учебы, а многие к последнему году обучения уже успевают найти хорошее место работы, где планируют остаться и после получения диплома. Большинство работодателей с большой неохотой отпускают своих сотрудников в учебный отпуск, а если и отпускают, то не всегда
          оплачивают. На новом месте работы каждый хочет проявить себя по максимуму, именно поэтому, многие студенты даже и не упоминают в своей компании, что им нужно несколько дней, чтобы посетить хотя бы несколько занятий в вузе. Оказавшись в такой ситуации, весьма проблематично заниматься написанием диплома, ведь это большая и
          сложная работа, требующая много времени и внимания.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/20.jpeg')} altText="Диплом на заказ – «скорая помощь» студенту"/>

      <section className="block-text">
        <p className="block-text__par">
          Может быть, писать диплом после работы – по ночам? Конечно, можно делать и так, но только возникает вопрос: а когда же спать? Современные технологии еще не дошли до такого уровня, чтобы человек мог бодрствовать целыми сутками и при этом оставаться в тонусе. Не забывайте еще и о том, что помимо самой работы за компьютером
          (то есть процесса непосредственной печати дипломной работы), нужно также регулярно ездить к научному руководителю, в библиотеки, собирать практический материал…
        </p>
        <p className="block-text__par">
          Все вышеперечисленные факторы в своей совокупности, вроде бы, ставят студента перед выбором: что важнее – работа и получение диплома? Работа, как говорится, не волк… Но кому хочется отказываться от хорошей работы и, тем более, зарплаты? Ведь после окончания вуза можно еще долгое время ходить по собеседованиям со своим уже
          полученным дипломом в поисках работы. Чтобы избежать такой неприятной ситуации, можно просто <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>
        </p>
        <p className="block-text__par">
          Наверняка, каждый слышал о предоставлении таких услуг, ведь интернет буквально пестрит объявлениями с подобными предложениями. Перед тем, как остановить свой выбор на той или иной фирме, почитайте отзывы клиентов на сайте фирмы, которые уже пользовались такими услугами, также стоит обратить внимание на то, сколько лет
          компания занимается данной деятельностью, есть ли у нее офис, куда можно приехать для заключения письменного договора. И будьте внимательны: многие фирмы предлагают купить уже готовый диплом или, что еще хуже, продают уже готовые корочки! Чтобы не попасть на удочку недобросовестных компаний, будьте предельно внимательны
          и, прежде чем оформлять свой заказ, выясните абсолютно все подробности работы у менеджеров фирмы.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
