import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers";
import rootSaga from '../store/sagas/index'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware)

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;