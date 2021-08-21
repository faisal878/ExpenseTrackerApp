import { createStore } from 'redux';
import useReducer from './Reducer/useReducer';
export const Store = createStore(useReducer);

export default Store



