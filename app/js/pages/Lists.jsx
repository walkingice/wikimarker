import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransGrp from 'react-addons-css-transition-group';

import {setListTitle, setList} from '../action_creator.jsx';
import {parseDate, randomPick} from '../lib/helper.jsx';
import {getLinks} from '../lib/api.jsx';

import Banner from '../comps/Banner/Banner.jsx';
import Row from '../comps/Row/Row.jsx';

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
    let link = this.props.title ?
      <a target="_blank" className="tiny-link"
        href={'https://en.wikipedia.org/wiki/' + this.props.title}>(wiki)</a>
      : null;

    titleText = titleText.replace('_', ' ');

    var list = this.props.pages ?
      <ReactCSSTransGrp className="custom" component="ul"
        transitionName="fade"
        transitionEnterTimeout={300} transitionLeaveTimeout={300}
        transitionAppear={true} transitionAppearTimeout={300}>
        {this.props.pages.map((page) => {
        return <li key={page}><Row title={page}/></li>
      })}</ReactCSSTransGrp>: null;

    return <div id="list-page">
      <Banner title={this.props.title} />
      <div className="container-fluid">
        <div className="list-main row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="page-header">{titleText} {link}</h1>
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
  getLinks({page: title}).then((links) => {
    let pick = randomPick(links);
    ctx.props.setList(pick);
  }).catch((err) => {
    console.log('err' + JSON.stringify(err));
  });
}

function updatePageTitle(ctx, dateObj) {
  let title = parseDate(dateObj);
  // simulate ajax call
  setTimeout(() => {
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
