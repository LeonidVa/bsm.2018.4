import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Совместить работу и учебу – реально! | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Последние годы в вузе – это то время, когда молодые и амбициозные люди впервые начинают по-настоящему искать возможности для реализации себя в профессиональном направлении. Бытует мнение, что начинать работать по специальности лучше всего, когда ты учишься. И это правильно и интересно. Но интересы часто выходят за рамки средств, которыми располагают молодые люди-студенты. Тогда и начинается поиск работы. Но как быть с тем, что на учебу остается совсем немного времени? Многие студенты задумываются о том, чтобы сделать диплом на заказ. И это правильное направление мысли. Почему? Это просто: потому что это делает реальным и работать, строя карьеру и набираясь опыта, и оставаться в строю успешных студентов.">
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
                    <Link href="/stati">
                        <a>Статьи</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Совместить работу и учебу – реально!</a>
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



            <section className="block-service__dis">
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
            </section>



            <section className="block-text">
                <h1 className="block-text__title">
                    Совместить работу и учебу – реально!
                </h1>
                <p className="block-text__par">
                    Последние годы в вузе – это то время, когда молодые и амбициозные люди впервые начинают по-настоящему искать возможности для реализации себя в профессиональном направлении. Бытует мнение, что начинать работать по специальности лучше всего, когда ты учишься. И это правильно и интересно. Но интересы часто выходят за рамки средств, которыми располагают молодые люди-студенты. Тогда и начинается поиск работы. Но как быть с тем, что на учебу остается совсем немного времени? Многие студенты задумываются о том, чтобы сделать <b><Link href="/diplom-na-zakaz"><a>диплом на заказ</a></Link></b>. И это правильное направление мысли. Почему? Это просто: потому что это делает реальным и работать, строя карьеру и набираясь опыта, и оставаться в строю успешных студентов.
                </p>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/19(14).jpg')}/>



            <section className="block-text">
                <p className="block-text__par">
                    Предположим, Вы учитесь на технической специальности, и в рамках теоретических занятий творчески особо не разгуляешься. Да к тому же, вокруг полным-полно слухов о том, что инженер без опыта редко может сразу получать достойную заработную плату. Тогда Вы устраиваетесь на полставки работать помощником инженера, ассистентом разработчика, Вы впервые видите реальное применение собственным знанием. Вы растете как специалист, и вот, начинают поступать предложения заняться серьезными проектами, как полноценный сотрудник. Вы добились многого и хотите идти дальше, но не хотите оставлять учебу. Хочется успеть все сразу, да еще и хорошо, но на это уже не хватает времени. Нужна какая-то помощь. Хорошим решением в этом случае станет разгрузить немного себя, поискав кого-нибудь, кто мог бы выполнять Ваши вузовские работы. Но притом, Вы должны понимать все задания и разбираться в предмете. Таким образом, Вам нужны специалисты, которые дадут Вам время для работы, выполнив задания, заказанные Вами, и которые помогут Вам в них разобраться. С нашими специалистами Вам легко будет оставаться таким же успешным студентом, при этом верно идя к карьерному успеху на работе и, что самое главное, отдыхая по вечерам и выходным.
                </p>
                <p className="block-text__par">
                    Или возьмем другую ситуацию: Вы выбрали место учебы и специальность. Проучились два-три курса без особого интереса к общим предметом, но, веря в то, что профильные предметы будут Вам действительно близки. Но этого не происходит, Вы расстроены, но хотите довести дело до конца. Но, как и в любом деле, когда нет энтузиазма и рвения, результаты даются гораздо тяжелее. Вы ищите дело, в котором могли бы реализовать себя, и очень часто в такие моменты попадается по-настоящему интересная и креативная работа. Она совсем не похожа на скучные часы на занятиях. Вы заинтригованы новыми возможностями и все дается Вам поразительно легко. Но хочется и на учебе успевать также хорошо, как и на работе. Это сделать не трудно, когда есть кто - то, способный Вас понять и уделить Вам больше времени, чем преподаватели, занятые с целыми группами. Вы не знаете с чего начать, сталкиваясь с курсовыми проектами. С нами Вы сможете тратить гораздо меньше так нужного Вам времени на то, чтобы выполнять задания. И, вдобавок, будете чувствовать, что действительно понимаете проекты, которые мы делаем. Мы помогаем Вам добиваться успехов в том, что действительно важно для Вас, помогаем работать и зарабатывать, продолжая быть сильным студентом.
                </p>
            </section>



            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />



            <section className="block-text">
                <p className="block-text__par">
                    Работа и учеба одновременно. Это всегда нелегко. Мы лавируем между перспективами стать по-настоящему классным специалистом и желанием зарабатывать, добиваться успехов и чувствовать жизнь уже сейчас. Энергия бьет ключом, но и ее не всегда хватает на оба дела. Но выбрать что-то одно трудно. И, на самом деле, в этом нет необходимости, потому что нельзя угадать, что будет правильно. Лучше использовать ресурсы, дающие возможность успевать в обоих направлениях. Приятно работать и зарабатывать, позволяя себе путешествия, интересные хобби, приглашать свою девушку в красивый ресторан или приходить на свидание к своему парню в новом вечернем платье. И не менее приятно, добиваться успеха в учебе, которой отдается столько времени, радовать родителей, иметь невероятные перспективы и знать, что ты в чем-то классный специалист.
                </p>
                <p className="block-text__par">
                    Все это перед Вами, стоит просто позвонить. И больше не будет проблем с написанием дипломной работы, или курсовой, или реферата. Ведь вашей работой будут заниматься самые лучшие специалисты, которые имеют большой преподавательский стаж. И стаж в лучших вузах страны. Они напишут для Вас крепкую аналитическую работу и помогут Вам разобраться в ней как дважды два. Вы будете добиваться успехов, зная, что рядом есть специалисты, способные помочь Вам в выполнении любой работы. <b><Link href="/diplom-na-zakaz"><a>Заказать диплом</a></Link></b>, курсовой проект или же реферат, все это Вы можете сделать сейчас, будучи уверенным в качестве, сроках и, самое главное, в том, что с нами будете иметь полное понимание выполненных работ.
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />


            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        </div>
    </Wrapper>
);


export default page
