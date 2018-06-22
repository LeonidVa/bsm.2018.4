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

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Главная">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="Полезные статьи в помощь студентам и аспирантам, читайте на сайте BeSmarter!" />
                <meta name="keywords" content="" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Статьи</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Разные статьи о том, как подготовиться студенту!
                </h2>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Link href="/stati/skoraya-pomoshch-studentu">
                            <a>Скорая помощь студенту!</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/idealnyj-student-i-idealnyj-aspirant-kak-imi-stat">
                            <a>Идеальный студент и идеальный аспирант. Как ими стать?</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/kak-naladit-otnosheniya-s-nauchnym-rukovoditelem">
                            <a>Как наладить отношения с научным руководителем</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                            <a>Как подготовиться и поступить в аспирантуру</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/kak-podgotovitsya-k-ekzamenu">
                            <a>Как подготвоиться к экзамену</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/kak-pravilno-zakazat-diplom">
                            <a>Как правильно заказать диплом</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/kak-uspeshno-zashhitit-diplomnuyu-rabotu">
                            <a>Как успешно защитить дипломную работу</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/napisanie-diploma">
                            <a>Написание диплома</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/napisanie-kursovyh-rabot">
                            <a>Написание курсовых работ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/napisanie-referatov">
                            <a>Написание рефератов</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/neskolko-pravil-uspeshnoj-zashhity">
                            <a>Несколько правил успешной защиты</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/pochemu-studenty-vybirayut-uslugu-diplom-na-zakaz">
                            <a>Почему студенты выбирают услуги диплом на заказ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/samodisciplina-zalog-otlichnoj-ucheby">
                            <a>Самодисциплина - залог отличной учебы</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/sovmestit-rabotu-i-uchebu-realno">
                            <a>Совместить работу и учебу реально!</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/stan-luchshim-studentom-v-vuze">
                            <a>Стань лучшим студентом в ВУЗе!</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/vybiraem-vuz-svoej-mechty">
                            <a>Выбираем вуз своей мечты</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/kak-sostavit-plan-diplomnoj-raboty">
                            <a>Как составить план дипломной работы</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/zakluchenie-po-diplomnoj-rabote">
                            <a>Как написать заключение к дипломной работе (образец)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/gipoteza-v-diplomnoj-rabote">
                            <a>Гипотеза в дипломной работе</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/recenziya-na-diplomnuyu-rabotu">
                            <a>Рецензия на дипломную работу</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/stati/rech-k-diplomnoj-rabote">
                            <a>Речь к дипломной работе</a>
                        </Link>
                    </li>
                </ul>
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
                    <Link href="/razrabotka-diplomnogo-proekta">
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

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

        </div>
    </Wrapper>
);


export default page
