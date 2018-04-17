import { ADD_TODO, DELETE_TODO } from '../reducers/actiontypes';
const initState = { list: [] };


let reducer = (state = initState, action) => {
  // 处理首次没有传递action的情况
  if (action === undefined) return state;

  switch (action.type) {
    case ADD_TODO:
      //redux要求 我们的状态具有不变性，每次都要返回一个新的对象，新的状态；
      return { list: [...state.list, action.text] };
    case DELETE_TODO:
      let list = state.list;
      list.splice(action.index, 1);
      // 
      return { list: [...list] };
    default:
      return state;
  }
  return state;
}

export default reducer;