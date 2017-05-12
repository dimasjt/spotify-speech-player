import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f => f)
);

const defaultState = {
  tracks: [],
  playing: {},
};

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
