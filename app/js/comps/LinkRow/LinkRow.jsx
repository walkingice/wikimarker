import React from 'react';

import './LinkRow.less';

class LinkRow extends React.Component {
  onClickRow(e) {
    this.props.onUpdateDetail(this.props.title);
  }

  render() {
    return <a className="no-decor" onClick={this.onClickRow.bind(this)} href="/#/detail">
      <div className="link-row">
        {this.props.title}
        <span className="arrow pull-right">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </span>
      </div>
    </a>
  }
}

LinkRow.propTypes = {
  title: React.PropTypes.string,
  onUpdateDetail: React.PropTypes.func
}

export default LinkRow;
