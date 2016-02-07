import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Redirect} from 'react-router'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {fromJS}  from 'immutable';

import Reducer from './reducer.jsx';

import App from './comps/App.jsx';
import Lists from './comps/Lists.jsx';
import Detail from './comps/Detail.jsx';

import Logger from './log_middleware.jsx';

const routes = <Route component={App}>
  <Route path="/" component={Lists}/>
  <Route path="/detail" component={Detail} />
  <Redirect from="*" to="/"/>
</Route>


let createStoreWithMiddleware = applyMiddleware(Logger)(createStore);
const store = createStoreWithMiddleware(Reducer, fromJS({links:[]}));

ReactDom.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);

