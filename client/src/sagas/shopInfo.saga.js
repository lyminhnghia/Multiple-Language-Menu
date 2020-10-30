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
      let newFormat = {
        shop_type: responseData.shop_type,
        shop_name: responseData.shop_name,
        email: responseData.email,
        telephone: responseData.telephone,
        name_wifi: responseData.name_wifi,
        password_wifi: responseData.password_wifi,
        url_website: responseData.url_website,
        url_image: responseData.url_image,
        port_number: responseData.address.port_number,
        city: responseData.address.city,
        address: responseData.address.address,
        building: responseData.address.building,
        cash: responseData.payment_method.cash,
        credit_card: responseData.payment_method.credit_card,
        app: responseData.payment_method.app,
        etc: responseData.payment_method.etc,
        working_shifts: responseData.working_shifts,
      };
      yield put(ShopInfoAction.getShopInfoSuccess(newFormat));
    } else {
      yield put(ShopInfoAction.getShopInfoFailure(response.data.error));
    }
  } catch (error) {
    yield put(ShopInfoAction.getShopInfoFailure(error));
  }
}
