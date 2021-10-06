//@ts-nocheck

import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import articles from './reducers/articles';

const rootReducer = combineReducers({  articles });
/**
 *
 * @param {*} middleware
 * @param  {...any} enhancers
 */
function composeMiddleWare(middleware = [], ...enhancers) {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(...middleware), ...enhancers);
  }

  return compose(applyMiddleware(...middleware), ...enhancers);
}

const makeStore = (preloadedState) => {
  const { locales, locale, defaultLocale, ...restOfPreloadedState } =
    preloadedState;
  return createStore(
    rootReducer,
    restOfPreloadedState,
    composeMiddleWare([thunk])
  );
};

interface State {

}
export const wrapper = createWrapper<Store<Record<string, unknown>>>(makeStore, { debug: false });
export default makeStore;
