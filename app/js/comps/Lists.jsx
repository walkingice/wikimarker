import React from 'react';
import {connect} from 'react-redux';

import {setListTitle} from '../action_creator.jsx';
import {parseDate} from '../lib/helper.jsx';

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
  let title = parseDate(dateObj);
  // simulate ajax call
  setTimeout(function () {
    ctx.props.setListTitle(title);
  }, 1000);
}

function selector (state) {
  return {
    title: state.get('title')
  }
}

export default connect(selector, {setListTitle})(Lists);
