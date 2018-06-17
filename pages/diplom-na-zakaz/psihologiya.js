import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/diplom';


const page = () => (
    <Wrapper title="Заказать дипломную работу по психологии в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

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
                        <a>По психологии</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
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
                    <Link href="/zakazat-diplomnyj-proekt">
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
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA</span>
                            <p>от <b>25 000</b> руб.</p>
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
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">Доступные цены</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/zakazat-diplomnyj-proekt">
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
                    <Link href="/zakazat-diplomnyj-proekt">
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
                    Заказать дипломную работу по психологии
                </h2>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        Необходима качественная, интересная дипломная работа по психологии, подготовленная в сжатый период?
                    </li>
                    <li>
                        Хотите заказать дипломную работу по психологии, написанную профессиональными, опытными авторами?
                    </li>
                    <li>
                        Вам нужно написать диплом по психологии, отличающийся превосходной уникальностью и актуальными исследованиями?
                    </li>
                </ul>
                <p className="block-text__par">
                    Тогда Вам просто необходимо связаться с менеджерами компании BeSmarter!
                </p>
                <p className="block-text__par">
                    При заказе диплома по психологии мы составляем техническое задание, по которому наш преподаватель выполнит работу.
                </p>
                <p className="block-text__par">
                    В нём мы прописываем, какие методики Вы предпочитаете, возраст и количество людей в группах, другие особенности работы.
                </p>
                <p className="block-text__par">
                    Поэтому Вы получаете строго индивидуальную, сделанную именно для Вас отличную работу. Мы спокойны за Вас: Вы отлично защититесь!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Дипломная работа по психологии на заказ – всегда отличное качество
                </h2>
                <p className="block-text__par">
                    Если Вам недостает времени для подготовки проекта, то Вы имеете возможность купить дипломную работу по психологии на заказ, написанную специалистами нашей компании. Став клиентом BeSmarter!, Вы получаете:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <b>Безопасность и наличие гарантий качества</b><br/>
                        Все наши обязательства по отношению к заказчику прописываются в договоре. Диплом по психологии на заказ от наших авторов – это результат исследований, проведенных кандидатами психологических наук с огромным педагогическим опытом.
                    </li>
                    <li>
                        <b>Высокую уникальность работы</b><br/>
                        Заказать диплом по психологии в нашей компании – значит получить текст с уникальностью более 70% по системе «Антиплагиат».
                    </li>
                    <li>
                        <b>Срочность выполнения заказа</b><br/>
                        Мы готовы подготовить для Вас проект в срок от одного дня.
                    </li>
                    <li>
                        <b>Доступная цена</b><br/>
                        Мы предлагаем разумное соотношение качества и стоимость работы. Цена диплома по психологии примерно составляет от 14 000 до 45 000 рублей.
                    </li>
                    <li>
                        <b>Бесплатные правки</b><br/>
                        Если у Вашего преподавателя возникнут замечания к диплому, наши авторы оперативно внесут все необходимые правки в гарантийный срок 30 дней.
                    </li>
                    <li>
                        <b>Сопровождение до успешной защиты</b><br/>
                        После окончания бесплатного гарантийного срока мы продолжаем работать с Вами до Вашей успешной защиты.
                    </li>
                    <li>
                        <b>Гарантия отличной защиты</b><br/>
                        Наши менеджеры и преподаватели точно знают, как получить твёрдую «пятёрку» на защите. Следуя их советам, Вы спокойно и уверенно отлично защититесь.
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

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заказать диплом по психологии
                </h2>
                <p className="block-text__par">
                    Мы охотно напишем для Вас грамотную и интересную работу по юридической, клинической, социальной, дошкольной, семейной и спортивной психологии!
                </p>
                <p className="block-text__par">
                    Нужна дипломная работа по психологии на заказ прямо сейчас? Сделаем!
                </p>
                <p className="block-text__par">
                    Звоните нам +7 495 772 40 90, заполните простую форму заказа или сразу приезжайте в комфортабельный <Link href="/contacts"><b><a>офис</a></b></Link> компании BeSmarter!, расположенный в самом центре Москвы!
                </p>
            </section>

            <VideoBlock>
                <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameborder="0" allowfullscreen></iframe>
            </VideoBlock>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
