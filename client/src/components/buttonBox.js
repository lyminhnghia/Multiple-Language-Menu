import React, { memo } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#305C8B",
    border: 0,
    borderRadius: 20,
    color: "white",
    height: "100%",
    width: "100%",
    padding: "0",
    "&:hover": {
      backgroundColor: "#1C4877",
    },
  },
});

const ButtonBox = ({ nameButton, onClick, typeButton }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} onClick={onClick} type={typeButton}>
      {nameButton}
    </Button>
  );
};

export default memo(ButtonBox);
