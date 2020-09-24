/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../redux/auth.redux";

/* ------------- Sagas ------------- */
import { requestLogin } from "./auth.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    //authentication
    takeLatest(AuthTypes.REQUEST_LOGIN, requestLogin)
  ]);
}
