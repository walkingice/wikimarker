import React from 'react';
import {connect} from 'react-redux';

import Row from '../comps/Row/Row.jsx';
import {setDetail} from '../action_creator.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  onDetail(title) {
    this.props.setDetail(title);
  }

  render() {
    return <Row
      title={this.props.title}
      onUpdateDetail={this.onDetail.bind(this)}
    />
  }
}

export default connect(null, {setDetail})(Container);
