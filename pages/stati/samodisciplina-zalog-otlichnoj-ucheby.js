import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Order';import FormEstimate from 'components/common/forms/Order';;
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Самодисциплина – залог отличной учебы | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Известно с давних пор: самодисциплина – ключ к покорению мира. Самодисциплине учились самые стойкие характеры в истории человечества. Однако сейчас это слово затерто до дыр. Данной тематике посвящены сотни тренингов и множество книг. Но, даже осознав слабые места в своей дисциплине и разобравшись в теме, нелегко исправить свою дисциплину. Ведь мы так любим это слово – «завтра».">
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
                        <a>Самодисциплина – залог отличной учебы</a>
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

            <FormEstimate />

            <section className="block-text">
                <h1 className="block-text__title">
                    Самодисциплина – залог отличной учебы
                </h1>
                <p className="block-text__par">
                    Известно с давних пор: самодисциплина – ключ к покорению мира. Самодисциплине учились самые стойкие характеры в истории человечества. Однако сейчас это слово затерто до дыр. Данной тематике посвящены сотни тренингов и множество книг. Но, даже осознав слабые места в своей дисциплине и разобравшись в теме, нелегко исправить свою дисциплину. Ведь мы так любим это слово – «завтра».
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Самодисциплина – это основа всех основ. Только систематизированный подход к решению того или другого вопроса даст положительный результат. И этот подход невозможен без самодисциплины. Особенно это касается учебы. Скажем, не каждый дипломник может усидчиво работать над своей дипломной работой. Что он делает? Он покупает <a href="/diplom-na-zakaz"target="_blank">диплом на заказ</a> у квалифицированных преподавателей. Но у многих людей есть конкретная цель – научиться самодисциплине, воспитать себя. Не прав тот, кто сказал – «человека не изменить». Человека изменить. Более того, человека нужно менять!
                </p>
            </section>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Как изменить себя
                </h2>
                <ul className="fitted">
                    <li>
                        <b>—</b> Учитесь самодисциплине. Самодисциплина – такая же наука, как и любая другая. Разбейте сложные задачи на несколько мелких. Поставьте перед собой определенные сроки выполнения данных задач. На первых этапах не относитесь к себе слишком строго, не ставьте план «выполнить пятилетку за год», обязательно рассчитывайте время с запасом. Ведь если Вы не выполните поставленную задачу – Вы разочаруетесь в себе и испортите репутацию. Оно Вам надо?
                    </li>
                    <li>
                        <b>—</b> Будьте обязательны. Если Вы что-то запланировали – хоть что сделайте, но выполните обещанное.
                    </li>
                    <li>
                        <b>—</b> Бейте лень. Боритесь с нею. Не позволяйте ей одержать верх над Вами. Например, пропустив одно занятие, Вам захочется пропустить второе, третье, десятое – а там уже и совсем бросить. Как только чувствуете дуновение лени, ее сладкий шепот – гоните врага прочь!
                    </li>
                    <li>
                        <b>—</b> Правильно рассчитывайте время. Это немаловажный вопрос. Правильно рассчитанное время – половина пройденной цели. Не нужно сидеть до умопомрачения за учебниками. Работа мозга на износ ни к чему хорошему не приведет. Выделите время для отдыха, это очень важно. И для занятий спортом.
                    </li>
                    <li>
                        <b>—</b> Балуйте себя. Позвольте себе хотя бы 3 раза в месяц своевольничать. Давайте себе отдых, наслаждайтесь блаженной ленью и безмятежностью. Нельзя постоянно держать себя в заведенном состоянии, Вы ведь не механизм. Даже механизмы высокой точности рано или поздно ломаются от перегрузок. Также можете сломаться и Вы – сдадут нервы или будет еще хуже.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Множество заочников сталкиваются с проблемой самодисциплины. Заочник поступает в вуз обычно спустя энное время после окончания школы. Вследствие этого школьные знания, которые необходимы для обучения в вузе, оказываются утрачены.  В некоторых вузах для таких студентов организуют дополнительные занятия при поддержке деканата. Данные занятия являются бесплатными как для платников, так и для бюджетников. Студенты – заочники общаются с преподавателями не ежедневно,  а только несколько раз в год. Общение происходит во время сессий. Однако некоторые преподаватели дают консультации и отвечают на вопросы очно, по электронной почте в любое время. Но все же, студенту-заочнику приходится сложно. Ведь для обучения на заочном отделении (даже по гуманитарной специальности) требуется жесткая дисциплина. Самодисциплина необходима в распределении соотношения времени между учебой и работой. Человек, который владеет навыками самодисциплины, перестает сталкиваться с негативными последствиями обучения на заочном отделении. Все потому, что он уже умеет организовывать и планировать свое время с самой максимальной эффективностью.
                </p>
                <p className="block-text__par">
                    Поскольку заочная форма предполагает самостоятельную подготовку в течение всего года, для работающих студентов это превращается в головную боль. Даже при должной самодисциплине может не хватить времени на качественное написание курсовых и контрольных работ, на работу с учебными материалами, на работу над дипломными проектами. Поэтому многие студенты приходят к одной единственной верной мысли – <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link> у нас! Мы напишем для Вас качественную, сильную работу, подкрепленную практическими результатами и грамотно проанализированным базисом. Хватит думать, пора заказывать диплом у нас!
                </p>
            </section>

            <a name="form" id="form"/>
            <OrderForm />

        </div>
    </Wrapper>
);


export default page
