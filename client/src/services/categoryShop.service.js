import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getListCategory = () =>
  createApiRegistration().get(ApiConstant.LIST_CATEGORY, {});
