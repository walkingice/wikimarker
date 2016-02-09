import {fromJS, Map} from 'immutable';

import {saveItem, removeItem, getBookmarks} from './lib/storage.jsx';

function setListTitle (state, title) {
  return state.set('title', title);
}

function setList (state, links) {
  let bmks = getBookmarks();
  return state.set('links', fromJS(links))
    .set('bookmarks', fromJS(bmks));
}

function setDetail (state, title) {
  let bmks = getBookmarks();
  let exists = !!bmks[title];
  return state.set('detail', title).set('saved', exists);
}

function setContent (state, text) {
  return state.set('content', text)
}

function saveBookmark (state, bookmark, notes) {
  saveItem(bookmark, notes);
  let bmks = getBookmarks();
  return state.set('bookmarks', fromJS(bmks));
}

function removeBookmark (state, bookmark) {
  removeItem(bookmark);
  let bmks = getBookmarks();
  return state.set('bookmarks', fromJS(bmks));
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_LIST_TITLE':
      return setListTitle(state, action.listTitle);
    case 'SET_LIST':
      return setList(state, action.links);
    case 'SET_DETAIL':
      return setDetail(state, action.title);
    case 'SET_CONTENT':
      return setContent(state, action.htmlText);
    case 'SAVE_BOOKMARK':
      return saveBookmark(state, action.bookmark, action.notes);
    case 'REMOVE_BOOKMARK':
      return removeBookmark(state, action.bookmark);
  }
  return state;
}

