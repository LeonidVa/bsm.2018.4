import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';
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
    <Wrapper title="Сколько стоит написать диссертацию – стоимость диссертации от 150 000 рублей | Написание диссертации по выгодным ценам в компании «BeSmarter!». Тел. +7 (495) 772-40-90." description="Хотите узнать, сколько стоит написать диссертацию? Позвоните нам по тел. +7 (495) 772-40-90, и мы вам скажем точную стоимость диссертации - BeSmarter!">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Сколько стоит написать диссертацию цена на заказ стоимость цена написание сколько стоит заказать" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/dissertaciya-na-zakaz">
                        <a>Диссертация</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Написание</a>
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
                    Сколько стоит написать диссертацию
                </h1>
                <p className="block-text__par">
                    Для любого будущего ученого своевременное и качественное написание диссертации – цена получения очередной научной степени (магистра, кандидата или доктора). Таким образом, ставки весьма велики, и рисковать своей профессиональной карьерой никто не желает.
                </p>
                <p className="block-text__par">
                    Профессиональная помощь в написании диссертационных работ – приоритетное направление деятельности компании BeSmarter! Если у вас возникли трудности или просто не хватает времени, воспользуйтесь нашими услугами. Мы напишем диссертацию по любой теме максимально качественно, срочно и недорого!
                </p>
            </section>

            <FormEstimate />



            <section className="block-service__dis">
            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/mat-dlya-zash.jpg') + ")",}}>
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

            <ImageBlock imageSrc={require('static/images/block/skolko-stoit-nap-dis.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит стоимость диссертации?
                </h2>
                <p className="block-text__par">
                    Цена написания диссертации на заказ, в первую очередь, определяются типом работы (магистерская, кандидатская, докторская), поскольку требования к объему, степени оригинальности и актуальности к ним существенно разнятся.
                </p>
                <p className="block-text__par">
                    Второй критерий – это сложность специальности и конкретной темы. Традиционно по техническим дисциплинам будет дороже всего написать диссертацию, цена работ по гуманитарным направлениям в разы ниже. Это связанно с трудоемкостью расчетов.
                </p>
                <p className="block-text__par">
                    Наконец, третий важный критерий – срочность. Чем больше вы предоставите нам времени, тем меньше придется заплатить. Если же хотите еще больше сэкономить – присылайте нам свои наработки по теме, и мы их учтем. Звоните уже сегодня!
                </p>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Хотите узнать, сколько стоит написание диссертации?
                </h2>
                <p className="block-text__par">
                    Оформите заявку одним из перечисленных ниже способов и узнайте, сколько будет стоить ваша диссертация:
                </p>
                <ul>
                    <li>
                        на сайте – заполните <b><a href="#form">онлайн-форму</a></b> и дождитесь ответа менеджера;
                    </li>
                    <li>
                        по телефону – свяжитесь с нами по телефону <br/>+7 (495) 772-4090;
                    </li>
                    <li>
                        непосредственно – адрес <b><Link href="/contacts"><a>офиса</a></Link></b>: Москва, пер. Большой Кисловский, д. 1, стр. 2, офис 211.
                    </li>
                </ul>
                <p className="block-text__par center italic">
                    Сделайте свой заказ прямо сейчас, и успешная защита диссертации станет реальностью!
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
