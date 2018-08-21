import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/disser'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'


const page = () => (
    <Wrapper title="Докторская диссертация по медицине на заказ в Москве и РФ – цены, сроки написания под ключ" description="Докторские диссертации по медицине на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

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
                        <a>По медицине</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
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
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
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
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Апробация</span>
                            <p>Реальные эксперименты</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Докторская диссертация</span>
                            <p className="block-service__par">Актуальность и научная новизна</p>
                            <p className="block-service__par">Ваши и наши данные</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
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

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

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

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Докторские диссертации по медицине
                </h1>
                <p className="block-text__par">
                    Для присвоения ученой степени по медицинской специальности в России необходимо выполнить квалификационную работу – докторскую диссертацию по медицине. В основу научного труда закладываются разработки соискателя, эксперименты, новшества, аналитика уже известных сведений по теме исследования.
                </p>
                <p className="block-text__par">
                    Для написания диссертации нужны время, знания и опыт. И здесь могут возникнуть проблемы, особенно это касается свободного времени. Если его катастрофически не хватает, то написание докторской диссертации по медицине нужно доверить профессионалам. Компания BeSmarter! решит ваши проблемы за короткий срок. Над подготовкой исследования будет работать штат опытных авторов.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества написания в BeSmarter!
                </h2>
                <p className="block-text__par">
                    Заказ докторской диссертации – это правильный и оптимальный шаг для соискателей ученой степени. У написания научного труда специалистами есть масса преимуществ:
                </p>
                <ul>
                    <li>
                        Экономия времени и сил. Поиск исходной информации, оформление диссертации согласно ГОСТам – титанический и во многом ненужный труд. Сохранить ценное время можно, используя помощь сотрудников BeSmarter!
                    </li>
                    <li>
                        Гарантия получения качественной диссертации по любому направлению, в том числе и по медицине.
                    </li>
                    <li>
                        Соответствие оформления работы ГОСТам и требованиям научного руководителя.
                    </li>
                </ul>
                <p className="block-text__par">
                    Наши исполнители имеют большой опыт в сфере написания докторских работ, дипломных и других проектов. Авторы знают тонкости оформления и все секреты успешной защиты.
                </p>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на материалы для защиты
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Почему лучше заказать работу, а не купить готовую?
                </h2>
                <p className="block-text__par">
                    Покупка готовой диссертации для соискателя ученой степени по медицине грозит обернуться неудачей по нескольким причинам:
                </p>
                <ol>
                    <li>
                        Нет возможности создать научный труд с учетом требований именно вашего НР.
                    </li>
                    <li>
                        Переделкой и доработкой придется заниматься самостоятельно, а это порой равносильно написанию работы с нуля.
                    </li>
                    <li>
                        Нет связи между исполнителем и заказчиком. Руководитель может вносить изменения в план, структуру диссертации по ходу ее написания. В готовой работе структура уже есть.
                    </li>
                    <li>
                        Возможность обмана. Низкая стоимость привлекает небогатых клиентов, но чаще всего готовая работа за малые деньги – это некачественный материал, взятый из сети и даже толком не переработанный.
                    </li>
                    <li>
                        Вы не выбираете исполнителя и уровень его профессионализма. Кем и когда написана диссертация в готовом виде, узнать сложно.
                    </li>
                </ol>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит цена
                </h2>
                <p className="block-text__par">
                    Стоимость докторской диссертации по медицине зависит от:
                </p>
                <ul>
                    <li>
                        Срока исполнения. Авральное написание работы стоит дороже.
                    </li>
                    <li>
                        Объема диссертации. Обычно размер научного труда для соискания ученой степени не превышает 200-250 страниц. Когда требуется больше, цена увеличивается.
                    </li>
                    <li>
                        Сложности темы и новизны исследования.
                    </li>
                </ul>
                <p className="block-text__par">
                    Если вы сами составили план, начали выполнять введение или основные главы, и требуется только доработка, то цена снижается. Стоимость докторской диссертации по медицине в BeSmarter! определяется индивидуально, исходя из тонкостей выполнения задания.
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как можно сэкономить?
                </h2>
                <p className="block-text__par">
                    Снизить затраты на докторскую диссертацию можно следующим образом:
                </p>
                <ul>
                    <li>
                        Выполните часть диссертации самостоятельно.
                    </li>
                    <li>
                        Обратитесь за помощью к профессионалам заранее.
                    </li>
                    <li>
                        Согласуйте с руководителем конечный вариант плана докторской, чтобы избежать доработок впоследствии.
                    </li>
                </ul>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества
                </h2>
                <p className="block-text__par">
                    Авторы BeSmarter! сотрудничают с заказчиками по следующему плану:
                </p>
                <ul>
                    <li>
                        Получают заказ.
                    </li>
                    <li>
                        Составляют план диссертации.
                    </li>
                    <li>
                        Подготавливают материалы.
                    </li>
                    <li>
                        Согласовывают этапы написания с заказчиком и выполняют работу по частям или целиком. Рекомендуем заказывать написание всей работы сразу. Так вы сможете ответить на каверзные вопросы руководителя о том, что будет в следующей главе. При желании клиента написание по частям тоже возможно.
                    </li>
                    <li>
                        Внесение правок при наличии замечаний.
                    </li>
                    <li>
                        Подготовка плана защиты.
                    </li>
                </ul>
                <p className="block-text__par">
                    Чтобы сделать докторскую диссертацию по медицине, свяжитесь с нами по телефону в Москве +7 (495) 772-90-40 или через форму онлайн-заказа на сайте. Компания BeSmarter! заключает официальный договор с клиентами и гарантирует успешную сдачу работы.
                </p>
            </section>

            {/* <LinksBlock links={links}/> */}
        </div>
    </Wrapper>
);


export default page
