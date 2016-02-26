import React from 'react';

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
