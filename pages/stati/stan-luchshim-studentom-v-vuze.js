import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Стань лучшим студентом в вузе! | «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="Чтобы изначально стать хорошим студентом, необходимо точно знать: хотите Вы учиться или нет. Можно сделать диплом на заказ и это будет равноценно тому, что Вы поступили не по своему желанию.  Если вас заставили учиться, то Вам будет тяжело стремиться к хорошей учебе. А если у Вас есть желание, то Вы будете полностью отдаваться учебе и обращать внимание на другие аспекты." />
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
                        <a>Стань лучшим студентом в вузе!</a>
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Стань лучшим студентом в вузе!
                </h2>
                <p className="block-text__par">
                    Чтобы изначально стать хорошим студентом, необходимо точно знать: хотите Вы учиться или нет. Можно сделать <b><Link href="/diplom-na-zakaz"><a>диплом на заказ</a></Link></b> и это будет равноценно тому, что Вы поступили не по своему желанию.  Если вас заставили учиться, то Вам будет тяжело стремиться к хорошей учебе. А если у Вас есть желание, то Вы будете полностью отдаваться учебе и обращать внимание на другие аспекты.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Прежде всего, нельзя пропускать занятия или спать на занятиях. Это сразу говорит о том, что Вы не хотите заниматься и получать хорошие знания. Очень хорошо ходить на все занятия, всегда активно участвовать в уроках и отвечать на них.
                </p>
                <p className="block-text__par">
                    Хорошая учеба поможет стать лучшим студентом, но этого в большинстве случаев просто недостаточно. Чтобы отличиться, необходимо проявлять себя еще и в общественной деятельности. В вузе практически постоянно проходят различные соревнования, олимпиады, представления и так далее. Если студент постоянно участвует в таких мероприятиях и достаточно активно подходит к ним, то его больше замечают.
                </p>
                <p className="block-text__par">
                    Также можно посещать различные спортивные секции, чтобы участвовать еще и в спортивных мероприятиях. Это повышает шансы того, чтобы студент завоевал звание лучшего студента.
                </p>
                <p className="block-text__par">
                    Поможет в этом студенту правильный образ жизни и правильное питание. Чтобы студент хорошо соображал, и у него имелись силы для того, чтобы хорошо заниматься и все успевать, ему необходимо правильно питаться. Он должен получать все необходимые витамины и минералы, чтобы все функции организма правильно работали. Также важно высыпаться. Если человек не высыпается, то ему намного тяжелее будет усваивать задания и запоминать пройденный материал. Также плохо влияют и вредные привычки.
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
                    Для успешной учебы важна дисциплина. Если весь день расписан по порядку и каждому занятию уделено достаточно времени, то и на отдых времени останется предостаточно. Если заниматься в определенное время каждый день, то организм быстро привыкает к этому и будет эффективнее работать в это время. Дисциплина позволит студенту не опаздывать на занятия, хорошо высыпаться, быть более ответственным и организованным.
                </p>
                <p className="block-text__par">
                    Все время студента должно быть расписано. Например, в определенное время занятия оканчиваются, и студент может позволить себе немного отдохнуть. После этого он снова готов заниматься и запоминать.
                </p>
                <p className="block-text__par">
                    Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
                </p>
                <p className="block-text__par">
                    Студенту важно много читать и получать новую информацию. Если на занятиях Вы орошо усвоили тему, то зацикливаться на ней не стоит, нужно идти дальше, узнавать новое. В любое удобное и свободное время необходимо читать или узнавать новую информацию. Это не будет лишним, а сам студент будет умным и продвинутым.
                </p>
                <p className="block-text__par">
                    Если Вы хотите стать хорошим специалистом и отличным студентом, но у Вас нет времени на написание диплома, то  можно и <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b>, ведь его напишем мы – действующие преподаватели вузов с большим практическим опытом. А если студент будет стараться и уделять занятиям большое внимание, то он станет лучшим студентом, а это означает и отличным специалистом. В этом мы Вам поможем, написав для Вас диплом!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

        </div>
    </Wrapper>
);


export default page
