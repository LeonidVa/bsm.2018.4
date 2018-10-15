import React, {Component} from "react";
import CardPopInfo from "./CardPopInfo";
import "./serviceBlock.scss"

class ServiceBlock extends Component {
    state = {
        image: "",
        color: "",
        title: "",
        text: "",
        url: "",
        cards: [],
    };

    renderCards() {
        console.log(this.props.cards);
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
            return <div key={cardsKey} className={"block-service__list list-" + rl}>{buttons}</div>
        });
    }


    render() {
        const {title = "", text = "", image = "", color = "", url = ""} = this.props;
        let top = (
            <a href={url} className="block-service__top" style={{backgroundImage: "url(" + image + ")", color: color}}>
                <div className="block-service__text gradient-l-black">
          <h1 className="block-service__top-title">
            {title}
              <span className="block-service__top-title-underline" style={{backgroundColor: color}}></span>
          </h1>
                    {text}
                </div>
            </a>
        );
        let cards = this.renderCards();
        return <section className="block-service">{top}{cards}</section>
    }
}

export default ServiceBlock;
