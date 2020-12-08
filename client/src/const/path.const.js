export const ROOT_URL = "http://localhost:3000";
export const ROOT = "/";
export const DASHBOARD = "/dashboard";
export const NOT_FOUND = "/not-found";

// Admin
export const LOGIN_ADMIN = "/admin/login";
export const ADMIN_RESTAURANT_LIST = "/admin/restaurant-list";
export const ADMIN_REGISTER_RESTAURANT = "/admin/register-restaurant";
export const ADMIN_PROFILE = "/admin/profile";
export const ADMIN_NOT_FOUND = "/admin/not-found";
// RESTAURANT
export const LOGIN_RESTAURANT = "/restaurant/login";
export const RESTAURANT_NOT_FOUND = "/restaurant/not-found";
export const RESTAURANT_QR_CODE = "/restaurant/qrcode";
export const RESTAURANT_INFORMATION = "/restaurant/information";
export const RESTAURANT_CATEGORY_TABLE = "/restaurant/table-category";
export const RESTAURANT_TRANFER_LANGUAGE = "/restaurant/tranfer-language";
export const RESTAURANT_CONTRACT = "/restaurant/contract-info";
export const RESTAURANT_ORDER_HISTORY = "/restaurant/order-history";
// Consumer
export const CUSTOMER_CATEGORY = "/:restaurantId/categories";
export const CUSTOMER_LANGUAGE = "/:restaurantId/languages";
export const CUSTOMER_INFO = "/:restaurantId/info";
export const CUSTOMER_ORDER_HISTORY = "/:restaurantId/order-history";
export const CUSTOMER_ITEM_CATEGORY = "/:restaurantId/categories/:categoryId";
export const CUSTOMER_PAY = "/:restaurantId/pay";
export const CUSTOMER_CONFIRM_PAY = "/:restaurantId/confirm-pay";
