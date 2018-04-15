import './index.scss';
import MessBlock from '../common/MessagersBlock'

import NavBlock from './components/NavBlock';
import ServiceBlock from './components/ServiceBlock'
import TextBlock from './components/TextBlock';
import NotFind from '../common/NotFind';

export default (props) => (
    <div className="content">
        <NavBlock />
        <MessBlock />
        <ServiceBlock />
        <TextBlock />
        <NotFind />
    </div>
)