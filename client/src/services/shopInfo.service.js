import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getShopContract = (data) =>
  createApiRegistration().get(ApiConstant.SHOP_CONTRACT, data);
