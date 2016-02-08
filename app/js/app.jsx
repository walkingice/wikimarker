import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Redirect} from 'react-router'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {fromJS}  from 'immutable';

import Reducer from './reducer.jsx';

import Layout from './comps/Layout.jsx';
import Lists from './comps/Lists.jsx';
import Bookmarks from './comps/Bookmarks.jsx';
import Detail from './comps/Detail.jsx';
import {setStorage, getBookmarks} from './lib/storage.jsx';
import Logger from './log_middleware.jsx';

import "../style/app.less";

const routes = <Route component={Layout}>
  <Route path="/" components={{main: Lists}}/>
  <Route path="/bookmarks" components={{main: Bookmarks}} />
  <Route path="/detail" components={{main: Detail}} />
  <Redirect from="*" to="/"/>
</Route>

let createStoreWithMiddleware = applyMiddleware(Logger)(createStore);

setStorage(localStorage);
let bmks = getBookmarks();
bmks = bmks ? Object.keys(bmks) : [];
const store = createStoreWithMiddleware(Reducer, fromJS({links:[], bookmarks: bmks, detail: 'Taiwan'}));


ReactDom.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);

