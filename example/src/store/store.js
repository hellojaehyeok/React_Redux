import { createStore } from 'redux';
import combineReducer from './combineReducer';

// createStore안에 reducer를 넣는다.
export const store = createStore(combineReducer);