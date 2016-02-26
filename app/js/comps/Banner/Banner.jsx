import React from 'react';
import {connect} from 'react-redux';

import './Banner.less';
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import {setListTitle} from '../../action_creator.jsx';
import {parseDate} from '../../lib/helper.jsx';

const Banner = React.createClass ({
  onDayClick: function (e, day) {
    let date = parseDate(new Date(day));
    this.setState({'chosen': date});
  },
  onApply: function (e) {
    if (!!this.state.chosen && this.props.title !== this.state.chosen) {
      this.props.setListTitle(this.state.chosen);
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({'chosen': nextProps.title});
  },
  getInitialState: function () {
    return {'chosen': this.props.title};
  },
  render () {
    return (
      <div className="banner-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <h1 className="white">Greeting</h1>
              <p className="white">
                This is a demo app. It fetch links from a page of <a className="white" href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
              </p>
              <p className="white">
                You can
              </p>
              <ol className="white">
                <li>Bookmark an interested page</li>
                <li>Save 140 chars along with bookmark</li>
                <li>Export your bookmarks</li>
              </ol>
            </div>
            <div className="col-md-3">
              <DayPicker
                onDayClick={this.onDayClick}
              />
              <button className="btn btn-success" onClick={this.onApply}
                disabled={this.props.title === this.state.chosen}>
                Apply
              </button>

            </div>
            <div className="col-md-3">
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Banner;
function selector (state) {
  return {
    title: state.get('title')
  }
}

export default connect(selector, {setListTitle})(Banner);
