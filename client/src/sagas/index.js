/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "../redux/auth.redux";
import { AdminTypes } from "../redux/admin.redux";
import { CategoryRestaurantTypes } from "../redux/categoryRestaurant.redux";
import { RestaurantInfoTypes } from "../redux/restaurantInfo.redux";
import { ItemRestaurantTypes } from "../redux/itemRestaurant.redux";
import { LanguageRestaurantTypes } from "../redux/languageRestaurant.redux";
import { ImageTypes } from "../redux/image.redux";
import { QRCodeTypes } from "../redux/qrcode.redux";
import { CustomerTypes } from "../redux/customer.redux";

/* ------------- Sagas ------------- */
import {
  requestLogin,
  requestLoginRestaurant,
  changePassword,
} from "./auth.saga";
import {
  getListRestaurantAdmin,
  createRestaurantAdmin,
  getRestaurantAdmin,
  updateRestaurantAdmin,
  deleteRestaurantAdmin,
  getProfileAdmin,
} from "./admin.saga";
import {
  getListCategoryRestaurant,
  createCategoryRestaurant,
  updateCategoryRestaurant,
  removeCategoryRestaurant,
} from "./categoryRestaurant.saga";
import {
  getRestaurantContract,
  getRestaurantInfo,
} from "./restaurantInfo.saga";
import {
  createItemRestaurant,
  updateItemRestaurant,
  removeItemRestaurant,
} from "./itemRestaurant.saga";
import { createQRCode, getQRCode } from "./qrcode.saga";

import { requestUploadPostImage } from "./image.saga";

import { getLanguageRestaurant } from "./languageRestaurant.saga";

import {
  getListCategoryCustomer,
  getListItemCustomer,
  getLanguageCustomer,
} from "./customer.saga";

import { raiseError, resetError } from "./error.saga";

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // authentication
    takeLatest(AuthTypes.REQUEST_LOGIN, requestLogin),
    takeLatest(AuthTypes.REQUEST_LOGIN_RESTAURANT, requestLoginRestaurant),
    takeLatest(AuthTypes.REQUEST_CHANGE_PASSWORD, changePassword),

    // admin
    takeLatest(AdminTypes.GET_LIST_RESTAURANT, getListRestaurantAdmin),
    takeLatest(AdminTypes.CREATE_RESTAURANT, createRestaurantAdmin),
    takeLatest(AdminTypes.GET_RESTAURANT, getRestaurantAdmin),
    takeLatest(AdminTypes.UPDATE_RESTAURANT, updateRestaurantAdmin),
    takeLatest(AdminTypes.DELETE_RESTAURANT, deleteRestaurantAdmin),
    takeLatest(AdminTypes.GET_PROFILE_ADMIN, getProfileAdmin),

    // Restaurant
    takeLatest(
      CategoryRestaurantTypes.GET_LIST_CATEGORY,
      getListCategoryRestaurant
    ),

    takeLatest(
      CategoryRestaurantTypes.CREATE_CATEGORY,
      createCategoryRestaurant
    ),
    takeLatest(
      CategoryRestaurantTypes.UPDATE_CATEGORY,
      updateCategoryRestaurant
    ),
    takeLatest(
      CategoryRestaurantTypes.REMOVE_CATEGORY,
      removeCategoryRestaurant
    ),

    takeLatest(ItemRestaurantTypes.CREATE_ITEM, createItemRestaurant),
    takeLatest(ItemRestaurantTypes.UPDATE_ITEM, updateItemRestaurant),
    takeLatest(ItemRestaurantTypes.REMOVE_ITEM, removeItemRestaurant),

    takeLatest(RestaurantInfoTypes.GET_CONTRACT, getRestaurantContract),
    takeLatest(RestaurantInfoTypes.GET_RESTAURANT_INFO, getRestaurantInfo),

    takeLatest(LanguageRestaurantTypes.GET_LANGUAGE, getLanguageRestaurant),

    takeLatest(QRCodeTypes.CREATE_QR_CODE, createQRCode),
    takeLatest(QRCodeTypes.GET_QR_CODE, getQRCode),

    // Image
    takeLatest(ImageTypes.REQUEST_UPLOAD_POST_IMAGE, requestUploadPostImage),

    // CUSTOMER
    takeLatest(
      CustomerTypes.GET_LIST_CATEGORY_CUSTOMER,
      getListCategoryCustomer
    ),
    takeLatest(CustomerTypes.GET_LIST_ITEM_CUSTOMER, getListItemCustomer),
    takeLatest(CustomerTypes.GET_LANGUAGE_CUSTOMER, getLanguageCustomer),

    takeLatest(
      [
        AuthTypes.REQUEST_LOGIN,
        AuthTypes.REQUEST_LOGIN_RESTAURANT,
        AuthTypes.REQUEST_CHANGE_PASSWORD,
        AdminTypes.GET_LIST_RESTAURANT,
        AdminTypes.CREATE_RESTAURANT,
        AdminTypes.GET_RESTAURANT,
        AdminTypes.UPDATE_RESTAURANT,
        AdminTypes.DELETE_RESTAURANT,
        AdminTypes.GET_PROFILE_ADMIN,
        CategoryRestaurantTypes.GET_LIST_CATEGORY,
        CategoryRestaurantTypes.CREATE_CATEGORY,
        CategoryRestaurantTypes.UPDATE_CATEGORY,
        CategoryRestaurantTypes.REMOVE_CATEGORY,
        ItemRestaurantTypes.CREATE_ITEM,
        ItemRestaurantTypes.UPDATE_ITEM,
        ItemRestaurantTypes.REMOVE_ITEM,
        RestaurantInfoTypes.GET_CONTRACT,
        RestaurantInfoTypes.GET_RESTAURANT_INFO,
        LanguageRestaurantTypes.GET_LANGUAGE,
        ImageTypes.REQUEST_UPLOAD_POST_IMAGE,
        QRCodeTypes.CREATE_QR_CODE,
        QRCodeTypes.GET_QR_CODE,
        CustomerTypes.GET_LIST_CATEGORY_CUSTOMER,
        CustomerTypes.GET_LIST_ITEM_CUSTOMER,
        CustomerTypes.GET_LANGUAGE_CUSTOMER,
      ],
      resetError
    ),
    takeLatest(
      [
        AuthTypes.REQUEST_LOGIN,
        AuthTypes.REQUEST_LOGIN_RESTAURANT,
        AuthTypes.REQUEST_CHANGE_PASSWORD,
        AdminTypes.GET_LIST_RESTAURANT,
        AdminTypes.CREATE_RESTAURANT,
        AdminTypes.GET_RESTAURANT,
        AdminTypes.UPDATE_RESTAURANT,
        AdminTypes.DELETE_RESTAURANT,
        AdminTypes.GET_PROFILE_ADMIN,
        CategoryRestaurantTypes.GET_LIST_CATEGORY,
        CategoryRestaurantTypes.CREATE_CATEGORY,
        CategoryRestaurantTypes.UPDATE_CATEGORY,
        CategoryRestaurantTypes.REMOVE_CATEGORY,
        ItemRestaurantTypes.CREATE_ITEM,
        ItemRestaurantTypes.UPDATE_ITEM,
        ItemRestaurantTypes.REMOVE_ITEM,
        RestaurantInfoTypes.GET_CONTRACT,
        RestaurantInfoTypes.GET_RESTAURANT_INFO,
        LanguageRestaurantTypes.GET_LANGUAGE,
        ImageTypes.REQUEST_UPLOAD_POST_IMAGE,
        QRCodeTypes.CREATE_QR_CODE,
        QRCodeTypes.GET_QR_CODE,
        CustomerTypes.GET_LIST_CATEGORY_CUSTOMER,
        CustomerTypes.GET_LIST_ITEM_CUSTOMER,
        CustomerTypes.GET_LANGUAGE_CUSTOMER,
      ],
      raiseError
    ),
  ]);
}
