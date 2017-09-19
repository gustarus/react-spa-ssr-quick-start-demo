import React from 'react';
import ReactDomServer from 'react-dom/server';
import PropTypes from 'prop-types';

import {NODE_ENV, HARD_ENV} from '@core/constants';
import config from '@config';

const {jsUrl, cssUrl} = config.build.static;
export default function Html(props) {
  const {children, store} = props;
  const content = children
    ? ReactDomServer.renderToString(children) : '';

  const jsonEnv = JSON.stringify({NODE_ENV, HARD_ENV});
  const jsonState = JSON.stringify(store.getState());

  return (
    <html>
      <head>
        <link rel='stylesheet' href={cssUrl}/>
        <script type='text/javascript' src={jsUrl} defer/>
      </head>
      <body>
        <div id='root' dangerouslySetInnerHTML={{__html: content}}/>
        <script dangerouslySetInnerHTML={{__html: `window.__ENV__ = ${jsonEnv}; window.__STATE__ = ${jsonState};`}}/>
      </body>
    </html>
  );
}

Html.propTypes = {
  store: PropTypes.object
};
