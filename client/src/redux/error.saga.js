import { put } from "redux-saga/effects";
import ErrorActions from "../redux/error.redux";

export function* raiseError(action) {
  let { error, status } = action;
  yield put(ErrorActions.failure(error, status));
}

export function* resetError() {
  yield put(ErrorActions.resetError());
}
