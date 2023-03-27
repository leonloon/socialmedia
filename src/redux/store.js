import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import combineReducer from './reducers';

const initialState = {};
const middleware = [thunk];

export default createStore(
  combineReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);
