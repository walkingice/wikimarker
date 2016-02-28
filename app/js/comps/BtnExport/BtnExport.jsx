import React from 'react';

export default class BtnExport extends React.Component {
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

BtnExport.propTypes = {
  disabled: React.PropTypes.bool,
  onBtnClick: React.PropTypes.func
};
