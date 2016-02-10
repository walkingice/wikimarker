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

	var _immutable = __webpack_require__(293);

	var _reducer = __webpack_require__(294);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _Layout = __webpack_require__(296);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Lists = __webpack_require__(300);

	var _Lists2 = _interopRequireDefault(_Lists);

	var _Bookmarks = __webpack_require__(318);

	var _Bookmarks2 = _interopRequireDefault(_Bookmarks);

	var _Detail = __webpack_require__(324);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _storage = __webpack_require__(295);

	var _api = __webpack_require__(301);

	var _log_middleware = __webpack_require__(325);

	var _log_middleware2 = _interopRequireDefault(_log_middleware);

	__webpack_require__(326);

	var _action_creator = __webpack_require__(297);

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

/***/ 294:
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
	      return setContent(state, action.data);
	    case 'SAVE_BOOKMARK':
	      return saveBookmark(state, action.bookmark, action.notes);
	    case 'REMOVE_BOOKMARK':
	      return removeBookmark(state, action.bookmark);
	  }
	  return state;
	};

	var _immutable = __webpack_require__(293);

	var _storage = __webpack_require__(295);

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

	function setContent(state, data) {
	  return state.set('content', (0, _immutable.fromJS)(data));
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

/***/ 295:
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

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(297);

	var _helper = __webpack_require__(298);

	var _Row = __webpack_require__(299);

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

/***/ 297:
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

	function setContent(data) {
	  return {
	    type: 'SET_CONTENT',
	    data: data
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

/***/ 298:
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

	var _action_creator = __webpack_require__(297);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Row = _react2.default.createClass({
	  displayName: 'Row',

	  onClickRow: function onClickRow(e) {
	    this.props.setDetail(this.props.title);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'a',
	      { className: 'no-decor', onClick: this.onClickRow, href: '/#/detail' },
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

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(297);

	var _helper = __webpack_require__(298);

	var _api = __webpack_require__(301);

	var _Banner = __webpack_require__(310);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _Row = __webpack_require__(299);

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
	  (0, _api.getLinks)({ page: title }).then(function (links) {
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

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLinks = getLinks;
	exports.getContent = getContent;
	exports.buildLinksApi = buildLinksApi;
	exports.buildContentApi = buildContentApi;
	exports.buildImgsQueryApi = buildImgsQueryApi;
	exports.useFakeData = useFakeData;

	var _May_ = __webpack_require__(302);

	var May5 = _interopRequireWildcard(_May_);

	var _November_ = __webpack_require__(303);

	var Nov1 = _interopRequireWildcard(_November_);

	var _Detail = __webpack_require__(304);

	var Detail = _interopRequireWildcard(_Detail);

	var _Images = __webpack_require__(305);

	var Images = _interopRequireWildcard(_Images);

	var _jquery = __webpack_require__(306);

	var $ = _interopRequireWildcard(_jquery);

	var _querystring = __webpack_require__(307);

	var qs = _interopRequireWildcard(_querystring);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * A layer to fetch data from Wikipedia.
	 */

	var _fake = false;

	var _END_POINT = 'https://en.wikipedia.org/w/api.php';

	function getLinksFake(param) {
	  var delay = 600;

	  return new Promise(function (resolve, reject) {
	    setTimeout(function () {
	      var odd = param.page.length % 2 === 0;
	      var links = odd ? rslvLinks(May5) : rslvLinks(Nov1);
	      resolve(links);
	    }, delay);
	  });
	}

	function getContentFake(param) {
	  var delay = 600;

	  return new Promise(function (resolve, reject) {
	    setTimeout(function () {
	      var page = rslvPage(Detail);
	      var categories = rslvCategories(Detail);
	      // Useless. We already cached needed data as 'Images.json'
	      // let titles = rslvImgsTitle(Detail);
	      var images = rslvImgsUrl(Images);
	      resolve({ innerHTML: page.extract, categories: categories, images: images });
	    }, delay);
	  });
	}

	/* Return built-in Promise */
	function getAjax(url) {
	  // Wikipedia API only accept jsonp
	  return new Promise(function (resolve, reject) {
	    $.ajax({
	      url: url,
	      jsonp: 'callback',
	      dataType: 'jsonp'
	    }).then(resolve, reject);
	  });
	}

	function getLinksAjax(param) {
	  return getAjax(buildLinksApi(param)).then(function (resp) {
	    return rslvLinks(resp);
	  });
	}

	function getContentAjax(param) {
	  return getAjax(buildContentApi(param)).then(function (resp) {
	    var page = rslvPage(resp);
	    var categories = rslvCategories(resp);
	    var titles = rslvImgsTitle(resp).join('|');
	    var url = buildImgsQueryApi({ titles: titles });

	    return Promise.all([page, categories, getAjax(url)]);
	  }).then(function (results) {
	    return {
	      innerHTML: results[0].extract,
	      categories: results[1],
	      images: rslvImgsUrl(results[2])
	    };
	  });
	}

	/* return a promise */
	function getLinks(param) {
	  var lang = arguments.length <= 1 || arguments[1] === undefined ? 'en' : arguments[1];

	  return _fake ? getLinksFake(param) : getLinksAjax(param);
	}

	/* return a promise */
	function getContent(param) {
	  var lang = arguments.length <= 1 || arguments[1] === undefined ? 'en' : arguments[1];

	  return _fake ? getContentFake(param) : getContentAjax(param);
	}

	var linkParam = {
	  action: 'parse',
	  format: 'json',
	  prop: 'links'
	};

	function buildLinksApi(param) {
	  var p = Object.assign({}, linkParam, param);
	  return _END_POINT + '?' + qs.stringify(p);
	}

	var contentParam = {
	  action: 'query',
	  format: 'json',
	  redirects: "",
	  clshow: '!hidden',
	  prop: 'extracts|images|categories|imageinfo',
	  iiprop: 'url'
	};

	function buildContentApi(param) {
	  var p = Object.assign({}, contentParam, param);
	  return _END_POINT + '?' + qs.stringify(p);
	}

	// ?action=query&format=json&prop=imageinfo&iiprop=url&titles=File:10
	var queryImgsParam = {
	  action: 'query',
	  format: 'json',
	  prop: 'imageinfo',
	  iiprop: 'url'
	};

	function buildImgsQueryApi(param) {
	  var p = Object.assign({}, queryImgsParam, param);
	  return _END_POINT + '?' + qs.stringify(p);
	}

	function useFakeData(fake) {
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
	  var firstPageId = Object.keys(resp.query.pages)[0];
	  return resp.query.pages[firstPageId];
	}

	/*
	 * Resolve AJAX response to get name of categories which the page belongs to.
	 *
	 * @param resp AJAX response data
	 * @return Array a string array of categories name.
	 */
	function rslvCategories(resp) {
	  var page = rslvPage(resp);
	  return page.categories.map(function (c) {
	    return c.title;
	  });
	}

	/*
	 * Resolve AJAX response to get name of images which the page contains.
	 * Do not get too many images.
	 *
	 * @param resp AJAX response data
	 * @return Array a string array of images name.
	 */
	function rslvImgsTitle(resp) {
	  var limit = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

	  var page = rslvPage(resp);
	  return page.images.map(function (i) {
	    return i.title;
	  }).slice(0, limit);
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
	  var pages = resp.query.pages;
	  return Object.keys(pages).map(function (key) {
	    return pages[key];
	  }).map(function (p) {
	    return p.imageinfo[0].url;
	  });
	}

	function rslvLinks(resp) {
	  return resp.parse.links.map(function (item) {
	    return item['*'];
	  });
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "api.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 302:
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

/***/ 303:
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

/***/ 304:
/***/ function(module, exports) {

	module.exports = {
		"continue": {
			"imcontinue": "25734|Bandera_poble_Batwa.svg",
			"clcontinue": "25734|Unrecognized_or_largely_unrecognized_states",
			"continue": "||extracts|imageinfo"
		},
		"query": {
			"pages": {
				"25734": {
					"pageid": 25734,
					"ns": 0,
					"title": "Taiwan",
					"extract": "<p><span></span></p>\n<p><b>Taiwan</b> (<span><span>/<span><span title=\"/ˌ/ secondary stress follows\">ˌ</span><span title=\"'t' in 'tie'\">t</span><span title=\"/aɪ/ long 'i' in 'tide'\">aɪ</span><span title=\"/ˈ/ primary stress follows\">ˈ</span><span title=\"'w' in 'wind'\">w</span><span title=\"/ɑː/ 'a' in 'father'\">ɑː</span><span title=\"'n' in 'no'\">n</span></span>/</span></span>; Chinese: <span lang=\"zh-Hant\">臺灣 or 台灣</span>; see below), officially the <b>Republic of China</b> (<b>ROC</b>; Chinese: <span lang=\"zh-Hant\">中華民國</span>; pinyin: <i><span lang=\"zh-Latn-pinyin\">Zhōnghuá Mínguó</span></i>), is a sovereign state in East Asia. The Republic of China, originally based in mainland China, now governs the island of Taiwan, which constitutes more than 99% of its territory, as well as Penghu, Kinmen, Matsu, and other minor islands, following its loss of the mainland China territory in 1949 in the Chinese Civil War. This remaining area is also constitutionally called the \"Free area of the Republic of China\" which is not ruled by the Communist Party of China in Beijing.</p>\n<p>Neighboring states include the People's Republic of China (PRC) to the west (mainland China), Japan to the east and northeast, and the Philippines to the south. Taiwan is one of the most densely populated countries in the world with a population density of 648 people per km<sup>2</sup> in July 2015. Taipei is the seat of the central government, and together with the surrounding cities of New Taipei and Keelung forms the largest metropolitan area on the island.</p>\n<p>The island of Taiwan (formerly known as \"<i>Formosa</i>\") was mainly inhabited by Taiwanese aborigines until the Dutch and Spanish settlement during the Age of Discovery in the 17th century, when Han Chinese began immigrating to the island. In 1662, the pro-Ming loyalist Koxinga expelled the Dutch and established the first Han Chinese polity on the island, the Kingdom of Tungning. The Qing dynasty of China later defeated the kingdom and annexed Taiwan. By the time Taiwan was ceded to Japan in 1895, the majority of Taiwan's inhabitants were Han Chinese either by ancestry or by assimilation. The Republic of China (ROC) was established in mainland China in 1912. After Japan's surrender in 1945, the ROC gained control of Taiwan. During the Chinese Civil War, the Communist Party of China took full control of mainland China and founded the People's Republic of China (PRC) in 1949. ROC loyalists fled to Taiwan and re-established the national government there, claiming to be the legitimate government of all of China. Effective ROC jurisdiction was actually now limited to Taiwan and its surrounding islands, with the main island making up 99% of its <i>de facto</i> territory. The ROC continued to represent China at the United Nations until 1971, when the PRC assumed China's seat via Resolution 2758. The ROC lost UN membership. International recognition of the ROC gradually eroded as most countries switched their 'China' recognition to the PRC. 21 UN member states and the Holy See currently maintain official diplomatic relations with the ROC. Numerous other states maintain unofficial ties through representative offices via institutions that function as <i>de facto</i> embassies and consulates.</p>\n<p>In the 1980s and early 1990s Taiwanese society transformed itself from a military dictatorship employing one-party rule to a multi-party democracy with universal suffrage.</p>\n<p>Today Taiwan maintains an advanced industrial economy as a result of rapid economic growth and industrialization in the late twentieth century. Taiwan is one of the Four Asian Tigers and a member of the WTO and APEC. The 21st-largest economy in the world, its high-tech industry plays a key role in the global economy. Taiwan is ranked highly in terms of freedom of the press, health care, public education, economic freedom, and human development.</p>\n<p>The complications of Taiwan's history since 1945 have bequeathed a number of unresolved issues to its citizens. Outstanding among these are the exact nature of Taiwanese national identity, the ambiguous international status of Taiwan, and the difficulty of maintaining relations with the PRC across the Taiwan Strait. Within Taiwanese society these issues generate debate among political parties and candidates. Though the ROC renounced in 1992 the conquest of PRC-controlled territories as a national goal, the constitution still gives legal support to a claim of sovereignty over all of China's pre-1949 territories, including Outer Mongolia and the entirety of the present PRC. In practical terms, settlement of questions such as whether the ROC identifies more as \"Taiwan\" or \"China\", and what the exact nature of its identity is relative to the PRC (whether international or domestic), rests with the political coalition most recently elected. Meanwhile, the PRC continues to assert that it represents the sole legal government of \"China\" and that Taiwan represents China's 23rd province. The stance denies Taiwan recognition as a sovereign state. The PRC has threatened the use of military force as a response to any formal declaration by Taiwan of national independence or to any decision by PRC leaders that peaceful annexation of Taiwan is no longer possible.</p>\n<p></p>\n<h2><span id=\"Names\">Names<span id=\"Etymology\"></span></span></h2>\n\n\n<p>There are various names for the island of Taiwan in use today, derived from explorers or rulers by each particular period. The former name <b>Formosa</b> (<span lang=\"zh-hant\">福爾摩沙</span>) dates from 1542, when Portuguese sailors sighted the main island of Taiwan and named it <i>Ilha Formosa</i>, which means \"beautiful island\". The name \"Formosa\" eventually \"replaced all others in European literature\" and was in common use in English in the early 20th century.</p>\n<p>In the early 17th century, the Dutch East India Company established a commercial post at Fort Zeelandia (modern-day Anping, Tainan City) on a coastal sandbar they called \"Tayouan\". This name was also adopted into the Chinese vernacular (in particular, Hokkien, as Pe̍h-ōe-jī: <i><span lang=\"hak\">Tāi-ôan/Tâi-ôan</span></i>) as the name of the sandbar and nearby area (modern-day Tainan). The modern word \"Taiwan\" is derived from this usage, which has also been written as <span lang=\"zh-hant\">大員, 大圓, 大灣, 臺員, 臺圓</span> and <span lang=\"zh-hant\">臺窩灣</span> in various Chinese historical records. The area of modern-day Tainan was the first permanent settlement by Western colonists and Chinese immigrants, grew to be the most important trading center, and served as the capital of the island until 1887. Use of the current Chinese name <span lang=\"zh-hant\">臺灣</span> was formalized as early as 1684 with the establishment of Taiwan Prefecture. Through its rapid development, the entire Formosan mainland eventually became known as \"Taiwan\".</p>\n<p>The official name of the state is the \"<i>Republic of China</i>\"; it has also been known under various names throughout its existence. Shortly after the ROC's establishment in 1912, while it was still located on the Asian mainland, the government used the abbreviation \"<b>China</b>\" (<i><span lang=\"zh-latn-pinyin\">Zhōngguó</span></i>) to refer to itself. During the 1950s and 1960s, it was common to refer to it as \"Nationalist China\" (or \"Free China\") to differentiate it from \"Communist China\" (or \"Red China\"). It was a member of the UN representing \"<i>China</i>\" until 1971, when it lost its seat to the People's Republic of China. Over subsequent decades, the Republic of China has become commonly known as \"<b>Taiwan</b>\", after the island that composes most of its controlled territory. This is the main reason for the confusing and completely different names. In some contexts, especially official ones from the ROC government, the name is written as \"Republic of China (Taiwan)\", \"Republic of China/Taiwan\", or sometimes \"Taiwan (ROC).\" The Republic of China participates in most international forums and organizations under the name \"Chinese Taipei\" due to diplomatic pressure from the PRC. For instance, it is the name under which it has competed at the Olympic Games since 1984, and its name as an observer at the World Health Organization.</p>\n<h2><span id=\"History\">History</span></h2>\n\n<h3><span id=\"Prehistoric_Taiwan\">Prehistoric Taiwan</span></h3>\n\n\n<p>Taiwan was joined to the Asian mainland in the Late Pleistocene, until sea levels rose about 10,000 years ago. Fragmentary human remains have been found on the island, dated 20,000 to 30,000 years ago, as well as later artifacts of a Paleolithic culture.</p>\n<p>More than 8,000 years ago, Austronesians first settled on Taiwan. The languages of their descendants, who are known as the Taiwanese aborigines nowadays, belong to the Austronesian language family, which also includes the Malayo-Polynesian languages spanning a huge area, including the entire Maritime Southeast Asia (i.e., Tagalog of the Philippines, Malay and Indonesian of Malaysia and Indonesia, or the Javanese of Java), the Pacific and Indian Ocean: westernmost to the Malagasies of Madagascar and easternmost to the Rapa Nui people of Easter Island. The aboriginal languages on Taiwan show much greater diversity than the rest of Austronesian put together, leading linguists to propose Taiwan as the Urheimat of the family, from which seafaring peoples dispersed across Southeast Asia and the Pacific and Indian Oceans.</p>\n<p>Han Chinese began settling in the Penghu islands in the 13th century, but Taiwan's hostile tribes and its lack of trade resources valued in that era rendered it unattractive to all but \"occasional adventurers or fishermen engaging in barter\" until the 16th century.</p>\n<h3><span id=\"Opening_in_the_17th_century\">Opening in the 17th century</span></h3>\n\n\n<p>The Dutch East India Company attempted to establish a trading outpost on the Penghu Islands (Pescadores) in 1622, but were militarily defeated and driven off by the Ming authorities.</p>\n<p>In 1624, the company established a stronghold called Fort Zeelandia on the coastal islet of Tayouan, which is now part of the main island at Anping, Tainan. David Wright, a Scottish agent of the company who lived on the island in the 1650s, described the lowland areas of the island as being divided among 11 chiefdoms ranging in size from two settlements to 72. Some of these fell under Dutch control, while others remained independent. The Company began to import laborers from Fujian and Penghu (Pescadores), many of whom settled.</p>\n<p>In 1626, the Spanish landed on and occupied northern Taiwan, at the ports of Keelung and Tamsui, as a base to extend their trading. This colonial period lasted 16 years until 1642, when the last Spanish fortress fell to Dutch forces.</p>\n<p>Following the fall of the Ming dynasty, Koxinga (Zheng Chenggong), a self-styled Ming loyalist, arrived on the island and captured Fort Zeelandia in 1662, expelling the Dutch government and military from the island. Koxinga established the Kingdom of Tungning (1662–1683), with his capital at Tainan. He and his heirs, Zheng Jing, who ruled from 1662 to 1682, and Zheng Keshuang, who ruled less than a year, continued to launch raids on the southeast coast of mainland China well into the Qing dynasty.</p>\n<h3><span id=\"Qing_rule\">Qing rule</span></h3>\n\n\n<p>In 1683, following the defeat of Koxinga's grandson by an armada led by Admiral Shi Lang of southern Fujian, the Qing dynasty formally annexed Taiwan, placing it under the jurisdiction of Fujian province. The Qing imperial government tried to reduce piracy and vagrancy in the area, issuing a series of edicts to manage immigration and respect aboriginal land rights. Immigrants mostly from southern Fujian continued to enter Taiwan. The border between taxpaying lands and \"savage\" lands shifted eastward, with some aborigines becoming sinicized while others retreated into the mountains. During this time, there were a number of conflicts between groups of Chinese from different regions of southern Fujian, and between southern Fujian Chinese and aborigines.</p>\n<p>Northern Taiwan and the Penghu Islands were the scene of subsidiary campaigns in the Sino-French War (August 1884 to April 1885). The French occupied Keelung on 1 October 1884, but were repulsed from Tamsui a few days later. The French won some tactical victories but were unable to exploit them, and the Keelung Campaign ended in stalemate. The Pescadores Campaign, beginning on 31 March 1885, was a French victory, but had no long-term consequences. The French evacuated both Keelung and the Penghu archipelago after the end of the war.</p>\n<p>In 1887, the Qing upgraded the island's administration from Taiwan Prefecture of Fujian to Fujian-Taiwan-Province (福建臺灣省), the twentieth in the empire, with its capital at Taipei. This was accompanied by a modernization drive that included building China's first railroad.</p>\n<h3><span id=\"Japanese_rule\">Japanese rule</span></h3>\n\n\n<p>As the Qing dynasty was defeated in the First Sino-Japanese War (1894–1895), Taiwan, along with Penghu and Liaodong Peninsula, were ceded in full sovereignty to the Empire of Japan by the Treaty of Shimonoseki. Inhabitants on Taiwan and Penghu wishing to remain Qing subjects were given a two-year grace period to sell their property and move to mainland China. Very few Taiwanese saw this as feasible. On 25 May 1895, a group of pro-Qing high officials proclaimed the Republic of Formosa to resist impending Japanese rule. Japanese forces entered the capital at Tainan and quelled this resistance on 21 October 1895. Guerrilla fighting continued periodically until about 1902 and ultimately took the lives of 14,000 Taiwanese, or 0.5% of the population. Several subsequent rebellions against the Japanese (the Beipu Uprising of 1907, the Tapani Incident of 1915, and the Wushe Incident of 1930) were all unsuccessful but demonstrated opposition to Japanese colonial rule.</p>\n\n<p>Japanese colonial rule was instrumental in the industrialization of the island, extending the railroads and other transportation networks, building an extensive sanitation system, and establishing a formal education system. Japanese rule ended the practice of headhunting. During this period the human and natural resources of Taiwan were used to aid the development of Japan and the production of cash crops such as rice and sugar greatly increased. By 1939, Taiwan was the seventh greatest sugar producer in the world. Still, the Taiwanese and aborigines were classified as second- and third-class citizens. After suppressing Chinese guerrillas in the first decade of their rule, Japanese authorities engaged in a series of bloody campaigns against the mountain aboriginals, culminating in the Wushe Incident of 1930.</p>\n<p>Around 1935, the Japanese began an island-wide assimilation project to bind the island more firmly to the Japanese Empire and people were taught to see themselves as Japanese under the Kominka Movement, during which time Taiwanese culture and religion were outlawed and the citizens were encouraged to adopt Japanese surnames. During World War II, tens of thousands of Taiwanese served in the Japanese military. For example, former ROC President Lee Teng-hui's elder brother served in the Japanese navy and died while on duty in the Philippines in February 1945. The Imperial Japanese Navy operated heavily out of Taiwanese ports. The \"South Strike Group\" was based at the Taihoku Imperial University in Taipei. Many of the Japanese forces participating in the Aerial Battle of Taiwan-Okinawa were based in Taiwan. Important Japanese military bases and industrial centers throughout Taiwan, like Kaohsiung, were targets of heavy American bombing. Also during this time, over 2,000 women were forced into sexual slavery for Imperial Japanese troops, now euphemistically called \"comfort women.\"</p>\n<p>In 1938, there were 309,000 Japanese settlers in Taiwan. After World War II, most of the Japanese were repatriated to Japan.</p>\n<h3><span id=\"After_World_War_II\">After World War II</span></h3>\n\n\n<p>On 25 October 1945, the U.S. Navy ferried ROC troops to Taiwan in order to accept the formal surrender of Japanese military forces in Taipei (then part of Taihoku Prefecture), as part of General Order No. 1 for temporary military occupation. General Rikichi Andō, governor-general of Taiwan and commander-in-chief of all Japanese forces on the island, signed the instrument of surrender and handed it over to General Chen Yi of the ROC military to complete the official turnover. Chen Yi proclaimed that day to be \"Taiwan Retrocession Day\", but the Allies considered Taiwan and the Penghu Islands to be under military occupation and still under Japanese sovereignty until 1952, when the Treaty of San Francisco took effect.</p>\n<p>The ROC administration of Taiwan under Chen Yi was strained by increasing tensions between Taiwan-born people and newly arrived mainlanders, which were compounded by economic woes, such as hyperinflation. Furthermore, cultural and linguistic conflicts between the two groups quickly led to the loss of popular support for the new government. The shooting of a civilian on 28 February 1947 triggered island-wide unrest, which was suppressed with military force in what is now called the February 28 Incident. Mainstream estimates of the number killed range from 18,000 to 30,000. Those killed were mainly members of the Taiwanese elite.</p>\n<h3><span id=\"Chinese_Nationalist_one-party_rule\">Chinese Nationalist one-party rule</span></h3>\n\n\n\n<p>After the end of World War II, the Chinese Civil War resumed between the Chinese Nationalists (Kuomintang), led by Chiang Kai-shek, and the Chinese Communist Party, led by Mao Zedong. By 1949, a series of Chinese Communist offensives led to the defeat of the Nationalist army, and the Communists founded the People's Republic of China on 1 October.</p>\n<p>In December 1949, Chiang evacuated his government to Taiwan and made Taipei the temporary capital of the ROC (also called the \"wartime capital\" by Chiang Kai-shek). Some 2 million people, consisting mainly of soldiers, members of the ruling Kuomintang and intellectual and business elites, were evacuated from mainland China to Taiwan at that time, adding to the earlier population of approximately six million. In addition, the ROC government took to Taipei many national treasures and much of China's gold reserves and foreign currency reserves.</p>\n<p>From this point onwards, the Kuomintang was reduced to control of Taiwan, Kinmen, Matsu Islands, and two major islands of Dongsha Islands and Nansha Islands. The Kuomintang continued to claim sovereignty over all \"China\", which it defined to include mainland China, Taiwan, Outer Mongolia and other areas. On mainland China, the victorious Communists claimed they ruled the sole and only China (which they claimed included Taiwan) and that the Republic of China no longer existed.</p>\n<p>Martial law, declared on Taiwan in May 1949, continued to be in effect after the central government relocated to Taiwan. It was not repealed until 1987, and was used as a way to suppress the political opposition in the intervening years. During the White Terror, as the period is known, 140,000 people were imprisoned or executed for being perceived as anti-KMT or pro-Communist. Many citizens were arrested, tortured, imprisoned and executed for their real or perceived link to the Communists. Since these people were mainly from the intellectual and social elite, an entire generation of political and social leaders was decimated. In 1998 law was passed to create the \"Compensation Foundation for Improper Verdicts\" which oversaw compensation to White Terror victims and families. President Ma Ying-jeou made an official apology in 2008, expressing hope that there will never be a tragedy similar to White Terror.</p>\n<p>Initially, the United States abandoned the KMT and expected that Taiwan would fall to the Communists. However, in 1950 the conflict between North Korea and South Korea, which had been ongoing since the Japanese withdrawal in 1945, escalated into full-blown war, and in the context of the Cold War, US President Harry S. Truman intervened again and dispatched the U.S. Navy's 7th Fleet into the Taiwan Strait to prevent hostilities between Taiwan and mainland China. In the Treaty of San Francisco and the Treaty of Taipei, which came into force respectively on 28 April 1952 and 5 August 1952, Japan formally renounced all right, claim and title to Taiwan and Penghu, and renounced all treaties signed with China before 1942. Neither treaty specified to whom sovereignty over the islands should be transferred, because the United States and the United Kingdom disagreed on whether the ROC or the PRC was the legitimate government of China. Continuing conflict of the Chinese Civil War through the 1950s, and intervention by the United States notably resulted in legislation such as the Sino-American Mutual Defense Treaty and the Formosa Resolution of 1955.</p>\n\n<p>As the Chinese Civil War continued without truce, the government built up military fortifications throughout Taiwan. Within this effort, KMT veterans built the now famous Central Cross-Island Highway through the Taroko Gorge in the 1950s. The two sides would continue to engage in sporadic military clashes with seldom publicized details well into the 1960s on the China coastal islands with an unknown number of night raids. During the Second Taiwan Strait Crisis in September 1958, Taiwan's landscape saw Nike-Hercules missile batteries added, with the formation of the 1st Missile Battalion Chinese Army that would not be deactivated until 1997. Newer generations of missile batteries have since replaced the Nike Hercules systems throughout the island.</p>\n<p>During the 1960s and 1970s, the ROC maintained an authoritarian, single-party government while its economy became industrialized and technology oriented. This rapid economic growth, known as the Taiwan Miracle, was the result of a fiscal regime independent from mainland China and backed up, among others, by the support of US funds and demand for Taiwanese products. In the 1970s, Taiwan was economically the second fastest growing state in Asia after Japan. Taiwan, along with Hong Kong, South Korea and Singapore, became known as one of the Four Asian Tigers. Because of the Cold War, most Western nations and the United Nations regarded the ROC as the sole legitimate government of China until the 1970s. Later, especially after the termination of the Sino-American Mutual Defense Treaty, most nations switched diplomatic recognition to the PRC (see United Nations General Assembly Resolution 2758).</p>\n<p>Up until the 1970s, the government was regarded by Western critics as undemocratic for upholding martial law, for severely repressing any political opposition and for controlling media. The KMT did not allow the creation of new parties and those that existed did not seriously compete with the KMT. Thus, competitive democratic elections did not exist. From the late 1970s to the 1990s, however, Taiwan went through reforms and social changes that transformed it from an authoritarian state to a democracy. In 1979, a pro-democracy protest known as the Kaohsiung Incident took place in Kaohsiung to celebrate Human Rights Day. Although the protest was rapidly crushed by the authorities, it is today considered as the main event that united Taiwan's opposition.</p>\n<h3><span id=\"Democratization\">Democratization</span></h3>\n\n\n<p>Chiang Ching-kuo, Chiang Kai-shek's son and successor as the president, began to liberalize the political system in the mid-1980s. In 1984, the younger Chiang selected Lee Teng-hui, a Taiwanese-born, U.S.-educated technocrat, to be his vice president. In 1986, the Democratic Progressive Party (DPP) was formed and inaugurated as the first opposition party in the ROC to counter the KMT. A year later, Chiang Ching-kuo lifted martial law on the main island of Taiwan (martial law was lifted on Penghu in 1979, Matsu island in 1992 and Kinmen island in 1993). With the advent of democratization, the issue of the political status of Taiwan gradually resurfaced as a controversial issue where, previously, the discussion of anything other than unification under the ROC was taboo.</p>\n<p>After the death of Chiang Ching-kuo in January 1988, Lee Teng-hui succeeded him as president. Lee continued to democratize the government and decrease the concentration of government authority in the hands of mainland Chinese. Under Lee, Taiwan underwent a process of localization in which Taiwanese culture and history were promoted over a pan-China viewpoint in contrast to earlier KMT policies which had promoted a Chinese identity. Lee's reforms included printing banknotes from the Central Bank rather than the Provincial Bank of Taiwan, and streamlining the Taiwan Provincial Government with most of its functions transferred to the Executive Yuan. Under Lee, the original members of the Legislative Yuan and National Assembly, elected in 1947 to represent mainland Chinese constituencies and having held the seats without re-election for more than four decades, were forced to resign in 1991. The previously nominal representation in the Legislative Yuan was brought to an end, reflecting the reality that the ROC had no jurisdiction over mainland China, and vice versa. Restrictions on the use of Taiwanese Hokkien in the broadcast media and in schools were also lifted.</p>\n<p>Democratic reforms continued in the 1990s, with Lee Teng-hui re-elected in 1996, in the first direct presidential election in the history of the ROC. During the later years of Lee's administration, he was involved in corruption controversies relating to government release of land and weapons purchase, although no legal proceedings commenced. In 2000, Chen Shui-bian of the Democratic Progressive Party was elected as the first non-Kuomintang (KMT) President and was re-elected to serve his second and last term since 2004. Polarized politics has emerged in Taiwan with the formation of the Pan-Blue Coalition of parties led by the KMT, favoring eventual Chinese reunification, and the Pan-Green Coalition of parties led by the DPP, favoring an eventual and official declaration of Taiwanese independence.</p>\n<p>On 30 September 2007, the ruling DPP approved a resolution asserting a separate identity from China and called for the enactment of a new constitution for a \"normal country\". It also called for general use of \"Taiwan\" as the country's name, without abolishing its formal name, the Republic of China. The Chen administration also pushed for referendums on national defense and UN entry in the 2004 and 2008 elections, which failed due to voter turnout below the required legal threshold of 50% of all registered voters. The Chen administration was dogged by public concerns over reduced economic growth, legislative gridlock due to a pan-blue, opposition-controlled Legislative Yuan and corruption involving the First Family as well as government officials.</p>\n<p>The KMT increased its majority in the Legislative Yuan in the January 2008 legislative elections, while its nominee Ma Ying-jeou went on to win the presidency in March of the same year, campaigning on a platform of increased economic growth and better ties with the PRC under a policy of \"mutual nondenial\". Ma took office on 20 May 2008, the same day that President Chen Shui-bian stepped down and was notified by prosecutors of possible corruption charges. Part of the rationale for campaigning for closer economic ties with the PRC stems from the strong economic growth China attained since joining the World Trade Organization. However, some analysts say that despite the election of Ma Ying-jeou, the diplomatic and military tensions with the PRC have not been reduced.</p>\n<h2><span id=\"Geography\">Geography</span></h2>\n\n\n\n<p>The total area of the current jurisdiction of the Republic of China is 36,193 km<sup>2</sup> (13,974 sq mi), making it the world's 137th-largest country/dependency, smaller than Switzerland and larger than Belgium.</p>\n<p>The island of Taiwan lies some 180 kilometres (110 mi) off the southeastern coast of mainland China, which lies across the Taiwan Strait, and has an area of 35,883 km<sup>2</sup> (13,855 sq mi). The East China Sea lies to the north, the Philippine Sea to the east, the Bashi Channel of the Luzon Strait directly to the south, and the South China Sea to the southwest. All are arms of the Pacific Ocean. The shape of the main island of Taiwan is similar to a sweet potato seen in a south-to-north direction, and therefore, Taiwanese (especially Min Nan speakers) often call themselves \"children of the Sweet Potato.\"</p>\n<p>The island is characterized by the contrast between the eastern two-thirds, consisting mostly of rugged mountains running in five ranges from the northern to the southern tip of the island, and the flat to gently rolling Chianan Plains in the west that are also home to most of Taiwan's population. Taiwan's highest point is Yu Shan (Jade Mountain) at 3,952 metres (12,966 ft); Taiwan is the world's fourth-highest island.</p>\n<p>The Penghu Islands, 50 km (31.1 mi) west of the main island, have an area of 126.9 km<sup>2</sup> (49.0 sq mi). More distant islands controlled by the Republic of China are the Kinmen, Wuchiu and Matsu Islands off the coast of Fujian, with a total area of 180.5 km<sup>2</sup> (69.7 sq mi), and the Pratas Islands and Taiping Island in the South China Sea, with a total area of 2.9 km<sup>2</sup> (1.1 sq mi) and no permanent inhabitants.</p>\n<h2><span id=\"Climate\">Climate</span></h2>\n<p>Taiwan lies on the Tropic of Cancer, and its general climate is marine tropical. The northern and central regions are subtropical, whereas the south is tropical and the mountainous regions are temperate. The average rainfall is 2,600 mm per year for the island proper; the rainy season is concurrent with the onset of the summer East Asian Monsoon in May and June. The entire island experiences hot, humid weather from June through September. Typhoons are most common in July, August and September. During the winter (November to March), the northeast experiences steady rain, while the central and southern parts of the island are mostly sunny.</p>\n<h2><span id=\"Geology\">Geology</span></h2>\n\n\n<p>The island of Taiwan lies in a complex tectonic area between the Yangtze Plate to the west and north, the Okinawa Plate on the north-east, and the Philippine Mobile Belt on the east and south. The upper part of the crust on the island is primarily made up of a series of terranes, mostly old island arcs which have been forced together by the collision of the forerunners of the Eurasian Plate and the Philippine Sea Plate. These have been further uplifted as a result of the detachment of a portion of the Eurasian Plate as it was subducted beneath remnants of the Philippine Sea Plate, a process which left the crust under Taiwan more buoyant.</p>\n<p>The east and south of Taiwan are a complex system of belts formed by, and part of the zone of, active collision between the North Luzon Trough portion of the Luzon Volcanic Arc and South China, where accreted portions of the Luzon Arc and Luzon forearc form the eastern Coastal Range and parallel inland Longitudinal Valley of Taiwan respectively.</p>\n<p>The major seismic faults in Taiwan correspond to the various suture zones between the various terranes. These have produced major quakes throughout the history of the island. On 21 September 1999, a 7.3 quake known as the \"921 earthquake\" killed more than 2,400 people. The seismic hazard map for Taiwan by the USGS shows 9/10 of the island as the highest rating (most hazardous).</p>\n<h2><span id=\"Political_and_legal_status\">Political and legal status</span></h2>\n\n<p>The political and legal statuses of Taiwan are contentious issues. The People's Republic of China (PRC) claims that the Republic of China government is illegitimate, referring to it as the \"Taiwan Authority\". The ROC, however, with its own constitution, independently elected president and armed forces, continues to view itself as a sovereign state. The present territory of the state has never been controlled by the PRC. Internationally, there is controversy on whether the ROC still exists as a state or a defunct state per international law due to the loss of membership/recognition in the United Nations and lack of wide diplomatic recognition. In a poll of Taiwanese aged 20 and older taken by the TVBS in March 2009, a majority of 64% opted for the status quo, while 19% favored independence and 5% \"unification\".</p>\n<h3><span id=\"Relations_with_the_PRC\">Relations with the PRC</span></h3>\n\n<p>The political environment is complicated by the potential for military conflict should Taiwan make overt actions toward de jure independence; it is the official PRC policy to use force to ensure reunification if peaceful reunification is no longer possible, as stated in its anti-secession law, and for this reason there are substantial military installations on the Fujian coast. However, in recent years, the PRC has moved towards promoting peaceful relations, including stronger economic ties, with the current ROC government aimed at unification through the one country, two systems formula.</p>\n<p>The PRC supports a version of the One-China policy, which states that Taiwan and mainland China are both part of China, and that the PRC is the only legitimate government of China. It uses this policy to prevent the international recognition of the ROC as an independent sovereign state. For its part, the People's Republic of China appears to find the retention of the name \"Republic of China\" more acceptable than an official declaration of an independent Taiwan. With the rise of the Taiwanese independence movement, the name \"Taiwan\" has been employed increasingly often on the island.</p>\n<h3><span id=\"Foreign_relations\">Foreign relations</span></h3>\n\n\n\n<p>Before 1928, the foreign policy of Republican China was complicated by a lack of internal unity—competing centers of power all claimed legitimacy. This situation changed after the defeat of the Peiyang Government by the Kuomintang, which led to widespread diplomatic recognition of the Republic of China.</p>\n<p>After the KMT's retreat to Taiwan, most countries, notably the countries in the Western Bloc, continued to maintain relations with the ROC. Due to diplomatic pressure, recognition gradually eroded and many countries switched recognition to the PRC in the 1970s. UN Resolution 2758 (25 October 1971) recognized the People's Republic of China as China's sole representative in the United Nations.</p>\n<p>The PRC refuses to have diplomatic relations with any nation that recognizes the ROC, and requires all nations with which it has diplomatic relations to make a statement recognizing its claims to Taiwan. As a result, only 21 UN member states and the Holy See maintain official diplomatic relations with the Republic of China. The ROC maintains unofficial relations with most countries via <i>de facto</i> embassies and consulates called Taipei Economic and Cultural Representative Offices (TECRO), with branch offices called \"Taipei Economic and Cultural Offices\" (TECO). Both TECRO and TECO are \"unofficial commercial entities\" of the ROC in charge of maintaining diplomatic relations, providing consular services (i.e. visa applications), and serving the national interests of the ROC in other countries.</p>\n<p>The United States remains one of the main allies of the country and, through the Taiwan Relations Act passed in 1979, has continued selling arms and provide military training to the Armed Forces. This situation continues to be an issue for the People's Republic of China which considers US involvement disruptive to the stability of the region. In January 2010, the Obama administration announced its intention to sell $6.4 billion worth of military hardware to Taiwan. As a consequence, the PRC threatened the US with economic sanctions and warned that their cooperation on international and regional issues could suffer.</p>\n<p>The official position of the United States is that the PRC is expected to \"use no force or threat[en] to use force against Taiwan\" and the ROC is to \"exercise prudence in managing all aspects of Cross-Strait relations.\" Both are to refrain from performing actions or espousing statements \"that would unilaterally alter Taiwan's status.\"</p>\n<h3><span id=\"Participation_in_international_events_and_organizations\">Participation in international events and organizations</span></h3>\n\n<p>The ROC was a founding member of the United Nations, and held the seat of China on the Security Council and other UN bodies until 1971, when it was expelled by Resolution 2758 and replaced in all UN organs with the PRC. Each year since 1992, the ROC has petitioned the UN for entry, but its applications have not made it past committee.</p>\n\n<p>Due to its limited international recognition, the Republic of China is a member of the Unrepresented Nations and Peoples Organization, represented by a government-funded organization, the Taiwan Foundation for Democracy (TFD) under the name \"Taiwan\".</p>\n<p>Also due to its One China policy, the PRC only participates in international organizations where the ROC is not recognized as a sovereign country. Most member states, including the United States, do not wish to discuss the issue of the ROC's political status for fear of souring diplomatic ties with the PRC. However, both the U.S. and Japan publicly support the ROC's bid for membership in the World Health Organization as an observer. However, though the ROC has sought to participate in the WHO since 1997, their efforts have consistently been blocked by the PRC, until 2010, when they were invited as observers to attend the World Health Assembly, under the name \"Chinese Taipei\".</p>\n<p>Due to PRC pressure, the ROC is forced to use the name \"Chinese Taipei\" in international events, such as the Olympic Games, where the PRC is also a party. The ROC is typically barred from using its national anthem and national flag in international events due to PRC pressure; ROC spectators attending events such as the Olympics are often barred from bringing ROC flags into venues. The ROC is able to participate as \"China\" in organizations that the PRC does not participate in, such as the World Organization of the Scout Movement.</p>\n<h3><span id=\"Opinions_within_Taiwan\">Opinions within Taiwan</span></h3>\n\n<p>Within Taiwan, opinions are polarized between those supporting unification, represented by the Pan-Blue Coalition of parties, and those supporting independence, represented by the Pan-Green Coalition.</p>\n<p>The KMT, the largest Pan-Blue party, supports the status quo for the indefinite future with a stated ultimate goal of unification. However, it does not support unification in the short term with the PRC as such a prospect would be unacceptable to most of its members and the public. Ma Ying-jeou, chairman of the KMT and the incumbent president of the ROC, has set out democracy, economic development to a level near that of Taiwan, and equitable wealth distribution as the conditions that the PRC must fulfill for reunification to occur.</p>\n<p>The Democratic Progressive Party, the largest Pan-Green party, officially seeks independence, but in practice also supports the status quo because its members and the public would not accept the risk of provoking the PRC.</p>\n<p>On 2 September 2008, Mexican newspaper <i>El Sol de México</i> asked President Ma about his views on the subject of \"two Chinas\" and if there was a solution for the sovereignty issues between the two. The president replied that the relations are neither between two Chinas nor two states. It is a special relationship. Further, he stated that the sovereignty issues between the two cannot be resolved at present, but he quoted the \"1992 Consensus\", currently accepted by both the Kuomintang and the Communist Party of China, as a temporary measure until a solution becomes available.</p>\n<p>The relationship with the PRC and the related issues of Taiwanese independence and Chinese reunification continue to dominate politics.</p>\n<h2><span id=\"Government\">Government</span></h2>\n\n\n<p>The government of the Republic of China was founded on the Constitution of the ROC and its Three Principles of the People, which states that the ROC \"shall be a democratic republic of the people, to be governed by the people and for the people.\" The government is divided into five administrative branches (<i>Yuan</i>): the Executive Yuan (cabinet), the Legislative Yuan, the Judicial Yuan, the Control Yuan (audit agency), and the Examination Yuan (civil service examination agency). The Pan-Blue and Pan-Green coalitions are presently the dominant political blocs in the Republic of China.</p>\n<p>The head of state and commander-in-chief of the armed forces is the president, who is elected by popular vote for a maximum of 2 four-year terms on the same ticket as the vice-president. The president has authority over the Yuan. The president appoints the members of the Executive Yuan as his cabinet, including a premier, who is officially the President of the Executive Yuan; members are responsible for policy and administration.</p>\n<p>The main legislative body is the unicameral Legislative Yuan with 113 seats. Seventy-three are elected by popular vote from single-member constituencies; thirty-four are elected based on the proportion of nationwide votes received by participating political parties in a separate party list ballot; and six are elected from two three-member aboriginal constituencies. Members serve four-year terms. Originally the unicameral National Assembly, as a standing constitutional convention and electoral college, held some parliamentary functions, but the National Assembly was abolished in 2005 with the power of constitutional amendments handed over to the Legislative Yuan and all eligible voters of the Republic via referendums.</p>\n\n<p>The premier is selected by the president without the need for approval from the legislature, but the legislature can pass laws without regard for the president, as neither he nor the Premier wields veto power. Thus, there is little incentive for the president and the legislature to negotiate on legislation if they are of opposing parties. After the election of the pan-Green's Chen Shui-bian as President in 2000, legislation repeatedly stalled because of deadlock with the Legislative Yuan, which was controlled by a pan-Blue majority. Historically, the ROC has been dominated by strongman single party politics. This legacy has resulted in executive powers currently being concentrated in the office of the president rather than the premier, even though the constitution does not explicitly state the extent of the president's executive power.</p>\n<p>The Judicial Yuan is the highest judicial organ. It interprets the constitution and other laws and decrees, judges administrative suits, and disciplines public functionaries. The president and vice-president of the Judicial Yuan and additional thirteen justices form the Council of Grand Justices. They are nominated and appointed by the president, with the consent of the Legislative Yuan. The highest court, the Supreme Court, consists of a number of civil and criminal divisions, each of which is formed by a presiding judge and four associate judges, all appointed for life. In 1993, a separate constitutional court was established to resolve constitutional disputes, regulate the activities of political parties and accelerate the democratization process. There is no trial by jury but the right to a fair public trial is protected by law and respected in practice; many cases are presided over by multiple judges.</p>\n<p>Capital punishment is still used in Taiwan, although efforts have been made by the government to reduce the number of executions. Nevertheless, according to a survey in 2006, about 80% of Taiwanese still wanted to keep the death penalty.</p>\n<p>The Control Yuan is a watchdog agency that monitors (controls) the actions of the executive. It can be considered a standing commission for administrative inquiry and can be compared to the Court of Auditors of the European Union or the Government Accountability Office of the United States.</p>\n<p>The Examination Yuan is in charge of validating the qualification of civil servants. It is based on the old imperial examination system used in dynastic China. It can be compared to the European Personnel Selection Office of the European Union or the Office of Personnel Management of the United States.</p>\n<h2><span id=\"Politics\">Politics</span></h2>\n\n\n\n<p>The constitution of the Republic of China was drafted before the fall of mainland China to the Communist Party of China. It was created by the KMT for the purpose of all of its claimed territory, including Taiwan, even though the Communist Party boycotted the drafting of the constitution. The constitution went into effect on 25 December 1947.</p>\n<p>The ROC remained under martial law from 1948 until 1987 and much of the constitution was not in effect. Political reforms beginning in the late 1970s and continuing through the early 1990s liberalized the country and transformed into a multiparty democracy. Since the lifting of martial law, the Republic of China has democratized and reformed, suspending constitutional components that were originally meant for the whole of China. This process of amendment continues. In 2000, the Democratic Progressive Party (DPP) won the presidency, ending KMT's continuous control of the government. In May 2005, a new National Assembly was elected to reduce the number of parliamentary seats and implement several constitutional reforms. These reforms have been passed; the National Assembly has essentially voted to abolish itself and transfer the power of constitutional reform to the popular ballot.</p>\n<h3><span id=\"Major_camps\">Major camps</span></h3>\n\n<p>The tension between China and Taiwan colors most of the political life, and any government move towards \"Taiwan independence\" is met by threat of military attack from the PRC. The PRC's official policy is to reunify Taiwan and mainland China under the formula of \"one country, two systems\" and refuses to renounce the use of military force, especially should Taiwan seek a declaration of independence.</p>\n<p>The political scene is generally divided into two major camps in terms of views on how Taiwan should relate to China or the PRC, referred to as cross-Strait relations. It is the main political difference between two camps: the Pan-Blue Coalition, composed of the pro-unification Kuomintang, People First Party (PFP), and New Party, who believe that the ROC is the sole legitimate government of \"China\" (including Taiwan) and supports eventual Chinese reunification. The opposition Pan-Green Coalition is composed of the pro-independence DPP and Taiwan Solidarity Union (TSU). It regards Taiwan as an independent, sovereign state synonymous with the ROC, opposes the definition that Taiwan is part of \"China\", and seeks wide diplomatic recognition and an eventual declaration of formal Taiwan independence. The Pan-Green camp tends to favor emphasizing the Republic of China as being a distinct country from the People's Republic of China. Thus, in September 2007, the then ruling Democratic Progressive Party approved a resolution asserting separate identity from China and called for the enactment of a new constitution for a \"<i>normal country</i>\". It called also for general use of \"<i>Taiwan</i>\" as the country's name, without abolishing its formal name, the \"Republic of China\". Some members of the coalition, such as former President Chen Shui-bian, argue that it is unnecessary to proclaim independence because \"Taiwan is already an independent, sovereign country\" and the Republic of China is the same as Taiwan. Despite being a member of KMT prior to and during his presidency, Lee Teng-hui also held a similar view and was a supporter of the Taiwanization movement.</p>\n<p>Pan-Blue members generally support the concept of the One-China policy, which states that there is only one China and that its only government is the ROC. They favor eventual re-unification of China. The more mainstream Pan-Blue position is to lift investment restrictions and pursue negotiations with the PRC to immediately open direct transportation links. Regarding independence, the mainstream Pan-Blue position is to maintain the status quo, while refusing immediate reunification. President Ma Ying-jeou stated that there will be no unification nor declaration of independence during his presidency. As of 2009, Pan-Blue members usually seek to improve relationships with mainland China, with a current focus on improving economic ties.</p>\n<h3><span id=\"Current_political_issues\">Current political issues</span></h3>\n<p>The dominant political issue in Taiwan is its relationship with the PRC. For almost 60 years, there were no direct transportation links, including direct flights, between Taiwan and mainland China. This was a problem for many Taiwanese businesses that had opened factories or branches in mainland China. The former DPP administration feared that such links would lead to tighter economic and political integration with mainland China, and in the 2006 Lunar New Year Speech, President Chen Shui-bian called for managed opening of links. Direct weekend charter flights between Taiwan and mainland China began in July 2008 under the current KMT government, and the first direct daily charter flights took off in December 2008.</p>\n<p>Other major political issues include the passage of an arms procurement bill that the United States authorized in 2001. In 2008, however, the United States was reluctant to send over more arms to Taiwan out of fear that it would hinder the recent improvement of ties between the PRC and the ROC. Another major political issue is the establishment of a National Communications Commission to take over from the Government Information Office, whose advertising budget exercised great control over the media.</p>\n<p>The politicians and their parties have themselves become major political issues. Corruption among some DPP administration officials has been exposed. In early 2006, President Chen Shui-bian was linked to possible corruption. The political effect on President Chen Shui-bian was great, causing a divide in the DPP leadership and supporters alike. It eventually led to the creation of a political camp led by ex-DPP leader Shih Ming-teh which believes the president should resign. The KMT assets continue to be another major issue, as it was once the richest political party in the world. Nearing the end of 2006, KMT's chairman Ma Ying-jeou was also hit by corruption controversies, although he has since then been cleared of any wrongdoings by the courts. After completing his second term as President, Chen Shui-bian was charged with corruption and money laundering. Following his conviction, he is serving a 17-year sentence in Taipei Prison.</p>\n<h3><span id=\"National_identity\">National identity</span></h3>\n\n<p>Roughly 84% of Taiwan's population descends from Han Chinese who migrated from China between 1661 and 1895. Another significant fraction descends from Han Chinese who immigrated from China in the 1940s and 1950s. The shared cultural origin combined with several hundred years of geographical separation, some hundred years of political separation and foreign influences, as well as hostility between the rival ROC and PRC have resulted in national identity being a contentious issue with political overtones. Since democratization and the lifting of martial law, a distinct Taiwanese identity (as opposed to Taiwanese identity as a subset of a Chinese identity) is often at the heart of political debates. Its acceptance makes the island distinct from mainland China, and therefore may be seen as a step towards forming a consensus for <i>de jure</i> Taiwan independence. The pan-green camp supports a distinct Taiwanese identity, while the pan-blue camp supports a Chinese identity only. The KMT has downplayed this stance in the recent years and now supports a Taiwanese identity as part of a Chinese identity.</p>\n<p>According to a survey conducted in March 2009, 49% of the respondents consider themselves as Taiwanese only, and 44% of the respondents consider themselves as Taiwanese and Chinese. 3% consider themselves as only Chinese. Another survey, conducted in Taiwan in July 2009, showed that 82.8% of respondents consider the ROC and the PRC as two separate countries with each developing on its own. A survey conducted in December 2009 showed that 62% of the respondents consider themselves as Taiwanese only, and 22% of the respondents consider themselves as both Taiwanese and Chinese. 8% consider themselves as only Chinese. The survey also shows that among 18- to 29-year-old respondents, 75% consider themselves as Taiwanese only.</p>\n<p>In the latest survey conducted by National Chengchi University in 2014 and published in early 2015, 60.6% of respondents identified themselves exclusively as Taiwanese, 32.5% identified themselves as both Taiwanese and Chinese and 3.5% identified themselves as Chinese.</p>\n<h2><span id=\"Military\">Military</span></h2>\n\n\n\n\n\n<p>The Republic of China Army takes its roots in the National Revolutionary Army, which was established by Sun Yat-sen in 1925 in Guangdong with a goal of reunifying China under the Kuomintang. When the People's Liberation Army won the Chinese Civil War, much of the National Revolutionary Army retreated to Taiwan along with the government. It was later reformed into the Republic of China Army. Units which surrendered and remained in mainland China were either disbanded or incorporated into the People's Liberation Army.</p>\n<p>Today, the Republic of China maintains a large and technologically advanced military, mainly as defense against the constant threat of invasion by the PRC under the Anti-Secession Law of the People's Republic of China. From 1949 to the 1970s, the primary mission of the military was to \"retake the mainland\" through Project National Glory. As this mission has shifted to defense, the ROC military has begun to shift emphasis from the traditionally dominant Army to the air force and navy.</p>\n<p>Control of the armed forces has also passed into the hands of the civilian government. As the ROC military shares historical roots with the KMT, the older generation of high-ranking officers tends to have Pan-Blue sympathies. However, many have retired and there are many more non-mainlanders enlisting in the armed forces in the younger generations, so the political leanings of the military have moved closer to the public norm in Taiwan.</p>\n<p>The ROC began a force reduction program, Jingshi An (translated to streamlining program), to scale down its military from a level of 450,000 in 1997 to 380,000 in 2001. As of 2009, the armed forces of the ROC number approximately 300,000, with nominal reserves totaling 3.6 million as of 2005. Conscription remains universal for qualified males reaching age eighteen, but as a part of the reduction effort many are given the opportunity to fulfill their draft requirement through alternative service and are redirected to government agencies or defense related industries. Current plans call for a transition to a predominantly professional army over the next decade. Conscription periods are planned to decrease from 14 months to 12. In the last months of the Bush administration, Taipei took the decision to reverse the trend of declining defense spending, at a time when most Asian countries kept on reducing their military expenditures. It also decided to modernize both defensive and offensive capabilities. Taipei still keeps a large military apparatus relative to the island’s population: defense expenditures for 2008 were NTD 334 billion (approximately U.S. $10.5 billion), which accounted for 2.94% of GDP.</p>\n\n\n<p>The armed forces' primary concern at this time, according to the <i>National Defense Report</i>, is the possibility of an invasion by the PRC, consisting of a naval blockade, airborne assault, and/or missile bombardment. Four upgraded <i>Kidd</i>-class destroyers were purchased from the United States, and commissioned into the Republic of China Navy in 2005–2006, significantly upgrading Taiwan's air defense and submarine hunting abilities. The Ministry of National Defense planned to purchase diesel-powered submarines and Patriot anti-missile batteries from the United States, but its budget has been stalled repeatedly by the opposition-Pan-Blue Coalition controlled legislature. The defense package was stalled from 2001 to 2007 where it was finally passed through the legislature and the US responded on 3 October 2008, with a $6.5 billion arms package including PAC III Anti-Air defense systems, AH-64D Apache Attack helicopters and other arms and parts. A significant amount of military hardware has been bought from the United States, and, as of 2009, continues to be legally guaranteed by the Taiwan Relations Act. In the past, France and the Netherlands have also sold military weapons and hardware to the ROC, but they almost entirely stopped in the 1990s under pressure of the PRC.</p>\n<p>The first line of defense against invasion by the PRC is the ROC's own armed forces. Current ROC military doctrine is to hold out against an invasion or blockade until the US military responds. There is, however, no guarantee in the Taiwan Relations Act or any other treaty that the United States will defend Taiwan, even in the event of invasion. The joint declaration on security between the US and Japan signed in 1996 may imply that Japan would be involved in any response. However, Japan has refused to stipulate whether the \"area surrounding Japan\" mentioned in the pact includes Taiwan, and the precise purpose of the pact is unclear. The Australia, New Zealand, United States Security Treaty (ANZUS Treaty) may mean that other US allies, such as Australia, could theoretically be involved. In practice, the risk of losing economic ties with China may prevent Australia from taking action. The United States, United Kingdom, Japan, South Korea, Australia, Canada, Chile, and Peru conduct maritime exercises in the Pacific Ocean every 2 years called RIMPAC. They are conducted to promote stability and to be able to respond in case of an armed conflict in the region – that includes an invasion of Taiwan by China.</p>\n<h2><span id=\"Administrative_divisions\">Administrative divisions</span></h2>\n\n\n\n<p>According to the 1947 constitution, written and promulgated whilst the ROC government still controlled mainland China, the territory of the ROC consisted of provinces, special municipalities, special administrative regions and autonomous regions (Mongolia and Tibet), which were given extremely high levels of autonomy.</p>\n<p>Accordingly, when the ROC retreated to Taiwan in 1949, its claimed territory consisted of 35 provinces, 12 special municipalities, 1 special administrative region and 2 autonomous regions. However, since its retreat, the ROC has controlled only Taiwan Province and some islands of Fujian Province. The ROC also controls the Pratas Islands and Taiping Island in the Spratly Islands, which are part of the disputed South China Sea Islands. They were placed under Kaohsiung administration after the retreat to Taiwan.</p>\n<p>Since 1949, the government has made some changes in the area under its control. Taipei became a special municipality in 1967 and Kaohsiung in 1979. The two provincial governments were \"streamlined\", with their functions transferred to the central government (Fujian in 1956 and Taiwan in 1998). In 2010, New Taipei, Taichung and Tainan were upgraded to special municipalities. And in 2014, Taoyuan County was also upgraded to a special municipality. This brought the top-level divisions of the ROC to their current state:</p>\n<p>According to Article 4 of the Local Government Act, laws pertaining to special municipalities also apply to counties with a population exceeding 2 million. This provision does not currently apply to any county, although it previously applied to Taipei County (now New Taipei City) and Taoyuan County (now Taoyuan City).</p>\n<h2><span id=\"Economy_and_industry\">Economy and industry</span></h2>\n\n\n<p>The quick industrialization and rapid growth of Taiwan during the latter half of the 20th century has been called the \"Taiwan Miracle\". Taiwan is one of the \"Four Asian Tigers\" alongside Hong Kong, South Korea and Singapore.</p>\n<p>Japanese rule prior to and during World War II brought changes in the public and private sectors, most notably in the area of public works, which enabled rapid communications and facilitated transport throughout much of the island. The Japanese also improved public education and made it compulsory for all residents of Taiwan.</p>\n<p>By 1945, hyperinflation was in progress in mainland China and Taiwan as a result of the war with Japan. To isolate Taiwan from it, the Nationalist government created a new currency area for the island, and began a price stabilization program. These efforts significantly slowed inflation.</p>\n<p>When the KMT government fled to Taiwan it brought millions of taels (where 1 tael ~1.2 ozt) of gold and the foreign currency reserve of mainland China, which, according to the KMT, stabilized prices and reduced hyperinflation. Perhaps more importantly, as part of its retreat to Taiwan, the KMT brought the intellectual and business elites from Mainland China. The KMT government instituted many laws and land reforms that it had never effectively enacted on mainland China. The government also implemented a policy of import-substitution, attempting to produce imported goods domestically.</p>\n<p>In 1950, with the outbreak of the Korean War, the United States began an aid program which resulted in fully stabilized prices by 1952. Economic development was encouraged by American economic aid and programs such as the Joint Commission on Rural Reconstruction, which turned the agricultural sector into the basis for later growth. Under the combined stimulus of the land reform and the agricultural development programs, agricultural production increased at an average annual rate of 4 per cent from 1952 to 1959, which was greater than the population growth, 3.6%.</p>\n<p>In 1962, Taiwan had a (nominal) per-capita gross national product (GNP) of $170, placing its economy on a par with those of the Democratic Republic of the Congo. On a purchasing power parity (PPP) basis, its GDP per capita in early 1960s was $1,353 (in 1990 prices). By 2011 per-capita GNP, adjusted for purchasing power parity (PPP), had risen to $37,000, contributing to a Human Development Index (HDI) equivalent to that of other developed countries. Taiwan's HDI in 2012 is 0.890, (23rd, very high), according to the UN's new \"Inequality-adjusted HDI\" calculation method.</p>\n<p>In 1974, Chiang Ching-kuo implemented the Ten Major Construction Projects, the beginning foundations that helped Taiwan transform into its current export driven economy. Since the 1990s, a number of Taiwan-based technology firms have expanded their reach around the world. Well-known international technology companies headquartered in Taiwan include personal computer manufacturers Acer Inc. and Asus, mobile phone maker HTC, as well as electronics manufacturing giant Foxconn, which makes products for Apple, Amazon, and Microsoft. Computex Taipei is a major computer expo, held since 1981.</p>\n\n<p>Today Taiwan has a dynamic, capitalist, export-driven economy with gradually decreasing state involvement in investment and foreign trade. In keeping with this trend, some large government-owned banks and industrial firms are being privatized. Real growth in GDP has averaged about 8% during the past three decades. Exports have provided the primary impetus for industrialization. The trade surplus is substantial, and foreign reserves are the world's fifth largest. The Republic of China has its own currency, the New Taiwan dollar.</p>\n<p>Since the beginning of the 1990s, the economic ties between Taiwan and the People's Republic of China have been very prolific. As of 2008, more than US$150 billion have been invested in the PRC by Taiwanese companies, and about 10% of the Taiwanese labour force works in the PRC, often to run their own businesses. Although the economy of Taiwan benefits from this situation, some have expressed the view that the island has become increasingly dependent on the Mainland Chinese economy. A 2008 white paper by the Department of Industrial Technology states that \"Taiwan should seek to maintain stable relation with China while continuing to protect national security, and avoiding excessive 'Sinicization' of Taiwanese economy.\" Others argue that close economic ties between Taiwan and Mainland China would make any military intervention by the PLA against Taiwan very costly, and therefore less probable.</p>\n<p>Taiwan's total trade in 2010 reached an all-time high of US$526.04 billion, according to Taiwan's Ministry of Finance. Both exports and imports for the year reached record levels, totaling US$274.64 billion and US$251.4 billion, respectively.</p>\n\n<p>In 2001, agriculture constituted only 2% of GDP, down from 35% in 1952. Traditional labor-intensive industries are steadily being moved offshore and with more capital and technology-intensive industries replacing them. High-technology industrial parks have sprung up in every region in Taiwan. The ROC has become a major foreign investor in the PRC, Thailand, Indonesia, the Philippines, Malaysia, and Vietnam. It is estimated that some 50,000 Taiwanese businesses and 1,000,000 businesspeople and their dependents are established in the PRC.</p>\n<p>Because of its conservative financial approach and its entrepreneurial strengths, Taiwan suffered little compared with many of its neighbors from the 1997 Asian financial crisis. Unlike its neighbors, South Korea and Japan, the Taiwanese economy is dominated by small and medium-sized businesses, rather than the large business groups. The global economic downturn, however, combined with poor policy coordination by the new administration and increasing bad debts in the banking system, pushed Taiwan into recession in 2001, the first whole year of negative growth since 1947. Due to the relocation of many manufacturing and labor-intensive industries to the PRC, unemployment also reached a level not seen since the 1970s oil crisis. This became a major issue in the 2004 presidential election. Growth averaged more than 4% in the 2002–2006 period and the unemployment rate fell below 4%.</p>\n<p>The ROC often joins international organizations (especially ones that also include the People's Republic of China) under a politically neutral name. The ROC is a member of governmental trade organizations such as the World Trade Organization under the name Separate Customs Territory of Taiwan, Penghu, Kinmen and Matsu (Chinese Taipei) since 2002.</p>\n<h2><span id=\"Transportation\">Transportation</span></h2>\n\n<p>The Ministry of Transportation and Communications of the Republic of China is the cabinet-level governing body of the transportation network in Taiwan. Taiwan has an extensive highway network, classified into five levels: National highways, provincial highways, county routes, township routes, and special routes, with the first four being common. Taiwan also has an extensive bus network, which are mostly run by private bus companies. There are two rail systems in Taiwan: Taiwan Railway Administration and Taiwan High Speed Rail. The Taipei Metro and the Kaohsiung Mass Rapid Transit serve the Taipei metropolitan area and Kaohsiung, respectively. The Taoyuan Metro and Taichung Metro are currently under construction. Major airports include Taiwan Taoyuan International Airport, Taipei Songshan Airport, Kaohsiung International Airport, and Taichung Airport. The four international seaports are the Port of Keelung, the Port of Kaohsiung, the Port of Taichung, and the Port of Hualien.</p>\n<h2><span id=\"Education.2C_research.2C_and_academia\">Education, research, and academia</span></h2>\n\n<p>The higher education system was established in Taiwan by Japan during the colonial period. However, after the Republic of China took over Taiwan from Japan in 1945, the system was promptly replaced by the same system as in mainland China which mixed with features of the Chinese and American educational systems.</p>\n<p>The educational system includes six years of elementary school, three years of middle school, three years of high school, and four years of university. The system has been successful in that pupils in Taiwan boast some of the highest test scores in the world, especially in mathematics and science; However, it has also been criticized for placing excessive pressure on students and eschewing creativity in favor of rote memorization.</p>\n<p>Many Taiwanese students attend cram schools, or bushiban, to improve skills and knowledge on problem solving against exams of subjects like mathematics, nature science, history and many others. Courses are available for most popular subjects. Lessons are organized in lectures, reviews, private tutorial sessions, and recitations.</p>\n<p>As of 2013, the literacy rate in Taiwan is 97.15%.</p>\n<h2><span id=\"Demographics\">Demographics</span></h2>\n\n<p>Taiwan's population is about 23.4 million, most of whom are on the island proper. The remainder live on Penghu (101,758), Kinmen (127,723), and Matsu (12,506).</p>\n<h3><span id=\"Ethnic_groups\">Ethnic groups</span></h3>\n\n\n<p>The ROC government reports that over 95% of the population is Han Chinese, of which the majority includes descendants of early Han Chinese immigrants who arrived in Taiwan in large numbers starting in the 17th century. Alternatively, the ethnic groups of Taiwan may be roughly divided among the \"Taiwanese\" (84%, including Hakka), mainland Chinese (14%), and indigenous peoples (2%).</p>\n<p>The Hoklo people are the largest Han subgroup (70% of the total population), whose ancestors migrated from the coastal southern Fujian region across the Taiwan Strait starting in the 17th century. The Hakka comprise about 15% of the total population, and descend from Han migrants to Guangdong, its surrounding areas and Taiwan. Additional people of Han origin include and descend from the 2 million Nationalists who fled to Taiwan following the communist victory on the mainland in 1949.</p>\n<p>The indigenous Taiwanese aborigines number about 533,600 and are divided into 16 recognized groups. The Ami, Atayal, Bunun, Kanakanavu, Kavalan, Paiwan, Puyuma, Rukai, Saisiyat, Saaroa, Sakizaya, Sediq, Thao, Truku and Tsou live mostly in the eastern half of the island, while the Yami inhabit Orchid Island.</p>\n<h3><span id=\"Languages\">Languages</span></h3>\n\n<p>Mandarin is the official national language and is spoken by the vast majority of the population of Taiwan. It has been the primary language of instruction in schools since the end of Japanese rule. As in Hong Kong and Macau, Traditional Chinese is used as the writing system in Taiwan.</p>\n<p>The 70% of the population belonging to the Hoklo ethnic group speak Taiwanese Hokkien (a variant of the Min Nan speech of Fujian province) as their mother tongue, in addition to Mandarin, and many others have some degree of understanding. The Hakka ethnic group (15% of the population) use Hakka Chinese. Most <i>waishengren</i> speak primarily Mandarin. Although Mandarin is the language of instruction in schools and dominates television and radio, non-Mandarin Chinese varieties have undergone a revival in public life in Taiwan, particularly since restrictions on their use were lifted in the 1990s.</p>\n<p>Taiwan's indigenous languages, the Formosan languages, do not belong to the Chinese or Sino-Tibetan language family, but rather to the Austronesian language family. Their use among Taiwan's aboriginal minority groups has been in decline as usage of Mandarin has risen. Of the 14 extant languages, five are considered moribund.</p>\n<h3><span id=\"Religion\">Religion</span></h3>\n\n\n<p>The Constitution of the Republic of China protects people's freedom of religion and the practices of belief. There are approximately 18,718,600 religious followers in Taiwan as of 2005 (81.3% of total population) and 14–18% are non-religious. According to the 2005 census, of the 26 religions recognized by the ROC government, the five largest are: Buddhism (8,086,000 or 35.1%), Taoism (7,600,000 or 33%), Yiguandao (810,000 or 3.5%), Protestantism (605,000 or 2.6%), and Roman Catholicism (298,000 or 1.3%).</p>\n<p>The CIA World Factbook reports that over 93% of Taiwanese are adherents of a combination of the polytheistic ancient Chinese religion, Buddhism, Confucianism, and Taoism; 4.5% are adherents of Christianity, which includes Protestants, Catholics, and other, non-denominational, Christian groups; and less than 2.5% are adherents of other religions. Taiwanese aborigines comprise a notable subgroup among professing Christians: \"...over 64% identify as Christian... Church buildings are the most obvious markers of Aboriginal villages, distinguishing them from Taiwanese or Hakka villages.\"</p>\n\n<p>Confucianism is a philosophy that deals with secular moral ethics, and serves as the foundation of both Chinese and Taiwanese culture. The majority of Taiwanese people usually combine the secular moral teachings of Confucianism with whatever religions they are affiliated with.</p>\n<p>As of 2009, there were 14,993 temples in Taiwan, approximately one place of worship per 1,500 residents. 9,202 of those temples were dedicated to Taoism. In 2008, Taiwan had 3,262 Churches, an increase of 145.</p>\n<h3><span id=\"Largest_cities\">Largest cities</span></h3>\n\n<p>The figures below are the 2011 estimates for the twenty largest urban populations within administrative city limits; a different ranking exists when considering the total metropolitan area populations (in such rankings the Taipei-Keelung metro area is by far the largest agglomeration).</p>\n<p><br></p>\n\n<h2><span id=\"Public_health\">Public health</span></h2>\n\n\n<p>Health care in Taiwan is managed by the Bureau of National Health Insurance (BNHI).</p>\n<p>The current program was implemented in 1995, and is considered to be a form of social insurance. The government health insurance program maintains compulsory insurance for citizens who are employed, impoverished, unemployed, or victims of natural disasters with fees that correlate to the individual and/or family income; it also maintains protection for non-citizens working in Taiwan. A standardized method of calculation applies to all persons and can optionally be paid by an employer or by individual contributions.</p>\n<p>BNHI insurance coverage requires co-payment at the time of service for most services unless it is a preventative health service, for low-income families, veterans, children under three years old, or in the case of catastrophic diseases. Low income households maintain 100% premium coverage by the BNHI and co-pays are reduced for disabled or certain elderly peoples.</p>\n<p>According to a recently published survey, out of 3,360 patients surveyed at a randomly chosen hospital, 75.1% of the patients said they are \"very satisfied\" with the hospital service; 20.5% said they are \"okay\" with the service. Only 4.4% of the patients said they are either \"not satisfied\" or \"very not satisfied\" with the service or care provided.</p>\n<p>Taiwan has its own Center for Disease Control, and during the SARS outbreak in March 2003 there were 347 confirmed cases. During the outbreak the Centers for Disease Control and local governments set up monitored stations throughout public transportation, recreational sites and other public areas. With full containment in July 2003, there has not been a case of SARS since.</p>\n<p>As of 2006, the BNHI Facility Contract Distribution facilities total 17,259, including:</p>\n<p>Basic coverage areas of the insurance include:</p>\n<p>In 2004, the infant mortality rate was 5.3 with 15 physicians and 63 hospital beds per 10,000 people. The life expectancy for males was 73.5 years and 79.7 years for females according to the World Health Report.</p>\n<p>In July 2013, the Department of Health was restructured as the Ministry of Health and Welfare.</p>\n<h2><span id=\"Culture\">Culture</span></h2>\n\n\n<p>The cultures of Taiwan are a hybrid blend of various sources, incorporating elements of traditional Chinese culture, attributable to the historical and ancestry origin of the majority of its current residents, Japanese culture, traditional Confucianist beliefs, and increasingly Western values.</p>\n<p>After their move to Taiwan, the Kuomintang imposed an official interpretation of traditional Chinese culture over Taiwan. The government launched a program promoting Chinese calligraphy, traditional Chinese painting, folk art, and Chinese opera.</p>\n<p>The status of Taiwanese culture is debated. It is disputed whether Taiwanese culture is a regional form of Chinese culture or a distinct culture. Reflecting the continuing controversy surrounding the political status of Taiwan, politics continues to play a role in the conception and development of a Taiwanese cultural identity, especially in the prior dominant frame of a Taiwanese and Chinese dualism. In recent years, the concept of Taiwanese multiculturalism has been proposed as a relatively apolitical alternative view, which has allowed for the inclusion of mainlanders and other minority groups into the continuing re-definition of Taiwanese culture as collectively held systems of meaning and customary patterns of thought and behavior shared by the people of Taiwan. Identity politics, along with the over one hundred years of political separation from mainland China, has led to distinct traditions in many areas, including cuisine and music.</p>\n\n<p>One of Taiwan's greatest attractions is the National Palace Museum, which houses more than 650,000 pieces of Chinese bronze, jade, calligraphy, painting, and porcelain and is considered one of the greatest collections of Chinese art and objects in the world. The KMT moved this collection from the Forbidden City in Beijing in 1933 and part of the collection was eventually transported to Taiwan during the Chinese Civil War. The collection, estimated to be one-tenth of China's cultural treasures, is so extensive that only 1% is on display at any time. The PRC had said that the collection was stolen and has called for its return, but the ROC has long defended its control of the collection as a necessary act to protect the pieces from destruction, especially during the Cultural Revolution. Relations regarding this treasure have warmed recently; Beijing Palace Museum Curator Zheng Xinmiao said that artifacts in both Chinese and Taiwanese museums are \"China's cultural heritage jointly owned by people across the Taiwan Strait.\"</p>\n<p>The classical music culture in Taiwan is highly developed and features artists such as violinist Cho-Liang Lin, pianist Ching-Yun Hu, and the Lincoln Center Chamber Music Society Artist Director Wu Han. Karaoke, drawn from contemporary Japanese culture, is extremely popular in Taiwan, where it is known as KTV. KTV businesses operate in a hotel-like style, renting out small rooms and ballrooms varying on the number of guests in a group. Many KTV establishments partner with restaurants and buffets to form all-encompassing elaborate evening affairs for families, friends, or businessmen. Tour buses that travel around Taiwan have several TV's, equipped not for watching movies, but primarily for singing Karaoke. The entertainment counterpart of a KTV is an MTV, being found much less frequently out of the city. There, movies out on DVD can be selected and played in a private theater room. However, MTV, more so than KTV, has a growing reputation for being a place that young couples will go to be alone and intimate.</p>\n<p>Taiwan has a high density of 24-hour convenience stores, which, in addition to the usual services, provide services on behalf of financial institutions or government agencies such as collection of parking fees, utility bills, traffic violation fines, and credit card payments. They also provide a service for mailing packages.</p>\n<p>Taiwanese culture has also influenced other cultures. Bubble tea and milk tea are available in Singapore, Malaysia, Australia, Europe, and North America. Taiwan television shows are popular in Singapore, Malaysia, and other Asian countries. Taiwanese films have won various international awards at film festivals around the world. Ang Lee, a Taiwanese director, has directed critically acclaimed films such as: <i>Crouching Tiger, Hidden Dragon</i>; <i>Eat Drink Man Woman</i>; <i>Sense and Sensibility</i>; <i>Brokeback Mountain</i>; <i>Life of Pi</i>; and <i>Lust, Caution</i>. Other famous Taiwanese directors include Tsai Ming-Liang, Edward Yang, and Hou Hsiao-hsien.</p>\n<h3><span id=\"Literature.2C_philosophy.2C_and_the_arts\">Literature, philosophy, and the arts</span></h3>\n\n<h3><span id=\"Cinema.2C_television.2C_music.2C_and_performing_arts\">Cinema, television, music, and performing arts</span></h3>\n\n<h3><span id=\"Sports\">Sports</span></h3>\n\n\n<p>Baseball is Taiwan's national sport and it is a popular spectator sport. Two of the most famous Taiwanese baseball pitchers are Chien-Ming Wang and Wei-Yin Chen; both are starting pitchers in Major League Baseball. Other notable players playing in the United States include Chin-hui Tsao who played for the Colorado Rockies (2003–2005) and the Los Angeles Dodgers (2007), Hong-Chih Kuo, Fu-Te Ni, and Chin-lung Hu. The Chinese Professional Baseball League in Taiwan was established in 1989, and eventually absorbed the competing Taiwan Major League in 2003. As of 2008, the CPBL has four teams with average attendance of approximately 3,000 per game.</p>\n<p>Besides baseball, basketball is Taiwan's major sport. Taekwondo has also become a mature and successful sport in recent years. In the 2004 Olympics, Chen Shih-hsin and Chu Mu-yen won the first two gold medals in women's flyweight event and men's flyweight event, respectively. Subsequent taekwondo competitors such as Yang Shu-chun have strengthened Taiwan's taekwondo culture.</p>\n<p>Taiwan participates in international sporting organizations and events under the name of \"Chinese Taipei\" due to its political status. In 2009, Taiwan hosted two international sporting events on the island. The World Games 2009 were held in Kaohsiung between 16 and 26 July 2009. Taipei hosted the 21st Summer Deaflympics in September of the same year. Furthermore, Taipei will host the Summer Universiade in 2017.</p>\n<p>Taiwan is also a major Asian country for Korfball. In 2008, Taiwan hosted the World Youth Korfball Championship and took the silver medal. In 2009, Taiwan's korfball team won a bronze medal at the World Game.</p>\n<p>Yani Tseng is the most famous Taiwanese professional golfer currently playing on the U.S.-based LPGA Tour. She is the youngest player ever, male or female, to win five major championships and had been ranked number 1 in the Women's World Golf Rankings for 109 consecutive weeks from 2011 to 2013.</p>\n<h3><span id=\"Foods.2C_cuisine.2C_and_shopping\">Foods, cuisine, and shopping</span></h3>\n\n\n<h3><span id=\"Calendar\">Calendar</span></h3>\n\n\n<p>Taiwan uses two official calendars: the Gregorian calendar and the Minguo calendar. The latter numbers years starting from 1911, the year of the founding of the Republic of China. For example, 2007 is the \"96th year of the Republic\" (民國96年), while its months and days are numbered according to the Gregorian calendar.</p>\n<p>Usually, year numbering may use the Gregorian system as well as the ROC era system. For example, 3 May 2004, may be written 2004-05-03 or 93–05–03. The use of two different calendar systems in Taiwan may be confusing, in particular for foreigners. For instance, products for export marked using the Minguo calendar can be misunderstood as having an expiration date 11 years earlier than intended.</p>\n<p>Taiwan also uses the lunar calendar for traditional festivals such as the Chinese New Year, the Lantern Festival, and the Dragon Boat Festival.</p>\n<h2><span id=\"See_also\">See also</span></h2>\n<ul><li>Index of Taiwan-related articles</li>\n<li>Outline of Taiwan</li>\n</ul><h2><span id=\"Notes\">Notes</span></h2>\n\n<h2><span id=\"References\">References</span></h2>\n<h3><span id=\"Citations\">Citations</span></h3>\n\n<h3><span id=\"Works_cited\">Works cited</span></h3>\n\n<h2><span id=\"Further_reading\">Further reading</span></h2>\n\n<h2><span id=\"External_links\">External links</span></h2>\n<h3><span id=\"Overviews_and_data\">Overviews and data</span></h3>\n<ul><li>Taiwan entry at <i>The World Factbook</i></li>\n<li>Taiwan from <i>UCB Libraries GovPubs</i></li>\n<li>Taiwan at DMOZ</li>\n<li>Taiwan country profile BBC News</li>\n<li>Taiwan flashpoint BBC News</li>\n<li>Background Note: Taiwan US Department of State</li>\n<li>Taiwan Travel Information and Travel Guide Lonely Planet</li>\n<li>Taiwan's 400 years of history New Taiwan, Ilha Formosa</li>\n<li>Key Development Forecasts for Taiwan from International Futures</li>\n<li>Taiwan <i>Encyclopædia Britannica</i> entry</li>\n<li>Chinese Taipei OECD</li>\n<li> Wikimedia Atlas of Taiwan</li>\n</ul><h3><span id=\"Government_agencies\">Government agencies</span></h3>\n<ul><li>Office of the government</li>\n<li>Office of the President</li>\n<li>Executive Yuan</li>\n<li>Judicial Yuan</li>\n<li>Control Yuan</li>\n<li>Examination Yuan</li>\n<li>Ministry of Foreign Affairs</li>\n<li>Taipei Economic &amp; Cultural Representative Office in the US</li>\n<li>National Assembly</li>\n<li>Taiwan, The Heart of Asia, Tourism Bureau, Republic of China (Taiwan)</li>\n</ul>",
					"images": [
						{
							"ns": 6,
							"title": "File:101.portrait.altonthompson.jpg"
						},
						{
							"ns": 6,
							"title": "File:19451025 中國戰區臺灣省受降典禮後 臺灣省警備總司令部全體官兵合影.jpg"
						},
						{
							"ns": 6,
							"title": "File:2008TIBE Day1 Hall1 Opening TouhWang.jpg"
						},
						{
							"ns": 6,
							"title": "File:2011 Women's British Open - Tseng Yani (7) cropped.jpg"
						},
						{
							"ns": 6,
							"title": "File:Afrikaner Vryheidsvlag.svg"
						},
						{
							"ns": 6,
							"title": "File:Ambox current red.svg"
						},
						{
							"ns": 6,
							"title": "File:Ando Rikichi surrender.jpg"
						},
						{
							"ns": 6,
							"title": "File:AntiWar-0215-Taipei-2.png"
						},
						{
							"ns": 6,
							"title": "File:Asia (orthographic projection).svg"
						},
						{
							"ns": 6,
							"title": "File:Bandera Hongaresos Romania.svg"
						}
					],
					"categories": [
						{
							"ns": 14,
							"title": "Category:Chinese-speaking countries and territories"
						},
						{
							"ns": 14,
							"title": "Category:East Asian countries"
						},
						{
							"ns": 14,
							"title": "Category:Island countries"
						},
						{
							"ns": 14,
							"title": "Category:Liberal democracies"
						},
						{
							"ns": 14,
							"title": "Category:Northeast Asian countries"
						},
						{
							"ns": 14,
							"title": "Category:Republic of China"
						},
						{
							"ns": 14,
							"title": "Category:Republics"
						},
						{
							"ns": 14,
							"title": "Category:States and territories established in 1912"
						},
						{
							"ns": 14,
							"title": "Category:Taiwan"
						},
						{
							"ns": 14,
							"title": "Category:Taiwan placenames originating from Formosan languages"
						}
					]
				}
			}
		}
	};

/***/ },

/***/ 305:
/***/ function(module, exports) {

	module.exports = {
		"batchcomplete": "",
		"query": {
			"pages": {
				"-1": {
					"ns": 6,
					"title": "File:101.portrait.altonthompson.jpg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/0/00/101.portrait.altonthompson.jpg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:101.portrait.altonthompson.jpg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=3525962"
						}
					]
				},
				"-2": {
					"ns": 6,
					"title": "File:19451025 中國戰區臺灣省受降典禮後 臺灣省警備總司令部全體官兵合影.jpg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/f/f9/19451025_%E4%B8%AD%E5%9C%8B%E6%88%B0%E5%8D%80%E8%87%BA%E7%81%A3%E7%9C%81%E5%8F%97%E9%99%8D%E5%85%B8%E7%A6%AE%E5%BE%8C_%E8%87%BA%E7%81%A3%E7%9C%81%E8%AD%A6%E5%82%99%E7%B8%BD%E5%8F%B8%E4%BB%A4%E9%83%A8%E5%85%A8%E9%AB%94%E5%AE%98%E5%85%B5%E5%90%88%E5%BD%B1.jpg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:19451025_%E4%B8%AD%E5%9C%8B%E6%88%B0%E5%8D%80%E8%87%BA%E7%81%A3%E7%9C%81%E5%8F%97%E9%99%8D%E5%85%B8%E7%A6%AE%E5%BE%8C_%E8%87%BA%E7%81%A3%E7%9C%81%E8%AD%A6%E5%82%99%E7%B8%BD%E5%8F%B8%E4%BB%A4%E9%83%A8%E5%85%A8%E9%AB%94%E5%AE%98%E5%85%B5%E5%90%88%E5%BD%B1.jpg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=12085121"
						}
					]
				},
				"-3": {
					"ns": 6,
					"title": "File:2008TIBE Day1 Hall1 Opening TouhWang.jpg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/2008TIBE_Day1_Hall1_Opening_TouhWang.jpg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:2008TIBE_Day1_Hall1_Opening_TouhWang.jpg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=3549199"
						}
					]
				},
				"-4": {
					"ns": 6,
					"title": "File:2011 Women's British Open - Tseng Yani (7) cropped.jpg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/7/76/2011_Women%27s_British_Open_-_Tseng_Yani_%287%29_cropped.jpg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:2011_Women%27s_British_Open_-_Tseng_Yani_(7)_cropped.jpg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=16037603"
						}
					]
				},
				"-5": {
					"ns": 6,
					"title": "File:Afrikaner Vryheidsvlag.svg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Afrikaner_Vryheidsvlag.svg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:Afrikaner_Vryheidsvlag.svg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=1253310"
						}
					]
				},
				"-6": {
					"ns": 6,
					"title": "File:Ambox current red.svg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/9/98/Ambox_current_red.svg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:Ambox_current_red.svg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=6652910"
						}
					]
				},
				"-7": {
					"ns": 6,
					"title": "File:Ando Rikichi surrender.jpg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/5/51/Ando_Rikichi_surrender.jpg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:Ando_Rikichi_surrender.jpg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=8996427"
						}
					]
				},
				"-8": {
					"ns": 6,
					"title": "File:AntiWar-0215-Taipei-2.png",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/1/1a/AntiWar-0215-Taipei-2.png",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:AntiWar-0215-Taipei-2.png",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=34787570"
						}
					]
				},
				"-9": {
					"ns": 6,
					"title": "File:Asia (orthographic projection).svg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/8/80/Asia_%28orthographic_projection%29.svg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:Asia_(orthographic_projection).svg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=6234641"
						}
					]
				},
				"-10": {
					"ns": 6,
					"title": "File:Bandera Hongaresos Romania.svg",
					"missing": "",
					"imagerepository": "shared",
					"imageinfo": [
						{
							"url": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bandera_Hongaresos_Romania.svg",
							"descriptionurl": "https://commons.wikimedia.org/wiki/File:Bandera_Hongaresos_Romania.svg",
							"descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=1655702"
						}
					]
				}
			}
		}
	};

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _reactDayPicker = __webpack_require__(311);

	var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

	__webpack_require__(316);

	var _action_creator = __webpack_require__(297);

	var _helper = __webpack_require__(298);

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
	              { className: 'white' },
	              'Greeting'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'white' },
	              'This is a demo app. It fetch links from a page of ',
	              _react2.default.createElement(
	                'a',
	                { className: 'white', href: 'https://www.wikipedia.org/', target: '_blank' },
	                'Wikipedia'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'white' },
	              'You can'
	            ),
	            _react2.default.createElement(
	              'ol',
	              { className: 'white' },
	              _react2.default.createElement(
	                'li',
	                null,
	                'Bookmark an interested page'
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                'Save 140 chars along with bookmark'
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                'Export your bookmarks'
	              )
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

/***/ 316:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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

	var _helper = __webpack_require__(298);

	var _BookmarkRow = __webpack_require__(319);

	var _BookmarkRow2 = _interopRequireDefault(_BookmarkRow);

	var _BtnExport = __webpack_require__(320);

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

	var _action_creator = __webpack_require__(297);

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

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _filesaver = __webpack_require__(321);

	__webpack_require__(297);

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

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(72);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(286);

	var _action_creator = __webpack_require__(297);

	var _api = __webpack_require__(301);

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

	    var content = props.content.innerHTML ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: props.content.innerHTML } }) : null;
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

	    var categories = props.content.categories ? _react2.default.createElement(
	      'div',
	      null,
	      props.content.categories.map(function (cg) {
	        return _react2.default.createElement(
	          'span',
	          { key: cg, className: 'label label-info' },
	          _react2.default.createElement(
	            'a',
	            { className: 'no-decor', href: 'https://en.wikipedia.org/wiki/' + cg, target: '_blank' },
	            cg
	          )
	        );
	      })
	    ) : null;

	    var images = props.content.images ? _react2.default.createElement(
	      'div',
	      { className: 'categories-container' },
	      props.content.images.map(function (url) {
	        return _react2.default.createElement('img', { key: url, src: url, className: 'img-thumbnail' });
	      })
	    ) : null;

	    var header = _react2.default.createElement(
	      'div',
	      { className: 'detail-header' },
	      star,
	      _react2.default.createElement(
	        'span',
	        { className: 'detail-title' },
	        props.pageName
	      ),
	      notes,
	      categories
	    );
	    var body = _react2.default.createElement(
	      'span',
	      null,
	      header,
	      _react2.default.createElement(
	        'div',
	        { className: 'detail-content' },
	        images,
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

	function updateContent(ctx, page) {
	  (0, _api.getContent)({ titles: page }).then(function (data) {
	    ctx.props.setContent(data);
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
	  var content = !!state.get('content') ? state.get('content').toJS() : {};
	  return {
	    bookmarks: state.get('bookmarks').toJS(),
	    content: content,
	    pageName: state.get('detail')
	  };
	}

	exports.default = (0, _reactRedux.connect)(selector, { saveBookmark: _action_creator.saveBookmark, removeBookmark: _action_creator.removeBookmark, setContent: _action_creator.setContent })(Detail);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Detail.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 325:
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
	        console.log('log: set content from data:', Object.keys(action.data));
	      } else {
	        console.log('log:', JSON.stringify(action));
	      }
	      return next(action);
	    };
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/mnt/msata/walkingice/code/jp/wikimarker/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "log_middleware.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 326:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});