import React, { memo, useState } from "react";
import { LangConstant } from "../../../const";
import { ShopLayout } from "../../../layouts";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const OrderHistory = (props) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();

  return <ShopLayout></ShopLayout>;
};

const useStyles = makeStyles((theme) => ({}));
export default memo(OrderHistory);
