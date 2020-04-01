import INITIAL_STATE from "./user.initial_state";
import types from "./user.types";

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: true
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        ...state,
        error: action.payload
      });
    case types.LOGOUT:
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: false,
        message: action.payload
      });
    default:
      return state;
  }
};

export default userReducer;
