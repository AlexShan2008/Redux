import { createStore } from 'redux';
import counter from './reducers/Counter';
import todo from './reducers/Todo';
import combineReducers from './combineReducers';
// 一个应用只能有一个store 一个state tree

let reducer = combineReducers({
  counter,
  todo
});

// state {counter:{number:0}, todo:{list:[]}}
let store = createStore(reducer);
export { store };