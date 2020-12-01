import React, { memo } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { useTranslation } from "react-i18next";

const Category = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return <CustomerLayout>nghia</CustomerLayout>;
};

const useStyles = makeStyles({});

export default memo(Category);
