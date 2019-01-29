import React, {Component} from 'react';
import { ToggleCallPopup, ToggleQuestionPopup } from "components/modals/Call"
import {
  CallAskSection,
  Inner,
  Title,
  Buttons,
  Button,
} from "./style.js"

class BottomHelper extends Component {

    render() {
      const { isTitle = true } = this.props;
      return (
        <CallAskSection className="block-callask">
            <Inner className="inner">
              {!isTitle &&
                <React.Fragment>
                  <Title className="title">Остались вопросы?</Title>
                  <Title className="title">Мы ответим!</Title>
                </React.Fragment>
              }
                <Buttons className="buttons">
                    <ToggleQuestionPopup targetID="question"><Button className="button">Задай вопрос</Button></ToggleQuestionPopup>
                    <ToggleCallPopup targetID="call_me_bottom"><Button className="button">Закажи звонок</Button></ToggleCallPopup>
                </Buttons>
            </Inner>
        </CallAskSection>
      )
    }
}

export default BottomHelper
