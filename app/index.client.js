import '@core/styles/index.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {matchPath} from 'react-router-dom';

import createStore from '@core/store';
import routes from '@core/routes';
import Layout from '@core/layout';

const history = createHistory();
const store = createStore(history, window.__STATE__);

// preload data to the state for the component if it's necessary
// {@see https://reacttraining.com/react-router/web/guides/server-rendering}
history.listen(location => {
  for (let route of routes) {
    const match = matchPath(location.pathname, route);
    if (match && route.component && route.component.preload) {
      route.component.preload(match, store.dispatch, store.getState());
      break;
    }
  }
});

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
