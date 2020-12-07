import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getLanguageRestaurant = (data) =>
  createApiRegistration().get(ApiConstant.RESTAURANT_LANGUAGE, data);
