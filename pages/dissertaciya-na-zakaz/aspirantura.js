import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';import FormEstimate from 'components/common/forms/Order';;
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/disser1'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import disser from 'components/config/linksBlock/disser';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Аспирантура в Москве | «BeSmarter!». Тел. +7 (495) 772-40-90." description="В наше время диплом о высшем образовании есть практически у всех, включая продавцов розничной торговли; тем самым нивелируется звание дипломированного специалиста.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Аспирантура в Москве,поступление в Аспирантуру,купить Аспирантура" />
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
                        <a>Аспирантура</a>
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
                    <Link href="#form-block">
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
                    <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
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
                <div className="block-service__list list-3">
                    <Link href="/dissertaciya-na-zakaz/doktorskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Прямая связь с автором</span>
                            <p>Постоянный контроль</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/doktorskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Публикации</span>
                            <p>Журналы ВАК и иностранные</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/doktorskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Обзор литературы</span>
                            <p>Свежие источники</p>
                        </a>
                    </Link>
                </div>
            </section>


            <a name="form-block" id="form-block"/>
            <section className="block-text">
                <h1 className="block-text__title">
                    Аспирантура
                </h1>
                <p className="block-text__par">
                    <b>
                        В наше время диплом о высшем образовании есть практически у всех, включая продавцов розничной торговли; тем самым нивелируется звание дипломированного специалиста.
                    </b>
                </p>
                <p className="block-text__par">
                    <b>
                        Поэтому все больше не только ученых, но и топ-менеджеров и бизнесменов понимают, что поступить в аспирантуру, стать соискателем ученой степени, защитить диссертацию актуально и престижно.
                    </b>
                </p>
                <p className="block-text__par">
                    Ученые степени и порождаемый ими научный имидж — необходимая веха на пути к повышению качества жизни и личного статуса в обществе. Очевидно, что продвижение по карьерной лестнице во многом зависит от наличия ученой степени. И это естественно, так как человек, защитивший диссертацию, имеет более широкие знания, опыт анализа.
                </p>
                <p className="block-text__par">
                    Автор напишет вступительный реферат в аспирантуру по теме исследования и подготовит Вас к собеседованию по его теме.
                </p>
                <p className="block-text__par">
                    При поступлении нередко требуется предъявить опубликованные научные работы, изобретения и отчёты по уже проделанной научно-исследовательской работе. В написании и опубликовании таких работ Вам помогут специалисты нашей компании.
                </p>
            </section>

            <FormEstimate />




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

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <a name="form" id="form"/>
            <OrderForm />

            <ImageBlock imageSrc={require('static/images/block/aspirant.jpg')}/>


            <section className="block-text">
                <h2 className="block-text__title">
                    Вступительные экзамены
                </h2>
                <p className="block-text__par">
                    Программы вступительных экзаменов имеются у методистов и на официальных сайтах аспирантур.
                </p>
                <p className="block-text__par">
                    Ответы на вопросы вступительных экзаменов индивидуально для Вас или для всей Вашей группы подготовит автор. Вам останется только выучить их.
                </p>
            </section>



            <section className="block-text">
                <h2 className="block-text__title">
                    Научное руководство
                </h2>
                <p className="block-text__par">
                    У многих руководителей не находится достаточного количества времени для консультаций. Поэтому мы можем прикрепить к Вам консультирующего научного руководителя, у которого всегда можно прояснить то, что остается непонятным после общения с Вашим научным руководителем и подготовиться к следующему обсуждению. Вам будет легко решать любые вопросы с Вашим руководителем.
                </p>
            </section>


            <ProfitsBlockSlider profitBlockConfig={dopy}/>

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
                    Выбор и обоснование темы исследования
                </h2>
                <p className="block-text__par">
                    Аспирант представляет на обсуждение не только название работы, но и ее структуру и предполагаемое содержание, то есть весь замысел диссертации.
                </p>
                <p className="block-text__par">
                    От выбора темы будет зависеть сложность или относительная легкость защиты. Правильный выбор темы определит результат Ваших усилий.
                </p>
                <p className="block-text__par">
                    Если Вы пока не выбрали тему будущей диссертационной работы, то после обсуждения с Вами автор очертит круг тем, исходя из Ваших предпочтений. Автор предложит несколько тем, и Вы выберете одну из них.
                </p>
                <p className="block-text__par">
                    После этого автор оформит для Вас обоснование выбора темы и составит развернутый план диссертации.
                </p>
                <p className="block-text__par">
                    Кандидатский минимум можно сдать даже до поступления в аспирантуру, что увеличит Ваши шансы на зачисление.
                </p>
                <p className="block-text__par">
                    Мы окажем Вам любую помощь в подготовке и сдаче всех экзаменов кандидатского минимума. Ответы на вопросы экзаменов кандидатского минимума, как и любые другие, индивидуально для Вас или для группы аспирантов подготовит наш автор.
                </p>
                <p className="block-text__par">
                    Подготовка материалов и особенно написание диссертации — не только главная, но самая трудная часть работы в силу ее творческого, эксклюзивного характера.
                </p>
                <p className="block-text__par">
                    В настоящее время задачу сочетания написания и подготовки к защите качественной диссертации с одновременной необходимостью зарабатывания средств на жизнь часто невозможно решить в одиночку в течение этого срока.
                </p>
                <p className="block-text__par">
                    <b>
                        Специалисты компании BeSmarter! окажут Вам все виды помощи, которые могут потребоваться аспирантам и соискателям степени кандидата и доктора наук на любых этапах от принятия решения о поступлении в аспирантуру до написания диссертации вплоть до ее защиты.
                    </b>
                </p>
                <p className="block-text__par">
                    <b>
                        С помощью нашей компании Вы уверенно и комфортно защитите и кандидатскую, и докторскую диссертационную работу по любой специальности, включая естественные и точные науки.
                    </b>
                </p>
                <p className="block-text__par">
                    <b>
                        Узнайте прямо сейчас, чем мы готовы Вам помочь,  <Link href="#form"><a>заполнив форму заказа</a></Link> или позвонив нам по телефону +7 495 772 40 90!
                    </b>
                </p>
                <p className="block-text__par">
                    <b>
                        Мы ждем Вас, мы всегда с Вами!
                    </b>
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form" id="form"/>
            <OrderForm />



            <LinksBlock links={disser}/>
        </div>
    </Wrapper>
);


export default page
