import { BaseForm, connect } from 'components/common/forms/BaseForm'
import {
  FormSubmit,
  Button,
  Input
} from "./style.js"

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
      <FormSubmit onSubmit={this.handleSubmit(this.successCallBack)} formfontsize={this.props.formfontsize} >
        <Input type="text"
          placeholder={this.props.placeholder}
          required
          value={this.props.form.phone}
          onChange={(e) => this.saveData({phone: e.target.value})}
          inputfontsize={this.props.inputfontsize}
          inputmarginright={this.props.inputmarginright}
          inputwidth={this.props.inputwidth}
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
