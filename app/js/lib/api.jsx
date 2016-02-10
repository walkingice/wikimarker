import * as May5 from '../data/May_5';
import * as Nov1 from '../data/November_1';
import * as Detail from '../data/Detail';

import * as $ from 'jquery';
import * as qs from 'querystring';

/**
 * A layer to fetch data from Wikipedia.
 */

var _fake = false;

const _END_POINT = 'https://en.wikipedia.org/w/api.php';

function drainLinks(data) {
  return data.parse.links.map(function (item) {
    return item['*'];
  });
}

function getLinksFake (param) {
  let delay = 600;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let odd = (param.page.length % 2) === 0;
      let links = odd ? drainLinks(May5) : drainLinks(Nov1);
      resolve(links);
    }, delay);
  });
}

function getContentFake (param) {
  let delay = 600;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({innerHTML: Detail.parse.text['*']});
    }, delay);
  });
}

/* Return built-in Promise */
function getAjax (url) {
  // Wikipedia API only accept jsonp
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      jsonp: 'callback',
      dataType: 'jsonp'
    }).then(resolve, reject);
  });
}

function getLinksAjax (param) {
  return getAjax(getLinksApi(param))
    .then((resp) => {
      return drainLinks(resp);
    });
}

function getContentAjax (param) {
  return getAjax(getContentApi(param))
    .then((resp) => {
      return {
        innerHTML: resp.parse.text['*']
      }
    });
}

/* return a promise */
export function getLinks (param, lang='en') {
  return _fake ? getLinksFake(param) : getLinksAjax(param);
}

/* return a promise */
export function getContent(param, lang='en') {
  return _fake ? getContentFake(param) : getContentAjax(param);
}

const linkParam = {
  action: 'parse',
  format: 'json',
  prop: 'links'
};
export function getLinksApi (param) {
  let p = Object.assign({}, linkParam, param);
  return _END_POINT + '?' + qs.stringify(p);
}

const contentParam = {
  action: 'parse',
  format: 'json',
  section: 0,
  prop: 'text'
};
export function getContentApi (param) {
  let p = Object.assign({}, contentParam, param);
  return _END_POINT + '?' + qs.stringify(p);
}

export function useFakeData (fake) {
  console.log('api: use fake data', fake);
  _fake = fake;
}
