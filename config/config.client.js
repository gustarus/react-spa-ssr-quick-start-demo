'use strict';

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.noDeprecation = true;
module.exports = config => {
  // get variables from config
  const {dir, cwd, env} = config;

  // get webpack from ship
  const webpack = require(`${cwd}/node_modules/webpack`);

  // webpack resolvers
  const resolve = {
    modules: [`${dir}/node_modules/`],
    alias: config.aliases
  };

  // webpack loaders
  const loaders = [
    {
      test: /\.js$/i,
      loader: 'babel-loader',
      exclude: /node_modules/
    },

    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'isomorphic-style-loader',
        loader: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader',
          'stylus-loader'
        ]
      })
    },

    {
      test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif)$/i,
      loaders: [`file-loader?context=${dir}/app&name=assets/[ext]/[name].[hash].[ext]`]
    }
  ];

  return {
    name: 'ship-client',
    resolve: resolve,
    target: 'web',
    devtool: env === 'production' ? 'source-map' : 'source-map',

    entry: {
      app: [
        config.development.client.file
      ]
    },

    output: {
      path: config.build.client.path,
      filename: config.build.client.file,
      chunkFilename: 'assets/js/[name].bundle.[chunkhash].js',
      publicPath: '/assets/'
    },

    module: {
      exprContextCritical: false,
      rules: loaders
    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer
          ]
        }
      }),

      new ExtractTextPlugin({
        filename: 'assets/css/style.css',
        allChunks: true
      }),

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),

      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true
      })
    ]
  };
};
