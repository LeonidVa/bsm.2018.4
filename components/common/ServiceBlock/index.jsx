import React, {Component} from "react";
import CardPopInfo from "./CardPopInfo";
import {
  BlockServiceList,
  BlockService,
  BlockServiceTopTitleUnderline,
  BlockServiceTopTitle,
  BlockServiceText,
  BlockServiceTop
} from "./style.js"
import './serviceBlock.scss';

class ServiceBlock extends Component {
  renderCards() {
    if (this.props.cards === undefined || this.props.cards === null || this.props.cards.length === 0) {
      return "";
    }
    let cardsKey = 0;
    return this.props.cards.map((row) => {
      const rl = row.length;
      if (rl === 0) {
        return "";
      }
      let buttonsKey = 0;
      const buttons = row.map((button) => {
        buttonsKey++;
        return <CardPopInfo
          key={buttonsKey}
          title={button.title}
          text={button.text}
          description={button.description}
          url={button.url}
        />;
      });
      cardsKey++;
      return <BlockServiceList key={cardsKey} className={"block-service__list list-" + rl}>{buttons}</BlockServiceList>
    });
  }


  render() {
    const {title = "", text = "", image = "", color = "#333333", url = "", gradient = "rgba(0,0,0,0.5)"} = this.props;
    let top = (
      <BlockServiceTop href={url} className="block-service__top" style={{backgroundImage: "url(" + image + ")", color}}>
        <BlockServiceText className="block-service__text" style={{backgroundImage: "linear-gradient(to right, " + gradient + ", transparent)"}}>
          <BlockServiceTopTitle className="block-service__top-title">
            {title}
            <BlockServiceTopTitleUnderline className="block-service__top-title-underline" style={{backgroundColor: color}}></BlockServiceTopTitleUnderline>
          </BlockServiceTopTitle>
          {text}
        </BlockServiceText>
      </BlockServiceTop>
    );
    let cards = this.renderCards();
    return (
      <BlockService
        className="block-service"
        style={{backgroundImage: "linear-gradient(to right, " + gradient + ")"}}
      >
        {top}
        {cards}
      </BlockService>);
  }
}

export default ServiceBlock;
