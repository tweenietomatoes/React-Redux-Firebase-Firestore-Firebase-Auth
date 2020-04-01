import { put, takeEvery, call } from "redux-saga/effects";

import Api from "../Api";

import types from "./user.types";

function* login(action) {
  try {
    yield call(Api.signIn, action);
    yield put({ type: types.LOGIN });
  } catch (err) {
    yield put({
      type: types.LOGIN_FAILURE,
      payload: "Email or password incorrect."
    });
  }
}

function* logout() {
  try {
    yield call(Api.signOut);
    yield put({ type: types.LOGOUT, payload: "Logged out." });
  } catch (err) {
    console.log("Error occured during logout");
  }
}

function* auth() {
  yield put({ type: types.LOGIN });
}

export function* watchLogin() {
  yield takeEvery(types.WATCH_LOGIN, login);
}

export function* watchLogout() {
  yield takeEvery(types.WATCH_LOGOUT, logout);
}

export function* watchAuth() {
  yield takeEvery(types.WATCH_AUTH, auth);
}

export function* watchGetUser() {
  yield takeEvery(types.WATCH_GET_USER, login);
}
