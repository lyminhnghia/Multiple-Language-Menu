import React, { memo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

const InputText = ({
  nameLabel,
  typeInput,
  requiredInput,
  defaultValueInput,
  value,
  onInput,
  nameText,
  variant,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={`${classes.root} ${classes.formControl} ${classes.rootTextField}`}
      label={nameLabel}
      type={typeInput}
      required={requiredInput}
      defaultValue={defaultValueInput}
      value={value}
      onInput={onInput}
      name={nameText}
      variant={variant}
      disabled={disabled}
    />
  );
};

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

export default memo(InputText);
