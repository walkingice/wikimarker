import React from 'react';
import {connect} from 'react-redux';
import {saveAs} from 'filesaver.js';

import {} from '../../action_creator.jsx';

const BtnExport = React.createClass({
  save: function () {
    if (this.props.bookmarks.length === 0) {
      return;
    }
    let blob = new Blob([JSON.stringify(this.props.bookmarks, null, 2)],
                        {type : 'application/json'});
    saveAs(blob, "bookmarks.json");
  },
  render: function () {
    return <button
      disabled={this.props.bookmarks.length === 0}
      onClick={this.save}
      className="btn btn-sm btn-default pull-right">
      Export
    </button>
  }
});

function selector (state) {
  return {
    bookmarks: state.get('bookmarks').toJS()
  }
}

export default connect(selector, {})(BtnExport);
