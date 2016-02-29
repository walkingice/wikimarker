import React from 'react';

const Layout = React.createClass ({
  render () {
    return <div className="main">
      {this.props.children}
    </div>
  }
});

export default Layout;
