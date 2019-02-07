import React, {Component} from "react";
import Link from "next/link";
import {
  BlockServiceListTitle,
  BItemHoveredButton,
  BlockServiceListItem,
  BItemHoveredButtomWrapper,
  BItemHoveredText,
  BItemHovered,
  BItem_Content,
  BItem
} from "./style.js"

import './index.scss';

class CardPopInfo extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  };


  render() {
    const {title = "", text = "", url = "", description = []} = this.props;

    if (description.length > 0) {
      let dsc = <div className="b-item__hovered-text">{description}</div>;
      let btn = "";
      if (url !== "") {
          btn = (
              <div className="b-item__hovered-button-wrapper">
                  <Link href={url}>
                      <a className="b-item__hovered-button">Кнопка</a>
                  </Link>
              </div>
          );
      }
      let hovered = (
          <div className="b-item__hovered">{dsc}{btn}</div>
      );
      return (
        <div className={"block-service__list-item b-list-item" + (this.state.isOpen ? " open" : "")}>
          <div className="b-item" onClick={this.handleClick}>
            <div className="b-item__content">
              <div className="block-service__list-title">{title}</div>
              {text}
            </div>
            {hovered}
          </div>
        </div>
      );
    } else {
      let el = (
          <div className="b-item">
              <div className="b-item__content">
                  <div className="block-service__list-title">{title}</div>
                  {text}
              </div>
          </div>
      );
      let elClass = "block-service__list-item b-list-item";
      if (url !== "") {
          elClass += " link";
          el = <Link href={url}>{el}</Link>;
      }
        el = <div className={elClass}>{el}</div>;
        return el;
    }
  }
}

export default CardPopInfo;
