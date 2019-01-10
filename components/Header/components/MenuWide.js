import {Component} from 'react';
import styled from "styled-components"

const MenuDiv = styled.div`
  position: fixed;
  width: 100%;
  overflow: hidden;
  background-color: #fafafa;
  top: -200%;
  left: 0;
  z-index: 3;
  padding: 3.25em 0 5.125em;
  transition: all .5s;
  &.open {
    top: 3em;
  }
  .inner {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
  }
  .item {
    border-right: 0.0625em solid #cfd8dc;
    margin-right: 1em;
    padding-right: 1em;
    &:last-child {
      border-right: none;
      margin-right: 0;
      .lists .list {
        width: 50%;
        &:first-child {
          padding-right: 0.75em;
        }
      }
    }
  }

  .lists {
    margin-bottom: 2.125em;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .list {
    font-size: 1rem;
    width: 100%;
    min-width: 14rem;
    padding-right: 10px;
    &--item {
      margin-bottom: 1em;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        color: #4a4a4a;
        text-decoration: none;
        &:hover {
          color: #d84315;
          text-decoration: underline;
        }
      }
      &-header {
        display: none;
        font-size: 120%;
        a {
          margin-left: 0;
          color: #f4511e;
        }
      }
      &-subheader {
        font-size: 110%;
        a { margin-left: 0; color: #f4511e; }
      }
    }

  }
`;

class MenuWide extends Component {

    state = {
        showMenu: false
    };

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.showMenu !== this.state.showMenu) {
            this.setState({showMenu: nextProps.showMenu})
        }
    };

    render() {
        return (
            <MenuDiv className={"menu-desk " + ( this.state.showMenu ? "open" : "")} onMouseLeave={this.props.handler}>
                <div className="inner">




                    <div className="item">
                        <div className="lists">
                            <ul className="list">
                                <li className="list--item list--item-subheader">
                                    <a href="/dissertaciya-na-zakaz/magisterskaya">Магистерская</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/magisterskaya/menedzhment">Менеджмент</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/magisterskaya/psihologiya">Психология</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/magisterskaya/yurisprudenciya-pravo">Юриспруденция</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/magisterskaya/ekonomika">Экономика</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/diplom-na-zakaz" >Дипломная работа</a>
                                </li>
                                <li className="list--item">
                                    <a href="/diplom-na-zakaz/buhgalterskij-uchet">Бухгалтерский учет</a>
                                </li>
                                <li className="list--item">
                                    <a href="/diplom-na-zakaz/menedjment">Менеджмент</a>
                                </li>
                                <li className="list--item">
                                    <a href="/diplom-na-zakaz/pedagogika">Педагогика</a>
                                </li>
                                <li className="list--item">
                                    <a href="/diplom-na-zakaz/psihologiya">Психология</a>
                                </li>
                                <li className="list--item">
                                    <a href="/diplom-na-zakaz/programmirovanie">Программирование</a>
                                </li>
                                <li className="list--item">
                                    <a href="/diplom-na-zakaz/yurisprudenciya-pravo">Юриспруденция</a>
                                </li>
                                <li className="list--item">
                                    <a href="/diplom-na-zakaz/ekonomika">Экономика</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/dorabotka-diplomnoj-raboty">Доработка дипломной</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/razrabotka-diplomnogo-proekta">Дипломный проект</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/diplom-mba-na-zakaz">Диплом МВА</a>
                                </li>
                            </ul>
                        </div>
                    </div>




                    <div className="item">
                        <div className="lists">
                            <ul className="list">
                                <li className="list--item list--item-subheader">
                                    <a href="/dissertaciya-na-zakaz/kandidatskaya">Кандидатская</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/yurisprudenciya-pravo">Юриспруденция</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/ekonomika">Экономика</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/filosofiya">Философия</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/medicina">Медицина</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/dissertaciya-na-zakaz/doktorskaya">Докторская</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/doktorskaya/medicina">Медицина</a>
                                </li>
                                <li className="list--item">
                                    <a href="/dissertaciya-na-zakaz/doktorskaya/pedagogika">Педагогика</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/dissertaciya-na-zakaz">Диссертация</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/dissertaciya-na-zakaz/aspirantura">Аспирантура</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/dissertaciya-na-zakaz/soiskatelstvo">Соискательство</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/dissertaciya-na-zakaz/avtoreferat-dlya-dissertacii">Автореферат</a>
                                </li>
                            </ul>
                        </div>
                    </div>





                    <div className="item">
                        <div className="lists">
                            <ul className="list">
                                <li className="list--item list--item-subheader">
                                    <a href="/kursovaya-rabota-na-zakaz">Курсовая работа</a>
                                </li>
                                <li className="list--item">
                                    <a href="/kursovaya-rabota-na-zakaz/arhitektura">Архитектура</a>
                                </li>
                                <li className="list--item">
                                    <a href="/kursovaya-rabota-na-zakaz/buhgalterskiy-uchet">Бухгалтерский учет</a>
                                </li>
                                <li className="list--item">
                                    <a href="/kursovaya-rabota-na-zakaz/pedagogika">Педагогика</a>
                                </li>
                                <li className="list--item">
                                    <a href="/kursovaya-rabota-na-zakaz/yurisprudenciya-pravo">Право</a>
                                </li>
                                <li className="list--item">
                                    <a href="/kursovaya-rabota-na-zakaz/psihologiya">Психология</a>
                                </li>
                                <li className="list--item">
                                    <a href="/kursovaya-rabota-na-zakaz/ekonomika">Экономика</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/kursovoj-proekt-na-zakaz">Курсовой проект</a>
                                </li>
                                <li className="list--item">
                                    <a href="/kursovoj-proekt-na-zakaz/po-detalyam-mashin">Детали машин</a>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="item">
                        <div className="lists">
                            <ul className="list">
                                <li className="list--item list--item-subheader">
                                    <a href="/referat-na-zakaz">Реферат</a>
                                </li>
                                <li className="list--item">
                                    <a href="/referat-na-zakaz/filosofiya">Философия</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/zakazat-otchet-po-praktike">Отчет по практике</a>
                                </li>
                                <li className="list--item">
                                    <a href="/zakazat-otchet-po-praktike/proizvodstvennoj">Производственная</a>
                                </li>
                                <li className="list--item">
                                    <a href="/zakazat-otchet-po-praktike/preddiplomnoj">Преддипломная</a>
                                </li>
                                <li className="list--item">
                                    <a href="/zakazat-otchet-po-praktike/uchebnoj">Учебная</a>
                                </li>
                                <li className="list--item">
                                    <a href="/zakazat-otchet-po-praktike/pedagogicheskoj">Педагогическая</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/kontrolnaya-na-zakaz">Контрольная работа</a>
                                </li>
                                <li className="list--item list--item-subheader">
                                    <a href="/zakazat-esse">Эссе</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MenuDiv>

        )
    }
}

export default MenuWide
