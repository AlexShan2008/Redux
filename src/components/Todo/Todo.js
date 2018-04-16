import React, { Component } from 'react';
import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

let reducer = (state = { list: [] }, action) => {
  // 处理首次没有传递action的情况
  if(action === undefined) return state;
  switch (action.type) {
    case ADD_TODO:
      //redux要求 我们的状态具有不变性，每次都要返回一个新的对象，新的状态；
      return { list: [...list, action.text] }
      break;
    case DELETE_TODO:
      let list = state.list;
      list.splice(action.index,1);
      return { list: [...list] };
      break;
    default:
      return state;
  }
}

let store = createStore(reducer);


class Todo extends Component {
  constructor(porps) {
    super(this.props);
    this.state = {
      list: store.getState().list
    }
  }

  // 添加TODO
  handlekeyDown = (event) => {
    let value = event.target.value;
    let len = value.length;

    if (event.keyCode === 13 && len > 0) {
      store.dispatch({
        type: ADD_TODO,
        text: event.target.value,//事件源的值
      });
      event.target.value = '';
    }

  }

  // 删除TODO
  handleDelete = (index) => {
    store.dispatch({
      type: DELETE_TODO,
      index
    })
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(this.setState({
      list: store.getState().list
    }));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    return (
      <div>
        <input type='text'
          onKeyDown={this.handlekeyDown} />
        <ul>
          {
            this.state.list.map((todo, index) => (
              <li key={index}>${todo}<button onClick={this.handleDelete(index)}>-</button></li>
            ))
          }
        </ul>
      </div>
    );
  }
}



export default Todo;