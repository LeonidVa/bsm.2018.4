import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import kursovaya from 'components/config/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Заказать курсовую работу онлайн – курсовая работа на заказ в Москве | Купить курсовую работу срочно недорого в РФ – цены, сроки написания под ключ" description="Хотите качественно заказать курсовую работу в Москве? Только в BeSmarter! можно заказать курсовую работу онлайн, недорого и срочно, даже за 1 день. Не теряйте времени, оформляйте заказ курсовых работ прямо сейчас | Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать курсовую работу на заказ купить недорого онлайн срочно написать курсовик помощь в написании курсача с подтверждением от антиплагиата в Москве" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Курсовая работа</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link>
                    <a href="#form" className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/kurs-rab.jpg') + ")",}}>
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

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <section className="block-service">
                <Link href="/zashitit">
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
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
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
                    Заказать курсовую работу
                </h1>
                <p className="block-text__par">
                    Многим студентам требуется помощь в написании курсовой работы. Чаще всего трудности возникают из-за недостатка времени.
                </p>
                <p className="block-text__par">
                    Если вам срочно нужна курсовая, предлагаем воспользоваться услугами специалистов BeSmarter! Наша компания успешно работает в данной сфере более 10 лет. Мы можем срочно написать курсовую от 1 дня, вне зависимости от сложности темы.
                </p>
                <p className="block-text__par">
                    Своевременность сдачи готовой работы гарантируется официальным договором, подписываемым на стадии предварительного собеседования. При этом у нас вы сможете срочно заказать курсовую работу без ущерба качеству. В случае необходимости мы будем вам сдавать на проверку каждую главу.
                </p>
                <p className="block-text__par" style={{fontStyle: 'italic'}}>
                    Только в BeSmarter! можно заказать курсовую работу онлайн, недорого, срочно и качественно. Не теряйте времени!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как купить курсовую работу на заказ недорого?
                </h2>
                <p className="block-text__par">
                    На стоимость услуги влияют несколько объективных факторов.
                </p>
                <ul>
                    <li>
                        <b>Тема. </b>По гуманитарным дисциплинам можно достаточно недорого купить курсовую работу на заказ. Технические специальности стоят в среднем дороже. Кроме того, если вы решите написать курсовую на заказ, цена будет определяться сложностью конкретной темы. Здесь мы сможем помочь сэкономить. Чтобы заказать курсовую работу недорого, пришлите список доступных тем (если доступен выбор), и мы подберем самую «дешевую».
                    </li>
                    <li>
                        <b>Сроки. </b>Заказ курсовой работы недорого возможен только при оптимальном количестве времени, доступном для ее выполнения. Если же сроки сокращаются до 1-2 суток, то нам приходится привлекать нескольких специалистов. Или предлагать им писать курсовые на заказ внеурочно. Это, разумеется, сказывается на расценках. Поэтому, чтобы заказать курсовую работу онлайн недорого, постарайтесь подать заявку как можно раньше.
                    </li>
                    <li>
                        <b>Материалы. </b>При наличии готовых наработок можно оформить онлайн-заказ курсовой дешево. Ваши материалы сэкономят нам время, а вам – деньги.
                    </li>
                </ul>
                <p className="block-text__par" style={{fontStyle: 'italic'}}>
                    Следуйте этим советам, и сможете писать курсовые работы на заказ недорого!
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
                <h2 className="block-text__title">
                    Хотите заказать курсовую работу онлайн или лично?
                </h2>
                <ol>
                    <li>
                        Сайт. Оформляется курсовая работа на заказ посредством заполнения <a href="#form">онлайн-заявки</a> (Москва и другие города).
                    </li>
                    <li>
                        Телефон. Принимаются заявки на написание курсовых работ на заказ по бесплатному номеру (Москва и другие города).
                    </li>
                    <li>
                        Визит. Лучший способ заказать курсовую работу в Москве – посетить наш уютный офис в центре столицы!
                    </li>
                </ol>
                <p className="block-text__par" style={{fontStyle: 'italic'}}>
                    Закажите курсовую работу сегодня – это быстро и удобно!
                </p>
            </section>

            <Video>
                <iframe src="https://drive.google.com/file/d/1wyWdWvevGsIBbyp-D7T40O-JQky9R5s5/preview"></iframe>
            </Video>

            <a name="form" id="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <LinksBlock links={kursovaya}/>
        </div>
    </Wrapper>
);


export default page
