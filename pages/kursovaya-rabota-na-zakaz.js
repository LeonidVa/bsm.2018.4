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
import links from 'components/config/linksBlockConfig'



const page = () => (
    <Wrapper title="Главная">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/kursovaya-rabota-na-zakaz">
                        <a>Курсовая работа</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>



            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <div className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/i.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Курсовая работа</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 4 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </div>
                </Link>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </div>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </div>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </div>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <div className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">Доступные цены</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </div>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </div>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </div>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Дипломная работа на заказ
                </h2>
                <p className="block-text__par">
                    Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
                </p>
                <p className="block-text__par">
                    Не желаете тратить большое количество времени на самостоятельную разработку заданной темы, и хотите заказать диплом у профессионалов?
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

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
                    ПОМЕНЯТЬ Дипломная работа на заказ
                </h2>
                <p className="block-text__par">
                    Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
                </p>
                <p className="block-text__par">
                    Не желаете тратить большое количество времени на самостоятельную разработку заданной темы, и хотите заказать диплом у профессионалов?
                </p>
                <p className="block-text__par">
                    Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
                </p>
                <p className="block-text__par">
                    Не желаете тратить большое количество времени на самостоятельную разработку заданной темы, и хотите заказать диплом у профессионалов?
                </p>
                <p className="block-text__par">
                    Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
                </p>
                <p className="block-text__par">
                    Не желаете тратить большое количество времени на самостоятельную разработку заданной темы, и хотите заказать диплом у профессионалов?
                </p>
                <p className="block-text__par">
                    Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
                </p>
                <p className="block-text__par">
                    Не желаете тратить большое количество времени на самостоятельную разработку заданной темы, и хотите заказать диплом у профессионалов?
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page