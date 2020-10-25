import React, { memo, useState } from "react";
import { LangConstant } from "../../../../const";
import { 
    makeStyles,
    IconButton,
    Box,
} from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useTranslation } from "react-i18next";

const ButtonIcon = ({onClick}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel} = useTranslation();
  return (
      <IconButton className={classes.iconButton} aria-label="add" onClick={onClick}>
        <EditOutlinedIcon/>
      </IconButton>
  );
};
const useStyles = makeStyles({
    iconButton: {
        padding: "9px",
        color: "#305C8B",
    },
});
export default memo(ButtonIcon);