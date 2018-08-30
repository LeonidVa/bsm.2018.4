import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';import FormEstimate from 'components/common/forms/Order';;
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Написание диплома | «BeSmarter!». Тел. +7 (495) 772-40-90." description="Представьте себе, что написание диплома может стать очень приятным занятием! Никаких бессонных ночей за монитором компьютера, часов просиживания в библиотеках в поисках нужного материала и необходимости избегать научного руководителя в вузе, поскольку Вы еще не готовы предоставить ему свои наработки. Ваше время можно потратить гораздо более интересно и продуктивно, например, посвятив его работе, семье или встречам с лучшими друзьями. И мы поможем Вам в этом!">
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
                        <a>Написание диплома</a>
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

            <FormEstimate />

            <section className="block-text">
                <h1 className="block-text__title">
                    Написание диплома
                </h1>
                <p className="block-text__par">
                    Представьте себе, что <b>написание диплома</b> может стать очень приятным занятием! Никаких бессонных ночей за монитором компьютера, часов просиживания в библиотеках в поисках нужного материала и необходимости избегать научного руководителя в вузе, поскольку Вы еще не готовы предоставить ему свои наработки. Ваше время можно потратить гораздо более интересно и продуктивно, например, посвятив его работе, семье или встречам с лучшими друзьями. И мы поможем Вам в этом!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Наша компания предоставляет всем студентам <b>помощь в написании дипломов</b>, на любой, даже начальной стадии работы. Если у Вас уже имеются какие-то собственные наработки, мы возьмем их за основу и доведем до завершающего этапа. Если же их еще нет, мы с радостью выполним всю работу самостоятельно от начала и до конца!
                </p>
                <p className="block-text__par">
                    Мы – современные и энергичные люди, которые прекрасно понимают насколько трудно сегодня совместить работу и учебу. И именно поэтому мы прикладываем максимум усилий, чтобы Вам это удалось! Учиться и при этом работать – сегодня это возможно! Вы на себе ощутите результативность нашей помощи, даже один раз воспользовавшись услугами компании BeSmarter!
                </p>
                <p className="block-text__par">
                    Ваше время и Ваше здоровье – бесценны, мы прекрасно это понимаем, и именно поэтому сотрудничаем только с лучшими специалистами – кандидатами и докторами наук, преподавателями головных вузов нашей страны, которые выполнят Ваш заказ на самом высоком уровне. А чтобы дать Вам дополнительные гарантии, мы предлагаем заключить договор в офисе компании BeSmarter!, в котором прописаны все наши обязательства перед Вами.
                </p>
                <p className="block-text__par">
                    Все правки, внесенные Вашим научным руководителем, будут учтены нашими авторами, которые доведут работу до совершенства. Отличный качественный диплом – это гарант успешной защиты и Вашего хорошего настроения!
                </p>
            </section>

            <CurrentOffer />

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    <b>Написание дипломных работ</b>, а также диссертаций, курсовых, рефератов – специализация нашей компании. Тысячи клиентов, заказывавших у нас дипломные работы и отлично защитившихся в вузах – наглядный показатель нашей профессиональной работы.
                </p>
                <p className="block-text__par">
                    Помимо написания самой дипломной работы, наши авторы готовы подготовить Вам речь-доклад к Вашему диплому для аттестационной комиссии, в котором коротко и основательно будут изложены все основные положения и выводы Вашей дипломной работы. Кроме того, мы готовы подготовить для Вас раскладку для комиссии и презентацию, что сделает Ваше выступление на защите ярким, интересным и запоминающимся!
                </p>
                <p className="block-text__par">
                    Зачем откладывать на завтра то, что можно сделать сейчас? Начинать подготовку к защите дипломной работы лучше всего заранее, ведь в этом случае у Вас будет в запасе больше времени на то, чтобы лучше подготовиться и блестяще выступить перед аттестационной комиссией! Просто заполните на нашем сайте <a href="#form"target="_blank">форму заказа</a> или наберите номер <b>+7 495 772-4090</b>, наши менеджеры предоставят детальную информацию относительно Вашей работы и рассчитают ее стоимость. Пусть учеба будет в радость, а BeSmarter! поможет Вам в этом!
                </p>
            </section>

            <a name="form" id="form"/>
            <OrderForm />

        </div>
    </Wrapper>
);


export default page
