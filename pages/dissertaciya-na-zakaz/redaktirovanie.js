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
import infoBlockConfig from 'components/config/infoBlock/disser'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'components/config/linksBlock/disser';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Редактирование диссертации – стоимость (расценки) редактирование диссертации в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="В компании  BeSmarter! Вы сможете заказать редактирование диссертации от надежных и проверенных кандидатов и докторов наук, недорогие цены только в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img5">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Редактирование диссертации стоимость расценки сколько стоит" />
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
                    <Link href="#">
                        <a>Редактирование</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/kandidat.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Кандидатская диссертация</span>
                            <p className="block-service__par">Написание и оформление</p>
                            <p className="block-service__par">Публикации</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                            <p>Строго по ГОСТу</p>
                        </a>
                    </Link>
                    <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Апробация</span>
                            <p>Реальные эксперименты</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/doctorskaya.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Докторская диссертация</span>
                            <p className="block-service__par">Актуальность и научная новизна</p>
                            <p className="block-service__par">Ваши и наши данные</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-35">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Прямая связь с автором</span>
                            <p>Постоянный контроль</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Публикации</span>
                            <p>Журналы ВАК и иностранные</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Обзор литературы</span>
                            <p>Свежие источники</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-text">
                <h1 className="block-text__title">
                    Сколько стоит редактирование диссертацию
                </h1>
                <ul>
                    <li>
                        <b>Любые специальности</b><br/>
                        Мы принимаем на редактирование работы любой сложности, по техническим и гуманитарным дисциплинам.
                    </li>
                    <li>
                        <b>Квалификация</b><br/>
                        Редактирование диссертации под заказ будет поручено компетентному в данной теме специалисту, с ученой степенью не ниже кандидатской.
                    </li>
                    <li>
                        <b>Честность</b><br/>
                        Расценки на редактирование диссертаций устанавливаются согласно прозрачным и объективным критериям, действует гибкая система скидок.
                    </li>
                    <li>
                        <b>Дополнительные услуги</b><br/>
                        Также мы предоставляем помощь в написании диссертаций «с нуля» и подготовке необходимых дополнительных материалов.
                    </li>
                </ul>
            </section>

            <FormEstimate />



            <section className="block-service__dis">
            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Эффектная презентация</p>
                            <p className="block-service__par">Быстро и качественно</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Монография</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста до 98%</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                        </a>
                    </Link>
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад Слайды</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Плакаты к защите</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                        </a>
                    </Link>
                </div>
            </section>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder />


            <ImageBlock imageSrc={require('static/images/block/dis-red.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит стоимость редактирования диссертации?
                </h2>
                <p className="block-text__par">
                    Разумеется, вас интересует, сколько стоит отредактировать диссертацию. Заранее назвать точную сумму мы не можем, поскольку трудоемкость работы может существенно варьироваться в зависимости от следующих объективных факторов.
                </p>
                <ul>
                    <li>
                        Объем. Стоимость редактирования диссертации, в первую очередь, зависит от ее фактического размера в страницах. Зависимость прямо пропорциональная.
                    </li>
                    <li>
                        Сложность. Трудоемкость редактирования работ по техническим специальностям выше в сравнении с гуманитарными дисциплинами, поэтому и цены будут различаться.
                    </li>
                    <li>
                        Срочность. Чем меньше времени вы нам даете, тем дороже будет услуга. Желаете сэкономить – оформляйте заказ заранее. Можно сделать это прямо сейчас!
                    </li>
                </ul>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Наши гарантии
                </h2>
                <p className="block-text__par">
                    Гарантия качества. Наш отдел контроля использует фирменный многоступенчатый алгоритм проверки работ (грамотность, оформление, уникальность и т. д.).
                </p>
                <p className="block-text__par">
                    Гарантия соблюдения сроков. Точный день сдачи прописывается в официальном договоре, а стадии готовности отдельных глав и разделов контролируются личным менеджером.
                </p>
                <p className="block-text__par">
                    Гарантия доступности. Мы всегда на связи и готовы помочь. Связаться с менеджером можно онлайн, по телефону или побеседовать лично в нашем офисе в Москве.
                </p>
                <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
                    Компания BeSmarter! – это уникальная возможность качественно, срочно и недорого отредактировать диссертацию по любой теме. Воспользуйтесь ей прямо сейчас!
                </p>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества
                </h2>
                <p className="block-text__par">
                    Все просто:
                </p>
                <ol>
                    <li>
                        Заявка. Оформить ее можно онлайн на сайте, по телефону +7 (495) 772-4090 или в нашем офисе по адресу: Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211.
                    </li>
                    <li>
                        Договор. Оформляется по результатам предварительного собеседования, включает все ваши требования к диссертации и наши обязательства.
                    </li>
                    <li>
                        Работа. После 50%-ной предоплаты наш специалист редактирует вашу диссертацию, сдает ее вам на проверку по главам, и при необходимости вносит бесплатные правки.
                    </li>
                </ol>
                <p className="block-text__par" style={{fontStyle: 'italic', textAlign: 'center'}}>
                    Станьте нашим клиентом уже сегодня, и вы не пожалеете об этом!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder />

            <LinksBlock links={disser}/>
        </div>
    </Wrapper>
);


export default page
