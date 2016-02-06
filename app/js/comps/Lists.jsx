import React from 'react';
import {connect} from 'react-redux';

import {setStartPage} from '../action_creator.jsx';

const Lists = React.createClass({
  componentDidMount: function () {
    updatePageTitle(this, new Date());
  },
  render: function () {
    var title = this.props.title ?
      <h1>{this.props.title}</h1>:
      <h3>No title</h3>;
    return <div>Lists {title}</div>
  }
});

function updatePageTitle(ctx, dateObj) {
  // simulate ajax call
  setTimeout(function () {
    ctx.props.setStartPage(dateObj);
  }, 1000);
}

function selector (state) {
  return {
    title: state.get('title')
  }
}

export default connect(selector, {setStartPage})(Lists);
