import { createStore } from './redux';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Todo from './components/Todo/Todo';

// 组件内部实现订阅；

ReactDOM.render(<div>
  <Counter />,
  <Todo />
</div>,
  document.querySelector('#root'));