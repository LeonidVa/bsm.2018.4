import { combineReducers } from 'redux';

import modal from './modal';
import spinner from './spinner';

export default combineReducers({
  modal,
  spinner
});
