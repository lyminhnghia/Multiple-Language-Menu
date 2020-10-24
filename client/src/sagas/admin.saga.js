import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import AdminAction from "../redux/admin.redux";
import { AdminService } from "../services";

export function* getListShopAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.getListShopAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data;
      yield put(AdminAction.getListShopSuccess(responseData));
    } else {
      yield put(AdminAction.getListShopFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.getListShopFailure(error));
  }
}

export function* createShopAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.createShopAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.createShopSuccess(responseData));
    } else {
      yield put(AdminAction.createShopFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.createShopFailure(error));
  }
}
