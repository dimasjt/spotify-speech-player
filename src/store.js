import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f => f)
);

const middleware = applyMiddleware(promise, logger, thunk);

const store = createStore(rootReducer, enhancers, middleware);

export default store;
