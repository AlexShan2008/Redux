import React, { Component } from 'react';
import {store} from '../../store';
import {ADD_TODO, DELETE_TODO} from '../../reducers/actiontypes';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: store.getState().todo.list
    }
  }

  // 添加TODO
  handlekeyDown = (event) => {
    let value = event.target.value;

    if (event.keyCode === 13 && value) {
      store.dispatch({
        type: ADD_TODO,
        text: value //事件源的值
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
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        list: store.getState().todo.list
      })
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <input type='text' onKeyDown={this.handlekeyDown} />
        <ul>
          {
            this.state.list.map((todo, index) => (
              <li key={index}>{todo}
                <button onClick={() => { this.handleDelete(index) }}>-</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}



export default Todo;