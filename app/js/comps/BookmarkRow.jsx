import React from 'react';
import {connect} from 'react-redux';

import {removeBookmark, setDetail} from '../action_creator.jsx';

const BookmarkRow = React.createClass({
  onClickRow: function (e) {
    // If myself is activated, deactivate myself.
    // Otherwise, to activate myself and notify siblings..
    let msg = this.props.active === this.props.title ?
      '' : this.props.title;
    this.props.notifyParent(msg);
  },
  onClickGo: function () {
    this.props.setDetail(this.props.title);
  },
  onClickRemove: function (e) {
    this.props.removeBookmark(this.props.title);
  },
  render: function () {
    let btns = this.props.active === this.props.title ?
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

export default connect(null, {removeBookmark, setDetail})(BookmarkRow);
