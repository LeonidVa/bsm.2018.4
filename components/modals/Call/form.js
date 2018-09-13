import BaseForm from 'components/common/forms/BaseForm'

class Form extends BaseForm {
    constructor(props) {
        /* passing formType and targetID to BaseForm */
        super(props)
    }

    render() {
        return (
            <form className="block-form__form" onSubmit={this.handleSubmit}>
                <div className="block-form__item">
                    <label htmlFor="form-name">Имя*</label>
                    <input type="text"
                           name=""
                           id="form-name"
                           placeholder="Ваше имя"
                           required
                           value={this.state.data.name}
                           onChange={(e) => this.saveData({name: e.target.value})}
                    />
                </div>
                <div className="block-form__item">
                    <label htmlFor="form-phone">Телефон*</label>
                    <input type="text"
                           name=""
                           id="form-phone"
                           placeholder="Ваш телефон"
                           required
                           value={this.state.data.phone}
                           onChange={(e) => this.saveData({phone: e.target.value})}/>
                </div>
                <div className="block-form__item textarea" style={{display: this.props.question ? 'block' : 'none'}}>
                    <label htmlFor="form-phone">Вопрос</label>
                    <textarea
                        type="textarea"
                        name=""
                        placeholder="Ваш вопрос"
                        value={this.state.data.comment}
                        onChange={(e) => this.saveData({comment: e.target.value})}
                    />
                </div>

                <button type="submit" className="block-form__btn">Позвоните мне!</button>
            </form>
        );
    }
}

export default Form