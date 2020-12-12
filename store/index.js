import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./reducers/auth";
import blog from "./reducers/blog";
import routes from "./reducers/routes";

const rootReducer = combineReducers({ auth, blog, routes });
/**
 *
 * @param {*} middleware
 * @param  {...any} enhancers
 */
function composeMiddleWare(middleware = [], ...enhancers) {
  if (process.env.NODE_ENV === "development") {
    return composeWithDevTools(applyMiddleware(...middleware), ...enhancers);
  }

  return compose(applyMiddleware(...middleware), ...enhancers);
}

const makeStore = (preloadedState, options) => {
  const {
    locales,
    locale,
    defaultLocale,
    ...restOfPreloadedState
  } = preloadedState;
  return createStore(
    rootReducer,
    restOfPreloadedState,
    composeMiddleWare([thunk])
  );
};
export const wrapper = createWrapper(makeStore, { debug: false });
export default makeStore;
