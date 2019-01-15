import React, {Component} from "react";
import CardPopInfo from "./CardPopInfo";
import "./serviceBlock.scss";
import styled from 'styled-components';

const BlockServiceTop = styled.a`
  min-height: 10rem;
  height: auto;
  display: flex;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: right top;
  text-decoration: none;
  color: #333333;
  transition: all 0.33s ease;
  @media (max-width: 900px) {
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 77%;
  }
  @media (max-width: 660px) {
    background-position-x: 72%;
  }
`;

const BlockServiceText = styled.div`
  & p {
    font-size: 1.4rem;
    max-width: 24rem;
    line-height: normal;
    margin-bottom: 1rem;
  }
  padding: 3rem;
  @media (max-width: 660px) {
    padding: 3rem 1rem 1.5rem;
    &.gradient-l-white {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.66),
        rgba(255, 255, 255, 0.5),
        transparent
      );
    }
    &.gradient-l-black {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.66),
        rgba(0, 0, 0, 0.5),
        transparent
      );
    }
  }
`;

const BlockServiceTopTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 1rem;
  position: relative;
  font-size: 2rem;
`;

const BlockServiceTopTitleUnderline = styled.span`
  position: absolute;
  width: 0;
  height: 1px;
  background-color: #333333;
  left: 50%;
  top: 100%;
  transition: all 0.5s ease;
`;

const BlockService = styled.section`
 background-color: white;
  width: 100%;
  font-size: 1rem;
  max-width: 62rem;
  margin: 1.5rem auto 0;
  position: relative;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const BlockServiceList = styled.div`
  display: flex;
  font-size: 1.3rem;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  margin-bottom: .75em;
  color: #ffffff;
  text-align: center;
  @media (max-width: 660px) {
    display: block;
  }
  &.list-1 {
    .block-service__list-item {
      width: 100%;
    }
  }
  &.list-2 {
    .block-service__list-item {
      width: 50%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
  &.list-3 {
    .block-service__list-item {
      width: 33.3333%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
  &.list-4 {
    .block-service__list-item {
      width: 25%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
  &.list-5 {
    .block-service__list-item {
      width: 20%;
      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }
`;

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
    return <BlockService className="block-service" style={{backgroundImage: "linear-gradient(to right, " + gradient + ")"}}>{top}{cards}</BlockService>
  }
}

export default ServiceBlock;
