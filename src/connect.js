// mapStateToProps 把this.context.store里的状态对象映射成属性；
// 
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

let connect = (mapStateToProps, mapDispatchToProps) => (_Component) => {
  class Proxy extends Component {
    constructor() {
      super();
      this.state = {};
    }
    componentWillMount() {
      this.unsubscribe = this.context.store.subscribe(() => {
  this.setState(mapStateToProps(this.context.store.getState()))
})
    }

componentWillUnmount() {
  this.unsubscribe();
}
render() {
  return <_Component {...this.state} {
    ...mapDispatchToProps(this.context.store.dispatch)
  } />
    }
}
Proxy.contextTypes = { store: PropTypes.object }
  return Proxy;
}

export default connect;