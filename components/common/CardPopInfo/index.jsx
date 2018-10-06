import React, { Component } from "react";
import Link from "next/link";
import { isMobile, isTablet } from "react-device-detect";

class CardPopInfo extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  drawDesktop = (title, text, url, description) => {
    const el = (
      <div className="b-item">
        <div className="b-item__content">
          <div className="block-service__list-title">{title}</div>
          {text}
        </div>

        <div className="b-item__hovered">
          <div className="b-item__hovered-text">{description}</div>
        </div>
      </div>
    );
    if (url === "") {
      return <div className="block-service__list-item b-list-item">{el}</div>;
    }
    return (
      <Link href={url}>
        <a className="block-service__list-item b-list-item">{el}</a>
      </Link>
    );
  };

  drawMobile = (title, text, url, description) => {
    const { isOpen } = this.state;
    return (
      <div
        className="block-service__list-item mobile"
        onClick={this.handleClick}
      >
        <div className="block-service__list-title">{title}</div>
        {text}
        {isOpen && (
          <div className="block-service__m-description">
            {description}
            <Link href={url}>
              <a className="block-service__m-description-button">
                <button className="button-mobile">Press me!</button>
              </a>
            </Link>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { title = "", text = "", url = "", description = [] } = this.props;
    if (isMobile) {
      return this.drawMobile(title, text, url, description);
    }
    return this.drawDesktop(title, text, url, description);
  }
}

export default CardPopInfo;
