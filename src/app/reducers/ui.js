import { createReducer } from 'redux-act';

import {
  updateUiOK,
  loadingTag,
} from '../actions/ui';

/**
 * Returns the object used as the initial state.
 * This is the state object used everytime user enters results page.
 * @return {Object} Initial state object.
 */
function getInitialState() {
  return {
    loading: false,
  };
}

// This is Redux reducer that was created with the help of `redux-act`.
// If this seems magical, read more to understand how it works: https://github.com/pauldijou/redux-act
const uiReducer = createReducer({
  [updateUiOK]: (state, action) => ({...state, ...action}),
  [loadingTag]: (state, action) => Object.assign({}, state, {loading:action}),
}, getInitialState());

export default uiReducer;
