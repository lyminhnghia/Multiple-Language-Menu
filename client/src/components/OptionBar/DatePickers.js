import React, { memo } from "react";
import { makeStyles, TextField } from "@material-ui/core";

const DatePickers = ({ onChange, className, name, label, ...props }) => {
  const classes = useStyles();

  return (
    <form className={`${classes.container} ${className}`} noValidate>
      <TextField
        label={label}
        type="date"
        onChange={onChange}
        name={name}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    "& .MuiFormLabel-root": {
      color: "#000000",
    },
    "& .MuiInputBase-root": {
      color: "#000000",
    },
  },
}));

export default memo(DatePickers);
