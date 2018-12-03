import { combineReducers } from 'redux';
import data from './data';
import ui from './ui';

const rootReducer = combineReducers({
  data,
  ui,
});

export default rootReducer;
