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


const MastersPage = () => (
    <Wrapper title="BeSmarter - Магистерская диссертация">
       
        <div className="wrapper masters">
            <Title name="Магистерская диссертация" />
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
            <ImageBlock imageSrc={require('img/candidate/1.jpg')} />

            <section className="block-text">
                <h2 className="block-text__title">
                    Магистерская диссертация
			</h2>
                <p className="block-text__par">
                    Заказать магистерскую диссертацию в компании BeSmarter!
			</p>
                <p className="block-text__par">
                    Магистерская диссертация – это фактически первый ваш серьезный научный труд, который нужно защищать перед независимой государственной экзаменационной комиссией. Если все пройдет успешно – получите степень магистра, и перед вами откроются все двери высокой науки!
			</p>
                <p className="block-text__par">
                    А что, если нет? Пересдать через недельку, как в случае с экзаменами, не получится – в лучшем случае придется терять целый год. А вероятность такого развития событий очень велика, поскольку к магистерской работе требования намного выше, чем к курсовикам и дипломам. Нужно доказать членам комиссии, что ваша диссертация действительно имеет научную ценность и выполнена идеально как по содержанию, так и по оформлению.
			</p>
                <p className="block-text__par">
                    Если вы не уверены в собственных силах или банально не успеваете, то лучше не рисковать, а заказать магистерскую работу у опытных специалистов компании BeSmarter! Мы выполним ее максимально качественно и оперативно, а также поможем вам подготовиться к гарантированно успешной защите.
			</p>
            </section>


            <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort} />
            <section className="block-text">
                <h2 className="block-text__title">
                    Почему выгодно заказать магистерскую работу у нас?
			</h2>
                <ul className="block-text__list2">
                    <li>
                        Компетентность. У нас работают не копирайтеры, а действующие преподаватели вузов. Поэтому ваша магистерская диссертация на заказ будет написана кандидатом наук по соответствующей специальности, в тонкостях разбирающегося в предмете и требованиях к оформлению.
				</li>
                    <li>
                        Работа «под ключ». Наше сотрудничество завершается только после вашей успешной защиты. Сотрудники компании оказывают поддержку на всех этапах, отвечают на вопросы, вносят бесплатные правки, помогают с дополнительными материалами и т. д.
				</li>
                    <li>
                        Гибкость. У нас можно заказать магистерскую диссертацию по любым предметам. Возможно срочное выполнение работы (от 1 дня) с привлечением нескольких авторов. Используется гибкая система оплаты.
				</li>
                </ul>
            </section>
            <section className="block-form4">
                <div className="inner">
                    <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>

                    <CallMeFormWithTimer timerSize={1.6} />
                </div>
            </section>
            <section className="block-text">
                <h2 className="block-text__title">
                    Сколько будет стоить заказ магистерской диссертации?
			</h2>
                <p className="block-text__par">Разумеется, этот вопрос для многих является центральным. Диапазон цен мы указали на соответствующей странице сайта. Он весьма широкий, поскольку конкретную стоимость написания магистерской диссертации на заказ определяют несколько факторов – сложность темы, язык изложения, срочность, желаемая уникальность, объем текста и пр.</p>

                <p className="block-text__par">Но будьте спокойны – мы назовем вам цену еще на этапе предварительной консультации, и она останется неизменной. Кроме того, у вас есть реальные способы экономии – оформить заказ заранее или получить оптовые скидки, приведя друзей. Если же вам дозволено самостоятельно выбрать тему работы, мы подскажем, какая будет «дешевле».</p>
            </section>
            <VideoBlock />
            <section className="block-text">
                <h2 className="block-text__title">
                    Как заказать магистерскую диссертацию в Москве?
			</h2>
                <p className="block-text__par">Наше с вами сотрудничество начинается с подачи заявки. Сделать это можно тремя способами. Жители столицы могут лично заказать магистерскую диссертацию в Москве, посетив наш уютный офис. Представителям других регионов проще будет заполнить онлайн-форму на сайте или оформить заказ по телефону.</p>

                <p className="block-text__par">Далее, после обсуждения всех деталей магистерской диссертации мы заключим с вами официальный договор, в котором прописывается стоимость работы, сроки ее выполнения, ваши пожелания и другие гарантии. Все! Теперь можете быть уверенными, что вы – будущий магистр!</p>
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

export default MastersPage