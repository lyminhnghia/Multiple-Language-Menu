// Common
export const BASE_URL = "http://localhost:5000";
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const TIMEOUT = 15000;

//Fixed value

// HTTP Status
export const STT_OK = 200;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_INTERNAL_SERVER = 500;

// Api admin
export const POST_LOGIN_ADMIN = "/api/admin/login";
export const GET_LIST_RESTAURANT_ADMIN = "/api/admin/restaurant";
export const CREATE_RESTAURANT_ADMIN = "/api/admin/create-restaurant";
export const RESTAURANT_ADMIN = "/api/admin/restaurant/{0}";
export const PROFILE_ADMIN = "/api/admin/profile";
export const CHANGE_PASSWORD_ADMIN = "/api/admin/edit-password";

// Api RESTAURANT
export const POST_LOGIN_RESTAURANT = "/api/restaurant/login";
export const CREATE_CATEGORY = "/api/restaurant/create-category";
export const LIST_CATEGORY = "/api/restaurant/category";
export const UPDATE_CATEGORY = "/api/restaurant/category/{0}";
export const CREATE_ITEM = "/api/restaurant/create-item";
export const UPDATE_ITEM = "/api/restaurant/item/{0}";
export const RESTAURANT_CONTRACT = "/api/restaurant/contract";
export const RESTAURANT_INFO = "/api/restaurant/profile";
export const RESTAURANT_LANGUAGE = "/api/restaurant/list-language";
export const UPLOAD_IMAGE = "/api/upload";
export const CREATE_QRCODE = "/api/restaurant/create-qrcode";
export const GET_QRCODE = "/api/restaurant/qrcode";
