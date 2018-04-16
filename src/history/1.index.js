import { createStore } from './redux';
import $ from 'jquery';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// dom元素
$('document.body').append(
  `<p id='counter'></p>
  <button id='increaseBtn'>+</button>
  <button id='decreaseBtn'>-</button>
  `
);

// state是状态数，可以是任意结构
// action 是一个纯对象{type:'INCREASE', amount:2}，{type:'DECREASE',amount:2}。 type属性是必须的，其它属性可以任意增加。因为是通过type来进行控制的。
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

// 实现计算器；
// { getState, subscribe, dispatch }
let store = createStore(reducer);

console.log(store.getState());

// 渲染视图；
let render = () => {
  $('#counter').html(store.getState().number);
}

// 当仓库里的state发生变化的时候，会重新执行render方法，读取最新的状态，并更新视图；
let unsubscribe = store.subscribe(render);

setTimeout(() => {
  unsubscribe();//移除监听函数；取消订阅；
}, 5000);

$('#increaseBtn').click(() => {
  store.dispatch({ type: INCREASE, amount: 3 })
});

$('#decreaseBtn').click(() => {
  store.dispatch({ type: DECREASE, amount: 2 })
});

render();