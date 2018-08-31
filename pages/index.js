import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Order';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'

import MetaTags from 'react-meta-tags';
import ImageBlock from "../components/common/ImageBlock";

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
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломный проект</span>
                            <p>от 21 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA</span>
                            <p>от <b>25 000</b> руб.</p>
                        </a>
                    </Link>
                </div>
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
                    <Link href="/zakazat-otchet-po-praktike">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/referat-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kontrolnaya-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/stati/kak-podgotovitsya-k-ekzamenu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </a>
                    </Link>
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
                    <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Кандидатская диссертация</span>
                            <p>Автор на связи</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/doktorskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Докторская диссертация</span>
                            <p>Конфиденциально</p>
                        </a>
                    </Link>
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

            <FormEstimate />

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

            <CurrentOffer />


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
