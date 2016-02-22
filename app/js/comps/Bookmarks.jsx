import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransGrp from 'react-addons-css-transition-group';

import {parseDate, randomPick} from '../lib/helper.jsx';

import BookmarkRow from './BookmarkRow.jsx';
import BtnExport from './BtnExport.jsx';

const Bookmarks = React.createClass({
  getInitialState: function () {
    return {
      active: ''
    }
  },
  toggleRow: function (title) {
    this.setState({active: title});
  },
  render: function () {
    let keys = Object.keys(this.props.bookmarks);
    var bmks = keys.length > 0 ?
      <div>
        <ReactCSSTransGrp className="custom" component="ul"
          transitionName="fade"
          transitionEnterTimeout={300} transitionLeaveTimeout={300}
          transitionAppear={true} transitionAppearTimeout={300}>
          {keys.map(function(key) {
          let item = this.props.bookmarks[key];
          return <li key={key}>
              <BookmarkRow title={key}
                notifyParent={this.toggleRow}
                active={this.state.active}/>
          </li>
          }.bind(this))}
        </ReactCSSTransGrp>
      </div>
      :null;

    return <div>
      <div className="container-fluid">
        <div className="list-main row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="page-header">Bookmarks <BtnExport/></h1>
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
    bookmarks: state.get('bookmarks').toJS()
  }
}

export default connect(selector, {})(Bookmarks);
