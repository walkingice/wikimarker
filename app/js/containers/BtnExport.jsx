import React from 'react';
import {connect} from 'react-redux';
import {saveAs} from 'filesaver.js';

import {} from '../action_creator.jsx';
import BtnExport from '../comps/BtnExport/BtnExport.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  save() {
    if (this.props.bookmarks.length === 0) {
      return;
    }
    let blob = new Blob([JSON.stringify(this.props.bookmarks, null, 2)],
                        {type : 'application/json'});
    saveAs(blob, "bookmarks.json");
  }

  render() {
    return <BtnExport
      onBtnClick={this.save}
      disabled={this.props.bookmarks.length === 0}
    />
  }
}

function selector (state) {
  return {
    bookmarks: state.get('bookmarks').toJS()
  }
}

export default connect(selector, {})(Container);
