# Redux
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