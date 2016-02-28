import React from 'react';
import {connect} from 'react-redux';
import ReactCSSTransGrp from 'react-addons-css-transition-group';

import {setListTitle, setList} from '../action_creator.jsx';
import {parseDate, randomPick} from '../lib/helper.jsx';
import {getLinks} from '../lib/api.jsx';

import Banner from '../containers/Banner.jsx';
import LinkRow from '../containers/LinkRow.jsx';

const Links = React.createClass({
  componentDidMount: function () {
    updatePageTitle(this, new Date());
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (prevProps.title !== this.props.title) {
      updateLinks(this, this.props.title);
    }
  },
  render: function () {
    let titleText = this.props.title ? this.props.title : 'Nothing to display';
    let link = this.props.title ?
      <a target="_blank" className="tiny-link"
        href={'https://en.wikipedia.org/wiki/' + this.props.title}>(wiki)</a>
      : null;

    titleText = titleText.replace('_', ' ');

    let rows = this.props.links ?
      <ReactCSSTransGrp className="custom" component="ul"
        transitionName="fade"
        transitionEnterTimeout={300} transitionLeaveTimeout={300}
        transitionAppear={true} transitionAppearTimeout={300}>
        {this.props.links.map((page) => {
        return <li key={page}><LinkRow title={page}/></li>
      })}</ReactCSSTransGrp>: null;

    return <div>
      <Banner title={this.props.title} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="page-header">{titleText} {link}</h1>
            {rows}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  }
});

function updateLinks(ctx, title) {
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
    links: state.get('links').toArray(),
    title: state.get('title')
  }
}

Links.propTypes = {
  title: React.PropTypes.string,
  links: React.PropTypes.array
}

export default connect(selector, {setListTitle, setList})(Links);
