import React, { Component } from 'react';
import './SaleModal.scss';

class SaleModal extends Component {

    state = {
        phone: '',
        display: 'none'
    }
    handleForm = (e) => {
        const { phone } = this.state;
        e.preventDefault()

        console.log('позвоните мне ' + phone)

        this.props.closeModal()
    }

    handleClickOutside() {
       //console.log('click outside')
    }
    
    componentWillReceiveProps = (nextProps, nextState) => {

        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open })
        }
    }

    handleClickOutside = (event) => {
        if (event.target.id === 'modal_sale') {
            this.props.closeSaleModal()
        }
    }

    render() {
        const { phone, display } = this.state;
        const { className, bonus, message, text} = this.props;
        return (
            // className - "modal-sale1" or "modal-sale2" or "modal-sale3" or "modal-sale4"
            <div id="modal_sale" 
                 className={`modal-sale ${className}`} 
                 style={{ display: display }}
                 onClick={this.handleClickOutside}>
                <div className="modal-sale__body">
                    
                    <div className="modal-sale__top">
                        <span className="percent">{bonus}</span>
                        <span className="top-text">
                            {message}
				        </span>
                    </div>
                    <p>
                        {text}
			        </p>
                    <form  onSubmit={this.handleForm}>
   
                            <input type="text"
                                name=""
                                id="form-phone"
                                placeholder="Ваш телефон"
                                required
                                value={phone}
                                onChange={(e) => this.setState({ phone: e.target.value })} />
     
                        <button type="submit" >Заказать звонок</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SaleModal