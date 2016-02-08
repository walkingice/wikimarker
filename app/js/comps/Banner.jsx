import React from 'react';

const Banner = React.createClass ({
  render () {
    return (
      <div className="banner-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>Greeting</h1>
              <p>
                This is a demo app. It fetch links from a page of <a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
              </p>
              <p>
                You could save some links into local storage.
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    )
  }
});

export default Banner;
