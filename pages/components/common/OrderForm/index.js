import Link from 'next/link';
import React, { Component } from 'react';


class OrderForm extends Component{
    state = {
        name: '',
        tel: '',
        email: '',
        work: '',
        subject: '',
        topic: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    renderForm = () => {
        const { formConfig } = this.props
        return formConfig.map((field)=>{

            return(
                <div className="block-form__item" key={field.id}>
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
        })
    }
    render(){
        const { title, form2 } = this.props
        return(
            <section className={`block-form ${form2 ? 'block-form2' : ''}`}>
                <h2 className="block-form__title">{title}</h2>
                <form onSubmit={this.handleSubmit} className="block-form__form">
                    {this.renderForm()}
                    <Link href="/#" >        
                        <a className="block-form__more-info">Дополнительная информация</a>
                    </Link>
                    { form2 ? <button type="submit" className="block-form__btn">Узнать стоимость</button>
                              :
                              <button type="submit" className="block-form__btn">Заказать работу</button> }
			    </form>
		</section>
        )
    }
}

export default OrderForm;