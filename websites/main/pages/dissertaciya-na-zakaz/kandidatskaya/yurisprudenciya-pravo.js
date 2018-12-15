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
import infoBlockConfig from 'data/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig'

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import disKanYuri from "data/linksBlock/disKanYuri";


import disser from "data/linksBlock/disser";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDisForm from "components/common/ServiceBlock/ready-made/KandidatDisForm";



const page = () => (
  <Wrapper title="Кандидатская диссертация по праву – заказать в Москве и РФ, цены, сроки написания под ключ" description="Кандидатская диссертация по праву на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz">
            <a>Диссертация</a>
          </Link>
          <span> / </span>
          <Link href="/dissertaciya-na-zakaz/kandidatskaya">
            <a>Кандидатская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>По юриспруденции</a>
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
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/kandidatskaya">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Кандидатская</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/dissertaciya-na-zakaz/kandidatskaya/yurisprudenciya-pravo">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По юриспруденция</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "4"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

        <KandidatDisForm/>

        <DoctorskayaDis/>

      <section className="block-text">
        <h1 className="block-text__title">
          Кандидатская диссертация по праву на заказ
        </h1>
        <p className="block-text__par">
          Успешная защита кандидатской диссертации в области права требует значительных усилий. Важно, чтобы подготовленный научный труд соответствовал требованиям ВАК, а тема была актуальной и пригодной для практического применения. От этого во многом зависит успешность защиты. Заказать кандидатскую диссертацию по праву – один из
          лучших способов решения этого вопроса.
        </p>
        <p className="block-text__par">
          Реалии современного общества таковы, что в нормативные акты часто вносятся дополнения и изменения. Поэтому необходимо написать диссертационную работу в как можно более короткие сроки. Для специалиста с плотным рабочим графиком это непростая задача. Разумный выход в подобной ситуации – заказать написание кандидатской
          диссертации в проверенной компании. Компания BeSmarter! предлагает свои услуги по подготовке подобных работ. Вы получите результат под ключ с учетом всех требований ВАК.
        </p>
        <p className="block-text__par">
          К выполнению кандидатской диссертации по праву будут привлечены высококвалифицированные специалисты с учеными степенями в области юриспруденции. Вы можете заказать как написание всей работы полностью, так и часть научного труда, по собственному выбору. Заказ будет выполнен строго в оговоренный срок за разумную сумму.
        </p>
      </section>

      <FormEstimate/>

      <MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/kand-uri.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Преимущества написания диссертации
        </h2>
        <ul>
          <li>
            Профессиональное выполнение заказа. К вашим услугам – квалифицированные специалисты со значительным практическим опытом.
          </li>
          <li>
            Сопровождение работы до защиты. Автор выполнит все правки, изменения и (или) дополнения к вашей работе.
          </li>
          <li>
            Конфиденциальность. Вам не следует беспокоиться, что сведения о вас будут разглашены.
          </li>
          <li>
            Умеренная стоимость.
          </li>
        </ul>
        <p className="block-text__par">
          Возможно, покупка готового диссертационного труда в интернете стоит несколько дешевле, но заказать кандидатскую диссертацию по вопросам права значительно безопаснее. Вы утверждаете план работы, а затем, по мере подготовки, выполняете согласование отдельных глав. Возможно также написание всей работы под ключ. Вы сможете
          заранее сказать научному руководителю, над какими вопросами вам предстоит работать. Таким образом, вы сотрудничаете с научным руководителем, он указывает на возможные недочеты, а мы их оперативно исправляем.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          От чего зависит стоимость
        </h2>
        <p className="block-text__par">
          Цена написания кандидатской в области права зависит от объема работы и сложности выбранной темы. Кроме того, наши специалисты выполняют срочные задания. Естественно, это стоит дороже.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Есть ли возможность сэкономить?
        </h2>
        <p className="block-text__par">
          Чтобы заказ обошелся в меньшую сумму, вы можете заказать частичное написание диссертации. Кроме того, мы предлагаем воспользоваться актуальными спецпредложениями компании. В итоге вы получаете возможность заказа не только качественной, но и по-настоящему недорогой работы.
        </p>
      </section>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества с BeSmarter!
        </h2>
        <p className="block-text__par">
          Написание на заказ состоит из таких этапов:
        </p>
        <ul>
          <li>
            Согласование плана кандидатской диссертации по праву с научным руководителем.
          </li>
          <li>
            Внесения аванса. На этом этапе наши специалисты начинают выполнять задание.
          </li>
          <li>
            После того как часть проекта подготовлена, вы оплачиваете его стоимость. Затем частично выполненное задание отправляется на вашу электронную почту, а мы переходим к завершению работы.
          </li>
          <li>
            Все правки и дополнения в течение гарантийного срока вносятся бесплатно.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disKanYuri}/>
    </div>
  </Wrapper>
);


export default page
