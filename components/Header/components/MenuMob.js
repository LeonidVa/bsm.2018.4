import React, { Component } from 'react';
import Link from 'next/link'

import './MenuMob.scss';

class MenuMob extends Component{

    state = {
        showMenu: false,
        isShownDropDownMenu: false,
    };

    onShowDropDownMenu = () => {
        this.setState((state, props) => {
            return {
                isShownDropDownMenu: !state.isShownDropDownMenu,
            }
        })
    }

    componentWillReceiveProps = (nextProps, nextState)=>{
        if (nextProps.showMenu !== this.state.showMenu){
            this.setState({showMenu: nextProps.showMenu})
        }
    }
    render(){
        return(
            <div className="menu-mob" style={{top: this.state.showMenu ? '0' : '-170%'}}>
                <Link href="/about"><a className="menu-mob__title">О нас</a></Link>
                <Link href="/garantii"><a className="menu-mob__title">Гарантии</a></Link>
                <Link href="/contacts"><a className="menu-mob__title">Контакты</a></Link>
                <Link href="/avtoram"><a className="menu-mob__title">Авторам</a></Link>
                <Link href="/price"><a className="menu-mob__title">Цены</a></Link>
                <a className="menu-mob__title" onClick={this.onShowDropDownMenu}>Услуги</a>
                {this.state.isShownDropDownMenu &&
                  <div className="menu-mob__drop-down">
                      <Link href="/diplom-mba-na-zakaz"><a className="menu-mob__title drop-down__title">Диплом МБА</a></Link>
                      <Link href="/dissertaciya-na-zakaz/magisterskaya "><a className="menu-mob__title drop-down__title">Магистерская</a></Link>
                      <Link href="/diplom-na-zakaz"><a className="menu-mob__title drop-down__title">Дипломная работа</a></Link>
                      <Link href="/razrabotka-diplomnogo-proekta"><a className="menu-mob__title drop-down__title">Дипломный проект</a></Link>
                      <Link href="/kursovaya-rabota-na-zakaz"><a className="menu-mob__title drop-down__title">Курсовая работа</a></Link>
                      <Link href="/zakazat-otchet-po-praktike"><a className="menu-mob__title drop-down__title">Отчет по практике</a></Link>
                      <Link href="/kontrolnaya-na-zakaz"><a className="menu-mob__title drop-down__title">Контрольная</a></Link>
                      <Link href="/referat-na-zakaz"><a className="menu-mob__title drop-down__title">Реферат</a></Link>
                      <Link href="/zakazat-esse"><a className="menu-mob__title drop-down__title">Эссе</a></Link>
                  </div>
                }
               
              
                
            </div>
        )
    }
}

export default MenuMob
