import Link from 'next/link';
import Title from '../common/Title';
import ProfitsBlockSlider from '../common/ProfitsBlockSlider';
import ReviewBlockSlider from '../common/ReviewBlockSlider';
import ImageBlock from '../common/ImageBlock';
import OrderForm from '../common/OrderForm';
import Work from '../common/Work';
import Service from '../common/Service';
import LinksBlock from '../common/LinksBlock';


import { formConfig } from '../config/formConfig'
import { profitBlockConfigShort } from '../config/profitBlockConfig';
import reviewBlockConfig from '../config/reviewBlockConfig';
import links from '../config/linksBlockConfig'
import imageSrc from '../../img/contacts/1.jpg';



const Index = () => (
    <div>
        <Title name="Гарантии" />
        <section className="block-text">
            <h2 className="block-text__title">
                Гарантии
			</h2>
            <p className="block-text__par">
                Мы знаем, насколько важной для вашей карьеры может оказаться заказанная работа, и понимаем, что вам нужны гарантии нашей добросовестности и ответственности. Ведь «переделать» все в последний момент не получится! Поэтому мы хотим успокоить вас, перечислив 7 причин, благодаря которым можно чувствовать себя абсолютно уверенно.
			</p>
        </section>
        <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort} />
        <section className="block-text">
            <h2 className="block-text__subtitle subtitle-big">
                Качество
			</h2>
            <p className="block-text__par">
                Вашу работу будут писать действующие преподаватели вузов, кандидаты наук в соответствующей отрасли науки, имеющие огромный опыт в решении подобных задач. Кроме того, наш отдел контроля мониторит качество выполнения работы на каждом этапе.
			</p>
        </section>
        <section className="block-text">
            <h2 className="block-text__subtitle subtitle-big">
                Оригинальность
			</h2>
            <p className="block-text__par">
                Мы не берем за основу имеющиеся в Интернете научные труды. Каждый заказ выполняется с «нуля», включая при необходимости настоящие научные исследования. Уникальность текста проверяется во всех популярных онлайн-сервисах.
			</p>
        </section>

        <section className="block-text">
            <h2 className="block-text__subtitle subtitle-big">
                Пунктуальность
			</h2>
            <p className="block-text__par">
                Своевременность сдачи готовой работы, а также отдельных ее глав (в случае с диссертациями) гарантирует официальный договор, подписываемый на стадии предварительного собеседования. Даже сверхсрочный заказ будет сдан вовремя!
			</p>
        </section>

        <section className="block-text">
            <h2 className="block-text__subtitle subtitle-big">
                Интерактивность
			</h2>
            <p className="block-text__par">
                Мы на связи каждый день, без праздников и выходных. В любой момент мы выслушаем ваши пожелания, бесплатно внесем срочные правки и ответим на вопросы. Нам важно, чтобы результат в точности соответствовал вашим ожиданиям.
			</p>
        </section>

        <section className="block-text">
            <h2 className="block-text__subtitle subtitle-big">
                Сопровождение
			</h2>
            <p className="block-text__par">
                Наше сотрудничество не заканчивается днем сдачи готовой работы. Мы продолжим оказывать вам всестороннюю поддержку вплоть до момента успешной защиты. Сюда входит помощь в подготовке презентации, доклада, тренировка ответов и пр.
			</p>
        </section>

        <section className="block-text">
            <h2 className="block-text__subtitle subtitle-big">
                Конфиденциальность
			</h2>
            <p className="block-text__par">
                Мы осознаем, насколько важно для вашей будущей научной карьеры сохранить безукоризненную репутацию, поэтому детали нашего сотрудничества останутся строго между нами. Этот момент прописывается в официальном договоре.
			</p>
        </section>

        <section className="block-text">
            <h2 className="block-text__subtitle subtitle-big">
                Опыт
			</h2>
            <p className="block-text__par">
                Наконец, самая главная гарантия успешного сотрудничества с нашей компанией – это, конечно же, реальные результаты. За 10 лет работы мы написали тысячи научных трудов, и 97,65% из них были успешно защищены. Статистика говорит сама за себя!
			</p>
            <p className="block-text__par">
                Если вас удовлетворили наши гарантии, предлагаем воспользоваться услугами компании BeSmarter! прямо сейчас.
			</p>
            <p className="block-text__par">
                Для этого свяжитесь с нами любым удобным для себя способом – заполнив онлайн форму на сайте, позвонив по телефону +7(495)772-4090 или +7(495)772-9040, или посетив офис (Большой Кисловский переулок, д. 1 стр. 2, офис 211).
			</p>
        </section>

        <section className="block-text">
            <h2 className="block-text__title">
                Что требуется от вас?
			</h2>
            <p className="block-text__par">
                Только подробная информация о предстоящей работе: тема, дисциплина, название учебного заведения и факультета. Желательно предоставить и методичку – тогда наши авторы смогут полностью погрузиться в работу и выдать проект, в точности соответствующий требованиям.
			</p>
            <h2 className="block-text__title">
                Что вы получаете в итоге?
			</h2>
            <p className="block-text__par">
                Первое и самое главное – качественную дипломную работу. Она выдержит все проверки на плагиат, ведь мы пишем ее полностью самостоятельно, «с нуля». Наши авторы не занимаются поверхностным рерайтом, а максимально погружаются в тему и применяют собственные теоретические знания и практический опыт.
			</p>
            <p className="block-text__par">
                Второе – уверенность. Ночные кошмары накануне защиты, трясущиеся руки, вспотевший лоб и полная пустота в голове – распространенные симптомы только у студентов, которые почти не готовились к сдаче. Не переживайте, вам не придется пить успокоительные препараты или мучительно ожидать своей очереди. С работой, написанной профессионалами BeSmarter, вы спокойно пойдете на защиту и без проблем выступите перед комиссией.
			</p>
            <p className="block-text__par">
                Нас выбирают студенты, для которых качество всегда стоит на первом месте. Обращайтесь, и будете уверены в успешной защите дипломного проекта!
			</p>
        </section>
        <ImageBlock imageSrc={imageSrc} />
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
)

export default Index;