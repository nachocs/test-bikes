import { createAction } from 'redux-act';

export const bikesObtained = createAction('bikesObtained - Sends bikes to the app state.');

export const getBikes = () =>
(dispatch) =>
  fetch('https://jujhar.com/bikes.json')
  .then((resp) => resp.json()) // Transform the data into json
  .then((res)=>
    dispatch(bikesObtained([...res.items]))
);
