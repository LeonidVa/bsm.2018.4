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

import CurrentOffer from 'components/content/offers/CurrentOffer';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";
import servicecards from "data/servicecards";

const page = () => (
  <Wrapper title="Помощь студентам в написании работ - заказать дипломную, курсовую, магистерскую и другие работы в Москве в компании «BeSmarter!». Тел. +7 (495) 772-40-90"
           description="Компания BeSmarter! профессионально оказывает помощь студентам в написании работ! Дипломные и курсовые работы на заказ, написание магистерских диссертаций, а также можно заказать рефераты, контрольные, отчеты по пратике в Москве, звоните Тел. +7 (495) 772-40-90">
    <div className="wrapper main">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Помощь студентам в написании студенческих работ на заказ сайт заказать учебные объявление помощь дипломные курсовые рефераты"/>
      </MetaTags>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
        <NavRow url='/price' title="Услуги и цены" description="Все для твоей учебы"/>
        <NavRow url='/contacts' title="Контакты" description="Узнай, где нас найти"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/diplom-na-zakaz">
          <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Дипломная работа</span>
              <p className="block-service__par">Быстро и качественно!</p>
              <p className="block-service__par">С нами твоя защита пройдет легко!</p>
              <p className="block-service__par">От 14 000 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-3">
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Дипломный проект"
            text={[<p>от 21 000 руб.</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Магистерская диссертация"
            text={[<p>от 23 000 руб.</p>]}
          />

          <CardPopInfo
            url="/diplom-mba-na-zakaz"
            title="Диплом MBA"
            text={[<p>от 25 000 руб.</p>]}
          />
        </div>
      </section>

      <section className="block-quality">
        <ul className="quality-list">
          <li className="quality-list__item">
            <div className="quality-list__inner">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                100 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </div>
          </li>
          <li className="quality-list__item w50">
            <div className="quality-list__inner">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                50 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </div>
          </li>
          <li className="quality-list__item w50">
            <div className="quality-list__inner">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                50 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </div>
          </li>
          <li className="quality-list__item w33">
            <a className="quality-list__inner" href="ya.ru">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                33 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </a>
          </li>
          <li className="quality-list__item w66">
            <div className="quality-list__inner">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                66 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
              <p>
                66 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </div>
          </li>

          <li className="quality-list__item w33">
            <a className="quality-list__inner" href="ya.ru">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                33 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </a>
          </li>

          <li className="quality-list__item w33">
            <a className="quality-list__inner" href="ya.ru">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                33 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </a>
          </li>

          <li className="quality-list__item w33">
            <a className="quality-list__inner" href="ya.ru">
              <div className="quality-list__title-block">
                <img src="/static/images/slide-profits/6.svg" alt=""/>
                <span className="quality-list__title">Высокое качество</span>
              </div>
              <p>
                33 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
              </p>
            </a>
          </li>
        </ul>
      </section>

      <section className="block-service">
        <Link href="/kursovaya-rabota-na-zakaz">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/7.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Курсовая работа</span>
              <p className="block-service__par">Не парься сам – доверься нам!</p>
              <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
              <p className="block-service__par">От 4 000 руб.</p>
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
            url="/kursovoj-proekt-na-zakaz"
            title="Курсовой проект"
            text={[<p>от 8 000 руб.</p>]}
          />
        </div>
      </section>

      <section className="block-service">
        <Link href="/dissertaciya-na-zakaz">
          <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/3.jpg') + ")",}}>
            <div className="block-service__text gradient-l-white">
              <span className="block-service__title">Диссертационные работы</span>
              <p className="block-service__par">Написание и оформление</p>
              <p className="block-service__par">Публикации</p>
              <p className="block-service__par">Строго конфиденциально</p>
              <p className="block-service__par">Индивидуально</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-4">

          <CardPopInfo
            url="/dissertaciya-na-zakaz/kandidatskaya"
            title="Аспирантские работы"
            text={[<p>От поступления до защиты</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/kandidatskaya"
            title="Статьи"
            text={[<p>Написание и размещение</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/kandidatskaya"
            title="Кандидатская диссертация"
            text={[<p>Автор на связи</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/doktorskaya"
            title="Докторская диссертация"
            text={[<p>Конфиденциально</p>]}
          />

        </div>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Сделаем всё как надо!
        </h2>
        <p className="block-text__par">
          Опытные авторы напишут дипломную работу в полном соответствии с требованиями вашего научного руководителя.
        </p>
        <p className="block-text__par">
          Скажем даже больше: часто научным руководителям настолько нравится глубина раскрытия темы, приведенные аргументы и четкие формулировки диплома, что никаких доработок не требуется.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/main2.jpg')}/>

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

      <CurrentOffer/>

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

      <ImageBlock imageSrc={require('static/images/block/main.jpg')}/>

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
      <FormOrder/>

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
            <Link href="diplom-na-zakaz/gde-zakazat-diplomnuyu-rabotu">
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
