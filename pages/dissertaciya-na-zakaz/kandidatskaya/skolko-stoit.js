import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/disser';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig';

import MetaTags from 'react-meta-tags';

const page = () => (
    <Wrapper title="Сколько стоит кандидатская диссертация – цена кандидатской диссертации от 150 000 рублей | Закажите кандидатскую диссертацию по выгодной стоимости, в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="Хотите узнать, сколько стоит кандидатская диссертация? Позвоните нам по тел. +7 (495) 772-40-90, и мы вам скажем, сколько стоит написать кандидатскую диссертацию в компании «BeSmarter!»." />
                <meta name="keywords" content="Написать кандидатскую диссертацию стоимость сколько стоит купить цена написание" />
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
                    <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                        <a>Кандидатская</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Стоимость</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Кандидатская диссертация</span>
                            <p className="block-service__par">Написание и оформление</p>
                            <p className="block-service__par">Публикации</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                            <p>Строго по ГОСТу</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Апробация</span>
                            <p>Реальные эксперименты</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/doktorskaya">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Докторская диссертация</span>
                            <p className="block-service__par">Актуальность и научная новизна</p>
                            <p className="block-service__par">Ваши и наши данные</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Прямая связь с автором</span>
                            <p>Постоянный контроль</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Публикации</span>
                            <p>Журналы ВАК и иностранные</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Обзор литературы</span>
                            <p>Свежие источники</p>
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
                            <p className="block-service__par">Эффектная презентация</p>
                            <p className="block-service__par">Быстро и качественно</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Монография</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Автореферат</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста до 98%</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                        </a>
                    </Link>
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад Слайды</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Плакаты к защите</span>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Сколько стоит кандидатская диссертация
                </h2>
                <p className="block-text__par">
                    Качественно написанная кандидатская диссертация – цена успеха на защите и шанс обеспечить безоблачное профессиональное будущее молодого ученого. К сожалению, далеко не всегда долгие месяцы кропотливой работы приводят к ожидаемому результату. Не каждый аспирант владеет соответствующими навыками для написания оригинальной и актуальной работы.
                </p>
                <p className="block-text__par">
                    Иногда бывает проще купить кандидатскую диссертацию – цена ее будет намного меньше в сравнении со стоимостью напрасно потерянного времени, нервов и сил. Квалифицированную помощь в написании работы вы сможете получить в компании BeSmarter! Мы сделаем все качественно и недорого, просто доверьтесь нам!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>
            
            <section className="block-text">
                <h2 className="block-text__title">
                    Какова цена кандидатской диссертации?
                </h2>
                <p className="block-text__par">
                    Мы понимаем, что вас в первую очередь интересует, сколько стоит написать кандидатскую диссертацию. Ее цена обуславливается следующими факторами.
                </p>
                <ul>
                    <li>
                        <b>Сложность темы.</b> Написание работ по гуманитарным дисциплинам оценивается значительно дешевле в сравнении с тем, сколько стоит кандидатская диссертация по техническим специальностям. Это связано с более высокой трудоемкостью последних.
                    </li>
                    <li>
                        <b>Требования.</b> Стоимость написания кандидатской диссертации пропорционально зависит от ее фактического объема. Также влияние оказывают специфические требования, например, 100% уникальность текста или нестандартное оформление.
                    </li>
                    <li>
                        <b>Оперативность.</b> Если вам нужно срочно написать кандидатскую диссертацию, стоимость ее будет тем выше, чем ближе день защиты. Желаете сэкономить – оформите свой заказ как можно раньше!
                    </li>
                </ul>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на материалы для защиты
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Алгоритм сотрудничества
                </h2>
                <p className="block-text__par">
                    На первом этапе вы выбираете удобный для себя способ связи и оформляете заявку. Далее наши менеджеры проводят с вами собеседования и подписывают официальный договор. Данный документ фиксирует все детали – день, когда должна быть сдана кандидатская диссертация на заказ, цена услуги, исполнитель, ваши требования к работе и так далее.
                </p>
                <p className="block-text__par">
                    Следующий этап – написание. После 50% предоплаты утвержденный ваш автор пишет диссертацию и по главам сдает ее вам на согласование. В случае необходимости вносятся бесплатные правки. После полной оплаты и приемки работы исполнитель помогает вам подготовиться к успешной защите.
                </p>
                <p className="block-text__par italic center">
                    Теперь вам известен алгоритм, осталось позвонить нашим менеджерам!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как узнать точную стоимость кандидатской диссертации?
                </h2>
                <p className="block-text__par">
                    Это можно сделать любым из трех способов:
                </p>
                <ul>
                    <li>
                        заполнив <b><a href="#form">форму</a></b> на сайте;
                    </li>
                    <li>
                        позвонив по номеру +7 (495) 772-4090;
                    </li>
                    <li>
                        После написания диссертации – оплата полной стоимости заказа.
                    </li>
                    <li>
                        посетив <b><Link href="/contacts"><a>нас</a></Link></b> по адресу: Москва, пер. Большой Кисловский, д. 1, стр. 2, офис 211.
                    </li>
                </ul>
                <p className="block-text__par">
                    Не теряйте времени – сделайте свой заказ прямо сейчас и избавьте себя от лишних проблем.
                </p>
            </section>

        </div>
    </Wrapper>
);


export default page
