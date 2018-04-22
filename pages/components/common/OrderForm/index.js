import Link from 'next/link';
import React, { Component } from 'react';
import axios from 'axios';

class OrderForm extends Component{
    state = {
        name: '',
        tel: '',
        email: '',
        work: '',
        subject: '',
        topic: '',
        file: '',
        fileName: 'Добавить файл',
        fieldOpacity: 0,
        fieldHeight: 0
    }
    handleSubmit = (e) => {
        e.preventDefault()
   
        axios.post('/api/form_data', this.state)
    }

    handleFile = (e) => {
        //console.log(e.target.files[0], 'handleFile')
        const that = this;

        const file = e.target.files[0]
        const reader  = new FileReader();
        reader.addEventListener("load", function () {
            //console.log(reader.result.split(',')[1])

            that.setState({file:[reader.result.split(',')[1], file.name, file.type], fileName: file.name});
        }, false);

        if(file){
            reader.readAsDataURL(file);
        }

    }

    showFullForm = () => {  
        const { fieldOpacity, fieldHeight } = this.state
        this.setState({ fieldOpacity: fieldOpacity===0 ? 1 : 0, fieldHeight: fieldHeight===0 ? '100px' : 0})
    }

    renderForm = () => {
        const { formConfig } = this.props
        return formConfig.map((field)=>{
            if(field.name !== 'file'){
                return(
                        <div className="block-form__item" 
                             key={field.id}
                             style={{
                                    opacity: field.required ? 1 : this.state.fieldOpacity,
                                    maxHeight: field.required ? '100px' : this.state.fieldHeight,
                                    // display: !field.required && !this.state.fieldOpacity ? 'none' : 'block'
                                 }}>
                            <label htmlFor={field.id}>{field.label}</label>
                            <input type={field.type} 
                                name="" 
                                id={field.id} 
                                placeholder={field.placeholder} 
                                required={field.required} 
                                value={this.state[field.name]}
                                onChange={(e)=>this.setState({[field.name]: e.target.value})}/>
                        </div>
                )
            }else{
                return(
                     <div className="block-form__item" 
                          key={field.id}
                          style={{ 
                              opacity: field.required ? 1 : this.state.fieldOpacity,
                              maxHeight: field.required ? '100px' : this.state.fieldHeight,
                            //   display: !field.required && !this.state.fieldOpacity ? 'none' : 'block'
                           }}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input onClick={()=>this.inputfile.click()}
                               placeholder={this.state.fileName}

                        />
                        <input type={field.type} 
                               name="" 
                               id={field.id}    
                               required={field.required} 
                               onChange={ (e)=>this.handleFile(e)} 
                               className="block-form__item__file"
                               ref={(input)=>this.inputfile = input}/>
                    </div>
                )
            }
        })
    }
    render(){
        const { title, form2 } = this.props
        return(
            <section className={`block-form ${form2 ? 'block-form2' : ''}`}>
                <h2 className="block-form__title">{title}</h2>
                <form onSubmit={this.handleSubmit} className="block-form__form">
                    {this.renderForm()}
                    <a className="block-form__more-info"
                       onClick={()=>this.showFullForm()}>
                        { this.state.fieldOpacity ? 'Cкрыть дополнительные поля' : 'Дополнительная информация' }
                    </a>
                    { form2 ? <button type="submit" className="block-form__btn">Узнать стоимость</button>
                              :
                              <button type="submit" className="block-form__btn">Заказать работу</button> }
			    </form>
		</section>
        )
    }
}

export default OrderForm;