import INITIAL_STATE from "./post.initial_state";
import types from "./post.types";

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return Object.assign({}, state, {
        ...state,
        posts: [...action.payload, ...state.posts]
      });
    case types.ADD_POST:
      return Object.assign({}, state, {
        ...state,
        posts: [action.payload, ...state.posts]
      });
    case types.DELETE_POST:
      return Object.assign({}, state, {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id)
      });
    case types.UPDATE_POST:
      return Object.assign({}, state, {
        ...state,
        posts: state.posts.map((item, index) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
              content: action.payload.content
            };
          }
          return item;
        })
      });
    default:
      return state;
  }
};

export default postReducer;
