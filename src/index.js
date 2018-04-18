import { createStore } from 'redux';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {PropTypes} from 'prop-types';//需要单独安装

const UserContext = React.createContext();

class Container extends Component {
  getChildContext() {
    // 返回一个对象，这对象就是子组件的context对象；
    return { color: ' blue' }
  }
  render() {
    return (
      <MessageList messages={this.props.messages} />
    );
  }
}
Container.childContextTypes = {
  color: PropTypes.string
}
class MessageList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.messages.map((message, index) => (
            <Message  key={index}  message={message} />
          ))
        }
      </ul>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <li style={{color:this.context.color}}>{this.props.message}</li>
    );
  }
}
Message.contextTypes = {
  color:PropTypes.string
}
// 组件内部实现订阅；
let messages = [1, 2, 3];
let color = 'blue';

render(
  <Container messages={messages} />,
  document.querySelector('#root')
);
