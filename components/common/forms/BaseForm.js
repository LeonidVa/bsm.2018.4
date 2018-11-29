import React, {Component} from "react";
import stat from "utils/analytics";
import axios from "axios";
import getConfig from 'next/config';
import {toast} from "react-toastify"
import { connect as reduxConnect } from 'react-redux'
import { changeField } from '../../../redux/data/form';

const config = getConfig();

export class BaseForm extends Component {
  constructor(props) {
    super(props);
    const {formType = "default formType" } = props;
    this.state = {
      formType: formType,
      formSent: {bool: false, number: "", error: false}
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
    const _this = this;
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
    axios({
      method: "POST",
      url: url,
      data: formData,
      config: {headers: {"Content-Type": "multipart/form-data"}}
    })
      .then(function (response) {
        const {data = {}} = response;
        const {error = false, id, msg} = data;
        if (error) {
          /* ошибка со стороны сервера */
          _this.setState({
            formSent: {
              ..._this.state.formSent,
              error: msg
            }
          });
        } else {
          /* ушло хорошо */
          _this.setState({
            formSent: {
              ..._this.state.formSent,
              bool: true,
              number: id
            }
          }, _this.onSent);
          successCallBack && successCallBack();
        }
        _this.clearFormData();
      })
      .catch(function (error) {
        //handle error
        if (error.response === undefined) {
          // not an axios error
          console.log('not an axios error, here is dump:', error);
          return;
        }
        console.log('catch and toast', error);
        /*catch and toast TypeError: t is not a function
    at l (commons.85fc1ee1e428f389dabb.js:formatted:7842)
    at commons.85fc1ee1e428f389dabb.js:formatted:6485*/
        toast.error(<span>Ой! Что-то пошло не так и заявка не отправилась. Пожалуйста, позвоните нам по <a className="" href='tel:+74957724090'>+7 495 772 40 90.</a></span>, {
          position: toast.POSITION.TOP_RIGHT
        });
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
    return (<div>Do not use me like this. Read the manual.</div>);
  }

  getSource() {
    if (config.publicRuntimeConfig.analytics.source) {
      return config.publicRuntimeConfig.analytics.source;
    }
    return "unknown";
  }
}

const mapStateToProps = ({ data: { form } }) => ({ form });
const mapDispatchToProps = {
  onChangeFieldAction: field => changeField(field),
};

export function connect(Component) {
  return reduxConnect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}

export default connect(BaseForm)