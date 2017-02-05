import { createReducer } from 'redux-act';

import {
  bikesObtained,
} from '../actions/bikes';

/**
 * Returns the object used as the initial state.
 * This is the state object used everytime user enters results page.
 * @return {Object} Initial state object.
 */
function getInitialState() {
  return [];
}

// This is Redux reducer that was created with the help of `redux-act`.
// If this seems magical, read more to understand how it works: https://github.com/pauldijou/redux-act
const bikesReducer = createReducer({
  [bikesObtained]: (state, action) => action,
}, getInitialState());

export default bikesReducer;
