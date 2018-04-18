import React, { Component } from 'react';
import { INCREASE, DECREASE } from '../../reducers/actiontypes';

import connect from '../../connect';


class Counter3 extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.onIncrease }>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    );
  }
}

let mapStateToProps = (state) => (
  {
    number: state.number
  }
)

let mapDispatchToProps = (dispatch) => (
  {
    onIncrease: () => {
      return dispatch({ type: INCREASE })
    },
    onDecrease: () => dispatch({ type: DECREASE })
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter3);
