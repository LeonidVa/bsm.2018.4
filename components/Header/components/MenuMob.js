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
                <Link href="/price"><a className="menu-mob__title">Услуги и цены</a></Link>
                <Link href="/about"><a className="menu-mob__title">О нас</a></Link>
                <Link href="/garantii"><a className="menu-mob__title">Гарантии</a></Link>
                <Link href="/contacts"><a className="menu-mob__title">Контакты</a></Link>
                <Link href="/avtoram"><a className="menu-mob__title">Авторам</a></Link>
            </div>
        )
    }
}

export default MenuMob
