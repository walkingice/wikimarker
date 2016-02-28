import React from 'react';
import {connect} from 'react-redux';

import LinkRow from '../comps/LinkRow/LinkRow.jsx';
import {setDetail} from '../action_creator.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  onDetail(title) {
    this.props.setDetail(title);
  }

  render() {
    return <LinkRow
      title={this.props.title}
      onUpdateDetail={this.onDetail.bind(this)}
    />
  }
}

Container.propTypes = {
  title: React.PropTypes.string,
  setDetail: React.PropTypes.func
}

export default connect(null, {setDetail})(Container);
