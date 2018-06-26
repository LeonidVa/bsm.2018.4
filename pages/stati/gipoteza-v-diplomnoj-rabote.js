import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Гипотеза в дипломной работе – пример гипотезы в дипломной работе на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="В статье раскрыта тема: «Гипотеза в дипломной работе», приведены общие рекомендации, примеры и образцы гипотез дипломных работ." />
                <meta name="keywords" content="Как составить план дипломной работы содержание образец пример оформление выглядит сделать правильно написать оглавление 2018" />
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
                        <a>Гипотеза в дипломной работе</a>
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

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Гипотеза в дипломной работе (пример)
                </h2>
                <p className="block-text__par italic">
                    "Создавая большой проект для предоставления оценочной комиссии в ВУЗах, необходимо оснащать ее научной, рабочей гипотезой. Если исключить такую нить особого взгляда на корень темы, то весь пакет разработок и исследований потеряет свою значимость в научной проекции."
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Что такое гипотеза в дипломной работе
                </h2>
                <p className="block-text__par">
                    Гипотеза предполагает возможность предоставить аудитории и читателям свой, совершенно новый взгляд на решение какой-то задачи, изучение чего-либо. Все предложенные варианты и выдвинутые теории не носят какой-то доказательной базы, а оговариваются собственные наблюдения и предположения. Для того, чтобы сформировать такой проект необходимо изучить множество источников, провести разнообразные исследования, и только на основании полученных знаний раскрыть гипотезу в дипломной работе.
                </p>
                <p className="block-text__par">
                    Любое видение проблемы, раскрытой в работе должно легко проверятся на основе имеющихся методик. К тому же, необходимо раскрывать в тексте конкретные данные и уточнения, использовать источники и научную литературу. Гипотеза исследования в дипломной работе, к примеру, не всегда может быть очерчена вначале разработок. Иногда ее формулировка и название формируется на основании вывода из проделанной работы.
                </p>
                <p className="block-text__par">
                    Нередко гипотезу раскрывают в ключе подтверждения или, наоборот, опровержения какой-либо уже имеющейся сомнительной теории или факта. Помимо абстрактного понятия, существует еще различие в структуре и форме изложения, характере и уровне. Но основополагающим будет определение возможности проверить не только формат изложения мысли, но и контроль достоверности.
                </p>
                <p className="block-text__par">
                    Все эти факторы создают множество сложностей и отнимают много времени, поэтому некоторые предпочитают <Link href="/diplom-na-zakaz"><b><a>заказать дипломную работу</a></b></Link> специалистам, нежели затрачивать лишнее время в бессмысленных поисках нужной информации.
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
                    Как написать гипотезу в дипломной работе
                </h2>
                <p className="block-text__par">
                    Способы проверки имеют несколько разных ответвлений, так же как и построение ее доказательств. Немаловажную роль в отличиях проверки имеет направленность работы.
                </p>
                <ul>
                    <li>
                        Теоретическая работа. Чтобы не задумываться о том, как написать гипотезу в дипломной работе, лучше подготовить достоверный список источников с теорией, взятой за основу. И только на основе конкретных источников формировать собственные умозаключения и анализ, выстраивание логической цепочки.
                    </li>
                    <li>
                        С практическими работами все немного сложнее. В такой работе необходимо предоставлять доказательную базу проведенных экспериментов, полученных наблюдений или анкетирования. Чаще всего такие уловки используют психологи или социологии, педагоги и логопеды. Безусловно, анализ таких практических работ будет проверяться на основании приложенных практик.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как сформулировать гипотезу в дипломной работе
                </h2>
                <p className="block-text__par">
                    Многие задумываются над тем, как сформулировать гипотезу в дипломной работе и очень волнуются, если с первых попыток ничего не проходит на ум. Как правило, формулировка всплывает уже в процессе написания концовки всего проекта. Следите за правильностью формирования плана, точным и равномерным распределением информации, наличием ссылок и значительным количеством источников.
                </p>
                <p className="block-text__par">
                    Не бойтесь обращаться за консультацией к своему руководителю научного проекта еще с первых попыток составления плана.
                </p>
            </section>

            <section className="block-text">
                <p className="block-text__par italic">
                    "Успех отличной дипломной работы формируется из правильного плана, качественного изложения, наличия ссылок и четко сформированной гипотезы!"
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как правильно сформировать гипотезу в дипломной работе
                </h2>
                <p className="block-text__par">
                    Чтобы понять более конкретно, что такое гипотеза исследования в дипломной работе и как ее правильно сформировать, предлагаем провести аналогию и сравнить с уже готовой работой. Тема примера «Сравнение иконописи двух государств: Киевская Русь и Византия». В любом учебнике по истории или культуре можно узнать, что только после 988 года, когда Князь Владимир окрестил свой народ в Днепре, началось внедрение культуры Византии на этих землях.
                </p>
                <p className="block-text__par">
                    Заимствовались варианты росписи икон, бытовых предметов, одежды – всего, что связано с вероисповеданием. Но, несмотря на схожесть в названиях и формах, явно видна и визуальная разница. В Киевской Руси иконы отображали реальную боль и трагизм людей, передавали силу духа и волю славянской нации. Роспись византийской культуры, наоборот, демонстрирует праздность и изысканность в подборе узоров и буйства красок. Вот в этом и заключается суть того, как пишется гипотеза в дипломной работе.
                </p>
                <p className="block-text__par">
                    Дипломная работа в таком ключе может отображать гипотезу во введении или в заключении, где автор делает акцент на «щадящем» или «косвенном» влиянии Византии на культуру и роспись икон Киевской Руси. И подвести итог, делая акценты на уникальных моментах и четко оговаривая реальные сходства. Тема весьма обширна и дает волю размышлениям, однако автор выбирает направление и углубленность темы. К тому же, не зная взглядов преподавателей, дабы не оказаться на тонкой грани, лучше избегать каких-то резких утверждений и вести нейтральную линию.
                </p>
            </section>

            <Video>
                <iframe src="https://www.youtube.com/embed/Vm2UK9MVGn4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </Video>

        </div>
    </Wrapper>
);


export default page
