import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const createItemShop = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_ITEM, data);

export const removeItemShop = (data) =>
  createApiRegistration().delete(format(ApiConstant.UPDATE_ITEM, data.id));
