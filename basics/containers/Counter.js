import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from '../actions/index';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.handleOnClick()}>Increment</button>
        {this.props.counter}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnClick: (counter) => {
      dispatch(incrementCounter(counter))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
