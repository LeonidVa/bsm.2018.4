import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/disser'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'


const page = () => (
    <Wrapper title="Докторская диссертация на заказ в Москве и РФ – подготовка и написание под ключ, цена и сроки">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

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
                    <Link href="/dissertaciya-na-zakaz">
                        <a>Докторская</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz">
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                            <p>Строго по ГОСТу</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Апробация</span>
                            <p>Реальные эксперименты</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Прямая связь с автором</span>
                            <p>Постоянный контроль</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Публикации</span>
                            <p>Журналы ВАК и иностранные</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Обзор литературы</span>
                            <p>Свежие источники</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Монография</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста до 98%</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                        </a>
                    </Link>
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад Слайды</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Плакаты к защите</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Докторская диссертация на заказ
                </h2>
                <p className="block-text__par">
                    Докторская диссертация – это научный труд, по результатам защиты которого соискателю присваивают ученую степень доктора наук. Как правило, в ее основе находится кандидатская или даже магистерская диссертация. Важный момент подготовки докторской диссертации – автореферат. Это краткое изложение ключевых моментов и выводов научной работы. Его написание очень важно еще и потому, что без автореферата диссертация не допускается к защите.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества нашего предложения
                </h2>
                <p className="block-text__par">
                    Самостоятельная подготовка докторской диссертации часто занимает не один год. Текст включает 3 основные части:
                </p>
                <ul>
                    <li>Теоретическую.</li>
                    <li>Практическую.</li>
                    <li>Методологическую.</li>
                </ul>
                <p className="block-text__par">
                    Кроме того, обязательным является соблюдение требований ВАК, касающихся содержания работы и ее оформления. Неслучайно на подготовку докторской диссертации отводится значительный срок – около полутора лет. Нередко бывает, что подготовка научного труда занимает гораздо больше времени. ВАК подходит к оценке работ очень строго и взыскательно, поэтому авторы отшлифовывают их содержимое до безукоризненного состояния. Однако не все могут найти в плотном рабочем графике место для научных изысканий. Сложно одновременно решать семейные вопросы, заниматься наукой и карьерой. Особенно это касается людей, которым докторская степень нужна, чтобы занимать определенные должности, а о том, чтобы сделать карьеру ученого, речь не идет. В такой ситуации вполне логично обратиться к профессионалам для написания докторской диссертации на заказ, а не пытаться написать работу самостоятельно.
                </p>
                <p className="block-text__par">
                    Главные преимущества этого решения:
                </p>
                <ul>
                    <li>
                        Качественно выполненная докторская диссертация под ключ с исчерпывающим раскрытием темы. Написанием вашей работы будут заниматься настоящие профессионалы со значительным опытом в освещаемых вопросах.
                    </li>
                    <li>
                        Сопровождение вплоть до защиты. Возможно, что понадобится внесение дополнений и изменений в работу. Наши специалисты выполнят их.
                    </li>
                    <li>
                        Полная конфиденциальность. Мы дорожим репутацией: как собственной, так и заказчиков, поэтому неразглашение личных данных заказчика гарантируется.
                    </li>
                    <li>
                        Максимальный учет пожеланий клиента. Вы можете заказать докторскую диссертацию полностью или по отдельным главам, в зависимости от предпочтений.
                    </li>
                    <li>
                        Приемлемая цена.
                    </li>
                    <li>
                        При необходимости – подготовка докторской диссертации на заказ с консультационной поддержкой клиента.
                    </li>
                </ul>
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
                    Стоит ли приобретать готовую работу?
                </h2>
                <p className="block-text__par">
                    В интернете нередко можно встретить предложение купить научную работу в готовом виде. Однако такой шаг имеет множество недостатков:
                </p>
                <ul>
                    <li>
                        Готовая работа может полностью или частично не соответствовать утвержденному плану.
                    </li>
                    <li>
                        Диссертация, приобретенная у сомнительного автора, как правило, оформлена не по стандартам (довольно строгим).
                    </li>
                    <li>
                        Неуникальность работы. Это может стать основным камнем преткновения при защите.
                    </li>
                </ul>
                <p className="block-text__par">
                    В конечном итоге вы, в лучшем случае, заплатите за чистый плагиат, в худшем – за воздух. Случаев интернет-мошенничества, когда автор, получив предоплату, исчезает, – более чем достаточно. Написание докторской диссертации на заказ в проверенной компании – разумный и безопасный вариант. BeSmarter! поможет вам написать хорошую работу для успешной защиты.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Факторы, определяющие цену
                </h2>
                <p className="block-text__par">
                    На стоимость написания докторской диссертации под ключ влияют: выбранная тема, объем и сложность работы. У «технарей» диссертационные труды сложнее, поэтому и стоимость будет выше.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Способы сэкономить
                </h2>
                <p className="block-text__par">
                    Хотите, чтобы написание диссертационного труда обошлось вам в меньшую сумму? Есть несколько способов сэкономить:
                </p>
                <ul>
                    <li>
                        Написание не всего текста, а его части, по выбору заказчика.
                    </li>
                    <li>
                        Акции и скидки.
                    </li>
                </ul>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы совместной работы
                </h2>
                <p className="block-text__par">
                    После согласования темы и плана диссертации с научным руководителем порядок действий следующий:
                </p>
                <ul>
                    <li>
                        Внесение аванса. После этого автор приступает к выполнению задания.
                    </li>
                    <li>
                        Когда часть диссертации уже написана, следует ее проверка и внесение остатка заранее оговоренной суммы.
                    </li>
                    <li>
                        Получение готовой работы клиентом на электронный адрес.
                    </li>
                </ul>
                <p className="block-text__par">
                    На протяжении гарантийного срока все дополнения и правки вносятся бесплатно. Компания BeSmarter! поможет вам защититься блестяще!
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page