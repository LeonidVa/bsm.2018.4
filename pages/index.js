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
    <Wrapper title="Главная">
        <div className="wrapper main">
            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
                <NavRow url='/price' title="Услуги и цены" description="Все для твоей учебы"/>
                <NavRow url='/contacts' title="Контакты" description="Ты знаешь, где нас найти"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <div className="block-service__top" style={{backgroundImage: "url(" + require('img/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Дипломная работа</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 14 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </div>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Дипломный проект</span>
                            <p>от 21 000 руб.</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </div>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA</span>
                            <p>от <b>25 000</b> руб.</p>
                        </div>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <section className="block-text">
                <h2 className="block-text__title">Работа по твоим требованиям</h2>
                <p className="block-text__par">
                    Дипломная работа на заказ будет выполняться согласно пожеланиям
                    твоего научного руководителя. При написании дипломной работы пожелания
                    твоего научного руководителя учитываются до самой защиты.
                    Получая работу, написанную согласно всем требованиям,
                    твой научный руководитель обязательно
                    будет доволен и высоко ее оценит.
                </p>
            </section>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <div className="block-service__top color-33" style={{backgroundImage: "url(" + require('img/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Диссертационные работы</span>
                            <p className="block-service__par">Написание и оформление</p>
                            <p className="block-service__par">Публикации</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </div>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </div>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Кандидатская диссертация</span>
                            <p>Автор на связи</p>
                        </div>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Докторская диссертация</span>
                            <p>Конфиденциально</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <div className="block-service__top color-ff" style={{backgroundImage: "url(" + require('img/block/l.jpg') + ")",}}>
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

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('img/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
                </h2>
                <CallMeFormWithTimer timerDuration={155555} buttonText="Получить скидку">
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

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