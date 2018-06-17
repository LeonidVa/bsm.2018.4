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
import links from 'components/config/linksBlockConfig'



const page = () => (
    <Wrapper title="Как наладить отношения с научным руководителем? | «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

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
                        <a>Как наладить отношения с научным руководителем?</a>
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
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
                    Как наладить отношения с научным руководителем?
                </h2>
                <p className="block-text__par">
                    Как наладить отношения с научным руководителем? Эта тема волнует множество дипломников. В большинстве случаев нужно совсем немного, чтобы наладить отношения с научным руководителем. Требуется всего лишь хорошая, грамотно написанная работа и знание её содержания. К сожалению, не все темы оказываются простыми для изучения, литературы или знаний может недоставать.
                </p>
                <p className="block-text__par">
                    Вскоре приходит мысль: «Мне не справиться». Научный руководитель принимается требовать «ну хотя бы первую главу», а материал никак не отыскивается. Через неделю-другую преподаватель начнёт злиться. Он может решить, что Вы слабый студент, что зря он согласился на Ваше научное руководство. Ещё немного, и придётся забыть о хороших отношениях с научным руководителем. Значит, остаётся только один вариант.
                </p>
                <p className="block-text__par">
                    В такой ситуации хороший вариант – <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>. Так  Вы решаете проблемы и с научным руководителем, и со своим свободным временем. Однако, не всякая работа может понравиться преподавателю, да и только её текст – далеко не залог отличной оценки. Понадобится несколько составляющих, чтобы навсегда заслужить доверие учителя.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    На первом месте, конечно же, толковая работа. Она не должна содержать последней научной новизны, достаточно будет просто проработки материала. Но даже для такой, казалось бы, мелочи потребуется настоящий профессионал. Простое изложение идей других авторов – это «тройка», а значит, потерянное доверие научного руководителя. Для «четвёрки» и внимания преподавателя потребуется внятное изложение материала. Для «пятёрки» же и уважения нужно самое трудное. Это умение критиковать других авторов, внятно излагая их мысли, и предлагать свои решения проблем.
                </p>
                <p className="block-text__par">
                    Хорошим примером для этого может служить курсовая по праву. В первую очередь Вы плените внимание преподавателя большим количеством ссылок на каждой странице Вашей работы. При этом это должны быть не только учебные пособия или сборники законодательства, но и монографии, научные статьи. Наш исполнитель легко справится с этим. Кроме того, он может легко дать совет - другой, как излагать материал во время устного ответа. Но к этому мы ещё вернемся несколько позже.
                </p>
                <p className="block-text__par">
                    Затем – обработка материала. Учитель будет в высшей степени доволен, если в Вашей работе будет показано, как отражаются идеи исследователей в действующей практике. Плюсом будет анализ того, почему эти идеи не работают или же их реализация искажается. К сожалению, мало, кто из исполнителей способен на такое. К счастью, если Вы читаете это, значит, Вам будет легко найти нужного человека.
                </p>
                <p className="block-text__par">
                    Далее – разбор наиболее интересных случаев, совершенно выбивающихся из серой массы. Вы обретёте уважение научного руководителя, если в работе будет указан наиболее интересный казус, редкий, либо же не встречающийся на просторах интернета. Возможно, преподаватель сам в дальнейшем использует этот пример. Но самое главное это то,  что он выделит Вашу работу среди всех остальных.
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
                    Наиболее важной частью работы являются выводы. В заключении научный руководитель всегда хочет увидеть чёткие, ёмкие ответы, в которых сконцентрирована сама суть работы. Наш исполнитель всегда готов прийти на помощь в этом деле, так что можно не волноваться. Лаконичность фраз и отсутствие «воды» - вот путь к сердцу Вашего преподавателя.
                </p>
                <p className="block-text__par">
                    Вслед за написанием работы идёт, возможно, ещё более трудный этап. Это изложение материала, доказательство того, что Вы действительно им овладели.
                </p>
                <p className="block-text__par">
                    Это собственно защита вашей работы. Перед нею Вам достаточно будет около получаса пообщаться с исполнителем работы или получить от него письменные указания. Они представляют собой список наиболее важных моментов Вашей работы, «подводные камни» и интересные идеи. Пробежав подобный текст глазами, Вы будете готовы принять бой за уважение научного руководителя.
                </p>
                <p className="block-text__par">
                    Обычно защита происходит в каком-нибудь просторном помещении. Здесь Вы выступаете с кратким изложением работы и выводов по ней. Конечно же, будет присутствовать и Ваш научный руководитель. Но Вы уже одержали победу. Необходимо всего лишь <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link> у нас, Вы уже прошли все указанные этапы, заслужили доверие и похвалу Вашего учителя – и он грудью встанет за Вас на защите. А это значит, что победа и отличная оценка – в Вашем кармане.
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

        </div>
    </Wrapper>
);


export default page
