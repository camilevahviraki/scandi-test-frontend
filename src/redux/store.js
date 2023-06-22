import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from './logger/logger';
import logger from './logger/thunk';
import getProductReducer from './getProductsReducer';
import addProductReducer from './addProductReducer';

const rootReducer = combineReducers({
  getProductReducer, addProductReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
