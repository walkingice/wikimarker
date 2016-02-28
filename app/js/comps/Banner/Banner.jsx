import React from 'react';

import './Banner.less';
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import {parseDate} from '../../lib/helper.jsx';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'chosen': props.title
    }
  }

  onDayClick(e, day) {
    let date = parseDate(new Date(day));
    this.setState({'chosen': date});
  }

  onApplyClick(e) {
    if (!!this.state.chosen && (this.props.title !== this.state.chosen)) {
      this.props.onApply(this.state.chosen);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({'chosen': nextProps.title});
  }

  render() {
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
                onDayClick={this.onDayClick.bind(this)}
              />
              <button className="btn btn-success" onClick={this.onApplyClick.bind(this)}
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
}

Banner.propTypes = {
  title: React.PropTypes.string,
  onApply: React.PropTypes.func
}

export default Banner;
