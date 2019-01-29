import React, {Component} from 'react';
import Link from 'next/link'
import {
  MenuDiv,
  AItemTitle,
  AItemListItem,
}from "./style.js"

class MenuMob extends Component {

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

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.showMenu !== this.state.showMenu) {
            this.setState({showMenu: nextProps.showMenu})
        }
    };

    render() {
      return (
        <MenuDiv className="menu-mob" style={{top: this.state.showMenu ? '0' : '-170%'}}>
          <Link href="/about"><AItemTitle className="item title">О нас</AItemTitle></Link>
          <Link href="/garantii"><AItemTitle className="item title">Гарантии</AItemTitle></Link>
          <Link href="/contacts"><AItemTitle className="item title">Контакты</AItemTitle></Link>
          <Link href="/avtoram"><AItemTitle className="item title">Авторам</AItemTitle></Link>
          <Link href="/price"><AItemTitle className="item title">Цены</AItemTitle></Link>
          <AItemTitle className="item title" onClick={this.onShowDropDownMenu}>Услуги</AItemTitle>
          {
            this.state.isShownDropDownMenu &&
            <div className="list">
              <Link href="/diplom-mba-na-zakaz"><AItemListItem className="item list-item">Диплом МБА</AItemListItem></Link>
              <Link href="/dissertaciya-na-zakaz/magisterskaya "><AItemListItem className="item list-item">Магистерская</AItemListItem></Link>
              <Link href="/diplom-na-zakaz"><AItemListItem className="item list-item">Дипломная работа</AItemListItem></Link>
              <Link href="/razrabotka-diplomnogo-proekta"><AItemListItem className="item list-item">Дипломный проект</AItemListItem></Link>
              <Link href="/kursovaya-rabota-na-zakaz"><AItemListItem className="item list-item">Курсовая работа</AItemListItem></Link>
              <Link href="/zakazat-otchet-po-praktike"><AItemListItem className="item list-item">Отчет по практике</AItemListItem></Link>
              <Link href="/kontrolnaya-na-zakaz"><AItemListItem className="item list-item">Контрольная</AItemListItem></Link>
              <Link href="/referat-na-zakaz"><AItemListItem className="item list-item">Реферат</AItemListItem></Link>
              <Link href="/zakazat-esse"><AItemListItem className="item list-item">Эссе</AItemListItem></Link>
            </div>
          }
        </MenuDiv>
      )
    }
}

export default MenuMob
