import { BaseForm, connect } from 'components/common/forms/BaseForm'
import stat from 'utils/analytics';

class Form extends BaseForm {
    constructor(props) {
        /* passing formType and targetID to BaseForm */
        super(props)
    }

    render() {
      // тут уже актуальный targetID
      // console.log("FORM TARGET ID", this.props.targetID);
        return (
            <form className="block-form__form" onSubmit={this.handleSubmit()}>
                <div className="block-form__item">
                    <label htmlFor="form-name">Имя*</label>
                    <input type="text"
                           id="form-name"
                           placeholder="Ваше имя"
                           required
                           value={this.props.form.name}
                           onChange={(e) => this.saveData({name: e.target.value})}
                    />
                </div>
                <div className="block-form__item">
                    <label htmlFor="form-phone">Телефон*</label>
                    <input type="text"
                           id="form-phone"
                           placeholder="Ваш телефон"
                           required
                           value={this.props.form.phone}
                           onChange={(e) => this.saveData({phone: e.target.value})}/>
                </div>
                <div className="block-form__item textarea" style={{display: this.props.question ? 'block' : 'none'}}>
                    <label htmlFor="form-phone">Вопрос</label>
                    <textarea
                        placeholder="Ваш вопрос"
                        value={this.props.form.comment}
                        onChange={(e) => this.saveData({comment: e.target.value})}
                    />
                </div>

                <button type="submit" className="block-form__btn" onClick={() => stat.triggerTarget.phoneClicked()}>Позвоните мне!</button>
            </form>
        );
    }
}

export default connect(Form);