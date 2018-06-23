import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Сколько стоит магистерская диссертация – цена написания магистерской диссертации на заказ – от 24 000 руб. | «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="Интересует, цена магистерской диссертации? Позвоните в компанию BeSmarter! и мы вам скажем сколько стоит магистерская диссертация | Тел. +7 (495) 772-40-90." />
                <meta name="keywords" content="Сколько стоит магистерская диссертация на заказ стоимость написать цена" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная </a>
                    </Link>
                    <span> / </span>
                    <Link href="/dissertaciya-na-zakaz">
                        <a>Диссертация</a>
                    </Link>
                    <span> / </span>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a>Магистерская</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Стоимость</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/magisterskaya">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Магистерская диссертация</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 23 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/dissertaciya-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диссертация<br/>под ключ</span>
                            <p>Берем заботы на себя</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Консультация автора</span>
                            <p>Прямая связь</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Сопровождение<br/>до защиты</span>
                            <p>Надежно, спокойно</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
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
                    Сколько стоит магистерская диссертация
                </h2>
                <p className="block-text__par">
                    Грамотно написанная и уверенно защищенная магистерская диссертация – цена получения первого значительного научного звания в карьере будущего ученого. Тем не менее, далеко не каждый студент обладает навыками и, главное – достаточным количеством свободного времени, чтобы выполнить данную работу.
                </p>
                <p className="block-text__par">
                    Предлагаем заказать магистерскую диссертацию по доступной цене у опытных специалистов компании BeSmarter! Мы напишем работу в сжатые сроки и в полном соответствии со всеми вузовскими требованиями. Кроме того, вы получите квалифицированную поддержку вплоть до момента успешной защиты.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Почему написать магистерскую диссертацию в BeSmarter  – надежно?
                </h2>
                <ul className="fitted">
                    <li>
                        Во-первых, мы гарантируем, что диссертацию будет писать действующий преподаватель вуза с кандидатской степенью в соответствующей научной сфере. Качество работы непрерывно проверяется нашим отделом контроля. В случае необходимости по вашему запросу автор вносит бесплатные правки.
                    </li>
                    <li>
                        Во-вторых, компания BeSmarter! оказывает комплексную помощь при подготовке к защите. Наше сотрудничество не заканчивается вместе с последней главой диссертации. Мы продолжаем консультировать вас, помогаем подготовить доклад и презентацию, тренируем отвечать на вопросы комиссии и так далее.
                    </li>
                    <li>
                        Наконец, компания придерживается политики прозрачного ценообразования, поэтому стоимость магистерской диссертации на заказ полностью соответствует трудоемкости и сложности конкретной работы. Кроме того, вы можете рассчитывать на скидки и гибкую систему оплаты.
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
                    От чего зависит стоимость написания магистерской диссертации на заказ?
                </h2>
                <p className="block-text__par">
                    Разумеется, этот вопрос волнует каждого. Ориентировочно узнать, сколько стоит написать магистерскую диссертацию на заказ, можно в соответствующем разделе нашего сайта. Точная цена будет определена во время общения с менеджером на основании следующих критериев.
                </p>
                <ul>
                    <li>
                        Шифр специальности. Написание работы по гуманитарным вопросам обычно обходится дешевле в сравнении с тем, сколько стоит магистерская диссертация по техническим дисциплинам.
                    </li>
                    <li>
                        Сложность тематики. Если у вас есть возможность выбора, мы готовы помочь вам выбрать тему для написания магистерской диссертации на заказ, цена которой будет минимальной.
                    </li>
                    <li>
                        Сроки сдачи. Оптимальное время, необходимое для написания работы – от 5 дней. Если же вам нужно за день-два написать магистерскую диссертацию, цена будет немного выше, поскольку нам придется привлечь несколько авторов.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как узнать сколько стоит магистерская диссертация на заказ?
                </h2>
                <p className="block-text__par">
                    Выберите наиболее удобный для себя способ связи. Жители Москвы имеют возможность непосредственно посетить наш <b><Link href="/contacts"><a>офис</a></Link></b> по адресу Большой Кисловский переулок, д. 1 стр. 2, офис 211. А если вы живете в другом регионе России, заполните <b><a href="#form">онлайн-форму</a></b> на сайте или позвоните по одному из номеров: +7(495)772-4090, +7(495)772-9040.
                </p>
                <p className="block-text__par">
                    После собеседования мы, заключим с вами официальный договор и зафиксируем в нем все важные моменты сотрудничества, в том числе стоимость написания магистерской диссертации. Далее согласованный с вами автор приступит к написанию магистерской диссертации, а вы сможете заниматься другими делами, не переживая за будущее своей научной карьеры!
                </p>
            </section>

            <Video>
                <iframe src="//vk.com/video_ext.php?oid=372065572&id=456239032&hash=e0751038dfbca771&hd=2"></iframe>
            </Video>

            <LinksBlock links={
                [
                    { url: "/dissertaciya-na-zakaz/magisterskaya/gde-zakazat", text: "Где заказать магистерскую диссертацию" },
                ]
            }/>
        </div>
    </Wrapper>
);


export default page
