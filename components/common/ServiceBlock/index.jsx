import React, {Component} from "react";
import CardPopInfo from "./CardPopInfo";
import "./serviceBlock.scss"

class ServiceBlock extends Component {
  state = {
    image: "",
    color: "",
    title: "",
    text: "",
    cards: [],
  };

  renderCards() {
    console.log(this.props.cards);
    if (this.props.cards === undefined || this.props.cards === null || this.props.cards.length === 0) {
      return "no cards";
    }
    let cardsKey = 0;
    const el = this.props.cards.map((row) => {
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
        />;
      });
      cardsKey++
      return <div key={cardsKey} className={"block-service__list list-" + rl}>{buttons}</div>
    });
    //console.log(el);
    return el;
  }


  render() {
    const {title = "", text = "", image = "", color = ""} = this.props;
    let top = (
      <div className="block-service__top" style={{backgroundImage: "url(" + image + ")", color: color}}>
        <div className="block-service__text gradient-l-black">
          <span className="block-service__title">
            {title}
            <span className="block-service__title-underline" style={{backgroundColor: color}}></span>
          </span>
          {text}
        </div>
      </div>
    );
    let cards = this.renderCards();
    return <section className="block-service">{top}{cards}</section>
  }
}

export default ServiceBlock;
