import React, {Component} from "react";
import Link from "next/link";
import "./CardPopInfo.scss"
import styled from 'styled-components'

const BItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  position: relative;
  @media (min-width: 661px){
    min-height: 10rem;
  }
`;

const BItem_Content = styled.div`
  position: relative;
  p { 
    font-size: 1rem; 
  }
`;

const BItemHovered = styled.div`
  left: 0;
  width: inherit;
  height: inherit;
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: red;
  }
`;

const BItemHoveredText = styled.div`
  padding: 0 1rem 1rem;
`;

const BItemHoveredButtomWrapper = styled.div`
  display: block;
  width: 100%;
  padding: 1em;
`;

const BlockServiceListItem = styled.div`
  display: block;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  &:nth-child(1) {
    background-color: #fd704b;
    @media (max-width: 660px) {
      border-bottom: 1px solid #fc7553;
    }
    .b-item__hovered {
      background-color: #fd704b;
    }
  }
  &:nth-child(2) {
    background-color: #ff5722;
    @media (max-width: 660px) {
      border-top: 1px solid #fc5420;
      border-bottom: 1px solid #ff5c2b;
    }
    .b-item__hovered {
      background-color: #ff5722;
    }
  }
  &:nth-child(3) {
    background-color: #f4511e;
    @media (max-width: 660px) {
      border-top: 1px solid #f24e1d;
      border-bottom: 1px solid #f45524;
    }      
    .b-item__hovered {
      background-color: #f4511e;
    }
  }
  &:nth-child(4) {
    background-color: #e64a19;
    @media (max-width: 660px) {
    border-top: 1px solid #e24818;
    border-bottom: 1px solid #e54e20;
  }   
    .b-item__hovered {
      background-color: #e64a19;
    }
  }
  &:nth-child(5) {
    background-color: #d84315;
    @media (max-width: 660px) {
      border-top: 1px solid #d64215;
    }
    .b-item__hovered {
      background-color: #d84315;
    }
  }
  &:hover {
    @media (min-width: 661px) {
      transform: scale(1.04);
      .block-service__list-title::after {
        transition: all 0.3s ease-in-out;
        width: 100%;
        left: 0;
      }
    }
    .block-service__list-description {
      opacity: 1;
    }
  }
  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: default;
`;

const BItemHoveredButton = styled.a`
  background-color: white;
  width: 100%;
`;

const BlockServiceListTitle=styled.div`
  @media (min-width: 661px) and (max-width: 780px) {
    font-size: 1.3rem;
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    font-size: 1.3rem;
  }
  @media (min-width: 661px) and (max-width: 800px) {
    font-size: 1.2rem;
  }
  .block-service__list-title::after {
    transition: all 0.3s ease-in-out;
    width: 100%;
    left: 0;
  }
`;

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
