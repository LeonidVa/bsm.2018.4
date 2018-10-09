import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import Video from 'components/common/VideoBlock';

import ImageBlock from 'components/common/ImageBlock';
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Как написать заключение к дипломной работе образец – написание заключения в дипломной работе пример на сайте компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="В статье раскрыта тема: «Как правильно написать заключение к дипломной работе», приведены общие рекомендации, примеры и образцы заключений дипломных работ.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="Заключение в дипломной работе пример как написать образец написание пишется что правильно структура"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/stati">
            <a>Статьи</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Заключение к дипломной работе</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/stati/zakluchenie-k-diplomnoj-rabote#form">
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
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Дипломный проект"
            text={[<p>от 21 000 руб.</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Магистерская диссертация"
            text={[<p>от 23 000 руб.</p>]}
          />

            <CardPopInfo
                url="/diplom-mba-na-zakaz"
                title="Диплом MBA"
                text={[<p>от 25 000 руб.</p>]}
            />
        </div>
      </section>

      <section className="block-service__dis">
        <section className="block-service">
          <Link href="/diplom-na-zakaz">
            <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
              <div className="block-service__text gradient-l-black">
                <span className="block-service__title">Материалы для успешной защиты</span>
                <p className="block-service__par">Не парься сам – доверься нам!</p>
                <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                <p className="block-service__par">Доступные цены</p>
                <p className="block-service__par">Срочно от 2 часов</p>
              </div>
            </a>
          </Link>
          <div className="block-service__list list-4">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Пакет «Успешная Защита»"
              text={[<p>от 5 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Доклад"
              text={[<p>от 1 500 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Оригинальность текста"
              text={[<p>Во всех системах</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Ответы к защите"
              text={[<p>от 200 руб.</p>]}
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Мини-диплом Раскладка"
              text={[<p>от 2 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Получение по главам"
              text={[<p>Гибкие условия</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Аннотация Отзыв Рецензия"
              text={[<p>от 1 200 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Слайды"
              text={[<p>от 350 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Распечатка Переплеты"
              text={[<p>от 1 200 руб.</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Как написать заключение к дипломной работе (образец)
        </h1>
        <p className="block-text__par">
          Пришло время завершать дипломную работу, а значит — необходимо написать заключение. Здесь представляется картина в одной из аудиторий: сидят три студента и ломают голову над требованиями введения к диплому, спустя неделю они штудируют методические указания, дабы разобраться в правилах оформления второго и третьего
          раздела. И вот, казалось бы, трудности позади, <b><Link href="/diplom-na-zakaz"><a>дипломная</a></Link></b> почти готова, но они все спорят и выясняют, как правильно писать заключение в дипломной работе.
        </p>
        <p className="block-text__par">
          Пути студента неисповедимы — каждый раздел требует своей точности в исполнении и тщательности в выполнении всех требований. Кто-то решается <b><Link href="/diplom-na-zakaz"><a>заказать диплом</a></Link></b> и избавиться от всех проблем сразу, а кто-то, вопреки всему тянет тяжелую ношу и решается трудиться самостоятельно.
          В этой статье мы обсудим, как написать заключение к дипломной работе, чтобы все требования были учтены.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/zakluchenie-k-diplomnoy-rabote.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Написание заключения в дипломной работе
        </h2>
        <p className="block-text__par">
          Написание заключения в дипломной работе подразумевает размещение в конце дипломной:
        </p>
        <ul>
          <li>
            основных выводов касательно теоретических и экспериментальных (практических) аспектов раскрываемой проблемы;
          </li>
          <li>
            профессиональной оценки проведенной работы;
          </li>
          <li>
            рекомендаций касательно улучшений объекта исследования;
          </li>
          <li>
            собственное полное мнение касательно перспектив темы; общие итоги, строгие размышления о сфере исследования.
          </li>
        </ul>
        <p className="block-text__par">
          Простыми словами, заключение требует понимания темы и самого процесса исследования.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Как правильно писать заключение в дипломной работе
        </h2>
        <p className="block-text__par">
          Заключение должно составлять, чаще всего, около 4 страниц. Некоторые тематики подразумевает малое заключение, некоторые — большое, превышающее размер введения. Сделать эти две структурные части равными по объему символов — вполне нормально, ошибкой такое не считается. Зачастую, методические указания не содержат конкретных
          инструкций о пропорциях "Введение/Заключение".
        </p>
        <p className="block-text__par">
          Чтобы работа была оценена на отлично, следует помнить, что выводы должны составляться отдельно по каждому разделу, а объединяться должны складно. Поэтому,рекомендуется писать по 1-2 странице выводов на каждый раздел в отдельности. Затем нужно сливать эти заметки воедино и вычитывать их, лишая смысловые переходы нестыковок
          и диссонансов.
        </p>
        <p className="block-text__par">
          Основная задача последнего раздела — отобразить целостность и логическую завершенность всей работы.
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Структура заключения дипломной работы
        </h2>
        <ul>
          <li>
            Стартовые, вступительные строки. Пара предложений вначале — вводные. Манера заключения должна быть целостной и соответствовать всей работе. Не спешите переходить к цифрам.
          </li>
          <li>
            Основная часть. Здесь располагаются выводы, полученные цифры, показатели. Прочитав заключение, преподаватель должен ощущать полную осведомленность.
          </li>
          <li>
            Заключение. Финальная часть заключения должна содержать ваше мнение касательно перспектив, рекомендации, инновационные размышления касательно улучшений.
          </li>
        </ul>
        <p className="block-text__par">
          Все разделы заключения должны быть плавно связаны и не "выдернуты из контекста".
        </p>
      </section>

      <a name="form" id="form"/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="https://www.youtube.com/embed/9szbyVEYtMg" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </Video>

      <FormOrder/>
    </div>
  </Wrapper>
);


export default page
