import React, { Component } from 'react';
import {createStore} from 'redux';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

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

let store = createStore(reducer);

// Action Creators创建action的函数；转发action给store,更新state tree
let increase = (amount) => (
  { type: INCREASE, amount }
)

// action creater创建action的函数；
let decrease = (amount) => (
  { type: DECREASE, amount }
)

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: store.getState().number
    }
  }
  componentWillMount() {
    // 组件加载时订阅发布；
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().number
      })
    })
  }
  componentWillUnmount() {
    // 组件将卸载时取消监听；
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch(increase(2))}>+</button>
        <button onClick={() => store.dispatch(decrease(1))}>-</button>
      </div>
    )
  }
}
