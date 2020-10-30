import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import ShopInfoAction from "../redux/shopInfo.redux";
import { ShopInfoService } from "../services";

export function* getShopContract(action) {
  try {
    const { data } = action;
    let response = yield call(ShopInfoService.getShopContract, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(ShopInfoAction.getContractSuccess(responseData));
    } else {
      yield put(ShopInfoAction.getContractFailure(response.data.error));
    }
  } catch (error) {
    yield put(ShopInfoAction.getContractFailure(error));
  }
}

export function* getShopInfo(action) {
  try {
    const { data } = action;
    let response = yield call(ShopInfoService.getShopInfo, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(ShopInfoAction.getShopInfoSuccess(responseData));
    } else {
      yield put(ShopInfoAction.getShopInfoFailure(response.data.error));
    }
  } catch (error) {
    yield put(ShopInfoAction.getShopInfoFailure(error));
  }
}
