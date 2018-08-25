import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/otchet-po-prak'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import otchet from 'components/config/linksBlock/otchet';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';



const page = () => (
    <Wrapper title="Заказать отчет по педагогической практике – купить отчет по практике в Москве и РФ срочно – цены, сроки написания под ключ" description="Предлагаем заказать отчет по педагогической практике! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img4">

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
                    <Link href="/zakazat-otchet-po-praktike">
                        <a>Отчёт по практике</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Педагогической</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>



            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/otch-prakrik1.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Отчет по практике</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 3 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-otchet-po-praktike">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovoj-proekt-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
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

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Заказать отчет по педагогической практике
                </h1>
                <p className="block-text__par">
                    Прохождение педагогический практики – это один из последних этапов обучения и «предвестник» написания и защиты дипломной работы. От того, насколько качественно будет подготовлен отчет по педагогической практике и проведена его защита, во многом зависит общий результат окончания учебного заведения.
                </p>
                <p className="block-text__par">
                    У студентов возникает множество трудностей с прохождением педагогической практики и подготовкой отчета о ней. Основными из них являются:
                </p>
                <ul>
                    <li>
                        Загруженность по основному месту работы, не связанной с педагогической деятельностью.
                    </li>
                    <li>
                        Невозможность прохождения педагогической практики в случае отсутствия учебных заведений или отказа их руководства.
                    </li>
                    <li>
                        Болезнь и иные личные обстоятельства.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Поможем вам не сойти с дистанции!
                </h2>
                <p className="block-text__par">
                    Обидно, когда возникает угроза отчисления по независящим от студента причинам, особенно в самом конце обучения. Такая ситуация возможна именно с педагогической практикой. Конечно, можно самостоятельно подготовить отчет и не проходя практику в реальности, но тогда любой опытный преподаватель может это выявить на этапе защиты. Сложность заключается в том, что необходимо знать все нюансы работы учебного заведения и тонкости работы педагога в том или ином коллективе.
                </p>
                <p className="block-text__par">
                    Оказать всеобъемлющую помощь готова компания BeSmarter!, которая выполняет научные работы для студентов и аспирантов. У нас можно заказать отчет по педагогической практике. Преимущества такого варианта:
                </p>
                <ul>
                    <li>
                        Отчет будут готовить специалисты, имеющие большой педагогический стаж и знающие все нюансы этой деятельности
                    </li>
                    <li>
                        Введение в тему, оказание помощи и консультирование вплоть до защиты отчета.
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
                    Можно ли сэкономить? Да!
                </h2>
                <p className="block-text__par">
                    Для того чтобы получить готовый отчет по педагогической практике, его лучше заказать в специализированной компании. Этапы действий студента при этом аналогичны шагам при заказе курсовой или дипломной работы. Сэкономить при этом можно, если студент самостоятельно подготовит план работы и увеличит время написания для исполнителя. Чем меньше сроки при заказе отчета по педагогической практике, тем выше стоимость услуги.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Важное преимущество сотрудничества с нами
                </h2>
                <p className="block-text__par">
                    Специалисты BeSmarter! имеют подтвержденный опыт педагогической работы, готовы подробно раскрыть любую тему и описать реальные нюансы труда педагога. При этом проблемные вопросы, выводы и предложения по их решению не будут выглядеть оторванными от жизни. Это обстоятельство положительно скажется на уникальности отчета и восприятии преподавателем проделанной студентом работы.
                </p>
                <p className="block-text__par">
                    Не отказывайтесь от обучения на финишном этапе! Заказав в BeSmarter! отчет по педагогической практике, вы сможете уверенно готовиться к дипломной работе и государственным экзаменам.
                </p>
            </section>

            <a name="form" id="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Заказать" fields={fields}/>

            <Video>
                <iframe src="https://drive.google.com/file/d/1pOfa1kQsnKv9gwPUNAkv3pnd29Pxwouq/preview"></iframe>
            </Video>

            <LinksBlock links={otchet}/>
        </div>
    </Wrapper>
);


export default page
