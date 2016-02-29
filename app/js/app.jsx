import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Redirect, IndexRoute, hashHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {fromJS}  from 'immutable';

import Reducer from './reducer.jsx';

import Layout from './pages/Layout.jsx';
import Links from './pages/Links.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import Detail from './pages/Detail.jsx';
import {setStorage, getBookmarks} from './lib/storage.jsx';
import {useFakeData} from './lib/api.jsx';
import Logger from './log_middleware.jsx';

import "../style/app.less";

useFakeData(_WEBPACK_USE_FAKE_DATA_);

let createStoreWithMiddleware = applyMiddleware(Logger)(createStore);

setStorage(localStorage);
let bmks = getBookmarks();
const store = createStoreWithMiddleware(Reducer, fromJS({links:[], bookmarks: bmks, detail: ''}));

// XXX: just for development, should be removed
import {setDetail} from './action_creator.jsx';
store.dispatch(setDetail('Taiwan'));

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path="bookmarks" components={Bookmarks} />
        <Route path="detail" components={Detail} />
        <IndexRoute components={Links}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

