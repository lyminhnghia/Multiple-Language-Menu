import React, { memo, useState } from "react";
import { LangConstant } from "../../../../../../const";
import {
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Box,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { InputText } from "../../../../../../components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import CategoryRestaurantAction from "../../../../../../redux/categoryRestaurant.redux";

const PopupBox = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    dispatch(CategoryRestaurantAction.createCategory(data));
    onClose();
  };

  return (
    <Box>
      <IconButton
        className={classes.iconButton}
        aria-label="add"
        onClick={onClickOpen}
      >
        <AddCircle />
      </IconButton>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
        <Box className={classes.dialogTitleBox}>
          {getLabel(LangConstant.TXT_ADD_CATEGORY)}
        </Box>
        <DialogContent>
          <Box id="alert-dialog-description">
            <InputText
              nameLabel={getLabel(LangConstant.TXT_NEW_CATEGORY)}
              typeInput="text"
              requiredInput={true}
              nameText="name"
              onInput={(e) => onChange(e)}
            />
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
            </Box>
            <TextareaAutosize
              style={{ width: "100%", height: 56 }}
              rowsMax={4}
              onChange={(e) => onChange(e)}
              name="description"
              aria-label="maximum height"
              placeholder={`${getLabel(
                LangConstant.TXT_DESCRIPTION_PRODUCT
              )}...`}
              defaultValue=""
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {getLabel(LangConstant.TXT_CANCER)}
          </Button>
          <Button onClick={onSubmit} color="primary" autoFocus>
            {getLabel(LangConstant.TXT_ADD_CATEGORY)}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
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
  iconButton: {
    padding: "9px",
    color: "#305C8B",
    "& .MuiIconButton-label .MuiSvgIcon-root": {
      fontSize: "2.5rem",
    },
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
  boxLabel: {
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "15px",
    color: "rgb(48, 92, 139)",
  },
});
export default memo(PopupBox);
