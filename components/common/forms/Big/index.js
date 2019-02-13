import { PropTypes } from 'prop-types';
import React from 'react';
import getConfig from 'next/config';
import { BaseForm, connect } from 'components/common/forms/BaseForm';
import Link from 'next/link';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import close from '@fortawesome/fontawesome-free-solid/faWindowClose';
import Dropdown from 'react-dropdown';
import Recaptcha from 'react-google-recaptcha';
import DatePicker from 'components/common/DatePicker';
import Fox from 'static/images/fox-circle.svg';
import Close from 'components/modals/Close';
import {
  BlockFormItem,
  DropZone,
  BlockFormRed,
  BlockFormBtn,
  BLockFormAgree,
  BlockFormMoreInfo,
  BlockFormTitle,
  BlockFormMessage,
  BlockFormClose,
  FormLabel,
  FormInput,
  FormTextarea
}from "./style.js"



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
          opacity: field.required ? 1 : this.state.Extended || this.props.isFull ? 1 : 0,
          maxHeight: field.required
            ? '1000px'
            : this.state.Extended || this.props.isFull
              ? '1000px'
              : '0',
          visibility: field.required
            ? 'visible'
            : this.state.Extended || this.props.isFull
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
            opacity: field.required ? 1 : this.state.Extended || this.props.isFull ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended || this.props.isFull
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended || this.props.isFull
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
        <BlockFormItem
          className="block-form__item textarea"
          key={field.name}
          style={{
            opacity: field.required ? 1 : this.state.Extended || this.props.isFull ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended || this.props.isFull
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended || this.props.isFull
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
      );
    }

    nptDropDown(field) {
      const { worktype: { label = '' } = {} } = this.props.form;
      return (
        <BlockFormItem
          className="block-form__item"
          key={field.name}
          style={{
            opacity: field.required ? 1 : this.state.Extended || this.props.isFull ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended || this.props.isFull
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended || this.props.isFull
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
            opacity: field.required ? 1 : this.state.Extended || this.props.isFull ? 1 : 0,
            maxHeight: field.required
              ? '1000px'
              : this.state.Extended || this.props.isFull
                ? '1000px'
                : '0',
            visibility: field.required
              ? 'visible'
              : this.state.Extended || this.props.isFull
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
            {!this.props.isFull &&
            <BlockFormMoreInfo
              className="block-form__more-info"
              onClick={() => this.showFullForm()}
            >
              {this.state.Extended
                ? 'Cкрыть дополнительные поля'
                : 'Показать все поля▾'}
            </BlockFormMoreInfo>
            }
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0.75em',
              }}
            >
              {getConfig().publicRuntimeConfig.testing.recaptcha ?
                <button
                  type="button"
                  id="captcha"
                  onClick={this.verifyCallback}
                >
                  Recaptcha
                </button>
                :
                <Recaptcha
                  ref="recaptcha"
                  onChange={this.verifyCallback}
                  sitekey={getConfig().publicRuntimeConfig.analytics.recaptcha || '6LdEPVcUAAAAADLIyn6B2QGmxCGxED0Os2ElIwWS'}
                />
              }
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
