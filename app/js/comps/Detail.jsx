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
    let props = this.props;
    if (!props.content) {
      return null;
    }

    let content = props.content ?
      <div dangerouslySetInnerHTML={{__html: props.content}} />
        :null;
    let star = props.saved ?
      <span className="btn btn-success btn-sm pull-right" onClick={this.toggle}>
        <i className="glyphicon glyphicon-star"></i>Bookmark
      </span> :
      <span className="btn btn-default btn-sm pull-right" onClick={this.toggle}>
        <i className="glyphicon glyphicon-star-empty"></i>Bookmark
      </span>;

    let header = <div className="detail-header">
      {star}
      <span className="detail-title">{props.pageName}</span>
    </div>
    let body = <span>
      {header}
      <div className="detail-content">
        {content}
      </div>
    </span>


    let container = <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">{body}</div>
        <div className="col-md-3"></div>
      </div>
    </div>;

    return container;
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
