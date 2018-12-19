import { createAction, handleActions } from 'redux-actions';

export const showSpinner = createAction('spinner/SHOW');
export const hideSpinner = createAction('spinner/HIDE');

export default handleActions({
  [showSpinner]: () => true,
  [hideSpinner]: () => false,
}, false);