import React, { Component } from 'react';
import {createStore} from 'redux';
import counter from '../../reducers/Counter';

let store = createStore(counter);

class Counter2 extends Component {
  constructor(){
    super();
    // 其实就是建立了从store中state对象到当前组件状态的映射；
    this.state = {
      number: store.getState().number
    }
  }
  componentWillMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Counter2;