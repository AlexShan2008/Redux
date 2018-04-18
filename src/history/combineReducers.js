// 合并多个reducers

/**
 * 旧状态 {number:0 } {list:[]}
 * 新状态 {counter:{number:0}, todo:{list:[]}}
 */

let combineReducers = (reducers) =>
  (state = {}, action) => {
    // 返回一个reducer
    let newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  }


export default combineReducers;