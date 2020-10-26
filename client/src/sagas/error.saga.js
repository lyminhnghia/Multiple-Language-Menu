import { put } from "redux-saga/effects";
import ErrorActions from "../redux/error.redux";

export function* raiseError(action) {
  let { data } = action;
  yield put(ErrorActions.failure(data));
}

export function* resetError() {
  yield put(ErrorActions.resetError());
}
