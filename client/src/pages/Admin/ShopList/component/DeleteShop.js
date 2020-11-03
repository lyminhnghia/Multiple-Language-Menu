import React, { memo } from "react";
import { LangConstant } from "../../../../const";
import {
  Button,
  makeStyles,
  DialogActions,
  DialogContent,
  Box,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import AdminAction from "../../../../redux/admin.redux";

const DeleteShop = ({ id, setOpen, title }) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch(AdminAction.deleteShop({ id: id }));
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Box className={classes.dialogTitleBox}>{title}</Box>
        <DialogContent>
          <Box className={classes.dialogContentBox}>
            {getLabel(LangConstant.TXT_CONFIRM_REMOVE)}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {getLabel(LangConstant.TXT_CANCER)}
          </Button>
          <Button onClick={onSubmit} type="submit" color="primary">
            {getLabel(LangConstant.TXT_REMOVE)}
          </Button>
        </DialogActions>
      </form>
    </Box>
  );
};
const useStyles = makeStyles({
  iconButton: {
    padding: "9px",
    color: "#305C8B",
  },
  dialogTitleBox: {
    color: "#000000",
    padding: "20px 0px 0px 20px",
    fontSize: "20px",
  },
  dialogContentBox: {
    margin: "20px 0px",
    color: "#000000",
    padding: "0",
    fontSize: "14px",
  },
});
export default memo(DeleteShop);
