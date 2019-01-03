import React, {Component, createContext} from 'react';
import { connect as reduxConnect } from 'react-redux'
import './style.scss';
import Close from "../Close/index";
import { hideModal } from '@redux/ui/modal';

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
          <div id="modal_sale"
            className="modal-sale"
            onClick={onHideModalAction}
          >
              <div className={"modal-sale__body modal__body body-white"}
            onClick={onHideModalAction}
              >
                <Close onClick={onHideModalAction}/>
                  <div className="block-form__message form_alert">
                    <Close onClick={onHideModalAction} inverse/>
                    <p className="block-form__title">Ой! Что-то пошло не так и заявка не отправилась</p>
                    <img className="error__image" src={require("static/images/fox-circle.svg")} alt="Fox"/>
                    <p className="error__subtitle">Пожалуйста, позвоните нам по <a href='tel:+74957724090'>+7 495 772 40 90.</a></p>
                  </div>
              </div>
          </div>
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