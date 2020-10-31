import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getLanguageShop = (data) =>
  createApiRegistration().get(ApiConstant.SHOP_LANGUAGE, data);
