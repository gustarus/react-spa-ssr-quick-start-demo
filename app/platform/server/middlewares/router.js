import React from 'react';
import {Provider} from 'react-redux';
import ReactDomServer from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router';
import {createMemoryHistory} from 'history';

import Html from '../documents/html';
import Layout from '@core/layout';
import createStore from '@core/store';
import routes from '@core/routes';

export default async function(ctx) {
  const location = ctx.originalUrl;
  const memoryHistory = createMemoryHistory(location);
  const store = createStore(memoryHistory, {}, []);

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
