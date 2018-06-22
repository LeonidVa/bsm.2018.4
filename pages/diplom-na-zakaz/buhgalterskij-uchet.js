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
import MetaTags from 'react-meta-tags';



const page = () => (
    <Wrapper title="Заказать дипломную работу по бухгалтерскому учёту в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="" />
                <meta name="keywords" content="" />
            </MetaTags>
            
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
                        <a>По бухгалтерскому учёту</a>
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
                    Заказать дипломную работу по бухгалтерскому учёту
                </h2>
                <ul>
                    <li>
                        Хотите, чтобы для Вас в сжатые сроки была написана дипломная работа по бухгалтерскому учёту?
                    </li>
                    <li>
                        Вам нужно купить дипломную работу по бухучёту, которая написана высококлассными специалистами?
                    </li>
                    <li>
                        Необходима дипломная работа по бухучёту с высокой уникальностью?
                    </li>
                </ul>
                <p className="block-text__par">
                    Тогда Вам помогут специалисты компании BeSmarter!
                </p>
                <p className="block-text__par">
                    Мы напишем для Вас актуальную и содержательную работу по бухучёту в срок и даже от одного дня!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Купить дипломную работу по бухгалтерскому учёту
                </h2>
                <p className="block-text__par">
                    Заказать дипломную работу по бухгалтерскому учёту – это отличный выход для студентов, у которых нет времени на написание диплома.
                </p>
                <p className="block-text__par">
                    Опытные кандидаты и доктора наук, работающие в компании BeSmarter!, охотно напишут для Вас качественную работу.
                </p>
                <p className="block-text__par">
                    Став нашим заказчиком, Вы получите:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <b>Оперативность выполнения работы</b><br/>
                        Мы напишем для Вас диплом в срок от одного дня.
                    </li>
                    <li>
                        <b>Полную безопасность</b><br/>
                        Все свои обязательства перед клиентом мы прописываем в официальном договоре.
                    </li>
                    <li>
                        Сделав у нас заказ, Вы можете быть уверены в получении качественной работы, написанной настоящими профессионалами своего дела.
                    </li>
                    <li>
                        <b>Приемлемую стоимость</b><br/>
                        Мы предлагаем своим клиентам разумное соотношение цены и качества работы. Заказать диплом по бухучёту можно по цене от 14000 рублей.
                    </li>
                    <li>
                        <b>Высокую уникальность работы</b><br/>
                        Заказать диплом по бухгалтерскому учёту в нашей компании – значит получить текст с уникальностью более 70% по системе «Антиплагиат».
                    </li>
                    <li>
                        <b>Бесплатное внесение правок</b><br/>
                        При возникновении замечаний к работе со стороны Вашего преподавателя, мы охотно внесем необходимые правки в гарантий срок.
                    </li>
                    <li>
                        <b>Сопровождение до успешной защиты</b><br/>
                        Мы готовы написать для Вас не только диплом, но и речь для защиты, презентацию проекта и другие материалы. Также наши менеджеры дадут Вам полезные советы о том, как уверенно и отлично защититься.
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
                    Написание диплома по бухгалтерскому учёту
                </h2>
                <p className="block-text__par">
                    Получив от Вас заказ на написание диплома, мы составляем техническое задание для нашего автора. В нём мы указываем предпочитаемые Вами научные методики и компании, на базе которых нужно провести исследования для Вас.
                </p>
                <p className="block-text__par">
                    Благодаря этому Вы получаете отличную работу, которая написана специально для Вас. Мы уверены: Вы сможете защититься на высший балл.
                </p>
                <p className="block-text__par">
                    Вам нужна интересная и качественная работа по бухучёту? Напишем!
                </p>
                <p className="block-text__par">
                    Звоните нам прямо сейчас +7 495 772 40 90, посетите наш офис на Арбате!
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
