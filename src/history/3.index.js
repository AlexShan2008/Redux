import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Counter from './components/Counter/Counter3';
import { createStore } from 'redux';
import counter from './reducers/Counter';
import Todo from './components/Todo/Todo';
import Provider from './Provider';

let store = createStore(counter);



// 组件内部实现订阅；

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
);
