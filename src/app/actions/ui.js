import { createAction } from 'redux-act';

export const updateUiOK = createAction('updateUiOK');

export const updateUi = (value) =>
  (dispatch) => {
    dispatch(updateUiOK(value));
    if(value.order){
      localStorage.setItem('order', value.order);
    }
    if(value.listType){
      localStorage.setItem('listType', value.listType);
    }
  };

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
