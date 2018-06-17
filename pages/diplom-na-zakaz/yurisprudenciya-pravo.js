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
import links from 'components/config/linksBlock/diplom';

import Video from 'components/common/VideoBlock';



const page = () => (
    <Wrapper title="Заказать дипломную работу по юриспруденции в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
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
                    <Link href="#">
                        <a>По юриспруденции</a>
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
                    Заказать дипломную работу по юриспруденции
                </h2>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        Вам необходима высококачественная, содержательная дипломная работа по юриспруденции, написанная всего за несколько дней?
                    </li>
                    <li>
                        Хотите купить дипломную работу по юриспруденции, подготовленную профессиональными авторами?
                    </li>
                    <li>
                        Нужна презентация дипломной работы по юриспруденции, которая поможет защититься на «отлично»?
                    </li>
                </ul>
                <p className="block-text__par">
                    Тогда Вам обязательно нужно обратиться к специалистам компании BeSmarter!
                </p>
                <p className="block-text__par">
                    Мы напишем для Вас интересный и содержательный диплом по юриспруденции на заказ!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Написание дипломной работы по юриспруденции
                </h2>
                <p className="block-text__par">
                    Если у Вас нет времени на написание работы, то Вы можете заказать диплом по юриспруденции у опытных авторов компании BeSmarter! Став нашим клиентом,Вы получите такие преимущества:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <b>Гарантии качества</b><br/>
                        Все свои обязательства по отношению к клиенту мы прописываем в договоре. Заказать дипломную работу по юриспруденции у наших специалистов – значит получить труд, написанный по итогам исследований, проведенных кандидатами и докторами юридических наук.
                    </li>
                    <li>
                        <b>Отличную уникальность текста</b><br/>
                        Дипломы, написанные в нашей компании, проходят проверку по системе «Антиплагиат». Это означает, что Вы получаете текст с уникальностью более 70%.
                    </li>
                    <li>
                        <b>Срочность подготовки работы</b><br/>
                        Наши авторы готовы написать диплом юридической тематики в срок от одного дня.
                    </li>
                    <li>
                        <b>Приемлемая цена</b><br/>
                        Мы предлагаем Вам доступную стоимость дипломной работы по юриспруденции. Цена дипломной работы по юриспруденции варьируется в пределах от 14 до 45 тысяч рублей.
                    </li>
                    <li>
                        <b>Внесение правок в работу</b><br/>
                        Если у Вашего научного руководителя есть замечания к тексту работы, наши специалисты бесплатно внесут изменения в гарантийный срок до 30 дней.
                    </li>
                    <li>
                        <b>Сопровождение до успешной защиты</b><br/>
                        По Вашему желанию мы напишем для Вас не только сам дипломный проект, но и презентацию или доклад к диплому по юриспруденции. А советы наших менеджеров и преподавателей помогут Вам получить на защите твёрдую «пятёрку».
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

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Купить дипломную работу по юриспруденции
                </h2>
                <p className="block-text__par">
                    Получив ваш заказ, мы составляем техническое задание для нашего автора. В нём мы указываем, какие методики Вы предпочитаете, и на каком материале для Вас должны быть проведены исследования. Автор пишет диплом в соответствии с Вашими пожеланиями.
                </p>
                <p className="block-text__par">
                    Поэтому Вы получаете грамотную именно для Вас написанную работу. Мы убеждены, что Вы сможете превосходно защититься!
                </p>
                <p className="block-text__par">
                    Нужно заказать диплом? Звоните нам по номеру +7 495 772 40 90, заполните форму заявки или приезжайте в наш <Link href="/contacts"><b><a>офис</a></b></Link> расположенный на Арбате!
                </p>
            </section>

            <Video>
                <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameborder="0" allowfullscreen></iframe>
            </Video>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
