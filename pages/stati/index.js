import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Разные статьи о том, как подготовиться студенту!" description="Полезные статьи в помощь студентам и аспирантам, читайте на сайте BeSmarter!">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
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

            <section className="block-text">
                <h1 className="block-text__title">
                    Разные статьи о том, как подготовиться студенту!
                </h1>
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
                        <Link href="/stati/zakluchenie-k-diplomnoj-rabote">
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

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/stat_.jpg')}/>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder />

        </div>
    </Wrapper>
);


export default page
