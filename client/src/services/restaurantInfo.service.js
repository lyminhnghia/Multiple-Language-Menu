import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getRestaurantContract = (data) =>
  createApiRegistration().get(ApiConstant.RESTAURANT_CONTRACT, data);

export const getRestaurantInfo = (data) =>
  createApiRegistration().get(ApiConstant.RESTAURANT_INFO, data);
