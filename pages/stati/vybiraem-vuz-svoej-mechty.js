import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Выбираем вуз своей мечты | «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="На дворе лето. Для тысяч школьников это возможно самые волнующие три месяца в жизни, потому что это их последнее лето в школе. Они – выпускники. И в этом году им предстоит начать полную незабываемых деньков студенческую жизнь. Но прежде придется решить по-настоящему серьезный вопрос – выбрать вуз своей мечты. Это трудно, ведь каждый думает: «А вдруг выберу не то? А что если не справлюсь? А кто поможет мне, ведь семья занимается абсолютно другим?». Но не нужно бояться, ведь Вы всегда сможете найти помощь у специалистов и выполнить любое задание, например, курсовую работу или диплом на заказ." />
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
                        <a>Выбираем вуз своей мечты</a>
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
                    Выбираем вуз своей мечты
                </h1>
                <p className="block-text__par">
                    На дворе лето. Для тысяч школьников это возможно самые волнующие три месяца в жизни, потому что это их последнее лето в школе. Они – выпускники. И в этом году им предстоит начать полную незабываемых деньков студенческую жизнь. Но прежде придется решить по-настоящему серьезный вопрос – выбрать вуз своей мечты. Это трудно, ведь каждый думает: «А вдруг выберу не то? А что если не справлюсь? А кто поможет мне, ведь семья занимается абсолютно другим?». Но не нужно бояться, ведь Вы всегда сможете найти помощь у специалистов и выполнить любое задание, например, курсовую работу или <b><Link href="/diplom-na-zakaz"><a>диплом на заказ</a></Link></b>.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Так как же все-таки выбрать место учебы, которое по-настоящему раскроет Ваш талант, станет основой счастливой и успешной карьеры? Начать стоит с себя. Не нужно искать советов у других, ведь только Вы знаете, чего Вы действительно хотите. Ведь так? Бывает, что есть много увлечений, много того, что дается Вам легко, но Вы не знаете что именно выбрать. А выбирать следует хорошо, ведь этот выбор, возможно, определит Ваше будущее. Эта статья поможет Вам сделать этот выбор.
                </p>
                <p className="block-text__par">
                    Начните со следующего: разделите чистый лист бумаги на три колонки. В первую очередь, занесите то, что у Вас получается делать действительно хорошо, во вторую –  те хобби, которые Вас делают по-настоящему счастливым, в третью – те свои таланты, которые могли бы приносить или уже приносят  доход. Не стесняйтесь писать все, что придет в голову, возможно однажды это станет Вашей профессией. Дальше стоит выделить те направления, в которых Вы имеете возможность развиваться, которым можно обучаться. Хотя это прекрасное занятие, вряд ли запуск воздушного змея может стать Вашей профессией. Итак, выделив,  эти направления выберете из последней колонки такие, которые прямо или косвенно присутствуют в двух других. Хорошо, если таких направлений будет несколько.
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
                    Теперь, когда Вы провели анализ своих занятий и интересов, стоит узнать, где можно им достойно обучиться. Если у Вас есть возможность отправиться учиться в другие города или страны, не бойтесь ей воспользоваться. Помните, самое важное – выбрать вуз своей мечты, где Вас обучали бы тому, что Вам по-настоящему интересно. Составьте список мест, где обучают по направлениям близким к тем, что Вы выбрали на предыдущем этапе.
                </p>
                <p className="block-text__par">
                    Таким образом, Вы имеете несколько вариантов в том, чему будете обучаться и тому, где будете это делать.  Здесь уже имеет смысл обратиться к родителям или преподавателям, чтобы они подсказали те специальности, которые более престижны и перспективны, и те вузы, которые готовят студентов по-настоящему хорошо.
                </p>
                <p className="block-text__par">
                    Так Ваш выбор будет легче. А как насчет того, чтобы поступить в вуз? Ведь многие учебные заведения требуют не только аттестат и результаты ЕГЭ, но и различные вступительные работы. Часто бывает, что работы эти по тем предметам, которых Вы не изучали в школе. Как быть тогда? В таких ситуациях стоит обращаться к профессионалам, которые помогут Вам выполнить работы в срок, да еще и понять новый и интересный для Вас предмет. Вам легко будет сделать любую работу с нами, и Вы будете приятно удивлены, чувствуя, что мы помогаем Вам по-настоящему в них разобраться. Быть уверенным в своих силах – что может быть важнее?
                </p>
                <p className="block-text__par">
                    Решайтесь, побеждайте, идите к цели! Выбор вуза своей мечты в Ваших руках. Сделайте процесс его поиска интересным, творческим и запоминающимся. Отдавайте предпочтение тому, что подсказывает Ваше сердце, но не забывайте и о здравом смысле. Помните, добившись успеха в определенной области, став высококлассным специалистом, профессионалом своего дела, Вы обеспечите себе жизнь, которая позволит развиваться в любом русле. Поэтому все-таки будьте благоразумны при выборе профессии. И пусть Вас не останавливает необходимость решать различные задания, выполнять огромные вступительные работы, сдавать экзамены. Позвоните и заручитесь поддержкой специалистов, которые помогают выполнять огромное количество работ каждый день.
                </p>
                <p className="block-text__par">
                    Вы всегда сможете сделать с нами вступительные тесты, задания, рефераты, так же легко, как и <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b> у грамотных специалистов. Верьте в себя, обращайтесь к нам за написанием дипломных работ, рефератов и курсовых, и вы легко не только выберете вуз своей мечты, но и закончите в нем обучение блестяще!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

        </div>
    </Wrapper>
);


export default page
