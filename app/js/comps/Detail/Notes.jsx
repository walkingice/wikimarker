import React from 'react';

import './Notes.less';

class Notes extends React.Component {
  render() {
    let bks = this.props.bookmarks;
    return (Array.isArray(bks) && bks.length > 0) ?
      <p className="note">{bks[0]}</p> :
      <div className="stick-left">Select interested text to save as note</div>;
  }
}

export default Notes;
