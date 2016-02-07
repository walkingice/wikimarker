import React from 'react';
import {connect} from 'react-redux';

import {toggleBookmark} from '../action_creator.jsx';

const Detail = React.createClass({
  toggle: function (e) {
    this.props.toggleBookmark(this.props.pageName);
  },
  render: function () {
    return this.props.pageName ?
      <div>Detail for {this.props.pageName}
        <div>saved? <em>{this.props.saved.toString()}</em></div>
        <button onClick={this.toggle}>Toggle</button>
      </div> :
      <div>Detail without Page Name</div>;
  }
});

function selector (state) {
  return {
    saved: !!state.get('saved'),
    pageName: state.get('detail')
  }
}

export default connect(selector, {toggleBookmark})(Detail);
