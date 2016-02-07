import * as May5 from './data/May_5';
import * as Nov1 from './data/November_1';

export function setListTitle (title) {
  return {
    type: 'SET_LIST',
    listTitle: title
  }
}
