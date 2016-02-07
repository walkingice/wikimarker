import * as May5 from '../data/May_5';
import * as Nov1 from '../data/November_1';
import * as Detail from '../data/Detail';

/**
 * A layer to fetch data from Wikipedia.
 */

/* return a promise */
export function getLinks (param) {
  param.lang = param.lang ?  param.lang : 'en';

  let delay = 600;

  return new Promise((resolve, reject) => {
    function drainLinks(data) {
      return data.parse.links.map(function (item) {
        return item['*'];
      });
    }

    setTimeout(function () {
      let odd = (param.title.length % 2) === 0;
      let links = odd ? drainLinks(May5) : drainLinks(Nov1);
      resolve(links);
    }, delay);
  });
}

/* return a promise */
export function getContent(param) {
  param.lang = param.lang ?  param.lang : 'en';

  let delay = 600;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(Detail.parse.text['*']);
    }, delay);
  });
}

