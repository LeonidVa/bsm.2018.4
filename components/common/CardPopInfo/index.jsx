import React, {Component} from "react";
import Link from "next/link";

class CardPopInfo extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  };


  render() {
    const {title = "", text = "", url = "", description = []} = this.props;
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
    let dsc = "";
    if (description.length > 0) {
      dsc = <div className="b-item__hovered-text">{description}</div>;
    }
    return (
      <div className={"block-service__list-item b-list-item" + (this.state.isOpen ? " open" : "")}>
        <div className="b-item" onClick={this.handleClick}>
          <div className="b-item__content">
            <div className="block-service__list-title">{title}</div>
            {text}
          </div>
          <div className="b-item__hovered">
            {dsc}
            {btn}
          </div>
        </div>
      </div>
    );
  }
}

export default CardPopInfo;
