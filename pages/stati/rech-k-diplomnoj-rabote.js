import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import Video from 'components/common/VideoBlock';


const page = () => (
    <Wrapper title="Речь к дипломной работе образец – как написать речь (доклад) к дипломной работе пример | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Полезная статья на тему «Как написать речь к дипломной работе», приведены примеры и образцы докладов и защитных речей.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Речь к дипломной работе образец пример как написать доклад защита защитная" />
            </MetaTags>
            
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
                        <a>Речь к дипломной работе</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
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

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
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
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Как написать речь к дипломной работе
                </h1>
                <p className="block-text__par">
                    Подготавливая речь к дипломной работе, важно ответить самому себе на следующие вопросы:
                </p>
                <ul>
                    <li>
                        Что я хочу донести до слушателей?
                    </li>
                    <li>
                        Что я должен сказать педагогическому составу, чтобы ими была понята вся актуальность проблем в проекте?
                    </li>
                    <li>
                        Какой временной интервал необходим мне для доклада?
                    </li>
                </ul>
                <p className="block-text__par">
                    Методические требования вашего учебного заведения помогут вам ответить на вышестоящие вопросы. При написании речи к дипломной работе необходимо учитывать пару-тройку нюансов.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Структура доклада к дипломной работе
                </h2>
                <ul>
                    <li>
                        Вступление
                    </li>
                    <li>
                        Главная мысль
                    </li>
                    <li>
                        Заключительная часть
                    </li>
                </ul>
                <p className="block-text__par">
                    Современное выступление, раскрывающее цели, заинтересует членов комиссии. Главным считается начать ее с приветствия членов комиссии
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Вступление
                </h2>
                <ul>
                    <li>
                        Заострение внимания членов комиссии.
                    </li>
                    <li>
                        Установление доверительного контакта между выпускником и преподавательским составом.
                    </li>
                    <li>
                        Речь должна быть простой, связной, доступной. Аудитория должна понимать автора.
                    </li>
                </ul>
                <p className="block-text__par">
                    Выделяют 3 главные задачи правильно подготовленной речи:
                </p>
                <p className="block-text__par">
                    Постарайтесь писать кратко. 15% времени от выступления отводится вступительной части.
                </p>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Основная мысль
                </h2>
                <p className="block-text__par">
                    В этой части излагаются основные тезисы работы. Не усложняйте речь данной части слишком сложным описанием темы. Стоит задача определения базы и раскрытие взгляда на теоретическую суть вопроса и плавно перешагнуть к разбору объекта работы. Лаконично изложить суть задачи или главной темы. Кратко подытожить свой анализ. Добавьте короткие описания, советы, рекомендации. 65-70% предполагаемого времени занимает именно эта часть.
                </p>
            </section>

            <section className="block-text">
                <p className="block-text__par italic center">
                    Можно сказать, что именно практическая часть работы играет главную роль в оценке академических успехов студента и определяет его оценку . Если нет логически завершенной и продуманной речи к дипломной работе, про хорошую оценку можно забыть.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заключительная часть
                </h2>
                <p className="block-text__par">
                    Эта часть включает в себя написание выводов. Как и в любом другом научном проекте, мысль должна быть высказана кратко и лаконично. Для создания эффектного заключения следует придерживаться нескольких пунктов:
                </p>
                <ul>
                    <li>
                        Кратко подытожить основное выступление речи к дипломной работе.
                    </li>
                    <li>
                        Позаботиться о логическом завершении презентации.
                    </li>
                    <li>
                        Окончание выступление следует акцентировать на положительном аспекте.
                    </li>
                </ul>
                <p className="block-text__par">
                    На заключительную часть отводится 10% отведенного времени. Задав уточняющие вопросы, комиссия восполнит поток потерянной или непонятной информации из защитной речи к дипломной работе. Написав проект самостоятельно, вы с легкостью ответите на поставленные вопросы.
                </p>
            </section>

            <a name="form" id="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Заказать" fields={fields}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как эффектно выступить на защите дипломной работы?
                </h2>
                <p className="block-text__par">
                    Чтобы защитная речь к дипломной работе создала хорошее впечатление, следуйте трем правилам:
                </p>
                <ul>
                    <li>
                        Понимать, чего ждет от вас комиссия.
                    </li>
                    <li>
                        Не упускать бдительность к своему монологу.
                    </li>
                    <li>
                        Не волноваться.
                    </li>
                </ul>
                <p className="block-text__par">
                    Пробуйте ответить на следующие вопросы:
                </p>
                <ul>
                    <li>
                        Логичен ли ваш монолог?
                    </li>
                    <li>
                        Не возникает ли трудностей в понимании вашего доклада?
                    </li>
                    <li>
                        Верны ли выражения в докладе?
                    </li>
                    <li>
                        Возможно ли составление ясного заключения после прослушивания доклада?
                    </li>
                </ul>
                <p className="block-text__par">
                    Если ответом на все вопросы стало «ДА!», вы отлично справились с подготовкой речи к дипломному проекту.
                </p>
            </section>

            <Video>
                <iframe src="https://www.youtube.com/embed/XpYziQhuZaw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </Video>
        </div>
    </Wrapper>
);


export default page
