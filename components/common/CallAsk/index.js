import React, {Component} from 'react';
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"
import './index.scss'
import styles from 'styled-components'

const BlockCallask = styles.section`
  font-size: 2em;
  width: 100%;
  background-color: #ffffff;
  padding: 1.56em 0;
  margin-top: 1.56em;
  position: relative;
  z-index: 1;
`;

const Inner = styles.div `
  width: 14.88em;
  @media (max-width: 660px) {
      width: calc(100% - 30px);
      max-width: none;
  }
`;

const BlockCallaskTitle = styles.h2 `
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 1em;
  color: #4a4a4a;
  margin-bottom: .94em;
  line-height: 0.4;
  @media (max-width: 660px) {
      font-size: 95%;
  }
`;

const BlockCallaskButtons = styles.div `
  cursor: pointer;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  @media (max-width: 660px) {
      flex-direction: column;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      align-items: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
  }
`;

const BlockCallaskButton = styles.a `
  font-size: 1.2rem;
  width: 14rem;
  display: block;
  color: #ffffff !important; /* blockText a перебивает! */
  text-decoration: none;
  background-color: #f4511e;
  padding: .91em 0;
  text-align: center;
  transition: all .4s;
  &:hover {
    background-color: #922d0e;
  }
  @media (max-width: 660px) {
    width: 15.33em;
    margin-bottom: 10px;
  }
`;

class BottomHelper extends Component {
  render() {
    return (
      <div>
        <BlockCallask className="block-callask">
          <Inner className="inner">
            <BlockCallaskTitle className="block-callask__title">Остались вопросы?</BlockCallaskTitle>
            <BlockCallaskTitle className="block-callask__title">Мы ответим!</BlockCallaskTitle>
            <BlockCallaskButtons className="block-callask__buttons">
              <ToggleQuestionPopup targetID="question"><BlockCallaskButton className="block-callask__button">Задай вопрос</BlockCallaskButton></ToggleQuestionPopup>
              <ToggleCallPopup targetID="call_me_bottom"><BlockCallaskButton className="block-callask__button">Закажи звонок</BlockCallaskButton></ToggleCallPopup>
            </BlockCallaskButtons>
          </Inner>
        </BlockCallask>
      </div>
    )
  }
}

export default BottomHelper
