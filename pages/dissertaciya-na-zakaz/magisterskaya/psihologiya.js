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
import links from 'components/config/linksBlockConfig';

import Video from 'components/common/VideoBlock';


const page = () => (
    <Wrapper title="Магистерская диссертация по психологии на заказ в Москве и РФ – цены, сроки написания под ключ">
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
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a>Магистерская</a>
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
                    Магистерская диссертация по психологии на заказ
                </h2>
                <p className="block-text__par">
                    Каждый студент факультета психологии, вне зависимости от специальности, после долгих лет обучения должен сделать финальный шаг – написать и защитить магистерскую работу. Психология – очень тонкая наука, требующая, помимо хорошего знания теории и умения грамотно искать информацию, глубокого понимания человеческой психики, внутреннего мира и состояния. Так, дипломный проект часто становится для студентов настоящим камнем преткновения. Выбор темы, поиск информации, разработка практической части проекта и его оформление порой вызывают огромные сложности.
                </p>
                <p className="block-text__par">
                    И дело не только в тонкостях непростой специальности, содержащей в себе множество дисциплин, но иногда и в простой занятости выпускников, особенно работающих, у которых зачастую просто нет времени на круглосуточный поиск необходимой информации. Кроме того, у всех по-разному складываются жизненные обстоятельства – у каждого человека может быть сложный период, много работы, вопросы личного характера. Всё это не способствует хорошей подготовке и работе над диссертацией. Вполне возможно, что именно в такой непростой ситуации и потребуется дополнительная помощь профессионалов BeSmarter!, способных максимально упростить и организовать работу над магистерской диссертацией.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества написания в BeSmarter!
                </h2>
                <p className="block-text__par">
                    Очень часто студенты-выпускники, не имея возможности написать магистерскую диссертацию лично из-за загруженности, отсутствия правильной организации процесса или даже нехватки необходимой подготовки, предпочитают покупать готовую работу. Это, возможно, сэкономит время и совсем не потребует никаких усилий, однако готовая магистерская работа – не самый лучший вариант. Прежде всего, в таком случае студент не принимает участия в работе над проектом, что очень сильно усложняет его последующую защиту. Кроме того, написание магистерской работы может быть понятным и интересным и в дальнейшем стимулировать на создание собственных разработок в данной теме, а правильный подход к поиску информации существенно увеличит запас знаний в родной специальности.
                </p>
                <p className="block-text__par">
                    Именно поэтому лучше прибегнуть к услугам написания диссертации на заказ у специалистов, которые помогут написать работу, а не выполнят ее вместо заказчика. Компания BeSmarter! предлагает услугу написания магистерской диссертации по психологии на заказ, гарантируя целый ряд преимуществ:
                </p>
                <ul>
                    <li>
                        высокое качество – работы создаются преподавателями ВУЗов с наличием кандидатской степени и огромным опытом работы. На каждом этапе написания проекта осуществляется контроль качества выполнения;
                    </li>
                    <li>
                        оригинальность работы – все диссертации пишутся с нуля, без опоры на готовые проекты из сети. Специалисты компании гарантируют уникальность текста от 80 до 98% по Антиплагиату в зависимости от тематики;
                    </li>
                    <li>
                        пунктуальность и быстрые сроки написания – оптимальный срок выполнения заказа составляет от 5 дней, но даже если по какой-то причине работа над диссертацией была отложена вами в очень долгий ящик, и на выполнение остался всего 1 день, все будет выполнено в срок на самом высоком уровне;
                    </li>
                    <li>
                        сопровождение вплоть до защиты – услуги компании не ограничиваются одним только написанием диссертации, заказчик получает полную поддержку в подготовке презентации проекта и доклада. При необходимости авторы ответят на все интересующие вопросы и подготовят к защите теоретической части;
                    </li>
                    <li>
                        официальный договор – сотрудничество проходит на официальном уровне, с заключением договора и соблюдением прав обеих сторон. Договор гарантирует высокое качество работы, пунктуальность и полную конфиденциальность, что очень важно для тех, кто решит продолжить академическое образование.
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
                    Стоимость услуги
                </h2>
                <p className="block-text__par">
                    Цена на написание магистерской диссертации по психологии в BeSmarter! начинается от 24 000 рублей и может варьироваться в зависимости от темы диссертации и сроков выполнения. Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.
                </p>
            </section>

            <Video>
                <iframe src="//vk.com/video_ext.php?oid=372065572&id=456239032&hash=e0751038dfbca771&hd=2" frameborder="0" allowfullscreen></iframe>
            </Video>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
