import React from 'react';
import {connect} from 'react-redux';

import {setDetail} from '../action_creator.jsx';

const Detail = React.createClass({
  render: function () {
    return this.props.pageName?
      <div>Detail for {this.props.pageName}</div> :
      <div>Detail without Page Name</div>;
  }
});

function selector (state) {
  return {
    pageName: state.get('detail')
  }
}

export default connect(selector, {setDetail})(Detail);
