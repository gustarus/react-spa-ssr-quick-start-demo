import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '@core/reducer';

export default function configureStore(history, _state) {
  const _reducers = combineReducers({
    api: reducer,
    routing: routerReducer
  });

  // use redux dev tool extension
  // adopted for server side rendering
  // {@see https://github.com/zalmoxisus/redux-devtools-extension}
  const composeEnhancers = typeof window !== 'undefined'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const _enhancers = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
    )
  );

  return createStore(_reducers, _state, _enhancers);
}
