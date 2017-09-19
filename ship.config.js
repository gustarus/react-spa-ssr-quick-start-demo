'use strict';

// current process path
const __root = process.cwd();

module.exports = {
  name: 'react-spa-ssr-quick-start-demo',
  version: '0.0.1',
  description: '',

  // webpack configs
  webpack: {
    client: __root + '/config/config.client.js',
    server: __root + '/config/config.server.js'
  },

  // avaliable aliases for ecosystem
  aliases: {
    '@core': __root + '/app',
    '@server': __root + '/app/platform/server',
    '@client': __root + '/app/platform/client',
    '@config': __root + '/ship.config.js'
  },

  // development section
  development: {
    server: {
      host: 'localhost',
      port: '8080',
      file: __root + '/app/index.server.js'
    },
    client: {
      host: 'localhost',
      port: '8090',
      file: __root + '/app/index.client.js'
    },
    websocket: {
      host: 'localhost',
      port: '3002'
    }
  },

  // production section
  production: {
    server: {
      host: 'localhost',
      port: '8080'
    }
  },

  // building section
  build: {
    path: __root + '/dist/',
    server: {
      file: 'server.js',
      path: __root + '/dist/server'
    },
    client: {
      file: 'application.js',
      path: __root + '/dist/client'
    },

    minify: {
      compress: {
        warnings: true,
        keep_fnames: true,
      },
      mangle: {
        keep_fnames: true,
      },
    }
  },
};

const {host, port} = module.exports.development.client;
const staticPathRoot = process.env.NODE_ENV === 'development'
  ? `//${host}:${port}` : '/static';

module.exports.build.static = {
  jsUrl: `${staticPathRoot}/${module.exports.build.client.file}`,
  cssUrl: `${staticPathRoot}/assets/css/style.css`
};
