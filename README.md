## 1.Redux
> 1. 应用场景
* 为了解决state里的数据问题；
* 同级组件间通信很费劲；需要找到最近的同级祖先组件。

> 2. redux 思想：发布订阅模式。

* 需要订阅的组件，进行订阅。不能直接操作store的数据；需要发送指令action(指令本身：用来描述要做什么，关闭，打开)，reducer,store.
* 同级组件之间的通信，组件先把指令(dispatch action)发给store，store中的管理员reducer(处理器：收到指令),根据指令更改state状态，组件监听最新state更改自己。

> 3. redux 三大原则
* 1. 只有一个store, store中只有一个state tree
* 2. 不能直接改变state,只能dispatch(action)到store,action是一个用于描述已发生事件的普通对象
* 3. 纯函数修改state,为了描述action如何改变state tree, 所有我们编写reducers函数
* 4 `combineReducers`

## 2. Context React 解决父子组件多层传递的问题
> 实验性功能
```
Father Compoment
<Container />

Child Component 
<Message />
```

### 2.1 先在给父组件内定义 `getChildContext` 方法
```
  getChildContext() {
    // 返回一个对象，这对象就是子组件的context对象；
    return { color: ' blue' }
  }
```
### 2.2 给父组件设置相关属性
```
Container.childContextTypes = {
  color: PropTypes.string
}
```
### 2.3 给子组件设置相关属性
```
Message.contextTypes = {
  color:PropTypes.string
}
```
### 2.4 子组件内调用父组件属性 `this.context.color`
```
class Message extends Component {
  render() {
    return (
      <li style={{color:this.context.color}}>{this.props.message}</li>
    );
  }
}
```
> 即可在任何需要的子组件内部调用父组件的属性；

## 3 React-redux 
> UI `Presentation components` 纯组件，木偶组件

- 只负责UI的呈现
- 不带业务逻辑
- 没有状态（不使用this.state这个变量）
- 所有数据都有参数（this.props）提供
- 不使用任何Redux的API
```
const Title = value = > <h1>{value}</h1>;
```

> `Container components` 容器组件

- 只负责管理数据和业务逻辑,通信
> React-Redux 规定，所有UI组件用户提供，容器组件，React-Redux自动生成`Connect`。

## 4 connect()
> 用于从UI组件生成容器组件，将两种组件连接。
```
const Counter from './Counter';
import { connect } from 'react-redux';

const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)( Counter);
``` 
## 5 middleware
### 5.1 `applyMiddleware`日志中间件
> redux.js
```
let applyMiddleware = middleware => createStore => reducer => {
  let store = createStore(reducer);
  middleware = middleware(store);
  let dispatch = middleware(store.dispatch);
  return {
    ...store,
    dispatch
  }
}
```
> index.js
```
let logger = store => next => action =>{
  next(action);
}

let store = applyMiddleware(logger)(createStore)(counter);
```
### 5.2 异步dispatch `redux-thunk`
```
// 解决dispatch异步调用
let thunk = store=> next => action =>{
  if(typeof action === 'function'){
    return action(next);
  }
  return next(action);
}
```
### 5.3 promise 
```
let isPromise = obj => obj.then;
let promise = store => next => action => {
  if (isPromise(action)) {
    return action.then(data => next(data))
  }
  next();
}

let store = applyMiddleware(promise)(createStore)(counter);

store.dispatch(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ type: 'ADD' });
  }, 3000);
}));

```
### 5.4 chain method  / redux
> 类似于koa的洋葱模型
```
export default function compose(...funcs) {
  // funcs是一个保存着所有参数函数的数组
  // 如果没有传递任何参数，就返回一个函数，这个函数是输入什么得到什么。
  if (funcs.length === 0) {
    return arg => arg
  }
  // 只传递一个参数的时候，就直接把这个函数返回
  if (funcs.length === 1) {
    return funcs[0]
  }
  // 返回组合函数
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```