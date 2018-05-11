import React, {Component} from 'react';
import './SaleModal.scss';

const lastExitSalePopupWas = 'LKjyGTFDd';

class SaleModal extends Component {

    state = {
        phone: '',
        show: false,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.show === true && nextProps.show !== prevState.show) {
            const lastWasShown = window.localStorage.getItem(lastExitSalePopupWas);
            const now = new Date().getTime();
            prevState.show = !(lastWasShown !== null && (Number(lastWasShown) + 10000) > now)
        }
        return prevState;
    }


    onClose() {
        this.setState({show: false});
        window.localStorage.setItem(lastExitSalePopupWas, new Date().getTime())
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        const {className, bonus, message, text} = this.props;
        return (
            // className - "modal-sale1" or "modal-sale2" or "modal-sale3" or "modal-sale4"
            <div id="modal_sale"
                 className={`modal-sale ${className}`}
                 style={{display: 'block'}}
                 onClick={() => this.onClose()}
            >
                <div className="modal-sale__body" onClick={(e) =>{console.log(e);e.stopPropagation();}}>
                    <div className="modal-sale__top">
                        <span className="percent">{bonus}</span>
                        <span className="top-text">{message}</span>
                    </div>
                    <p>{text}</p>
                    <form>
                        <input type="text"
                               name=""
                               id="form-phone"
                               placeholder="Ваш телефон"
                               required
                               value={this.state.phone}
                               onChange={(e) => this.setState({phone: e.target.value})}
                        />
                        <button type="submit">Заказать звонок</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SaleModal