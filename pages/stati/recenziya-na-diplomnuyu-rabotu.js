import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import Video from 'components/common/VideoBlock';
import ImageBlock from "../../components/common/ImageBlock";



const page = () => (
    <Wrapper title="Как написать рецензию на дипломную работу образец – пример рецензии дипломной работы на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В статье раскрыта тема: «Как написать рецензию на дипломную работу», приведены общие рекомендации, примеры и образцы заключений дипломных работ.">
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
                        <a>Рецензия на дипломную работу</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/stati/recenziya-na-diplomnuyu-rabotu#form">
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


            <section className="block-service__dis">
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
            </section>



            <section className="block-text">
                <h1 className="block-text__title">
                    Рецензия на дипломную работу (образец)
                </h1>
                <p className="block-text__par">
                    Первоначальное предназначение рецензии состоит в создании внешней объективной оценки исследовательской деятельности, которую провел студент при написании дипломной работы. В этом дополнении к работе пишется мнение независимого рецензента (другого преподавателя, представителя предприятия, где выпускник проходил практику) о дипломной работе после ознакомления с материалом. Таким образом, исключается субъективность мнения, что позволяет дать правильную оценку проделанной работе.
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/19(12).jpg')}/>



            <section className="block-text">
                <p className="block-text__par">
                    По правилам рецензент должен полностью ознакомиться со всеми частями работы:
                </p>
                <ul>
                    <li>
                        оценить структуру;
                    </li>
                    <li>
                        используемую литературу;
                    </li>
                    <li>
                        изучить практическую часть и значимость исследования;
                    </li>
                    <li>
                        прочесть каждый раздел работы.
                    </li>
                </ul>
                <p className="block-text__par">
                    К счастью или к прискорбию студента, преподаватели далеко в каждом случае имеют достаточно времени, чтобы тратить по несколько часов, а то и дней на тщательное изучение напечатанного. По этой причине студенту важно знать, как писать рецензию на дипломную работу, ведь в некоторых случаях именно ему придется составлять данный документ. А преподаватель, если его устроит содержание рецензии, просто подписавшись под готовым документом.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Оформление рецензии на дипломную работу
                </h2>
                <p className="block-text__par">
                    Строгих требований о том, как должна быть оформлена дипломная работа, нет. Но некоторые негласные правила профессионального структурирования документа все же существуют. В большей степени строгость оформления рецензии зависит от того, на какую оценку рассчитывает студент.
                </p>
                <p className="block-text__par">
                    Если анализ диплома сводится к рекомендации поставить наивысший балл, необходимо глубоко оценить все части исследовательской работы, аргументировано доказать достижение всех поставленных задач, оценить качество подачи материала, уделить внимание влиянию на материал собственных идей и мыслей автора. Необходимости в таком строгом подходе нет, если предполагается более низкая оценка за дипломную работу.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />



            <section className="block-text">
                <h2 className="block-text__title">
                    Как написать рецензию на дипломную работу?
                </h2><br/>
                <p className="block-text__par italic center">
                    "Рецензия – структурированный отзыв одного или нескольких преподавателей вуза, который суммирует и подводит итоговую оценку работе студента. Написание рецензии является обязательным этапом защиты выпускного исследовательского проекта."
                </p><br/>
                <p className="block-text__par">
                    Особых проблем с самостоятельным написанием анализа работы у вас возникнуть не должно, ведь, кто как не вы должен знать сильные и слабые стороны научной работы. Но даже если было решено <a href="/diplom-na-zakaz">заказать дипломную работу</a>, вы все равно будете иметь преимущества перед преподавателем-рецензентом, так как, как минимум, у вас будет больше времени на изучение материала.
                </p>
                <p className="block-text__par">
                    Обычно рецензия пишется простым, свободным языком. Рекомендуется только избегать разговорных размытых фраз, включая: «отличная дипломная работа», «проведены серьезные исследования», «полностью раскрыта тема», «проделана большая работа» и т.д. Отзыв должен писаться максимально сжато, четко и основываясь на реальные факты.
                </p>
                <p className="block-text__par">
                    Базовая структура рецензии следующая:
                </p>
                <ol>
                    <li>
                        Вступительная часть, в которой указывается актуальность темы и дается оценка правильности структуры.
                    </li>
                    <li>
                        Основная часть, где детально разбираются основные структурные элементы и разделы работы, находятся ее преимущества и основные неточности, ошибки.
                    </li>
                    <li>
                        Короткий вывод обо всей дипломной работе в целом, где необходимо указать, допускается ли работа к защите, какова рекомендуемая оценка от автора документа.
                    </li>
                </ol>
            </section>


            <a name="form" id="form"/>
            <FormOrder />




            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="https://www.youtube.com/embed/-heyiD9tCLc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </Video>

            <section className="block-text">
                <h2 className="block-text__title">
                    Рецензия включает следующие составные части:
                </h2>
                <ol>
                    <li>
                        Шапка рецензии содержит тему исследовательской работы, название факультета и данные о студенте.
                    </li>
                    <li>
                        Сразу за заголовком кратко указывается обоснование актуальности выбранной темы, указывается, что рассмотрены основные понятия и методы анализа по теме материала. Указывается, какие проблемы поднял автор, примененные методики и техники в рамках темы.
                    </li>
                    <li style={{marginBottom: 'unset'}}>
                        Далее следует оценка работы с точки зрения рецензента:
                        <br/><br/>
                        <ul>
                            <li>
                                Приводится оценка структуры дипломной работы и соответствия содержания материала изначальному заданию (1 предложение). Описывается, из какого количества глав состоит работа, насколько логично подан текст, оценивается наличие и грамотность примененных терминов.
                            </li>
                            <li>
                                Дается краткое содержание, и оценка каждой главы материла.
                            </li>
                            <li>
                                Общая оценка всей работы, указание ее недостатков и достоинств, практической значимости проекта. Рекомендуемый итоговый балл от рецензента.
                            </li>
                            <li style={{marginBottom: 'unset'}}>
                                Личная информация о рецензенте, дата, инициалы, подпись.
                            </li>
                        </ul>
                    </li >
                </ol>
                <p className="block-text__par">
                    Важно грамотно заполнить каждую часть рецензии, в том числе, указать недостатки. Можно указать нейтральные, не влияющие на оценку недостатки. К примеру, написать, что в материале имеется малое число графиков, диаграмм и изображений или, что в некоторых частях материала не до конца выдержать строгий научный стиль повествования.
                </p>
                <p className="block-text__par">
                    Обязательно нужно самостоятельно указать, что данные неточности не влияют на качественный уровень научно-исследовательской работы. Если у вас возникнут сложности в написании рецензии, эту задачу можно всегда поручить более опытному рецензенту.
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />


        </div>
    </Wrapper>
);


export default page
