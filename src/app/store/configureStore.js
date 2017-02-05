import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
// import createLogger from 'redux-logger';
import { syncHistory } from 'react-router-redux';
import history from '../history';

const reduxRouterMiddleware = syncHistory(history);

const middlewares = [thunk, reduxRouterMiddleware];

// if(process.env.NODE_ENV !== 'production') {
  // const logger = createLogger();
  // middlewares.push(logger);
// }

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares,
)(createStore);



export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
