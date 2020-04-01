import { all, call } from "redux-saga/effects";

import {
  watchLogin,
  watchGetUser,
  watchAuth,
  watchLogout
} from "./user/user.saga";
import {
  watchAddPost,
  watchFetchPosts,
  watchUpdatePost,
  watchDeletePost
} from "./post/post.saga";

export default function* rootSaga() {
  yield all([
    call(watchLogin),
    call(watchGetUser),
    call(watchAuth),
    call(watchLogout),
    call(watchAddPost),
    call(watchFetchPosts),
    call(watchUpdatePost),
    call(watchDeletePost)
  ]);
}
