import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import Counter from './components/Counter/Counter3';
import counter from './reducers/Counter';
import Todo from './components/Todo/Todo';

// 组件内部实现订阅；

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
);
