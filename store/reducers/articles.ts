import * as types from "../types";

const initialState = {
  name: "Victor Ughonu's articles",
  message: "Select any article to read",
};

function authReducer(state = initialState, action) {
  if (action.type === types.HYDRATE) {
    return {
      ...state,
      ...action.payload.blog,
    };
  }
  return state;
}

export default authReducer;
