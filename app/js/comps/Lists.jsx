import React from 'react';
import {connect} from 'react-redux';

const Lists = React.createClass({
  render: function () {
    return <div>Lists {this.props.title}</div>
  }
});

function selector (state) {
  return state;
}

export default connect(selector)(Lists);
