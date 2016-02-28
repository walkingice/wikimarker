import React from 'react';

import './BookmarkRow.less';

class BookmarkRow extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickRow(e) {
    // If myself is activated, deactivate myself.
    // Otherwise, to activate myself and notify siblings..
    let msg = this.props.active === this.props.title ?
      '' : this.props.title;
    this.props.onActive(msg);
  }

  onClickGo() {
    this.props.onUpdateDetail(this.props.title);
  }

  onClickRemove(e) {
    this.props.onRemove(this.props.title);
  }

  render() {
    let btns = this.props.active === this.props.title ?
      <span className="btns pull-right">
        <button className="btn btn-danger" onClick={this.onClickRemove.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <a className="btn btn-default" href="/#/detail"
          onClick={this.onClickGo.bind(this)}>
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </span>
      :null;

    return <div className="bookmark-row" onClick={this.onClickRow.bind(this)}>
      <span className="bookmark-icon">
        <span className="glyphicon glyphicon-star"></span>
      </span>
        {this.props.title}
        {btns}
    </div>
  }
}

BookmarkRow.propTypes = {
  active: React.PropTypes.string,
  title: React.PropTypes.string,
  onUpdateDetail: React.PropTypes.func,
  onRemove: React.PropTypes.func
}

export default BookmarkRow;
