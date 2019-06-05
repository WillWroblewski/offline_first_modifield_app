import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk'

import rootReducer from "./reducers";

const middlewares = [];
middlewares.push(thunk)

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;