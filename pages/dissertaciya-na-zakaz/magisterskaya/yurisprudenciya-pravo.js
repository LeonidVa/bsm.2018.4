import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../../components/common/ImageBlock";
import Video from "../../../components/common/VideoBlock";


const page = () => (
    <Wrapper title="Магистерская диссертация по юриспруденции на заказ в Москве и РФ – цены, сроки написания под ключ" description="Магистерская диссертация по юриспруденции на заказ! Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="Заказать магистерскую диссертацию по юриспруденции сколько стоит цена стоимость купить на заказ в Москве срочно недорого помощь написать написание" />
            </MetaTags>
            
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
                        <a>По юриспруденции</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="#form">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Магистерская диссертация</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 23 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-35">
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



            <section className="block-service__dis">
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
            </section>



            <section className="block-text">
                <h1 className="block-text__title">
                    Магистерская диссертация по юриспруденции
                </h1>
                <p className="block-text__par">
                    В каких случаях стоит обращаться к нам за помощью? Если у вас катастрофически не хватает свободного времени, то магистерская диссертация по юриспруденции может быть написана сотрудниками агентства, где работают преподаватели-практики с опытом. Обратитесь в компанию BeSmarter! – мы специализируемся на услугах высокого качества исполнения. К нам приходят, когда с написанием работы совсем сложно:
                </p>
                <ul>
                    <li>
                        если вы постоянно заняты и не можете разработать план;
                    </li>
                    <li>
                        когда написаны отдельные части, но закончить диссертацию не получается, а сроки поджимают;
                    </li>
                    <li>
                        если нет возможности проводить исследования, а также писать теоретическую часть;
                    </li>
                    <li>
                        когда нужно срочно поступать в другой ВУЗ (например, за границей), а вы не готовы.
                    </li>
                </ul>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/magiuri.jpg')}/>


            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества написания под ключ
                </h2>
                <p className="block-text__par">
                    В каждом отдельном случае магистерская диссертация по юриспруденции пишется с учетом требований научного руководителя и пожеланий самого заказчика. Таким образом, нам удается добиться высоких показателей качества работы:
                </p>
                <ul>
                    <li>
                        вы всегда можете вносить правки и корректировать заказ;
                    </li>
                    <li>
                        авторами выступают проверенные преподаватели-практики из Москвы и других регионов России, поэтому уровень материала очень высокий;
                    </li>
                    <li>
                        не нужно переживать о том, что части работы появлялись в сети, и теперь вы не защититесь из-за низкой уникальности материала.
                    </li>
                </ul>
                <p className="block-text__par">
                    Почему лучше сделать выбор в пользу написания, а не покупки готовой диссертации? Одна из самых частых жалоб тех, кто хотел сэкономить и просто купить материал – отсутствие научной новизны, авторского подхода к изложению, а также устаревшие данные. Когда магистерская диссертация по юриспруденции выполняется под ключ, с такими проблемами почти не сталкиваются. Кроме того, вам гарантировано оформление по стандартам ГОСТ, исчерпывающие и развернутые ответы на все поднятые и исследуемые вопросы. При написании наши авторы ориентируются исключительно на актуальные и проверенные данные.
                </p>
            </section>


            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит цена услуги
                </h2>
                <ol>
                    <li>
                        Объем. Каждая магистерская диссертация, дипломная, курсовая по юриспруденции оценивается по количеству страниц.
                    </li>
                    <li>
                        Срочность. Лучше всего делать заказ заранее, ведь если дедлайны поджимают, то цена может вырасти.
                    </li>
                    <li>
                        Наличие или отсутствие разработанного и утвержденного с преподавателем плана. Если он также прорабатывается с нуля, стоимость может увеличиться.
                    </li>
                    <li>
                        Глубина исследований влияет на время написания, а также на прайс.
                    </li>
                    <li>
                        Сложность выбранного направления.
                    </li>
                </ol>
            </section>



            <section className="block-text">
                <h2 className="block-text__title">
                    Какие варианты экономии существуют?
                </h2>
                <p className="block-text__par">
                    Если вам важно заплатить минимальную цену, учтите следующие возможности:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        - Обращайтесь сразу, как только возникла необходимость в помощи.
                    </li>
                    <li>
                        - Можете написать часть сами, а часть – поручить авторам.
                    </li>
                    <li>
                        - Чем больше практических исследований в проекте, тем выше цена, ведь дополнительные данные под ключ всегда обходятся дороже.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="//vk.com/video_ext.php?oid=372065572&id=456239032&hash=e0751038dfbca771&hd=2"></iframe>
            </Video>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества с нами
                </h2>
                <p className="block-text__par">
                    Вы можете заполнить заявку на сайте компании BeSmarter! или позвонить по телефонам <span className="tel1">+7 (495) 772-40-90</span>, <span className="tel1">+7 (495) 772-90-40</span>, чтобы сэкономить время. Далее действует такая схема работы:
                </p>
                <ol>
                    <li>
                        Согласование всех нюансов и подробностей, сроков.
                    </li>
                    <li>
                        Внесение предоплаты.
                    </li>
                    <li>
                        Начало работы над проектом.
                    </li>
                </ol>
                <p className="block-text__par">
                    В зависимости от того, нужна ли вам сразу вся работа целиком или частями, происходит расчет и передача самих материалов. Мы советуем не заказывать отдельные главы, ведь когда на руках есть вся работа целиком, вы сможете без проблем ответить на любой вопрос научного руководителя. В этом случае вообще никто не заподозрит, что магистерская диссертация по юриспруденции написана на заказ.
                </p>
                <p className="block-text__par">
                    Обратитесь в BeSmarter!, чтобы сэкономить личное время и избежать неприятностей в учебе. Вас ждет не только безупречное содержимое, но и структурированная, понятная подача материала, а также оформление диссертации по всем действующим правилам и стандартам.
                </p>
            </section>

            <a name="form" id="form"/>
            <FormOrder />

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
