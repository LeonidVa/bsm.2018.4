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
import './CardPopInfo.scss';

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
      let dsc = <BItemHoveredText className="b-item__hovered-text">{description}</BItemHoveredText>;
      let btn = "";
      if (url !== "") {
          btn = (
              <BItemHoveredButtomWrapper className="b-item__hovered-button-wrapper">
                  <Link href={url}>
                      <BItemHoveredButton className="b-item__hovered-button">Кнопка</BItemHoveredButton>
                  </Link>
              </BItemHoveredButtomWrapper>
          );
      }
      let hovered = (
          <BItemHovered className="b-item__hovered">{dsc}{btn}</BItemHovered>
      );
      return (
        <BlockServiceListItem className={"block-service__list-item b-list-item" + (this.state.isOpen ? " open" : "")}>
          <BItem className="b-item" onClick={this.handleClick}>
            <BItem_Content className="b-item__content">
              <BlockServiceListTitle className="block-service__list-title">{title}</BlockServiceListTitle>
              {text}
            </BItem_Content>
            {hovered}
          </BItem>
        </BlockServiceListItem>
      );
    } else {
      let el = (
          <BItem className="b-item">
              <BItem_Content className="b-item__content">
                  <BlockServiceListTitle className="block-service__list-title">{title}</BlockServiceListTitle>
                  {text}
              </BItem_Content>
          </BItem>
      );
      let elClass = "block-service__list-item b-list-item";
      if (url !== "") {
          elClass += " link";
          el = <Link href={url}>{el}</Link>;
      }
        el = <BlockServiceListItem className={elClass}>{el}</BlockServiceListItem>;
        return el;
    }
  }
}

export default CardPopInfo;
