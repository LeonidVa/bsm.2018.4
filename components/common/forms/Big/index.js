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
      <div
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
        <label htmlFor={field.name}>
          {field.label}
          {field.rlabel}    
        </label>
        <input
          aria-label={field.label}
          type={field.type}
          name={field.name}
          id={field.name}
          placeholder={field.placeholder}
          required={field.required}
          value={this.props.form[field.name]}
          onChange={e => this.saveData({ [field.name]: e.target.value })}
        />
      </div>
    );

    nptDate(field) {
      return (
        <div
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
          <label htmlFor={field.name}>
            {field.label}
            {field.rlabel}
          </label>

          <DatePicker
            placeholder={field.placeholder}
            value={this.props.form[field.name]}
            onDayChange={value => this.saveData({ [field.name]: value })}
          />
        </div>
      );
    }

    nptTextarea(field) {
      return (
        <div
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
          <label htmlFor={field.name}>
            {field.label}
            {field.rlabel}
          </label>
          <textarea
            aria-label={field.label}
            type={field.type}
            id={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={this.props.form[field.name]}
            onChange={e => this.saveData({ [field.name]: e.target.value })}
          />
        </div>
      );
    }

    nptDropDown(field) {
      const { worktype: { label = '' } = {} } = this.props.form;
      return (
        <div
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
        <label htmlFor={field.name}>
            {field.label}
            {field.rlabel}
          </label>
          <Dropdown
            onChange={e => this.saveData({ [field.name]: e })}
            value={label}
            options={field.options}
          />
        </div>
      );
    }

    nptFile(field) {
      return (
        <div
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
          <div className="dropzone" style={{ fontSize: '14px' }}>
            <Dropzone onDrop={this.onDrop.bind(this)} multiple>
              <a>Добавить файл</a>
            </Dropzone>
          </div>

          <ul>
            {(this.props.form.files || []).map((f, i) => (
              <li
                style={{ fontSize: '14px', display: 'flex', marginBottom: '5px' }}
                key={i}
              >
                {f.name}
                <FontAwesomeIcon
                  icon={close}
                  className="block-form__close"
                  onClick={() => this.removeFile(i)}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }

    render() {
      let { title, buttonLabel = 'Заказать работу', redForm } = this.props;

      return (
        <section className={`block-form ${redForm ? 'form-red' : ''}`}>
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
          <div className="block-form__message" style={{ display: this.state.formSent.bool ? 'block' : 'none' }}>
            <Close onClick={this.closeAlert} inverse />
            <img style={{ width: '100%' }} src={Fox} alt="Fox"/>
            <br />
            <br />
            <div className="block-form__title">Спасибо!</div>
            <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
          </div>
          <form onSubmit={this.handleSubmit()} className="block-form__form" style={{ display: this.state.formSent.bool ? 'none' : 'block' }}>
            <div className="block-form__title">{title}</div>
            {this.renderForm()}
            <a
              className="block-form__more-info"
              onClick={() => this.showFullForm()}
            >
              {this.state.Extended
                ? 'Cкрыть дополнительные поля'
                : 'Показать все поля▾'}
            </a>
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
            <span className="block-form__agree">
              Отправляя эти данные, я принимаю
              {' '}
              <Link href="/politika-konfidentsialnosti">
                <a>Политику конфиденциальности</a>
              </Link>
            </span>
            <button
              type="submit"
              className="block-form__btn"
              disabled={this.props.spinner}
            >
              {buttonLabel}
            </button>
          </form>
        </section>
      );
    }
}

OrderForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object),
};

export default connect(OrderForm);
