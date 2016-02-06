import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Redirect} from 'react-router'

import App from './comps/App.jsx';
import Lists from './comps/Lists.jsx';
import Detail from './comps/Detail.jsx';

const routes = <Route component={App}>
  <Route path="/" component={Lists}/>
  <Route path="/detail" component={Detail} />
  <Redirect from="*" to="/"/>
</Route>

ReactDom.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('app')
);
