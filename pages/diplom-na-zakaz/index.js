import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import Link from 'next/link';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';
import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlockConfig';
import icon_1 from "img/info/1.svg"
import icon_2 from "img/info/2.svg"
import icon_3 from "img/info/3.svg"
import icon_4 from "img/info/4.svg"
import icon_5 from "img/info/5.svg"
import icon_6 from "img/info/6.svg"
import icon_7 from "img/info/7.svg"
import icon_8 from "img/info/8.svg"
import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import profitBlockConfigLong from 'components/config/profitBlockConfig';


const page = () => (
    <Wrapper title=":тут title который в head:">
        <div className="wrapper bg bg-c1 bg-img bg-img1">
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/price">
                        <a>Услуги и цены</a>
                    </Link>
                    <span> / </span>
                    <Link href="/diplom-na-zakaz">
                        <a>Диплом</a>
                    </Link>
                </div>
            </section>

            <Title>Заказать дипломную работу</Title>

            <section className="block-nav">
                <NavRow title="Оценить работу" description="Узнайте сроки и цену вашей работы" url='#form1'/>
            </section>

            <MessBlock/>

            <InfoBlock infoBlockConfig={
                [
                    { icon: icon_1, title: 'Стоимость дипломной работы', desc: 'От 8 900 руб.' },
                    { icon: icon_2, title: 'Сроки написания', desc: 'Срочно от 1 дня; оптимально от 5 дней' },
                    { icon: icon_3, title: 'Гарантии', desc: 'Договор' },
                    { icon: icon_4, title: 'Бесплатные правки', desc: 'Сопрвождение до дня успешной защиты' },
                    { icon: icon_5, title: 'Оригинальность текста', desc: 'В любой системе до 95%' },
                    { icon: icon_6, title: 'Автор работы', desc: 'Преподаватель вуза, кандидат наук' },
                ]
            }/>

            <section className="block-form-timer" style={{backgroundImage: "url("+require('img/block/h.jpg')+")"}}>
                <h2 className="block-form-timer__title">Воспользуйся пока не поздно</h2>
                <CallMeFormWithTimer timerDuration={75000} timerSize={0}>
                    <p>Закажи дипломную работу прямо сейчас и получи скидку на пакет успешная защита!</p>
                </CallMeFormWithTimer>
            </section>

            <ProfitsBlockSlider profitBlockConfig={profitBlockConfigLong}/>


            <section className="block-text">
                <h2 className="block-text__title">Диплом</h2>
                <p className="block-text__par">Тут должна быть страница про диплом. На старом сайте есть страница с таким же адресом.</p>
            </section>

        </div>
    </Wrapper>
);

export default page