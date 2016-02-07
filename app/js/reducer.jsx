import {fromJS, Map} from 'immutable';

import {toggleItem, getBookmarks} from './lib/storage.jsx';

function setListTitle (state, title) {
  return state.set('title', title);
}

function setList (state, links) {
  let bmks = getBookmarks();
  return state.set('links', fromJS(links))
    .set('bookmarks', fromJS(Object.keys(bmks)));
}

function setDetail (state, title) {
  let bmks = getBookmarks();
  let exists = !!bmks[title];
  return state.set('detail', title).set('saved', exists);
}

function toggleBookmark (state, bookmark) {
  toggleItem(bookmark);
  let bmks = getBookmarks();
  let exists = !!bmks[bookmark];
  return state.set('bookmarks', fromJS(Object.keys(bmks)))
    .set('saved', exists);
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_LIST_TITLE':
      return setListTitle(state, action.listTitle);
    case 'SET_LIST':
      return setList(state, action.links);
    case 'SET_DETAIL':
      return setDetail(state, action.title);
    case 'TOGGLE_BOOKMARK':
      return toggleBookmark(state, action.bookmark);
  }
  return state;
}

