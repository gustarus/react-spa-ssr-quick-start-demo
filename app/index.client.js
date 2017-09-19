import '@core/styles/index.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';

import routes from '@core/routes';
import Layout from '@core/layout';

const history = createHistory();

ReactDOM.render((
  <Layout>
    <Router history={history}>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route}/>
        ))}
      </Switch>
    </Router>
  </Layout>
), document.getElementById('root'));
