import React from 'react';
import {connect} from 'react-redux';

import {saveBookmark, removeBookmark, setContent} from '../action_creator.jsx';

import {getContent} from '../lib/api.jsx';

const Detail = React.createClass({
  getInitialState: function () {
    return { selection: ''};
  },
  toggle: function (e) {
    let name = this.props.pageName;
    let bk = this.props.bookmarks[name];
    if (bk) {
      let yes = bk.length === 0 ? true :
        confirm('Remove this bookmark and notes belongs to it?');
      yes && this.props.removeBookmark(name);
    } else {
      this.props.saveBookmark(name);
    }
  },
  componentDidMount: function () {
    if (!!this.props.pageName) {
      updateContent(this, this.props.pageName);
    }
  },
  saveNote: function () {
    this.props.saveBookmark(this.props.pageName,
                           [this.state.selection]);
    clearSelection();
    this.setState({selection: ''});
  },
  onMouseUp: function (e) {
    // delay. in case of user clicking the selected-area to clear selection
    // but browser fire event before real clear.
    setTimeout(function () {
      // only save 140 chars. Twitter rules!
      let selection = window.getSelection().toString().substr(0, 140);
      this.setState({selection});
    }.bind(this), 10);
  },
  render: function () {
    let props = this.props;
    if (!props.content) {
      return null;
    }

    let content = props.content ?
      <div dangerouslySetInnerHTML={{__html: props.content}} />
        :null;
    let bk = props.bookmarks[props.pageName];
    let star = bk ?
      <span className="btn btn-success btn-sm pull-right" onClick={this.toggle}>
        <i className="glyphicon glyphicon-star"></i>Bookmark
      </span> :
      <span className="btn btn-default btn-sm pull-right" onClick={this.toggle}>
        <i className="glyphicon glyphicon-star-empty"></i>Bookmark
      </span>;

    let notes = (Array.isArray(bk) && bk.length > 0) ?
      <p className="note">{bk[0]}</p>
      :<div className="stick-left">Select interested text to save as note</div>;

    let header = <div className="detail-header">
      {star}
      <span className="detail-title">{props.pageName}</span>
      {notes}
    </div>
    let body = <span>
      {header}
      <div className="detail-content">
        {content}
      </div>
    </span>

    let stick = this.state.selection ?
      <div className="stick-bottom">
        <button className="btn btn-default btn-lg center-block" onClick={this.saveNote}>
          <i className="glyphicon glyphicon-pencil" />
          save note</button>
      </div>: null;


    let container = <div onMouseUp={this.onMouseUp} className="container-fluid">
      {stick}
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

function clearSelection () {
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  }
}

function selector (state) {
  return {
    bookmarks: state.get('bookmarks').toJS(),
    content: state.get('content'),
    pageName: state.get('detail')
  }
}

export default connect(selector, {saveBookmark, removeBookmark, setContent})(Detail);
