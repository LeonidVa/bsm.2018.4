import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/diplom';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Заказать дипломную работу срочно – помощь в написании дипломной работы (диплома) на заказ в Москве"
             description="Хотите заказать дипломную работу в Москве?  В компании «BeSmarter!» работают опытные профессионалы, готовые написать вашу дипломную работу на заказ срочно от 1-го дня, по выгодной цене! Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="дипломная работа заказать диплом на заказ в Москве купить помощь в написании написать срочно недорого онлайн цена стоимость выполнение"/>
            </MetaTags>

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Дипломная работа</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link>
                    <a href="#form" className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
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
                <Link href="">
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
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="">
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
                    Заказать дипломную работу
                </h1>
                <p className="block-text__par">
                    Ищете компетентного автора, который сможет выполнить написание диплома на заказ качественно, оперативно и дешево? В таком случае поздравляем – вы пришли по нужному адресу. В компании BeSmarter! можно заказать дипломную работу срочно, недорого и с гарантией качества.
                </p>
                <p className="block-text__par">
                    Наша основная специализация – подготовка научных трудов любого типа для студентов, аспирантов и молодых ученых. Для этого мы подобрали штат опытных профессионалов, способных написать дипломную работу на заказ в точном соответствии с пожеланиями даже самого строго научного руководителя.
                </p>
                <p className="block-text__par">
                    Главная цель, преследуемая нами, – это ваша отличная защита. Мы не просто предлагаем купить дипломную работу высокого качества, но и обеспечиваем квалифицированную поддержку до самой успешной защиты. Ответственность – это основной девиз BeSmarter!
                </p>
            </section>

            <FormEstimate />


            <ImageBlock imageSrc={require('static/images/block/dip-na-zakaz.jpg')}/>


            <section className="block-text">
                <h2 className="block-text__title">
                    Почему стоит заказать диплом именно у нас?
                </h2>
                <ul>
                    <li>
                        <b>Компетентность.</b> Только у нас вы сможете заказать дипломную работу, выполненную действующим преподавателем вуза с кандидатской научной степенью.
                    </li>
                    <li>
                        <b>Универсальность.</b> Мы способны написать диплом на заказ по любой специальности и тематике – начиная от гуманитарных предметов и заканчивая техническими дисциплинами.
                    </li>
                    <li>
                        <b>Оперативность.</b> У нас возможен заказ дипломной работы срочно (от 1 дня) без ущерба ее качеству. Ускорение достигается за счет использования не имеющей аналогов фирменной схемы.
                    </li>
                    <li>
                        <b>Профессионализм.</b> Мы оказываем помощь в написании диплома только на основе официального договора, который предоставляет вам все юридические гарантии.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Что важно учитывать, чтобы купить дипломную работу недорого
                </h2>
                <ul>
                    <li>
                        <b>Дисциплину.</b> По гуманитарным предметам можно заказать дипломную работу недорого, технические специальности оцениваются выше.
                    </li>
                    <li>
                        <b>Тематику.</b> Стоимость написания диплома даже в рамках одной специальности зависит от сложности выбранной темы.
                    </li>
                    <li>
                        <b>Требования.</b> Стоимость написания дипломной работы на заказ будет меньше при отсутствии специфических особенностей (например, 100% уникальность текста).
                    </li>
                    <li>
                        <b>Время.</b> Заказ диплома срочно оплачивается дополнительно. Стандартное время написания – около месяца.
                    </li>
                </ul>
            </section>

            <Video>
                <iframe src="//vk.com/video_ext.php?oid=372065572&id=456239031&hash=a7e75ba37906d972&hd=2" frameborder="0" allowfullscreen></iframe>
            </Video>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как и где заказать дипломную работу в Москве?
                </h2>
                <ul className="fitted">
                    <li>
                        Получить помощи при написании диплома можно онлайн  – просто <b><a href="#form">заполните заявку</a></b> на сайте.
                    </li>
                    <li>
                        Связаться с нашими менеджерами по телефону <br/>8 (495) 772-40-90.
                    </li>
                    <li>
                        Заказать диплом в Москве у нас в <Link href="/contacts"><b><a>офисе</a></b></Link> (пер. Большой Кисловский, дом 1 стр. 2, офис 211).
                    </li>
                </ul>
                <p className="block-text__par">
                    Общение с нашими менеджерами вызовет у вас только приятные эмоции! Обращайтесь, BeSmarter! – это качественная дипломная работа на заказ в Москве на самых выгодных условиях.
                </p>
            </section>

            <Video>
                <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameborder="0" allowfullscreen></iframe>
            </Video>

            <a name="form" id="form"/>
            <FormOrder />

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
