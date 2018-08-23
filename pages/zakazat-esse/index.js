import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Заказать эссе срочно и недорого – написание эссе на заказ по философии в Москве и РФ – цены и сроки под ключ" description="Заказать эссе. Напишем эссе на заказ недорого в Москве. Срочная помощь в написании эссе от надежных профессионалов в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать эссе на заказ недорого помощь в написании срочно где" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Эссе</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link>
                    <a href="#form" className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/ii.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Эссе</span>
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
                    <Link href="/referat-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovaya-rabota-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая работа</span>
                            <p>от 4 000 руб.</p>
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

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Заказать эссе
                </h1>
                <p className="block-text__par">
                    Написание эссе – популярный вид заданий для студентов, позволяющий проверить их уровень творческого независимого мышления. С одной стороны, здесь нет никаких строгих рамок – вы просто высказываете свои соображения по какой-то проблематике, не претендуя на исчерпывающее ее освещение.
                </p>
                <p className="block-text__par">
                    Однако все не так просто. Чтобы качественно выполнить эссе, необходимо: во-первых, достаточно хорошо владеть предметом, во-вторых, уметь грамотно выражать свои мысли и, в-третьих, обладать временным ресурсом для данной работы. Наконец, нужно вдохновение, без которого никакое творчество невозможно.
                </p>
                <p className="block-text__par">
                    Если у вас не хватает чего-то из вышеперечисленного, предлагаем срочно и недорого заказать написание эссе по философии или другой дисциплине в компании BeSmarter!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Почему именно у нас? Вот лишь несколько причин
                </h2>
                <ul>
                    <li>
                        У нас есть опыт и квалификация. Мы не пользуемся услугами «залетных фрилансеров», а сформировали штат высококлассных специалистов из преподавателей вузов с научной степенью. Внедрена многоступенчатая система контроля качества каждой работы.
                    </li>
                    <li>
                        Мы можем написать эссе на заказ срочно. Вы забыли о задании, а сдавать его уже завтра? Не беда! Мы предлагаем заказать эссе срочно с гарантией выполнения в минимальные сроки (от 24 часов). День сдачи фиксируется в официальном договоре – вам остается спокойно ждать назначенной даты.
                    </li>
                    <li>
                        Мы работаем профессионально. Помощь в написании эссе включает круглосуточную поддержку, вплоть до момента получения вами оценки. Ваш личный менеджер всегда на связи. С нами вас ждет успех, убедитесь в этом сами!
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

            <section className="block-text">
                <h2 className="block-text__title">
                    Хотите заказать эссе недорого?
                </h2>
                <p className="block-text__par">
                    Разумеется, любой студент хочет заказать эссе недорого, поэтому в BeSmarter! действует гибкая система ценообразования с привязкой к конкретной работе. Стоимость услуги определяется во время собеседования на основании объективных факторов – сложности темы, количества страниц, срочности, наличия специфических требований и пр.
                </p>
                <p className="block-text__par">
                    При этом у вас всегда есть возможность экономии. Желаете получить эссе по философии, экономике или другому предмету на заказ недорого? Заранее проконсультируйтесь с нами по поводу выбора темы. Или принесите нам свои наработки, и мы снизим цену. И, конечно, старайтесь оформить заказ как можно раньше.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Написание эссе на заказ
                </h2>
                <ul>
                    <li>
                        Этап 1. Вы оформляете заявку одним из перечисленных ниже способов. Мы проводим с вами собеседование и подписываем договор с указанием всех ваших требований к эссе. Вы вносите 50%-ную предоплату.
                    </li>
                    <li>
                        Этап 2. Согласованный с вами автор приступает к работе и в оговоренный срок сдает ее на проверку после окончательной оплаты. Вы имеете право запросить внесение бесплатных корректировок.
                    </li>
                    <li>
                        Этап 3. Исполнитель и индивидуальный менеджер сопровождают вас вплоть до получения хорошей оценки за эссе – отвечают на вопросы и консультируют.
                    </li>
                </ul>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как оформить эссе на заказ?
                </h2>
                <p className="block-text__par">
                    Нашими услугами могут воспользоваться студенты из любого уголка России. Самый универсальный вариант – оформление заявки на сайте. Желаете переговорить лично – позвоните нам по номеру 8 (495) 772-40-90.
                </p>
                <p className="block-text__par">
                    Наконец, жители Москвы могут просто зайти к нам по адресу: переулок Большой Кисловский, дом 1, строение 2, офис 211. Выбирайте удобный для себя вариант – мы ждем вас!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Заказать" fields={fields}/>
            
        </div>
    </Wrapper>
);


export default page
