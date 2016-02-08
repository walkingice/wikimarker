import React from 'react';
import {connect} from 'react-redux';

import {toggleBookmark, setContent} from '../action_creator.jsx';

import {getContent} from '../lib/api.jsx';

const Detail = React.createClass({
  toggle: function (e) {
    this.props.toggleBookmark(this.props.pageName);
  },
  componentDidMount: function () {
    if (!!this.props.pageName) {
      updateContent(this, this.props.pageName);
    }
  },
  render: function () {
    let content = this.props.content ?
      <div dangerouslySetInnerHTML={{__html: this.props.content}} />
      :null;
    let star = this.props.saved ?
      <span className="glyphicon glyphicon-star"/> :
      <span className="glyphicon glyphicon-star-empty"/>;

    return this.props.pageName ?
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <span className="btn-bookmark label label-danger" onClick={this.toggle}>{star}</span>
            <h1 className="page-header">{this.props.pageName}</h1>
            <div id="#detail">
              {content}
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      : <div>Detail without Page Name</div>;
  }
});

function updateContent(ctx, title) {
  getContent({title}).then(function (htmlText) {
    ctx.props.setContent(htmlText);
  });
}

function selector (state) {
  return {
    saved: !!state.get('saved'),
    content: state.get('content'),
    pageName: state.get('detail')
  }
}

export default connect(selector, {toggleBookmark, setContent})(Detail);
