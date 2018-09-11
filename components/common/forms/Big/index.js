import Link from "next/link";
import React, {Component} from "react";
import Dropzone from "react-dropzone";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import close from "@fortawesome/fontawesome-free-solid/faWindowClose";
import Dropdown from "react-dropdown";
import Recaptcha from "react-google-recaptcha";
import triggerTarget from "utils/analytics";
import DatePicker from "components/common/DatePicker";
import axios from "axios";
import getConfig from 'next/config';

const config = getConfig();

/*   fields are stored in /components/config/main.js   */


class OrderForm extends Component {

    saveData(changes) {
        let data = this.state.data;
        Object.keys(changes).map((key) => {
            data[key] = changes[key]
        });
        this.setState({data}, () => {
            OrderForm.formDataSave(this.state.data);
            window.dispatchEvent(new CustomEvent('form data', {detail: this.state.data}));
        });
    }

    formDataLoad() {
        let data = localStorage.getItem('form data');
        if (data === undefined || data === null || data === "") {
            return this.dataDefaults
        }
        try {
            data = JSON.parse(data);
        } catch (e) {
            return this.dataDefaults
        }
        // put defaults to absent keys
        Object.keys(this.dataDefaults).map((key) => {
            if (data[key] === undefined) {
                data[key] = this.dataDefaults[key];
            }
        });
        data.files = [];
        return data;
    }

    static formDataSave(data) {
        localStorage.setItem('form data', JSON.stringify(data));
    }


    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        let source = "server side default value";
        let formType = "default formType";
        if (props.formType === undefined) {
            if (process.browser && window.location !== undefined) {
                source = window.location.hostname;
                formType += " at " + window.location.toString();
            }
        } else {
            formType = props.formType;
        }
        this.dataDefaults = {
            formType: formType,
            source: source,
            name: "",
            phone: "",
            email: "",
            theme: "",
            worktype: {label: "Укажите тип работы", value: ""},
            discipline: "",
            deadline: "",
            size: "",
            comment: "",
            files: [],
            fileName: "Добавить файл",
            verified: "",
        };
        this.state = {
            data: this.dataDefaults,
            Extended: false,
            formSended: {bool: false, number: "", error: false}
        };
    }

    componentDidMount() {
        let data = this.formDataLoad();
        this.setState({data});
        /* subscribe to localstorage changes*/
        window.addEventListener('storage', (e) => {
            if (e.key !== 'form data') {
                return true;
            }
            let data = JSON.parse(e.newValue);
            if (data === null) {
                data = {};
            }
            window.dispatchEvent(new CustomEvent('form data', {detail: data}));
        });
        window.addEventListener('form data', (e) => {
            this.setState({data: e.detail});
        });
    }

    componentWillUnmount() {
        this.saveData(this.state.data);
    }

    verifyCallback = value => {
        this.setState({verified: value});
    };

    handleSubmit = async e => {
        e.preventDefault();
        const {
            formType,
            source,
            name,
            phone,
            email,
            theme,
            worktype,
            discipline,
            deadline,
            size,
            comment,
            files,
            verified
        } = this.state.data;
        if (!this.state.verified) {
            //window.alert('Пожалуйста, пройдите каптчу');
            //return
        }
        const _this = this;
        let formData = new FormData();
        formData.set("form", formType);
        formData.set("source", source);
        formData.set("name", name);
        formData.set("phone", phone);
        formData.set("email", email);
        formData.set("theme", theme);
        formData.set("worktype", worktype.value);
        formData.set("discipline", discipline);
        formData.set("deadline", deadline);
        formData.set("size", size);
        formData.set("comment", comment);
        files.forEach(file => {
            formData.append("files", file);
        });
        formData.set("verified", verified);
        let url = "/api/form_data";
        if (config.publicRuntimeConfig.runtime.development) {
            url = ' http://localhost:3001/api/form_data'
        }
        axios({
            method: "POST",
            url: url,
            data: formData,
            config: {headers: {"Content-Type": "multipart/form-data"}}
        })
            .then(function (response) {
                const {data = {}} = response;
                const {error = true, id, msg} = data;
                if (error) {
                    /* ошибка со стороны сервера */
                    _this.setState({
                        formSended: {
                            ..._this.state.formSended,
                            error: msg
                        }
                    });
                } else {
                    /* ушло хорошо */
                    _this.setState({
                        formSended: {
                            ..._this.state.formSended,
                            bool: true,
                            number: id
                        }
                    });
                }
                _this.clearFormData();
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        const {targetID = "form submit"} = this.props;
        triggerTarget(targetID);
    };

    clearFormData() {
        const data = this.state.data;
        const {name, phone, email} = this.state.data;
        this.saveData(this.dataDefaults);
        this.saveData({name, phone, email});
    }

    onDrop(files) {
        if (files.length === 0) {
            return;
        }
        files.map(file => this.saveData({files: [...this.state.data.files, file]}));
    }

    removeFile(index) {
        this.saveData({
            files: [
                ...this.state.data.files.slice(0, index),
                ...this.state.data.files.slice(index + 1, this.state.data.files.length)
            ]
        });
    }

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
                <div className="block-form__message" style={{display: this.state.formSended.bool ? "block" : "none"}}>
                    <img width="100%" src={require("static/images/fox-logo.png")}/>
                    <br/>
                    <br/>
                    <h2 className="block-form__title">Спасибо!</h2>
                    <p>Мы получили Ваше сообщение и скоро свяжемся с Вами!</p>
                </div>
                <form onSubmit={this.handleSubmit} className="block-form__form" style={{display: this.state.formSended.bool ? "none" : "block"}}>
                    <h2 className="block-form__title">{title}</h2>
                    {this.renderForm()}
                    <a
                        className="block-form__more-info"
                        onClick={() => this.showFullForm()}
                    >
                        {this.state.Extended
                            ? "Cкрыть дополнительные поля"
                            : "Дополнительная информация"}
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
