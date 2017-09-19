import Koa from 'koa';
import serve from 'koa-static-server';

// import middleware
import errorMiddleware from '@server/middlewares/error';
import requestMiddleware from '@server/middlewares/logger';
import routerMiddleware from '@server/middlewares/router';

// import project configuration
import {NODE_ENV, HARD_ENV, IS_PRODUCTION} from '@core/constants';
import {argv} from 'yargs';
import config from '@config';

// get arguments
const port = argv.p || config[NODE_ENV].server.port;

// creating the koa server
const app = new Koa();

// use the middleware
app.use(errorMiddleware);
app.use(requestMiddleware);
app.use(routerMiddleware);

// handle server errors
app.on('error', error => {
  console.error(error.stack, error.line); // eslint-disable-line no-console
});

// serve static files
if (IS_PRODUCTION) {
  app.use(serve({
    rootDir: config.build.client.path,
    rootPath: '/static'
  }));
}

// run the app
app.listen(port, function() {
  console.log(`The app ${config.name} was started on port ${port} with {NODE_ENV: ${NODE_ENV}, HARD_ENV: ${HARD_ENV}}.`); // eslint-disable-line no-console
});

export default app;
