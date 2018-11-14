import React, {Component} from 'react';
import {ToggleCallPopup} from "components/modals/Call"
import stat from "utils/analytics";

import './ButtonPhone.scss';

class ButtonPhone extends Component {
  //<OrderCallButton><a className="header__telanckor">+7 495 772 40 90</a></OrderCallButton>

  render() {
    const btnMobile = (
      <a className="header__telanckor" href="tel:+74957724090" onClick={() => {
        stat.triggerTarget.phoneClicked();
        return true;
      }}>
        <span className="header__tel">+7 495 772 40 90</span>
      </a>
    );
    const btnDesktop = (
      <ToggleCallPopup targetID="call_me_top">
        <a className="header__telanckor">
          <span className="header__tel">+7 495 772 40 90</span>
        </a>
      </ToggleCallPopup>
    );
    return (
      <div>
        <div className="header__button-phone-mobile">{btnMobile}</div>
        <div className="header__button-phone-desktop">{btnDesktop}</div>
      </div>
    );
  }
}

export default ButtonPhone
