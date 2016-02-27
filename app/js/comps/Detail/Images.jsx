import React from 'react';

import './Images.less';

export default class Images extends React.Component {
  render() {
    return this.props.images ?
      <div>{this.props.images.map((url) => {
        return <img key={url} src={url} className="img-thumbnail detail" />
      })}</div>: null;
  }
}
