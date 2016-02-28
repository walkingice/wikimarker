import React from 'react';

import './Meta.less';
import Notes from './Notes.jsx';

export default class Meta extends React.Component {
  render() {
    let bk = this.props.bookmarks[this.props.pageName];
    let star = bk ?
      <span className="btn btn-success btn-sm pull-right" onClick={this.props.onToggleBookmark}>
        <i className="glyphicon glyphicon-star"></i>Bookmark
      </span> :
      <span className="btn btn-default btn-sm pull-right" onClick={this.props.onToggleBookmark}>
        <i className="glyphicon glyphicon-star-empty"></i>Bookmark
      </span>;

    let categories = this.props.categories ?
      <div>{this.props.categories.map((cg) => {
        return <span key={cg} className="label label-info">
          <a className="no-decor" href={'https://en.wikipedia.org/wiki/' + cg} target="_blank">{cg}</a>
        </span>
        })}</div>: null;
    return <div className="detail-meta">
      {star}
      <span className="detail-title">{this.props.pageName}</span>
      <Notes bookmarks={this.props.bookmarks[this.props.pageName]}/>
      {categories}
    </div>
  }
}

Meta.propTypes = {
  bookmarks: React.PropTypes.object,
  categories: React.PropTypes.array,
  pageName: React.PropTypes.string,
  onToggleBookmark: React.PropTypes.func
}
