import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';
import getConfig from 'next/config';

const config = getConfig();

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
  await axios.post(url, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const changeField = createAction('form/CHANGE_FIELD');

export default handleActions({
  [changeField]: (state, action) => ({ ...action.payload, })
}, initialState);
