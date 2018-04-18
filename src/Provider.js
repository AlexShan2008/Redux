import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// 实现顶层定义；后代组件变可获得store中的数据
class Provider extends Component {
  getChildContext() {
    return { store: this.props.store };
  }
  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: PropTypes.object
}

export default Provider;