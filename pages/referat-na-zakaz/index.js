import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';import FormEstimate from 'components/common/forms/Order';;
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/referat'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import referat from 'components/config/linksBlock/referat';

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Заказать реферат недорого онлайн – сколько стоит написать реферат на заказ в Москве и РФ – цены, сроки под ключ" description="Написание рефератов недорого на заказ! Быстро и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img5">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать реферат купить срочно на заказ написать написание онлайн напишу москва где" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Реферат</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>



            <section className="block-service">
                <Link>
                    <a href="#form" className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/ref1.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Реферат</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 1 500 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-otchet-po-praktike">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovaya-rabota-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая работа</span>
                            <p>от 4 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kontrolnaya-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/stati/kak-podgotovitsya-k-ekzamenu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/zashitit">
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
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <FormEstimate />

            <section className="block-text">
                <h1 className="block-text__title">
                    Заказать реферат недорого
                </h1>
                <p className="block-text__par">
                    Неприятная особенность рефератов заключается в том, что о них (в отличие от экзаменов или курсовой) легко забыть. И внезапно выясняется, что сдавать работу нужно завтра-послезавтра, а у вас совсем ничего не готово.
                </p>
                <p className="block-text__par">
                    Можно, конечно судорожно броситься в библиотеку или попытаться на скорую руку переделать чей-то старый реферат. Но уверяем вас, вся эта спешка в лучшем случае закончится удовлетворительной оценкой, а в худшем – «неудом» и недопуском к сессии.
                </p>
                <p className="block-text__par">
                    Мы предлагаем вам более надежный вариант – срочно написать реферат на заказ силами компании BeSmarter! Мы выполним работу максимально быстро, качественно и по доступной цене.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Что вы получите?
                </h2>
                <ul>
                    <li>
                        <b>Гарантию пунктуальности. </b>У нас можно заказать реферат срочно – от 24 часов. Точное время сдачи прописывается в официальном договоре, так что волноваться не придется.
                    </li>
                    <li>
                        <b>Гарантию оригинальности. </b>Написание рефератов на заказ в компании BeSmarter! осуществляется «с нуля». Уникальность текста проверяется на нескольких онлайн-сервисах.
                    </li>
                    <li>
                        <b>Гарантию конфиденциальности. </b>Факт нашего сотрудничества останется строго между нами. Обязательства о неразглашении также фиксируются в договоре.
                    </li>
                </ul>
                <p className="block-text__par">
                    В BeSmarter! вы сможете написать реферат на заказ срочно, не опасаясь мошенничества, плагиата и недобросовестного отношения.
                </p>
            </section>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    А как насчет качества?
                </h2>
                <p className="block-text__par">
                    Это наша особая гордость. Компания BeSmarter! – единственное место, где заказать реферат можно у действующего преподавателя вуза с кандидатской ученой степенью. Мы не пользуемся услугами фрилансеров-копирайтеров – только квалифицированные научные кадры с огромным опытом написания подобных работ.
                </p>
                <p className="block-text__par">
                    Каждый реферат проходит фирменную многоступенчатую систему контроля для проверки его уникальности, грамотности оформления и соответствия вашим требованиям. Но даже после получения готовой работы вы имеете право потребовать бесплатные правки. Наша главная цель – ваша хорошая оценка!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Сколько стоит реферат на заказ
                </h2>
                <p className="block-text__par">
                    Как и для любого другого товара или услуги, если вы желаете купить работу, цена будет определяться ее индивидуальными особенностями:
                </p>
                <ul>
                    <li>
                        <b>Специальность. </b>По гуманитарным дисциплинам рефераты на заказ обычно стоят недорого, в то время как для технических предметов цены в среднем выше (до 2 раз).
                    </li>
                    <li>
                        <b>Требования. </b>В первую очередь, это фактический объем текста – чем его больше, тем пропорционально выше стоимость. Также влияет высокая уникальность (выше 80%) – написать реферат на заказ со 100%-м показателем на всех сервисах будет дороже.
                    </li>
                    <li>
                        <b>Срочность. </b>Если вы хотите заказать работу недорого, постарайтесь оформить заявку как можно раньше.
                    </li>
                </ul>
            </section>

            <a name="form" id="form"/>
            <OrderForm />

            <section className="block-text">
                <h2 className="block-text__title">
                    Как сделать заказ?
                </h2>
                <p className="block-text__par">
                    Самый простой вариант – заказать реферат онлайн (недорого, быстро и удобно), заполнив форму на сайте. Такой вариант подойдет для жителей не только Москвы, но и других регионов России.
                </p>
                <p className="block-text__par">
                    Также можно оформить заказ реферата по телефону <br/>+7 495 772-4090.
                </p>
                <p className="block-text__par">
                    Если же вы живете в Москве, ждем вас по <Link href="/contacts"><b><a>адресу</a></b></Link>: переулок Большой Кисловский, дом 1, строение 2, офис 211.
                </p>
                <p className="block-text__par">
                    Какой бы вы ни выбрали способ заказать реферат – онлайн, звонок или визит, будьте уверены, менеджеры компании BeSmarter! окажут вам квалифицированную помощь в написании реферата.
                </p>
            </section>

            <LinksBlock links={referat}/>
        </div>
    </Wrapper>
);


export default page
