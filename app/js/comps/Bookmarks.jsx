import React from 'react';
import {connect} from 'react-redux';

import {parseDate, randomPick} from '../lib/helper.jsx';

import BookmarkRow from './BookmarkRow.jsx';

const Bookmarks = React.createClass({
  render: function () {
    var bmks = this.props.bookmarks.length > 0 ?
      <div>
        <ul className="custom">{this.props.bookmarks.map(function(bm) {
          return <li key={bm}><BookmarkRow title={bm}/></li>
        })}</ul>
      </div>
      :null;

    return <div>
      <div className="container-fluid">
        <div className="list-main row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="page-header">Bookmarks</h1>
            {bmks}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  }
});

function selector (state) {
  return {
    bookmarks: state.get('bookmarks').toArray()
  }
}

export default connect(selector, {})(Bookmarks);
