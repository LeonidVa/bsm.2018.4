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

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Несколько правил удачной защиты | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Самообладанием может похвастаться не каждый, особенно при таком важном процессе, как защита дипломной работы, от которой зависит будущее. Зачастую, волнительным бывает не только процесс защиты, но и написания. Поэтому, чтобы оградить себя от лишних переживаний, стоит незамедлительно сделать диплом на заказ и быть уверенным в успехе.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="" content />
                <meta name="keywords" content="" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/stati">
                        <a>Статьи</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Несколько правил удачной защиты</a>
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
                <h1 className="block-text__title">
                    Несколько правил удачной защиты
                </h1>
                <p className="block-text__par">
                    Самообладанием может похвастаться не каждый, особенно при таком важном процессе, как защита дипломной работы, от которой зависит будущее. Зачастую, волнительным бывает не только процесс защиты, но и написания. Поэтому, чтобы оградить себя от лишних переживаний, стоит незамедлительно сделать <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link> и быть уверенным в успехе.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    После того, как диплом будет готов, а перед его защитой будут оставаться считанные дни, стоит начать подготовку, которая не  так уж и сложна по своей сути.
                </p>
                <p className="block-text__par">
                    Во-первых, прочитайте весь материал, ведь следует ознакомиться с его содержанием перед защитой, пусть, даже если Вы писали его самостоятельно не стоит надеяться на свою память, освежите ее прочтением написанного. После чего выделите с помощью тезисов самое главное и нужное, не будет лишним, выписывать все отдельно на листок или перепечатывать на компьютер для последующего распечатывания. Нужно это в первую очередь для лучшего запоминания, так будет работать не только зрительная память.
                </p>
                <p className="block-text__par">
                    Не стоит искать замысловатые фразы, которыми Вы собираетесь блеснуть, показывая совершенство своих знаний, они никому не нужны, главная задача для Вас – успешная защита. Как правило, защищая диплом нужно его рассказывать, поэтому не поленитесь выучить все свои заметки, в том числе таблицы или диаграммы, если они имеются. Зрительные образы, которые Вы представите на сдаче, помогут не только Вам лучше представить дипломную работу, но и экзаменаторам понять, о чем, же Вы им рассказываете, ведь правило того, что зрительный материал усваивается лучше, распространяется и на них.
                </p>
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
                <p className="block-text__par">
                    Если в  Вашем вузе при защите дипломной работы разрешается использовать презентации, то не поленитесь и воспользуйтесь этой возможностью. Этим Вы поднимете свой уровень в глазах экзаменатора, он будет знать, что Вы готовились к защите и потратили немало времени и сил, а значит, заслуживаете высокой отметки. Кроме всего прочего презентация будет полезна и для Вас, с ее помощью не стоит запоминать большой объем информации, она будет написана и ее можно будет прочесть.
                </p>
                <p className="block-text__par">
                    Закончив свою подготовку можно и расслабиться, провести время с друзьями и немного отвлечься от предстоящего события. Психологический настрой важен, ведь подготовившись морально, шансы на успех увеличиваются. Вы не будете думать о своем провале или о том, что от волнения забудете обо всем заученном, наоборот воспримете предстоящее как простое публичное выступление, за которое будет небольшое поощрение в виде диплома об окончании факультета.  Так же, можете посоветовать друзьям, и сокурсникам, не столь расторопным как Вы, где можно <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link> и получить его в кратчайшие сроки. Вы очень поможете им, ведь диплом будет написан специалистами, работающими на рынке образовательных услуг уже много лет.
                </p>
                <p className="block-text__par">
                    Мы напишем для Вас и Ваших друзей курсовую, практику, диплом, диссертацию, реферат и т.д. Вы будете приятно удивлены качеством и сроками исполнения. Поэтому не медлите, звоните нам!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

        </div>
    </Wrapper>
);


export default page
