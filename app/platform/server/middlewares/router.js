import React from 'react';
import ReactDomServer from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router';

import Html from '../documents/html';
import Layout from '@core/layout';
import routes from '@core/routes';

export default async function(ctx) {
  const location = ctx.originalUrl;

  let context = {};
  const component = (
    <Layout>
      <StaticRouter location={location} context={context}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route}/>
          ))}
        </Switch>
      </StaticRouter>
    </Layout>
  );

  const content = <Html>{component}</Html>;
  ctx.body = '<!doctype html>\n' + ReactDomServer.renderToString(content);
}
