import Link from 'next/link';
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import close from '@fortawesome/fontawesome-free-solid/faWindowClose';
import Dropdown from 'react-dropdown'
import Recaptcha from "react-google-recaptcha";


import axios from 'axios';

class OrderForm extends Component {
    state = {
        name: '',
        tel: '',
        email: '',
        work: 'Укажите тип работы',
        subject: '',
        topic: '',
        files: [],
        fileName: 'Добавить файл',
        Extended: false,
        verified: false
    }
    verifyCallback = (value) => {
        if (value) {
            this.setState({verified: true})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.verified) {
            window.alert('Пожалуйста, пройдите каптчу')
            return
        }
        axios.post('/api/form_data', this.state)
        window.alert('заявка отправлена')
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
        this.setState({work: e.value})
    }

    renderForm = () => {
        const {formConfig} = this.props
        return formConfig.map((field) => {
            let rlabel = ""
            if (field.required) {
                rlabel = <span title="Обязательное поле">*</span>
            }
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
                if (field.name === 'work') {
                    return (
                        <div key={field.id}
                             style={{
                                 opacity: field.required ? 1 : (this.state.Extended ? 1 : 0),
                                 maxHeight: field.required ? '1000px' : (this.state.Extended ? "1000px" : "0"),
                                 visibility: field.required ? "visible" : (this.state.Extended ? "visible" : "hidden"),
                             }}>
                            <label htmlFor={field.id}>{field.label}</label>
                            <Dropdown
                                placeholder="form-field"
                                className="block-form__item"
                                value={this.state.work}
                                onChange={(e) => this.handleWork(e)}
                                options={[
                                    {value: "Дипломная работа", label: "Дипломная работа"},
                                    {value: "Дипломный проект", label: "Дипломный проект"},
                                    {value: "Магистерская диссертация", label: "Магистерская диссертация"},
                                    {value: "Диплом МВА", label: "Диплом МВА"},
                                    {value: "Кейс Мва", label: "Кейс Мва"},
                                    {value: "Курсовая работа теоретическая", label: "Курсовая работа теоретическая"},
                                    {value: "Курсовая работа практическая", label: "Курсовая работа практическая"},
                                    {value: "Курсовой проект", label: "Курсовой проект"},
                                    {value: "Доработка диплома", label: "Доработка диплома"},
                                    {value: "Доработка курсового", label: "Доработка курсового"},
                                    {value: "Отчёт по производственной практике", label: "Отчёт по производственной практике"},
                                    {value: "Отчет по преддипломной практике", label: "Отчет по преддипломной практике"},
                                    {value: "Реферат", label: "Реферат"},
                                    {value: "Контрольная работа", label: "Контрольная работа"},
                                    {value: "Решение задач", label: "Решение задач"},
                                    {value: "Аналитический отчет", label: "Аналитический отчет"},
                                    {value: "Статья", label: "Статья"},
                                    {value: "Тесты", label: "Тесты"},
                                    {value: "Ответы на вопросы", label: "Ответы на вопросы"},
                                    {value: "Онлайн тесты", label: "Онлайн тесты"},
                                    {value: "Эссе", label: "Эссе"},
                                    {value: "Бизнес план", label: "Бизнес план"},
                                    {value: "Перевод текста", label: "Перевод текста"},
                                    {value: "Материлы к защите", label: "Материлы к защите"},
                                    {value: "Отзыв", label: "Отзыв"},
                                    {value: "Рецензия", label: "Рецензия"},
                                    {value: "Аннотация", label: "Аннотация"},
                                    {value: "Иная работа", label: "Иная работа"},
                                    {value: "Чертежи", label: "Чертежи"},
                                    {value: "Асп реферат", label: "Асп реферат"},
                                    {value: "Диссертация", label: "Диссертация"},
                                    {value: "Докторская", label: "Докторская"},
                                    {value: "Cтатья ВАК", label: "Cтатья ВАК"},
                                    {value: "Презентация", label: "Презентация"},
                                    {value: "Отчет по практике", label: "Отчет по практике"},
                                    {value: "Речь/доклад", label: "Речь/доклад"},
                                    {value: "Слайды", label: "Слайды"},
                                    {value: "Раздаток", label: "Раздаток"},
                                    {value: "Плакаты А2, А3", label: "Плакаты А2, А3"},
                                    {value: "Титульный лист", label: "Титульный лист"},
                                    {value: "Последний лист", label: "Последний лист"},
                                    {value: "АП проверка", label: "АП проверка"},
                                    {value: "АП сертификат", label: "АП сертификат"},
                                    {value: "Шпаргалки", label: "Шпаргалки"},
                                    {value: "Корректура", label: "Корректура"}
                                ]}
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
    }
}

export default OrderForm;