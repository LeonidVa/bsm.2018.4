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
    <Wrapper title="Заказать дипломную работу по педагогике в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по педагогике по выгодной цене в Москве. Тел. +7 (495) 772-40-90." />
                <meta name="keywords" content="Дипломная работа по дошкольной социальной коррекционной педагогике" />
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
                        <a>По педагогике</a>
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
                <h1 className="block-text__title">
                    Заказать дипломную работу по педагогике
                </h1>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        Вас интересуют дипломные работы по дошкольной педагогике, подготовленные опытными педагогами?
                    </li>
                    <li>
                        Вы хотите сдать преподавателям дипломные работы по социальной педагогике с высокой уникальностью?
                    </li>
                    <li>
                        Вам требуется качественная и интересно написанная дипломная работа по педагогике?
                    </li>
                </ul>
                <p className="block-text__par">
                    Тогда Вам просто необходимо обратиться в компанию BeSmarter!
                </p>
                <p className="block-text__par">
                    Наши специалисты охотно подготовят для Вас дипломные работы по коррекционной педагогике и другим педагогическим дисциплинам!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Дипломная работа по педагогике
                </h2>
                <p className="block-text__par">
                    Если у Вас не достаточного количества времени для написания главного студенческого труда, то специалисты нашей компании подготовят для Вас дипломные работы по социальной педагогике в наиболее сжатые сроки.
                </p>
                <p className="block-text__par">
                    Обратившись в BeSmarter!, Вы получаете:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <b>Гарантии качества</b><br/>
                        Все наши обязательства перед клиентом указываются в контракте. Дипломные проекты от наших авторов – это итог научных исследований, проведенных специалистами с большим педагогическим опытом.
                    </li>
                    <li>
                        <b>Гарантии качества</b><br/>
                        Все наши обязательства перед клиентом указываются в контракте. Дипломные проекты от наших авторов – это итог научных исследований, проведенных специалистами с большим педагогическим опытом.
                    </li>
                    <li>
                        <b>Высокую уникальность текста</b><br/>
                        Дипломная работа по коррекционной педагогике, написанная нашими авторами, проверяется по системе «Антиплагиат». Ее уникальность – более 70%.
                    </li>
                    <li>
                        <b>Оперативность выполнения работ</b><br/>
                        Мы готовы написать для Вас диплом в срок от одного дня.
                    </li>
                    <li>
                        <b>Приемлемая стоимость</b><br/>
                        Мы предлагаем выгодное соотношение качества и цены, которая варьируется в пределах 14000-45000 рублей.
                    </li>
                    <li>
                        <b>Сопровождение до защиты</b><br/>
                        Мы готовы вносить правки в работу в течение гарантийного срока совершенно бесплатно. Но и после этого мы продолжаем сотрудничать с Вами до Вашей успешной защиты.
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
                    Заказать диплом по педагогике
                </h2>
                <p className="block-text__par">
                    Если Вы решили заказать дипломную работу по педагогике, то мы охотно принимаем Вашу заявку и подготавливаем техническое задание, по которому наш специалист пишет работу. В задании мы перечисляем предпочитаемые Вами методики, желаемый возраст и количество детей в группах, а также другие важные детали работы.
                </p>
                <p className="block-text__par">
                    Нужен качественный дипломный проект по педагогике? Напишем!
                </p>
                <p className="block-text__par">
                    звоните нам +7 495 772 40 90, воспользуйтесь удобной формой заказа или сразу приезжайте в наш <Link href="/contacts"><b><a>офис</a></b></Link>, который находится на Арбате!
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
