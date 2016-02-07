import React from 'react';
import {connect} from 'react-redux';

import {setListTitle, setList} from '../action_creator.jsx';
import {parseDate, randomPick} from '../lib/helper.jsx';
import {getLinks} from '../lib/api.jsx';

const Lists = React.createClass({
  componentDidMount: function () {
    updatePageTitle(this, new Date());
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (prevProps.title !== this.props.title) {
      updateList(this, this.props.title);
    }
  },
  render: function () {
    var title = this.props.title ?
      <h1>{this.props.title}</h1>:
      <h3>No title</h3>;

    var list = this.props.pages ?
      <ul>{this.props.pages.map(function(page) {
        return <li key={page}>{page}</li>
      })}</ul>: null;

    return <div>Lists {title}
      {list}
    </div>
  }
});

function updateList (ctx, title) {
  //TODO: handle ajax fail.
  getLinks({title: title}).then(function (links) {
    let pick = randomPick(links);
    ctx.props.setList(pick);
  });
}

function updatePageTitle(ctx, dateObj) {
  let title = parseDate(dateObj);
  // simulate ajax call
  setTimeout(function () {
    ctx.props.setListTitle(title);
  }, 200);
}

function selector (state) {
  return {
    pages: state.get('links'),
    title: state.get('title')
  }
}

export default connect(selector, {setListTitle, setList})(Lists);
