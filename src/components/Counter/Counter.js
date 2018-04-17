import React, { Component } from 'react';
import {store} from '../../store';
import { INCREASE, DECREASE } from '../../reducers/actiontypes';

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
      number: store.getState().counter.number
    }
  }
  componentWillMount() {
    // 组件加载时订阅发布；
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().counter.number
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
