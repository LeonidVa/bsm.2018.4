import { PropTypes } from 'prop-types';
import React from 'react';
import { BaseForm, connect } from 'components/common/forms/BaseForm';
import Link from 'next/link';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import close from '@fortawesome/fontawesome-free-solid/faWindowClose';
import Dropdown from 'react-dropdown';
import Recaptcha from 'react-google-recaptcha';
import DatePicker from 'components/common/DatePicker';
import Fox from 'static/images/fox-circle.svg';
import './index.scss';
import Close from 'components/modals/Close';
import styled from 'styled-components';

const BlockFormItem = styled.div`
  height: 2.5em;
  transition: all .4s;
  &-flex {
    display: flex;
    justify-content: space-between;
      .block-form__item {
        max-width: 48%;
      }
  }   
  &__file {
    opacity: 0;
    height: 0;
  }
  &.textarea {
    height: 4.33em;
  }
`;

const DropZone = styled.div`
  div {
    border: none !important;
    text-decoration: underline;
    height: 40px !important;
    color: #f4511e;
    cursor: pointer;
    font-weight: 500;
  }  
`;

const BlockFormRed = styled.section`
  box-sizing: border-box;
  font-size: 2em;
  width: 17em;
  margin: 1.56em auto 0;
  border: none;
  background-color: #ffffff;
  padding: 1.56em 2.3em;
  position: relative;
  z-index: 1;
  transition: all .4s;
  &.form-red {
    border: solid 2px #f4511e;
    .block-form__title {
      color: #f4511e;
    }
    .block-form__more-info {
      margin: 1.25em 0 2.25em;
    }
  }
  @media (max-width: 660px) {
    width: 100%;
    padding: 1.56em .5em;
  }
`;

const BlockFormBtn = styled.button`
font-family: "Ubuntu", sans-serif;
font-size: .56em;
display: block;
margin: 1.33em auto 0;
width: 11.38em;
height: 2.78em;
background-color: #f4511e;
color: #ffffff;
border: none;
cursor: pointer;
transition: all .4s;
position: relative;
z-index: 100;
&:not(:disabled):hover {
    background-color: #922d0e;
}
`;

const BLockFormAgree = styled.span`
  display: block;
  text-align: center;
  font-size: 0.33em;
`;

const BlockFormMoreInfo = styled.a`
  display: block;
  text-align: center;
  font-size: .5em;
  color: #f4511e;
  margin-top: 1.2em;
  position: relative;
  z-index: 100;
  cursor: pointer;
`;

const BlockFormTitle = styled.div`
  color: #f4511e;
  font-size: 1em;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  line-height: 1.19;
  text-align: center;
  margin-bottom: .625em;
  letter-spacing: -1px;
`;

const BlockFormMessage = styled.div`
  text-align: center;
  img { 
    width: 7em; 
    margin-left: 41px;
  }
  p {  
    font-size: 1rem; margin-bottom: 7px;
  }
  &.form_notification {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #4A4A4A;
    border: 2px solid #d84315;
  }
`;

const BlockFormClose = styled.div`
  margin-left: 5px;
  color: #f4511e;
  cursor: pointer;
`;

const FormLabel = styled.label`
  line-height: 1.33em;
  font-size: .5em;
  color: #4a4a4a;
  display: block;
  margin-bottom: .16em;
  font-family: "Ubuntu", sans-serif;
`;

const FormInput = styled.input`
  display: block;
  font-size: .44em;
  font-family: "Ubuntu", sans-serif;
  width: 100%;
  height: 3.21em;
  padding: 0 .31em;
  border-radius: 2px;
  background-color: #f5f5f5;
  border: solid 0.5px #dadada;
  &:focus {
    border: 1px solid #f4511e;
  }
`;

const FormTextarea = styled.textarea`
  display: block;
  font-size: .44em;
  font-family: "Ubuntu", sans-serif;
  width: 100%;
  height: 7em;
  padding: 0 .31em;
  border-radius: 2px;
  background-color: #f5f5f5;
  border: solid 0.5px #dadada;
  resize: none;
  &:focus {
    border: 1px solid #f4511e;
}
`;

/*   fields are stored in /data/main.js   */

class OrderForm extends BaseForm {
  constructor(props) {
    super(props);
    this.state.Extended = false;
  }

  closeAlert = () => this.setState({ formSent: false });

  showFullForm = () => this.setState({ Extended: !this.state.Extended });

  renderForm() {
    const { fields } = this.props;

    return fields.map((field) => {
      field.rlabel = field.require ? <span title="Обязательное поле">*</span> : '';
      switch (field.type) {
        case 'textarea':
          return this.nptTextarea(field);
        case 'dropdown':
          return this.nptDropDown(field);
        case 'file':
          return this.nptFile(field);
        case 'date':
          return this.nptDate(field);
        default:
          return this.nptText(field);
      }
    });
  }

    nptText = field => (
      <BlockFormItem
        className="block-form__item"
        key={field.id}
        style={{
          opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
          maxHeight: field.required
            ? '1000px'
            : this.state.Extended
              ? '1000px'
              : '0',
          visibility: field.required
            ? 'visible'
            : this.state.Extended
              ? 'visible'
              : 'hidden',
        }}
      >
        <FormLabel htmlFor={field.name}>
          {field.label}
          {field.rlabel}    
        </FormLabel>
        <FormInput
          aria-label={field.label}
          type={field.type}
          name={field.name}
          id={field.name}
          placeholder={field.placeholder}
          required={field.required}
          value={this.props.form[field.name]}
          onChange={e => this.saveData({ [field.name]: e.target.value })}
        />
      </BlockFormItem>
    );

    nptDate(field) {
      return (
        <BlockFormItem
          className="block-form__item"
          key={field.name}
          style={{
            opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended
                ? 'visible'
                : 'hidden',
          }}
        >
          <FormLabel htmlFor={field.name}>
            {field.label}
            {field.rlabel}
          </FormLabel>

          <DatePicker
            placeholder={field.placeholder}
            value={this.props.form[field.name]}
            onDayChange={value => this.saveData({ [field.name]: value })}
          />
        </BlockFormItem>
      );
    }

    nptTextarea(field) {
      return (
        <FormTextarea>
        <BlockFormItem
          className="block-form__item textarea"
          key={field.name}
          style={{
            opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended
                ? 'visible'
                : 'hidden',
          }}
        >
        
          <FormLabel htmlFor={field.name}>
            {field.label}
            {field.rlabel}
          </FormLabel>
          <FormTextarea
            aria-label={field.label}
            type={field.type}
            id={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={this.props.form[field.name]}
            onChange={e => this.saveData({ [field.name]: e.target.value })}
          />
        </BlockFormItem>
        </FormTextarea>
      );
    }

    nptDropDown(field) {
      const { worktype: { label = '' } = {} } = this.props.form;
      return (
        <BlockFormItem
          className="block-form__item"
          key={field.name}
          style={{
            opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended
                ? 'visible'
                : 'hidden',
          }}
        >
        <FormLabel htmlFor={field.name}>
            {field.label}
            {field.rlabel}
          </FormLabel>
          <Dropdown
            onChange={e => this.saveData({ [field.name]: e })}
            value={label}
            options={field.options}
          />
        </BlockFormItem>
      );
    }

    nptFile(field) {
      return (
        <BlockFormItem
          className="block-form__item"
          key={field.name}
          style={{
            opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended
                ? 'visible'
                : 'hidden',
            height: 'auto',
          }}
        >
          <DropZone className="dropzone" style={{ fontSize: '14px' }}>
            <Dropzone onDrop={this.onDrop.bind(this)} multiple>
              <a>Добавить файл</a>
            </Dropzone>
          </DropZone>

          <ul>
            {(this.props.form.files || []).map((f, i) => (
              <li
                style={{ fontSize: '14px', display: 'flex', marginBottom: '5px' }}
                key={i}
              >
                {f.name}
                <BlockFormClose>
                <FontAwesomeIcon
                  icon={close}
                  className="block-form__close"
                  onClick={() => this.removeFile(i)}
                />
                </BlockFormClose>
              </li>
            ))}
          </ul>
        </BlockFormItem>
      );
    }

    render() {
      let { title, buttonLabel = 'Заказать работу', redForm } = this.props;

      return (
        <BlockFormRed className={`block-form ${redForm ? 'form-red' : ''}`}>
          <a
            name="form"
            id="form"
            style={{
              display: 'block',
              marginTop: '-3em',
              height: '3em',
              width: '1px',
            }}
          />
          <BlockFormMessage className="block-form__message" style={{ display: this.state.formSent.bool ? 'block' : 'none' }}>
            <Close onClick={this.closeAlert} inverse />
            <img style={{ width: '100%' }} src={Fox} alt="Fox"/>
            <br />
            <br />
            <BlockFormTitle className="block-form__title">Спасибо!</BlockFormTitle>
            <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
          </BlockFormMessage>
          <form onSubmit={this.handleSubmit()} className="block-form__form" style={{ display: this.state.formSent.bool ? 'none' : 'block' }}>
            <BlockFormTitle className="block-form__title">{title}</BlockFormTitle>
            {this.renderForm()}
            <BlockFormMoreInfo
              className="block-form__more-info"
              onClick={() => this.showFullForm()}
            >
              {this.state.Extended
                ? 'Cкрыть дополнительные поля'
                : 'Показать все поля▾'}
            </BlockFormMoreInfo>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0.75em',
              }}
            >
              <Recaptcha
                ref="recaptcha"
                onChange={this.verifyCallback}
                sitekey="6LdEPVcUAAAAADLIyn6B2QGmxCGxED0Os2ElIwWS"
              />
            </div>
            <BLockFormAgree className="block-form__agree">
              Отправляя эти данные, я принимаю
              {' '}
              <Link href="/politika-konfidentsialnosti">
                <a>Политику конфиденциальности</a>
              </Link>
            </BLockFormAgree>
            <BlockFormBtn
              type="submit"
              className="block-form__btn"
              disabled={this.props.spinner}
            >
              {buttonLabel}
            </BlockFormBtn>
          </form>
        </BlockFormRed>
      );
    }
}

OrderForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
};

export default connect(OrderForm);
