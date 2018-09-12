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
import links from 'components/config/linksBlockConfig'

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../../components/common/ImageBlock";
import disser from "../../../components/config/linksBlock/disser";


const page = () => (
    <Wrapper title="Кандидатская диссертация по праву – заказать в Москве и РФ, цены, сроки написания под ключ" description="Кандидатская диссертация по праву на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
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
                    <Link href="/dissertaciya-na-zakaz">
                        <a>Диссертация</a>
                    </Link>
                    <span> / </span>                    
                    <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                        <a>Кандидатская</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>По юриспруденция</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="#form">
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
                    Кандидатская диссертация по праву на заказ
                </h1>
                <p className="block-text__par">
                    Успешная защита кандидатской диссертации в области права требует значительных усилий. Важно, чтобы подготовленный научный труд соответствовал требованиям ВАК, а тема была актуальной и пригодной для практического применения. От этого во многом зависит успешность защиты. Заказать кандидатскую диссертацию по праву – один из лучших способов решения этого вопроса.
                </p>
                <p className="block-text__par">
                    Реалии современного общества таковы, что в нормативные акты часто вносятся дополнения и изменения. Поэтому необходимо написать диссертационную работу в как можно более короткие сроки. Для специалиста с плотным рабочим графиком это непростая задача. Разумный выход в подобной ситуации – заказать написание кандидатской диссертации в проверенной компании. Компания BeSmarter! предлагает свои услуги по подготовке подобных работ. Вы получите результат под ключ с учетом всех требований ВАК.
                </p>
                <p className="block-text__par">
                    К выполнению кандидатской диссертации по праву будут привлечены высококвалифицированные специалисты с учеными степенями в области юриспруденции. Вы можете заказать как написание всей работы полностью, так и часть научного труда, по собственному выбору. Заказ будет выполнен строго в оговоренный срок за разумную сумму.
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


            <ImageBlock imageSrc={require('static/images/block/kand-uri.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества написания диссертации
                </h2>
                <ul>
                    <li>
                        Профессиональное выполнение заказа. К вашим услугам – квалифицированные специалисты со значительным практическим опытом.
                    </li>
                    <li>
                        Сопровождение работы до защиты. Автор выполнит все правки, изменения и (или) дополнения к вашей работе.
                    </li>
                    <li>
                        Конфиденциальность. Вам не следует беспокоиться, что сведения о вас будут разглашены.
                    </li>
                    <li>
                        Умеренная стоимость.
                    </li>
                </ul>
                <p className="block-text__par">
                    Возможно, покупка готового диссертационного труда в интернете стоит несколько дешевле, но заказать кандидатскую диссертацию по вопросам права значительно безопаснее. Вы утверждаете план работы, а затем, по мере подготовки, выполняете согласование отдельных глав. Возможно также написание всей работы под ключ. Вы сможете заранее сказать научному руководителю, над какими вопросами вам предстоит работать. Таким образом, вы сотрудничаете с научным руководителем, он указывает на возможные недочеты, а мы их оперативно исправляем.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит стоимость
                </h2>
                <p className="block-text__par">
                    Цена написания кандидатской в области права зависит от объема работы и сложности выбранной темы. Кроме того, наши специалисты выполняют срочные задания. Естественно, это стоит дороже.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Есть ли возможность сэкономить?
                </h2>
                <p className="block-text__par">
                    Чтобы заказ обошелся в меньшую сумму, вы можете заказать частичное написание диссертации. Кроме того, мы предлагаем воспользоваться актуальными спецпредложениями компании. В итоге вы получаете возможность заказа не только качественной, но и по-настоящему недорогой работы.
                </p>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества с BeSmarter!
                </h2>
                <p className="block-text__par">
                    Написание на заказ состоит из таких этапов:
                </p>
                <ul>
                    <li>
                        Согласование плана кандидатской диссертации по праву с научным руководителем.
                    </li>
                    <li>
                        Внесения аванса. На этом этапе наши специалисты начинают выполнять задание.
                    </li>
                    <li>
                        После того как часть проекта подготовлена, вы оплачиваете его стоимость. Затем частично выполненное задание отправляется на вашу электронную почту, а мы переходим к завершению работы.
                    </li>
                    <li>
                        Все правки и дополнения в течение гарантийного срока вносятся бесплатно.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder />

            <LinksBlock links={disser}/>
        </div>
    </Wrapper>
);


export default page
