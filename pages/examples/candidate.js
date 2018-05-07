import Wrapper from 'components/Wrapper';

import Title from 'components/common/Title';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer'

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessagersBlock';
import InfoBlock from 'components/common/InfoBlock';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';
import ImageBlock from 'components/common/ImageBlock';
import VideoBlock from 'components/common/VideoBlock';
import OrderForm from 'components/common/OrderForm';
import Work from 'components/common/Work';
import Service from 'components/common/Service';
import LinksBlock from 'components/common/LinksBlock';

import infoBlockConfig from 'components/config/infoBlockConfig'
import reviewBlockConfig from 'components/config/reviewBlockConfig'
import { profitBlockConfigShort, profitBlockConfigLong } from 'components/config/profitBlockConfig';
import { formConfig, formConfigSecond } from 'components/config/formConfig'
import links from 'components/config/linksBlockConfig'



const CandidatePage = () => (
    <Wrapper title="BeSmarter - Кандидатская диссертация">
        <div className="wrapper bg bg-c3 bg-img bg-img2">
                <Title name="Кандидатская диссертация" />
                    <section className="block-nav">
                        <NavRow action="Оценить работу" url='#' />
                    </section>
                    <MessBlock />
                    <InfoBlock infoBlockConfig={infoBlockConfig} />
                    <section className="block-form3">
                        <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

                        <CallMeFormWithTimer timerSize={1.6} />
                    </section>
                    <ProfitsBlockSlider profitBlockConfig={profitBlockConfigLong} />
                    <OrderForm title="Оценить работу" formConfig={formConfigSecond} form2={true} />
                    <ImageBlock imageSrc={require('img/block/e.jpg')} />
                
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Заказать кандидатскую диссертацию
                        </h2>
                        <ul className="block-text__list2">
                            <li>
                                Хотите заказать кандидатскую диссертацию действительно высочайшего уровня?
                            </li>
                            <li>
                                Требуется кандидатская диссертация на заказ, цена которой будет приемлемой, а качество соответствовать высоким требованиям достойной научно-исследовательской работы?
                            </li>
                            <li>
                                Что означает заказать и что означает купить кандидатскую диссертацию?
                            </li>
                        </ul>
                        <p className="block-text__par">
                            В нашей компании Вы можете заказать кандидатскую диссертацию, и быть уверенными в том, что она будет подготовлена точно в срок, а качество её исполнения будет высочайшим.
                        </p>
                    </section>

                
                    <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort} />
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Написание кандидатской диссертации на заказ
                        </h2>
                        <p className="block-text__par">Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний.</p>

                        <p className="block-text__par">Наши авторы выполняют отличные кандидатские диссертации на заказ.</p>

                        <p className="block-text__par">Мы оказываем любую помощь в написании кандидатской диссертации на наивысшем уровне, от написания отдельных статей до полноценного написания кандидатской диссертации на заказ с результативной помощью в её успешной защите.</p>

                        <p className="block-text__par">Наш многолетний плодотворный положительный опыт в написании кандидатских и докторских диссертаций говорит о том, что мы предоставляем Вам качественный материал, действительно имеющий актуальное научное или научно-прикладное значение.</p>
                    </section>
                    <section className="block-form4">
                        <div className="inner">
                            <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

                            <CallMeFormWithTimer timerSize={1.6} />
                        </div>
                    </section>
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Заказать или купить кандидатскую диссертацию?
                        </h2>
                        <p className="block-text__par">Если Вы решили купить кандидатскую диссертацию, цена которой будет низкой, а текст – готовым, то это не к нам: купить кандидатскую диссертацию невозможно!</p>

                        <p className="block-text__par">На самом деле, заранее написанных «готовых» диссертационных работ быть не может.</p>

                        <p className="block-text__par">А как же быть, если стоит задача стать кандидатом наук, а времени на написание не хватает?</p>

                        <p className="block-text__par">Нужно заказать написание кандидатской диссертации, статей и автореферата. А ещё лучше – заказать и полную подготовку по материалам Вашей диссертации для её гарантированной успешной защиты.</p>
                    </section>
                    <VideoBlock />
                    <section className="block-text">
                        <h2 className="block-text__title">
                            Заказ кандидатской диссертации – выгодно и удобно!
                        </h2>
                        <p className="block-text__par"> При заказе кандидатской диссертации в нашей компании Вы всегда можете обсудить с автором интересующие Вас вопросы, внести свои предложения для того, чтобы работа была безупречной.</p>

                        <p className="block-text__par">Если Вы делаете, чтобы наш опытный автор не только написал текст диссертации, но и сам проделал экспериментальную часть работы, то мы это сделаем на высоком профессиональном уровне.</p>

                        <p className="block-text__par">Мы составляем чёткое техническое задание на Ваш заказ кандидатской диссертации, где указываются все Ваши пожелания и требования.</p>

                        <p className="block-text__par">Поэтому для уточнения всех деталей мы приглашаем Вас приехать в наш офис в Москве.</p>

                        <p className="block-text__par">Здесь Вам будет удобно уточнить все тонкости и детали нашей будущей совместной работы.</p>
                    </section>

                    <ImageBlock imageSrc={require('img/block/f.jpg')} />

                    <section className="block-text">
                        <h2 className="block-text__title">
                            Сколько стоит кандидатская диссертация
                        </h2>

                        <p className="block-text__par">
                            Для того чтобы узнать, сколько стоит кандидатская диссертация, свяжитесь с нами прямо сейчас.
                        </p>

                        <p className="block-text__par">
                            Мы ответим Вам в кратчайшие сроки, уточнив все интересующие Вас детали.
                        </p>

                        <p className="block-text__par">
                            На нашем сайте представлены ориентировочные цены на подготовку подобной работы.
                        </p>

                        <p className="block-text__par">
                            В каждом конкретном случае стоимость кандидатской диссертации обсуждается и оговаривается до начала сотрудничества.
                        </p>

                        <p className="block-text__par">
                            Стоит отметить, что в стоимость написания кандидатской диссертации может входить также подготовка статей и публикация в научных журналах, аккредитованных Высшей аттестационной комиссией (ВАК).
                        </p>

                        <p className="block-text__par">
                            Темы и содержание диссертации и статей обсуждаются с Вашим автором.
                        </p>

                        <p className="block-text__par">
                            Таким образом, Ваша кандидатская диссертация, цена которой зависит от наличия специфичных требований, материалов или разработок, сопровождается нами до успешной защиты.
                        </p>

                        <p className="block-text__par">
                            Мы гордимся тем, что все без исключения работы успешно проходят любые виды проверок.
                        </p>

                        <p className="block-text__par">
                            Именно поэтому наши заказчики редко задумываются о том, сколько стоит написать кандидатскую диссертацию – все их затраты окупаются сторицей!
                        </p>

                        <p className="block-text__par">
                            С нашей подготовкой защита Вашей кандидатской проходит спокойно, эффектно и успешно.
                        </p>

                        <p className="block-text__par">
                            Сделайте первый шаг навстречу своему успеху прямо сегодня: приезжайте к нам в офис на Арбат, либо прямо сейчас заполните форму заказа или звоните нам по телефону 8 495 772-4090!
                        </p>

                    </section>	
                
                    <OrderForm title="Скидка 10% на кандитатскую диссертацию" formConfig={formConfig} />
                    <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig} />
                    <section className="block-service diplom-work-serv">
                        <Work url="diplome" workName="Дипломная работа" workDescription="Поможем написать дипломную работу на заказ" cost="от 1 500 ₽" time="от 1 дня" />
                        <div className="block-service__list list-big">
                            <Service serviceName="Презентация" />
                            <Service serviceName="Диплом" cost="от 2 500 ₽" />
                            <Service serviceName="Диплом МВА" cost="от 4 500 ₽" time="от 2 недель" />
                        </div>
                    </section>
                <LinksBlock links={links} />           
            </div>
        </Wrapper>
)

export default CandidatePage