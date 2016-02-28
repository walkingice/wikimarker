import React from 'react';
import {connect} from 'react-redux';

import Banner from '../comps/Banner/Banner.jsx';
import {setListTitle} from '../action_creator.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  onApply(chosen) {
    this.props.setListTitle(chosen);
  }

  render () {
    return <Banner
      title={this.props.title}
      onApply={this.onApply.bind(this)}
    />
  }
}

function selector (state) {
  return {
    title: state.get('title')
  }
}

Container.propTypes = {
  title: React.PropTypes.string,
  setListTitle: React.PropTypes.func
}

export default connect(selector, {setListTitle})(Container);
