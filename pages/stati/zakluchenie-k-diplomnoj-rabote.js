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
import Video from 'components/common/VideoBlock';


const page = () => (
    <Wrapper title="Как написать заключение к дипломной работе образец – написание заключения в дипломной работе пример на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="В статье раскрыта тема: «Как правильно написать заключение к дипломной работе», приведены общие рекомендации, примеры и образцы заключений дипломных работ." />
                <meta name="keywords" content="Заключение в дипломной работе пример как написать образец написание пишется что правильно структура" />
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
                        <a>Заключение к дипломной работе</a>
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
                    Как написать заключение к дипломной работе (образец)
                </h1>
                <p className="block-text__par">
                    Пришло время завершать дипломную работу, а значит — необходимо написать заключение. Здесь представляется картина в одной из аудиторий: сидят три студента и ломают голову над требованиями введения к диплому, спустя неделю они штудируют методические указания, дабы разобраться в правилах оформления второго и третьего раздела. И вот, казалось бы, трудности позади, <b><Link href="/diplom-na-zakaz"><a>дипломная</a></Link></b> почти готова, но они все спорят и выясняют, как правильно писать заключение в дипломной работе.
                </p>
                <p className="block-text__par">
                    Пути студента неисповедимы — каждый раздел требует своей точности в исполнении и тщательности в выполнении всех требований. Кто-то решается <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b> и избавиться от всех проблем сразу, а кто-то, вопреки всему тянет тяжелую ношу и решается трудиться самостоятельно. В этой статье мы обсудим, как написать заключение к дипломной работе, чтобы все требования были учтены.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Написание заключения в дипломной работе
                </h2>
                <p className="block-text__par">
                    Написание заключения в дипломной работе подразумевает размещение в конце дипломной:
                </p>
                <ul>
                    <li>
                        основных выводов касательно теоретических и экспериментальных (практических) аспектов раскрываемой проблемы;
                    </li>
                    <li>
                        профессиональной оценки проведенной работы;
                    </li>
                    <li>
                        рекомендаций касательно улучшений объекта исследования;
                    </li>
                    <li>
                        собственное полное мнение касательно перспектив темы; общие итоги, строгие размышления о сфере исследования.
                    </li>
                </ul>
                <p className="block-text__par">
                    Простыми словами, заключение требует понимания темы и самого процесса исследования.
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

            <section className="block-text">
                <h2 className="block-text__title">
                    Как правильно писать заключение в дипломной работе
                </h2>
                <p className="block-text__par">
                    Заключение должно составлять, чаще всего, около 4 страниц. Некоторые тематики подразумевает малое заключение, некоторые — большое, превышающее размер введения.  Сделать эти две структурные части равными по объему символов — вполне нормально, ошибкой такое не считается. Зачастую, методические указания не содержат конкретных инструкций о пропорциях "Введение/Заключение".
                </p>
                <p className="block-text__par">
                    Чтобы работа была оценена на отлично, следует помнить, что выводы должны составляться отдельно по каждому разделу, а объединяться должны складно. Поэтому,рекомендуется писать по 1-2 странице выводов на каждый раздел в отдельности. Затем нужно сливать эти заметки воедино и вычитывать их, лишая смысловые переходы нестыковок и диссонансов.
                </p>
                <p className="block-text__par">
                    Основная задача последнего раздела — отобразить целостность и логическую завершенность всей работы.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Структура заключения дипломной работы
                </h2>
                <ul>
                    <li>
                        Стартовые, вступительные строки. Пара предложений вначале — вводные. Манера заключения должна быть целостной и соответствовать всей работе. Не спешите переходить к цифрам.
                    </li>
                    <li>
                        Основная часть. Здесь располагаются выводы, полученные цифры, показатели. Прочитав заключение, преподаватель должен ощущать полную осведомленность.
                    </li>
                    <li>
                        Заключение. Финальная часть заключения должна содержать ваше мнение касательно перспектив, рекомендации, инновационные размышления касательно улучшений.
                    </li>
                </ul>
                <p className="block-text__par">
                    Все разделы заключения должны быть плавно связаны и не "выдернуты из контекста".
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <Video>
                <iframe src="https://www.youtube.com/embed/9szbyVEYtMg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </Video>
        </div>
    </Wrapper>
);


export default page
