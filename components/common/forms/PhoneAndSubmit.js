import { BaseForm, connect } from 'components/common/forms/BaseForm'

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
      <form onSubmit={this.handleSubmit(this.successCallBack)}>
        <input type="text"
          placeholder={this.props.placeholder}
          required
          value={this.props.form.phone}
          onChange={(e) => this.saveData({phone: e.target.value})}
        />
          <button
            disabled={this.props.spinner}
            type="submit"
          >
            {this.props.submitLabel}
          </button>
      </form>
    )
  }
}


export default connect(PhoneAndSubmit);
