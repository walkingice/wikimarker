import React from 'react';
import {connect} from 'react-redux';

import {setDetail} from '../action_creator.jsx';

const Row = React.createClass({
  onClickRow: function (e) {
    this.props.setDetail(this.props.title);
  },
  render: function () {
    return <a onClick={this.onClickRow} href="/#/detail">{this.props.title}</a>
  }
});

export default connect(null, {setDetail})(Row);
