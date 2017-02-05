import { combineReducers } from 'redux';
import bikes from './bikes';
import ui from './ui';

const rootReducer = combineReducers({
  bikes,
  ui,
});

export default rootReducer;
