import React from 'react';

import './Row.less';

class Row extends React.Component {
  onClickRow(e) {
    this.props.onUpdateDetail(this.props.title);
  }

  render() {
    return <a className="no-decor" onClick={this.onClickRow.bind(this)} href="/#/detail">
      <div className="list-row">
        {this.props.title}
        <span className="arrow pull-right">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </span>
      </div>
    </a>
  }
}

export default Row;
