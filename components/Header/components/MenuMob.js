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
                <Link href="/about"><a className="item title">О нас</a></Link>
                <Link href="/garantii"><a className="item title">Гарантии</a></Link>
                <Link href="/contacts"><a className="item title">Контакты</a></Link>
                <Link href="/avtoram"><a className="item title">Авторам</a></Link>
                <Link href="/price"><a className="item title">Цены</a></Link>
                <a className="item title" onClick={this.onShowDropDownMenu}>Услуги</a>
                {
                    this.state.isShownDropDownMenu &&
                    <div className="list">
                        <Link href="/diplom-mba-na-zakaz"><a className="item list-item">Диплом МБА</a></Link>
                        <Link href="/dissertaciya-na-zakaz/magisterskaya "><a className="item list-item">Магистерская</a></Link>
                        <Link href="/diplom-na-zakaz"><a className="item list-item">Дипломная работа</a></Link>
                        <Link href="/razrabotka-diplomnogo-proekta"><a className="item list-item">Дипломный проект</a></Link>
                        <Link href="/kursovaya-rabota-na-zakaz"><a className="item list-item">Курсовая работа</a></Link>
                        <Link href="/zakazat-otchet-po-praktike"><a className="item list-item">Отчет по практике</a></Link>
                        <Link href="/kontrolnaya-na-zakaz"><a className="item list-item">Контрольная</a></Link>
                        <Link href="/referat-na-zakaz"><a className="item list-item">Реферат</a></Link>
                        <Link href="/zakazat-esse"><a className="item list-item">Эссе</a></Link>
                    </div>
                }
            </MenuDiv>
        )
    }
}

export default MenuMob
