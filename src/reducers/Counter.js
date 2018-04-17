import { INCREASE, DECREASE } from './actiontypes';

// Action Creators创建action的函数；转发action给store,更新state tree

let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) return state;

  switch (action.type) {
    case INCREASE:
      return { number: state.number + action.amount };
      break;
    case DECREASE:
      return { number: state.number - action.amount };
      break;
    default:
      return state;
  }
};

export default reducer;