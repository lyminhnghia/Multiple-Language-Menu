import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getListCategory = (data) =>
  createApiRegistration().get(ApiConstant.LIST_CATEGORY, data);
