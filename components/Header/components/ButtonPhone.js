import React, {Component} from 'react';
import styled from 'styled-components';
import {ToggleCallPopup} from "components/modals/Call"
import stat from "utils/analytics";

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

const ButtonMobile = styled.a`
  color: #4a4a4a;
  transition: all .4s;
  &:hover {
    color: #f4511e !important;
  }
  @media (max-width: 660px) { display: block; }
  @media (min-width: 661px) { display: none; }
`;

const ButtonDesktop = styled.a`
  @media (max-width: 660px) { display: none; }
  @media (min-width: 661px) { display: block; }
`;