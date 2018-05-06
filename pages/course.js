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


const CoursePage = () => (
    <Wrapper title="BeSmarter - Курсовая диссертация">
        <div className="wrapper bg bg-c1 bg-img bg-img3">
            <Title name="Курсовая диссертация" />
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
            <ImageBlock imageSrc={require('img/block/2.jpg')} />
            <section className="block-text">
                <h2 className="block-text__title">
                    Курсовая работа на заказ.
			</h2>
                <p className="block-text__par">
                    Курсовая работа – один из наиболее распространенных студенческих проектов, на которую многим студентам не хватает времени.
			</p>
                <p className="block-text__par">
                    Если у Вас нет времени и возможности заниматься учебными проектами, Вас спасет курсовая работа на заказ в компании BeSmarter!
			</p>
                <p className="block-text__par">
                    Решили у нас заказать курсовую работу в Москве, будьте уверены в ее уникальности и грамотности!
			</p>
                <p className="block-text__par">
                    Написание курсовых работ на заказ в BeSmarter! обеспечивает Вам получение качественного результата с оптимальными данными, выполненного именно для Вас.
			</p>
            </section>
            <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort} />
            <section className="block-text">
                <h2 className="block-text__title">
                    Заказ курсовых работ в BeSmarter! – выгодно и удобно!
			</h2>
                <p className="block-text__par">
                    Улучший вариант для учащихся вуза – заказ курсовой работы в BeSmarter! ведь с нами выгодно и удобно, почему?
			</p>
                <ul className="block-text__list2">
                    <li>
                        С нами работают опытные авторы-профессионалы, которые выполнят курсовые работы любой сложности в соответствии со всеми требованиями Вашего вуза.
				</li>
                    <li>
                        Написать курсовую работу на заказ у нас – это стать обладателем уникального проекта, владельцем которого будете исключительно Вы!
				</li>
                    <li>
                        У Вас есть возможность сделать заказ курсовой работы срочно – весь период ее выполнения займет не больше одного дня.
				</li>
                    <li>
                        Наше сопровождение непосредственно до успешной защиты курсовой работы.
				</li>
                    <li>
                        Авторы компании BeSmarter! выполняют курсовые работы на заказ в гуманитарных, технических и других направлениях.
				</li>
                </ul>
            </section>

            <VideoBlock />

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит цена написания курсовой работы на заказ
			</h2>
                <p className="block-text__par">За умеренную оплату у нас каждый может сделать курсовую работу на заказ, а также получить необходимые материалы и пояснения для дальнейшей защиты проекта.</p>

                <p className="block-text__par">Написать курсовую на заказ, цена которой приемлема для студента – одно из правил BeSmarter!</p>

                <p className="block-text__par">От чего же зависит цена курсовой работы?</p>

                <p className="block-text__subtitle">Предмета и темы</p>
                <p className="block-text__par">Курсовые на заказ по гуманитарным, экономическим и естественнонаучным дисциплинам дешевле, чем сложный технический проект. Чем проще и легче предмет и тема, тем меньше стоимость курсовой работы.</p>

                <p className="block-text__subtitle">Сроков написания</p>
                <p className="block-text__par">Конечно, мы сможем написать курсовую работу срочно даже за один день, но при этом цена курсовой работы будет выше.</p>

                <p className="block-text__subtitle">Количества работ</p>
                <p className="block-text__par">Курсовая работа не бывает одна. Ведь в сессию надо сдать кучу зачетов, курсовых, экзаменов и тестов. Заказывайте сразу несколько работ и получайте скидки!</p>

                <p className="block-text__par">Лучше всего заказать курсовую работу вместе с одногруппниками: это не только веселее, но и выгоднее!</p>
            </section>
            <section className="block-form4">
                <div className="inner">
                    <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

                    <CallMeFormWithTimer timerSize={1.6} />
                </div>
            </section>
            <section className="block-text">
                <h2 className="block-text__title">
                    Купить курсовую работу в Москве
			</h2>
                <p className="block-text__par"> Хотите купить курсовую работу в Москве?</p>

                <p className="block-text__par">Приезжайте к нам в офис. Наши менеджеры с удовольствием встретятся с Вами, расскажут все про написание курсовых работ на заказ и помогут оформить заказ курсовой работы.</p>

                <p className="block-text__par">Заказ курсовых работ в офисе гораздо комфортнее заказа онлайн или по телефону.</p>

                <p className="block-text__par">С помощью менеджера легче оформить заказ, обговорить сроки, посмотреть образцы презентаций и увезти с собой распечатанную и переплетенную готовую курсовую работу.</p>

                <p className="block-text__par">Приезжайте в офис сегодня – это правильно и удобно!</p>
            </section>
            <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig} />
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

export default CoursePage