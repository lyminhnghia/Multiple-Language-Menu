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
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { useTranslation } from "react-i18next";
import InputText from "../../../../components/inputText";
import { useDispatch } from "react-redux";
import CategoryShopAction from "../../../../redux/categoryShop.redux";

const PopupCategory = ({ key, id, nameCategory, descriptionCategory }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const [formChange, setFormChange] = useState({
    id: id,
    name: nameCategory,
    description: descriptionCategory,
  });

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch(CategoryShopAction.updateCategory(formChange));
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <IconButton
        className={classes.iconButton}
        aria-label="add"
        onClick={onClickOpen}
      >
        <EditOutlinedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
        <form onSubmit={onSubmit}>
          <Box className={classes.dialogTitleBox}>
            {getLabel(LangConstant.TXT_EDIT_CATEGORY)}
          </Box>

          <DialogContent>
            <InputText
              nameLabel={getLabel(LangConstant.TXT_NAME_CATEGORY)}
              typeInput="text"
              requiredInput={true}
              nameText="name"
              value={formChange.name}
              onInput={(e) => onChange(e)}
            />
            <InputText
              nameLabel={getLabel(LangConstant.TXT_DESCRIPTION_CATEGORY)}
              typeInput="text"
              requiredInput={true}
              nameText="description"
              value={formChange.description}
              onInput={(e) => onChange(e)}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={onClose} color="primary">
              {getLabel(LangConstant.TXT_CANCER)}
            </Button>
            <Button onClick={onSubmit} type="submit" color="primary">
              {getLabel(LangConstant.TXT_SAVE)}
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
});
export default memo(PopupCategory);
