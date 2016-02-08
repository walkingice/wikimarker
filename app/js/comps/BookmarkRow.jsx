import React from 'react';
import {connect} from 'react-redux';

import {toggleBookmark, setDetail} from '../action_creator.jsx';

const BookmarkRow = React.createClass({
  getInitialState: function () {
    return {'editing': false};
  },
  onClickRow: function (e) {
    this.setState({'editing': !this.state.editing});
  },
  onClickGo: function () {
    this.props.setDetail(this.props.title);
  },
  onClickRemove: function (e) {
    this.props.toggleBookmark(this.props.title);
  },
  render: function () {
    let btns = this.state.editing ?
      <span className="btns pull-right">
        <button className="btn btn-danger" onClick={this.onClickRemove}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <a className="btn btn-default" href="/#/detail" onClick={this.onClickGo}>
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </span>
      :null;

    return <div className="bookmark-row" onClick={this.onClickRow}>
      <span className="bookmark-icon">
        <span className="glyphicon glyphicon-star"></span>
      </span>
        {this.props.title}
        {btns}
    </div>
  }
});

export default connect(null, {toggleBookmark, setDetail})(BookmarkRow);
