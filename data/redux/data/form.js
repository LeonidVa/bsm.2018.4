import { handleActions, createAction } from 'redux-actions';

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

export const changeField = createAction('form/CHANGE_FIELD');

export default handleActions({
  [changeField]: (state, action) => ({ ...action.payload, })
}, initialState);
