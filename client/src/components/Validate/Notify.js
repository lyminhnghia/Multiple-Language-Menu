import React, { memo } from "react";
import { makeStyles, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Notify = (props) => {
  const { open, setOpen, data } = props;
  const classes = useStyles();

  const onClose = () => {
    setOpen(false);
  };

  if (open) {
    setTimeout(() => setOpen(false), 2 * 1000);
  }

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={onClose}
          severity="success"
        >
          {data}
        </Alert>
      </Snackbar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default memo(Notify);
