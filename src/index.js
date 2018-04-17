import { createStore } from 'redux';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';

// 组件内部实现订阅；

render(
  <div>
    <Counter/>
    <Todo />
  </div>,
  document.querySelector('#root')
);
