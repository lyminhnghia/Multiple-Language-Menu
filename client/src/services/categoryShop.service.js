import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getListCategoryShop = (data) =>
  createApiRegistration().get(ApiConstant.LIST_CATEGORY, data);

export const createCategoryShop = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_CATEGORY, data);
