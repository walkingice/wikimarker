import React from 'react';
import {connect} from 'react-redux';

import {setListTitle, setList} from '../action_creator.jsx';
import {parseDate, randomPick} from '../lib/helper.jsx';
import {getLinks} from '../lib/api.jsx';

import Row from './Row.jsx';

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
        return <li key={page}><Row title={page}/></li>
      })}</ul>: null;

    var bmks = this.props.bookmarks.length > 0 ?
      <div>
        <h1>Bookmarks</h1>
        <ul>{this.props.bookmarks.map(function(bm) {
          return <li key={bm}><Row title={bm}/></li>
        })}</ul>
      </div>
      :null;

    return <div>Lists {title}
      {list}
      {bmks}
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
    bookmarks: state.get('bookmarks').toArray(),
    pages: state.get('links').toArray(),
    title: state.get('title')
  }
}

export default connect(selector, {setListTitle, setList})(Lists);
