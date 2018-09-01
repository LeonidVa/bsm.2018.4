import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Как успешно защитить дипломную работу | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Многие из студентов ведущих вузов защищают в первый раз (и частенько в последний) в своей жизни дипломный проект. Поэтому только одно упоминание о защите дипломной работы и недостаток опыта в данном деле приводит в ужас. Еще бы, ведь испытание для дипломника предстоит не из легких! Возникает мысль – купить диплом на заказ. Однако не стоит бояться, страх Вам отнюдь не товарищ. А вот сведущие специалисты с высшим образованием, написавшие не одну сотню дипломов – как раз наоборот, верные помощники и опора. Ведь кто кроме их знает досконально все правила написания дипломного проекта или работы.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

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
                    <Link href="/stati">
                        <a>Статьи</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Как успешно защитить дипломную работу</a>
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
                    Как успешно защитить дипломную работу
                </h1>
                <p className="block-text__par">
                    Многие из студентов ведущих вузов защищают в первый раз (и частенько в последний) в своей жизни дипломный проект. Поэтому только одно упоминание о защите дипломной работы и недостаток опыта в данном деле приводит в ужас. Еще бы, ведь испытание для дипломника предстоит не из легких! Возникает мысль – купить <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>. Однако не стоит бояться, страх Вам отнюдь не товарищ. А вот сведущие специалисты с высшим образованием, написавшие не одну сотню дипломов – как раз наоборот, верные помощники и опора. Ведь кто кроме их знает досконально все правила написания дипломного проекта или работы.
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/19(6).jpg')}/>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>




            <CurrentOffer />



            <section className="block-text">
                <h2 className="block-text__title">
                    Основные правила написания диплома
                </h2>
                <ul>
                    <li>
                        Каждому из студентов всегда назначают научного руководителя. Научным руководителем чаще всего бывает преподаватель. Научный руководитель знает требования каждого из преподавателей, которые могут быть в комиссии по защите. Поэтому не избегайте встреч с Вашим руководителем. Заранее обсудите с ним тему и каждую главу вашей дипломной работы.
                    </li>
                    <li>
                        Конечно, лучше писать диплом самому. Тогда Вы удете сами ориентироваться в материале «как рыба в воде». Но подобрать сильный материал на нужную тему достаточно сложно. Мы поможем Вам в написании дипломного проекта. Работа на заказ будет выполнена в срок. Все будет четко структурированно. Вы с легкостью разберетесь даже в самой сложной теме, ведь работу на тему напишет человек с большим преподавательским опытом и множеством научных публикаций по данной тематике дипломного проекта или работы.
                    </li>
                    <li>
                        Заказ диплома у специалиста нашей компании выгоден в связи с маленькими сроками предзащиты. Студенту дается максимум два дня для подготовки к предзащите дипломной работы. А ведь готовиться к предзащите нужно серьезнее, чем к защите. Именно от предзащиты зависит – справитесь ли Вы с защитой на все 100 %. Мы напишем Ваш диплом в короткие сроки, тем самым Вы сможете грамотно подойти к предзащите и выстроить сильную презентацию своего дипломного проекта.
                    </li>
                    <li>
                        Несмотря на то, что Вам помогают в написании работы – все равно следует посещать консультации преподавателей и научного руководителя. Станьте частым гостем в стенах их кабинетов. Во-первых, Вы выкажете уважение к ним. Во-вторых, оперативно узнаете  о возможных недочетах в работе. В-третьих, посоветуетесь и поймете, на что нужно обратить более пристальное внимание,  а чего лучше не касаться вовсе.
                    </li>
                </ul>
                <p className="block-text__par">
                    Защита диплома – самая ответственная часть Вашего обучения. Ведь она показывает итоги всей учебы в вузе. По ней понятно, какой из Вас получится специалист. Многие компании набирают в свой штат сотрудников по результатам защиты дипломной работы. Поэтому стоит <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link> у проверенных специалистов, которыми являются сотрудники нашей компании. Тысячи довольных выпускников,  с блеском защитившие свои дипломные работы – тому яркое подтверждение. Мы пишем, мы творим, мы делаем дипломы быстро, качественно, разбираясь досконально в самых сложнейших темах – от истории межэтнических конфликтов до создания двигателя Николы Тесла.
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        </div>
    </Wrapper>
);


export default page
