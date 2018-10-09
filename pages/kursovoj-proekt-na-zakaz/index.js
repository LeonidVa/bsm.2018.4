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
import infoBlockConfig from 'data/infoBlock/kurs-proekt'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import kursovaya from 'data/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Заказать курсовой проект – курсовые проекты на заказ в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90" description="Заказать курсовой проект в Москве, курсовые проекты на заказ срочно по недорогой цене в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img1">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заказать курсовой проект купить на заказ написание сколько стоит стоимость цена"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Курсовой проект</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link>
          <a href="#form" className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/kurs-proekt1.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Курсовой проект</span>
              <p className="block-service__par">Не парься сам – доверься нам!</p>
              <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
              <p className="block-service__par">От 8 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-5">
          <CardPopInfo
            url="/zakazat-otchet-po-praktike"
            title="Отчет по практике"
            text={[<p>от 3 000 руб.</p>]}
          />

          <CardPopInfo
            url="/referat-na-zakaz"
            title="Реферат"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/kontrolnaya-na-zakaz"
            title="Эссе Контрольная"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-k-ekzamenu"
            title="Экзамены Тесты"
            text={[<p>от 200 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovaya-rabota-na-zakaz"
            title="Курсовая работа"
            text={[<p>от 4 000 руб.</p>]}
          />

        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/zashitit">
            <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
              <div className="block-service__text gradient-l-black">
                <span className="block-service__title">Материалы для успешной защиты</span>
                <p className="block-service__par">Не парься сам – доверься нам!</p>
                <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                <p className="block-service__par">Доступные цены</p>
                <p className="block-service__par">Срочно от 2 часов</p>
              </div>
            </a>
          </Link>
          <div className="block-service__list list-4">
            <CardPopInfo
              url="/zashitit"
              title="Пакет «Успешная Защита»"
              text={[<p>от 5 000 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Доклад"
              text={[<p>от 1 500 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Оригинальность текста"
              text={[<p>Во всех системах</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Ответы к защите"
              text={[<p>от 200 руб.</p>]}
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/zashitit"
              title="Мини-диплом Раскладка"
              text={[<p>от 2 000 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Получение по главам"
              text={[<p>Гибкие условия</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Аннотация Отзыв Рецензия"
              text={[<p>от 1 200 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Слайды"
              text={[<p>от 350 руб.</p>]}
            />

            <CardPopInfo
              url="/zashitit"
              title="Распечатка Переплеты"
              text={[<p>от 1 200 руб.</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Заказать курсовой проект
        </h1>
        <p className="block-text__par">
          Курсовой проект – это более сложный вариант курсовой работы, включающий помимо научного исследования по конкретной теме обязательную практическую часть, в которой студент показывает навыки технической и экономической реализации своего предложения.
        </p>
        <p className="block-text__par">
          Как правило, курсовой проект содержит сложные расчеты, схемы, таблицы, графики, чертежи и другие инструменты визуального обобщения. Далеко не каждый студент владеет ими в достаточной мере, чтобы выполнить работу качественно и в срок. Если вы не успеваете с написанием, предлагаем заказать курсовой проект в
          компании BeSmarter!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kurs-proekt-na-zakaz.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Что вы получите?
        </h2>
        <ul>
          <li>
            <b>Качество. </b>Курсовые проекты на заказ выполняются действующими преподавателями вузов с кандидатской научной степенью. Они досконально владеют темой и знают, как грамотно скомпоновать и оформить работу.
          </li>
          <li>
            <b>Пунктуальность. </b>Даже срочный заказ курсового проекта (от трех дней) будет гарантированно сдан вовремя. Наши обязательства прописываются в официальном договоре, кроме того, сроки контролирует ваш личный менеджер.
          </li>
          <li>
            <b>Ответственность. </b> Мы сопровождаем клиента вплоть до момента защиты, консультируя, помогая с иллюстративным материалом и решая сопутствующие проблемы. Заказ курсовых проектов в BeSmarter! – это гарантия успеха на защите, убедитесь в этом сами!
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как мы работаем?
        </h2>
        <p className="block-text__par">
          Чтобы воспользоваться услугами наших экспертов, вам нужно оформить заявку любым удобным способом. Для уточнения всех деталей заказа мы проведем с вами предварительное собеседование. По его итогам будет составлен договор, содержащий ваши требования и наши обязательства.
        </p>
        <p className="block-text__par">
          Далее, после 50%-ной предоплаты, наш специалист выполняет курсовой проект и по главам сдает его вам на проверку. Это позволяет в случае необходимости вовремя внести корректировки (бесплатно). Готовый проект вы получаете в оговоренные сроки после окончательной оплаты. Затем автор помогает вам подготовиться к
          хорошей защите.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Как определяется стоимость курсового проекта?
        </h2>
        <ul>
          <li>
            <b>Специальность. </b>Работы по гуманитарным предметам значительно дешевле в сравнении с тем, сколько стоит курсовой проект по технической дисциплине (детали машин, сопромат, архитектуре).
          </li>
          <li>
            <b>Требования. </b>Стоимость курсового проекта пропорционально зависит от фактического количества чертежей. Также на цену могут повлиять специфические требования к оформлению, необходимость 100%-ной уникальности текста и прочие факторы.
          </li>
          <li>
            <b>Срочность. </b>Чем меньше времени у нас будет на выполнение работы, тем выше окажется ее стоимость. Желаете сэкономить – сделайте заказ как можно раньше.
          </li>
        </ul>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Как сделать заказ курсового проекта?
        </h2>
        <p className="block-text__par">
          Мы предлагаем несколько вариантов сотрудничества, которые подходят не только жителям Москвы, но и других регионов России. Самый универсальный вариант – <a href="#form">онлайн-заявка на сайте</a>. Если хотите переговорить с нашими менеджерами более подробно – позвоните нам по телефону 8 (495) 772-40-90.
        </p>
        <p className="block-text__par">
          Если же вы живете в Москве, предлагаем посетить наш офис по адресу: пер. Большой Кисловский, дом 1, стр. 2, оф. 211. Выбирайте самый удобный для себя вариант и оформляйте заказ – остальные заботы мы возьмем на себя!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={[
        {url: "/kursovaya-rabota-na-zakaz/skolko-stoit", text: "Сколько стоит курсовая работа"},
        {url: "/kursovaya-rabota-na-zakaz/sait-kursovyh-rabot", text: "Где заказать курсовую работу"},
        {url: "/kursovoj-proekt-na-zakaz/po-detalyam-mashin", text: "Заказать курсовой проект по деталям машин"},
      ]}/>
    </div>
  </Wrapper>
);


export default page
