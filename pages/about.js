import Wrapper from 'components/Wrapper';

import Link from 'next/link';
import Title from 'components/common/Title';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';
import ImageBlock from 'components/common/ImageBlock';
import VideoBlock from 'components/common/VideoBlock';
import OrderForm from 'components/common/OrderForm';
import Work from 'components/common/Work';
import Service from 'components/common/Service';
import LinksBlock from 'components/common/LinksBlock';

import {formConfig} from 'components/config/formConfig'
import {profitBlockConfigShort} from 'components/config/profitBlockConfig';
import reviewBlockConfig from 'components/config/reviewBlockConfig';
import links from 'components/config/linksBlockConfig'


const AboutPage = (props) => {

  <Wrapper title="BeSmarter - О нас">
    <div className="wrapper about">
      <Title name="О нас"/>
      <section className="block-text">
        <h2 className="block-text__title">
          О компании BeSmarter!
        </h2>
        <p className="block-text__par">
          Методист требует хоть какую-то часть дипломной работы, на носу сложные экзамены, предстоит подготовка к выпускному? Если вам знакома любая из этих ситуаций, но совсем нет времени на изучение источников и написание диплома, не волнуйтесь. С вашим высшим образованием все будет в порядке, если вовремя обратиться к нам.
        </p>
        <h2 className="block-text__title">
          Кто мы такие?
        </h2>
        <p className="block-text__par">
          Методист требует хоть какую-то часть дипломной работы, на носу сложные экзамены, предстоит подготовка к выпускному? Если вам знакома любая из этих ситуаций, но совсем нет времени на изучение источников и написание диплома, не волнуйтесь. С вашим высшим образованием все будет в порядке, если вовремя обратиться к нам.
        </p>
      </section>
      <ProfitsBlockSlider profitBlockConfig={profitBlockConfigShort}/>
      <ImageBlock imageSrc={require('img/contacts/1.jpg')}/>
      <section className="block-text">
        <h2 className="block-text__title">
          Почему именно BeSmarter?
        </h2>
        <h2 className="block-text__subtitle subtitle-big">
          Грамотные авторы
        </h2>
        <p className="block-text__par">
          Мы доверяем написание работы только людям, имеющим соответствующее вашей теме образование. У нас вы не найдете плагиата с просторов интернета, неумело слепленного в один файл. Более того, наши сотрудники – практикующие преподаватели, которые точно знают, как писать научную работу. Вам не придется удалять лишние пробелы,
          расставлять точки или редактировать текст.
        </p>
        <h2 className="block-text__subtitle subtitle-big">
          Консультации
        </h2>
        <p className="block-text__par">
          Создание диплома – только часть задачи, его еще предстоит защитить. Со своей стороны мы прилагаем все усилия, чтобы этот процесс прошел для вас максимально легко. Все непонятные теоретические моменты пояснит непосредственно автор работы, также он даст практические советы по выступлению.
        </p>
        <h2 className="block-text__subtitle subtitle-big">
          Строгое соответствие требованиям, заявленным в ВУЗе
        </h2>
        <p className="block-text__par">
          Вам не придется самостоятельно формировать список источников или выделять цитаты – мы четко следуем правилам оформления и придерживаемся научного стиля изложения. От вас требуется только максимально точно пояснить все требования учебного заведения и пожелания конкретного руководителя.
        </p>
        <h2 className="block-text__subtitle subtitle-big">
          Четкие сроки
        </h2>
        <p className="block-text__par">
          Пунктуальность – еще одно качество, из-за которого студенты выбирают именно нас. Конечно, мы не сможем помочь, если защита уже состоялась вчера. Но когда до дня «Х» есть хоть немного времени, наши авторы работают с утроенной силой, чтобы выдать отменный результат.
        </p>
        <h2 className="block-text__subtitle subtitle-big">
          Независимость от темы и предмета
        </h2>
        <p className="block-text__par">
          Сложные технические дисциплины, дебри филологии, философские направления, исследования животного и растительного мира – для нас нет «запретных» тематик. Для любой работы мы ищем ответственного и компетентного автора, который точно справится с поставленной задачей.
        </p>
      </section>
      <VideoBlock/>
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
          Второе – уверенность. Ночные кошмары накануне защиты, трясущиеся руки, вспотевший лоб и полная пустота в голове – распространенные симптомы только у студентов, которые почти не готовились к сдаче. Не переживайте, вам не придется пить успокоительные препараты или мучительно ожидать своей очереди. С работой, написанной
          профессионалами BeSmarter, вы спокойно пойдете на защиту и без проблем выступите перед комиссией.
        </p>
        <p className="block-text__par">
          Нас выбирают студенты, для которых качество всегда стоит на первом месте. Обращайтесь, и будете уверены в успешной защите дипломного проекта!
        </p>
      </section>
      <ImageBlock imageSrc={require('img/about/1.jpg')}/>
      <OrderForm title="Скидка 10% на докторскую диссертацию" formConfig={formConfig}/>
      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>
      <section className="block-service diplom-work-serv">
        <Work url="diplome" workName="Дипломная работа" workDescription="Поможем написать дипломную работу на заказ" cost="от 1 500 ₽" time="от 1 дня"/>
        <div className="block-service__list list-big">
          <Service serviceName="Презентация"/>
          <Service serviceName="Диплом" cost="от 2 500 ₽"/>
          <Service serviceName="Диплом МВА" cost="от 4 500 ₽" time="от 2 недель"/>
        </div>
      </section>
      <LinksBlock links={links}/>

    </div>
  </Wrapper>
)

export default AboutPage