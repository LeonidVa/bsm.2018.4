import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer'
import Link from 'next/link';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';
import InfoBlock from 'components/common/InfoBlock';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';
import ImageBlock from 'components/common/ImageBlock';
import VideoBlock from 'components/common/VideoBlock';
import OrderForm from 'components/common/OrderForm';



import infoBlockConfig from 'components/config/infoBlock/diplom'
import reviewBlockConfig from 'components/config/reviewBlockConfig'
import {profitBlockConfigShort, profitBlockConfigLong} from 'components/config/profitBlockConfig';
import {formConfig} from 'components/config/formConfig'


import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'

const page = () => (
    <Wrapper title=":тут title который в head:">
        <div className="wrapper bg bg-c2 bg-img bg-img4">
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/pricing">
                        <a>Услуги</a>
                    </Link>
                    <span> / </span>
                    <Link href="/course">
                        <a>Курсовая работа</a>
                    </Link>
                </div>
            </section>

            <Title>Заголовок тут</Title>

            <section className="block-nav">
                <NavRow title="Оценить работу" description="Узнайте сроки и цену вашей работы" url='#'/>
                <NavRow title="Почесать репу" description="Почеши сейчас совершенно бесплатно" url='/'/>
            </section>
            <MessBlock/>
            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ImageBlock imageSrc={require('img/block/a.jpg')}/>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('img/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">Воспользуйся пока не поздно</h2>
                <CallMeFormWithTimer timerDuration={75000}>
                    <p>Написание диссертаций специализированными докторами наук</p>
                </CallMeFormWithTimer>
            </section>

            <ProfitsBlockSlider profitBlockConfig={profitBlockConfigLong}/>
            <OrderForm title="Оценить работу" formConfig={formConfig}/>
            <ImageBlock imageSrc={require('img/block/a.jpg')}/>
            <section className="block-text">
                <h2 className="block-text__title">
                    Дипломная работа на заказ
                </h2>
                <p className="block-text__par">
                    Хотите заказать дипломную работу, но не знаете, куда следует обратиться?
                </p>
                <p className="block-text__par">
                    Не желаете тратить большое количество времени на самостоятельную разработку заданной темы, и хотите заказать диплом у профессионалов?
                </p>
                <p className="block-text__par">
                    Планируете заказать диплом в Москве с выгодным предложением в соотношении цены и качества?
                </p>
                <p className="block-text__par">
                    Наша компания BeSmarter! на протяжении многих лет специализируется на изготовлении студенческих, контрольных и научных работ.
                </p>
                <p className="block-text__par">
                    Наши профессионалы с удовольствием возьмутся за разработку темы любой сложности и специфики.
                </p>
                <p className="block-text__par">
                    Дипломная работа на заказ разрабатывается на основании большого количества литературных сведений, а также практической базе и реальных исследований на действующих предприятиях соответствующего направления.
                </p>
                <p className="block-text__par">
                    Вы платите деньги исключительно за положительный результат, поэтому сотрудники общаются с вами вплоть до момента успешной защиты.
                </p>
            </section>
            <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort}/>
            <section className="block-text">
                <h2 className="block-text__title">
                    Почему стоит заказать диплом именно у нас?
                </h2>
                <ul className="block-text__list2">
                    <li>
                        У нас работают исключительно высококвалифицированные специалисты с многолетним опытом работы и соответствующим образованием.
                    </li>
                    <li>
                        Диплом на заказ изготавливается в максимально короткий срок, чтобы вы успели с ним подробно ознакомиться, внести свои замечания и коррективы, а также успешно подготовиться к предстоящей защите.
                    </li>
                    <li>
                        Мы работаем более 10 лет, за которые успели создать себе положительную репутацию, основывающуюся на реальных отзывах наших посетителей и непрерывном потоке удовлетворенных клиентов.
                    </li>
                    <li>
                        Вы можете заказать дипломную работу в Москве одним из наиболее удобных для вас способов: в телефонном режиме, через специальную онлайн-форму или при личной встрече в удобно расположенном офисе.
                    </li>
                    <li>
                        Все работы являются уникальными, содержат в себе исключительно современные сведения, реальные факты, имеют теоретическую и практическую подоплеку.
                    </li>
                </ul>
            </section>
            <section className="block-text">
                <h2 className="block-text__title">
                    Как проходит заказ диплома?
                </h2>
                <p className="block-text__par">Для начала вам необходимо связаться с нашими менеджерами по одному из указанных номеров телефона, либо заполнить онлайн-форму.</p>

                <p className="block-text__par">Наши консультанты с удовольствием ответят на все возникающие у вас вопросы, помогут определиться с выбором темы, обсудят с вами детальные подробности и нюансы предстоящей работы, и заключают соответствующий договор, имеющий официальную юридическую силу.</p>

                <p className="block-text__par">Для того, чтобы вы могли вживую пообщаться с авторами, которые пишут дипломные работы на заказ в городе Москва, открыт комфортабельный офис, расположенный в центре столицы</p>
            </section>
            <VideoBlock/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заказать дипломную работу в Москве - реальность, а не мечта!
                </h2>
                <p className="block-text__par">Мы придерживаемся оптимальной ценовой политики, что позволяет сделать заказ дипломов без существенных финансовых потерь.</p>

                <p className="block-text__par">При постоянном сотрудничестве с нашими специалистами вы можете рассчитывать на существенную скидку.</p>

                <p className="block-text__par">Заказ дипломной работы является абсолютно анонимным, поэтому вы можете не беспокоиться о том, что ваше обращение в нашу фирму скажется на отношении преподавателей к вашей защите.</p>

                <p className="block-text__par">Диплом на заказ в Москве в компании BeSmarter – это отличный вариант успешно защитить свой диплом!</p>
            </section>

            <OrderForm title="Узнайте стоимость Вашей работы прямо сейчас!" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>
















            <section className="block-service">
                {/* Блок с объявлением. */}
                <Link href="/diplom">
                    <div className="block-service__top" style={{color: "#FFFFFF", backgroundImage: "url(" + require('img/block/h.jpg') + ")"}}>
                        <style dangerouslySetInnerHTML={{__html: `.block-service__title.gfgfgfg::after { background-color: #ffffff; }`}}/>
                        <span className="block-service__title gfgfgfg" style={{color: "#FFFFFF"}}>Дипломная работа</span>
                        <p className="block-service__par">
                            Поможем написать дипломную работу на заказ
                        </p>
                        <p className="block-service__par">
                            от 10 500 ₽<br/>
                            от 10 дня
                        </p>
                    </div>
                </Link>
                {/* Блок с кнопками. В классе "list-n" n доложно соответствовать числу кнопок. */}
                <div className="block-service__list list-3">
                    <Link href="/">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая</span>
                            <p>от 4 500 ₽</p>
                            <p>от 2 недель</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая</span>
                            <p>от 4 500 ₽</p>
                            <p>от 2 недель</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая</span>
                            <p>от 4 500 ₽</p>
                            <p>от 2 недель</p>
                        </div>
                    </Link>
                </div>
            </section>


























            <section className="block-service">
                <Link href="/diplom">
                    <div className="block-service__top" style={{backgroundImage: "url(" + require('img/block/g.jpg') + ")"}}>
                        <span className="block-service__title">Дипломная работа</span>
                        <p className="block-service__par">
                            Поможем написать дипломную работу на заказ
                        </p>
                        <p className="block-service__par">
                            от 10 500 ₽<br/>
                            от 10 дня
                        </p>
                    </div>
                </Link>
                <div className="block-service__list list-1">
                    <Link href="/">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая</span>
                            <p>от 4 500 ₽</p>
                            <p>от 2 недель</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая</span>
                            <p>от 4 500 ₽</p>
                            <p>от 2 недель</p>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="block-service__list-item">
                            <span className="block-service__list-title">Курсовая</span>
                            <p>от 4 500 ₽</p>
                            <p>от 2 недель</p>
                        </div>
                    </Link>
                </div>
            </section>











            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);

export default page