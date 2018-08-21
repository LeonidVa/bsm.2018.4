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


const page = () => (
    <Wrapper title="Почему студенты выбирают услугу «диплом на заказ»? | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Многие студенты в настоящее время отказываются от самостоятельного написания диплома и предпочитают поручать написание дипломного проекта профессиональным исполнителям. Почему так происходит, почему многие предпочитают диплом на заказ?">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="" />
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
                        <a>Почему студенты выбирают услугу «диплом на заказ»?</a>
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
                    Почему студенты выбирают услугу «диплом на заказ»?
                </h1>
                <p className="block-text__par">
                    Многие студенты в настоящее время отказываются от самостоятельного написания диплома и предпочитают поручать написание дипломного проекта профессиональным исполнителям. Почему так происходит, почему многие предпочитают <a href="/diplom-na-zakaz"target="_blank">диплом на заказ</a>?
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <ol className="fitted">
                    <li>
                        <b>1. </b>Нехватка времени. Многие студенты давно успешно работают и времени на подготовку  проекта просто не остается. Немногие родители могут обеспечить учебу ребенка в платном вузе. Отсутствие интереса к кропотливому муторному труду, исправление многочисленных ошибок и замечаний научного руководителя -  также является одной из причин. Зачем тратить свое время на поиск уймы материалов, если нужно продвигаться вверх по карьерной лестнице, если важен сам документ об образовании, а не диплом? Такие студенты не могут выкроить силы и время на полноценное обучение. Да и наличие денежных средств также играет свою роль. Зачем терять деньги, беря отпуск за свой счет (а большинство работодателей не оплачивают отпуска), если можно работать, а написание диплома поручить нам - грамотным специалистам?
                    </li>
                    <li>
                        <b>2. </b>Отсутствие заинтересованности в выбранной специализации. Часто, специальность была выбрана не самим студентом, а его родителями. Именно они отдали студента учиться в это заведение. Часто студенты не уделяют внимание базовым дисциплинам и получению практических навыков. Поэтому они не могут защитить проект на достойном уровне и написать сильную дипломную работу.
                    </li>
                    <li>
                        <b>3. </b>Семейные обстоятельства. Особенно актуальна данная причина для молодых мам-студенток. Старательная учеба на протяжении всех учебных курсов не помогает. Ее перекрывает нехватка времени вследствие различных семейных обстоятельств (свадьба, рождение ребенка, ухудшение собственного здоровья, болезнь близкого человека).  В этом случае проект диплома на заказ становится спасением.
                    </li>
                </ol>
                <p className="block-text__par">
                    Причины могут быть разные. Но каждый студент понимает важность дипломной работы. Если у Вас нет времени, если Вы не уверены в своих силах – обращайтесь к проверенным специалистам. Таковыми специалистами являемся мы  - высококвалифицированные специалисты с большим преподавательским стажем.
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

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Каждый из сотрудников, работающих над Вашими дипломными проектами, обладает огромным опытом создания теоретических работ и написанием отчётов по наработанной обширной практической базе. Готовый дипломный проект по правоведению, дизайну, экономике, международным отношениям или любой другой профилирующей дисциплине пишется легко, качественно и быстро, избавляя Вас от ненужного волнения. Поэтому стоит <b><Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link></b> у нас!
                </p>
                <p className="block-text__par">
                    На защите дипломного проекта часто присутствуют руководители из предприятий по выбранной специальности. В момент презентации диплома многие присматриваются к Вам, как к потенциальному сотруднику. Мы сделаем Вашу дипломную работу интересной, качественной, максимально полно раскрывающей выбранную вами тематику. Ведь именно от этих характеристик и зависит итоговая оценка за диплом и  итоговое решение – решение в Вашу пользу.
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" fields={fields}/>

        </div>
    </Wrapper>
);


export default page
