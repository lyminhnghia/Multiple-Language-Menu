/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../redux/auth.redux";
import { AdminTypes } from "../redux/admin.redux";
import { CategoryShopTypes } from "../redux/categoryShop.redux";
import { ShopInfoTypes } from "../redux/shopInfo.redux";

/* ------------- Sagas ------------- */
import { requestLogin, requestLoginShop } from "./auth.saga";
import {
  getListShopAdmin,
  createShopAdmin,
  getShopAdmin,
  updateShopAdmin,
} from "./admin.saga";
import { getListCategoryShop, createCategoryShop } from "./categoryShop.saga";
import { getShopContract, getShopInfo } from "./shopInfo.saga";

import { raiseError, resetError } from "./error.saga";

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
    takeLatest(CategoryShopTypes.CREATE_CATEGORY, createCategoryShop),
    takeLatest(ShopInfoTypes.GET_CONTRACT, getShopContract),
    takeLatest(ShopInfoTypes.GET_SHOP_INFO, getShopInfo),

    takeLatest(
      [
        AuthTypes.REQUEST_LOGIN,
        AuthTypes.REQUEST_LOGIN_SHOP,
        AdminTypes.GET_LIST_SHOP,
        AdminTypes.CREATE_SHOP,
        AdminTypes.GET_SHOP,
        AdminTypes.UPDATE_SHOP,
        CategoryShopTypes.GET_LIST_CATEGORY,
        CategoryShopTypes.CREATE_CATEGORY,
        ShopInfoTypes.GET_CONTRACT,
        ShopInfoTypes.GET_SHOP_INFO,
      ],
      resetError
    ),
    takeLatest(
      [
        AuthTypes.REQUEST_LOGIN,
        AuthTypes.REQUEST_LOGIN_SHOP,
        AdminTypes.GET_LIST_SHOP,
        AdminTypes.CREATE_SHOP,
        AdminTypes.GET_SHOP,
        AdminTypes.UPDATE_SHOP,
        CategoryShopTypes.GET_LIST_CATEGORY,
        CategoryShopTypes.CREATE_CATEGORY,
        ShopInfoTypes.GET_CONTRACT,
        ShopInfoTypes.GET_SHOP_INFO,
      ],
      raiseError
    ),
  ]);
}
