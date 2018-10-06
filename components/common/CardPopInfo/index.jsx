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
    const el = (
      <div className="b-item" onClick={this.handleClick}>
        <div className="b-item__content">
          <div className="block-service__list-title">{title}</div>
          {text}
        </div>
        <div className="b-item__hovered">
          <div className="b-item__hovered-text">{description}</div>
          <div className="b-item__hovered-button-wrapper"><a className="b-item__hovered-button" href="#">Кнопка</a></div>
        </div>
      </div>
    );
    let className = "block-service__list-item b-list-item" + (this.state.isOpen ? " open" : "");
    if (url === "") {
      return <div className={className}>{el}</div>;
    }
    return (
      <Link href={url}>
        <a className={className}>{el}</a>
      </Link>
    );
  }
}

export default CardPopInfo;
