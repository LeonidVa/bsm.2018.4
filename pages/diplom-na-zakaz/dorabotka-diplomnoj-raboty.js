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
    <Wrapper title="Доработка дипломной работы срочно в Москве, заказать исправление диплома – цены и сроки">
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
                        <a>Доработка</a>
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
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
                    <Link href="/zakazat-diplomnyj-proekt">
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
                    Доработка дипломной работы
                </h2>
                <p className="block-text__par">
                    Сроки сдачи становятся минимальными и нужно дописать дипломную работу?
                </p>
                <p className="block-text__par">
                    Хотите заказать корректировку дипломной работы у лучших специалистов по выгодной цене?
                </p>
                <p className="block-text__par">
                    Специалисты компании BeSmarter! с радостью помогут в решении этих задач. Это отличное решение для выхода из сложившейся ситуации. Выполнить доработку диплома срочно смогут только квалифицированные исполнители, которые знают все особенности данного проекта.
                </p>
                <p className="block-text__par">
                    Сегодня в интернете можно найти самые разные сервисы, которые помогают дописать дипломную работу. Только не все они могут сравниться с услугами компании BeSmarter!
                </p>
                <p className="block-text__par">
                    Огромный опыт работы авторов позволит быстро доделать диплом. Только здесь смогут взяться за любое задание и помочь со сложным проектом. Вы будете уверены в качестве и правильности выполненной работы. Компания BeSmarter! всегда приходит на помощь в трудное для студентов время!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Корректировка дипломных работ – надежно и качественно!
                </h2>
                <p className="block-text__par">
                    Только наша компания предлагает самые выгодные и удобные условия сотрудничества. Мы долгое время работаем в данном направлении и всегда радуем клиентов. Колоссальный опыт работы позволяет переделать дипломную работу в кратчайшие сроки.
                </p>
                <p className="block-text__par">
                    Диплом – это не простое задание, а фундаментальный труд. Если преподаватель возвращает его для исправления, то многие студенты не знают что делать дальше. Они уверены, что работа заслуживает самой высокой оценки, но их труды не могут оценить правильно. К тому же доработка диплома требует большого количества сил и времени. Что же делать студенту, когда времени практически нет?
                </p>
                <p className="block-text__par">
                    Компания BeSmarter! знает, как помочь. Здесь помогут, даже если до сдачи остались дни или часы. Специалисты гарантируют положительный результат проделанной работы!
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
                    Компания BeSmarter! обладает рядом преимуществ:
                </h2>
                <ul>
                    <li>
                        Доработка диплома срочно по выгодной стоимости
                    </li>
                    <li>
                        Уникальность  работы
                    </li>
                    <li>
                        Диплом будет сделан качественно и грамотно
                    </li>
                    <li>
                        Выполнение работы проводится оперативно
                    </li>
                    <li>
                        Сопровождение до сдачи и консультирование. Заключение  договора.
                    </li>
                </ul>
                <p className="block-text__par">
                    Исправление дипломных работ срочно – это уникальная возможность быстро, качественно и надежно получить желаемую специальность.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как заказать рерайт диплома или его исправление?
                </h2>
                <p className="block-text__par">
                    Компания BeSmarter! каждый день ждет новых клиентов. Здесь всегда рады прийти на помощь в трудную минуту. На редактирование дипломной работы цена оговаривается в индивидуальном порядке. Она зависит от:
                </p>
                <ul>
                    <li>
                        Сложности,
                    </li>
                    <li>
                        Сроков,
                    </li>
                    <li>
                        Объемов,
                    </li>
                    <li>
                        Оригинальности.
                    </li>
                </ul>
                <p className="block-text__par">
                    Главная задача компании BeSmarter! – это помощь студентам. Каждый, кому понадобилась помощь, может сюда обратиться и получить ее. Только здесь на доработку диплома цена будет приемлемая и доступная каждому студенту. Мы как никто другой понимаем студентов.
                </p>
                <p className="block-text__par">
                    Если вы решили заказать рерайт дипломной работы или его исправление, то:
                </p>
                <ul>
                    <li>
                        Оформите заявку через онлайн-форму на сайте биржи.
                    </li>
                    <li>
                        Позвоните по контактному номеру и менеджеры с радостью помогут в решении любой проблемы.
                    </li>
                    <li>
                        Приходите в офис.
                    </li>
                </ul>
                <p className="block-text__par">
                    Мы рады видеть новых клиентов и готовы всем помочь в срочной доработке диплома!
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
