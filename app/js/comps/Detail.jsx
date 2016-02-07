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
    return this.props.pageName ?
      <div>Detail for {this.props.pageName}
        <div>saved? <em>{this.props.saved.toString()}</em></div>
        <button onClick={this.toggle}>Toggle</button>
        <hr/>
        {content}
      </div> :
      <div>Detail without Page Name</div>;
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
