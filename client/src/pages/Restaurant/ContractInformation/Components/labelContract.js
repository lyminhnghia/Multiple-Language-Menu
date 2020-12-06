import React, { memo, useState } from "react";
import {
    makeStyles,
    Box,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";


const LabelContract = ({nameLabel, valueLabel}) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
        <Box className = {classes.boxContent}>
            <Box className = {classes.boxHeader}>
                {nameLabel}
            </Box>
            <Box className = {classes.boxValue}>
                {valueLabel}
            </Box>
        </Box>
  );
};

const useStyles = makeStyles({
    boxContent: {
        display: "flex",
        width: "100%",

    },
    boxHeader: {
        width: "200px",
        height: "40px",
        lineHeight: "40px",
        fontSize: "16px",
        paddingLeft: "10px",
        fontWeight: "600",
    },
    boxValue: {
        width: "calc(100% - 200px )",
        height: "40px",
        lineHeight: "40px",
        fontSize: "16px",
    }
});

export default memo(LabelContract);
