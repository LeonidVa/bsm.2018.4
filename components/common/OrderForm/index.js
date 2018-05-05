import Link from 'next/link';
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import close from '@fortawesome/fontawesome-free-solid/faWindowClose';
import Dropdown from 'react-dropdown'
import Recaptcha from "react-google-recaptcha";


import axios from 'axios';


/* fields are stored in /components/config/formConfig.js */
class OrderForm extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        theme: '',
        worktype: {label: 'Укажите тип работы', value: ''},
        discipline: '',
        deadline: '',
        size: '',
        topic: '',
        files: [],
        fileName: 'Добавить файл',
        Extended: false,
        verified: false,
        formSended: {bool: false, number: '', error: false}
    }
    verifyCallback = (value) => {
        if (value) {
            this.setState({verified: true})
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const { name, phone, email, theme, worktype, discipline, deadline, size, topic, files, fileName, Extended, verified} = this.state
        if (!this.state.verified) {
            window.alert('Пожалуйста, пройдите каптчу')
            return
        }
        axios.post('/api/form_data', { name, phone, email, theme, worktype: worktype.value, discipline, deadline, size, topic, files, fileName, Extended, verified})
             .then(res => this.setState({ formSended: { bool: true, number: res.data.id, error: false } }))
             .catch(err => this.setState({ formSended: { bool: true, number: '', error: err } }))
        

    }

    onDrop(files) {
        const that = this;
        const file = files[0]
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            //console.log(reader.result.split(',')[1])
            that.setState({files: [...that.state.files, {url: reader.result.split(',')[1], name: file.name, type: file.type}]})
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
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
        const {formConfig} = this.props
        return formConfig.map((field, index) => {
            let rlabel = ""
            if (field.required) {
                rlabel = <span title="Обязательное поле">*</span>
            }
            field.id = 'field-' + index + '-' + field.name
            if (field.name === 'file') {
                return (
                    <div className="block-form__item"
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
                )
            } else {
                if (field.type === 'dropdown') {
                    return (
                        <div className="block-form__item"
                             key={field.id}
                             style={{
                                 opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                                 maxHeight: field.required ? '1000px' : (this.state.Extended ? "1000px" : "0"),
                                 visibility: field.required ? "visible" : (this.state.Extended ? "visible" : "hidden"),
                             }}>
                            <label htmlFor={field.id}>{field.label}{rlabel}</label>
                            <Dropdown
                                onChange={(e) => this.setState({[field.name]: e})}
                                value={this.state.worktype.label}
                                options={field.options}
                            />
                        </div>
                    )
                } else {
                    return (
                        <div className="block-form__item"
                             key={field.id}
                             style={{
                                 opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                                 maxHeight: field.required ? '1000px' : (this.state.Extended ? "1000px" : "0"),
                                 visibility: field.required ? "visible" : (this.state.Extended ? "visible" : "hidden"),
                             }}>
                            <label htmlFor={field.id}>{field.label}{rlabel}</label>
                            <input type={field.type}
                                   name=""
                                   id={field.id}
                                   placeholder={field.placeholder}
                                   required={field.required}
                                   value={this.state[field.name]}
                                   onChange={(e) => this.setState({[field.name]: e.target.value})}/>
                        </div>
                    )
                }

            }
        })
    }

    render() {
        const {title, form2} = this.props
        if(!this.state.formSended.bool){
            return (
                <section className={`block-form ${form2 ? 'block-form2' : ''}`}>
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
                        {form2 ?
                            <button type="submit" className="block-form__btn">Узнать стоимость</button>
                            : <button type="submit" className="block-form__btn">Заказать работу</button>
                        }

                    </form>
                </section>
            )
        }else {
            return (
                <div className="block-form" style={{border: 'none'}}>
                    <img width="100%" src={require('img/form_sended.jpg') }/>
                    <p className="block-text__par">Номер заявки: {this.state.formSended.number}</p>
               
                </div>
            )
        }
    }
}

export default OrderForm;