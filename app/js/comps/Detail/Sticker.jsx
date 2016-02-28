import React from 'react';

import './Sticker.less';

export default class Sticker extends React.Component {
  render() {
    return this.props.selection ?
      <div className="stick-bottom">
        <button className="btn btn-default btn-lg center-block"
          onClick={this.props.saveNote}>
          <i className="glyphicon glyphicon-pencil" />
          Save note</button>
      </div>: null;
  }
}

Sticker.propTypes = {
  selection: React.PropTypes.string,
  saveNote: React.PropTypes.func
}
