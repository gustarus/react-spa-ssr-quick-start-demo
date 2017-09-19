import '@core/styles/index.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';

import createStore from '@core/store';
import routes from '@core/routes';
import Layout from '@core/layout';

const history = createHistory();
const store = createStore(history, window.__STATE__);

ReactDOM.render((
  <Provider store={store}>
    <Layout>
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route}/>
          ))}
        </Switch>
      </Router>
    </Layout>
  </Provider>
), document.getElementById('root'));
