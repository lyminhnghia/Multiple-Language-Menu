import React, { memo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    width: "100%",
  },
  rootTextField: {
    "& .MuiFormLabel-root": {
      color: "rgb(48, 92, 139)",
    },
    "& .MuiInputBase-root": {
      color: "#000000",
    },
  },
  formControl: {
    display: "flex",
  },
});

const InputText = ({
  nameLabel,
  typeInput,
  requiredInput,
  defaultValueInput,
  onInput,
  nameText,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={`${classes.formControl} ${classes.rootTextField}`}
      classes={{ root: classes.root }}
      id="standard-basic"
      label={nameLabel}
      type={typeInput}
      required={requiredInput}
      defaultValue={defaultValueInput}
      onInput={onInput}
      name={nameText}
      disabled={disabled}
    />
  );
};

export default memo(InputText);
