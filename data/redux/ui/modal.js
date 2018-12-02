import { createAction, handleActions } from 'redux-actions';

export const showModal = createAction('modal/SHOW');
export const hideModal = createAction('modal/HIDE');

export default handleActions({
  [showModal]: () => true,
  [hideModal]: () => false,
}, false);
