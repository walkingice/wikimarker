import * as May5 from '../data/May_5';
import * as Nov1 from '../data/November_1';
import * as Detail from '../data/Detail';
import * as Images from '../data/Images';

import * as $ from 'jquery';
import * as qs from 'querystring';

/**
 * A layer to fetch data from Wikipedia.
 */

var _fake = false;

const _END_POINT = 'https://en.wikipedia.org/w/api.php';

function getLinksFake (param) {
  let delay = 600;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let odd = (param.page.length % 2) === 0;
      let links = odd ? rslvLinks(May5) : rslvLinks(Nov1);
      resolve(links);
    }, delay);
  });
}

function getContentFake (param) {
  let delay = 600;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let page = rslvPage(Detail);
      let categories = rslvCategories(Detail);
      // Useless. We already cached needed data as 'Images.json'
      // let titles = rslvImgsTitle(Detail);
      let images = rslvImgsUrl(Images);
      resolve({innerHTML: page.extract, categories, images});
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
  return getAjax(buildLinksApi(param))
    .then((resp) => {
      return rslvLinks(resp);
    });
}

function getContentAjax (param) {
  return getAjax(buildContentApi(param))
    .then((resp) => {
      let page = rslvPage(resp);
      let categories = rslvCategories(resp);
      let titles = rslvImgsTitle(resp).join('|');
      let url = buildImgsQueryApi({titles});

      return Promise.all([page, categories, getAjax(url)]);
    }).then((results) => {
      return {
        innerHTML: results[0].extract,
        categories: results[1],
        images: rslvImgsUrl(results[2])
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

export function buildLinksApi (param) {
  let p = Object.assign({}, linkParam, param);
  return _END_POINT + '?' + qs.stringify(p);
}

const contentParam = {
  action: 'query',
  format: 'json',
  redirects: "",
  clshow: '!hidden',
  prop: 'extracts|images|categories|imageinfo',
  iiprop: 'url'
};

export function buildContentApi (param) {
  let p = Object.assign({}, contentParam, param);
  return _END_POINT + '?' + qs.stringify(p);
}

// ?action=query&format=json&prop=imageinfo&iiprop=url&titles=File:10
const queryImgsParam = {
  action: 'query',
  format: 'json',
  prop: 'imageinfo',
  iiprop: 'url'
};

export function buildImgsQueryApi (param) {
  let p = Object.assign({}, queryImgsParam, param);
  return _END_POINT + '?' + qs.stringify(p);
}

export function useFakeData (fake) {
  console.log('api: use fake data', fake);
  _fake = fake;
}

/** Functions to resolve Wikipedia API response data structure. **/

//{
//  "continue": {
//    ......
//  },
//  "query": {
//    "pages": {
//      "25734": {
//        "pageid": 25734,
//        "title": "Taiwan",
//  .......
//

/*
 * Resolve AJAX response to get information of first apge
 *
 * @param resp AJAX response data
 */
function rslvPage(resp) {
  // assume just query one page. so we only need the first one.
  let firstPageId = Object.keys(resp.query.pages)[0];
  return resp.query.pages[firstPageId];
}

/*
 * Resolve AJAX response to get name of categories which the page belongs to.
 *
 * @param resp AJAX response data
 * @return Array a string array of categories name.
 */
function rslvCategories(resp) {
  let page = rslvPage(resp);
  return page.categories.map((c) => c.title);
}

/*
 * Resolve AJAX response to get name of images which the page contains.
 * Do not get too many images.
 *
 * @param resp AJAX response data
 * @return Array a string array of images name.
 */
function rslvImgsTitle(resp, limit = 5) {
  let page = rslvPage(resp);
  return page.images.map((i)=>{return i.title}).slice(0, limit);
}

//{
//  "query": {
//    "pages": {
//      "-1": {
//        "title": "File:42.jpg",
//        "imageinfo": [
//          {
//            "url": "http://the.answer.is/42.jpg",
//            ...
//          }
//        ]
//      },
//      "-2": {
//        "title": "File:foobar.jpg",
//        .....
//        "imageinfo": [
//          {
//            "url": "https://foo.bar/foobar.jpg",
//            ....
//          }
//        ]
//      ......

/*
 * Resolve AJAX response to get URL of images
 *
 * @param resp AJAX response data
 * @return Array a string array of url
 */
function rslvImgsUrl(resp) {
  let pages = resp.query.pages;
  return Object.keys(pages)
    .map((key) => pages[key])
    .map((p) => p.imageinfo[0].url);
}

function rslvLinks(resp) {
  return resp.parse.links.map((item) => item['*']);
}
