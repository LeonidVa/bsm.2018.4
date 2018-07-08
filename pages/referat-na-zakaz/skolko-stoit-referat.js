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

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Сколько стоит заказать реферат – стоимость реферата на заказ в компании «BeSmarter!» - 1 500 рублей, закажите реферат сейчас - тел. +7 (495) 772-40-90." description="Хотите узнать, сколько стоит заказать реферат в Москве? Звоните в компанию BeSmarter! и мы вам скажем сколько стоит написать реферат | Звоните: +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img5">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="сколько стоит написать заказать реферат на заказ цена напсиание купить сделать стоимость" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/referat-na-zakaz">
                        <a>Реферат</a>
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
                <Link href="/kursovaya-rabota-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/i.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Курсовая работа</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 4 000 руб.</p>
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
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
                <Link href="/kursovaya-rabota-na-zakaz">
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
                    Сколько стоит заказать реферат
                </h1>
                <p className="block-text__par">
                    Выяснить, сколько стоит заказать реферат в компании «BeSmarter!», можно с помощью нашего <Link href="/price"><a>прайс-листа</a></Link>. Ориентировочный диапазон цен составляет от 1 500 до 7 000 рублей.
                </p>
                <p className="block-text__par">
                    Чтобы узнать точно, сколько стоит написать реферат, заданную именно вам, понадобится собеседование. Мы определим ее цену на основании следующих факторов.
                </p>
                <ul>
                    <li>
                        Предмет. Расценки на гуманитарные дисциплины несколько ниже в сравнении с тем, сколько стоит сделать реферат по математике или электротехнике.
                    </li>
                    <li>
                        Объем. Чем больше задание (количество задач, требуемое число страниц), тем выше цена реферата на заказ.
                    </li>
                    <li>
                        Сроки. Чтобы минимизировать стоимость написания реферата, оформите заявку как можно раньше.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Что вы гарантируем?
                </h2>
                <ul>
                    <li>
                        Никаких ошибок. Каждый реферат в «BeSmarter!» проходит многоступенчатую проверку на правильность решения и грамотность оформления.
                    </li>
                    <li>
                        Любой предмет. Компания принимает заказы на выполнение рефератов по любым гуманитарным, естественнонаучным или техническим дисциплинам.
                    </li>
                    <li>
                        Максимальная оперативность. Даже, если вам нужно сдавать работу завтра утром, мы успеем ее сделать вовремя и качественно.
                    </li>
                    <li>
                        Профессиональный подход. Мы не просто выполним ваш реферат, но и подробно объясним все ее нюансы, чтобы у вас не возникло проблем с «придирчивым» преподавателем.
                    </li>
                    <li>
                        Гарантия неразглашения. Мы строго придерживаемся принципа строгой конфиденциальности, гарантии которой прописываются в официальном договоре.
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
                    Кто будет выполнять реферат?
                </h2>
                <p className="block-text__par">
                    Лучше всего пишет рефераты тот, кто их задает! Поэтому мы делегируем такие заказы действующим вузовским преподавателям по соответствующим предметам. Они абсолютно точно знают, как правильно выполнить и грамотно оформить реферат, поскольку сами их регулярно проверяют.
                </p>
                <p className="block-text__par">
                    Такой подход совместно с фирменной системой многоступенчатого контроля качества позволил нам добиться невероятной статистики – почти 99% отличных оценок! Если хотите получить высший балл за реферат по любому предмету – обращайтесь, мы поможем!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как мы работаем?
                </h2>
                <ul>
                    <li>
                        Подготовка. Вы оформляете заявку, и после предварительного собеседования подписывается договор, в котором фиксируются все ваши требования к заказу и наши обязательства.
                    </li>
                    <li>
                        Исполнение. Утвержденный вами исполнитель выполняет реферат и сдает его на проверку в оговоренный срок. В случае необходимости вносятся бесплатные корректировки.
                    </li>
                    <li>
                        Завершение. Вы консультируетесь с автором по всем непонятным моментам, сдаете готовый реферат и получаете отличную оценку.
                    </li>
                </ul>
                <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
                    Все элементарно – попробуйте сами и не пожалеете!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как узнать, сколько стоит реферат?
                </h2>
                <ul>
                    <li>
                        онлайн-заявка – просто <a href="/#form">заполните форму</a> на сайте и дождитесь ответа менеджера;
                    </li>
                    <li>
                        заявка по телефону – свяжитесь с нами по номеру +7 (495) 772-4090
                    </li>
                    <li>
                        личная заявка – наш адрес: Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211.
                    </li>
                </ul>
                <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
                    Оформляйте заявку прямо сейчас и узнайте сколько будет стоить написание вашего реферата!
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
