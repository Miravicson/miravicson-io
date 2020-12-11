import * as types from "../types";

const initialState = {
  name: "Blog",
  message: "Hi this is my blog page",
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
