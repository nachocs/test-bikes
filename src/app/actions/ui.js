import { createAction } from 'redux-act';

export const updateUiOK = createAction('updateUiOK');

export const updateUi = (value) =>
  (dispatch) => dispatch(updateUiOK(value));

export const loadingTag = createAction('loading');
let loadingTimeout;

export const loading = (value) => (dispatch) => {
  dispatch(loadingTag(value));
  if (loadingTimeout){
    clearTimeout(loadingTimeout);
  }
  loadingTimeout = setTimeout(()=>{
    dispatch(loadingTag(false));
  }, 2000);
};
