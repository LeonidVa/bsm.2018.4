import React, {Component} from 'react';
import Link from 'next/link'

import styled from "styled-components"


const MenuDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 3;
  background-color: #ffffff;
  padding: 80px 20px 0;
  font-size: 1.25rem;
  font-family: "Ubuntu", sans-serif;
  transition: all .5s;
  overflow-y: scroll;
  .item {
    display: flex;
    color: #333333;
    text-decoration: none;
    padding: .5em 0;
    flex-direction: column;
    align-items: flex-start;
  }
  .title {
    font-size: 1.5em;
  }
  .list{
    padding-left: 1em;
  }
  a {
    &:hover,
    &:active {
      color: #f4511e;
    }
  }
  ul li a {
    font-family: "Ubuntu", sans-serif;
    display: inline-block;
    font-size: 1.5em;
    color: #f4511e;
    text-decoration: none;
    padding: .4em 0;
  }
  .close {
    width: 50px;
    height: 32px;
    position: absolute;
    top: 50%;
    margin-top: -16px;
    right: 9px;   
  }
  .line {
    width: 100%;
    height: 6px;
    background-color: #f4511e;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -3px;
    transform: rotate(44deg);
    &:last-child {
      transform: rotate(-44deg);
    }
  }
`;

const AItemTitle = styled.a`
  display: flex;
  color: #333333;
  text-decoration: none;
  padding: .5em 0;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.5em;
  font-family: "Ubuntu", sans-serif;
  display: inline-block;
  font-size: 1.5em;
  color: #f4511e;
  text-decoration: none;
  padding: .4em 0;
  &:hover,
  &:active {
    color: #f4511e;
  }
`;

const AItemListItem = styled.a`
  font-family: "Ubuntu", sans-serif;
  display: inline-block;
  font-size: 1.5em;
  color: #f4511e;
  text-decoration: none;
  padding: .4em 0;
  &:hover,
  &:active {
    color: #f4511e;
  }
  display: flex;
  color: #333333;
  text-decoration: none;
  padding: .5em 0;
  flex-direction: column;
  align-items: flex-start;
`;

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
