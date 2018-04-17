import { createStore } from 'redux';
import counter from './reducers/Counter';
import todo from './reducers/Todo';
// 一个应用只能有一个store 一个state tree
/**
 * 旧状态 {number:0 } {list:[]}
 * 新状态 {counter:{number:0}, todo:{list:[]}}
 */

const initState = { counter: { number: 0 }, todo: { list: [] } };
// 合并多个reducers
let combineReducers = (reducers) =>
  (state = initState, action) => {
    // 返回一个reducer
    let newState = {};
    if(action === undefined) return state;
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  }
let reducer = combineReducers({
  counter,
  todo
});

let store = createStore(reducer);
export { store };