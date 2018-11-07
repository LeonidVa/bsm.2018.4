import BaseForm from "components/common/forms/BaseForm"
import Link from "next/link";
import Dropzone from "react-dropzone";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import close from "@fortawesome/fontawesome-free-solid/faWindowClose";
import Dropdown from "react-dropdown";
import Recaptcha from "react-google-recaptcha";
import DatePicker from "components/common/DatePicker";

import "./index.scss"
import Close from "components/modals/Close";

/*   fields are stored in /data/main.js   */


class OrderForm extends BaseForm {
    constructor(props) {
        super(props);
        this.state.Extended = false;
    }

    closeAlert = () => this.setState({ formSent: false });

    showFullForm = () => {
        this.setState({Extended: !this.state.Extended});
    };

    renderForm = () => {
        if (this.props.fields === undefined) {
            console.warn("WARNING: form has no fields");
            return "";
        }
        const {fields} = this.props;
        return fields.map((field, index) => {
            let rlabel = "";
            if (field.required) {
                rlabel = <span title="Обязательное поле">*</span>;
            }
            field.rlabel = rlabel;
            field.id = "field-" + index + "-" + field.name;
            switch (field.type) {
                case "textarea":
                    return this.nptTextarea(field);
                case "dropdown":
                    return this.nptDropDown(field);
                    break;
                case "file":
                    return this.nptFile(field);
                    break;
                case "date":
                    return this.nptDate(field);
                    break;
                default:
                    return this.nptText(field);
            }
        });
    };

    nptText(field) {
        return (
            <div
                className="block-form__item"
                key={field.id}
                style={{
                    opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
                    maxHeight: field.required
                        ? "1000px"
                        : this.state.Extended
                            ? "1000px"
                            : "0",
                    visibility: field.required
                        ? "visible"
                        : this.state.Extended
                            ? "visible"
                            : "hidden"
                }}
            >
                <label htmlFor={field.id}>
                    {field.label}
                    {field.rlabel}
                </label>
                <input
                    type={field.type}
                    name=""
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={this.state.data[field.name]}
                    onChange={e => this.saveData({[field.name]: e.target.value})}
                />
            </div>
        );
    }

    nptDate(field) {
        return (
            <div
                className="block-form__item"
                key={field.id}
                style={{
                    opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
                    maxHeight: field.required
                        ? "1000px"
                        : this.state.Extended
                            ? "1000px"
                            : "0",
                    visibility: field.required
                        ? "visible"
                        : this.state.Extended
                            ? "visible"
                            : "hidden"
                }}
            >
                <label htmlFor={field.id}>
                    {field.label}
                    {field.rlabel}
                </label>

                <DatePicker
                    placeholder={field.placeholder}
                    value={this.state.data[field.name]}
                    onDayChange={value => this.saveData({[field.name]: value})}
                />
            </div>
        );
    }

    nptTextarea(field) {
        return (
            <div
                className="block-form__item textarea"
                key={field.id}
                style={{
                    opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
                    maxHeight: field.required
                        ? "1000px"
                        : this.state.Extended
                            ? "1000px"
                            : "0",
                    visibility: field.required
                        ? "visible"
                        : this.state.Extended
                            ? "visible"
                            : "hidden"
                }}
            >
                <label htmlFor={field.id}>
                    {field.label}
                    {field.rlabel}
                </label>
                <textarea
                    type={field.type}
                    name=""
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={this.state.data[field.name]}
                    onChange={e => this.saveData({[field.name]: e.target.value})}
                />
            </div>
        );
    }

    nptDropDown(field) {
        return (
            <div
                className="block-form__item"
                key={field.id}
                style={{
                    opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
                    maxHeight: field.required
                        ? "1000px"
                        : this.state.Extended
                            ? "1000px"
                            : "0",
                    visibility: field.required
                        ? "visible"
                        : this.state.Extended
                            ? "visible"
                            : "hidden"
                }}
            >
                <label htmlFor={field.id}>
                    {field.label}
                    {field.rlabel}
                </label>
                <Dropdown
                    onChange={e => this.saveData({[field.name]: e})}
                    value={this.state.data.worktype.label}
                    options={field.options}
                />
            </div>
        );
    }

    nptFile(field) {
        return (
            <div
                className="block-form__item"
                key={field.id}
                style={{
                    opacity: field.required ? 1 : this.state.Extended ? 1 : 0,
                    maxHeight: field.required
                        ? "1000px"
                        : this.state.Extended
                            ? "1000px"
                            : "0",
                    visibility: field.required
                        ? "visible"
                        : this.state.Extended
                            ? "visible"
                            : "hidden",
                    height: "auto"
                }}
            >
                <div className="dropzone" style={{fontSize: "14px"}}>
                    <Dropzone onDrop={this.onDrop.bind(this)} multiple={true}>
                        <a>Добавить файл</a>
                    </Dropzone>
                </div>

                <ul>
                    {(this.state.data.files || []).map((f, i) => (
                        <li
                            style={{fontSize: "14px", display: "flex", marginBottom: "5px"}}
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
        let {title, buttonLabel, redForm} = this.props;
        if (buttonLabel === undefined || buttonLabel === "") {
            buttonLabel = "Заказать работу";
        }
        return (
            <section className={`block-form ${redForm ? "form-red" : ""}`}>
                <a
                    name="form"
                    id="form"
                    style={{
                        display: "block",
                        marginTop: "-3em",
                        height: "3em",
                        width: "1px"
                    }}
                />
                <div className="block-form__message" style={{display: this.state.formSent.bool ? "block" : "none"}}>
                    <Close onClick={this.closeAlert} inverse/>
                    <img width="100%" src={require("static/images/fox-logo.png")}/>
                    <br/>
                    <br/>
                    <div className="block-form__title">Спасибо!</div>
                    <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
                </div>
                <form onSubmit={this.handleSubmit()} className="block-form__form" style={{display: this.state.formSent.bool ? "none" : "block"}}>
                    <div className="block-form__title">{title}</div>
                    {this.renderForm()}
                    <a
                        className="block-form__more-info"
                        onClick={() => this.showFullForm()}
                    >
                        {this.state.Extended
                            ? "Cкрыть дополнительные поля"
                            : "Показать все поля▾"}
                    </a>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "0.75em"
                        }}
                    >
                        <Recaptcha
                            ref="recaptcha"
                            onChange={this.verifyCallback}
                            sitekey="6LdEPVcUAAAAADLIyn6B2QGmxCGxED0Os2ElIwWS"
                        />
                    </div>
                    <span className="block-form__agree">
              Отправляя эти данные, я принимаю{" "}
                        <Link href="/politika-konfidentsialnosti">
                <a>Политику конфиденциальности</a>
              </Link>
            </span>
                    <button type="submit" className="block-form__btn">
                        {buttonLabel}
                    </button>
                </form>
            </section>
        );

    }
}

export default OrderForm;
