import BaseForm from 'components/common/forms/BaseForm'

class PhoneAndSubmit extends BaseForm {
    constructor(props) {
        /* passing formType and targetID to BaseForm */
        super(props)
    }

  successCallBack = () => {
      const { toggleNotify, closeNotifyAfterTimeOut } = this.props;
      toggleNotify();
      closeNotifyAfterTimeOut();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit(this.successCallBack)}>
                <input type="text"
                       placeholder={this.props.placeholder}
                       required
                       value={this.state.data.phone}
                       onChange={(e) => this.saveData({phone: e.target.value})}
                />
                <button type="submit">{this.props.submitLabel}</button>
            </form>
        )
    }
}


export default PhoneAndSubmit
