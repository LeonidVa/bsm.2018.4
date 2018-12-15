import React, {Component} from 'react'
import Link from "next/link";
import Wrapper from "components/Wrapper";
import NavRow from "components/common/NavRow";
import MessBlock from "components/common/MessBlock";
import ProfitsBlockSlider from "components/common/ProfitsBlockSlider";
import Form from "components/common/forms/Big";
import ServiceBlock from "components/common/ServiceBlock";
import MapBlock from 'components/common/MapBlock';
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"
import schemaSrc from 'static/images/contacts/how-to-go.jpg';
import Address from 'components/contacts/Address'
import socials from 'data/socials';
import  {
  HeaderLi,
  HeaderUl,
  HeaderNavA,
  } from '/components/Header/style.js';


/**/
class page extends Component {
  render() {
    return (
      <Wrapper
        title="BeSmarter!"
        description="Написание диплома на заказ! Быстрая, недорогая и профессиональная помощь в подготовке дипломной работы – компания BeSmarter. Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40."
        showHamburger={false}
        headerNavButtons={
          <HeaderUl>
            <HeaderLi>
              <Link href="#about">
                <HeaderNavA>О нас</HeaderNavA>
              </Link>
            </HeaderLi>
            <HeaderLi>
              <Link href="#contacts">
                <HeaderNavA>Контакты</HeaderNavA>
              </Link>
            </HeaderLi>
          </HeaderUl>
        }
        footerNavButtons={
          <ul>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <Link href="#contacts">
                <a>Контакты</a>
              </Link>
            </li>
            <li><a target="_blank" href={socials.vk.url}>{socials.vk.icon}</a></li>
            <li><a target="_blank" href={socials.facebookMessenger.url}>{socials.facebookMessenger.icon}</a></li>
            <li><a target="_blank" href={socials.facebook.url}>{socials.facebook.icon}</a></li>
            <li><a target="_blank" href={socials.youtube.url}>{socials.youtube.icon}</a></li>
            <li><a target="_blank" href={socials.telegram.url}>{socials.telegram.icon}</a></li>
            <li><a target="_blank" href={socials.whatsapp.url}>{socials.whatsapp.icon}</a></li>
            <li><a target="_blank" href={socials.instagram.url}>{socials.instagram.icon}</a></li>
          </ul>
        }
      >
        <div className="wrapper bg bg-c2 bg-img bg-img3">

          <section className="block-nav">
            <NavRow
              url="#form"
              scroll={true}
              title="Получить доступ"
              description="Получи доступ к нашему сервису"
            />
            <NavRow
              url="#contacts"
              scroll={true}
              title="Контакты"
              description="Адрес, телефон и время работы"
            />
          </section>
          <MessBlock/>

          <ServiceBlock
            color="#333333"
            url="#pricing"
            image={require('static/images/block/j.jpg')}
            gradient="rgba(199, 212, 229, 0.95), rgba(199, 212, 229, 0.7)"
            title="BeSmarter!"
            text={<div>
              <p>Профессиональный проект<br/>для студентов</p>
              <p>Мы знаем, чем и как помочь!</p>
              <p>Приходи, мы ждем тебя!</p>
            </div>}
            cards={[
              [
                {
                  title: "Проверка на оригинальность",
                  text: [<p>в разных системах</p>],
                  description: "Прежде, чем сдать текст на оценку твоему научному руководителю, проведи проверку на оригинальность в различных системах. Будь уверен в уникальности твоей работы!"
                },
                {
                  title: "Рерайт",
                  text: [<p>и редактура</p>],
                  description: "Нужно переписать текст и не потерять смысл? Задача не из простых! Мы научим тебя, как честно сделать твой текст уникальным. Используем для проверки различные сервисы."
                },
                {
                  title: "Подготовка к публикации",
                  text: [<p>и выбор издательства</p>],
                  description: "Статья написана. Пора в издательство. Но как? Куда? Мы знаем, как и куда. Ответим на все твои вопросы и поможем выбрать издательство."
                },
                {
                  title: "Выбор материала",
                  text: [<p>и структурирование текста</p>],
                  description: "Сейчас имеется легкий доступ к любым материалам. На чем остановить свой выбор? Чему отдать предпочтение? Мы научим тебя, как сделать верный выбор нужного материала."
                },
              ], [
                {
                  title: "Оформление текста",
                  text: [<p>по требованиям</p>],
                  description: "Научим тебя добавлять и правильно оформлять рисунки, графики, таблицы и диаграммы для наглядности материала."
                },
                {
                  title: "Онлайн-консультации",
                  text: [<p>по учебе, сдаче и защите</p>],
                  description: "Когда возникли вопросы по учебе и не знаешь кому их задать, задай их нам! Наш консультант подробно и понятно ответит тебе."
                },
                {
                  title: "Подготовка к защите",
                  text: [<p>с репетицией</p>],
                  description: "Мы подготовили для тебя развернутую консультацию: расскажем, как вести себя перед комиссией, как отвечать на их вопросы. Уделим внимание проработке твоих материалов для защиты."
                },
                {
                  title: "Переплет",
                  text: [<p>широкий выбор</p>],
                  description: "Итоговая работа нуждается в красивом оформлении, которое придаст ей аккуратный вид. Мы посоветуем тебе лучшую обложку."
                },
                {
                  title: "Договор по практике",
                  text: [<p>важные детали</p>],
                  description: "Часто заполнение договора по практике составляет сложность для студента. Наш консультант окажет помощь при заполнении договора на практику и ответит на все вопросы по прохождению и оформлению."
                },
              ],
            ]}
          />

          <Form
            formType="Получить доступ к услугам"
            targetID="order"
            title="Получить доступ к услугам прямо сейчас"
            redForm={true}
            buttonLabel="Отправить"
            fields={[
              {label: 'Имя', name: "name", type: 'text', placeholder: 'Ваше имя', required: true},
              {label: 'Телефон', name: "phone", type: 'text', placeholder: 'Ваш телефон', required: true},
              {label: 'Почта', name: "email", type: 'email', placeholder: 'email', required: true},
              {label: 'Предмет', name: "discipline", type: 'text', placeholder: 'Предмет или дисциплина', required: false},
              {label: 'Комментарии', name: "comment", type: 'textarea', placeholder: 'Ваши комментарии', required: false},
            ]}
          />

          <a name="about" style={{position: "absolute", marginTop: "-2em"}}/>
          <ProfitsBlockSlider profitBlockConfig={[
            {
              imageSrc: require('static/images/slide-profits/1.svg'),
              title: "Наша команда",
              description: "Опытные менеджеры помогут разобраться с твоим вопросом",
            },
            {
              imageSrc: require('static/images/slide-profits/2.svg'),
              title: "Конфиденциальность",
              description: "Мы никому не раскрываем твои контактные данные, сохраняя анонимность",
            },
            {
              imageSrc: require('static/images/slide-profits/3.svg'),
              title: "Опыт работы",
              description: "Мы успешно помогаем в вопросах учебы студентам уже более десяти лет",
            },
            {
              imageSrc: require('static/images/slide-profits/4.svg'),
              title: "Личный консультант",
              description: "Максимально быстро и точно ответит на твои вопросы. Работа станет понятной и красивой",
            },
            {
              imageSrc: require('static/images/slide-profits/5.svg'),
              title: "Сервисы",
              description: "Мы постоянно обновляем нашу базу используемых сервисов, следя за развитием и изменением технологий",
            },
            {
              imageSrc: require('static/images/slide-profits/6.svg'),
              title: "Профессионализм",
              description: "Те, кому мы помогли, становятся нашими постоянными клиентами",
            },
          ]}/>

          <ServiceBlock
            color="#333333"
            url="#contacts"
            image={require('static/images/block/g.jpg')}
            gradient="rgba(199, 212, 229, 0.95), rgba(199, 212, 229, 0.7)"
            title="Удобный офис в центре"
            text={<div>
              <p>Всегда на связи 9:00 – 22:00</p>
              <p>Работаем в выходные и праздники</p>
              <p>4 линии метро</p>
              <p>Всего 5 минут пешком от метро</p>
            </div>}
          />

          <a name="contacts" style={{position: "absolute", marginTop: "-2em"}}/>
          <div itemScope itemType="http://schema.org/Organization">
            <section className="block-text">
              <h2 itemProp="name" className="block-text__title">Офис</h2>
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <p className="block-text__subtitle subtitle-orange__micro">
                  <span itemProp="addressLocality">Москва, </span>
                  <span itemProp="streetAddress">Большой Кисловский переулок {"\n"}д. 1, стр. 2, офис 211</span>
                </p>
              </div>
              <p className="block-text__par">
                Понедельник - пятница <span className="bold">с 09:00 до 19:30</span><br/>
                Суббота - Воскресенье <span className="bold">с 10:00 до 18:30</span><br/>
              </p>
              <p className="block-text__par finish-text">
                Приходите – мы ждём Вас!
              </p>

              <h2 className="block-text__title">
                Телефон
              </h2>
              <p className="block-text__subtitle subtitle-orange">
                <span itemProp="telephone" className="phone">+7 (495) 772-40-90</span>
                <span itemProp="telephone" className="phone">+7 (495) 772-90-40</span>
              </p>
              <p className="block-text__par">
                Понедельник - пятница <span className="bold">с 09:00 до 23:00</span><br/>
                Суббота - воскресенье <span className="bold">с 09:00 до 22:00</span>
              </p>
              <p className="block-text__par finish-text">
                Звоните – будем рады поговорить!
              </p>
              <h2 className="block-text__title">
                Почта
              </h2>
              <p itemProp="email" className="block-text__subtitle subtitle-orange">
                <a href="mailto:zakaz@besmarter.ru?subject=Новая заявка" onClick={() => {
                  stat.triggerTarget.emailClicked();
                  return true;
                }} style={{color: "#f4511e"}}>zakaz@besmarter.ru</a>
              </p>
              <p className="block-text__par">
                Возникли вопросы?
              </p>
              <p className="block-text__par finish-text">
                Пишите – ответим!
              </p>
              <div className="block-callask__buttons">
                <ToggleQuestionPopup targetID="question_contacts"><a className="block-callask__button">Задать вопрос</a></ToggleQuestionPopup>
                <ToggleCallPopup targetID="call_me_contacts"><a className="block-callask__button">Заказать звонок</a></ToggleCallPopup>
              </div>
            </section>
          </div>

          <MapBlock/>
          <section className="block-text">
            <h2 className="block-text__title">
              Как пройти
            </h2>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Арбатская"
              schema={schemaSrc}
              time="5 минут"
              distance="420 метров"
            >
              <p className="block-text__par">
                Выход к кинотеатру «Художественный».
              </p>
              <p className="block-text__par">
                Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="block-text__par">
                На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="block-text__par">
                Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="block-text__par">Рады видеть Вас!</p>

            </Address>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Александровский сад"
              schema={schemaSrc}
              time="5 минут"
              distance="420 метров"
            >

              <p className="block-text__par">Выход на ул. Воздвиженка.
              </p>
              <p className="block-text__par">Из метро налево по ул. Воздвиженка в подземный переход напротив «Детского мира».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="block-text__par">Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="block-text__par">Рады видеть Вас!
              </p>
            </Address>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Библиотека им. Ленина"
              schema={schemaSrc}
              time="5 минут"
              distance="420 метров"
            >

              <p className="block-text__par">Идём по указателям «Выход в город на ул. Воздвиженка».

              </p>
              <p className="block-text__par">Из стеклянных дверей метро по подземному переходу вперед до упора и наверх.
                Вы на Воздвиженке: сзади Кремль, слева Библиотека, впереди «Детский мир».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="block-text__par">Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="block-text__par">Рады видеть Вас!
              </p>
            </Address>
            <Address
              handleMaps={this.handleMaps}
              metro="м. Боровицкая"
              schema={schemaSrc}
              time="8 минут"
              distance="690 метров"
            >

              <p className="block-text__par">В метро переходим на станцию Арбатская.
                Выход к кинотеатру «Художественный»
              </p>
              <p className="block-text__par">Из метро направо по ул. Воздвиженка в подземный переход напротив «Детского мира».
                Из перехода в переулок между салоном «Мерседес» и «Детским миром» - Вы уже на Большом Кисловском.
              </p>
              <p className="block-text__par">На левой стороне дом с кафе – это уже наш: дом 1, строение 2.
                Проходите мимо всех кафе в коричневую дверь бизнес-центра.
              </p>
              <p className="block-text__par">Мимо охраны на второй этаж направо.
                Комната 211 с лисенком - это уже мы.
              </p>
              <p className="block-text__par">Рады видеть Вас!
              </p>
            </Address>
          </section>

        </div>
      </Wrapper>
    )
  }
}

export default page;
