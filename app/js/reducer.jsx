import {List, Map} from 'immutable';

function setListTitle (state, title) {
  return state.set('title', title);
}

function setList (state, links) {
  return state.set('links', links);
}

function setDetail (state, title) {
  return state.set('detail', title);
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_LIST_TITLE':
      return setListTitle(state, action.listTitle);
    case 'SET_LIST':
      return setList(state, action.links);
    case 'SET_DETAIL':
      return setDetail(state, action.title);
  }
  return state;
}

