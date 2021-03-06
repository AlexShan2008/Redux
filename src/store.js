import { createStore } from 'redux';
import combineReducers from './combineReducers';

import counter from './reducers/Counter';
import todo from './reducers/Todo';
// 一个应用只能有一个store 一个state tree

let reducer = combineReducers({
  counter,
  todo
});

// state {counter:{number:0}, todo:{list:[]}}
let store = createStore(counter);

export default store;