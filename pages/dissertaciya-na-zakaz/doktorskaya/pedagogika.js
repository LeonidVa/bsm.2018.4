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
import infoBlockConfig from 'components/config/infoBlock/disser-doc'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'
import ImageBlock from "../../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Докторская диссертация по педагогике на заказ в Москве и РФ – цены, сроки написания под ключ" description="Докторские диссертации по педагогике на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img4">

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
                    <Link href="/dissertaciya-na-zakaz/doktorskaya">
                        <a>Докторская</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>По педагогике</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>


            <section className="block-service">
                <Link href="#form">
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

            <section className="block-text">
                <h1 className="block-text__title">
                    Докторская диссертация по педагогике на заказ
                </h1>
                <p className="block-text__par">
                    Присвоение научной степени – важнейший элемент признания научных заслуг любого педагога, а докторская степень по педагогике – своего рода атрибут «гуру» в сфере образования. Доктор наук – человек, которые обрел все навыки профессии, защитил диссертацию, имеет опыт научной и практической работы. Подготовка докторской диссертации – это серьезнейший научный труд, требующий больших умственных и временных затрат. Необходимо изучить, проанализировать и обобщить множество первичных источников, провести социологические и статистические исследования, выработать инновации в области педагогики. Причины, по которым подготовка диссертации может быть затруднена:
                </p>
                <ul>
                    <li>
                        Активная педагогическая деятельность и отсутствие достаточного времени на выполнение плановых мероприятий
                    </li>
                    <li>
                        Невозможность самостоятельно изучать первичные источники
                    </li>
                    <li>
                        Сложности в проведении полевых исследований, подготовке и публикации статей и монографий
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
                    <Link href="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii">
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

            <ImageBlock imageSrc={require('static/images/block/doc-ped.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Сэкономьте свои силы и время!
                </h2>
                <p className="block-text__par">
                    Любой сложный научный труд состоит из нескольких этапов. При этом докторская диссертация по педагогике должна не только иметь научное содержание, но и предлагать инновации для внедрения в процессе обучения и воспитания. Инновации не могут быть вымышленными, они должны подкрепляться результатами практической деятельности и разнообразных исследований. Для того чтобы сэкономить свое время и силы, можно обратиться в специализированную компанию, которая осуществляет подготовку докторских диссертаций по педагогике на заказ. Преимуществами данного варианта являются:
                </p>
                <ul>
                    <li>
                        Значительное уменьшение трудозатрат, экономия свободного времени
                    </li>
                    <li>
                        Высокая уникальность научной работы, основанная на практической деятельности
                    </li>
                    <li>
                        Полное сопровождение при подготовке к защите докторской диссертации по педагогике
                    </li>
                </ul>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы работы специалистов BeSmarter!
                </h2>
                <p className="block-text__par">
                    Поскольку докторская диссертация является венцом научной деятельности, самой сложной из научных работ, то к ее подготовке привлекаются лучшие специалисты. В некоторых ситуациях их деятельность связана не только с подготовкой самого текста научной работы, но и с написанием и публикацией необходимых статей и монографий.
                </p>
                <p className="block-text__par">
                    При необходимости специалисты нашей компании проведут социологические и иные полевые, статистические исследования. Постоянная обратная связь с соискателем ученой степени служит не только элементом контроля, но залогом качественного написания научной работы. Это дает возможность заказчику своевременно предоставлять научному руководителю результаты своего труда и при необходимости вносить коррективы в разработанный план и ход работы.
                </p>
                <p className="block-text__par">
                    Следует учитывать, что подготовка к защите докторской диссертации по педагогике – это длительный процесс. Соответственно, чем сложнее тема и короче сроки подготовки, тем дороже будут оцениваться услуги авторов компании BeSmarter! Активное взаимодействие соискателя со специалистами компании и установление приемлемых сроков дает возможность несколько снизить цену.
                </p>
            </section>



            <section className="block-text">
                <h2 className="block-text__title">
                    Почему лучше сделать заказ у нас?
                </h2>
                <ol>
                    <li>
                        Авторы компании BeSmarter! не только имеют большой опыт подготовки различных по сложности научных работ, но и сами являются обладателями различных ученых степеней в ВУЗах. Признанные ученые и практики в области педагогической науки готовы оказать всеобъемлющую помощь в подготовке и защите вашей главной научной работы!
                    </li>
                    <li>
                        Гарантируется практическая направленность, высокая уникальность, обоснованность и логичность докторской диссертации по педагогике.
                    </li>
                    <li>
                        Нами практикуется индивидуальный подход к каждому клиенту, учитываются его пожелания и потребности. Работа ведется вплоть до успешной защиты.
                    </li>
                </ol>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder />

            {/* <LinksBlock links={links}/> */}
        </div>
    </Wrapper>
);


export default page
