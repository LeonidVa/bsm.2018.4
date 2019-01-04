import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/disser';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlockConfig';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import disKandSkolko from "data/linksBlock/disKandSkolko";


import disser from "data/linksBlock/disser";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"

const page = () => (
  <Wrapper title="Сколько стоит кандидатская диссертация – цена кандидатской диссертации от 150 000 рублей | Закажите кандидатскую диссертацию по выгодной стоимости, в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Хотите узнать, сколько стоит кандидатская диссертация? Позвоните нам по тел. +7 (495) 772-40-90, и мы вам скажем, сколько стоит написать кандидатскую диссертацию в компании «BeSmarter!».">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



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
          <Link href="/dissertaciya-na-zakaz/kandidatskaya">
            <a>Кандидатская</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Стоимость</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/kandidatskaya" name="Кандидатская" position="3" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/kandidatskaya/skolko-stoit" name="Стоимость" position="4" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>


      <TextBlock>
        <h1 className="title">
          Сколько стоит кандидатская диссертация
        </h1>
        <p className="par">
          Качественно написанная кандидатская диссертация – цена успеха на защите и шанс обеспечить безоблачное профессиональное будущее молодого ученого. К сожалению, далеко не всегда долгие месяцы кропотливой работы приводят к ожидаемому результату. Не каждый аспирант владеет соответствующими навыками для написания оригинальной и
          актуальной работы.
        </p>
        <p className="par">
          Иногда бывает проще купить кандидатскую диссертацию – цена ее будет намного меньше в сравнении со стоимостью напрасно потерянного времени, нервов и сил. Квалифицированную помощь в написании работы вы сможете получить в компании BeSmarter! Мы сделаем все качественно и недорого, просто доверьтесь нам!
        </p>
      </TextBlock>

      <FormEstimate/>

      <MatZashDisser/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/kandidatskie2.jpg')}/>

      <TextBlock>
        <h2 className="title">
          Какова цена кандидатской диссертации?
        </h2>
        <p className="par">
          Мы понимаем, что вас в первую очередь интересует, сколько стоит написать кандидатскую диссертацию. Ее цена обуславливается следующими факторами.
        </p>
        <ul>
          <li>
            <b>Сложность темы.</b> Написание работ по гуманитарным дисциплинам оценивается значительно дешевле в сравнении с тем, сколько стоит кандидатская диссертация по техническим специальностям. Это связано с более высокой трудоемкостью последних.
          </li>
          <li>
            <b>Требования.</b> Стоимость написания кандидатской диссертации пропорционально зависит от ее фактического объема. Также влияние оказывают специфические требования, например, 100% уникальность текста или нестандартное оформление.
          </li>
          <li>
            <b>Оперативность.</b> Если вам нужно срочно написать кандидатскую диссертацию, стоимость ее будет тем выше, чем ближе день защиты. Желаете сэкономить – оформите свой заказ как можно раньше!
          </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Алгоритм сотрудничества
        </h2>
        <p className="par">
          На первом этапе вы выбираете удобный для себя способ связи и оформляете заявку. Далее наши менеджеры проводят с вами собеседования и подписывают официальный договор. Данный документ фиксирует все детали – день, когда должна быть сдана кандидатская диссертация на заказ, цена услуги, исполнитель, ваши требования к работе и
          так далее.
        </p>
        <p className="par">
          Следующий этап – написание. После 50% предоплаты утвержденный ваш автор пишет диссертацию и по главам сдает ее вам на согласование. В случае необходимости вносятся бесплатные правки. После полной оплаты и приемки работы исполнитель помогает вам подготовиться к успешной защите.
        </p>
        <p className="par italic center">
          Теперь вам известен алгоритм, осталось позвонить нашим менеджерам!
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Как узнать точную стоимость кандидатской диссертации?
        </h2>
        <p className="par">
          Это можно сделать любым из трех способов:
        </p>
        <ul>
          <li>
            заполнив <b><a href="#form">форму</a></b> на сайте;
          </li>
          <li>
            позвонив по номеру +7 (495) 772-4090;
          </li>
          <li>
            После написания диссертации – оплата полной стоимости заказа.
          </li>
          <li>
            посетив <b><Link href="/contacts"><a>нас</a></Link></b> по адресу: Москва, пер. Большой Кисловский, д. 1, стр. 2, офис 211.
          </li>
        </ul>
        <p className="par">
          Не теряйте времени – сделайте свой заказ прямо сейчас и избавьте себя от лишних проблем.
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disKandSkolko}/>

    </PageWrapper>
  </Wrapper>
);


export default page
