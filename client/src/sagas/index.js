/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../redux/auth.redux";
import { AdminTypes, updateShop } from "../redux/admin.redux";
import { CategoryShopTypes } from "../redux/categoryShop.redux";

/* ------------- Sagas ------------- */
import { requestLogin, requestLoginShop } from "./auth.saga";
import {
  getListShopAdmin,
  createShopAdmin,
  getShopAdmin,
  updateShopAdmin,
} from "./admin.saga";

import { getListCategoryShop } from "./categoryShop.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // authentication
    takeLatest(AuthTypes.REQUEST_LOGIN, requestLogin),
    takeLatest(AuthTypes.REQUEST_LOGIN_SHOP, requestLoginShop),

    // admin
    takeLatest(AdminTypes.GET_LIST_SHOP, getListShopAdmin),
    takeLatest(AdminTypes.CREATE_SHOP, createShopAdmin),
    takeLatest(AdminTypes.GET_SHOP, getShopAdmin),
    takeLatest(AdminTypes.UPDATE_SHOP, updateShopAdmin),
    // shop
    takeLatest(CategoryShopTypes.GET_LIST_CATEGORY, getListCategoryShop),
  ]);
}
