import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Написание курсовых работ | «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="О, сколько нервов было потрачено, сколько ночей просижено и сколько кофе выпито не одним поколением студентов в процессе написания курсовых работ! И ведь всегда времени совсем немного до ее сдачи, хотя, казалось, что до сессии еще очень далеко. Мы прекрасно понимаем, что работа, учеба, семья отнимают большую часть Вашего драгоценного времени, и именно поэтому хотим предложить выход из такой непростой, казалось бы, ситуации – написание курсовых работ на заказ!" />
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
                        <a>Написание курсовых работ</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/i.jpg') + ")",}}>
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
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
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
                    Написание курсовых работ
                </h2>
                <p className="block-text__par">
                    О, сколько нервов было потрачено, сколько ночей просижено и сколько кофе выпито не одним поколением студентов в процессе написания курсовых работ! И ведь всегда времени совсем немного до ее сдачи, хотя, казалось, что до сессии еще очень далеко. Мы прекрасно понимаем, что работа, учеба, семья отнимают большую часть Вашего драгоценного времени, и именно поэтому хотим предложить выход из такой непростой, казалось бы, ситуации – <b>написание курсовых работ</b> на заказ!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Помните, чтобы успешно сдать сессию нужно как следует высыпаться. Доктора советуют отводить на сон не менее восьми часов, именно это время необходимо, чтобы организм полностью отдохнул и набрал сил. Не стоит забывать об этой рекомендации даже тогда, когда накопилась масса неотложных дел, Ваше здоровье прежде всего! Но как же быть, если до сдачи курсовой всего несколько дней, а Вы к ней еще даже и не приступали? Конечно, обратиться за помощью к нам!
                </p>
                <p className="block-text__par">
                    Вы сами указываете нужные сроки выполнения работы, ровно в которые и получаете уже готовую курсовую. Наши авторы – профессионалы с многолетним стажем работы, кандидаты и доктора наук, которые качественно и грамотно выполнят курсовую любого уровня сложности и абсолютно любой тематики.
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
                    <b>Написание курсовых</b> – занятие кропотливое, требующее высокого уровня знаний в определенной дисциплине, понимания всех нюансов, основ содержания и оформления работ такого типа. Мы выполнили не одну тысячу курсовых для наших клиентов, поэтому не понаслышке знакомы со всеми тонкостями подобных работ. Автор, выполняющий Вашу курсовую работу, учтет все пожелания и замечания, как лично Ваши, так и Вашего научного руководителя. Кроме того, если по завершении работы Вы обнаружите какие-то недочеты (что, признаемся, бывает крайне редко), все необходимые правки будут выполнены абсолютно бесплатно!
                </p>
                <p className="block-text__par">
                    Мы уже много лет работаем в сфере образования, поэтому в совершенстве изучили все нюансы студенческих работ и даже с закрытыми глазами можем назвать Вам перечень всех характеристик курсовой. Стоит ли говорить о том, что заказанная у нас работа будет выполнена на «отлично»?
                </p>
                <p className="block-text__par">
                    Почему Вы можете быть спокойны и рассчитывать на нас? Во-первых, Вы можете обратить свое внимание на многочисленные отзывы наших клиентов (многие из которых из года в год обращаются в нашу компанию). Во-вторых, мы предлагаем Вам в любое удобное время приехать в наш <Link href="/contacts"><a>офис</a></Link> на Никитском бульваре и заключить договор, в котором подробно зафиксированы все наши обязательства и санкции, которые налагаются за их невыполнение.
                </p>
                <p className="block-text__par">
                    Но это еще не все хорошие новости. При заказе второй работы у нас (а также при каждом последующем заказе) Вы получаете скидку от 5%! Кроме того, у нас постоянно действуют разные акции, о которых Вы можете узнать на сайте или у нашего менеджера, позвонив прямо сейчас по телефону <b>+7 495 772-4090</b>.
                </p>
                <p className="block-text__par">
                    BeSmarter! Оказывает профессиональную <b>помощь в написании курсовых</b>, а также всех других видов студенческих работ. С полным перечнем наших услуг Вы можете ознакомиться <Link href="/price"><a>здесь</a></Link>.
                </p>
                <p className="block-text__par">
                    Пусть учеба приносит только радость, мы поможем Вам в этом!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

        </div>
    </Wrapper>
);


export default page
