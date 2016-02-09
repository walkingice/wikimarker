webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(71);


/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(229);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(230);

	var _redux = __webpack_require__(276);

	var _reactRedux = __webpack_require__(286);

	var _immutable = __webpack_require__(296);

	var _reducer = __webpack_require__(297);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _Layout = __webpack_require__(299);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Lists = __webpack_require__(308);

	var _Lists2 = _interopRequireDefault(_Lists);

	var _Bookmarks = __webpack_require__(317);

	var _Bookmarks2 = _interopRequireDefault(_Bookmarks);

	var _Detail = __webpack_require__(323);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _storage = __webpack_require__(298);

	var _api = __webpack_require__(302);

	var _log_middleware = __webpack_require__(324);

	var _log_middleware2 = _interopRequireDefault(_log_middleware);

	__webpack_require__(325);

	var _action_creator = __webpack_require__(300);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { component: _Layout2.default },
	  _react2.default.createElement(_reactRouter.Route, { path: '/', components: { main: _Lists2.default } }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/bookmarks', components: { main: _Bookmarks2.default } }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/detail', components: { main: _Detail2.default } }),
	  _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/' })
	);

	(0, _api.useFakeData)((false));

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_log_middleware2.default)(_redux.createStore);

	(0, _storage.setStorage)(localStorage);
	var bmks = (0, _storage.getBookmarks)();
	var store = createStoreWithMiddleware(_reducer2.default, (0, _immutable.fromJS)({ links: [], bookmarks: bmks, detail: '' }));

	// XXX: just for development, should be removed

	store.dispatch((0, _action_creator.setDetail)('Taiwan'));

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    null,
	    routes
	  )
	), document.getElementById('app'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.Map)() : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SET_LIST_TITLE':
	      return setListTitle(state, action.listTitle);
	    case 'SET_LIST':
	      return setList(state, action.links);
	    case 'SET_DETAIL':
	      return setDetail(state, action.title);
	    case 'SET_CONTENT':
	      return setContent(state, action.htmlText);
	    case 'SAVE_BOOKMARK':
	      return saveBookmark(state, action.bookmark, action.notes);
	    case 'REMOVE_BOOKMARK':
	      return removeBookmark(state, action.bookmark);
	  }
	  return state;
	};

	var _immutable = __webpack_require__(296);

	var _storage = __webpack_require__(298);

	function setListTitle(state, title) {
	  return state.set('title', title);
	}

	function setList(state, links) {
	  var bmks = (0, _storage.getBookmarks)();
	  return state.set('links', (0, _immutable.fromJS)(links)).set('bookmarks', (0, _immutable.fromJS)(bmks));
	}

	function setDetail(state, title) {
	  var bmks = (0, _storage.getBookmarks)();
	  var exists = !!bmks[title];
	  return state.set('detail', title).set('saved', exists);
	}

	function setContent(state, text) {
	  return state.set('content', text);
	}

	function saveBookmark(state, bookmark, notes) {
	  (0, _storage.saveItem)(bookmark, notes);
	  var bmks = (0, _storage.getBookmarks)();
	  return state.set('bookmarks', (0, _immutable.fromJS)(bmks));
	}

	function removeBookmark(state, bookmark) {
	  (0, _storage.removeItem)(bookmark);
	  var bmks = (0, _storage.getBookmarks)();
	  return state.set('bookmarks', (0, _immutable.fromJS)(bmks));
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "reducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setStorage = setStorage;
	exports.getStorage = getStorage;
	exports.saveItem = saveItem;
	exports.removeItem = removeItem;
	exports.getBookmarks = getBookmarks;
	exports.saveBookmarks = saveBookmarks;
	var _storage;

	var _BOOKMARK_KEY = 'ThereIsNoSpoon';

	function setStorage(storage) {
	  // for unit test, we might inject mock-storage;
	  _storage = storage;
	}

	function getStorage() {
	  _check();
	  return _storage;
	}

	/* Save item into storage */
	function saveItem(item, notes) {
	  var dict = getBookmarks();
	  notes = Array.isArray(notes) ? notes : [];
	  dict[item] = [].concat(notes);
	  saveBookmarks(dict);
	}

	/* Remove item from storage */
	function removeItem(item, notes) {
	  var dict = getBookmarks();
	  delete dict[item];
	  saveBookmarks(dict);
	}

	function getBookmarks() {
	  var s = getStorage();
	  var item = s.getItem(_BOOKMARK_KEY);
	  item = item ? item : '{}';
	  return JSON.parse(item);
	}

	function saveBookmarks(dict) {
	  var s = getStorage();
	  s.setItem(_BOOKMARK_KEY, JSON.stringify(dict));
	}

	function _check() {
	  if (!_storage) {
	    throw 'no storage to use';
	  }
	  if (!(_storage.getItem instanceof Function)) {
	    throw 'not a valid storage';
	  }
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "storage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(300);

	var _helper = __webpack_require__(301);

	var _api = __webpack_require__(302);

	var _Row = __webpack_require__(307);

	var _Row2 = _interopRequireDefault(_Row);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Layout = _react2.default.createClass({
	  displayName: 'Layout',
	  render: function render() {
	    var main = this.props.main;

	    return _react2.default.createElement(
	      'div',
	      { className: 'main' },
	      main
	    );
	  }
	});

	exports.default = Layout;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Layout.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setListTitle = setListTitle;
	exports.setList = setList;
	exports.setDetail = setDetail;
	exports.setContent = setContent;
	exports.saveBookmark = saveBookmark;
	exports.removeBookmark = removeBookmark;
	function setListTitle(title) {
	  return {
	    type: 'SET_LIST_TITLE',
	    listTitle: title
	  };
	}

	function setList(links) {
	  return {
	    type: 'SET_LIST',
	    links: links
	  };
	}

	function setDetail(title) {
	  return {
	    type: 'SET_DETAIL',
	    title: title
	  };
	}

	function setContent(text) {
	  return {
	    type: 'SET_CONTENT',
	    htmlText: text
	  };
	}

	function saveBookmark(bookmark, notes) {
	  return {
	    type: 'SAVE_BOOKMARK',
	    bookmark: bookmark,
	    notes: notes
	  };
	}

	function removeBookmark(bookmark) {
	  return {
	    type: 'REMOVE_BOOKMARK',
	    bookmark: bookmark
	  };
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "action_creator.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseDate = parseDate;
	exports.randomPick = randomPick;
	/* Given a date object then return string for creating Wikipedia API */
	function parseDate(dateObj) {
	  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	  dateObj = dateObj instanceof Date ? dateObj : new Date();

	  var m = months[dateObj.getUTCMonth()];
	  var d = dateObj.getUTCDate();
	  return m + '_' + d;
	}

	/* links is an array of strings. pick 10 random strings from it. */
	function randomPick(links) {
	  var limit = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

	  // only accept alphabet and white-space
	  var exp = /^[a-zA-Z\s]+$/;

	  var ls = links.filter(function (val) {
	    return exp.test(val);
	  });

	  var output = [];
	  while (ls.length !== 0 && output.length < limit) {
	    var idx = Math.floor(Math.random() * ls.length);
	    output.push(ls.splice(idx, 1).shift());
	  }

	  return output;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "helper.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLinks = getLinks;
	exports.getContent = getContent;
	exports.getLinksApi = getLinksApi;
	exports.getContentApi = getContentApi;
	exports.useFakeData = useFakeData;

	var _May_ = __webpack_require__(303);

	var May5 = _interopRequireWildcard(_May_);

	var _November_ = __webpack_require__(304);

	var Nov1 = _interopRequireWildcard(_November_);

	var _Detail = __webpack_require__(305);

	var Detail = _interopRequireWildcard(_Detail);

	var _jquery = __webpack_require__(306);

	var $ = _interopRequireWildcard(_jquery);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * A layer to fetch data from Wikipedia.
	 */

	var _fake = false;

	function drainLinks(data) {
	  return data.parse.links.map(function (item) {
	    return item['*'];
	  });
	}

	function getLinksFake(param) {
	  var delay = 600;

	  return new Promise(function (resolve, reject) {
	    setTimeout(function () {
	      var odd = param.title.length % 2 === 0;
	      var links = odd ? drainLinks(May5) : drainLinks(Nov1);
	      resolve(links);
	    }, delay);
	  });
	}

	function getContentFake(param) {
	  var delay = 600;

	  return new Promise(function (resolve, reject) {
	    setTimeout(function () {
	      resolve(Detail.parse.text['*']);
	    }, delay);
	  });
	}

	function getAjax(url, parser) {
	  return new Promise(function (resolve, reject) {
	    $.ajax({
	      url: url,
	      jsonp: 'callback',
	      dataType: 'jsonp'
	    }).then(function (resp) {
	      resolve(parser(resp));
	    }, reject);
	  });
	}

	function getLinksAjax(param) {
	  return getAjax(getLinksApi(param), function (resp) {
	    return drainLinks(resp);
	  });
	}

	function getContentAjax(param) {
	  return getAjax(getContentApi(param), function (resp) {
	    return resp.parse.text['*'];
	  });
	}

	/* return a promise */
	function getLinks(param) {
	  param.lang = param.lang ? param.lang : 'en';
	  return _fake ? getLinksFake(param) : getLinksAjax(param);
	}

	/* return a promise */
	function getContent(param) {
	  param.lang = param.lang ? param.lang : 'en';
	  return _fake ? getContentFake(param) : getContentAjax(param);
	}

	function getLinksApi(param) {
	  var t = 'https://en.wikipedia.org/w/api.php' + '?action=parse&prop=links&format=json&page=';
	  return t + param.title;
	}

	function getContentApi(param) {
	  var t = 'https://en.wikipedia.org/w/api.php' + '?action=parse&section=0&prop=text&format=json&page=';
	  return t + param.title;
	}

	function useFakeData(fake) {
	  console.log('api: use fake data', fake);
	  _fake = fake;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 303:
/***/ function(module, exports) {

	module.exports = {
		"parse": {
			"title": "May 5",
			"pageid": 19352,
			"links": [
				{
					"ns": 4,
					"exists": "",
					"*": "Wikipedia:Protection policy"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2015 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2014 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2013 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2012 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2011 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2010 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2009 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2008 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2007 May 5"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2006 May 5"
				},
				{
					"ns": 10,
					"exists": "",
					"*": "Template:Months"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1194"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1210"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1215"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1243"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1260"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1306"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1309"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1479"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1494"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1525"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1542"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1586"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1640"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1671"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1672"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1684"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1700"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1705"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1747"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1749"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1760"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1762"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1764"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1766"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1789"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1800"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1808"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1809"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1811"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1813"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1818"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1821"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1826"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1827"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1830"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1832"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1833"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1834"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1835"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1843"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1846"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1855"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1858"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1859"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1860"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1862"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1864"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1865"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1866"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1869"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1877"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1883"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1884"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1886"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1887"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1889"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1890"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1891"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1892"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1896"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1898"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1899"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1901"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1903"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1904"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1905"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1906"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1907"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1908"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1909"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1910"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1911"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1913"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1914"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1915"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1916"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1917"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1919"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1920"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1921"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1922"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1923"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1924"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1925"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1926"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1927"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1928"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1929"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1930"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1931"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1932"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1933"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1934"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1935"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1936"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1937"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1938"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1939"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1940"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1941"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1942"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1943"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1944"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1945"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1946"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1947"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1948"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1949"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1950"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1951"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1952"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1955"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1956"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1957"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1958"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1959"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1961"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1962"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1963"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1964"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1965"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1966"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1967"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1968"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1969"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1970"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1971"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1972"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1973"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1973 Kentucky Derby"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1974"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1975"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1976"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1977"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1978"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1979"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1980"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1981"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1982"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1983"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1984"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1985"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1987"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1988"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1989"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1990"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1991"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1991 Washington, D.C. riot"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1992"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1993"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1994"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1995"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1997"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1999"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2000"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2001"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2002"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2003"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2004"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2005"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2006"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2007"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2008"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2010"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2011"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2012"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2013"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2014"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2014 Aegean Sea yacht and dinghy capsizing"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2014 Po Toi Island ship collision"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2015"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2016"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "553"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "867"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "984"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "A. Sabapathy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aad van Mil"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aargau"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aatos Erkko"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ace Cannon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Act of Defiance"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Addis Ababa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Adele"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Adrien Maurice de Noailles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aegean Sea"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Afonso III of Portugal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Afrikaans"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Agnes Knochenhauer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Agustín Barrios"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alan Shepard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alexander Ragulin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alexis Sinduhije"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alexisonfire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alfred Hermann Fried"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alice Faye"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alitalia Flight 112"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "American Civil War"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "American Indian Wars"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Anastasios Pantos"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Andor Lilienthal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "André Masséna"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Angelo Italia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Angelus of Jerusalem"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ann B. Davis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Anna Bergman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Annie Villeneuve"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Anti-austerity movement in Greece"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Archibald Wavell, 1st Earl Wavell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Armenia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arthur Leonard Schawlow"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arthur Wellesley, 1st Duke of Wellington"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Atıf Yılmaz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August Wilhelm von Hofmann"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aurélien Recoing"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Austerity"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aydın Menderes"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ayhan Işık"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Azerbaijan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bailey bridge"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Barbara Wagner"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bartolomeo Vanzetti"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Baseball"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Baskin-Robbins"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of Fuentes de Oñoro"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of Hegra Fortress"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of Puebla"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of Vinjesvingen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of the Wilderness"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bay View Massacre"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bella van der Spiegel-Hage"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ben Wright (English actor)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bergen-Belsen concentration camp"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bernard Pivot"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bertha Benz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bhumibol Adulyadej"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bible Black (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bill Musselman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bill Robertson (Louisiana politician)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bill Ward (actor)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bill Ward (musician)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Billy Frank, Jr."
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bishkek Protocol"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bitburg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Black Lungs"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Black Sabbath"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Blind Willie McTell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bly, Oregon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bo Larsson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bob Said"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bobby Ellsworth"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bobby Sands"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bobsled"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bolesław III Wrymouth"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Borknagar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Boston Red Sox"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brian Sedgemore"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brian Williams"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brooke Hogan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brussels"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Buena Vista Social Club"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Butler Act"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Butler Derrick"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Calendar of saints"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Caning in Singapore"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Cantons of Switzerland"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Carlos Saavedra Lamas"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Carnegie Hall"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Casimir II the Just"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Casino Versus Japan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chancellor of Germany (Federal Republic)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles Exbrayat"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles II of Naples"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles I of England"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles Nagy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charmane Star"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chief Bender"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Children's Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Children's Day (Japan)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Choi Kang-hee (actress)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chris Brown"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Christian Valdéz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Christopher Columbus"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Christopher Morley"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Cincinnati"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Cinco de Mayo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Citronelle, Alabama"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Clara Schønfeld"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Claude Choules"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "CliffsNotes"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Clifton Hillegass"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Colin Edwards (footballer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Colonel (United States)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Community of Portuguese Language Countries"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Conclusion of the American Civil War"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Constantine Palaiologos (son of Michael VIII)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Constitution Day (Kyrgyzstan)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Container ship"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Corey Parker (rugby league)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Coronation Day (Thailand)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Council of Europe"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Count Carl Johan Bernadotte of Wisborg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Craig David"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Craig Gruber"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Crimes against humanity"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Crucial Three"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Cy Young"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Czech resistance"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Daisuke Ban"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dana Wynter"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Danielle Fishel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "David Frost"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "De Facto (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Delia Derbyshire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "DerMarr Johnson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dianne Willcocks"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dieter Brummer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dilys Watling"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Don Payne (writer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Donald Bailey (civil engineer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Douglas Marland"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dream Theater"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Duane Carter"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Echo & the Bunnymen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eddi Arent"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Edmund Ignatius Rice"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eduardo Mac Entyre"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Edward Montagu, 2nd Earl of Manchester"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eidolon (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Electrafixion"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Elf (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Elisabeth Fraser"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Elsie Eaves"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Emanuele Giaccherini"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Embassy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Emperor Uda"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eppie Bleeker"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ernest Tyldesley"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ervin Lázár"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Estates-General of 1789"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ethiopia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eugénie de Montijo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Europe Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "European integration"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Evolution"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Explorers Club (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "FBI"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fabián de la Rosa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fable (video game series)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Farid Kamil"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Feast of al-Khadr"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ferdinand von Richthofen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ferrie Bodde"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fingerprint"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fire balloon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Floyd Gottfredson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Francine Niyonsaba"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Françoise Charlotte d'Aubigné"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Frederick Augustus I of Saxony"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Frederick III, Elector of Saxony"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Freeman Gosden"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gallows (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Genoa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Geoffrey Fisher"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "George Knobel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "George Sidney"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Georgios Papadopoulos"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gerberga of Saxony"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "German occupation of Czechoslovakia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gilles Grangier"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gino Bartali"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Giulietta Simionato"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Giuseppe Garibaldi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Glen Kidston"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Glenn Seton"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Government-in-exile"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Governor-General of India"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Governor of Lagos State"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Graham Dorrans"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Greek government-debt crisis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Greg (cartoonist)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Greg Quill"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gregorian calendar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Guru Amar Das"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Guyana"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Haile Selassie"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hank Green"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hannah Davis (model)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hans Abramson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hans Jansen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hans Pfitzner"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Harold Miner"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Heidi Kozak"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Heike Henkel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Henry Cavill"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Henry Sidney"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Henryk Sienkiewicz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Herbie Taylor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hilary of Arles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hiroshi Hase"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Horst Schumann"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hubert Howe Bancroft"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hubert de Burgh, 1st Earl of Kent"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hugh Courtenay, 18th Earl of Devon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hugo Banzer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hunger strike"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Huntington Avenue Grounds"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ian McCulloch (singer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ian Michael Smith"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ignacio Ramonet"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ignacio Zaragoza"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Igor Kashkarov"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ilene Woods"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Indian Arrival Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "International Midwives' Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "International Military Tribunal for the Far East"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "International observance"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Iran"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Iran–Contra affair"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Irene Gut Opdyke"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Irv Robbins"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Iryna Vilde"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "István Bujtor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jack Wishna"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jackie Lynn Taylor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jamaica"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James Beard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James Cracknell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James Gilbert (producer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James LaBrie"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jay Bothroyd"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean-Charles Prince"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean-Claude Pascal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean-François Copé"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean-François Dumoulin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean-Frédéric Edelmann"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean Astruc"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean Corston, Baroness Corston"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jens Fredrik Ryland"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jeremy Michael Ward"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jerry Wallace"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jessica Dubroff"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jessica Schwarz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jessie Cave"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jim Kelly (martial artist)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jobst Brandt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John, King of England"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John B. Stetson Company"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Batterson Stetson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John L. Leal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John MacBride"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Maxton"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Rhys-Davies"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John T. Scopes"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Waters (director born 1893)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Williams (actor)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Wilshere"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Johnnie Taylor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jomanda"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jorge Llopart"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Josh Weinstein"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Juan Pablo Sorín"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Juno Reactor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Justiciar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jutta of Kulmsee"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kaoru Wada"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Karl Benz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Karl Marx"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Katherine Rake"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kingdom of Italy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kingdom of the Two Sicilies"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kleisoura, Kastoria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Klipsch Audio Technologies"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kublai Khan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kurt Böhme"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kurt Loder"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kyan Douglas"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "LaPhonso Ellis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lakota people"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lance Henriksen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Larissa Wilson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lars-Inge Svartenbrandt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Laser"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lasse Åberg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Laurence Shirley, 4th Earl Ferrers"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leap year"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leo Lionni"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leo Ryan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leopold I, Holy Roman Emperor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leopold II, Holy Roman Emperor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leslie Law"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Levent Kazak"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Liberation Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Liberation Day (Denmark)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Liberation Day (Netherlands)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lieutenant Governor of Saskatchewan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lisa Eilbacher"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lisa Jane Persky"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "List of Budget Ministers of France"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Long Kesh"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lord Chamberlain"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lord Deputy of Ireland"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lord Lieutenant of Northamptonshire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Louis Christophe François Hachette"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Loïck Landre"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ludwig Erhard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lusophone"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lutheran"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mabel Gay"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Maggie MacNeal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Magna Carta"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mai Agan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marc Alaimo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marcelle Bittar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March of the Iron Will"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marcos Rogério Oliveira Duarte"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marija Šestić"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marshall Islands"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Martyrs' Day (Albania)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mary Kies"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mats Bergman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Maurice Raoul-Duval"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 5 (Eastern Orthodox liturgics)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Meb Keflezighi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mechelen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Medal of Honor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Megadeth"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Melinda Culea"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Melocure"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Memorial Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Menlo Park, California"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mercury-Redstone 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mervyn S. Bennion"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael Lindsay-Hogg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael Murphy (actor)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael Otedola"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael P. Fay"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael Palin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael Shaara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mike Redmond"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mikhail Botvinnik"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Miklós Radnóti"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Milwaukee"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Minami Takayama"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Minister for Veterans' Affairs (Australia)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Minister of Communications (South Africa)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Minister of Social Affairs of Estonia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mongol Empire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Morgan Pehme"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Morris Graves"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mount Pleasant, Washington, D.C."
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mouth & MacNeal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "MullMuzzler"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mythology (UK band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mário Quintana"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nagorno-Karabakh conflict"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Napoleon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Napoleon III"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nathan Chen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Naushad Ali"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nazi Germany"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nazism"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nellie Bly"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nelson Miles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicholas Guest"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicola Sacco"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicolas Vanier"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nikos Gounaris"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nils Moritz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nobel Peace Prize"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nobel Prize in Literature"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nobel Prize in Physics"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "North Bend, Ohio"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Norwegian Campaign"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Olav Sepp"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Operation Nimrod"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Oscar Holderer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Outer space"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Overkill (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Palau"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Palermo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Palestinian people"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pat Carroll (actress)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Patent"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Patrick Gowers"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Patriots' Victory Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Paul Wilbur Klipsch"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Peninsular War"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Perfect game"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Peter Gustav Lejeune Dirichlet"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Peter Howitt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Peter Molyneux"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Philadelphia Athletics"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pierre Jean George Cabanis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pitcher"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Prague uprising"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of Bolivia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of India"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of Nigeria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Prime Minister of Bulgaria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Prime Minister of Greece"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pritilata Waddedar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Project Mercury"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Prussia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pyotr Ilyich Tchaikovsky"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pío Leyva"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Qemal Stafa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Raai Laxmi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rainbow (rock band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Randall Gay"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Raven Lord"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ray Gosling"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Raúl Jiménez"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Richard E. Grant"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Richard Nixon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Richard O'Dwyer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Richard Schaal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Richard Wollheim"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ritsuko Okazaki"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rob Williams (basketball)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert Craufurd"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert DiPierdomenico"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert Marien"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert Rehme"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert Ressler"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robin McNamara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rockcityclub"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Roger Rees"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ron Arad (pilot)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ronald Reagan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rossella Falk"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Roy Padayachie"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rudolf Finsterer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sage Stallone"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Saint George"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Saint Helena"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Salvadoran"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sam Bockarie"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Samuel Cooper"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Santiago Cabrera"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sarah Kirsch (poet)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Scopes Trial"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Scott Ware"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Scott Westerfeld"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Second Council of Constantinople"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Secret (South Korean band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Secretariat (horse)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Seiji Ara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Senior Citizens Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sergei Stanishev"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Shawn Drover"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Shoko Nakagawa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Short Parliament"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Shubha Phutela"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sicily"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Siim Sellis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sikh Guru"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Silas Adams"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Silk"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Simon Rimmer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Singapore"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sir Robert Inglis, 2nd Baronet"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sitting Bull"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Skye Sweetnam"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Song Jieun"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sophia Campbell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sot Chitalada"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sovereignty"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Special Air Service"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Spotsylvania County, Virginia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stan Goldberg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stanisław Kazimierczyk"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Steve Scott (athlete)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Steve Stevens"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stian Omenås"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Strasbourg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stratton Brothers case"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Straw"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sudan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sudan Liberation Army"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sumo Cyco"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Surendranath (cricketer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sylvia Fedoruk"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Søren Kierkegaard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Taisuke Miyazaki"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Takehito Koyasu"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tammy Wynette"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tango no sekku"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Terrence Wheatley"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thailand"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Grateful Dead"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Mars Volta"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Nixon Interviews"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Theodore Harold Maiman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thomas B. Thrige"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thomas Cecil, 1st Earl of Exeter"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Three Stooges"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Timothy John Byford"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tina Yothers"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Todd Newton"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Toomas Vilosius"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Train robbery"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Treaty of London (1949)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Treaty of Saint Petersburg (1762)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tsepo Masilela"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ty LaForest"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tyrone Power"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Umaru Musa Yar'Adua"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "United States Army"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "United States Congress"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Vasilis Diamantopoulos"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Victor Garland"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Viktor Hartmann"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Vincent Kartheiser"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Violet Jessop"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Virginie Efira"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wade MacNeil"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Walter Gotell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Walter Sisulu"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "War crime"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Washington, Georgia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Waterloo, New York"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Weaving"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wehrmacht"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "White Noise (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Will Hutchins"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Willem Witteveen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "William George Beers"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Winter Rose (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Woman Haters"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "World War II"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wouter D'Haene"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Xenofon Fetsis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yarn"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yosef Merimovich"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yossi Benayoun"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yōsuke Mikami"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Zail Singh"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Zekai Özger"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Édgar Ponce"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Şeker Ahmed Pasha"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 0"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 0"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 9"
				},
				{
					"ns": 11,
					"exists": "",
					"*": "Template talk:Months"
				}
			]
		}
	};

/***/ },

/***/ 304:
/***/ function(module, exports) {

	module.exports = {
		"parse": {
			"title": "November 1",
			"pageid": 21460,
			"links": [
				{
					"ns": 4,
					"exists": "",
					"*": "Wikipedia:Protection policy"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2015 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2014 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2013 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2012 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2011 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2010 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2009 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2008 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2007 November 1"
				},
				{
					"ns": 100,
					"exists": "",
					"*": "Portal:Current events/2006 November 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1141"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1179"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "11th Dalai Lama"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1214"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1296"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1339"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1348"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1351"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1391"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1399"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1423"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1461"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1503"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1512"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1520"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1526"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1530"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1539"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1546"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1549"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1555"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1567"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1570"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1585"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1588"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1596"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1604"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1607"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1611"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1612"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1625"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1636"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1642"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1643"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1661"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1666"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1676"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1678"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1683"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1688"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1700"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1720"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1727"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1755"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1755 Lisbon earthquake"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1757"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1762"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1765"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1769"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1778"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1782"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1790"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1800"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1805"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1808"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1814"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1831"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1838"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1839"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1847"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1848"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1849"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1852"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1859"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1860"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1861"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1862"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1864"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1870"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1871"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1872"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1876"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1877"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1878"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1880"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1881"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1884"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1886"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1887"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1888"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1889"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1894"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1896"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1897"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1898"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1901"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1902"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1903"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1905"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1906"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1907"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1911"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1912"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1914"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1915"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1916"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1917"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1918"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1919"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1920"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1921"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1922"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1923"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1924"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1926"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1927"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1928"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1929"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1930"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1931"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1932"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1933"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1934"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1935"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1936"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1937"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1938"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1939"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1940"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1941"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1942"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1943"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1944"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1945"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1946"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1947"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1948"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1949"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1950"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1951"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1952"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1953"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1954"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1955"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1956"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1957"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1958"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1959"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1960"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1961"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1962"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1963"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1963 South Vietnamese coup"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1964"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1965"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1966"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1967"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1968"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1969"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1970"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1971"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1972"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1973"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1974"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1975"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1976"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1977"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1978"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1979"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1980"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1981"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1982"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1983"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1984"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1985"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1986"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1987"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1988"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1991"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1993"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1994"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1995"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1996"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1997"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "1999"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2000"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2001"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2002"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2004"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2005"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2006"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2007"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2008"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2009"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2010"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2011"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2012"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2012 Riyadh truck crash"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2013"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2013 Los Angeles International Airport shooting"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2014"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2015"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "2016"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "22 October"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "365"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "846"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "955"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "996"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "A-ha"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "A. N. Sherwin-White"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "A. R. Gurney"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Abednigo Ngcobo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Abolition of the Ottoman sultanate"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Abraham Lincoln"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Adam Sapieha"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aditya Dev"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Adrienne Shelly"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Agustín García Calvo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ahmed Muhtar Pasha"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ai Fukuhara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aircraft carrier"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Airplay (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Aishwarya Rai"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Al Arbour"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Albany, Western Australia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alberto Natusch"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alemanni"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alex Prager"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alex Wolff"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alexander III of Russia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alexander Samoylov"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alfio Basile"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alfred Jarry"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Alfred Wegener"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Algeria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Algerian War of Independence"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "All Saints' Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "All Saints' Flood (1570)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Amadeus VII, Count of Savoy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Amani Abeid Karume"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "America (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "American Civil War"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ananda College"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Andhra Pradesh"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Anine Kruse"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Anna of Austria, Queen of Spain"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Annie Oakley"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ansel Adams"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Anthony Kiedis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Anthony van Hoboken"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Antigua and Barbuda"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Antoine Kohn"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Antonio Canova"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Apparatjik"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arabic alphabet"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arbor Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Archbishop"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arecibo, Puerto Rico"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arecibo Observatory"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Argentina"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arne Pedersen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arnold Pihlak"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Arthur Legat"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Artificial insemination"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Assia (singer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Assumption of Mary"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Athenagoras I of Constantinople"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Atom bomb"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Attempted assassination of Harry S. Truman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Attitudes (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Austrian Empire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Austro-Hungarian Empire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Austromoine"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Azerbaijan Soviet Socialist Republic"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bad Company"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Banat Republic"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Barbara Becker"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Barbara Bosson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Barry Sadler"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of Coronel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of Empress Augusta Bay"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Battle of Walcheren Causeway"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Beat Happening"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Belita Moreno"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Benignus of Dijon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bernard Erhard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Beth Leavel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Betsy Palmer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Beverly Schmidt Blossom"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bhutan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Big & Rich"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Big Kenny"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bilgin Defterli"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bill Anderson (singer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bill Tilghman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bill Woodrow"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Blair House"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Blind Faith"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Blood, Sweat & Tears"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bo Bice"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bobby Heenan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Boies Penrose"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bombing of Rabaul (November 1943)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Boris Stürmer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Boston"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Boston University"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bougainville Campaign"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bougainville Island"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brad Armstrong (wrestler)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bradley Orr"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brazil"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brittany Maynard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Brooklyn"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bruce Grocott, Baron Grocott"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Buffalo Bill"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Buffalo Bill's Wild West Show"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Bulgaria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Caesarius of Africa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Cahit Aral"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Calan Gaeaf"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Calvin Johnson (musician)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Cape Lookout (North Carolina)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Carla van de Puttelaar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Carlos Paião"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Carlos Páez Vilaró"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Carlos Saavedra Lamas"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Catherine Jagiellon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles Brantley Aycock"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles Duncan Michener"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles II of Spain"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charles Weeghman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Charlie O'Donnell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chen Zude"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chief Justice of India"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chief Secretary to the Treasury"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Children's Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chile"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chong Chee Kin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Chosuke Ikariya"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Circumnavigation"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Clarence E. Miller"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Club Cinq-Sept fire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Coco Crisp"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Colette Renard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Congress of Vienna"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Cool Rays"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Coronation"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "County (United States)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "County Tipperary"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Coup d'état"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Craig Serjeant"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Croatia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dale Carnegie"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dan Peek"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Daran Norris"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "David Foster"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "David of Trebizond"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Day of the Dead"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Day of the Innocents"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Def Leppard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Delawana (schooner)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dennis Muren"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Destiny's Child"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Diana Wellesley, Duchess of Wellington"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Diego Sarmiento de Acuña, 1st Count of Gondomar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Distance (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dixie Lee"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dmitry Pozharsky"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dogmatic definition"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dominique Mbonyumutwa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Donald Saddler"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dorothy Howell Rodham"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Douglas DC-6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "DuSable Museum of African American History"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dub Narcotic Sound System"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Dwight D. Eisenhower"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ecuador"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ecumenical Patriarch of Constantinople"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eddie Colman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Edmund Blunden"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Edmund Burke"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Edward Greeves, Jr."
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Edward Said"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Edward Van Sloan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ekrem Akurgal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Electronic Frontier Foundation"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Emma Albani"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Emmaline Henry"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Empress Matilda"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Endel Laas"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eniwetok"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eriko Hara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ernesto Presas"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Esperanto (schooner)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Esther Hautzig"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eugen Jochum"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "European Union"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Eyþór Arnarson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ezra Pound"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "F. J. Robinson, 1st Viscount Goderich"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fabrice Luchini"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Family (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Feast day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Feministing"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ferdinand Magellan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fernando Valenzuela"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "First Australian Imperial Force"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Florent Carton Dancourt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Folk Catholicism"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "France Antarctique"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Francis Arinze"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "François-Marie, comte de Broglie"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fred Thompson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "French Revolution"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Fresnel lens"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gaelic Athletic Association"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Garlieb Merkel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gary Howell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gary Player"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gaul"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Geoff Horsfield"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Georg Philipp Harsdörffer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "George Armstrong (footballer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "George B. McClellan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "George Kenner"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "George S. Irving"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Georgios Papandreou"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gerald Ratner"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Geto Boys"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gillian Knight"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ginger Baker's Air Force"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gisbertus Voetius"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Giulio Romano"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Glorious Revolution"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Go (game)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gordon R. Dickson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Governor of North Carolina"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Governor of Rhode Island"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Grantland Rice"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gregorian calendar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Griselio Torresola"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Guadalcanal Campaign"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Guatemala"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Guillaume Durand"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gunther Plaut"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Gustav IV Adolf of Sweden"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Günter Schabowski"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "HMS Good Hope (1901)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "HMS Monmouth (1901)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Haiti"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hakimullah Mehsud"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Halifax, Nova Scotia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hannah Höch"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Harald Quandt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Harry Atkinson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Harry S. Truman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Haryana"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Haryana Foundation Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Health Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hellevoetsluis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hello Kitty"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Henri Troyat"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Henry I, Duke of Bavaria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hermann Bondi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hermann Braun"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hermann Broch"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hernandez, New Mexico"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hillary Clinton"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hiệp Hòa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Holy day of obligation"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Honda"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Honda Accord"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Honinbo Shuei"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Houston McTear"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hugo Distler"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Huguenot"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hutu"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Hydrogen bomb"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ileana D'Cruz"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Independence"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Independence Day (Antigua and Barbuda)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Inka Friedrich"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Italo-Turkish War"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ivan Shuvalov"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "J. R. Jayewardene"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jackie Fairweather"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jacques Attali"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jacques Piccard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jacques Plante"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jadwiga Smosarska"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James Bradford (weightlifter)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James Broderick"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James J. Kilpatrick"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "James Sherard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jan Brożek"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jan Davis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean-Luc Pépin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean-Pierre Roy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean Coutu (actor)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean Daurat"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jean Nicolet"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jenny McCarthy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jeremy Hunt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jessica Valenti"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jiang Yuyuan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jim Steinman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jim Steinmeyer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Joe DeRenzo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Joel Barnett, Baron Barnett"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Johan Wagenaar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Adams"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Clark (actor)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John F. Kennedy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John III of Sweden"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John McEnery"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John S. Romanides"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Strype"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Taylor (Mormon)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John V, Duke of Brittany"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John W. Peterson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Williamson (singer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "John Y. McCollister"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Johnny Indrisano"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Jon Wilkin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Josh Wicks"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kanyakumari"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Karnataka"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Katja Riemann"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Katsuhisa Hattori"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ken Miles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kerala"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Keryn Jordan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kim Krizan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "King James II of England"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "King Vidor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "King of Valencia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kinky Friedman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kitay-gorod"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kombatan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Konrad Mägi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kool & the Gang"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kraków"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ksenija Balta"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "L. S. Lowry"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "LaTavia Roberson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Larry Flynt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Larry Flynt Publications"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Latin alphabet"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leap year"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lebanon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leon Jaworski"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Leopold III, Duke of Austria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Library of Congress"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lighthouse"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lisbon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "List of First Ladies of the United States"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "List of Ministers of Justice of Imperial Russia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "List of Ottoman Grand Viziers"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "List of Prime Ministers of Greece"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lithuania"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Logan Marshall-Green"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Longmont, Colorado"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Los Angeles International Airport"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lotus Software"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lou Donaldson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Louis Dewis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Louis the Stammerer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Louise Boije af Gennäs"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lutheran"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Luxembourg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Luís Manuel Ferreira Delgado"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lyle Lovett"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Lynne Russell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Maastricht Treaty"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mac Dre"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mackinac Bridge"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Magne Furuholmen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Maharashtra Andhashraddha Nirmoolan Samiti"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Malbone Street Wreck"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Malta"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mamie Eisenhower"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Man o' War"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Manchuria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Manfred Mann's Earth Band"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Manju Warrier"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Manuel Ferrara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marcia Wallace"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Margaret Taylor-Burroughs"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mark Austin (journalist)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mark Hughes"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marshall Islands"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mary Kate Schellhardt"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Marysville, Ohio"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Masahiro Tanaka"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Massachusetts"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Matanikau Offensive"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Matt L. Jones"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Matt Moulson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Maurice Woods"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mauritius"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Max Adrian"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Maxie Rosenbloom"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Medical school"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Megan Wing"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mehmed VI"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Menachem Elon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Meredith Kercher"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Metal Yoshida"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Meteorology"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mia Korf"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Micaela Schäfer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael D. Griffin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michael Piller"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michał Sopoćko"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Michelangelo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mike Burney"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mike Mendoza"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Milan Dudić"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Miloš Krasić"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mingun Sayadaw"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Minister of Labour (Canada)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ministry of Science, Industry and Technology (Turkey)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Miss World 1994"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mitch Kapor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mitch Lucker"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Montreal Canadiens"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Moonrise, Hernandez, New Mexico"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Moshe Teitelbaum (Satmar)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Motion Picture Association of America"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Motion Picture Association of America film rating system"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Murviedro"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mysore"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Mysore State"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "NHL"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Napoleon I"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Napoleonic Wars"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Narendra Dabholkar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nat and Alex Wolff"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Natalia Tena"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nathaniel Mayer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "National Geographic (magazine)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "National Liberation Front (Algeria)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "National Weather Service"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nevada"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicholas Eudaimonoioannes"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicholas II of Russia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicholas Mavroules"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nick Owen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicky Grist"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nicolas Boileau-Despréaux"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nikolay Przhevalsky"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Noah Beery, Jr."
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nobel Peace Prize"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nobel Prize in Literature"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nobel Prize in Physics"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nobel Prize in Physiology or Medicine"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nordahl Grieg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Norman Krasna"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "North Korea"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 1 (Eastern Orthodox liturgics)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "November 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Nuclear proliferation"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Olaf Kopvillem"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Old High German"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Old Style"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Oliver Plunkett"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Operation Buster–Jangle"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Operation Ivy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Oscar Collazo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Oscar Temaru"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ostarrîchi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Othello"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Otto III, Holy Roman Emperor"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ottoman Empire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Oud"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Papal infallibility"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Park Shin-yang"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Parris Island"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pascual Pérez (baseball)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Patrik Ringborg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Paul-Émile Borduas"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Paul Dennis Reid"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Paul Dickov"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Paul Tibbets"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Paul Wellings"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pavel Milyukov"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Peace Corps"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Penn Badgley"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Perikles Ioannidis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Peru"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Peter Ostrum"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Phil Myre"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Phil Silvers"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Philip II of France"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Philip Noel-Baker, Baron Noel-Baker"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Philippines"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pierre Pithou"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Piet Rietveld"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pitsj"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pope John Paul II"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pope Julius II"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pope Pius XII"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Premier of Alberta"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Premier of Quebec"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of French Polynesia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of Sri Lanka"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of The Church of Jesus Christ of Latter-day Saints"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of Turkey"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "President of Zanzibar"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Priesthood"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Prime Minister of Lebanon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Prime Minister of New Zealand"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Prime Minister of the United Kingdom"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Princess Elisabeth of Hesse and by Rhine (1864–1918)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Province of New York"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Provinces of New Zealand"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Public holidays in Algeria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Public holidays in Bhutan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Public holidays in Bulgaria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Public holidays in India"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Puerto Rico"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Pál Luthár"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "R. W. B. Lewis"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rabaul"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rabbit"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rachel Ticotin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Radio telescope"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rafic Hariri"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ralph Klein"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ramesh Chandra Lahoti"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rapid transit"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Red Hot Chili Peppers"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Reece Brown"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Reflections on the Revolution in France"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "René Lévesque"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Republic of China (1912–49)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rhine"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ric Grech"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ricardo Rodríguez (racing driver)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Richmond, Virginia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rick Allen (drummer)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rio de Janeiro"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Riyadh"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert B. Laughlin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert Foxworth"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert H. Rines"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert Hart (musician)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert MacArthur"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Robert Staughton Lynd"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rodong Sinmun"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Roger Kellaway"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Roger Quilter"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Roman Catholic Church"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ronald Bell (musician)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Royal Navy"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rudolf IV, Duke of Austria"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Russ Kemmerer"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Russian Empire"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Rwanda"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "S. Ali Raza"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Saint-Laurent-du-Pont"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sakutarō Hagiwara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Salvatore Adamo"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Samoa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Santa Muerte"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Saudi Arabia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Seabiscuit"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sean Roberge"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Secretary of State for Commonwealth Relations"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Secretary of State for Health"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Seljuq Turks"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Serbia and Montenegro"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Serf"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Serge Garant"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sergei Artyukhin"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Severo Ochoa"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Seychelles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Shakir Stewart"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Shannon Tavarez"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sharron Davies"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sherwin Campbell"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Shizuka Kamei"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sholem Asch"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Shunsuke Kikuchi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Siege of Sinope"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Siegfried Jamrowski"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sigma Phi Epsilon"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sinop, Turkey"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sippie Wallace"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sistine Chapel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Skitch Henderson"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Skylark (Canadian band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Slovakia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Slovenia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Solomon Islands"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sophie B. Hawkins"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Southwestern United States"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Spencer Perceval"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Springhill, Nova Scotia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Springhill mining disaster"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Sri Lanka"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stalinism"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stamp Act 1765"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "State Duma"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "States Reorganisation Act, 1956"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Static-X"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stephen, King of England"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stephen Antonakos"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Stephen Crane"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Strait of Magellan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Student fraternities and sororities in North America"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Suicide Silence"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Susanna Clarke"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Süleyman Demirel"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Taliban"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tamil Nadu"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tanel Toom"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tato Laviera"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ted Lowe"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Terry Knight"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Terry Knight and the Pack"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Company of Snakes"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Drifters (Japanese band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Go Team"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Jones Gang"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Microphones"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "The Tempest"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Theodor Mommsen"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Theodore Hall"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thirteen Colonies"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thizz Entertainment"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thomas Edison"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thomas R. Fitzgerald (judge)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Thurles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tie Domi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tim Cook"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Time of Troubles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tina Arena"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Toni Collette"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Toussaint-Guillaume Picquet de la Motte"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Traffic (band)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Transportation Security Administration"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tsunami"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Turkey"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Turkish alphabet"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Turkmenistan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tutsi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Tyler Reks"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Ukraine"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Umberto Agnelli"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Union Army"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Union of Valencia"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "United Airlines Flight 629"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "United Nations"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "United States Marine Corps"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "University of Richmond"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "V. V. S. Laxman"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Valentinian I"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Vic Power (baseball)"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Victor Sen Yung"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Victoria de los Ángeles"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Vikram Chatwal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "W. E. D. Ross"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wadih El Safi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Walcheren"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Waldemar Hammenhög"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wales"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Walter Payton"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "War Admiral"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "War of the Third Coalition"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Warren Spragg"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Watergate scandal"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wayne Static"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "White House"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Whitehall Palace"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "William Coddington"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "William III of Orange"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "William Mathias"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "William Merritt Chase"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "William Shakespeare"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "William Styron"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Willie D"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wind of destruction"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Winfield Scott"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wizzard"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Women Strike for Peace"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "World War II"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wálter Guevara"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yahya Kemal Beyatlı"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yma Sumac"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yossef Gutfreund"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yuko Ogura"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Yuko Shimizu"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Étienne de La Boétie"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "April 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "August 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Beltane"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "December 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "February 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "International observance"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 0"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "January 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "July 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "June 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Karnataka Rajyotsava"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Kerala Piravi"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 0"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "March 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "May 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "National Bison Day"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Neopagan"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 31"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "October 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Samhain"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 1"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 10"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 11"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 12"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 13"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 14"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 15"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 16"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 17"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 18"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 19"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 2"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 20"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 21"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 22"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 23"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 24"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 25"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 26"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 27"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 28"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 29"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 3"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 30"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 4"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 5"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 6"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 7"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 8"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "September 9"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "Wheel of the Year"
				},
				{
					"ns": 0,
					"exists": "",
					"*": "World Vegan Day"
				},
				{
					"ns": 10,
					"exists": "",
					"*": "Template:Months"
				},
				{
					"ns": 11,
					"exists": "",
					"*": "Template talk:Months"
				}
			]
		}
	};

/***/ },

/***/ 305:
/***/ function(module, exports) {

	module.exports = {
		"parse": {
			"title": "Taiwan",
			"pageid": 25734,
			"text": {
				"*": "<div class=\"hatnote\">\"Republic of China\" redirects here. For the People's Republic of China, see <a href=\"/wiki/China\" title=\"China\">China</a>. For other uses, see <a href=\"/wiki/Republic_of_China_(disambiguation)\" title=\"Republic of China (disambiguation)\" class=\"mw-disambig\">Republic of China (disambiguation)</a> and <a href=\"/wiki/Taiwan_(disambiguation)\" title=\"Taiwan (disambiguation)\" class=\"mw-disambig\">Taiwan (disambiguation)</a>.</div>\n<p><span style=\"font-size: small;\"><span id=\"coordinates\"><a href=\"/wiki/Geographic_coordinate_system\" title=\"Geographic coordinate system\">Coordinates</a>: <span class=\"plainlinks nourlexpansion\"><a class=\"external text\" href=\"//tools.wmflabs.org/geohack/geohack.php?pagename=Taiwan&amp;params=23_30_N_121_00_E_type:country_scale:9000000_region:TW\"><span class=\"geo-default\"><span class=\"geo-dms\" title=\"Maps, aerial photos, and other data for this location\"><span class=\"latitude\">23°30′N</span> <span class=\"longitude\">121°00′E</span></span></span><span class=\"geo-multi-punct\">﻿ / ﻿</span><span class=\"geo-nondefault\"><span class=\"geo-dec\" title=\"Maps, aerial photos, and other data for this location\">23.500°N 121.000°E</span><span style=\"display:none\">﻿ / <span class=\"geo\">23.500; 121.000</span></span></span></a></span><sup id=\"cite_ref-cia-factbook_1-0\" class=\"reference\"><a href=\"#cite_note-cia-factbook-1\"><span>[</span>1<span>]</span></a></sup></span></span></p>\n<table class=\"mw-stack\" cellpadding=\"0\" cellspacing=\"1\" style=\"float:right; background: transparent; border-style: none; margin: 0; padding: 0;\">\n<tr>\n<td style=\"border-style: none\">\n<table class=\"infobox geography vcard\" style=\"width:22em; font-size:88%;\">\n<tr class=\"adr\">\n<th colspan=\"3\" class=\"mergedtoprow\" style=\"text-align:center;padding:0.25em 0.33em 0.33em;line-height:1.2em;font-size:1.25em;\"><span class=\"fn org country-name\">Republic of China</span><br />\n<div style=\"padding-top:0.25em;\"><span style=\"font-weight:normal;\"><span lang=\"zh-hant\">中華民國</span></span><br />\n<i>Zhōnghuá Mínguó</i><sup id=\"cite_ref-2\" class=\"reference\"><a href=\"#cite_note-2\"><span>[</span>a<span>]</span></a></sup></div>\n</th>\n</tr>\n<tr class=\"mergedtoprow\">\n<td class=\"maptable\" colspan=\"3\" style=\"text-align:center;padding:0.5em 0;\">\n<table style=\"text-align:center;width:100%;background:none;\">\n<tr>\n<td style=\"text-align:center;width:58%; vertical-align:middle;\"><a href=\"/wiki/File:Flag_of_the_Republic_of_China.svg\" class=\"image\" title=\"Flag of Taiwan\"><img alt=\"A red flag, with a small blue rectangle in the top left hand corner on which sits a white sun composed of a circle surrounded by 12 rays.\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/125px-Flag_of_the_Republic_of_China.svg.png\" width=\"125\" height=\"83\" class=\"thumbborder\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/188px-Flag_of_the_Republic_of_China.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/250px-Flag_of_the_Republic_of_China.svg.png 2x\" data-file-width=\"900\" data-file-height=\"600\" /></a></td>\n<td style=\"text-align:center;width:auto;vertical-align:middle;\"><a href=\"/wiki/File:Republic_of_China_National_Emblem.svg\" class=\"image\" title=\"National Emblem of Taiwan\"><img alt=\"A blue circular emblem on which sits a white sun composed of a circle surrounded by 12 rays.\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Republic_of_China_National_Emblem.svg/85px-Republic_of_China_National_Emblem.svg.png\" width=\"85\" height=\"85\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Republic_of_China_National_Emblem.svg/128px-Republic_of_China_National_Emblem.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Republic_of_China_National_Emblem.svg/170px-Republic_of_China_National_Emblem.svg.png 2x\" data-file-width=\"600\" data-file-height=\"600\" /></a></td>\n</tr>\n<tr>\n<td style=\"text-align:center;font-size:85%;\"><a href=\"/wiki/Flag_of_Taiwan\" title=\"Flag of Taiwan\" class=\"mw-redirect\">Flag</a></td>\n<td style=\"text-align:center;font-size:85%;\"><a href=\"/wiki/National_Emblem_of_Taiwan\" title=\"National Emblem of Taiwan\" class=\"mw-redirect\">National Emblem</a></td>\n</tr>\n</table>\n</td>\n</tr>\n<tr>\n<td class=\"anthem\" colspan=\"3\" style=\"text-align:center;line-height:1.2em;\"><b>Anthem:&#160;</b><br />\n<span lang=\"zh-hant\">《中華民國國歌》</span><br />\n<small style=\"font-size:85%;\">\"<a href=\"/wiki/National_Anthem_of_the_Republic_of_China\" title=\"National Anthem of the Republic of China\">National Anthem of the Republic of China</a>\"</small>\n<div class=\"center\">\n<div class=\"floatnone\">\n<div class=\"mediaContainer\" style=\"width:220px\"><audio id=\"mwe_player_0\" poster=\"/static/1.27.0-wmf.12/resources/assets/file-type-icons/fileicon-ogg.png\" controls=\"\" preload=\"none\" style=\"width:220px\" class=\"kskin\" data-durationhint=\"61.614149659864\" data-startoffset=\"0\" data-mwtitle=\"National_Anthem_of_the_Republic_of_China.ogg\" data-mwprovider=\"wikimediacommons\"><source src=\"//upload.wikimedia.org/wikipedia/commons/9/98/National_Anthem_of_the_Republic_of_China.ogg\" type=\"audio/ogg; codecs=&quot;vorbis&quot;\" data-title=\"Original Ogg file (67 kbps)\" data-shorttitle=\"Ogg source\" data-width=\"0\" data-height=\"0\" data-bandwidth=\"67299\"></source><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Anthem_of_the_Republic_of_China.ogg.en.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Anthem+of+the+Republic+of+China.ogg.en.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"en\" data-dir=\"ltr\" label=\"English (en) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Anthem_of_the_Republic_of_China.ogg.vi.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Anthem+of+the+Republic+of+China.ogg.vi.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"vi\" data-dir=\"ltr\" label=\"Tiếng Việt (vi) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Anthem_of_the_Republic_of_China.ogg.zh-cn.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Anthem+of+the+Republic+of+China.ogg.zh-cn.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"zh-cn\" data-dir=\"ltr\" label=\"中文（中国大陆）‎ (zh-cn) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Anthem_of_the_Republic_of_China.ogg.zh-min-nan.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Anthem+of+the+Republic+of+China.ogg.zh-min-nan.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"zh-min-nan\" data-dir=\"ltr\" label=\"Bân-lâm-gú (zh-min-nan) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Anthem_of_the_Republic_of_China.ogg.zh-tw.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Anthem+of+the+Republic+of+China.ogg.zh-tw.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"zh-tw\" data-dir=\"ltr\" label=\"中文（台灣）‎ (zh-tw) subtitles\"></track>Sorry, your browser either has JavaScript disabled or does not have any supported player.<br />\nYou can <a href=\"//upload.wikimedia.org/wikipedia/commons/9/98/National_Anthem_of_the_Republic_of_China.ogg\">download the clip</a> or <a href=\"https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TimedMediaHandler/Client_download\">download a player</a> to play the clip in your browser.</audio></div>\n</div>\n</div>\n<hr />\n<div style=\"padding-top:0.5em;\"><b>Flag anthem:</b><br />\n<span lang=\"zh-hant\">《中華民國國旗歌》</span><br />\n<small style=\"font-size:85%;\">\"<a href=\"/wiki/National_Flag_Anthem_of_the_Republic_of_China\" title=\"National Flag Anthem of the Republic of China\">National Flag Anthem of the Republic of China</a>\"</small></div>\n<div class=\"center\">\n<div class=\"floatnone\">\n<div class=\"mediaContainer\" style=\"width:220px\"><audio id=\"mwe_player_1\" poster=\"/static/1.27.0-wmf.12/resources/assets/file-type-icons/fileicon-ogg.png\" controls=\"\" preload=\"none\" style=\"width:220px\" class=\"kskin\" data-durationhint=\"53.838367346939\" data-startoffset=\"0\" data-mwtitle=\"National_Banner_Song.ogg\" data-mwprovider=\"wikimediacommons\"><source src=\"//upload.wikimedia.org/wikipedia/commons/d/de/National_Banner_Song.ogg\" type=\"audio/ogg; codecs=&quot;vorbis&quot;\" data-title=\"Original Ogg file (115 kbps)\" data-shorttitle=\"Ogg source\" data-width=\"0\" data-height=\"0\" data-bandwidth=\"115274\"></source><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Banner_Song.ogg.en.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Banner+Song.ogg.en.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"en\" data-dir=\"ltr\" label=\"English (en) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Banner_Song.ogg.zh-cn.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Banner+Song.ogg.zh-cn.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"zh-cn\" data-dir=\"ltr\" label=\"中文（中国大陆）‎ (zh-cn) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Banner_Song.ogg.zh-hans.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Banner+Song.ogg.zh-hans.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"zh-hans\" data-dir=\"ltr\" label=\"中文（简体）‎ (zh-hans) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Banner_Song.ogg.zh-tw.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Banner+Song.ogg.zh-tw.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"zh-tw\" data-dir=\"ltr\" label=\"中文（台灣）‎ (zh-tw) subtitles\"></track><track kind=\"subtitles\" data-mwtitle=\"TimedText:National_Banner_Song.ogg.zh.srt\" data-mwprovider=\"wikimediacommons\" type=\"text/x-srt\" src=\"https://commons.wikimedia.org/w/index.php?title=:National+Banner+Song.ogg.zh.srt&amp;action=raw&amp;ctype=text%2Fx-srt\" srclang=\"zh\" data-dir=\"ltr\" label=\"中文 (zh) subtitles\"></track>Sorry, your browser either has JavaScript disabled or does not have any supported player.<br />\nYou can <a href=\"//upload.wikimedia.org/wikipedia/commons/d/de/National_Banner_Song.ogg\">download the clip</a> or <a href=\"https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TimedMediaHandler/Client_download\">download a player</a> to play the clip in your browser.</audio></div>\n</div>\n</div>\n</td>\n</tr>\n<tr>\n<td colspan=\"3\" style=\"padding:0.6em 0 0.3em;text-align:center;\">\n<div class=\"center\">\n<div class=\"floatnone\"><a href=\"/wiki/File:Taiwan_on_the_globe_(Southeast_Asia_centered).svg\" class=\"image\" title=\"Location of Taiwan (red) on the globe\"><img alt=\"Location of Taiwan (red) on the globe\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/1/17/Taiwan_on_the_globe_%28Southeast_Asia_centered%29.svg/250px-Taiwan_on_the_globe_%28Southeast_Asia_centered%29.svg.png\" width=\"250\" height=\"250\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/1/17/Taiwan_on_the_globe_%28Southeast_Asia_centered%29.svg/375px-Taiwan_on_the_globe_%28Southeast_Asia_centered%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/17/Taiwan_on_the_globe_%28Southeast_Asia_centered%29.svg/500px-Taiwan_on_the_globe_%28Southeast_Asia_centered%29.svg.png 2x\" data-file-width=\"897\" data-file-height=\"897\" /></a></div>\n</div>\n<div style=\"padding:0.3em;line-height:1.2em;font-size:85%;\">Location of Taiwan (red) on the globe</div>\n</td>\n</tr>\n<tr class=\"mergedtoprow\">\n<td colspan=\"3\" style=\"padding:0.6em 0 0.3em;text-align:center;\">\n<div class=\"center\">\n<div class=\"floatnone\"><a href=\"/wiki/File:Locator_map_of_the_ROC_Taiwan.svg\" class=\"image\" title=\"A map depicting the territory under the control of the Republic of China in East Asia and in the World\"><img alt=\"A map depicting the territory under the control of the Republic of China in East Asia and in the World\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Locator_map_of_the_ROC_Taiwan.svg/250px-Locator_map_of_the_ROC_Taiwan.svg.png\" width=\"250\" height=\"127\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Locator_map_of_the_ROC_Taiwan.svg/375px-Locator_map_of_the_ROC_Taiwan.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Locator_map_of_the_ROC_Taiwan.svg/500px-Locator_map_of_the_ROC_Taiwan.svg.png 2x\" data-file-width=\"1000\" data-file-height=\"508\" /></a></div>\n</div>\n<div style=\"position:relative;top:0.3em;line-height:1.2em;font-size:85%;\"><a href=\"/wiki/Free_area_of_the_Republic_of_China\" title=\"Free area of the Republic of China\">Territory under the control of the Republic of China</a></div>\n</td>\n</tr>\n<tr class=\"mergedtoprow\">\n<td colspan=\"2\"><b>Capital</b></td>\n<td><a href=\"/wiki/Taipei\" title=\"Taipei\">Taipei</a><sup id=\"cite_ref-capital_3-0\" class=\"reference\"><a href=\"#cite_note-capital-3\"><span>[</span>2<span>]</span></a></sup><br />\n<span style=\"white-space:nowrap;font-size:85%;\"><span class=\"plainlinks nourlexpansion\"><a class=\"external text\" href=\"//tools.wmflabs.org/geohack/geohack.php?pagename=Taiwan&amp;params=25_02_N_121_38_E_type:city\"><span class=\"geo-default\"><span class=\"geo-dms\" title=\"Maps, aerial photos, and other data for this location\"><span class=\"latitude\">25°02′N</span> <span class=\"longitude\">121°38′E</span></span></span><span class=\"geo-multi-punct\">﻿ / ﻿</span><span class=\"geo-nondefault\"><span class=\"geo-dec\" title=\"Maps, aerial photos, and other data for this location\">25.033°N 121.633°E</span><span style=\"display:none\">﻿ / <span class=\"geo\">25.033; 121.633</span></span></span></a></span></span></td>\n</tr>\n<tr class=\"mergedbottomrow\">\n<th colspan=\"2\">Largest city</th>\n<td><a href=\"/wiki/New_Taipei_City\" title=\"New Taipei City\">New Taipei</a></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"white-space:nowrap;\">Official languages</th>\n<td><a href=\"/wiki/Standard_Chinese\" title=\"Standard Chinese\">Mandarin</a><sup id=\"cite_ref-4\" class=\"reference\"><a href=\"#cite_note-4\"><span>[</span>3<span>]</span></a></sup></td>\n</tr>\n<tr class=\"mergedbottomrow\">\n<td colspan=\"2\">Recognised regional&#160;languages</td>\n<td style=\"vertical-align:middle;\"><a href=\"/wiki/Taiwanese_Hokkien\" title=\"Taiwanese Hokkien\">Taiwanese Hokkien</a><br />\n<a href=\"/wiki/Hakka_Chinese\" title=\"Hakka Chinese\">Hakka</a><br />\n<a href=\"/wiki/Formosan_languages\" title=\"Formosan languages\">Formosan languages</a><br />\n<a href=\"/wiki/Fuzhou_dialect\" title=\"Fuzhou dialect\">Fuzhou dialect</a></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"white-space:nowrap;\"><a href=\"/wiki/Official_script\" title=\"Official script\">Official script</a></th>\n<td><a href=\"/wiki/Traditional_Chinese\" title=\"Traditional Chinese\" class=\"mw-redirect\">Traditional Chinese</a></td>\n</tr>\n<tr>\n<td colspan=\"2\"><b><a href=\"/wiki/Ethnic_groups\" title=\"Ethnic groups\" class=\"mw-redirect\">Ethnic&#160;groups</a></b></td>\n<td><span class=\"nowrap\">&gt;95% <a href=\"/wiki/Han_Chinese\" title=\"Han Chinese\">Han Chinese</a><sup id=\"cite_ref-FOOTNOTEExec._Yuan201436_5-0\" class=\"reference\"><a href=\"#cite_note-FOOTNOTEExec._Yuan201436-5\"><span>[</span>4<span>]</span></a></sup></span><br />\n<span class=\"nowrap\">&#160;<b>∟</b> 70% <a href=\"/wiki/Hoklo_people\" title=\"Hoklo people\">Hokkien</a></span><br />\n<span class=\"nowrap\">&#160;<b>∟</b> 14% <a href=\"/wiki/Hakka_people\" title=\"Hakka people\">Hakka</a></span><br />\n<span class=\"nowrap\"><span style=\"position:relative; bottom:0.1em;\">&#160;<b>∟</b> 14% <a href=\"/wiki/Mainland_Chinese#Mainlanders_in_Taiwan\" title=\"Mainland Chinese\">Waishengren</a><sup id=\"cite_ref-waishengren_6-0\" class=\"reference\"><a href=\"#cite_note-waishengren-6\"><span>[</span>b<span>]</span></a></sup></span></span><br />\n<span class=\"nowrap\">2.3% <a href=\"/wiki/Taiwanese_aborigines\" title=\"Taiwanese aborigines\">Aborigines</a><sup id=\"cite_ref-7\" class=\"reference\"><a href=\"#cite_note-7\"><span>[</span>c<span>]</span></a></sup></span></td>\n</tr>\n<tr>\n<th colspan=\"2\"><a href=\"/wiki/Demonym\" title=\"Demonym\">Demonym</a></th>\n<td><a href=\"/wiki/Taiwanese_people\" title=\"Taiwanese people\">Taiwanese</a><sup id=\"cite_ref-cia-factbook_1-1\" class=\"reference\"><a href=\"#cite_note-cia-factbook-1\"><span>[</span>1<span>]</span></a></sup></td>\n</tr>\n<tr>\n<th colspan=\"2\"><a href=\"/wiki/Politics_of_Taiwan\" title=\"Politics of Taiwan\" class=\"mw-redirect\">Government</a></th>\n<td><a href=\"/wiki/Unitary_state\" title=\"Unitary state\">Unitary</a> <a href=\"/wiki/Semi-presidential_system\" title=\"Semi-presidential system\">semi-presidential</a> <a href=\"/wiki/Republic\" title=\"Republic\">republic</a></td>\n</tr>\n<tr class=\"mergedrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\"><a href=\"/wiki/President_of_the_Republic_of_China\" title=\"President of the Republic of China\">President</a></td>\n<td><a href=\"/wiki/Ma_Ying-jeou\" title=\"Ma Ying-jeou\">Ma Ying-jeou</a><sup id=\"cite_ref-8\" class=\"reference\"><a href=\"#cite_note-8\"><span>[</span>d<span>]</span></a></sup></td>\n</tr>\n<tr class=\"mergedbottomrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\"><a href=\"/wiki/Premier_of_the_Republic_of_China\" title=\"Premier of the Republic of China\">Premier</a></td>\n<td><a href=\"/wiki/Chang_San-cheng\" title=\"Chang San-cheng\">Chang San-cheng</a></td>\n</tr>\n<tr>\n<th colspan=\"2\">Legislature</th>\n<td><a href=\"/wiki/Legislative_Yuan\" title=\"Legislative Yuan\">Legislative Yuan</a></td>\n</tr>\n<tr class=\"mergedtoprow\">\n<th colspan=\"3\"><a href=\"/wiki/History_of_the_Republic_of_China\" title=\"History of the Republic of China\">Establishment</a>&#160;<span style=\"font-weight:normal;\">from the <a href=\"/wiki/Xinhai_Revolution\" title=\"Xinhai Revolution\">Xinhai Revolution</a></span></th>\n</tr>\n<tr class=\"mergedrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\"><a href=\"/wiki/Wuchang_Uprising\" title=\"Wuchang Uprising\">Wuchang Uprising</a></td>\n<td>10 October 1911&#160;</td>\n</tr>\n<tr class=\"mergedrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\"><a href=\"/wiki/Provisional_Government_of_the_Republic_of_China_(1912)\" title=\"Provisional Government of the Republic of China (1912)\">Republic established</a></td>\n<td>1 January 1912&#160;</td>\n</tr>\n<tr class=\"mergedbottomrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\"><a href=\"/wiki/Constitution_of_the_Republic_of_China\" title=\"Constitution of the Republic of China\">Constitution</a></td>\n<td>25 December 1947&#160;</td>\n</tr>\n<tr class=\"mergedtoprow\">\n<th colspan=\"3\"><a href=\"/wiki/Geography_of_Taiwan\" title=\"Geography of Taiwan\">Area</a></th>\n</tr>\n<tr class=\"mergedrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\">Total</td>\n<td>36,193<sup id=\"cite_ref-taiwan-popstat_9-0\" class=\"reference\"><a href=\"#cite_note-taiwan-popstat-9\"><span>[</span>5<span>]</span></a></sup>&#160;km<sup><small>2</small></sup> (<a href=\"/wiki/List_of_countries_and_dependencies_by_area\" title=\"List of countries and dependencies by area\">136th</a>)<br />\n13,974&#160;sq&#160;mi</td>\n</tr>\n<tr class=\"mergedtoprow\">\n<th colspan=\"3\"><a href=\"/wiki/Demographics_of_Taiwan\" title=\"Demographics of Taiwan\">Population</a></th>\n</tr>\n<tr class=\"mergedrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\">July 2015&#160;estimate</td>\n<td>23,461,708<sup id=\"cite_ref-Natl_Statistics_10-0\" class=\"reference\"><a href=\"#cite_note-Natl_Statistics-10\"><span>[</span>6<span>]</span></a></sup> (<a href=\"/wiki/List_of_countries_by_population\" title=\"List of countries by population\" class=\"mw-redirect\">52nd</a>)</td>\n</tr>\n<tr class=\"mergedbottomrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\">Density</td>\n<td>644/km<sup><small>2</small></sup> (<a href=\"/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density\" title=\"List of sovereign states and dependent territories by population density\">17th</a>)<br />\n1,664/sq&#160;mi</td>\n</tr>\n<tr class=\"mergedtoprow\">\n<td colspan=\"2\"><b><a href=\"/wiki/Gross_domestic_product\" title=\"Gross domestic product\">GDP</a></b>&#160;(<a href=\"/wiki/Purchasing_power_parity\" title=\"Purchasing power parity\">PPP</a>)</td>\n<td>2014&#160;estimate</td>\n</tr>\n<tr class=\"mergedrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\">Total</td>\n<td>$1,021.607 billion<sup id=\"cite_ref-imf2_11-0\" class=\"reference\"><a href=\"#cite_note-imf2-11\"><span>[</span>7<span>]</span></a></sup> (<a href=\"/wiki/List_of_countries_by_GDP_(PPP)\" title=\"List of countries by GDP (PPP)\">21st</a>)</td>\n</tr>\n<tr class=\"mergedbottomrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\">Per capita</td>\n<td>$43,599<sup id=\"cite_ref-imf2_11-1\" class=\"reference\"><a href=\"#cite_note-imf2-11\"><span>[</span>7<span>]</span></a></sup> (<a href=\"/wiki/List_of_countries_by_GDP_(PPP)_per_capita\" title=\"List of countries by GDP (PPP) per capita\">17th</a>)</td>\n</tr>\n<tr class=\"mergedtoprow\">\n<td colspan=\"2\"><b><a href=\"/wiki/Gross_domestic_product\" title=\"Gross domestic product\">GDP</a></b>&#160;(nominal)</td>\n<td>2014&#160;estimate</td>\n</tr>\n<tr class=\"mergedrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\">Total</td>\n<td>$505.452 billion<sup id=\"cite_ref-imf2_11-2\" class=\"reference\"><a href=\"#cite_note-imf2-11\"><span>[</span>7<span>]</span></a></sup> (<a href=\"/wiki/List_of_countries_by_GDP_(nominal)\" title=\"List of countries by GDP (nominal)\">26th</a>)</td>\n</tr>\n<tr class=\"mergedbottomrow\">\n<td style=\"width:1.0em;padding:0 0 0 0.6em;\">&#160;•&#160;</td>\n<td style=\"padding-left:0;\">Per capita</td>\n<td>$21,571<sup id=\"cite_ref-imf2_11-3\" class=\"reference\"><a href=\"#cite_note-imf2-11\"><span>[</span>7<span>]</span></a></sup> (<a href=\"/wiki/List_of_countries_by_GDP_(nominal)_per_capita\" title=\"List of countries by GDP (nominal) per capita\">39th</a>)</td>\n</tr>\n<tr>\n<td colspan=\"2\"><b><a href=\"/wiki/Gini_coefficient\" title=\"Gini coefficient\">Gini</a></b>&#160;(2010)</td>\n<td>34.2<sup id=\"cite_ref-12\" class=\"reference\"><a href=\"#cite_note-12\"><span>[</span>8<span>]</span></a></sup><br />\n<span style=\"white-space:nowrap;\"><span style=\"color:orange\">medium</span></span></td>\n</tr>\n<tr>\n<td colspan=\"2\"><b><a href=\"/wiki/Human_Development_Index\" title=\"Human Development Index\">HDI</a></b> (2014)</td>\n<td><span title=\"Increase\"><img alt=\"Increase\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/11px-Increase2.svg.png\" width=\"11\" height=\"11\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/17px-Increase2.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Increase2.svg/22px-Increase2.svg.png 2x\" data-file-width=\"300\" data-file-height=\"300\" /></span>&#160;0.882<sup id=\"cite_ref-HDI-1_14-0\" class=\"reference\"><a href=\"#cite_note-HDI-1-14\"><span>[</span>e<span>]</span></a></sup><br />\n<span style=\"white-space:nowrap;\"><span style=\"color:darkgreen\">very high</span></span>&#160;<b>·</b> <a href=\"/wiki/List_of_countries_by_Human_Development_Index\" title=\"List of countries by Human Development Index\">25th</a></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"vertical-align:middle;\">Currency</th>\n<td><a href=\"/wiki/New_Taiwan_dollar\" title=\"New Taiwan dollar\">New Taiwan dollar</a> (NT$) (<a href=\"/wiki/ISO_4217\" title=\"ISO 4217\">TWD</a>)</td>\n</tr>\n<tr>\n<th colspan=\"2\">Time zone</th>\n<td><a href=\"/wiki/National_Standard_Time\" title=\"National Standard Time\" class=\"mw-redirect\">National Standard Time</a> <span class=\"nowrap\">(<a href=\"/wiki/Coordinated_Universal_Time\" title=\"Coordinated Universal Time\">UTC</a>+8)</span></td>\n</tr>\n<tr>\n<th colspan=\"2\">Date format</th>\n<td>\n<div class=\"plainlist\">\n<ul>\n<li>yyyy-mm-dd</li>\n<li>\n<div style=\"padding:0.1em 0;line-height:1.2em;line-height:1.1em;\"><span class=\"nowrap\">yyyy年m月d日<br />\n<small style=\"font-size:85%;\">(<a href=\"/wiki/Common_Era\" title=\"Common Era\">CE</a>; <a href=\"/wiki/Chinese_calendar\" title=\"Chinese calendar\">CE+2697</a>)</small></span></div>\n</li>\n<li><a href=\"/wiki/Minguo_calendar\" title=\"Minguo calendar\">民國yy年m月d日</a></li>\n</ul>\n</div>\n</td>\n</tr>\n<tr>\n<th colspan=\"2\">Drives on the</th>\n<td>right</td>\n</tr>\n<tr>\n<th colspan=\"2\"><a href=\"/wiki/Telephone_numbers_in_Taiwan\" title=\"Telephone numbers in Taiwan\">Calling code</a></th>\n<td><a href=\"/wiki/Telephone_numbers_in_Taiwan\" title=\"Telephone numbers in Taiwan\">+886</a></td>\n</tr>\n<tr class=\"mergedtoprow\">\n<th colspan=\"2\" style=\"white-space:nowrap;\"><a href=\"/wiki/ISO_3166\" title=\"ISO 3166\">ISO 3166 code</a></th>\n<td><a href=\"/wiki/ISO_3166-2:TW\" title=\"ISO 3166-2:TW\">TW</a></td>\n</tr>\n<tr>\n<th colspan=\"2\"><a href=\"/wiki/Country_code_top-level_domain\" title=\"Country code top-level domain\">Internet TLD</a></th>\n<td>\n<div class=\"plainlist\">\n<ul>\n<li><a href=\"/wiki/.tw\" title=\".tw\">.tw</a></li>\n<li><a href=\"/wiki/.%E5%8F%B0%E7%81%A3\" title=\".台灣\" class=\"mw-redirect\">.台灣</a></li>\n<li><a href=\"/wiki/.%E5%8F%B0%E6%B9%BE\" title=\".台湾\" class=\"mw-redirect\">.台湾</a><sup id=\"cite_ref-15\" class=\"reference\"><a href=\"#cite_note-15\"><span>[</span>10<span>]</span></a></sup></li>\n</ul>\n</div>\n</td>\n</tr>\n</table>\n<table class=\"infobox\" style=\"width: 22em\">\n<tr>\n<td colspan=\"2\" style=\"text-align:center;font-size: 125%; background-color: #b0c4de;\">Taiwan</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Traditional_Chinese_characters\" title=\"Traditional Chinese characters\">Traditional&#160;Chinese</a></th>\n<td><span style=\"font-size: 115%\"><span lang=\"zh-Hant\"><a href=\"//en.wiktionary.org/wiki/%E8%87%BA%E7%81%A3\" class=\"extiw\" title=\"wikt:臺灣\">臺灣</a> or <a href=\"//en.wiktionary.org/wiki/%E5%8F%B0%E7%81%A3\" class=\"extiw\" title=\"wikt:台灣\">台灣</a></span></span></td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Simplified_Chinese_characters\" title=\"Simplified Chinese characters\">Simplified Chinese</a></th>\n<td><span style=\"font-size: 115%\"><span lang=\"zh-Hans\"><a href=\"//en.wiktionary.org/wiki/%E5%8F%B0%E6%B9%BE\" class=\"extiw\" title=\"wikt:台湾\">台湾</a></span></span></td>\n</tr>\n<tr>\n<td colspan=\"2\" style=\"text-align:center\">\n<table class=\"infobox collapsible collapsed\" style=\"padding:0;border:none;margin:-3px;width:auto;min-width:100%;font-size:100%;clear:none;float:none;background-color:transparent\">\n<tr>\n<th colspan=\"2\" style=\"text-align:center;font-size:125%;font-weight:bold;font-size: 100%; text-align: left; background-color: #f9ffbc;\">Transcriptions</th>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Standard_Chinese\" title=\"Standard Chinese\">Standard Mandarin</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Pinyin\" title=\"Pinyin\">Hanyu Pinyin</a></th>\n<td>Táiwān</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Tongyong_Pinyin\" title=\"Tongyong Pinyin\">Tongyong Pinyin</a></th>\n<td>Táiwan</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Wade%E2%80%93Giles\" title=\"Wade–Giles\">Wade–Giles</a></th>\n<td>T'ai²-wan¹</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Wikipedia:IPA\" title=\"Wikipedia:IPA\" class=\"mw-redirect\">IPA</a></th>\n<td><span class=\"IPA\" style=\"white-space:nowrap\"><a href=\"/wiki/Help:IPA_for_Mandarin\" title=\"Help:IPA for Mandarin\">[tʰǎɪwán]</a></span></td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Gwoyeu_Romatzyh\" title=\"Gwoyeu Romatzyh\">Gwoyeu Romatzyh</a></th>\n<td>Tair'uan</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Bopomofo\" title=\"Bopomofo\">Bopomofo</a></th>\n<td>ㄊㄞˊ ㄨㄢ</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Mandarin_Chinese\" title=\"Mandarin Chinese\">other Mandarin</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Xiao%27erjing\" title=\"Xiao'erjing\">Xiao'erjing</a></th>\n<td><span lang=\"zh-Arab\"><span class=\"script-arabic script-Arab\" dir=\"rtl\" style=\"font-family:'Noto Naskh Arabic',Harmattan,Scheherazade,Lateef,Arial,'Times New Roman','Droid Arabic Naskh','Microsoft Sans Serif','Segoe UI','Sakkal Majalla','Microsoft Uighur','Arabic Typesetting',Amiri,sans-serif,serif;font-weight:normal;\">تَاَىْوًا</span>‎</span></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Wu_Chinese\" title=\"Wu Chinese\">Wu</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Wu_Chinese\" title=\"Wu Chinese\">Romanization</a></th>\n<td>The<sup>平</sup>-uae<sup>平</sup></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Xiang_Chinese\" title=\"Xiang Chinese\">Xiang</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Xiang_Chinese\" title=\"Xiang Chinese\">IPA</a></th>\n<td>dwɛ<sup>13</sup> ua<sup>44</sup></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Hakka_Chinese\" title=\"Hakka Chinese\">Hakka</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Guangdong_Romanization#Hakka\" title=\"Guangdong Romanization\">Romanization</a></th>\n<td>Thòi-vàn</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Cantonese\" title=\"Cantonese\">Yue: Cantonese</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Jyutping\" title=\"Jyutping\">Jyutping</a></th>\n<td>Toi<sup>4</sup>-waan<sup>1</sup></td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Yale_romanization_of_Cantonese\" title=\"Yale romanization of Cantonese\">Yale Romanization</a></th>\n<td>Tòih-wāan</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Southern_Min\" title=\"Southern Min\">Southern Min</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Hokkien\" title=\"Hokkien\">Hokkien</a> <a href=\"/wiki/Pe%CC%8Dh-%C5%8De-j%C4%AB\" title=\"Pe̍h-ōe-jī\">POJ</a></th>\n<td>Tâi-oân</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Taiwanese_Romanization_System\" title=\"Taiwanese Romanization System\">Tâi-lô</a></th>\n<td>Tâi-uân</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Eastern_Min\" title=\"Eastern Min\">Eastern Min</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Fuzhou_dialect\" title=\"Fuzhou dialect\">Fuzhou</a> <a href=\"/wiki/Foochow_Romanized\" title=\"Foochow Romanized\">BUC</a></th>\n<td>Dài-uăng</td>\n</tr>\n</table>\n</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #b0c4de;\">Republic of China</th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Traditional_Chinese_characters\" title=\"Traditional Chinese characters\">Traditional&#160;Chinese</a></th>\n<td><span style=\"font-size: 115%\"><span lang=\"zh-Hant\"><a href=\"//en.wiktionary.org/wiki/%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B\" class=\"extiw\" title=\"wikt:中華民國\">中華民國</a></span></span></td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Simplified_Chinese_characters\" title=\"Simplified Chinese characters\">Simplified Chinese</a></th>\n<td><span style=\"font-size: 115%\"><span lang=\"zh-Hans\"><a href=\"//en.wiktionary.org/wiki/%E4%B8%AD%E5%8D%8E%E6%B0%91%E5%9B%BD\" class=\"extiw\" title=\"wikt:中华民国\">中华民国</a></span></span></td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Chinese_postal_romanization\" title=\"Chinese postal romanization\">Postal</a></th>\n<td>Chunghwa Minkuo</td>\n</tr>\n<tr>\n<td colspan=\"2\" style=\"text-align:center\">\n<table class=\"infobox collapsible collapsed\" style=\"padding:0;border:none;margin:-3px;width:auto;min-width:100%;font-size:100%;clear:none;float:none;background-color:transparent\">\n<tr>\n<th colspan=\"2\" style=\"text-align:center;font-size:125%;font-weight:bold;font-size: 100%; text-align: left; background-color: #f9ffbc;\">Transcriptions</th>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Standard_Chinese\" title=\"Standard Chinese\">Standard Mandarin</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Pinyin\" title=\"Pinyin\">Hanyu Pinyin</a></th>\n<td>Zhōnghuá Mínguó</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Tongyong_Pinyin\" title=\"Tongyong Pinyin\">Tongyong Pinyin</a></th>\n<td>Jhonghuá Mínguó</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Wade%E2%80%93Giles\" title=\"Wade–Giles\">Wade–Giles</a></th>\n<td>Chung¹-hua² Min²-kuo²</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Wikipedia:IPA\" title=\"Wikipedia:IPA\" class=\"mw-redirect\">IPA</a></th>\n<td><span class=\"IPA\" style=\"white-space:nowrap\"><a href=\"/wiki/Help:IPA_for_Mandarin\" title=\"Help:IPA for Mandarin\">[ʈʂúŋxwǎ&#160;mǐnkwǒ]</a></span></td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Gwoyeu_Romatzyh\" title=\"Gwoyeu Romatzyh\">Gwoyeu Romatzyh</a></th>\n<td>Jonghwa Min'gwo</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Mandarin_Phonetic_Symbols_II\" title=\"Mandarin Phonetic Symbols II\">MPS2</a></th>\n<td>Jūng-huá Mín-guó</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Bopomofo\" title=\"Bopomofo\">Bopomofo</a></th>\n<td>ㄓㄨㄥ ㄏㄨㄚˊ ㄇㄧㄣˊ ㄍㄨㄛˊ</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Mandarin_Chinese\" title=\"Mandarin Chinese\">other Mandarin</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Xiao%27erjing\" title=\"Xiao'erjing\">Xiao'erjing</a></th>\n<td><span lang=\"zh-Arab\">ﺟْﻮ ﺧُﻮَ مٍ ﻗُﻮَع</span></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Wu_Chinese\" title=\"Wu Chinese\">Wu</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Wu_Chinese\" title=\"Wu Chinese\">Romanization</a></th>\n<td>tson<sup>平</sup> gho<sup>平</sup> min<sup>平</sup> koh<sup>入</sup></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Gan_Chinese\" title=\"Gan Chinese\">Gan</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Gan_Chinese\" title=\"Gan Chinese\">Romanization</a></th>\n<td>tung<sup>1</sup> fa<sup>4</sup> min<sup>4</sup> koet<sup>7</sup></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Xiang_Chinese\" title=\"Xiang Chinese\">Xiang</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Xiang_Chinese\" title=\"Xiang Chinese\">IPA</a></th>\n<td>tan<sup>44</sup> ɣo<sup>13</sup> miɛn<sup>13</sup> kwa<sup>13</sup></td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Hakka_Chinese\" title=\"Hakka Chinese\">Hakka</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Guangdong_Romanization#Hakka\" title=\"Guangdong Romanization\">Romanization</a></th>\n<td>Chûng-fà Mìn-koet</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Cantonese\" title=\"Cantonese\">Yue: Cantonese</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Jyutping\" title=\"Jyutping\">Jyutping</a></th>\n<td>Zung<sup>1</sup>-waa<sup>4</sup> man<sup>4</sup>-gwok<sup>3</sup></td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Yale_romanization_of_Cantonese\" title=\"Yale romanization of Cantonese\">Yale Romanization</a></th>\n<td>Jūng-wàah màhn-gwok</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Southern_Min\" title=\"Southern Min\">Southern Min</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Hokkien\" title=\"Hokkien\">Hokkien</a> <a href=\"/wiki/Pe%CC%8Dh-%C5%8De-j%C4%AB\" title=\"Pe̍h-ōe-jī\">POJ</a></th>\n<td>Tiong-hôa Bîn-kok</td>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Taiwanese_Romanization_System\" title=\"Taiwanese Romanization System\">Tâi-lô</a></th>\n<td>Tiong-hûa Bîn-kok</td>\n</tr>\n<tr>\n<th colspan=\"2\" style=\"text-align:center;background-color: #dcffc9;\"><a href=\"/wiki/Eastern_Min\" title=\"Eastern Min\">Eastern Min</a></th>\n</tr>\n<tr>\n<th scope=\"row\" style=\"font-weight:normal;\"><a href=\"/wiki/Fuzhou_dialect\" title=\"Fuzhou dialect\">Fuzhou</a> <a href=\"/wiki/Foochow_Romanized\" title=\"Foochow Romanized\">BUC</a></th>\n<td>Dṳ̆ng-huà Mìng-guók</td>\n</tr>\n</table>\n</td>\n</tr>\n</table>\n<table class=\"metadata mbox-small noprint selfref\" style=\"border:1px solid #aaa;background-color:#f9f9f9;width: 22em;\">\n<tr>\n<td class=\"mbox-image\"><img alt=\"\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Zhongwen.svg/40px-Zhongwen.svg.png\" width=\"40\" height=\"20\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Zhongwen.svg/60px-Zhongwen.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Zhongwen.svg/80px-Zhongwen.svg.png 2x\" data-file-width=\"60\" data-file-height=\"30\" /></td>\n<td class=\"mbox-text plainlist\" style=\"vertical-align:middle; font-size:95%;\"><b>This article contains <a href=\"/wiki/Chinese_language\" title=\"Chinese language\">Chinese</a> text.</b> Without proper <a href=\"/wiki/Help:Multilingual_support_(East_Asian)\" title=\"Help:Multilingual support (East Asian)\">rendering support</a>, you may see <a href=\"/wiki/Replacement_character\" title=\"Replacement character\" class=\"mw-redirect\">question marks, boxes, or other symbols</a> instead of <a href=\"/wiki/Chinese_character\" title=\"Chinese character\" class=\"mw-redirect\">Chinese characters</a>.</td>\n</tr>\n</table>\n</td>\n</tr>\n</table>\n<p><b>Taiwan</b> (<span class=\"nowrap\"><span class=\"noexcerpt\"><a href=\"//upload.wikimedia.org/wikipedia/commons/b/b6/En-us-Taiwan.ogg\" title=\"Listen\"><img alt=\"Listen\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Speakerlink-new.svg/11px-Speakerlink-new.svg.png\" width=\"11\" height=\"11\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Speakerlink-new.svg/17px-Speakerlink-new.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Speakerlink-new.svg/22px-Speakerlink-new.svg.png 2x\" data-file-width=\"11\" data-file-height=\"11\" /></a><sup><span class=\"IPA\" style=\"color:#00e;font:bold 80% sans-serif;padding:0 .1em\"><a href=\"/wiki/File:En-us-Taiwan.ogg\" title=\"File:En-us-Taiwan.ogg\">i</a></span></sup></span><span class=\"IPA nopopups\"><a href=\"/wiki/Help:IPA_for_English\" title=\"Help:IPA for English\">/<span style=\"border-bottom:1px dotted\"><span title=\"/ˌ/ secondary stress follows\">ˌ</span><span title=\"'t' in 'tie'\">t</span><span title=\"/aɪ/ long 'i' in 'tide'\">aɪ</span><span title=\"/ˈ/ primary stress follows\">ˈ</span><span title=\"'w' in 'wind'\">w</span><span title=\"/ɑː/ 'a' in 'father'\">ɑː</span><span title=\"'n' in 'no'\">n</span></span>/</a></span></span>; <a href=\"/wiki/Traditional_Chinese_characters\" title=\"Traditional Chinese characters\">Chinese</a>: <span lang=\"zh-Hant\"><a href=\"//en.wiktionary.org/wiki/%E8%87%BA%E7%81%A3\" class=\"extiw\" title=\"wikt:臺灣\">臺灣</a> or <a href=\"//en.wiktionary.org/wiki/%E5%8F%B0%E7%81%A3\" class=\"extiw\" title=\"wikt:台灣\">台灣</a></span>; see <a href=\"#Names\">below</a>), officially the <b>Republic of China</b> (<b>ROC</b>; <a href=\"/wiki/Traditional_Chinese_characters\" title=\"Traditional Chinese characters\">Chinese</a>: <span lang=\"zh-Hant\"><a href=\"//en.wiktionary.org/wiki/%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B\" class=\"extiw\" title=\"wikt:中華民國\">中華民國</a></span>; <a href=\"/wiki/Pinyin\" title=\"Pinyin\">pinyin</a>: <i><span lang=\"zh-Latn-pinyin\">Zhōnghuá Mínguó</span></i>), is a <a href=\"/wiki/Sovereign_state\" title=\"Sovereign state\">sovereign state</a> in <a href=\"/wiki/East_Asia\" title=\"East Asia\">East Asia</a>. The Republic of China, originally based in <a href=\"/wiki/Mainland_China\" title=\"Mainland China\">mainland China</a>, now governs the <a href=\"/wiki/Geography_of_Taiwan\" title=\"Geography of Taiwan\">island of Taiwan</a>, which constitutes more than 99% of its territory,<sup id=\"cite_ref-16\" class=\"reference\"><a href=\"#cite_note-16\"><span>[</span>f<span>]</span></a></sup> as well as <a href=\"/wiki/Penghu\" title=\"Penghu\">Penghu</a>, <a href=\"/wiki/Kinmen\" title=\"Kinmen\">Kinmen</a>, <a href=\"/wiki/Matsu_Islands\" title=\"Matsu Islands\">Matsu</a>, and <a href=\"/wiki/List_of_islands_of_the_Republic_of_China\" title=\"List of islands of the Republic of China\" class=\"mw-redirect\">other minor islands</a>, following its loss of the mainland China territory in 1949 in the <a href=\"/wiki/Chinese_Civil_War\" title=\"Chinese Civil War\">Chinese Civil War</a>. This remaining area is also <a href=\"/wiki/Constitution_of_the_Republic_of_China\" title=\"Constitution of the Republic of China\">constitutionally</a> called the \"<a href=\"/wiki/Free_area_of_the_Republic_of_China\" title=\"Free area of the Republic of China\">Free area of the Republic of China</a>\" which is not ruled by the <a href=\"/wiki/Communist_Party_of_China\" title=\"Communist Party of China\">Communist Party of China</a> in Beijing.</p>\n<p>Neighboring states include the <a href=\"/wiki/People%27s_Republic_of_China\" title=\"People's Republic of China\" class=\"mw-redirect\">People's Republic of China</a> (PRC) to the west (mainland China), <a href=\"/wiki/Japan\" title=\"Japan\">Japan</a> to the east and northeast, and the <a href=\"/wiki/Philippines\" title=\"Philippines\">Philippines</a> to the south. Taiwan is one of <a href=\"/wiki/List_of_sovereign_states_and_dependent_territories_by_population_density\" title=\"List of sovereign states and dependent territories by population density\">the most densely populated countries</a> in the world with a <a href=\"/wiki/Population_density\" title=\"Population density\">population density</a> of 648 people per km<sup>2</sup> in July 2015.<sup id=\"cite_ref-Natl_Statistics_10-1\" class=\"reference\"><a href=\"#cite_note-Natl_Statistics-10\"><span>[</span>6<span>]</span></a></sup> <a href=\"/wiki/Taipei\" title=\"Taipei\">Taipei</a> is the <a href=\"/wiki/Government_of_the_Republic_of_China\" title=\"Government of the Republic of China\">seat of the central government</a>,<sup id=\"cite_ref-capital_3-1\" class=\"reference\"><a href=\"#cite_note-capital-3\"><span>[</span>2<span>]</span></a></sup> and together with the surrounding cities of <a href=\"/wiki/New_Taipei\" title=\"New Taipei\" class=\"mw-redirect\">New Taipei</a> and <a href=\"/wiki/Keelung\" title=\"Keelung\">Keelung</a> forms <a href=\"/wiki/Taipei_metropolitan_area\" title=\"Taipei metropolitan area\" class=\"mw-redirect\">the largest metropolitan area</a> on the island.</p>\n<p>The island of Taiwan (formerly known as \"<i>Formosa</i>\") was mainly inhabited by <a href=\"/wiki/Taiwanese_aborigines\" title=\"Taiwanese aborigines\">Taiwanese aborigines</a> until the <a href=\"/wiki/Dutch_Formosa\" title=\"Dutch Formosa\">Dutch</a> and <a href=\"/wiki/Spanish_Formosa\" title=\"Spanish Formosa\">Spanish settlement</a> during the <a href=\"/wiki/Age_of_Discovery\" title=\"Age of Discovery\">Age of Discovery</a> in the 17th century, when <a href=\"/wiki/Han_Chinese\" title=\"Han Chinese\">Han Chinese</a> began immigrating to the island. In 1662, the pro-<a href=\"/wiki/Southern_Ming\" title=\"Southern Ming\">Ming</a> loyalist <a href=\"/wiki/Koxinga\" title=\"Koxinga\">Koxinga</a> expelled the Dutch and established the first Han Chinese polity on the island, the <a href=\"/wiki/Kingdom_of_Tungning\" title=\"Kingdom of Tungning\">Kingdom of Tungning</a>. The <a href=\"/wiki/Qing_dynasty\" title=\"Qing dynasty\">Qing dynasty</a> of China later defeated the kingdom and annexed Taiwan. By the time Taiwan was ceded to <a href=\"/wiki/Empire_of_Japan\" title=\"Empire of Japan\">Japan</a> in 1895, the majority of Taiwan's inhabitants were Han Chinese either by ancestry or by <a href=\"/wiki/Cultural_assimilation\" title=\"Cultural assimilation\">assimilation</a>. The <a href=\"/wiki/Republic_of_China_(1912%E2%80%9349)\" title=\"Republic of China (1912–49)\">Republic of China</a> (ROC) was established in mainland China in 1912. After <a href=\"/wiki/Japan%27s_surrender\" title=\"Japan's surrender\" class=\"mw-redirect\">Japan's surrender</a> in 1945, the ROC gained control of Taiwan. During the <a href=\"/wiki/Chinese_Civil_War\" title=\"Chinese Civil War\">Chinese Civil War</a>, the <a href=\"/wiki/Communist_Party_of_China\" title=\"Communist Party of China\">Communist Party of China</a> took full control of <a href=\"/wiki/Mainland_China\" title=\"Mainland China\">mainland China</a> and founded the <a href=\"/wiki/People%27s_Republic_of_China\" title=\"People's Republic of China\" class=\"mw-redirect\">People's Republic of China</a> (PRC) in 1949. ROC loyalists fled to Taiwan and re-established the national government there, claiming to be the legitimate government of all of China. Effective ROC jurisdiction was actually now limited to <a href=\"/wiki/Free_area_of_the_Republic_of_China\" title=\"Free area of the Republic of China\">Taiwan and its surrounding islands</a>, with the main island making up 99% of its <i>de facto</i> territory. The ROC continued to represent <a href=\"/wiki/China_and_the_United_Nations\" title=\"China and the United Nations\">China at the United Nations</a> until 1971, when the PRC assumed China's seat via <a href=\"/wiki/United_Nations_General_Assembly_Resolution_2758\" title=\"United Nations General Assembly Resolution 2758\">Resolution 2758</a>. The ROC lost UN membership. <a href=\"/wiki/Diplomatic_recognition\" title=\"Diplomatic recognition\">International recognition</a> of the ROC gradually eroded as most countries switched their 'China' recognition to the PRC. <a href=\"/wiki/International_recognition_of_the_Republic_of_China\" title=\"International recognition of the Republic of China\" class=\"mw-redirect\">21&#160;UN member states</a> and the <a href=\"/wiki/Holy_See\" title=\"Holy See\">Holy See</a> currently maintain official <a href=\"/wiki/Diplomatic_relations\" title=\"Diplomatic relations\" class=\"mw-redirect\">diplomatic relations</a> with the ROC. Numerous other states maintain unofficial ties through <a href=\"/wiki/Taipei_Economic_and_Cultural_Representative_Office\" title=\"Taipei Economic and Cultural Representative Office\">representative offices</a> via institutions that function as <i>de facto</i> embassies and consulates.</p>\n<p>In the 1980s and early 1990s Taiwanese society transformed itself from a military dictatorship employing one-party rule to a <a href=\"/wiki/List_of_political_parties_in_the_Republic_of_China\" title=\"List of political parties in the Republic of China\">multi-party democracy</a> with <a href=\"/wiki/Universal_suffrage\" title=\"Universal suffrage\">universal suffrage</a>.</p>\n<p>Today Taiwan maintains an <a href=\"/wiki/Developed_country\" title=\"Developed country\">advanced industrial economy</a> as a result of <a href=\"/wiki/Taiwan_Miracle\" title=\"Taiwan Miracle\">rapid economic growth</a> and <a href=\"/wiki/Industrialization\" title=\"Industrialization\" class=\"mw-redirect\">industrialization</a> in the late twentieth century. Taiwan is one of the <a href=\"/wiki/Four_Asian_Tigers\" title=\"Four Asian Tigers\">Four Asian Tigers</a> and a member of the <a href=\"/wiki/World_Trade_Organization\" title=\"World Trade Organization\">WTO</a> and <a href=\"/wiki/Asia-Pacific_Economic_Cooperation\" title=\"Asia-Pacific Economic Cooperation\">APEC</a>. The <a href=\"/wiki/List_of_countries_by_GDP_(PPP)\" title=\"List of countries by GDP (PPP)\">21st-largest economy</a> in the world, its <a href=\"/wiki/High_tech\" title=\"High tech\">high-tech</a> industry plays a key role in the global economy. Taiwan is <a href=\"/wiki/International_rankings_of_Taiwan\" title=\"International rankings of Taiwan\">ranked highly</a> in terms of freedom of the press, health care,<sup id=\"cite_ref-17\" class=\"reference\"><a href=\"#cite_note-17\"><span>[</span>11<span>]</span></a></sup> public education, economic freedom, and human development.<sup id=\"cite_ref-HDI-1_14-1\" class=\"reference\"><a href=\"#cite_note-HDI-1-14\"><span>[</span>e<span>]</span></a></sup><sup id=\"cite_ref-HDI-2_13-1\" class=\"reference\"><a href=\"#cite_note-HDI-2-13\"><span>[</span>9<span>]</span></a></sup><sup id=\"cite_ref-18\" class=\"reference\"><a href=\"#cite_note-18\"><span>[</span>12<span>]</span></a></sup></p>\n<p>The complications of Taiwan's history since 1945 have bequeathed a number of unresolved issues to its citizens. Outstanding among these are the exact nature of Taiwanese national identity, the <a href=\"/wiki/Political_status_of_Taiwan\" title=\"Political status of Taiwan\">ambiguous international status</a> of Taiwan, and the difficulty of maintaining <a href=\"/wiki/Cross-Strait_relations\" title=\"Cross-Strait relations\">relations with the PRC</a> across the <a href=\"/wiki/Taiwan_Strait\" title=\"Taiwan Strait\">Taiwan Strait</a>. Within Taiwanese society these issues generate debate among political parties and candidates. Though the ROC renounced in 1992 the conquest of PRC-controlled territories as a national goal,<sup id=\"cite_ref-19\" class=\"reference\"><a href=\"#cite_note-19\"><span>[</span>13<span>]</span></a></sup> the constitution still gives legal support to a claim of sovereignty over all of China's <a href=\"/wiki/Republic_of_China_(1912%E2%80%9349)\" title=\"Republic of China (1912–49)\">pre-1949 territories</a>, including <a href=\"/wiki/Outer_Mongolia\" title=\"Outer Mongolia\">Outer Mongolia</a> and the entirety of the present PRC.<sup id=\"cite_ref-20\" class=\"reference\"><a href=\"#cite_note-20\"><span>[</span>14<span>]</span></a></sup> In practical terms, settlement of questions such as whether the ROC identifies more as \"Taiwan\" or \"China\", and what the exact nature of its identity is relative to the PRC (whether <a href=\"/wiki/International_relations\" title=\"International relations\">international</a> or domestic), rests with the <a href=\"/wiki/Political_alliance\" title=\"Political alliance\">political coalition</a> most recently elected. Meanwhile, the PRC continues to assert that it represents the <a href=\"/wiki/One_China_policy\" title=\"One China policy\" class=\"mw-redirect\">sole legal government of \"China\"</a> and that Taiwan represents <a href=\"/wiki/Taiwan_Province,_People%27s_Republic_of_China\" title=\"Taiwan Province, People's Republic of China\">China's 23rd province</a>. The stance denies Taiwan recognition as a sovereign state. The PRC has threatened the use of military force as a response to any formal declaration by Taiwan of <a href=\"/wiki/Taiwan_independence\" title=\"Taiwan independence\" class=\"mw-redirect\">national independence</a> or to any decision by PRC leaders that peaceful <a href=\"/wiki/Chinese_unification\" title=\"Chinese unification\">annexation</a> of Taiwan is no longer possible.<sup id=\"cite_ref-21\" class=\"reference\"><a href=\"#cite_note-21\"><span>[</span>15<span>]</span></a></sup></p>\n<ol class=\"references\">\n<li id=\"cite_note-cia-factbook-1\"><span class=\"mw-cite-backlink\">^ <a href=\"#cite_ref-cia-factbook_1-0\"><sup><i><b>a</b></i></sup></a> <a href=\"#cite_ref-cia-factbook_1-1\"><sup><i><b>b</b></i></sup></a></span> <span class=\"reference-text\"><cite class=\"citation web\">\"<a rel=\"nofollow\" class=\"external text\" href=\"https://www.cia.gov/library/publications/the-world-factbook/geos/tw.html\">Taiwan</a> entry at <i><a href=\"/wiki/The_World_Factbook\" title=\"The World Factbook\">The World Factbook</a></i>\". United States <a href=\"/wiki/Central_Intelligence_Agency\" title=\"Central Intelligence Agency\">Central Intelligence Agency</a>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.btitle=%5Bhttps%3A%2F%2Fwww.cia.gov%2Flibrary%2Fpublications%2Fthe-world-factbook%2Fgeos%2Ftw.html+Taiwan%5D+entry+at+The+World+Factbook&amp;rft.genre=unknown&amp;rft.pub=United+States+Central+Intelligence+Agency&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span> <span style=\"font-size:100%\" class=\"error citation-comment\">External link in <code style=\"color:inherit; border:inherit; padding:inherit;\">|title=</code> (<a href=\"/wiki/Help:CS1_errors#param_has_ext_link\" title=\"Help:CS1 errors\">help</a>);</span> <span style=\"display:none;font-size:100%\" class=\"error citation-comment\">Missing or empty <code style=\"color:inherit; border:inherit; padding:inherit;\">|url=</code> (<a href=\"/wiki/Help:CS1_errors#cite_web_url\" title=\"Help:CS1 errors\">help</a>);</span> <span style=\"display:none;font-size:100%\" class=\"error citation-comment\"><code style=\"color:inherit; border:inherit; padding:inherit;\">|access-date=</code> requires <code style=\"color:inherit; border:inherit; padding:inherit;\">|url=</code> (<a href=\"/wiki/Help:CS1_errors#accessdate_missing_url\" title=\"Help:CS1 errors\">help</a>)</span></span></li>\n<li id=\"cite_note-capital-3\"><span class=\"mw-cite-backlink\">^ <a href=\"#cite_ref-capital_3-0\"><sup><i><b>a</b></i></sup></a> <a href=\"#cite_ref-capital_3-1\"><sup><i><b>b</b></i></sup></a></span> <span class=\"reference-text\"><cite class=\"citation news\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.taipeitimes.com/News/taiwan/archives/2013/12/05/2003578356\">\"Interior minister reaffirms Taipei is ROC’s capital\"</a>. Taipei Times. 5 December 2013<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">7 December</span> 2013</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.atitle=Interior+minister+reaffirms+Taipei+is+ROC%99s+capital&amp;rft.date=2013-12-05&amp;rft.genre=article&amp;rft_id=http%3A%2F%2Fwww.taipeitimes.com%2FNews%2Ftaiwan%2Farchives%2F2013%2F12%2F05%2F2003578356&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-4\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-4\">^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.taiwan.gov.tw/ct.asp?xItem=136102&amp;CtNode=3556&amp;mp=1\">\"ROC Vital Information\"</a>. Ministry of Foreign Affairs, Republic of China (Taiwan). 31 December 2014<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">4 June</span> 2015</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.btitle=ROC+Vital+Information&amp;rft.date=2014-12-31&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fwww.taiwan.gov.tw%2Fct.asp%3FxItem%3D136102%26CtNode%3D3556%26mp%3D1&amp;rft.pub=Ministry+of+Foreign+Affairs%2C+Republic+of+China+%28Taiwan%29&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-FOOTNOTEExec._Yuan201436-5\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-FOOTNOTEExec._Yuan201436_5-0\">^</a></b></span> <span class=\"reference-text\"><a href=\"#CITEREFExec._Yuan2014\">Exec. Yuan (2014)</a>, p.&#160;36.</span></li>\n<li id=\"cite_note-taiwan-popstat\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-taiwan-popstat_1\">^</a></b></span> <strong class=\"error mw-ext-cite-error\">Cite error: The named reference <code>taiwan-popstat</code> was invoked but never defined (see the <a href=\"/wiki/Help:Cite_errors/Cite_error_references_no_text\" title=\"Help:Cite errors/Cite error references no text\">help page</a>).</strong></li>\n<li id=\"cite_note-Natl_Statistics-10\"><span class=\"mw-cite-backlink\">^ <a href=\"#cite_ref-Natl_Statistics_10-0\"><sup><i><b>a</b></i></sup></a> <a href=\"#cite_ref-Natl_Statistics_10-1\"><sup><i><b>b</b></i></sup></a></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://eng.stat.gov.tw/point.asp?index=9\">\"Statistics from Statistical Bureau\"</a>. <i>National Statistics, Republic of China (Taiwan)</i><span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">30 September</span> 2015</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.atitle=Statistics+from+Statistical+Bureau&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Feng.stat.gov.tw%2Fpoint.asp%3Findex%3D9&amp;rft.jtitle=National+Statistics%2C+Republic+of+China+%28Taiwan%29&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-imf2-11\"><span class=\"mw-cite-backlink\">^ <a href=\"#cite_ref-imf2_11-0\"><sup><i><b>a</b></i></sup></a> <a href=\"#cite_ref-imf2_11-1\"><sup><i><b>b</b></i></sup></a> <a href=\"#cite_ref-imf2_11-2\"><sup><i><b>c</b></i></sup></a> <a href=\"#cite_ref-imf2_11-3\"><sup><i><b>d</b></i></sup></a></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.imf.org/external/pubs/ft/weo/2014/02/weodata/weorept.aspx?pr.x=19&amp;pr.y=12&amp;sy=2014&amp;ey=2019&amp;scsm=1&amp;ssd=1&amp;sort=country&amp;ds=.&amp;br=1&amp;c=528&amp;s=NGDPD%2CNGDPDPC%2CPPPGDP%2CPPPPC&amp;grp=0&amp;a=\">\"Republic of China (Taiwan)\"</a>. International Monetary Fund<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">28 October</span> 2013</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.btitle=Republic+of+China+%28Taiwan%29&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fwww.imf.org%2Fexternal%2Fpubs%2Fft%2Fweo%2F2014%2F02%2Fweodata%2Fweorept.aspx%3Fpr.x%3D19%26pr.y%3D12%26sy%3D2014%26ey%3D2019%26scsm%3D1%26ssd%3D1%26sort%3Dcountry%26ds%3D.%26br%3D1%26c%3D528%26s%3DNGDPD%252CNGDPDPC%252CPPPGDP%252CPPPPC%26grp%3D0%26a%3D&amp;rft.pub=International+Monetary+Fund&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-12\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-12\">^</a></b></span> <span class=\"reference-text\"><cite class=\"citation book\"><a rel=\"nofollow\" class=\"external text\" href=\"http://win.dgbas.gov.tw/fies/doc/result/99/a11/Year04.xls\">\"Table 4. Percentage Share of Disposable Income by Quintile Group of Households and Income Inequality Indices\"</a>. <a rel=\"nofollow\" class=\"external text\" href=\"http://eng.stat.gov.tw/ct.asp?xItem=3417&amp;CtNode=1596&amp;mp=5\"><i>Report on The Survey of Family Income and Expenditure</i></a>. Taipei, Taiwan: Directorate General of Budget, Accounting and Statistics. 2010.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.atitle=Table+4.+Percentage+Share+of+Disposable+Income+by+Quintile+Group+of+Households+and+Income+Inequality+Indices&amp;rft.btitle=Report+on+The+Survey+of+Family+Income+and+Expenditure&amp;rft.date=2010&amp;rft.genre=bookitem&amp;rft_id=http%3A%2F%2Fwin.dgbas.gov.tw%2Ffies%2Fdoc%2Fresult%2F99%2Fa11%2FYear04.xls&amp;rft.place=Taipei%2C+Taiwan&amp;rft.pub=Directorate+General+of+Budget%2C+Accounting+and+Statistics&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-HDI-2-13\"><span class=\"mw-cite-backlink\">^ <a href=\"#cite_ref-HDI-2_13-0\"><sup><i><b>a</b></i></sup></a> <a href=\"#cite_ref-HDI-2_13-1\"><sup><i><b>b</b></i></sup></a></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://eng.stat.gov.tw/public/Attachment/4915152917VTN8T5VB.xls\"><bdi lang=\"zh\">人類發展指數(HDI)</bdi> [Human Development Index (HDI)]</a>. <i>National Statistics, Republic of China (Taiwan)</i> (in Chinese). Directorate General of Budget, Accounting and Statistics, Executive Yuan, R.O.C. 15 September 2014.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.atitle=%E4%BA%BA%E9%A1%9E%E7%99%BC%E5%B1%95%E6%8C%87%E6%95%B8%28HDI%29&amp;rft.date=2014-09-15&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Feng.stat.gov.tw%2Fpublic%2FAttachment%2F4915152917VTN8T5VB.xls&amp;rft.jtitle=National+Statistics%2C+Republic+of+China+%28Taiwan%29&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-15\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-15\">^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://brussels38.icann.org/meetings/brussels2010/transcript-board-25jun10-en.txt\">\"ICANN Board Meeting Minutes\"</a>. ICANN. 25 June 2010.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.btitle=ICANN+Board+Meeting+Minutes&amp;rft.date=2010-06-25&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fbrussels38.icann.org%2Fmeetings%2Fbrussels2010%2Ftranscript-board-25jun10-en.txt&amp;rft.pub=ICANN&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-17\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-17\">^</a></b></span> <span class=\"reference-text\"><cite class=\"citation journal\">Yao, Grace; Cheng, Yen-Pi; Cheng, Chiao-Pi (5 November 2008). \"The Quality of Life in Taiwan\". <i>Social Indicators Research</i> <b>92</b> (2): 377–404. <a href=\"/wiki/Digital_object_identifier\" title=\"Digital object identifier\">doi</a>:<a rel=\"nofollow\" class=\"external text\" href=\"//dx.doi.org/10.1007%2Fs11205-008-9353-1\">10.1007/s11205-008-9353-1</a>. <q>a second place ranking in the 2000 Economist's world healthcare ranking</q></cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.atitle=The+Quality+of+Life+in+Taiwan&amp;rft.au=Cheng%2C+Chiao-Pi&amp;rft.au=Cheng%2C+Yen-Pi&amp;rft.aufirst=Grace&amp;rft.aulast=Yao&amp;rft.date=2008-11-05&amp;rft.genre=article&amp;rft_id=info%3Adoi%2F10.1007%2Fs11205-008-9353-1&amp;rft.issue=2&amp;rft.jtitle=Social+Indicators+Research&amp;rft.pages=377-404&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.volume=92\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-18\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-18\">^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.dgbas.gov.tw/public/Data/11715541971.pdf\"><bdi lang=\"zh\">2010中華民國人類發展指數 (HDI)</bdi></a> <span style=\"font-size:85%;\">(PDF)</span> (in Chinese). Directorate General of Budget, Accounting and Statistics, Executive Yuan, R.O.C. 2010<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2 July</span> 2010</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.btitle=2010%E4%B8+%E8%8F%AF%E6%B0%91%E5%9C%E4%BA%BA%E9%A1%9E%E7%99%BC%E5%B1%95%E6%8C%87%E6%95%B8+%28HDI%29&amp;rft.date=2010&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fwww.dgbas.gov.tw%2Fpublic%2FData%2F11715541971.pdf&amp;rft.pub=Directorate+General+of+Budget%2C+Accounting+and+Statistics%2C+Executive+Yuan%2C+R.O.C.&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-19\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-19\">^</a></b></span> <span class=\"reference-text\"><span class=\"citation book\"><i><a href=\"/wiki/File:Wikisource-logo.svg\" class=\"image\"><img alt=\"Wikisource link to\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/12px-Wikisource-logo.svg.png\" width=\"12\" height=\"13\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/18px-Wikisource-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/24px-Wikisource-logo.svg.png 2x\" data-file-width=\"410\" data-file-height=\"430\" /></a>&#160;<a href=\"//en.wikisource.org/wiki/Constitution_of_the_Republic_of_China\" class=\"extiw\" title=\"wikisource:Constitution of the Republic of China\">Constitution of the Republic of China</a></i>. <a href=\"/wiki/Wikisource\" title=\"Wikisource\">Wikisource</a>. Chapter XIII. Fundamental National Policies, Article 141. \"The foreign policy of the Republic of China[...]in order to protect the rights and interests of Chinese citizens residing abroad\"</span><span class=\"Z3988\" title=\"ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=%5B%5BFile%3AWikisource-logo.svg%7C12px%7Calt%3DWikisource+link+to%5D%5D%26nbsp%3B%5B%5Bwikisource%3AConstitution+of+the+Republic+of+China%7CConstitution+of+the+Republic+of+China%5D%5D&amp;rft.pages=Chapter+XIII.+Fundamental+National+Policies%2C+Article+141&amp;rft.pub=%5B%5BWikisource%5D%5D&amp;rfr_id=info:sid/en.wikipedia.org:Taiwan\"><span style=\"display: none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-20\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-20\">^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://www.judicial.gov.tw/constitutionalcourt/p03_01_printpage.asp?expno=328\"><bdi lang=\"zh\">釋字第 328</bdi></a>. <i>Justices of the Constitutional Court, Judicial Yuan</i> (in Chinese). 26 November 1993<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">2 March</span> 2015</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.atitle=%E9%87%E5+%97%E7%AC%AC+328&amp;rft.date=1993-11-26&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fwww.judicial.gov.tw%2Fconstitutionalcourt%2Fp03_01_printpage.asp%3Fexpno%3D328&amp;rft.jtitle=Justices+of+the+Constitutional+Court%2C+Judicial+Yuan&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n<li id=\"cite_note-21\"><span class=\"mw-cite-backlink\"><b><a href=\"#cite_ref-21\">^</a></b></span> <span class=\"reference-text\"><cite class=\"citation web\"><a rel=\"nofollow\" class=\"external text\" href=\"http://english.people.com.cn/200503/14/eng20050314_176746.html\">\"Full text of Anti-Secession Law\"</a>. <i>People's Daily</i>. 14 March 2005<span class=\"reference-accessdate\">. Retrieved <span class=\"nowrap\">10 April</span> 2012</span>.</cite><span title=\"ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3ATaiwan&amp;rft.atitle=Full+text+of+Anti-Secession+Law&amp;rft.date=2005-03-14&amp;rft.genre=unknown&amp;rft_id=http%3A%2F%2Fenglish.people.com.cn%2F200503%2F14%2Feng20050314_176746.html&amp;rft.jtitle=People%27s+Daily&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal\" class=\"Z3988\"><span style=\"display:none;\">&#160;</span></span></span></li>\n</ol>\n<p><br />\n<strong class=\"error mw-ext-cite-error\">Cite error: There are <code>&lt;ref&#160;group=lower-alpha&gt;</code> tags&#160;or <code>{{efn}}</code> templates on this page, but the references will not show without a <code>{{reflist|group=lower-alpha}}</code> template&#160;or <code>{{notelist}}</code> template (see the <a href=\"/wiki/Help:Cite_errors/Cite_error_group_refs_without_references\" title=\"Help:Cite errors/Cite error group refs without references\">help page</a>).</strong></p>\n\n\n<!-- \nNewPP limit report\nParsed by mw1235\nCached time: 20160207180402\nCache expiry: 2592000\nDynamic content: false\nCPU time usage: 0.627 seconds\nReal time usage: 0.808 seconds\nPreprocessor visited node count: 8120/1000000\nPreprocessor generated node count: 0/1500000\nPost‐expand include size: 146906/2097152 bytes\nTemplate argument size: 21931/2097152 bytes\nHighest expansion depth: 22/40\nExpensive parser function count: 13/500\nLua time usage: 0.247/10.000 seconds\nLua memory usage: 6.9 MB/50 MB\nNumber of Wikibase entities loaded: 1-->\n\n<!-- \nTransclusion expansion time report (%,ms,calls,template)\n100.00%  771.285      1 - -total\n 30.69%  236.696      6 - Template:Infobox\n 24.23%  186.889      1 - Template:Chinese\n 17.59%  135.643      1 - Template:Infobox_country\n 16.64%  128.340      2 - Template:Infobox_Chinese/Chinese\n  9.32%   71.908      9 - Template:Cite_web\n  6.63%   51.130      7 - Template:Efn\n  6.54%   50.452      9 - Template:Lang\n  5.99%   46.188      9 - Template:Category_handler\n  5.89%   45.451      2 - Template:Coord\n-->\n"
			}
		}
	};

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(300);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Row = _react2.default.createClass({
	  displayName: 'Row',

	  onClickRow: function onClickRow(e) {
	    this.props.setDetail(this.props.title);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'a',
	      { className: 'no-decro', onClick: this.onClickRow, href: '/#/detail' },
	      _react2.default.createElement(
	        'div',
	        { className: 'list-row' },
	        this.props.title,
	        _react2.default.createElement(
	          'span',
	          { className: 'arrow pull-right' },
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
	        )
	      )
	    );
	  }
	});

	exports.default = (0, _reactRedux.connect)(null, { setDetail: _action_creator.setDetail })(Row);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Row.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(300);

	var _helper = __webpack_require__(301);

	var _api = __webpack_require__(302);

	var _Banner = __webpack_require__(309);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _Row = __webpack_require__(307);

	var _Row2 = _interopRequireDefault(_Row);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Lists = _react2.default.createClass({
	  displayName: 'Lists',

	  componentDidMount: function componentDidMount() {
	    updatePageTitle(this, new Date());
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (prevProps.title !== this.props.title) {
	      updateList(this, this.props.title);
	    }
	  },
	  render: function render() {
	    var titleText = this.props.title ? this.props.title : 'Nothing to display';
	    var link = this.props.title ? _react2.default.createElement(
	      'a',
	      { target: '_blank', className: 'tiny-link',
	        href: 'https://en.wikipedia.org/wiki/' + this.props.title },
	      '(wiki)'
	    ) : null;

	    titleText = titleText.replace('_', ' ');

	    var list = this.props.pages ? _react2.default.createElement(
	      'ul',
	      { className: 'custom' },
	      this.props.pages.map(function (page) {
	        return _react2.default.createElement(
	          'li',
	          { key: page },
	          _react2.default.createElement(_Row2.default, { title: page })
	        );
	      })
	    ) : null;

	    return _react2.default.createElement(
	      'div',
	      { id: 'list-page' },
	      _react2.default.createElement(_Banner2.default, { title: this.props.title }),
	      _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'list-main row' },
	          _react2.default.createElement('div', { className: 'col-md-3' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-6' },
	            _react2.default.createElement(
	              'h1',
	              { className: 'page-header' },
	              titleText,
	              ' ',
	              link
	            ),
	            list
	          ),
	          _react2.default.createElement('div', { className: 'col-md-3' })
	        )
	      )
	    );
	  }
	});

	function updateList(ctx, title) {
	  //TODO: handle ajax fail.
	  (0, _api.getLinks)({ title: title }).then(function (links) {
	    var pick = (0, _helper.randomPick)(links);
	    ctx.props.setList(pick);
	  }).catch(function (err) {
	    console.log('err' + JSON.stringify(err));
	  });
	}

	function updatePageTitle(ctx, dateObj) {
	  var title = (0, _helper.parseDate)(dateObj);
	  // simulate ajax call
	  setTimeout(function () {
	    ctx.props.setListTitle(title);
	  }, 200);
	}

	function selector(state) {
	  return {
	    pages: state.get('links').toArray(),
	    title: state.get('title')
	  };
	}

	exports.default = (0, _reactRedux.connect)(selector, { setListTitle: _action_creator.setListTitle, setList: _action_creator.setList })(Lists);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Lists.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _reactDayPicker = __webpack_require__(310);

	var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

	__webpack_require__(315);

	var _action_creator = __webpack_require__(300);

	var _helper = __webpack_require__(301);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Banner = _react2.default.createClass({
	  displayName: 'Banner',

	  onDayClick: function onDayClick(e, day) {
	    var date = (0, _helper.parseDate)(new Date(day));
	    this.setState({ 'chosen': date });
	  },
	  onApply: function onApply(e) {
	    if (!!this.state.chosen && this.props.title !== this.state.chosen) {
	      this.props.setListTitle(this.state.chosen);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({ 'chosen': nextProps.title });
	  },
	  getInitialState: function getInitialState() {
	    return { 'chosen': this.props.title };
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'banner-container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement('div', { className: 'col-md-3' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-3' },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Greeting'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'This is a demo app. It fetch links from a page of ',
	              _react2.default.createElement(
	                'a',
	                { href: 'https://www.wikipedia.org/', target: '_blank' },
	                'Wikipedia'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'You could save some links into local storage.'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-3' },
	            _react2.default.createElement(_reactDayPicker2.default, {
	              onDayClick: this.onDayClick
	            }),
	            _react2.default.createElement(
	              'button',
	              { className: 'btn btn-success', onClick: this.onApply,
	                disabled: this.props.title === this.state.chosen },
	              'Apply'
	            )
	          ),
	          _react2.default.createElement('div', { className: 'col-md-3' })
	        )
	      )
	    );
	  }
	});

	exports.default = Banner;

	function selector(state) {
	  return {
	    title: state.get('title')
	  };
	}

	exports.default = (0, _reactRedux.connect)(selector, { setListTitle: _action_creator.setListTitle })(Banner);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Banner.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 315:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _helper = __webpack_require__(301);

	var _BookmarkRow = __webpack_require__(318);

	var _BookmarkRow2 = _interopRequireDefault(_BookmarkRow);

	var _BtnExport = __webpack_require__(319);

	var _BtnExport2 = _interopRequireDefault(_BtnExport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Bookmarks = _react2.default.createClass({
	  displayName: 'Bookmarks',

	  getInitialState: function getInitialState() {
	    return {
	      active: ''
	    };
	  },
	  toggleRow: function toggleRow(title) {
	    this.setState({ active: title });
	  },
	  render: function render() {
	    var keys = Object.keys(this.props.bookmarks);
	    var bmks = keys.length > 0 ? _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'ul',
	        { className: 'custom' },
	        keys.map(function (key) {
	          var item = this.props.bookmarks[key];
	          return _react2.default.createElement(
	            'li',
	            { key: key },
	            _react2.default.createElement(_BookmarkRow2.default, { title: key,
	              notifyParent: this.toggleRow,
	              active: this.state.active })
	          );
	        }.bind(this))
	      )
	    ) : null;

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'div',
	          { className: 'list-main row' },
	          _react2.default.createElement('div', { className: 'col-md-3' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-6' },
	            _react2.default.createElement(
	              'h1',
	              { className: 'page-header' },
	              'Bookmarks ',
	              _react2.default.createElement(_BtnExport2.default, null)
	            ),
	            bmks
	          ),
	          _react2.default.createElement('div', { className: 'col-md-3' })
	        )
	      )
	    );
	  }
	});

	function selector(state) {
	  return {
	    bookmarks: state.get('bookmarks').toJS()
	  };
	}

	exports.default = (0, _reactRedux.connect)(selector, {})(Bookmarks);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Bookmarks.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(300);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BookmarkRow = _react2.default.createClass({
	  displayName: 'BookmarkRow',

	  onClickRow: function onClickRow(e) {
	    // If myself is activated, deactivate myself.
	    // Otherwise, to activate myself and notify siblings..
	    var msg = this.props.active === this.props.title ? '' : this.props.title;
	    this.props.notifyParent(msg);
	  },
	  onClickGo: function onClickGo() {
	    this.props.setDetail(this.props.title);
	  },
	  onClickRemove: function onClickRemove(e) {
	    this.props.removeBookmark(this.props.title);
	  },
	  render: function render() {
	    var btns = this.props.active === this.props.title ? _react2.default.createElement(
	      'span',
	      { className: 'btns pull-right' },
	      _react2.default.createElement(
	        'button',
	        { className: 'btn btn-danger', onClick: this.onClickRemove },
	        _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove' })
	      ),
	      _react2.default.createElement(
	        'a',
	        { className: 'btn btn-default', href: '/#/detail', onClick: this.onClickGo },
	        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
	      )
	    ) : null;

	    return _react2.default.createElement(
	      'div',
	      { className: 'bookmark-row', onClick: this.onClickRow },
	      _react2.default.createElement(
	        'span',
	        { className: 'bookmark-icon' },
	        _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' })
	      ),
	      this.props.title,
	      btns
	    );
	  }
	});

	exports.default = (0, _reactRedux.connect)(null, { removeBookmark: _action_creator.removeBookmark, setDetail: _action_creator.setDetail })(BookmarkRow);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "BookmarkRow.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _filesaver = __webpack_require__(320);

	__webpack_require__(300);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BtnExport = _react2.default.createClass({
	  displayName: 'BtnExport',

	  save: function save() {
	    if (this.props.bookmarks.length === 0) {
	      return;
	    }
	    var blob = new Blob([JSON.stringify(this.props.bookmarks, null, 2)], { type: 'application/json' });
	    (0, _filesaver.saveAs)(blob, "bookmarks.json");
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'button',
	      {
	        disabled: this.props.bookmarks.length === 0,
	        onClick: this.save,
	        className: 'btn btn-sm btn-default pull-right' },
	      'Export'
	    );
	  }
	});

	function selector(state) {
	  return {
	    bookmarks: state.get('bookmarks').toJS()
	  };
	}

	exports.default = (0, _reactRedux.connect)(selector, {})(BtnExport);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "BtnExport.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(300);

	var _api = __webpack_require__(302);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Detail = _react2.default.createClass({
	  displayName: 'Detail',

	  getInitialState: function getInitialState() {
	    return { selection: '' };
	  },
	  toggle: function toggle(e) {
	    var name = this.props.pageName;
	    var bk = this.props.bookmarks[name];
	    if (bk) {
	      var yes = bk.length === 0 ? true : confirm('Remove this bookmark and notes belongs to it?');
	      yes && this.props.removeBookmark(name);
	    } else {
	      this.props.saveBookmark(name);
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    if (!!this.props.pageName) {
	      updateContent(this, this.props.pageName);
	    }
	  },
	  saveNote: function saveNote() {
	    this.props.saveBookmark(this.props.pageName, [this.state.selection]);
	    clearSelection();
	    this.setState({ selection: '' });
	  },
	  onMouseUp: function onMouseUp(e) {
	    // delay. in case of user clicking the selected-area to clear selection
	    // but browser fire event before real clear.
	    setTimeout(function () {
	      // only save 140 chars. Twitter rules!
	      var selection = window.getSelection().toString().substr(0, 140);
	      this.setState({ selection: selection });
	    }.bind(this), 10);
	  },
	  render: function render() {
	    var props = this.props;
	    if (!props.content) {
	      return null;
	    }

	    var content = props.content ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: props.content } }) : null;
	    var bk = props.bookmarks[props.pageName];
	    var star = bk ? _react2.default.createElement(
	      'span',
	      { className: 'btn btn-success btn-sm pull-right', onClick: this.toggle },
	      _react2.default.createElement('i', { className: 'glyphicon glyphicon-star' }),
	      'Bookmark'
	    ) : _react2.default.createElement(
	      'span',
	      { className: 'btn btn-default btn-sm pull-right', onClick: this.toggle },
	      _react2.default.createElement('i', { className: 'glyphicon glyphicon-star-empty' }),
	      'Bookmark'
	    );

	    var notes = Array.isArray(bk) && bk.length > 0 ? _react2.default.createElement(
	      'p',
	      { className: 'note' },
	      bk[0]
	    ) : _react2.default.createElement(
	      'div',
	      { className: 'stick-left' },
	      'Select interested text to save as note'
	    );

	    var header = _react2.default.createElement(
	      'div',
	      { className: 'detail-header' },
	      star,
	      _react2.default.createElement(
	        'span',
	        { className: 'detail-title' },
	        props.pageName
	      ),
	      notes
	    );
	    var body = _react2.default.createElement(
	      'span',
	      null,
	      header,
	      _react2.default.createElement(
	        'div',
	        { className: 'detail-content' },
	        content
	      )
	    );

	    var stick = this.state.selection ? _react2.default.createElement(
	      'div',
	      { className: 'stick-bottom' },
	      _react2.default.createElement(
	        'button',
	        { className: 'btn btn-default btn-lg center-block', onClick: this.saveNote },
	        _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil' }),
	        'save note'
	      )
	    ) : null;

	    var container = _react2.default.createElement(
	      'div',
	      { onMouseUp: this.onMouseUp, className: 'container-fluid' },
	      stick,
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement('div', { className: 'col-md-3' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          body
	        ),
	        _react2.default.createElement('div', { className: 'col-md-3' })
	      )
	    );

	    return container;
	  }
	});

	function updateContent(ctx, title) {
	  (0, _api.getContent)({ title: title }).then(function (htmlText) {
	    ctx.props.setContent(htmlText);
	  });
	}

	function clearSelection() {
	  if (window.getSelection) {
	    if (window.getSelection().empty) {
	      // Chrome
	      window.getSelection().empty();
	    } else if (window.getSelection().removeAllRanges) {
	      // Firefox
	      window.getSelection().removeAllRanges();
	    }
	  }
	}

	function selector(state) {
	  return {
	    bookmarks: state.get('bookmarks').toJS(),
	    content: state.get('content'),
	    pageName: state.get('detail')
	  };
	}

	exports.default = (0, _reactRedux.connect)(selector, { saveBookmark: _action_creator.saveBookmark, removeBookmark: _action_creator.removeBookmark, setContent: _action_creator.setContent })(Detail);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Detail.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      if (action.type === 'SET_CONTENT') {
	        console.log('log: set content length', action.htmlText.length);
	      } else {
	        console.log('log:', JSON.stringify(action));
	      }
	      return next(action);
	    };
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "log_middleware.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 325:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});