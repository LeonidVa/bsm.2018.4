import Link from 'next/link';
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import close from '@fortawesome/fontawesome-free-solid/faWindowClose';
import Dropdown from 'react-dropdown'
import Recaptcha from "react-google-recaptcha";
import triggerTarget from 'utils/analytics';
import DatePicker from 'components/common/DatePicker';

import axios from 'axios';

/* fields are stored in /components/config/main.js */
class OrderForm extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        let source = 'server side default value';
        let formType = "default formType";
        if (props.formType === undefined) {
            if (process.browser && window.location !== undefined) {
                source = window.location.hostname;
                formType += " at " + window.location.toString();
            }
        } else {
            formType = props.formType
        }
        this.state = {
            formType: formType,
            source: source,
            name: '',
            phone: '',
            email: '',
            theme: '',
            worktype: {label: 'Укажите тип работы', value: ''},
            discipline: '',
            deadline: '',
            size: '',
            comment: '',
            files: [],
            fileName: 'Добавить файл',
            Extended: false,
            verified: "",
            formSended: {bool: false, number: '', error: false},
        };
    }

    verifyCallback = (value) => {
        this.setState({verified: value})
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const {formType, source, name, phone, email, theme, worktype, discipline, deadline, size, comment, files, verified} = this.state;
        if (!this.state.verified) {
            //window.alert('Пожалуйста, пройдите каптчу');
            //return
        }
        const _this = this;
        let formData = new FormData();
        formData.set('form', formType);
        formData.set('source', source);
        formData.set('name', name);
        formData.set('phone', phone);
        formData.set('email', email);
        formData.set('theme', theme);
        formData.set('worktype', worktype.value);
        formData.set('discipline', discipline);
        formData.set('deadline', deadline);
        formData.set('size', size);
        formData.set('comment', comment);
        files.forEach(file => {
            formData.append('files', file);
        });
        formData.set('verified', verified);
        axios({
            method: 'POST',
            url: '/api/form_data',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
            .then(function (response) {
                const {data = {}} = response;
                const {
                    error = true,
                    id,
                    msg,
                } = data;
                if (!error) {
                    _this.setState({
                        formSended: {
                            ..._this.state.formSended,
                            bool: true,
                            number: id,
                        },
                    });
                } else {
                    _this.setState({
                        formSended: {
                            ..._this.state.formSended,
                            error: msg,
                        },
                    });
                }
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


        const {targetID = "form submit"} = this.props;
        triggerTarget(targetID);
    };

    onDrop(files) {
        if (files.length === 0) {
            return
        }
        files.map((file) => this.setState({files: [...this.state.files, file]}))
    }

    removeFile(index) {
        this.setState({files: [...this.state.files.slice(0, index), ...this.state.files.slice(index + 1, this.state.files.length)]});
    }

    showFullForm = () => {
        this.setState({Extended: !this.state.Extended})
    }

    handleWork = (e) => {
        console.log(e)
        console.log(this)
        this.setState({worktype: e.value})
    }

    renderForm = () => {
        if (this.props.fields === undefined) {
            console.log("warning: form has no fields");
            return "";
        }
        const {fields} = this.props
        return fields.map((field, index) => {
            let rlabel = ""
            if (field.required) {
                rlabel = <span title="Обязательное поле">*</span>
            }
            field.rlabel = rlabel
            field.id = 'field-' + index + '-' + field.name
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
        })
    };

    nptText(field) {
        return <div className="block-form__item"
                    key={field.id}
                    style={{
                        opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                        maxHeight: field.required ? '1000px' : (this.state.Extended ? "1000px" : "0"),
                        visibility: field.required ? "visible" : (this.state.Extended ? "visible" : "hidden"),
                    }}>
            <label htmlFor={field.id}>{field.label}{field.rlabel}</label>
            <input type={field.type}
                   name=""
                   id={field.id}
                   placeholder={field.placeholder}
                   required={field.required}
                   value={this.state[field.name]}
                   onChange={(e) => this.setState({[field.name]: e.target.value})}/>
        </div>
    }

    nptDate(field) {
        return (
            <div className="block-form__item"
                 key={field.id}
                 style={{
                     opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                     maxHeight: field.required ? '1000px' : (this.state.Extended ? '1000px' : '0'),
                     visibility: field.required
                         ? 'visible'
                         : (this.state.Extended
                             ? 'visible'
                             : 'hidden'),
                 }}>
                <label htmlFor={field.id}>{field.label}{field.rlabel}</label>

                <DatePicker
                    placeholder={field.placeholder}
                    value={this.state[field.name]}
                    onDayChange={(value) => this.setState({[field.name]: value})}
                />

                {/*<input
                    type={field.type}
                    name=""
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={this.state[field.name]}
                    onChange={(e) => this.setState({ [field.name]: e.target.value })}
                />*/}
            </div>
        );
    }

    nptTextarea(field) {
        return <div className="block-form__item textarea"
                    key={field.id}
                    style={{
                        opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                        maxHeight: field.required ? '1000px' : (this.state.Extended ? "1000px" : "0"),
                        visibility: field.required ? "visible" : (this.state.Extended ? "visible" : "hidden"),
                    }}>
            <label htmlFor={field.id}>{field.label}{field.rlabel}</label>
            <textarea type={field.type}
                      name=""
                      id={field.id}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={this.state[field.name]}
                      onChange={(e) => this.setState({[field.name]: e.target.value})}/>
        </div>
    }

    nptDropDown(field) {
        return <div className="block-form__item"
                    key={field.id}
                    style={{
                        opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                        maxHeight: field.required ? '1000px' : (this.state.Extended ? "1000px" : "0"),
                        visibility: field.required ? "visible" : (this.state.Extended ? "visible" : "hidden"),
                    }}>
            <label htmlFor={field.id}>{field.label}{field.rlabel}</label>
            <Dropdown
                onChange={(e) => this.setState({[field.name]: e})}
                value={this.state.worktype.label}
                options={field.options}
            />
        </div>
    }


    nptFile(field) {
        return <div className="block-form__item"
                    key={field.id}
                    style={{
                        opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                        maxHeight: field.required ? '1000px' : (this.state.Extended ? "1000px" : "0"),
                        visibility: field.required ? "visible" : (this.state.Extended ? "visible" : "hidden"),
                        height: "auto",
                    }}>

            <div className="dropzone" style={{fontSize: '14px'}}>
                <Dropzone
                    onDrop={this.onDrop.bind(this)}
                    multiple={true}>
                    <a>Добавить файл</a>
                </Dropzone>
            </div>

            <ul>
                {
                    this.state.files.map((f, i) => <li style={{fontSize: '14px', display: 'flex', marginBottom: '5px'}} key={i}>{f.name}
                        <FontAwesomeIcon icon={close} className="block-form__close" onClick={() => this.removeFile(i)}/>
                    </li>)
                }
            </ul>
        </div>
    }

    render() {
        let {title, buttonLabel, redForm} = this.props;
        if (buttonLabel === undefined || buttonLabel === "") {
            buttonLabel = "Заказать работу"
        }
        if (!this.state.formSended.bool) {
            return (
                <section className={`block-form ${redForm ? 'form-red' : ''}`}>
                    <a name="form" id="form" style={{display: "block", marginTop: "-3em", height: "3em", width: "1px"}}/>
                    <h2 className="block-form__title">{title}</h2>
                    <form onSubmit={this.handleSubmit} className="block-form__form">
                        {this.renderForm()}
                        <a className="block-form__more-info"
                           onClick={() => this.showFullForm()}>
                            {this.state.Extended ? 'Cкрыть дополнительные поля' : 'Дополнительная информация'}
                        </a>
                        <div style={{display: 'flex', justifyContent: 'center', margin: '0.75em'}}>
                            <Recaptcha
                                ref="recaptcha"
                                onChange={this.verifyCallback}
                                sitekey="6LdEPVcUAAAAADLIyn6B2QGmxCGxED0Os2ElIwWS"
                            />
                        </div>
                        <span className="block-form__agree">Отправляя эти данные, я принимаю <Link href="/politika-konfidentsialnosti"><a>Политику конфиденциальности</a></Link></span>
                        <button type="submit" className="block-form__btn">{buttonLabel}</button>
                    </form>
                </section>
            )
        } else {
            return (
                <div className="block-form" style={{border: 'none'}}>
                    <img width="100%" src={require('static/images/fox-logo.png')}/>
                    <p className="block-text__par">{this.state.formSended.number ? `Номер заявки: ${this.state.formSended.number}` : ''}</p>
                </div>
            )
        }
    }
}

export default OrderForm;