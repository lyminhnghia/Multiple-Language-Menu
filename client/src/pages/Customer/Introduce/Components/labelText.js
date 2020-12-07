import React, { memo } from "react";
import { Box, makeStyles } from "@material-ui/core";

const LabelText = ({ nameLabel, nameText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.boxBorderText}>
      <Box className={classes.boxLabel}>{nameLabel}:</Box>
      <Box className={classes.boxData}>{nameText}</Box>
    </Box>
  );
};

const useStyles = makeStyles({
  boxBorderText: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
    marginLeft: 50,
  },
  boxLabel: {
    fontWeight: "500",
    fontSize: "18px",
    width: "130px",
  },
  boxData: {
    width: "calc(100% - 130px)",
    fontSize: "17px",
  },
});

export default memo(LabelText);
