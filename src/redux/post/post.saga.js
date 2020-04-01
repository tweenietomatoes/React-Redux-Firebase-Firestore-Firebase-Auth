import { put, takeEvery, call } from "redux-saga/effects";

import Api from "../Api";

import types from "./post.types";

function* addPost(action) {
  try {
    const res = yield call(Api.addPost, action);
    yield call(Api.addTimestamp, res);

    yield put({
      type: types.ADD_POST,
      payload: {
        id: res.id,
        title: action.payload.title,
        content: action.payload.content
      }
    });
  } catch (err) {
    console.error(err);
  }
}

function* fetchPosts(action) {
  try {
    let result = yield call(Api.fetchPosts, action);
    let res = {};
    let arr = [];
    result.forEach(doc => {
      res = { id: doc.id, ...doc.data() };
      arr.push(res);
    });
    yield put({ type: types.FETCH_POSTS, payload: arr });
  } catch (err) {}
}

function* updatePost(action) {
  try {
    console.log("UPDATE POST=" + action.payload.id);
    yield call(Api.updatePost, action);
    yield put({ type: types.UPDATE_POST, payload: action.payload });
  } catch (err) {
    console.log(err);
  }
}

function* deletePost(action) {
  try {
    yield call(Api.deletePost, action);
    yield put({ type: types.DELETE_POST, payload: action.payload });
  } catch (err) {}
}

export function* watchAddPost() {
  yield takeEvery(types.WATCH_ADD_POST, addPost);
}

export function* watchFetchPosts() {
  yield takeEvery(types.WATCH_FETCH_POSTS, fetchPosts);
}

export function* watchUpdatePost() {
  yield takeEvery(types.WATCH_UPDATE_POST, updatePost);
}

export function* watchDeletePost() {
  yield takeEvery(types.WATCH_DELETE_POST, deletePost);
}
