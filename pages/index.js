import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'


const page = () => (
    <Wrapper title="Главная">
        <div className="wrapper main">
            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
                <NavRow url='/price' title="Услуги и цены" description="Все для твоей учебы"/>
                <NavRow url='/contacts' title="Контакты" description="Узнай, где нас найти"/>
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломный проект</span>
                            <p>от 21 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA</span>
                            <p>от <b>25 000</b> руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Сделаем всё как надо!
                </h2>
                <p className="block-text__par">
                    Опытные авторы напишут дипломную работу в полном соответствии с требованиями вашего научного руководителя. Скажем даже больше: часто научным руководителям настолько нравится глубина раскрытия темы, приведенные аргументы и четкие формулировки диплома, что никаких доработок не требуется.
                </p>
            </section>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz">
                    <a className="block-service__top color-33" style={{backgroundImage: "url(" + require('static/images/block/k.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Диссертационные работы</span>
                            <p className="block-service__par">Написание и оформление</p>
                            <p className="block-service__par">Публикации</p>
                            <p className="block-service__par">Строго конфиденциально</p>
                            <p className="block-service__par">Индивидуально</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аспирантские работы</span>
                            <p>От поступления<br/>до защиты</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Статьи</span>
                            <p>Написание и размещение</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Кандидатская диссертация</span>
                            <p>Автор на связи</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Докторская диссертация</span>
                            <p>Конфиденциально</p>
                        </a>
                    </Link>
                </div>
            </section>

            <section className="block-service">
                <Link href="/kursovaya-rabota-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Курсовая работа</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 4 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/kursovaya-rabota-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>


            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Написание диплома на заказ
                </h2>
                <p className="block-text__par">
                    Нет желания писать диплом самостоятельно? Отсутствует свободное время или жаль тратить его на такое малоинтересное занятие? Закажите написание дипломной работы у профессионалов – практикующих преподавателей по вашей специальности.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
                </h2>
                <CallMeFormWithTimer timerDuration={155555} buttonText="Получить скидку">
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заказать диплом или купить готовый?
                </h2>
                <p className="block-text__par">
                    Иногда нас спрашивают: я могу легко и дешево купить готовую дипломную работу в интернете, так зачем мне тратить деньги на ваши услуги? Такой вопрос говорит о деловом подходе клиента, нам очень приятно на него отвечать и задавать встречные:
                </p>
                <ol>
                    <li>В течение 2-х месяцев мы бесплатно доработаем заказанный у нас диплом в соответствии с пожеланиями вашего научного руководителя. Там, где вам предлагают купить готовый проект, готовы помочь в случае проблем? Сомневаемся.</li>
                    <li>Мы напишем диплом с учетом всех правил оформления, тогда как скачанная работа вполне может оказаться устаревшей. И хорошо, если устарело только ее оформление, а не само смысловое наполнение (источники, графики и т. д.).</li>
                    <li>Самое главное – наши авторы раскроют ту тему, которую вы нам дадите, поэтому ваш диплом будет уникальным и актуальным. Для уверенности наших клиентов мы даем гарантию.</li>
                </ol>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Заказать" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
