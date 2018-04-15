import Link from 'next/link';
import NavRow from '../../common/NavRow'

//import './NavBlock.scss'




const NavBlock = () => (
    <section className="block-nav">
        <NavRow action="Заказать работу" url='#'/>
        <NavRow action="Услуги и цены" url='pricing'/>
        <NavRow action="Контакты" url='contacts'/>
    </section>
)

export default NavBlock


