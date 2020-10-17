import React, { memo } from "react";
import { Box, TextField, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    root :{
        width:"100%"
    },
    rootTextField: {
        "& .MuiFormLabel-root": {
          color: "#000000"
        },
        "& .MuiInputBase-root": {
            color: "#000000"
        }
    },
    formControl: {
        display: "flex"
    },
});

const InputText = ({nameLabel,typeInput,requiredInput}) => {
  const classes = useStyles();
  return (
    <TextField 
        className={`${classes.formControl} ${classes.rootTextField}`} 
        classes={{root:classes.root}} 
        id="standard-basic" 
        label={nameLabel}
        type={typeInput}
        required= {requiredInput}
    />
  );
};

export default memo(InputText);
