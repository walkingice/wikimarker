import * as May5 from './data/May_5';
import * as Nov1 from './data/November_1';

export function setStartPage (dateObj) {
  return {
    type: 'SET_START',
    pageTitle: May5.parse.title
  }
}
