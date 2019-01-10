import React, {Component, createContext} from 'react';
import { connect as reduxConnect } from 'react-redux'
import './style.scss';
import Close from "../Close/index";
import { hideModal } from '@redux/ui/modal';
import styled from 'styled-components';

const ModalSale = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  top: 0;
  left: 0;
  font-size: 1em;
  z-index: 5;
`;

const BodyWhite = styled.div`
  background: #fff;
  border: 2px solid #d84315;
`;

const FormAlert = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4A4A4A;
`;

const BlockFormTitle = styled.p`
  font-size: 2em;
`;

const ModalSaleBody = styled.div`
  width: 34.18em;
  max-width: 100%;
  left: 50%;
  top: 50%;
  margin-left: -17.09em;
  transform: translateY(-50%);
  padding: 1.5em 2.18em 2.5em;
  background-color: #FF8A65;
  background-size: cover;
  background-position: 50% 0%;
  font-size: 1em;
  @media (max-width: 550px) {
    width: 100%;
    left: 0;
    margin-left: 0;
    font-size: .8em;
  }
  @media (max-width: 420px) {
    font-size: .7em;
  }
  @media (max-width: 370px) {
    font-size: .6em;
  }
`;

const ErrorImage = styled.img`
  margin: 10px;
  width: 100%;
  margin-right: 35px;
`;

const ErrorSubtitle = styled.p`
  font-size: 2rem;
`;

class ErrorModal extends Component {
  componentDidMount () {
    this.props.onHideModalAction();
  }

  componentWillUnmount () {
    this.props.onHideModalAction();
  }

  render () {
    const { isShown, onHideModalAction } = this.props;
    return (
      <React.Fragment>
        {
          isShown &&
          <ModalSale id="modal_sale"
            className="modal-sale"
            onClick={onHideModalAction}
          >
              <BodyWhite><ModalSaleBody className={"modal-sale__body modal__body body-white"}
            onClick={onHideModalAction}
              >
                <Close onClick={onHideModalAction}/>
                  <FormAlert className="block-form__message form_alert">
                    <Close onClick={onHideModalAction} inverse/>
                    <BlockFormTitle className="block-form__title">Ой! Что-то пошло не так и заявка не отправилась</BlockFormTitle>
                    <ErrorImage className="error__image" src={require("static/images/fox-circle.svg")} alt="Fox"/>
                    <ErrorSubtitle className="error__subtitle">Пожалуйста, позвоните нам по <a href='tel:+74957724090'>+7 495 772 40 90.</a></ErrorSubtitle>
                  </FormAlert>
                  
              </ModalSaleBody>
              </BodyWhite>
          </ModalSale>
        }
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  onHideModalAction: () => hideModal(),
};

function connect(Component) {
  return reduxConnect(
    null,
    mapDispatchToProps,
  )(Component);
}

export default connect(ErrorModal);