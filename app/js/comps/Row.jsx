import React from 'react';
import {connect} from 'react-redux';

import {setDetail} from '../action_creator.jsx';

const Row = React.createClass({
  onClickRow: function (e) {
    this.props.setDetail(this.props.title);
  },
  render: function () {
    return <a className="no-decro" onClick={this.onClickRow} href="/#/detail">
      <div className="list-row">
        {this.props.title}
        <span className="arrow pull-right">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </span>
      </div>
    </a>
  }
});

export default connect(null, {setDetail})(Row);
