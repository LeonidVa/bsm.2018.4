import React from "react";
import Link from "next/link";
import Wrapper from "components/Wrapper";

import NavRow from "components/common/NavRow";
import MessBlock from "components/common/MessBlock";

import ProfitsBlockSlider from "components/common/ProfitsBlockSlider";
import dopy from "data/dopraboty";

import FormOrder from "components/common/forms/Big/Order";
import FormEstimate from "components/common/forms/Big/Estimate";

import InfoBlock from "components/common/InfoBlock";
import infoBlockConfig from "data/infoBlock/diplom";

import CurrentOfferH2 from "components/content/offers/CurrentOfferH2";

import reviewBlockConfig from "data/reviewBlockConfig";
import ReviewBlockSlider from "components/common/ReviewBlockSlider";

import LinksBlock from "components/common/LinksBlock";
import links from "data/linksBlock/diplom";

import Video from "components/common/VideoBlock";
import ImageBlock from "components/common/ImageBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"


const page = () => (
    <Wrapper
        title="Диплом на заказ – срочно заказать дипломную работу в Москве, помощь в написании и сопровождение до защиты"
        description="Написание диплома на заказ! Быстрая, недорогая и профессиональная помощь в подготовке дипломной работы – компания BeSmarter. Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40."
    >
        <div className="wrapper bg bg-c2 bg-img bg-img3">


            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Дипломная работа</a>
                    </Link>
                </div>
            </section>

            <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Дипломная работа</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

            <section className="block-nav">
                <NavRow
                    url="#form"
                    scroll={false}
                    title="Заказать работу"
                    description="Узнай цену твоей работы"
                />
            </section>
            <MessBlock/>

            <Diplom/>

            <MatZashGirl/>

            <section className="block-text">
                <h1 className="block-text__title">Написание диплома на заказ</h1>
                <p className="block-text__par">
                    Вам срочно нужен грамотный и толковый специалист, у которого можно
                    заказать написание дипломной работы? Компания BeSmarter! предлагает
                    свои услуги по подготовке диплома за короткое время под ключ. Наши авторы
                    – действующие преподаватели ведущих ВУЗов России, поэтому мы (а значит, и вы!)
                    на «отлично» справимся даже с самой сложной темой – гуманитарной, узкотехнической
                    или любой другой.
                </p>
                <p className="block-text__par">
                    Помощь в написании диплома на заказ – это лишь половина дела.
                    Проект нужно еще защитить, к тому же дотошные научные руководители
                    часто требуют внести в него исправления. Мы не просто напишем вашу
                    дипломную работу, но и будем сопровождать вас до момента защиты,
                    внося правки и корректируя текст в случае необходимости, разработаем
                    раздаточные и другие материалы для защиты.
                </p>
            </section>

            <FormEstimate/>

            <ImageBlock imageSrc={require("static/images/block/dip-na-zakaz.jpg")} altText="Диплом на заказ"/>

            <section className="block-text">
                <h2 className="block-text__title">
                    5 причин для заказа дипломной работы в BeSmarter!
                </h2>
                <ul>
                    <li>
                        <b>Компетентность.</b> В BeSmarter! вы можете заказать подготовку диплома
                        преподавателем московского или другого российского ВУЗа, имеющего степень кандидата наук.
                    </li>
                    <li>
                        <b>Оперативность.</b> Возможна срочная помощь в написании диплома (от 1 дня).
                        Такая оперативность достигается благодаря использованию фирменного подхода,
                        созданного в нашей компании. Вы можете не тратить время на сбор материалов,
                        разработку плана и написание дипломного проекта, а сделать заказ и спокойно заниматься своими делами.
                    </li>
                    <li>
                        <b>Универсальность.</b> Мы на одинаково высоком уровне пишем работы по любым
                        специальностям – экономическим, техническим, юридическим и т. д. Сложность
                        темы не играет роли – проблематика будет выявлена, глубоко раскрыта и проработана.
                    </li>
                    <li>
                        <b>Профессионализм.</b> Мы полностью раскроем тему, подготовим грамотный
                        текст и оформим работу в строгом соответствии ГОСТ.
                    </li>
                    <li>
                        <b>Доступная цена.</b> Команда BeSmarter! понимает сложность жизненных ситуаций
                        наших клиентов, поэтому стоимость заказа диплома у нас невысока.
                        Однако срочная помощь авторов стоит немного дороже.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOfferH2/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Хотите сэкономить при заказе дипломной работы? Учитывайте несколько факторов:
                </h2>
                <ul>
                    <li>
                        <b>Дисциплину.</b> Диплом по гуманитарному предмету можно заказать дешевле, чем по технической специальности.
                    </li>
                    <li>
                        <b>Тематику.</b> Цена труда авторов напрямую зависит от сложности выбранной темы.
                    </li>
                    <li>
                        <b>Требования.</b> Стоимость заказа дипломной работы уменьшается при отсутствии
                        специфических особенностей, например: 100% уникальность текста, необходимость
                        подготовки графических материалов (чертежей, графиков, диаграмм) и выступления для защиты и т. п.
                    </li>
                    <li>
                        <b>Сроки.</b> Срочное написание диплома оплачивается дополнительно. Стандартное время
                        работы авторов – около месяца. В этом случае и у вас будет время как следует подготовиться к защите с нашей помощью.
                    </li>
                    <li>
                        <b>Специальные предложения и акции.</b> Ищите информацию о скидках на нашем сайте!
                    </li>
                </ul>
            </section>

            <Video>
                <iframe src="https://www.youtube.com/embed/aOWtDx1wAHY" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Video>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Video>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как и где заказать дипломную работу в Москве?
                </h2>
                <ul className="fitted">
                    <li>
                        Получить помощи при написании диплома можно онлайн – просто{" "}
                        <b>
                            <a href="#form">заполните заявку</a>
                        </b>{" "}
                        на сайте.
                    </li>
                    <li>
                        Связаться с нашими менеджерами по телефону <br/>8 (495) 772-40-90.
                    </li>
                    <li>
                        Заказать диплом в Москве у нас в{" "}
                        <Link href="/contacts">
                            <b>
                                <a>офисе</a>
                            </b>
                        </Link>{" "}
                        (пер. Большой Кисловский, дом 1 стр. 2, офис 211).
                    </li>
                </ul>
                <p className="block-text__par">
                    Общение с нашими менеджерами вызовет у вас только приятные эмоции!
                    Обращайтесь, BeSmarter! – это качественная дипломная работа на заказ в
                    Москве на самых выгодных условиях.
                </p>
            </section>

            <Video>
                <iframe
                    src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview"
                    frameBorder="0"
                    allowfullscreen
                />
            </Video>

            <a name="form" id="form"/>
            <FormOrder/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);

export default page;
