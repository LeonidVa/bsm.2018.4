import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessagersBlock';
import TextBlock from 'components/common/TextBlock';


const page = () => (
    <Wrapper title="BeSmarter - Главная">
        <div className="wrapper main">
            <section className="block-nav">
                <NavRow url='#' title="Заказать работу" description="dfdfd fkajf ldfj dkl"/>
                <NavRow url='pricing' title="Услуги и цены" description="dfdfd fkajf ldfj dkl"/>
                <NavRow url='contacts' title="Контакты" description="dfdfd fkajf ldfj dkl"/>
            </section>
            <MessBlock/>
            <TextBlock/>
        </div>
    </Wrapper>
);


export default page