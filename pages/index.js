import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessagersBlock';
import ServiceBlock from 'components/common/ServiceBlock';
import TextBlock from 'components/common/TextBlock';


const Index =()=>(
      <Wrapper title="BeSmarter - Главная">
        <div className="wrapper main">
              <section className="block-nav">
                  <NavRow action="Заказать работу" url='#' />
                  <NavRow action="Услуги и цены" url='pricing' />
                  <NavRow action="Контакты" url='contacts' />
              </section>
              <MessBlock />
              <ServiceBlock timerColor='#ff5722' timerDuration={4*60*60*1000}/>
              <TextBlock />
          </div>
      </Wrapper>
)


export default Index