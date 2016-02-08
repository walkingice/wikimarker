import * as May5 from '../data/May_5';
import * as Nov1 from '../data/November_1';
import * as Detail from '../data/Detail';

import * as $ from 'jquery';

/**
 * A layer to fetch data from Wikipedia.
 */

var _fake = false;

function drainLinks(data) {
  return data.parse.links.map(function (item) {
    return item['*'];
  });
}

function getLinksFake (param) {
  let delay = 600;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let odd = (param.title.length % 2) === 0;
      let links = odd ? drainLinks(May5) : drainLinks(Nov1);
      resolve(links);
    }, delay);
  });
}

function getContentFake (param) {
  let delay = 600;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(Detail.parse.text['*']);
    }, delay);
  });
}

function getAjax (url, parser) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      jsonp: 'callback',
      dataType: 'jsonp'
    }).then(function (resp) {
      resolve(parser(resp));
    }, reject);
  });
}

function getLinksAjax (param) {
  return getAjax(getLinksApi(param), function (resp) {
    return drainLinks(resp);
  });
}

function getContentAjax (param) {
  return getAjax(getContentApi(param), function (resp) {
    return resp.parse.text['*'];
  });
}

/* return a promise */
export function getLinks (param) {
  param.lang = param.lang ?  param.lang : 'en';
  return _fake ? getLinksFake(param) : getLinksAjax(param);
}

/* return a promise */
export function getContent(param) {
  param.lang = param.lang ?  param.lang : 'en';
  return _fake ? getContentFake(param) : getContentAjax(param);
}

export function getLinksApi (param) {
  let t = 'https://en.wikipedia.org/w/api.php' +
    '?action=parse&prop=links&format=json&page=';
  return t + param.title;
}

export function getContentApi (param) {
  let t = 'https://en.wikipedia.org/w/api.php' +
    '?action=parse&section=0&prop=text&format=json&page=';
  return t + param.title;
}

export function useFakeData (fake) {
  console.log('api: use fake data', fake);
  _fake = fake;
}
