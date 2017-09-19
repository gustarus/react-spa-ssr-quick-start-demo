import React from 'react';
import {Provider} from 'react-redux';
import ReactDomServer from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router';
import {createMemoryHistory} from 'history';
import {matchPath} from 'react-router-dom';

import Html from '../documents/html';
import Layout from '@core/layout';
import createStore from '@core/store';
import routes from '@core/routes';

export default async function(ctx) {
  const location = ctx.originalUrl;
  const memoryHistory = createMemoryHistory(location);
  const store = createStore(memoryHistory, {}, []);

  // preload data to the state for the component if it's necessary
  // {@see https://reacttraining.com/react-router/web/guides/server-rendering}
  for (let route of routes) {
    const match = matchPath(location, route);
    if (match && route.component && route.component.preload) {
      await route.component.preload(match, store.dispatch, store.getState());
      break;
    }
  }

  let context = {};
  const component = (
    <Provider store={store}>
      <Layout>
        <StaticRouter location={location} context={context}>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route}/>
            ))}
          </Switch>
        </StaticRouter>
      </Layout>
    </Provider>
  );

  const content = <Html store={store}>{component}</Html>;
  ctx.body = '<!doctype html>\n' + ReactDomServer.renderToString(content);
}
