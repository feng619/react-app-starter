// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import fortestReducer from './fortest';

const rootReducer = combineReducers({
  fortest: fortestReducer,
  router: routerReducer,
});

export default rootReducer;
