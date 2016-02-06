import {List, Map} from 'immutable';

function setStartPage (state, title) {
  return state.set('title', title);
}

export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_START':
      return setStartPage(state, action.pageTitle);
  }
  return state;
}

