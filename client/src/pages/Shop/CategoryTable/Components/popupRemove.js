import React, { memo, useState } from "react";
import { LangConstant } from "../../../../const";
import {
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Box,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import CategoryShopAction from "../../../../redux/categoryShop.redux";

const PopupRemove = ({ id, title }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    // dispatch(CategoryShopAction.updateCategory(id));
  };

  return (
    <Box>
      <IconButton
        className={classes.iconButton}
        aria-label="remove"
        onClick={onClickOpen}
      >
        <Delete />
      </IconButton>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
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
      </Dialog>
    </Box>
  );
};
const useStyles = makeStyles({
  iconButton: {
    padding: "9px",
    color: "#305C8B",
  },
  dialogBox: {
    "& .MuiDialog-container .MuiDialog-paperWidthSm ": {
      width: "600px",
    },
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
export default memo(PopupRemove);
