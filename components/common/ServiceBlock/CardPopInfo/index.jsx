import React, {Component} from "react";
import Link from "next/link";
import {
  BItemHoveredText,
  BItemHoveredButtonWrapper,
  BItemHoveredButton,
  BlockServiceListItem,
  BItem,
  BItemContent,
  BlockServiceListTitle,
  BItemhovered
} from "./style.js"


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
              <BItemHoveredButtonWrapper className="b-item__hovered-button-wrapper">
                  <Link href={url}>
                      <BItemHoveredButton className="b-item__hovered-button">Кнопка</BItemHoveredButton>
                  </Link>
              </BItemHoveredButtonWrapper>
          );
      }
      let hovered = (
          <BItemhovered className="b-item__hovered">{dsc}{btn}</BItemhovered>
      );
      return (
        <BlockServiceListItem className={"block-service__list-item b-list-item" + (this.state.isOpen ? " open" : "")}>
          <BItem className="b-item" onClick={this.handleClick}>
            <BItemContent className="b-item__content">
              <BlockServiceListTitle className="block-service__list-title">{title}</BlockServiceListTitle>
              {text}
            </BItemContent>
            {hovered}
          </BItem>

        </BlockServiceListItem>
      );
    } else {
      let el = (
          <BItem className="b-item">
              <BItemContent className="b-item__content">
                  <BlockServiceListTitle className="block-service__list-title">{title}</BlockServiceListTitle>
                  {text}
              </BItemContent>
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
