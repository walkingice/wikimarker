import {List, Map} from 'immutable';

function setListTitle (state, title) {
  return state.set('title', title);
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_LIST':
      return setListTitle(state, action.listTitle);
  }
  return state;
}

