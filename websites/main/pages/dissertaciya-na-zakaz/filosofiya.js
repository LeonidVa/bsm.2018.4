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
import infoBlockConfig from 'data/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disserNew from 'data/linksBlock/disserNew';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashDisser from "components/common/ServiceBlock/ready-made/MatZashDisser";
import DoctorskayaDis from "components/common/ServiceBlock/ready-made/DoctorskayaDis";
import KandidatDis from "components/common/ServiceBlock/ready-made/KandidatDis";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"

const page = () => (
  <Wrapper title="Диссертация по философии на заказ в Москве и РФ – цены, сроки написания под ключ" description="Диссертация по философии на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img2">


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
          <Link href="#">
            <a>По философии</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz" name="Диссертация" position="2" />
            <ItemListElement url="https://besmarter.ru/dissertaciya-na-zakaz/filosofiya" name="По философии" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KandidatDis/>

        <DoctorskayaDis/>

      <TextBlock>
        <h1 className="title">
          Диссертация по философии
        </h1>
        <p className="par">
          В каких случаях обращаются к нам за помощью с написанием работы? Вы можете заказать диссертацию по философии в компании BeSmarter!, если не успеваете со сроками. Обычно приходится жертвовать либо учебой, либо работой, а распределить время между двумя этими занятиями не получается. В этом случае мы поможем собрать и
          структурировать материал так, что клиент успешно пройдет защиту. Чаще всего заказывают диссертацию, если:
        </p>
        <ul>
          <li>
            работа сделана, но не оформлена;
          </li>
          <li>
            написана только вводная часть;
          </li>
          <li>
            готовы к защите только отдельные части диссертации.
          </li>
        </ul>
      </TextBlock>

      <FormEstimate/>

<MatZashDisser/>


      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <ImageBlock imageSrc={require('static/images/block/dis-eko.jpg')}/>

      <TextBlock>
        <h2 className="title">
          В чем преимущества написания на заказ?
        </h2>
        <p className="par">
          Итак, вы можете заказать диссертацию по философии абсолютно анонимно, что гарантирует сохранность репутации. Есть и другие выгоды и преимущества:
        </p>
        <ul>
          <li>
            каждая работа пишется под ключ, а потому исключены инциденты с копированием чужой интеллектуальной собственности;
          </li>
          <li>
            есть возможность написать как сразу всю работу целиком, так и работать по главам;
          </li>
          <li>
            вы гарантированно получаете работу в срок и не переживаете из-за времени! Написание под заказ всегда сопровождается консультацией личного менеджера.
          </li>
        </ul>
        <p className="par">
          Почему лучше не покупать готовую работу? Если вы делаете заказ в BeSmarter!, то исследование пишется под ключ. Вы можете заказать диссертацию, дипломную, курсовую по философии без опасения, что вам продадут частично или полностью скопированный материал.
        </p>
        <p className="par">
          Также заказ под ключ позволяет учитывать рекомендации, правки и требования научного руководителя. Естественно, полной степени соответствия его пожеланиям невозможно добиться, если покупать готовый материал.
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Этапы сотрудничества с BeSmarter!
        </h2>
        <p className="par">
          Вы заполняете форму заявки на сайте, указывая исходные данные. Все детали обсуждаются лично с менеджером компании, после чего подписывается договор на оказание услуг. Вы также можете просто позвонить по телефону <br/>+7 (495) 772-40-90 или <span className="tel1">+7 (495) 772-90-40</span>, чтобы сэкономить время на
          заполнение онлайн-анкеты.
        </p>
        <p className="par">
          Можно договориться как о выполнении всего заказа полностью, так и о написании частями.
        </p>
        <p className="par">
          Лучше всего, конечно, сразу иметь на руках полностью готовый и оформленный по ГОСТ материал, ведь так вы всегда сможете ответить на вопросы научного руководителя.
        </p>
        <p className="par">
          Если вас интересует заказ диссертации по философии, обращайтесь к нам – мы гарантированно поможем с выполнением всех заданий, а также сэкономим вам массу времени. Агентство BeSmarter! тщательно отбирает авторов, чтобы вы остались довольны.
        </p>
      </TextBlock>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          От чего зависит цена услуги
        </h2>
        <p className="par">
          Стоимость зависит от сложности работы, а также объемов и сроков исполнения:
        </p>
        <ul>
          <li>
            Кандидатская работа обычно должна иметь 150 страниц. Цена услуги в этом случае – от 180 до 450 тыс. рублей.
          </li>
          <li>
            Докторская диссертация стоит от 450 до 950 тыс. рублей (средний объем – 250 страниц).
          </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Как можно сэкономить?
        </h2>
        <p className="par">
          Воспользуйтесь этими советами, если вам критически важно не переплачивать:
        </p>
        <ul>
          <li>
            можете написать часть сами, а часть поручить профессионалам;
          </li>
          <li>
            заказ обойдется дешевле, если у вас уже есть план диссертации;
          </li>
          <li>
            если вы обращаетесь в компанию BeSmarter! заранее, то не переплачиваете за срочность;
          </li>
          <li>
            цена также определяется сложностью исследуемой тематики и предмета;
          </li>
          <li>
            наличие обязательной практической части делает заказ дороже.
          </li>
          <li>
            Чтобы заказать диссертацию по философии приходите к нам в офис по адресу: г. Москва, пер. Большой Кисловский, дом 1, стр. 2, офис 211
          </li>
        </ul>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={disserNew}/>
    </PageWrapper>
  </Wrapper>
);


export default page
