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


const page = () => (
    <Wrapper title="Магистерская диссертация на заказ в Москве и РФ – цены, сколько стоит, сроки написания диплома под ключ">
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
                    <Link href="#">
                        <a>Магистерская</a>
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
                    Магистерская диссертация на заказ
                </h2>
                <p className="block-text__par">
                    Написание дипломной работы – сложная задача. Тем более, если речь идет о магистерской диссертации. Собрать и обработать качественный и актуальный материал, а затем представить его в виде диссертационной работы — все это требует значительных усилий и временных затрат. Решение проблемы – диплом магистра на заказ. Это одна из услуг, профессионально оказываемых специалистами компании BeSmarter!.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества написания диплома под ключ
                </h2>
                <p className="block-text__par">
                    Авторы нашей компании подготовят для вас качественную и уникальную работу с полным раскрытием заданной темы. В составе диплома будут хорошо структурированные и продуманные теоретический, аналитический и практический разделы. Это позволит вам проявить себя на защите с наилучшей стороны. К преимуществам нашего подхода относятся:
                </p>
                <ul>
                    <li>
                        Отличное качество написания магистерской диссертации на заказ, поскольку работу выполняют профессионалы с большим практическим опытом.
                    </li>
                    <li>
                        Сопровождение заказа вплоть до успешной защиты. Если необходимо внести правки, мы выполняем их бесплатно.
                    </li>
                    <li>
                        Конфиденциальность. Неразглашение личных данных гарантировано.
                    </li>
                    <li>
                        Консультационная поддержка.
                    </li>
                    <li>
                        Доступная стоимость, с учетом бесплатных доработок и изменений.
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
                    Магистерская диссертация: на заказ или готовая?
                </h2>
                <p className="block-text__par">
                    Заказ магистерской работы предусматривает тесное сотрудничество с научным руководителем проекта. Вначале вы согласовываете с ним план диссертации, затем отдаете на проверку отдельные главы. Специалист нашей компании при необходимости вносит дополнения и правки. Простое скачивание и редактирование готовой работы из интернета связано с дополнительными рисками:
                </p>
                <ul>
                    <li>
                        Возможные грамматические ошибки и погрешности в расчетах.
                    </li>
                    <li>
                        Работа не всегда соответствует требованиям ВУЗа в плане оформления.
                    </li>
                    <li>
                        Отсутствие уникальности. Приобретение диплома в банке готовых заданий оправдано лишь в том случае, если вы сами решили работать над проектом. В такой ситуации готовая диссертация служит как основа для написания.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит цена
                </h2>
                <p className="block-text__par">
                    Сколько стоит написать магистерскую диссертацию на заказ в Москве? Стоимость выполнения заказа зависит от степени сложности, выбранной темы и объема. Например, диплом по архитектуре с большим количеством графического материала имеет более высокую стоимость, чем диссертация по менеджменту или экономике. Влияет на цену и срочность выполнения задания.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как можно сэкономить
                </h2>
                <p className="block-text__par">
                    Существует несколько способов заказать магистерскую диссертацию и сэкономить при этом деньги:
                </p>
                <ul>
                    <li>
                        Заказ на написание не всей работы, а лишь ее части. Это может быть расчетная, теоретическая или практическая часть.
                    </li>
                    <li>
                        Оформление заказа на выполнение нескольких работ (можно договориться с однокурсниками).
                    </li>
                    <li>
                        Спецпредложения, акции со снижением цен. Это шанс получить качественную услугу по невысокой стоимости.
                    </li>
                </ul>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества
                </h2>
                <p className="block-text__par">
                    Написание дипломной работы магистра на заказ состоит из таких этапов:
                </p>
                <ul>
                    <li>
                        Согласование плана диссертации с научным руководителем.
                    </li>
                    <li>
                        Частичная оплата работы. На этом этапе наши авторы начинают выполнять задание.
                    </li>
                    <li>
                        После того, как часть проекта выполнена, вы оплачиваете его стоимость, и частично выполненное задание отправляется на вашу электронную почту.
                    </li>
                    <li>
                        Все правки и дополнения в течение 2 месяцев вносятся бесплатно.
                    </li>
                </ul>
                <p className="block-text__par">
                    Оформите заказ в BeSmarter!, и ваша защита пройдет блестяще!
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
