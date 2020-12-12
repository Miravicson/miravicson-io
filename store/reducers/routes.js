import routesData from "../../data/routes";
import * as types from "../types";

const initialState = routesData.map(({ name }) => name);

function routes(state = initialState, action) {
  if (action.type === types.HYDRATE) {
    return {
      ...state,
      ...action.payload.routes,
    };
  }
  return state;
}

export default routes;
