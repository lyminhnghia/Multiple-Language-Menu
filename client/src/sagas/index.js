/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../redux/auth.redux";
import { AdminTypes } from "../redux/admin.redux";
import { CategoryShopTypes } from "../redux/categoryShop.redux";
import { ShopInfoTypes } from "../redux/shopInfo.redux";
import { ItemShopTypes } from "../redux/itemShop.redux";
import { LanguageShopTypes } from "../redux/languageShop.redux";

/* ------------- Sagas ------------- */
import { requestLogin, requestLoginShop } from "./auth.saga";
import {
  getListShopAdmin,
  createShopAdmin,
  getShopAdmin,
  updateShopAdmin,
  getProfileAdmin,
} from "./admin.saga";
import {
  getListCategoryShop,
  createCategoryShop,
  updateCategoryShop,
  removeCategoryShop,
} from "./categoryShop.saga";
import { getShopContract, getShopInfo } from "./shopInfo.saga";
import { createItemShop, removeItemShop } from "./itemShop.saga";
import { getLanguageShop } from "./languageShop.saga";

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
    takeLatest(AdminTypes.GET_PROFILE_ADMIN, getProfileAdmin),

    // shop
    takeLatest(CategoryShopTypes.GET_LIST_CATEGORY, getListCategoryShop),

    takeLatest(CategoryShopTypes.CREATE_CATEGORY, createCategoryShop),
    takeLatest(CategoryShopTypes.UPDATE_CATEGORY, updateCategoryShop),
    takeLatest(CategoryShopTypes.REMOVE_CATEGORY, removeCategoryShop),

    takeLatest(ItemShopTypes.REMOVE_ITEM, removeItemShop),

    takeLatest(ShopInfoTypes.GET_CONTRACT, getShopContract),
    takeLatest(ShopInfoTypes.GET_SHOP_INFO, getShopInfo),

    takeLatest(LanguageShopTypes.GET_LANGUAGE, getLanguageShop),

    takeLatest(
      [
        AuthTypes.REQUEST_LOGIN,
        AuthTypes.REQUEST_LOGIN_SHOP,
        AdminTypes.GET_LIST_SHOP,
        AdminTypes.CREATE_SHOP,
        AdminTypes.GET_SHOP,
        AdminTypes.UPDATE_SHOP,
        AdminTypes.GET_PROFILE_ADMIN,
        CategoryShopTypes.GET_LIST_CATEGORY,
        CategoryShopTypes.CREATE_CATEGORY,
        CategoryShopTypes.UPDATE_CATEGORY,
        CategoryShopTypes.REMOVE_CATEGORY,
        ItemShopTypes.REMOVE_ITEM,
        ShopInfoTypes.GET_CONTRACT,
        ShopInfoTypes.GET_SHOP_INFO,
        LanguageShopTypes.GET_LANGUAGE,
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
        AdminTypes.GET_PROFILE_ADMIN,
        CategoryShopTypes.GET_LIST_CATEGORY,
        CategoryShopTypes.CREATE_CATEGORY,
        CategoryShopTypes.UPDATE_CATEGORY,
        CategoryShopTypes.REMOVE_CATEGORY,
        ItemShopTypes.REMOVE_ITEM,
        ShopInfoTypes.GET_CONTRACT,
        ShopInfoTypes.GET_SHOP_INFO,
        LanguageShopTypes.GET_LANGUAGE,
      ],
      raiseError
    ),
  ]);
}
