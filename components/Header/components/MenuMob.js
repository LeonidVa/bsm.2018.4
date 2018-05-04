import React, { Component } from 'react';
import Link from 'next/link'

import './MenuMob.scss';

class MenuMob extends Component{

    state = {
        showMenu: false
    }

    componentWillReceiveProps = (nextProps, nextState)=>{
        if (nextProps.showMenu !== this.state.showMenu){
            this.setState({showMenu: nextProps.showMenu})
        }
    }
    render(){
        return(
            <div className="menu-mob" style={{top: this.state.showMenu ? '0' : '-170%'}}>
                <Link href="#"><a className="menu-mob__title">Раздел 1</a></Link>
                <ul>
                    <li><Link href="#"><a>Подраздел 1</a></Link></li>
                    <li><Link href="#"><a>Подраздел 1</a></Link></li>
                    <li><Link href="#"><a>Подраздел 1</a></Link></li>
                    <li><Link href="#"><a>Подраздел 1</a></Link></li>
                </ul>

                <Link href="#"><a className="menu-mob__title">Раздел 2</a></Link>
                <ul>
                    <li><Link href="#"><a>Подраздел 2</a></Link></li>
                    <li><Link href="#"><a>Подраздел 2</a></Link></li>
                    <li><Link href="#"><a>Подраздел 2</a></Link></li>
                    <li><Link href="#"><a>Подраздел 2</a></Link></li>
                </ul>

                <Link href="#"><a className="menu-mob__title">Раздел 3</a></Link>
                <ul>
                    <li><Link href="#"><a>Подраздел 3</a></Link></li>
                    <li><Link href="#"><a>Подраздел 3</a></Link></li>
                    <li><Link href="#"><a>Подраздел 3</a></Link></li>
                    <li><Link href="#"><a>Подраздел 3</a></Link></li>
                </ul>
                <Link href="#"><a className="menu-mob__title">Услуги и цены</a></Link>
                <Link href="#"><a className="menu-mob__title">О нас</a></Link>
                <Link href="#"><a className="menu-mob__title">Контакты</a></Link>
            </div>
        )
    }
}

export default MenuMob