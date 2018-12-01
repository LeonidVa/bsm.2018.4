import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';
import getConfig from 'next/config';

const config = getConfig();

function getSource() {
  if (config.publicRuntimeConfig.analytics.source) {
    return config.publicRuntimeConfig.analytics.source;
  }
  return "unknown";
}

let url = "https://besmarter.ru/api/form_data";
if (config.publicRuntimeConfig.runtime.development) {
  url = 'http://localhost:3001/api/form_data'
}

const initialState = {
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
};

export const sendForm = (form) => async () => {
  let formData = new FormData();
  formData.append("brand", 'besmarter');
  formData.append("form", 'default formType');
  formData.append("source", getSource());
  formData.append("name", form.name);
  formData.append("phone", form.phone);
  formData.append("email", form.email);
  formData.append("theme", form.theme);
  formData.append("worktype", form.worktype.value);
  formData.append("discipline", form.discipline);
  formData.append("deadline", form.deadline);
  formData.append("size", form.size);
  formData.append("comment", form.comment);
  form.files.forEach(file => {
    formData.append("files", file);
  });
  formData.append("verified", form.verified);
  await axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const changeField = createAction('form/CHANGE_FIELD');

export default handleActions({
  [changeField]: (state, action) => ({ ...action.payload, })
}, initialState);
