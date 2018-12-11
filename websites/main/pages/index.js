import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import ImageBlock from "components/common/ImageBlock";
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import KursovayaRabotaMain from "components/common/ServiceBlock/ready-made/KursovayaRabotaMain"
import DisserRabotyMain from "components/common/ServiceBlock/ready-made/DisserRabotyMain"


const page = () => (
  <Wrapper title="Помощь студентам в написании работ - заказать дипломную, курсовую, магистерскую и другие работы в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90"
           description="Компания BeSmarter! профессионально оказывает помощь студентам в написании работ! Дипломные и курсовые работы на заказ, написание магистерских диссертаций, а также можно заказать рефераты, контрольные, отчеты по пратике в Москве, звоните Тел. +7 (495) 772-40-90">
    <div className="wrapper main">



      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
        <NavRow url='/price' title="Услуги и цены" description="Все для твоей учебы"/>
        <NavRow url='/contacts' title="Контакты" description="Узнай, где нас найти"/>
      </section>
      <MessBlock/>

        <Diplom/>
        <KursovayaRabotaMain/>
        <DisserRabotyMain/>

      <section className="block-text">
        <div className="block-text__title">Сделаем всё как надо!</div>
        <p className="block-text__par">
          Опытные авторы напишут дипломную работу в полном соответствии с требованиями вашего научного руководителя.
        </p>
        <p className="block-text__par">
          Скажем даже больше: часто научным руководителям настолько нравится глубина раскрытия темы,
          приведенные аргументы и четкие формулировки диплома, что никаких доработок не требуется.
        </p>
      </section>

      <FormEstimate />

      <ImageBlock imageSrc={require('static/images/block/main2.jpg')} altText="Помощь студентам"/>

      <section className="block-text">
        <h1 className="block-text__title">
          Помощь студентам
        </h1>
        <p className="block-text__par">
          Наш сервис максимально направлен на качественное выполнение заказов.
        </p>
        <p className="block-text__par">
          Оказывать помощь студентам мы начинаем уже в первые минуты вашего звонка или сообщения на наш сайт.
        </p>
        <p className="block-text__par">
          После поступления заявки наши менеджеры просчитывают все этапы написания, сложность и объем.
        </p>
        <p className="block-text__par">
          Вы получаете оперативный ответ, вносите предоплату и наши авторы начинают написание студенческих работ сразу же.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Какие мы даем гарантии
        </h2>
        <ul>
          <li>
            <b>Качество.</b> Итогом вашего обращения к нам станут качественные учебные работы на заказ недорого и с соблюдением всех оговоренных сроков и условий.
          </li>

          <li>
            <b>Уникальность.</b> Каждая работа разрабатывается с нуля, что дает преимущество в уникальности.
          </li>

          <li>
            <b>Оперативность.</b> Служба поддержки оперативно ответит на все ваши вопросы и поможет оформить заказ.
          </li>

          <li>
            <b>Конфиденциальность.</b> Мы никому не раскрываем ваши контактные данные, сохраняя столь важную в современном мире анонимность.
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <h2 className="block-text__title">
          Помощь студентам в&nbsp;написании работ
        </h2>

        <p className="block-text__par">
          Наша команда работает для успешной защиты каждого студента.
        </p>
        <p className="block-text__par">
          Мы направляем усилия лучших специалистов для успешной сдачи ваших работ: у вас будет свой менеджер, свой автор и своя цена. Это по-настоящему индивидуальный подход при выполнении каждого заказа!</p>
        <p className="block-text__par  italic bold">
          Не теряйте времени – заказывайте сейчас!
        </p>

      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Наша команда
        </h2>
        <p className="block-text__par">
          Каждый из наших сотрудников достиг успехов в своей отрасли и теперь помогает нам добиваться лучших результатов. Максимум нашей эффективности достигается усилиями трех отделов:
        </p>
        <ul>
          <li>
            отдел по работе с клиентами состоит из опытных менеджеров, которые могут не только помочь заказать студенческую работу, но и предоставить полную информацию о каждом этапе нашего с вами сотрудничества онлайн или по телефону;
          </li>
          <li>
            эксперты и авторы, проверенные временем. Мы стараемся сотрудничать с авторами, которые имеют успешный опыт преподавания в ВУЗах, находящимися в Москве и по всей России. Оказывая помощь в написании учебных работ под заказ, мы подбираем специалиста максимально разбирающегося в интересующей вас сфере;
          </li>
          <li>
            менеджеры, ответственные за контроль качества материала, усердно проверяют все студенческие работы на заказ, контролируя уровень уникальности и качества.
          </li>
        </ul>
        <p className="block-text__par italic bold">
          Обращаясь в нашу компанию выполнения студенческих работ на заказ, будьте уверены – Вам помогают прфессионалы!
        </p>
      </section>

      <ImageBlock imageSrc={require('static/images/block/main.jpg')} altText="Помощь в написании работ"/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы выполнения студенческих работ
        </h2>
        <p className="block-text__par">
          После согласования всех важных моментов, наши эксперты проводят обработку материала, определяется план и начинается помощь студентам в написании работ.
        </p>
        <p className="block-text__par">
          Каждый этап, в независимости от сложности, тщательно контролируется менеджерами из отдела контроля качества. Если у нас возникают вопросы, мы срочно связываемся с вами и уточняем все моменты, делая тем самым выполнение студенческих работ на заказ простым и удобным.
        </p>
        <p className="block-text__par italic bold">
          Оставляйте заявку в нашем колл-центре, мы сделаем все, чтобы вы получили самый высокий балл!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder />

      <section className="block-text">
        <ul>
          <li>
            <Link href="/diplom-na-zakaz/gde-zakazat-diplomnuyu-rabotu">
              <a>Где можно заказать дипломную работу</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/napisanie-diploma">
              <a>Помощь в написании диплома</a>
            </Link>
          </li>
          <li>
            <Link href="/diplom-na-zakaz/gde-zakazat-diplomnuyu-rabotu">
              <a>Дипломная работа срочно</a>
            </Link>
          </li>
          <li>
            <Link href="/diplom-na-zakaz/skolko-stoit-diplomnaya-rabota">
              <a>Сколько стоит дипломная работа</a>
            </Link>
          </li>
          <li>
            <Link href="/diplom-na-zakaz/gde-zakazat-diplomnuyu-rabotu">
              <a>Диплом заказать недорого</a>
            </Link>
          </li>
          <li>
            <Link href="/diplom-na-zakaz">
              <a>Выполнение дипломных работ</a>
            </Link>
          </li>
        </ul>
      </section>

    </div>
  </Wrapper>
);


export default page
