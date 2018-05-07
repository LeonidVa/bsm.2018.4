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

import infoBlockConfig from 'components/config/infoBlockConfig';
import reviewBlockConfig from 'components/config/reviewBlockConfig';
import { profitBlockConfigShort, profitBlockConfigLong } from 'components/config/profitBlockConfig';
import { formConfig } from 'components/config/formConfig';
import links from 'components/config/linksBlockConfig';

import { Link as ScrollLink } from 'react-scroll';
import { Element } from 'react-scroll';

const DissertationPage = () => (
                <Wrapper title="BeSmarter - Докторская диссертация">
                    <div className="wrapper bg bg-c2 bg-img bg-img4">
                       <Title name="Оценить диссертацию" />
                        <section className="block-nav">
                            <NavRow action="Заказать работу" url='#' />
                        </section>
                        <MessBlock />
                        <InfoBlock infoBlockConfig={ infoBlockConfig }/>
                        <section className="block-form3">
                            <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

                            <CallMeFormWithTimer timerSize={1.6}/>
                        </section>
                        <ProfitsBlockSlider profitBlockConfig={ profitBlockConfigLong } />
                        <OrderForm title="Оценить работу" formConfig={formConfigSecond} form2={true}/>
                        <ImageBlock imageSrc={require('img/block/b.jpg')}/>
                        <section className="block-text no-bottom-padd">
                            <h2 className="block-text__title">
                                Докторская диссертация на заказ
                            </h2>
                            <ul className="block-text__list2">
                                <li>
                                    Вы кандидат наук и давно подумываете о написании докторской диссертации?
                                </li>
                                <li>
                                    Нужна докторская диссертация на заказ, но как определиться с выбором подходящего надёжного исполнителя?
                                </li>
                                <li>
                                    Хочется узнать, сколько стоит докторская диссертация в Москве?
                                </li>
                            </ul>
                            <p className="block-text__par">
                                Наша компания много лет успешно оказывает помощь в написании докторских диссертаций на заказ.
                            </p>
                            <p className="block-text__par">
                                Если у Вас возникла мысль о заказе докторской диссертации, звоните и приезжайте к нам в офис. Здесь, в Центре Москвы, в конфиденциальной обстановке мы ответим на все Ваши вопросы.
                            </p>
                            
                            <ScrollLink activeClass="active" 
                                        to="go-here" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={1000} >
                                        <a href="#form-sale"
                                            className="big-btn go-to">Получить скидку
                                        </a>       
                            </ScrollLink>
                        
                        </section>
                        <section className="block-text">
                            <h2 className="block-text__title">
                                Написание кандидатской диссертации на заказ
                            </h2>
                            <ol className="block-text__list2">
                                <li>
                                    Как Вы знаете, написание кандидатской диссертации предполагает, что автор способен самостоятельно осмысливать личный опыт в конкретной науке и, применяя научные методы и приёмы, предлагать собственные наработки и положения, способные рационализировать существующие категории знаний.
                                </li>
                                <li>
                                    Мы оказываем любую помощь в написании кандидатской диссертации на наивысшем уровне, от написания отдельных статей до полноценного написания кандидатской диссертации на заказ с результативной помощью в её успешной защите.
                                </li>
                                <li>
                                    Наш многолетний плодотворный положительный опыт в написании кандидатских и докторских диссертаций говорит о том, что мы предоставляем Вам качественный материал, действительно имеющий актуальное научное или научно-прикладное значение.
                                </li>
                            </ol>
                        </section>
                        <ImageBlock imageSrc={require('img/block/c.jpg')} />
                        <section className="block-text">

                            <h2 className="block-text__title">
                                Написание докторской диссертации
                            </h2>

                            <p className="block-text__par">
                                Как только Вы решили, что будете продолжать активную научную деятельность, перед Вами встает важный вопрос: «Когда приступать к получению докторской степени и с чего начинать?»
                            </p>

                            <p className="block-text__par">
                                Понятно, что работа над докторской диссертацией потребует привлечения более значительных сил и средств, чем работа над кандидатской.
                            </p>

                            <p className="block-text__par">
                                Докторская диссертация – не большая кандидатская, но работа совершенно иного качественного уровня.
                            </p>

                            <p className="block-text__par">
                                Расширив кандидатскую диссертацию в два-три раза, дополнив и переписав кандидатскую, настоящей докторской Вы не получите.
                            </p>

                            <p className="block-text__par">
                                Уровень постановки, рассмотрения и решения проблемы в докторской принципиально выше, чем в кандидатской диссертации.
                            </p>

                            <p className="block-text__par">
                                По требованиям ВАКа, она должна содержать Ваше собственное новое крупное научное достижение.
                            </p>

                            <p className="block-text__par">
                                При написании докторской диссертации человек должен внутренне вырасти, подняться, научиться видеть перспективу развития своей отрасли науки дальше других, иначе, чем видят её кандидаты наук.
                            </p>

                            <p className="block-text__par">
                                Однако каждый кандидат наук неизменно сталкивается с проблемой нехватки времени.
                            </p>

                            <p className="block-text__par">
                                Для того чтобы самостоятельно написать докторскую диссертацию, требуется пересмотреть огромное количество литературы и научных публикаций, обработать множество данных, провести анализ и получить собственные актуальные научные результаты.
                            </p>
                        </section>
                        <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort} />
                        <VideoBlock />
                        <section className="block-text">
                            <h2 className="block-text__title">
                                Возможно ли купить докторскую диссертацию
                            </h2>

                            <p className="block-text__par">
                                Вполне очевидно, что просто купить докторскую диссертацию не получится. Диссертационному совету необходимо представить работу высочайшего уровня с новыми теоретическими или теоретико-прикладными результатами.
                            </p>

                            <p className="block-text__par">
                                Именно поэтому заказать докторскую диссертацию в солидной надёжной компании, существенно снизив затраты времени и усилий зачастую представляется единственным выходом.
                            </p>

                            <p className="block-text__par">
                                Наши опытные авторы помогут Вам на всех этапах подготовки блестящей работы на соискание учёной степени «доктор наук».
                            </p>

                            <p className="block-text__par">
                                Качество работы при написании докторской диссертации – первейший вопрос, который возникает у любого кандидата наук.
                            </p>

                            <p className="block-text__par">
                                Компания BeSmarter! оказывает помощь в написании докторских диссертаций на протяжении многих лет.
                            </p>

                            <p className="block-text__par">
                                Наши опытные авторы как никто понимают уровень ответственности, с которым необходимо подходить к выполнению работ такого класса. Именно поэтому докторские диссертации на заказ, написанные нами, так успешно защищаются!
                            </p>

                            <p className="block-text__par">
                                Во время написания докторской диссертации мы одновременно подготовим также ряд статей ВАК для докторской диссертации и опубликуем их в научных журналах.
                            </p>
                        </section>
                        <ImageBlock imageSrc={require('img/block/d.jpg')}/>
                        <section className="block-text">
                            <h2 className="block-text__title">
                                Сколько стоит докторская диссертация
                            </h2>

                            <p className="block-text__par">
                                Цена докторской диссертации в каждом отдельном случае рассчитывается на основании таких параметров, как:
                            </p>

                            <p className="block-text__par">
                                — шифр специальности<br/>
                                — наличие Ваших наработок, научных статей, статистических и других материалов, которые необходимо использовать в работе<br/>
                                — срок, в течение которого Вы хотели бы получить работу. 
                            </p>

                            <p className="block-text__par">
                                После написания докторской диссертации наши авторы тесно сотрудничают с Вами, чтобы процесс подготовки к защите был максимально удобным и понятным, а защита – эффектной и успешной.
                            </p>

                            <p className="block-text__par">
                                Для того, чтобы мы подобрали для Вас наиболее приемлемый вариант, звоните нам по телефону 8 495 772-4090 или оставьте заявку на сайте прямо сейчас, и приезжайте к нам в офис со всеми вопросами!
                            </p>
                        </section>
                        <Element name="go-here" 
                                className="element" >
                                <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig} />
                        </Element>
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

export default DissertationPage