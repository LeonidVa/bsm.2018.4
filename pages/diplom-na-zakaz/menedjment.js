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

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Дипломная работа по менеджменту на заказ – цена и сроки написания, сколько стоит заказать диплом в Москве" description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по менеджменту по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="купить заказать дипломную работу по финансовому менеджменту организации" />
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
                    <Link href="/diplom-na-zakaz">
                        <a>По менеджменту</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz/menedjment#form">
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
                    Заказать дипломную работу по менеджменту
                </h1>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        Нужна дипломная работа по менеджменту организации от настоящих профессионалов?
                    </li>
                    <li>
                        Хотите заказать дипломную работу по менеджменту с высокой уникальностью?
                    </li>
                    <li>
                        Вам необходимо написание диплома по менеджменту в кратчайший период?
                    </li>
                </ul>
                <p className="block-text__par">
                    Тогда Вам необходимо обратиться к специалистам компании BeSmarter! прямо сейчас!
                </p>
                <p className="block-text__par">
                    Мы с радостью подготовим интересный дипломный проект по менеджменту.
                </p>
                <p className="block-text__par">
                    Закажите проект у нас, и Вы уверенно и легко защититесь!
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/dip-po-men.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заказать диплом по менеджменту в Москве
                </h2>
                <p className="block-text__par">
                    После приёма Вашего заказа мы составляем техническое задание, по которому автор пишет работу. В задании мы указываем предпочитаемые Вами методики исследования.
                </p>
                <p className="block-text__par">
                    Поэтому Вы получаете сделанную именно для Вас интересную и качественную дипломную работу. Мы уверены, что с нею отлично защититесь!
                </p>
                <p className="block-text__par">
                    Нужно написание диплома по менеджменту прямо сейчас? Сделаем!
                </p>
                <p className="block-text__par">
                    Позвоните нам +7 495 772 40 90, заполните форму заявки или посетите наш <Link href="/contacts"><b><a>комфортабельный офис</a></b></Link>, который находится на Арбате!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>


            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />


            <section className="block-text">
                <h2 className="block-text__title">
                    Купить дипломную работу по менеджменту
                </h2>
                <p className="block-text__par">
                    Если Вам требуется актуальное исследование, проведенное на высоком уровне, то Вы можете заказать дипломную работу по менеджменту у наших опытных авторов.
                </p>
                <p className="block-text__par">
                    Вот что компания BeSmarter! гарантирует своим клиентам:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <b>Безопасность и гарантии качества</b><br/>
                        Мы прописываем в договоре все свои обязательства перед заказчиком. Дипломы для наших клиентов пишут кандидаты и доктора наук.
                    </li>
                    <li>
                        <b>Уникальность работы</b><br/>
                        Мы проверяем все работы наших авторов по системе «Антиплагиат», поэтому каждый заказчик получает текст с высокой уникальностью (от 70%).
                    </li>
                    <li>
                        <b>Срочность и доступная стоимость выполнения заказа</b><br/>
                        Дипломная работа по финансовому менеджменту может быть подготовлена авторами компании BeSmarter! в срок от одного дня и по цене от 14 000 до 45 000 рублей.
                    </li>
                    <li>
                        <b>Бесплатное внесение изменений в текст</b><br/>
                        Если у Вашего научного руководителя появятся замечания к проекту, наши специалисты бесплатно внесут необходимые изменения в гарантийный срок 30 дней.
                    </li>
                    <li>
                        <b>Гарантия успешной защиты</b><br/>
                        джеры и преподаватели компании BeSmarter! знают, как получить высший балл на защите. Воспользовавшись их рекомендациями, уверенно отлично защититесь на пятёрку.
                    </li>
                </ul>
            </section>

            <Video>
                <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameborder="0" allowfullscreen></iframe>
            </Video>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>





            <a name="form" id="form"/>
            <FormOrder />

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
