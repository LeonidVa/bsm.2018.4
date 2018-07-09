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

import LinksBlock from 'components/common/LinksBlock';
import otchet from 'components/config/linksBlock/otchet';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Заказать отчет по учебной практике – купить отчет по учебной практике в Москве и РФ срочно – цены, сроки написания под ключ" description="Предлагаем заказать отчет по учебной практике! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img4">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать отчет по учебной практике купить недорого" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/zakazat-otchet-po-praktike">
                        <a>Отчёт по практике</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Учебной</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>



            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
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

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
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
                <h1 className="block-text__title">
                    Заказать отчет по учебной практике
                </h1>
                <p className="block-text__par">
                    В нашей компании собран лучший преподавательский состав, состоящий из действующих специалистов разных дисциплин с учеными степенями, начиная от преподавателей вузов до кандидатов наук. Вы будете довольны результатом!
                </p>
                <p className="block-text__par">
                    Перед совершением заказа клиент может лично пообщаться с возможными исполнителями и выбрать на свой взгляд лучшего кандидата. Более 98% наших заказчиков защищаются на «отлично» вследствие такого профессионального подхода.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как заказать отчет по учебной практике недорого
                </h2>
                <ul>
                    <li>
                        Не теряйте времени. Заказать отчет по учебной практике лучше заблаговременно. Наши сотрудники смогут написать вашу работу срочно.
                    </li>
                    <li>
                        Проконсультируйтесь с менеджером. При возможности свободного выбора темы, предоставьте нам право подобрать наилучший вариант, а также посоветовать вам, как купить отчет по учебной практике недорого!
                    </li>
                    <li>
                        Предложите свои наработки. Если вы начали самостоятельно писать учебную практику, принесите нам эти наработки, мы применим их при написании вашего отчета и снизим цену за помощь в написании учебной практики.
                    </li>
                    <li>
                        Особые требования. Мы поможем, если вам требуется заказать написание отчета по учебной практике на другом иностранном языке или 100% уникальность текста (при стандартных 80-98%).
                    </li>
                </ul>
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
                    Какие гарантии предоставляет компания BeSmarter!
                </h2>
                <ul>
                    <li>
                        <b>Качество</b>.  Отдел контроля компании проводит несколько этапов проверки работ, написанных под заказ.
                    </li>
                    <li>
                        <b>Оригинальность</b>. Специалисты пишут каждый отчет по учебной практике «с нуля», с учетом поставленных требований заказчика, не опираясь на ранее написанные личные или чужие работы.
                    </li>
                    <li>
                        <b>Пунктуальность</b>. Ни у одной заказанной работы не было задержек со сдачей ни на день. Все работы сдаются в срок, прописанный в договоре.
                    </li>
                    <li>
                        <b>Конфиденциальность</b>. Факт сотрудничества остается втайне. В юридически заверенном договоре прописываются обязательства о неразглашении. В нашей компании вы сможете заказать отчет по учебной практике недорого, срочно и с гарантией качества.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как купить отчет по учебной практике в Москве
                </h2>
                <p className="block-text__par">
                    Есть несколько способов заказать работу:
                </p>
                <ul>
                    <li>
                        На нашем сайте можно заполнить <b><a href="#form">онлайн-заявку</a></b>.
                    </li>
                    <li>
                        Наши менеджеры всегда рады вашему звонку +7(495) 772-4090.
                    </li>
                    <li>
                        Либо встретиться лично у нас - в удобном офисе, в центре столицы по адресу, указанному в наших <Link href="/contacts"><b><a>контактах</a></b></Link>.
                    </li>
                </ul>
                <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
                    BeSmarter! – это качественные, уникальные, грамотно оформленные работы под заказ в Москве на выгодных условиях!
                </p>
            </section>

            <Video>
                <iframe src="https://drive.google.com/file/d/1pOfa1kQsnKv9gwPUNAkv3pnd29Pxwouq/preview"></iframe>
            </Video>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={otchet}/>
        </div>
    </Wrapper>
);


export default page
