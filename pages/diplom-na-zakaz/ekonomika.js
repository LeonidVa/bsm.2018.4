import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'


const page = () => (
    <Wrapper title="Диплом по экономике на заказ – цена и сроки написания, заказать дипломную в Москве">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/diplom-na-zakaz">
                        <a>Дипломная работа</a>
                    </Link>
                    <span> / </span>
                    <Link href="/diplom-na-zakaz">
                        <a>По экономике</a>
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломный проект</span>
                            <p>от 21 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
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
                    <Link href="/zakazat-diplomnyj-proekt">
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
                    <Link href="/zakazat-diplomnyj-proekt">
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
                    Диплом по экономике на заказ
                </h2>
                <p className="block-text__par">
                    Получение высшего образования обязательно связано с написанием дипломной работы. Это научный труд, который требует хороших знаний по специальности. Выполнить хороший диплом по экономике сложно, поэтому студенты предпочитают заказывать его у профессионалов. Компания BeSmarter! специализируется на предоставлении таких услуг. К нам обращаются, если:
                </p>
                <ul>
                    <li>
                        Нет времени написать работу самостоятельно.
                    </li>
                    <li>
                        Есть некоторые пробелы в знаниях.
                    </li>
                    <li>
                        Студенты обзаводятся семьей, нужно находить время для детей и подрабатывать.
                    </li>
                    <li>
                        Имеется желание получить работу, выполненную на «отлично».
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Диплом по экономике на заказ
                </h2>
                <p className="block-text__par">
                    Самостоятельное написание ВКР сопряжено с некоторыми сложностями – это переработка массы источников и потеря времени на поиск информации, большая часть которой будет лишней или не используется позже в работе. Написание диплома по экономике на заказ избавит вас от этих проблем. Вы получите несколько преимуществ:
                </p>
                <ol>
                    <li>
                        Будете уверены в правильности выполнения работы.<br/>
                        ВКР пишут авторы, проверенные временем, преподаватели ВУЗов Москвы и других городов России. Диплом по экономике на заказ выполняют узкие специалисты этой сферы, имеющие практический опыт.
                    </li>
                    <li>
                        Текст работы оформляется согласно ГОСТу.<br/>
                        Чаще всего студенты тратят массу времени на подготовку ВКР к сдаче по требованиям стандартов, подгоняют диплом по стилю, корректируют абзацы, шрифты. Наша команда использует специальные программы, которые не допустят ошибок и недочетов по оформлению.
                    </li>
                    <li>
                        Работа будет уникальной.<br/>
                        В процессе подготовки к написанию диплома по экономике студенты используют интернет, книги, написанные научные труды. Часто их работы грешат плагиатом. На заказ вы получите уникальный научный труд, который смело пройдет проверку на уникальность.
                    </li>
                </ol>
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
                    Купить или заказать диплом – что лучше?
                </h2>
                <p className="block-text__par">
                   Объяснить, чем заказ ВКР лучше, чем покупка готового проекта, можно следующим:
                </p>
                <ol>
                    <li>При заказе работы вы сможете предъявить исполнителю требования по срокам, цене и другим тонкостям. В результате получите качественный продукт по разумной стоимости и вовремя!</li>
                    <li>Многие студенты подрабатывают написанием дипломных работ, но делают их некачественно. Покупая готовую ВКР через интернет или у посредников, вы не сможете быть уверенным в качестве продаваемого текста и узнать точно, кто выполнял задание и какой у него имеется опыт в нужной вам сфере.</li>
                    <li>В случае с готовой дипломной работой вы берете на себя все правки и коррекции, о которых вас попросит научный руководитель. При заказе в BeSmarter! ваш диплом по экономике исполнители ведут до его защиты, то есть перерабатывают и исправляют по необходимости сами.</li>
                </ol>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит цена
                </h2>
                <p className="block-text__par">
                    Стоимость диплома по экономике на заказ зависит от срока выполнения, количества страниц, сложности проблематики. Наличие чертежей, графиков, таблиц, необходимость написать рецензию и речь для защиты – все это повышает цену диплома. Срочные заказы выполняются по более высокой стоимости.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как можно сэкономить?
                </h2>
                <p className="block-text__par">
                    Если вы хотите получить качественный диплом по экономике на заказ по более низкой цене, следуйте нашим советам:
                </p>
                <ul>
                    <li>
                        Оформите заявку на написание заранее, за 2-3 месяца до защиты ВКР.
                    </li>
                    <li>
                        Выполните самую простую часть диплома самостоятельно, например, введение, заключение, графики или таблицы.
                    </li>
                    <li>
                        Максимально точно ставьте задачи перед исполнителем во время заказа. Это позволит избежать доработок вашего диплома по экономической дисциплине.
                    </li>
                </ul>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества
                </h2>
                <p className="block-text__par">
                    Специалисты BeSmarter! работают с заказчиками по следующей схеме:
                </p>
                <ol>
                    <li>
                        Составляют план диплома.
                    </li>
                    <li>
                        Получают аванс за выполнение дипломной работы.
                    </li>
                    <li>
                        Выполняют каждую главу ВКР поочередно. Параграфы высылаются заказчику только после оплаты.
                    </li>
                </ol>
                <p className="block-text__par">
                    Если вы ищете профессиональных исполнителей для диплома по экономике на заказ, обратитесь в BeSmarter!. У нас работает отличная команда опытных специалистов, поэтому мы гарантируем вам качество услуг.
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
