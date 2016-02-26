import React from 'react';

class BtnExport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button
      disabled={this.props.disabled}
      onClick={this.props.onBtnClick}
      className="btn btn-sm btn-default pull-right">
      Export
    </button>
  }
}

export default BtnExport;
