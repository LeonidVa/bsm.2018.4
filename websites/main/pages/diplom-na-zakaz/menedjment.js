import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/diplomNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"


const page = () => (
    <Wrapper title="Дипломная работа по менеджменту на заказ – цена и сроки написания, сколько стоит заказать диплом в Москве" description="В компании «BeSmarter!» можно срочно и недорого заказать дипломную работу по менеджменту по выгодной цене в Москве. Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">



            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/diplom-na-zakaz">
                        <a>Дипломная работа</a>
                    </Link>
                    <span> / </span>
                    <Link href="/diplom-na-zakaz">
                        <a>По менеджменту</a>
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
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/diplom-na-zakaz/menedjment">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">По менеджменту</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <Diplom/>

            <MatZashGirl/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Заказать дипломную работу по менеджменту
                </h1>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        Нужна дипломная работа по менеджменту организации от настоящих профессионалов?
                    </li>
                    <li>
                        Хотите заказать дипломную работу по менеджменту с высокой уникальностью?
                    </li>
                    <li>
                        Вам необходимо написание диплома по менеджменту в кратчайший период?
                    </li>
                </ul>
                <p className="block-text__par">
                    Тогда Вам необходимо обратиться к специалистам компании BeSmarter! прямо сейчас!
                </p>
                <p className="block-text__par">
                    Мы с радостью подготовим интересный дипломный проект по менеджменту.
                </p>
                <p className="block-text__par">
                    Закажите проект у нас, и Вы уверенно и легко защититесь!
                </p>
            </section>

            <FormEstimate/>

            <ImageBlock imageSrc={require('static/images/block/dip-po-men.jpg')} altText="Заказать дипломную работу по менеджменту"/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заказать диплом по менеджменту в Москве
                </h2>
                <p className="block-text__par">
                    После приёма Вашего заказа мы составляем техническое задание, по которому автор пишет работу. В задании мы указываем предпочитаемые Вами методики исследования.
                </p>
                <p className="block-text__par">
                    Поэтому Вы получаете сделанную именно для Вас интересную и качественную дипломную работу. Мы уверены, что с нею отлично защититесь!
                </p>
                <p className="block-text__par">
                    Нужно написание диплома по менеджменту прямо сейчас? Сделаем!
                </p>
                <p className="block-text__par">
                    Позвоните нам +7 495 772 40 90, заполните форму заявки или посетите наш <Link href="/contacts"><b><a>комфортабельный офис</a></b></Link>, который находится на Арбате!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Купить дипломную работу по менеджменту
                </h2>
                <p className="block-text__par">
                    Если Вам требуется актуальное исследование, проведенное на высоком уровне, то Вы можете заказать дипломную работу по менеджменту у наших опытных авторов.
                </p>
                <p className="block-text__par">
                    Вот что компания BeSmarter! гарантирует своим клиентам:
                </p>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <b>Безопасность и гарантии качества</b><br/>
                        Мы прописываем в договоре все свои обязательства перед заказчиком. Дипломы для наших клиентов пишут кандидаты и доктора наук.
                    </li>
                    <li>
                        <b>Уникальность работы</b><br/>
                        Мы проверяем все работы наших авторов по системе «Антиплагиат», поэтому каждый заказчик получает текст с высокой уникальностью (от 70%).
                    </li>
                    <li>
                        <b>Срочность и доступная стоимость выполнения заказа</b><br/>
                        Дипломная работа по финансовому менеджменту может быть подготовлена авторами компании BeSmarter! в срок от одного дня и по цене от 14 000 до 45 000 рублей.
                    </li>
                    <li>
                        <b>Бесплатное внесение изменений в текст</b><br/>
                        Если у Вашего научного руководителя появятся замечания к проекту, наши специалисты бесплатно внесут необходимые изменения в гарантийный срок 30 дней.
                    </li>
                    <li>
                        <b>Гарантия успешной защиты</b><br/>
                        джеры и преподаватели компании BeSmarter! знают, как получить высший балл на защите. Воспользовавшись их рекомендациями, уверенно отлично защититесь на пятёрку.
                    </li>
                </ul>
            </section>

            <Video>
                <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Video>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
