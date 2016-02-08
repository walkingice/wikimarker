import React from 'react';
import {connect} from 'react-redux';

import {setListTitle, setList} from '../action_creator.jsx';
import {parseDate, randomPick} from '../lib/helper.jsx';
import {getLinks} from '../lib/api.jsx';

import Row from './Row.jsx';

const Layout = React.createClass ({
  render () {
    const {main} = this.props;
    return (
      <div className="main">
        {main}
      </div>
    )
  }
});

export default Layout;
