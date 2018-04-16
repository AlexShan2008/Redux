// 创建仓库
// Redux中只有1个store ,1个state tree树形结构；

const createStore = (reducer) => {
  let state = {};//状态对象；
  let listeners = [];//监听函数数组；

  // reducer 
  // 1.可以订阅store内的state状态,当状态发生变化后，会调用监听函数；
  // 订阅方法执行后会返回一个订阅的函数，调用它可以取消订阅；
  let subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      // 取消订阅；
      listeners.filter(l => listener != l);
    }
  }


  // 2.可以发射指令;
  let dispatch = (action) => {
    // state老状态，action新指令,返回新的state;
    state = reducer(state, action);

    // state更新后，更新所有监听者；执行所有监听函数；
    listeners.forEach(listener=>listener())

  }

  // 获取最新状态对象；
  let getState = () => state;

  dispatch();

  return {
    getState,
    subscribe,
    dispatch
  }

};

export { createStore }