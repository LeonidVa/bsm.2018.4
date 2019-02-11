import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/referat'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/referatNew';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import QualityBlock from "components/common/QualityBlock/index.js"

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Referat from "components/common/ServiceBlock/ready-made/Referat";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";



const page = () => (
  <Wrapper title="Заказать реферат онлайн недорого – написать рефераты на заказ в Москве и РФ, цена под ключ" description="Написание рефератов недорого на заказ! Быстро и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
    <PageWrapper className="bg bg-c2 bg-img bg-img5">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/referat-na-zakaz', text:'Реферат'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/referat-na-zakaz" name="Реферат" position="2" />
        </ItemScope>




      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Referat/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Заказать реферат недорого
        </h1>
        <p className="par">
          Неприятная особенность рефератов заключается в том, что о них (в отличие от экзаменов или курсовой) легко забыть. И внезапно выясняется, что сдавать работу нужно завтра-послезавтра, а у вас совсем ничего не готово.
        </p>
        <p className="par">
            Можно, конечно, судорожно броситься в библиотеку или попытаться на скорую руку переделать чей-то старый реферат. Но уверяем вас, вся эта спешка в лучшем случае закончится удовлетворительной оценкой, а в худшем – «неудом» и недопуском к сессии.
        </p>
        <p className="par">
          Мы предлагаем вам более надежный вариант – срочно написать реферат на заказ силами компании BeSmarter! Мы выполним работу максимально быстро, качественно и по доступной цене.
        </p>
      </TextBlock>

      <FormEstimate/>

      <div style={{ width: "100%", maxWidth: "62em", margin: "1.56em auto 0" }}>
        <QualityBlock 
        text="Мы делаем работы отличного качества по множеству специальностей. Как нам это удается?
        Секрет прост: по каждой из них мы после проверки отобрали лучших из лучших специалистов. В современном мире требования к работам всё выше и выше, объем специальной
        литературы растет с каждым днем. Мы учитываем все тонкости и нюансы в каждой тематике. Мы в курсе всех новостей и изменений по вашей специальности.
        Именно большое количество менеджеров и экспертов, работающих в нашей команде, позволяет быть настоящим профессионалом в узкой сфере знаний.
        Мы помогли тысячам студентов. Поможем и вам! Звоните и приходите к нам!
        Делаем работы по самым трудным специальностям, которые вы видите на этой странице, и по многим другим.
        Не нашли свою специальность, &mdash; просто звоните нам, и все будет хорошо!"   
        />

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <QualityBlock 
            text= {
              <div>
                <p className="up_string" align="left" style={{ paddingTop: "56px", display: "flex", justifyContent:"space-between" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                <p>● Управление: проектами; персоналом; качеством; производством и поставками</p>
                <p>● Финансовый, стратегический, антикризисный, инновационный, бренд- и риск- менеджмент</p>
                <p>● Маркетинг. Маркетинговые исследования и анализ. PR, социальные сети</p>
                <p>● Управление эффективностью бизнеса. Практика менеджмента</p>
                <p>● Менеджмент предприятия на примере реальной организации</p>
                <p>● Расчеты, статистика, аналитика, рекомендации</p> 
              </div>
            }
            title="Менеджмент и маркетинг"
            path="https://besmarter.ru/diplom-na-zakaz/menedjment"
            imageBlock = {<img src="/static/images/QualityBlock/presentation.svg"/>}
            Class="w50"
          />

          <QualityBlock 
            text= {
              <div>
                <p className="up_string" align="left" style={{ paddingTop: "56px", display: "flex", justifyContent:"space-between" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                <p>● Теория и практика. Прикладная экономика. Экономика предприятия</p>
                <p>● Микро- и макроэкономика. Экономика РФ и зарубежных стран</p>
                <p>● Финансы и инвестиции. Ценные бумаги. Налоги и налогообложение</p>
                <p>● Экономический анализ. Математические методы в экономике</p>
                <p>● Финансовые ресурсы предприятия. Бизнес-план</p>
                <p>● Экономические расчеты на примере реальной организации</p>
                <p>● Статистика, аналитика, рекомендации</p>
              </div>
            }
            title="Экономика"
            path="https://besmarter.ru/diplom-na-zakaz/ekonomika"
            imageBlock = {<img src="/static/images/QualityBlock/benefits.svg"/>}
            Class="w50"
          />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <QualityBlock 
            text= {
              <div>
                <p className="up_string" align="left" style={{ paddingTop: "56px", display: "flex", justifyContent:"space-between" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                <p>● Теория информатики, статистика, модели</p>
                <p>● Разработка ПО. Сети. Системный анализ. Базы данных</p>
                <p>● Решение прикладных задач. 1С. CRM. СУБД</p>
                <p>● Веб-программирование. Создание сайтов. Веб-дизайн</p>
                <p>● Блокчейн. ИИ</p>
                <p>● Проектирование, тестирование и отладка программ</p>
                <p>● Все языки программирования</p>
              </div>
            }
            title="Программирование"
            path="https://besmarter.ru/diplom-na-zakaz/programmirovanie"
            imageBlock = {<img src="/static/images/QualityBlock/worker.svg"/>}
            Class="w50"
          />

          <QualityBlock 
            text= {
              <div>
                <p className="up_string" align="left" style={{ paddingTop: "56px", display: "flex", justifyContent:"space-between" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                <p>● Гражданское, уголовное, административное право</p>
                <p>● Конституционное и международное право</p>
                <p>● Актуальное правоприменение</p>
                <p>● Действующие нормативные акты и законы</p>
                <p>● Реальные примеры из судебной практики</p>
              </div>
            }
            title="Юриспруденция"
            path="https://besmarter.ru/diplom-na-zakaz/yurisprudenciya-pravo"
            imageBlock = {<img src="/static/images/QualityBlock/meeting.svg"/>}
            Class="w50"
          />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <QualityBlock 
            text= {
              <div>
                <p className="up_string" align="left" style={{ paddingTop: "56px", display: "flex", justifyContent:"space-between" }}> <div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                <p>● Общая, прикладная, клиническая, возрастная, криминальная</p>
                <p>● Общеизвестные и авторские методики, все школы</p>
                <p>● Обработка экспериментальных данных. Корреляционный анализ</p>
                <p>● Любые возрастные и численные группы</p>
                <p>● Реальные экспериментальные данные</p>
              </div>
            }
            title="Психология"
            path="https://besmarter.ru/diplom-na-zakaz/psihologiya"
            imageBlock = {<img src="/static/images/QualityBlock/idea.svg"/>}
            Class="w50"
          />

          <QualityBlock 
            text= {
              <div>
                <p className="up_string"  style={{ paddingTop: "56px", display: "flex", justifyContent:"space-between", width: "100%" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                <p>● Бухгалтерский учет, налоги и налогообложение</p>
                <p>● Анализ и аудит</p>
                <p>● Бюджетирование и управленческий учет</p>
                <p>● Актуальная нормативно-законодательная база</p>
                <p>● Расчеты и балансы реальной организации</p>
              </div>
            }
            title="Бухгалтерский учет"
            path="https://besmarter.ru/diplom-na-zakaz/buhgalterskij-uchet"
            imageBlock = {<img src="/static/images/QualityBlock/planning.svg"/>}
            Class="w50"
          />
        </div>
      </div>
      <ImageBlock imageSrc={require('static/images/block/referat-na-zak.jpg')} altText="Заказать реферат"/>

      <TextBlock>
        <h2 className="title">
          Что вы получите?
        </h2>
        <ul>
          <li>
            <b>Гарантию пунктуальности. </b>У нас можно заказать реферат срочно – от 24 часов. Точное время сдачи прописывается в официальном договоре, так что волноваться не придется.
          </li>
          <li>
            <b>Гарантию оригинальности. </b>Написание рефератов на заказ в компании BeSmarter! осуществляется «с нуля». Уникальность текста проверяется на нескольких онлайн-сервисах.
          </li>
          <li>
            <b>Гарантию конфиденциальности. </b>Факт нашего сотрудничества останется строго между нами. Обязательства о неразглашении также фиксируются в договоре.
          </li>
        </ul>
        <p className="par">
            В BeSmarter! вы сможете заказать срочное написание реферата, не опасаясь мошенничества, плагиата и недобросовестного отношения.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          А как насчет качества?
        </h2>
        <p className="par">
            Компания BeSmarter! – единственное место, где можно заказать реферат у действующего преподавателя ВУЗа с кандидатской ученой степенью. Мы не пользуемся услугами фрилансеров-копирайтеров – только квалифицированные научные кадры с огромным опытом написания подобных работ.
        </p>
        <p className="par">
          Каждый реферат проходит фирменную многоступенчатую систему контроля для проверки его уникальности, грамотности оформления и соответствия вашим требованиям. Но даже после получения готовой работы вы имеете право потребовать бесплатные правки. Наша главная цель – ваша хорошая оценка!
        </p>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
          Сколько стоит реферат на заказ
        </h2>
        <p className="par">
          Как и для любого другого товара или услуги, если вы желаете купить работу, цена будет определяться ее индивидуальными особенностями:
        </p>
        <ul>
          <li>
            <b>Специальность. </b>По гуманитарным дисциплинам рефераты на заказ обычно стоят недорого, в то время как для технических предметов цены в среднем выше (до 2 раз).
          </li>
          <li>
            <b>Требования. </b>В первую очередь, это фактический объем текста – чем его больше, тем пропорционально выше стоимость. Также влияет высокая уникальность (выше 80%) – написать реферат на заказ со 100%-м показателем на всех сервисах будет дороже.
          </li>
          <li>
            <b>Срочность. </b>Если вы хотите получить работу недорого, постарайтесь оформить заявку как можно раньше.
          </li>
        </ul>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/ref-na-zakaz.jpg')} altText="Заказать реферат в Москве"/>

      <TextBlock>
        <h2 className="title">
          Как сделать заказ?
        </h2>
        <p className="par">
          Самый простой вариант – заказать реферат онлайн (недорого, быстро и удобно), заполнив форму на сайте. Такой вариант подойдет для жителей не только Москвы, но и других регионов России.
        </p>
        <p className="par">
            Также можно оформить заявку по телефону <br/> +7 495 772-4090.
        </p>
        <p className="par">
          Если же вы живете в Москве, ждем вас по <Link href="/contacts"><b><a>адресу</a></b></Link>: переулок Большой Кисловский, дом 1, строение 2, офис 211.
        </p>
        <p className="par">
            Какой бы вы ни выбрали способ заказать реферат – онлайн, звонок или визит, будьте уверены, менеджеры компании BeSmarter! окажут вам квалифицированную помощь в написании работы.
        </p>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
