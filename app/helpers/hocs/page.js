import React from 'react';

import {loaderListen} from '@core/actions';
import {IS_UNDER_NODE} from '@core/constants';

export default function pageHOC(Children) {
  function Page(props) {
    return (
      <Children {...props}/>
    );
  }

  Page.preload = function(match, dispatch) {
    const args = Array.prototype.slice.call(arguments);

    // we have to use loading bar on the client side
    if (IS_UNDER_NODE) {
      return Children.preload(...args);
    }

    const request = Children.preload(...args);
    return dispatch(loaderListen(request));
  };

  return Page;
}
