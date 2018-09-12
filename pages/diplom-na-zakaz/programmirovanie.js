import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/diplom';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import Video from "../../components/common/VideoBlock";



const page = () => (
    <Wrapper title="Диплом по программированию на заказ в Москве и РФ – цены, сроки написания работы под ключ" description="Диплом по программированию на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
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
                    <Link href="/diplom-na-zakaz">
                        <a>Дипломная работа</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>По программированию</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz/programmirovanie#form">
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



            <section className="block-service__dis">
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
            </section>


            <section className="block-text">
                <h1 className="block-text__title">
                    Диплом по программированию на заказ
                </h1>
                <p className="block-text__par">
                    Если по каким-то причинам вы не успеваете закончить написание диплома по программированию в срок, закажите его в компании BeSmarter! У нас работают авторы, которые являются действующими преподавателями ВУЗов из Москвы и других регионов России.
                </p>
                <p className="block-text__par">
                    Студенты обращаются к нам в таких случаях:
                </p>
                <ul>
                    <li>
                        есть опасения, что будут сорваны дедлайны, и существует риск просто не успеть все закончить своими силами;
                    </li>
                    <li>
                        если карьера и практика в приоритете, а на учебу не хватает временного ресурса;
                    </li>
                    <li>
                        по причине нахождения в декрете, из-за болезни или беременности не получается уделить время дипломной работе по программированию;
                    </li>
                    <li>
                        написана только часть материала (теоретическая или практическая);
                    </li>
                    <li>
                        контент диплома подготовлен, но не структурирован;
                    </li>
                    <li>
                        когда нужно поступить в иностранный ВУЗ, а на подготовку не осталось ни времени, ни сил.
                    </li>
                </ul>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/dip-po-prog.jpg')}/>


            
            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества написания под ключ
                </h2>
                <p className="block-text__par">
                    Выгодно, когда над дипломной работой по программированию работают авторы с опытом и пониманием темы. Написание на заказ имеет ряд значительных преимуществ:
                </p>
                <ol>
                    <li>
                        Учитываются все требования научного руководителя, а также пожелания самого клиента (аспиранта, студента).
                    </li>
                    <li>
                        Даже самые сложные работы (например, дипломы по программированию на заказ) выполняются так, что человек может легко вникнуть в написанное и защититься без проблем.
                    </li>
                    <li>
                        Можно вносить правки в процессе выполнения.
                    </li>
                </ol>
                <p className="block-text__par">
                    Лучше оставить заявку на написание под ключ, а не покупать готовый материал! При покупке уже написанной работы вы сильно рискуете – ее текст может быть лишь незначительно изменен. Это чревато неприятными вопросами со стороны научного руководителя, а то и полным провалом во время защиты диплома. Если вы делаете заказ в BeSmarter!, то получаете на руки работу, которая тщательно проверена на уникальность. Конечно, когда речь идет о технических дисциплинах, не стоит пренебрегать написанием диплома по программированию на заказ, потому что в свободном доступе или в продаже вряд ли найдется стоящий материал.
                </p>
            </section>


            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    От каких факторов зависит цена?
                </h2>
                <p className="block-text__par">
                    Окончательный прайс формируется исходя из следующих пунктов:
                </p>
                <ol>
                    <li>
                        Необходимый объем
                    </li>
                    <li>
                        Сложность темы.
                    </li>
                    <li>
                        Глубина исследования.
                    </li>
                    <li>
                        Сколько дипломов по программированию на заказ вам нужно. В случае оптовых заявок, например, вместе с однокурсниками, возможно снижение цены.
                    </li>
                </ol>
            </section>


            <section className="block-text">
                <h2 className="block-text__title">
                    Способы, как вы можете сэкономить!
                </h2>
                <p className="block-text__par">
                    Если хочется снизить цену на наши услуги, можно воспользоваться такими советами:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        - Делайте заказ заранее, ведь тогда не будет переплаты за срочность исполнения.
                    </li>
                    <li>
                        - Если вам нужен не слишком сложный диплом по программированию и информатике на заказ, то стоимость будет ниже.
                    </li>
                    <li>
                        - Вы можете написать отдельные главы сами, что автоматически понизит цену.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameborder="0" allowfullscreen></iframe>
            </Video>



            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества с нами
                </h2>
                <ol>
                    <li>
                        Оставьте заявку на сайте или обратитесь по телефону <br/>+7 (495) 772-40-90, +7 (495) 772-90-40.
                    </li>
                    <li>
                        Закажите написание всей дипломной работы полностью или оформите заказ на отдельные главы, разделы. Мы рекомендуем первый вариант, ведь когда на руках есть полностью готовый диплом, то отвечать на вопросы научного руководителя намного проще.
                    </li>
                    <li>
                        Частично или полностью оплатите диплом, чтобы заявка была принята в работу.
                    </li>
                </ol>
                <p className="block-text__par">
                    Обращайтесь в компанию BeSmarter!, если вам срочно нужен качественный диплом, курсовая или реферат по программированию на заказ.
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
