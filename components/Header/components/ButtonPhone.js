import React, {Component} from 'react';
import {ToggleCallPopup} from "components/modals/Call"
import stat from "utils/analytics";
import {
  ButtonMobile,
  ButtonDesktop
}from "./style.js"

class ButtonPhone extends Component {
  //<OrderCallButton><a className="header__telanckor">+7 495 772 40 90</a></OrderCallButton>

  render() {
    const btnMobile = (
      <ButtonMobile href="tel:+74957724090" onClick={() => {
        stat.triggerTarget.phoneClicked();
        return true;
      }}>
        <span className="header__tel">+7 495 772 40 90</span>
      </ButtonMobile>
    );
    const btnDesktop = (
      <ToggleCallPopup targetID="call_me_top">
        <ButtonDesktop>
          <span className="header__tel">+7 495 772 40 90</span>
        </ButtonDesktop>
      </ToggleCallPopup>
    );
    return (
      <div>
        {btnMobile}
        {btnDesktop}
      </div>
    );
  }
}

export default ButtonPhone;

