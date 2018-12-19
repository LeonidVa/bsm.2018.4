import React, { Component } from 'react';
import stat from 'utils/analytics';
import axios from 'axios';
import getConfig from 'next/config';
import { connect as reduxConnect } from 'react-redux'

import { showModal } from '@redux/ui/modal';
import { hideSpinner, showSpinner } from '@redux/ui/spinner';
import { changeField } from '@redux/data/form';
const config = getConfig();

export class BaseForm extends Component {
  constructor(props) {
    super(props);
    const {formType = "default formType" } = props;
    this.state = {
      formType: formType,
      formSent: {bool: false, number: "", error: false},
    };
  }

  verifyCallback = value => {
    this.setState({ verified: value });
  };
  handleSubmit = (successCallBack, errorCallBack) => async e => {
    e.preventDefault();
    const {targetID = "form submit"} = this.props;
    stat.triggerTarget.formSubmit(targetID);
    let {
      name = "",
      phone = "",
      email = "",
      theme = "",
      worktype = "",
      discipline = "",
      deadline = "",
      size = "",
      comment = "",
      files = [],
      verified = false,
    } = this.props.form;
    const { formType = 'unknown' } = this.state;
    let formData = new FormData();
    formData.append("brand", "besmarter");
    formData.append("form", formType);
    formData.append("source", this.getSource());
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("theme", theme);
    formData.append("worktype", worktype.value);
    formData.append("discipline", discipline);
    formData.append("deadline", deadline);
    formData.append("size", size);
    formData.append("comment", comment);
    files.forEach(file => {
      formData.append("files", file);
    });
    formData.append("verified", verified);
    let url = "https://besmarter.ru/api/form_data";
    if (config.publicRuntimeConfig.runtime.development) {
      url = 'http://localhost:3001/api/form_data'
    }
    this.props.onShowSpinnerAction();
    axios({
      method: "POST",
      url: url,
      data: formData,
      config: {headers: {"Content-Type": "multipart/form-data"}}
    })
      .then(response => {
        const {data = {}} = response;
        const {error = false, id, msg} = data;
        if (error) {
          /* ошибка со стороны сервера */
          this.props.onShowModalAction();
          this.props.onHideSpinnerAction();
        } else {
          this.props.onHideSpinnerAction();
          /* ушло хорошо */
          this.setState({
            formSent: {
              ...this.state.formSent,
              bool: true,
              number: id
            }
          }, this.onSent);
          successCallBack && successCallBack();
        }
        this.clearFormData();
      })
      .catch(error => {
        if (error.response === undefined) {
          console.log('not an axios error, here is dump:', error);
        }
        this.props.onHideSpinnerAction();
        this.props.onShowModalAction();
        errorCallBack && errorCallBack();
      });
  };

  onSent() {
    console.log('BaseForm calls onSent');
    if (this.props.onSent) {
      this.props.onSent()
    }
  }

  saveData(changes) {
    let data = this.props.form;
    const { onChangeFieldAction } = this.props;
    Object.keys(changes).map((key) => {
      data[key] = changes[key]
    });
    onChangeFieldAction(data);
  }

  formDataLoad() {
    let data = localStorage.getItem('form data');
    if (data === undefined || data === null || data === "") {
      return this.props.form;
    }
    try {
      data = JSON.parse(data);
    } catch (e) {
      return this.props.form;
    }
    // put defaults to absent keys
    Object.keys(this.props.form).map((key) => {
      if (data[key] === undefined) {
        data[key] = this.props.form[key];
      }
    });
    data.files = [];
    return data;
  }

  formDataSave(data) {
    localStorage.setItem('form data', JSON.stringify(data));
  }

  componentDidMount() {
    let data = this.formDataLoad();
    this.setState({data});
    /* subscribe to localstorage changes*/
    window.addEventListener('storage', (e) => {
      if (e.key !== 'form data') {
        return true;
      }
      let data = JSON.parse(e.newValue);
      if (data === null) {
        data = {};
      }
      window.dispatchEvent(new CustomEvent('form data', {detail: data}));
    });
    window.addEventListener('form data', (e) => {
      this.setState({data: e.detail});
    });
  }

  clearFormData() {
    const { onChangeFieldAction } = this.props;
    onChangeFieldAction({
      name: '',
      phone: '',
      email: '',
      theme: '',
      worktype: {
        label: 'Укажите тип работы',
        value: '',
      },
      discipline: '',
      deadline: '',
      size: '',
      comment: '',
      files: [],
      fileName: '',
      verified: '',
    });
  }

  onDrop(files) {
    if (files.length === 0) {
      return;
    }
    const { onChangeFieldAction } = this.props;
    let data = this.props.form;
    files.map(file => {
      data.files.push(file);
    });
    onChangeFieldAction(data);
  }

  removeFile(index) {
    const { onChangeFieldAction } = this.props;
    let data = this.props.form;
    data.files.splice(index, 1);
    onChangeFieldAction(data);
  }

  render() {
    return (
      <div>Do not use me like this. Read the manual.</div>
    );
  }

  getSource() {
    if (config.publicRuntimeConfig.analytics.source) {
      return config.publicRuntimeConfig.analytics.source;
    }
    return "unknown";
  }
}

const mapStateToProps = ({data: { form }, ui: { spinner }}) => {
  return {
    form,
    spinner
  }
};
const mapDispatchToProps = {
  onChangeFieldAction: field => changeField(field),
  onShowModalAction: () => showModal(),
  onShowSpinnerAction: () => showSpinner(),
  onHideSpinnerAction: () => hideSpinner(),
};

export function connect(Component) {
  return reduxConnect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}

export default connect(BaseForm)