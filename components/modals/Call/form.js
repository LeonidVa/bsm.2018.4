import { BaseForm, connect } from 'components/common/forms/BaseForm'
import stat from 'utils/analytics';
import styled from 'styled-components';

const BlockFormItem = styled.div`
  height: 2.5em;
  transition: all .4s;
  &-flex {
    display: flex;
    justify-content: space-between;
  }
`;

const TextArea = styled.div`
  display: block;
  font-size: .44em;
  width: 100%;
  height: 7em;
  padding: 0 .31em;
  border-radius: 2px;
  background-color: #f5f5f5;
  border: solid 0.5px #dadada;
  resize: none;
  &:focus {
    border: 1px solid #f4511e;
  }
`;

const Input = styled.input`
  display: block;
  font-size: .44em;
  width: 100%;
  height: 3.21em;
  padding: 0 .31em;
  border-radius: 2px;
  background-color: #f5f5f5;
  border: solid 0.5px #dadada;
  &:focus {
    border: 1px solid #f4511e;
  }
`;

const Label = styled.label`
  line-height: 1.33em;
  font-size: .5em;
  color: #4a4a4a;
  display: block;
  margin-bottom: .16em;
`;

const BlockFormBtn = styled.button`
  font-size: .56em;
  display: block;
  margin: 1.33em auto 0;
  width: 11.38em;
  height: 2.78em;
  background-color: #f4511e;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all .4s;
  position: relative;
  z-index: 100;
  &:not(:disabled):hover {
    background-color: #922d0e;
  }
`;

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