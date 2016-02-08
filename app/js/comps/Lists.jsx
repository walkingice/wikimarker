import React from 'react';
import {connect} from 'react-redux';

import {setListTitle, setList} from '../action_creator.jsx';
import {parseDate, randomPick} from '../lib/helper.jsx';
import {getLinks} from '../lib/api.jsx';

import Banner from './Banner.jsx';
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
    let titleText = this.props.title ? this.props.title : 'Nothing to display';
    titleText = titleText.replace('_', ' ');

    var list = this.props.pages ?
      <ul className="custom">{this.props.pages.map(function(page) {
        return <li key={page}><Row title={page}/></li>
      })}</ul>: null;

    return <div>
      <Banner title={this.props.title} />
      <div className="container-fluid">
        <div className="list-main row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="page-header">{titleText}</h1>
            {list}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
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
    pages: state.get('links').toArray(),
    title: state.get('title')
  }
}

export default connect(selector, {setListTitle, setList})(Lists);
