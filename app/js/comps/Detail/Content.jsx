import React from 'react';

import './Content.less';

export default class Content extends React.Component {
  onMouseUp(e) {
    // delay. in case of user clicking the selected-area to clear selection
    // but browser fire event before real clear.
    setTimeout(() => {
      // only save 140 chars. Twitter rules!
      let selection = window.getSelection().toString().substr(0, 140);
      this.props.onSelect(selection);
    });
  }
  render() {
    return this.props.innerHTML ?
      <div
        onMouseUp={this.onMouseUp.bind(this)}
        dangerouslySetInnerHTML={{__html: this.props.innerHTML}} />
      : null;
  }
}

Content.propTypes = {
  onSelect: React.PropTypes.func,
  innerHTML: React.PropTypes.string
}
