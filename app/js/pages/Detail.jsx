import React from 'react';
import {connect} from 'react-redux';

import Meta from '../comps/Detail/Meta.jsx';
import Images from '../comps/Detail/Images.jsx';
import Sticker from '../comps/Detail/Sticker.jsx';
import Content from '../comps/Detail/Content.jsx';
import {saveBookmark, removeBookmark, setContent} from '../action_creator.jsx';

import {getContent} from '../lib/api.jsx';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: ''
    }
  }

  onToggle(e) {
    let name = this.props.pageName;
    let bk = this.props.bookmarks[name];
    if (bk) {
      let yes = bk.length === 0 ? true :
        confirm('Remove this bookmark and notes belongs to it?');
      yes && this.props.removeBookmark(name);
    } else {
      this.props.saveBookmark(name);
    }
  }

  componentDidMount() {
    if (!!this.props.pageName) {
      this.updateContent(this.props.pageName);
    }
  }

  updateContent(pageName) {
    getContent({titles: pageName}).then((data) => {
      this.props.setContent(data);
    });
  }

  saveNote() {
    this.props.saveBookmark(this.props.pageName,
                           [this.state.selection]);
    clearSelection();
    this.setState({selection: ''});
  }

  onMouseUp(e) {
    // delay. in case of user clicking the selected-area to clear selection
    // but browser fire event before real clear.
    setTimeout(() => {
      /* If click arbitrary area to clear selection, state should be updated. */
      if (!window.getSelection().toString()) {
        this.onSelect(null);
      }
    });
  }

  onSelect(selection) {
    this.setState({selection});
  }

  render() {
    let props = this.props;
    if (!props.content) {
      return null;
    }

    return <div className="container-fluid" onMouseUp={this.onMouseUp.bind(this)}>
      <Sticker
        selection={this.state.selection}
        saveNote={this.saveNote.bind(this)} />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Meta
            bookmarks={this.props.bookmarks}
            pageName={this.props.pageName}
            onToggleBookmark={this.onToggle.bind(this)}
            categories={this.props.content.categories}
          />
          <div className="detail-content">
            <Images images={this.props.content.images} />
            <Content
              innerHTML={this.props.content.innerHTML}
              onSelect={this.onSelect.bind(this)} />
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>;
  }
}

function clearSelection() {
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  }
}

function selector(state) {
  let content = !!state.get('content') ? state.get('content').toJS() : {};
  return {
    bookmarks: state.get('bookmarks').toJS(),
    content,
    pageName: state.get('detail')
  }
}

Container.propTypes = {
  pageName: React.PropTypes.string,
  bookmarks: React.PropTypes.object,
  content: React.PropTypes.object,
  setContent: React.PropTypes.func,
  saveBookmark: React.PropTypes.func
}

export default connect(selector, {saveBookmark, removeBookmark, setContent})(Container);
