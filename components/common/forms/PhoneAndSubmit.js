import { BaseForm, connect } from 'components/common/forms/BaseForm'
import styled from 'styled-components'

const Input = styled.input`
  margin-right: 3em;
  font-size: 1rem;
  width: 14rem;
  height: 3rem;
  padding: 0 .67em;
  color: #4a4a4a;
  border: none;
  &:focus {
    border: 1px solid #f4511e;
  }
  @media (max-width: 660px) {
    padding: 0 .33em;
    font-size: 0.75em;
    width: 12rem;
    margin-bottom: 1em;
  }
`;

const Button = styled.button`
 font-size: .56em;
            width: 12.28em;
            height: 2.78em;
            color: #fff;
            border: none;
            background-color: #f4511e;
            cursor: pointer;
            transition: all .4s;
            &:hover {
                background-color: #922d0e;
            }
`;

const FormSubmit = styled.form`
  display: flex;
  font-size: 1em;
  width: 14.9em;
  @media (max-width: 660px) {
      flex-direction: column;
  }
     
`;


class PhoneAndSubmit extends BaseForm {
  constructor(props) {
    super(props);
  }

  successCallBack = () => {
    const { closeNotifyAfterTimeOut } = this.props;
    closeNotifyAfterTimeOut();
  };

  render() {
    return (
      <FormSubmit onSubmit={this.handleSubmit(this.successCallBack)}>
        <Input type="text"
          placeholder={this.props.placeholder}
          required
          value={this.props.form.phone}
          onChange={(e) => this.saveData({phone: e.target.value})}
        />
        <Button
          disabled={this.props.spinner}
          type="submit"
        >
          {this.props.submitLabel}
        </Button>
      </FormSubmit>
    )
  }
}


export default connect(PhoneAndSubmit);
