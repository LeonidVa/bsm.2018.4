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
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";


import links from "data/linksBlock/stati/idealniy";
import LinksBlock from "components/common/LinksBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Идеальный студент и идеальный аспирант: как ими стать? | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Чтобы закончить ВУЗ с красным дипломом, недостаточно быть наделенным природным умом, большинство необходимых личностных качеств нужно развивать в себе самостоятельно. Это упорный ежедневный труд, но результат того стоит.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Идеальный студент и идеальный аспирант: как ими стать?'},
        ]}/>



        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/idealnyj-student-i-idealnyj-aspirant-kak-imi-stat" name="Идеальный студент и идеальный аспирант: как ими стать?" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Diplom/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Идеальный студент и идеальный аспирант: как ими стать?
        </h1>
        <p className="par">
          Чтобы закончить ВУЗ с красным дипломом, недостаточно быть наделенным природным умом, большинство необходимых личностных качеств нужно развивать в себе самостоятельно. Это упорный ежедневный труд, но результат того стоит.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/ideal-stud.jpg')} altText="Идеальный студент и идеальный аспирант: как ими стать?"/>

      <TextBlock>
        <h2 className="title">
          Каким должен быть студент?
        </h2>
        <p className="par">
          Чтобы закончить ВУЗ с красным дипломом, недостаточно быть наделенным природным умом, большинство необходимых личностных качеств нужно развивать в себе самостоятельно. Это упорный ежедневный труд, но результат того стоит.
        </p>
        <p className="par">
          Каким должен быть идеальный студент? Понятно, что идеальных людей в природе не встречается, но всегда есть некий образец, эталон, к которому нужно стремиться, если хочешь достигнуть поставленных целей. Так какая цель у студента? Ответ сам напрашивается – закончить ВУЗ и получить <b>диплом</b>, чтобы потом устроится на
          хорошую, высокооплачиваемую работу. Это справедливо, но ведь кто-то поступает в ВУЗ только ради заветной корочки, а для кого-то выбор будущей профессии – абсолютно осознанный шаг, к которому он готовился, возможно, не один год. Как правило, такие студенты, не оставляют стены родного вуза после получения диплома, а решают
          и дальше продолжать научную деятельность.
        </p>
        <p className="par">
          Так какими же качествами должен обладать студент, который выбирает научную карьеру? Безусловно, это ответственность, обязательность, усердие, конечно, высокая трудоспособность и усидчивость. Необходимо постоянно работать над собой, ведь научный путь нелегок и тернист. Практика, которую проходит каждый студент, поможет
          проявить учащемуся его деловые качества, это, своего рода, первая проба своих профессиональных навыков. А участие в разного рода мероприятиях, обозрение последних новостей в мире науки, проявление повышенного интереса к изучаемым дисциплинам, наверняка, не останется незамеченным со стороны преподавателей.
        </p>
        <p className="par">
          После завершения практики каждый студент пишет отчёт, где он должен подробно осветить свою практическую научную деятельность. Если отчёт по практике написан хорошо, на основе его очень удобно писать <b>диплом</b>, а <b>диплом</b>, как известно, является главной работой студента, к написанию которой он шел все годы своего
          обучения в вузе. После успешной защиты диплома, возможно, последует приглашение от кафедры поступить в аспирантуру и продолжить научный путь.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
          Кто такой аспирант?
        </h2>
        <p className="par">
          Аспирант – это человек, который уже получил высшее профессиональное образование и готовится к защите кандидатской диссертации, чтобы, в результате, получить ученую степень кандидата наук. Если желающих получить высшее образование большинство, то в аспирантуру поступает значительно меньшее количество людей.
        </p>
        <p className="par">
          Аспирант занимается научно-исследовательской работой, а кроме этого, в обязательном порядке, занимается педагогической деятельностью, читая лекции или проводя семинары студентам. Еще одно из обязательных требований к учащимся в аспирантуре: публикация статей в научных журналах.
        </p>
        <p className="par">
          По сути, поступление в аспирантуру – это дверь в научную среду, ведь человек, поступающий туда, осознанно и окончательно решает связать свою жизнь именно с наукой.
        </p>
        <p className="par">
          Аспирант в не меньшей степени, чем студент, должен быть трудолюбив, усерден, ответственен и, разумеется, усидчив, ведь ему приходится иметь дело с огромным количеством сложного материала, который необходимо изучить и усвоить. Кандидатская <b>диссертация</b> – это сложная научно-исследовательская работа, итогом которой
          должно стать некое открытие, сделанное аспирантом в той научной области, которую он изучает.
        </p>
        <p className="par">
          Развитие личностных качеств, которые необходимы студенту и аспиранту, - задача не из самых легких, но если Вы решили ступить на путь науки, то они, действительно, необходимы Вам. Радость от тех открытий и прорывов, которые Вы совершите в науке, сполна компенсируют все бессонные ночи, которые Вы провели за конспектами,
          расчетами и научными трудами!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

        <LinksBlock links={links}/>

    </PageWrapper>
  </Wrapper>
);


export default page
