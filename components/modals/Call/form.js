import { BaseForm, connect } from 'components/common/forms/BaseForm'
import stat from 'utils/analytics';
import{
  BlockFormItem,
  Label,
  Input,
  TextArea,
  BlockFormBtn
}from "./style.js"

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
                <BlockFormItem className="block-form__item">
                    <Label htmlFor="form-name">Имя*</Label>
                    <Input type="text"
                        aria-label="Ваше имя"
                        id="form-name"
                        placeholder="Ваше имя"
                        required
                        value={this.props.form.name}
                        onChange={(e) => this.saveData({name: e.target.value})}
                    />
                </BlockFormItem>
                <BlockFormItem className="block-form__item">
                    <Label htmlFor="form-phone">Телефон*</Label>
                    <Input type="text"
                        aria-label="Ваш телефон"
                        id="form-phone"
                        placeholder="Ваш телефон"
                        required
                        value={this.props.form.phone}
                        onChange={(e) => this.saveData({phone: e.target.value})}/>
                </BlockFormItem>
                <BlockFormItem className="block-form__item textarea" style={{display: this.props.question ? 'block' : 'none'}}>
                    <Label htmlFor="form-phone">Вопрос</Label>
                    <TextArea
                        aria-label="Ваш вопрос"
                        placeholder="Ваш вопрос"
                        value={this.props.form.comment}
                        onChange={(e) => this.saveData({comment: e.target.value})}
                    />
                </BlockFormItem>
                <BlockFormBtn
                  type="submit"
                  disabled={this.props.spinner}
                  className="block-form__btn"
                  onClick={() => stat.triggerTarget.phoneClicked()}
                >
                  Позвоните мне!
                </BlockFormBtn>
            </form>
        );
    }
}

export default connect(Form);