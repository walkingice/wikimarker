import React from 'react';
import {connect} from 'react-redux';

import BookmarkRow from '../comps/BookmarkRow/BookmarkRow.jsx';
import {removeBookmark, setDetail} from '../action_creator.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  onActive(title) {
    this.props.notifyParent(title);
  }

  onDetail(title) {
    this.props.setDetail(title);
  }

  onRemove(title) {
    this.props.removeBookmark(title);
  }

  render() {
    return <BookmarkRow
      title={this.props.title}
      active={this.props.active}
      onRemove={this.onRemove.bind(this)}
      onUpdateDetail={this.onDetail.bind(this)}
      onActive={this.onActive.bind(this)}
    />
  }
}

Container.propTypes = {
  notifyParent: React.PropTypes.func,
  setDetail: React.PropTypes.func,
  removeBookmark: React.PropTypes.func,
  title: React.PropTypes.string,
  active: React.PropTypes.string
}

export default connect(null, {removeBookmark, setDetail})(Container);
