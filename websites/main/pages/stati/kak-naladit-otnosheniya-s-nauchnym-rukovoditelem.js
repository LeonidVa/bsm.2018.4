import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOfferH2 from 'components/content/offers/CurrentOfferH2';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";


import links from "data/linksBlock/stati/kaknaladitOtnosheniya";
import LinksBlock from "components/common/LinksBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"


const page = () => (
  <Wrapper title="Как наладить отношения с научным руководителем? | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Как наладить отношения с научным руководителем? Эта тема волнует множество дипломников. В большинстве случаев нужно совсем немного, чтобы наладить отношения с научным руководителем. Требуется всего лишь хорошая, грамотно написанная работа и знание её содержания. К сожалению, не все темы оказываются простыми для изучения, литературы или знаний может недоставать.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">



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
            <a>Как наладить отношения с научным руководителем?</a>
          </Link>
        </div>
      </section>

        <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Статьи</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati/kak-naladit-otnosheniya-s-nauchnym-rukovoditelem">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Как наладить отношения с научным руководителем?</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "3"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <Diplom/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Как наладить отношения с научным руководителем?
        </h1>
        <p className="block-text__par">
          Как наладить отношения с научным руководителем? Эта тема волнует множество дипломников. В большинстве случаев нужно совсем немного, чтобы наладить отношения с научным руководителем. Требуется всего лишь хорошая, грамотно написанная работа и знание её содержания. К сожалению, не все темы оказываются простыми для изучения,
          литературы или знаний может недоставать.
        </p>
        <p className="block-text__par">
          Вскоре приходит мысль: «Мне не справиться». Научный руководитель принимается требовать «ну хотя бы первую главу», а материал никак не отыскивается. Через неделю-другую преподаватель начнёт злиться. Он может решить, что Вы слабый студент, что зря он согласился на Ваше научное руководство. Ещё немного, и придётся забыть о
          хороших отношениях с научным руководителем. Значит, остаётся только один вариант.
        </p>
        <p className="block-text__par">
          В такой ситуации хороший вариант – <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>. Так Вы решаете проблемы и с научным руководителем, и со своим свободным временем. Однако, не всякая работа может понравиться преподавателю, да и только её текст – далеко не залог отличной оценки. Понадобится несколько
          составляющих, чтобы навсегда заслужить доверие учителя.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kak-nal.jpg')} altText="Как наладить отношения с научным руководителем?"/>

      <section className="block-text">
        <p className="block-text__par">
          На первом месте, конечно же, толковая работа. Она не должна содержать последней научной новизны, достаточно будет просто проработки материала. Но даже для такой, казалось бы, мелочи потребуется настоящий профессионал. Простое изложение идей других авторов – это «тройка», а значит, потерянное доверие научного руководителя.
          Для «четвёрки» и внимания преподавателя потребуется внятное изложение материала. Для «пятёрки» же и уважения нужно самое трудное. Это умение критиковать других авторов, внятно излагая их мысли, и предлагать свои решения проблем.
        </p>
        <p className="block-text__par">
          Хорошим примером для этого может служить курсовая по праву. В первую очередь Вы плените внимание преподавателя большим количеством ссылок на каждой странице Вашей работы. При этом это должны быть не только учебные пособия или сборники законодательства, но и монографии, научные статьи. Наш исполнитель легко справится с
          этим. Кроме того, он может легко дать совет - другой, как излагать материал во время устного ответа. Но к этому мы ещё вернемся несколько позже.
        </p>
        <p className="block-text__par">
          Затем – обработка материала. Учитель будет в высшей степени доволен, если в Вашей работе будет показано, как отражаются идеи исследователей в действующей практике. Плюсом будет анализ того, почему эти идеи не работают или же их реализация искажается. К сожалению, мало, кто из исполнителей способен на такое. К счастью,
          если Вы читаете это, значит, Вам будет легко найти нужного человека.
        </p>
        <p className="block-text__par">
          Далее – разбор наиболее интересных случаев, совершенно выбивающихся из серой массы. Вы обретёте уважение научного руководителя, если в работе будет указан наиболее интересный казус, редкий, либо же не встречающийся на просторах интернета. Возможно, преподаватель сам в дальнейшем использует этот пример. Но самое главное
          это то, что он выделит Вашу работу среди всех остальных.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOfferH2/>

      <section className="block-text">
        <p className="block-text__par">
          Наиболее важной частью работы являются выводы. В заключении научный руководитель всегда хочет увидеть чёткие, ёмкие ответы, в которых сконцентрирована сама суть работы. Наш исполнитель всегда готов прийти на помощь в этом деле, так что можно не волноваться. Лаконичность фраз и отсутствие «воды» - вот путь к сердцу Вашего
          преподавателя.
        </p>
        <p className="block-text__par">
          Вслед за написанием работы идёт, возможно, ещё более трудный этап. Это изложение материала, доказательство того, что Вы действительно им овладели.
        </p>
        <p className="block-text__par">
          Это собственно защита вашей работы. Перед нею Вам достаточно будет около получаса пообщаться с исполнителем работы или получить от него письменные указания. Они представляют собой список наиболее важных моментов Вашей работы, «подводные камни» и интересные идеи. Пробежав подобный текст глазами, Вы будете готовы принять
          бой за уважение научного руководителя.
        </p>
        <p className="block-text__par">
          Обычно защита происходит в каком-нибудь просторном помещении. Здесь Вы выступаете с кратким изложением работы и выводов по ней. Конечно же, будет присутствовать и Ваш научный руководитель. Но Вы уже одержали победу. Необходимо всего лишь <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link> у нас, Вы уже
          прошли все указанные этапы, заслужили доверие и похвалу Вашего учителя – и он грудью встанет за Вас на защите. А это значит, что победа и отличная оценка – в Вашем кармане.
        </p>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

        <LinksBlock links={links}/>

    </div>
  </Wrapper>
);


export default page
