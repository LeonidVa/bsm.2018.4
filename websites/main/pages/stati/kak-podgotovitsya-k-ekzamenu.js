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


import links from "data/linksBlock/stati/kakPodgkEkzamenu";
import LinksBlock from "components/common/LinksBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";

const page = () => (
  <Wrapper title="Как подготовиться к экзамену | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Даже круглый отличник порой сомневается в своих силах и не может перебороть волнение, возникающее накануне экзамена. Ведь от того, сдашь или не сдашь предмет, зависит многое, а у молодых людей, порой, очень многое. Поэтому, перед чередой экзаменов, следует придерживаться некоторых правил, благодаря которым можно смело рассчитывать на успех.">
    <PageWrapper className="bg bg-c2 bg-img bg-img3">



        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'/stati', text:'Статьи'},
            {url:'#', text:'Как подготовиться к экзамену'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/stati" name="Статьи" position="2" />
            <ItemListElement url="https://besmarter.ru/stati/kak-podgotovitsya-k-ekzamenu" name="Как подготовиться к экзамену" position="3" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <Diplom/>

<MatZashGirl/>

      <TextBlock>
        <h1>
          Как подготовиться к экзамену
        </h1>
        <p className="par">
          Даже круглый отличник порой сомневается в своих силах и не может перебороть волнение, возникающее накануне экзамена. Ведь от того, сдашь или не сдашь предмет, зависит многое, а у молодых людей, порой, очень многое. Поэтому, перед чередой экзаменов, следует придерживаться некоторых правил, благодаря которым можно смело
          рассчитывать на успех.
        </p>
        <p className="par">
          В первую очередь, если Вы е успеваете написать диплом, а сдавать его уже вот-вот, то наши услуги специально для Вас. Вы можете смело прийти к нам – специалистам с большим преподавательским стажем, и мы выполним <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>, на заданную Вами тему. Теперь, когда о
          наличии диплома можно не переживать, следует заняться самовнушением, ведь если постоянно думать о том, что знаний нет и экзамен не сдать, а диплом не защитить, то так оно и будет, лишь от того, что Вы этого и хотели. Поэтому нужно поменять установку и думать только о том, что защитить диплом для Вас – плевое дело, с
          которым Вы, несомненно, справитесь.
        </p>
        <p className="par">
          После того, как процесс самовнушения вселил в Вас уверенность, стоит заглянуть в конспекты и начать учить нужный материал. Система запоминания должна быть сбалансирована и распределяться равномерно на все время, выделенное Вами для подготовки. Так, к примеру, 4 часа посвящаете учению, а 2 отдыху, затем повторяете в
          течение всего подобный график. Главное, не забывать отдыхать и правильно расставлять приоритеты. В первую очередь, обратите внимание на то, что Вы знаете в меньшей степени и за знание чего не можете ручаться. Выучив то, что не знали, можно повторить то, что не требует заучивания.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kak-podg.jpg')} altText="Как подготовиться к экзамену"/>

      <TextBlock>
        <p className="par">
          Учение учением, а о еде не стоит забывать. Полноценное питание только помогает усвоению материала. Но не стоит совмещать прием пищи и процесс подготовки. Мозг воспринимает информацию, и на экзамене Вы не сможете ничего вспомнить без бутерброда, если он присутствовал в момент учения. Поэтому разделяйте еду и знания, а так
          же прочие действия, которые будут отсутствовать на экзамене, например, музыка или работающий телевизор.
        </p>
        <p className="par">
          Еще один важный момент – это сон. Восьмичасовой отдых помогает Вам в усвоении заученной информации. Так сказать, во время сна Ваш мозг раскладывает всю полученную информацию по полочкам, и Вы наутро можете блистать знаниями, которых вчера было минимум.
        </p>
        <p className="par">
          Когда уже настал долгожданный день экзамена, то главным вопросом перед закрытой дверью стоит следующий: идти вперед или немного подождать. Тут же решать, конечно, Вам. Но помните, что за долгие годы преподавания у преподавателей сложились свои стереотипы. Один из стереотипов заключается в том, что в первых рядах идут на
          сдачу отличники и хорошисты, а в последних – двоечники и троечники. К концу экзамена преподаватель, как правило, устает и становится менее внимательным и придирчивым. Если Вы жаждете положительной отметки, но знания Ваши равны нулю или около единицы, то попробуйте прорваться в первые ряды и есть большая вероятность того,
          что удача улыбнется Вам и преподаватель сочтет Ваши незнания растерянностью и волнением.
        </p>
        <p className="par">
          И все-таки, не забудьте перед экзаменом <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>, это будет еще одной гарантией Вашего успеха.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

            <LinksBlock links={links}/>
        </PageWrapper>
    </Wrapper>
);


export default page
