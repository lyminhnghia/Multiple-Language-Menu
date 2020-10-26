// Common
export const BASE_URL = "http://localhost:5000";
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};
export const TIMEOUT = 30000;

//Fixed value

// HTTP Status
export const STT_OK = 200;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_INTERNAL_SERVER = 500;

// Api admin
export const POST_LOGIN_ADMIN = "/api/admin/login";
export const GET_LIST_SHOP_ADMIN = "/api/admin/shop";
export const CREATE_SHOP_ADMIN = "/api/admin/create-shop";
export const SHOP_ADMIN = "/api/admin/shop/{0}";

// Api Shop
export const CREATE_CATEGORY = "/api/shop/create-category";
export const LIST_CATEGORY = "/api/shop/category";
export const UPDATE_CATEGORY = "/api/shop/category/{0}";
export const CREATE_ITEM = "/api/shop/create-item";
export const UPDATE_ITEM = "/api/shop/item/{0}";
