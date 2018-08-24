import Link from 'next/link';

import React, {Component} from 'react';

import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';

import ImageBlock from 'components/common/ImageBlock'
import Accordion from 'components/common/Accordion'
import OrderForm from 'components/common/OrderForm'
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider'

import fields from 'components/config/form/main';
import reviewBlockConfig from 'components/config/reviewBlockConfig';
import links from 'components/config/linksBlockConfig';


import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'
import MetaTags from "react-meta-tags";


const page = () => (
    <Wrapper title="Стать автором компании BeSmarter!">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="Компания BeSmarter – несомненный лидер в сфере образовательного консалтинга. Заработать отличную репутацию помогают наши авторы – практикующие преподаватели. Вместе с ними мы оказываем клиентам комплексные услуги по подготовке дипломных проектов и диссертаций, консультируем и разъясняем непонятные моменты, даем советы по защите и выступлению." />
                <meta name="keywords" content="стоимость дипломной работы написать диплом цена написания на заказ заказать" />
            </MetaTags>

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Авторам</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>

            <section className="block-text">
                <h1 className="block-text__title">
                    Работа для авторов
                </h1>
                <p className="block-text__par">
                    Компания BeSmarter! – несомненный лидер в сфере образовательного консалтинга. Заработать отличную репутацию помогают наши авторы – практикующие преподаватели. Вместе с ними мы оказываем клиентам комплексные услуги по подготовке дипломных проектов и диссертаций, консультируем и разъясняем непонятные моменты, даем советы по защите и выступлению.
                </p>
            </section>

            <section className="block-service">
                <Link href="/price">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">От эссе до настоящей диссертации</span>
                            <p className="block-service__par">Уникальные авторские работы</p>
                            <p className="block-service__par">Сложные и срочные</p>
                            <p className="block-service__par">Технические и креативные</p>
                            <p className="block-service__par">На иностранных языках</p>
                        </div>
                    </a>
                </Link>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Что делает нас лучшими?
                </h2>
                <p className="block-text__par">
                    Желание выполнять работу на высшем уровне в целом и личная ответственность перед каждым заказчиком в частности. Мы не позволяем себе «халтурить» или экономить на оплате авторам, привлекая к процессу неопытных людей. В BeSmarter мы слишком дорожим репутацией и искренне переживаем об успехе каждого студента. Поэтому команда исполнителей сформирована из настоящих профессионалов.
                </p>
                <p className="block-text__par">
                    Если вы понимаете нашу миссию и чувствуете в себе потенциал – добро пожаловать в дружный коллектив!
                </p>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <ImageBlock imageSrc={require('static/images/block/g.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Что мы предлагаем?
                </h2>
                <ul>
                    <li>
                        <b>Индивидуальный подход.</b> Мы даем работу в строгом соответствии с вашим образованием и основной сферой деятельности. Поэтому профессору филологии не придется «выжимать из себя» дипломный проект по высшей математике.
                    </li>
                    <li>
                        <b>Реальные сроки.</b> Никто не заставит вас писать работу за одну ночь. Однако если вы считаете, что сможете уложиться в сжатые временные рамки, мы с удовольствием начнем сотрудничество.
                    </li>
                    <li>
                        <b>Максимум информации.</b> Грамотные менеджеры компании предоставят все данные, необходимые для написания проекта. Требуется методичка конкретного учебного заведения? Скажите об этом, мы запросим ее у заказчика и передадим вам.
                    </li>
                    <li>
                        <b>Конфиденциальность.</b> Не хотите, чтобы студент знал реального исполнителя? Не проблема, мы уважаем ваше желание остаться инкогнито.
                    </li>
                    <li>
                        <b>Отличные условия сотрудничества.</b> Своевременные выплаты и теплое отношение с менеджерами гарантированы.
                    </li>
                </ul>
                <p className="block-text__par">
                    Будем рады сотрудничеству с Вами!
                </p>
                <p className="block-text__par">
                    Для связи с нашим авторским отделом звоните прямо сейчас по телефону <b>+7 (495) 507-78-48</b>.
                </p>
            </section>

            <OrderForm title="Заказать работу" fields={fields}/>
            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <LinksBlock links={links}/>

        </div>
    </Wrapper>
);

export default page
