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
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useTranslation } from "react-i18next";
import InputText from "../../../../components/inputText";

const PopupCategory = ({key, nameCategory, descriptionCategory}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel} = useTranslation();
  const [formChange, setFormChange] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };
  const handleSubmit = e => {
    e.preventDefault()
    setOpen(false)
    console.log(formChange)
  }
  const onChange = e => {
    setFormChange({...formChange, [e.target.name]: e.target.value})
    // console.log(e.target.value, e.target.name)
  }
  return (
    <Box>
      <IconButton className={classes.iconButton} aria-label="add" onClick={handleClickOpen}>
        <EditOutlinedIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
        <form onSubmit={handleSubmit}>
          <Box className={classes.dialogTitleBox}>
            {getLabel(LangConstant.TXT_EDIT_CATEGORY)}
          </Box>

          <DialogContent>
            <InputText 
              nameLabel={getLabel(LangConstant.TXT_NAME_CATEGORY)}
              typeInput="text"
              requiredInput={true}
              nameText="name-category"
              defaultValueInput={nameCategory}
              onInput = {e => onChange(e)}
            />
            <InputText 
              nameLabel={getLabel(LangConstant.TXT_DESCRIPTION_CATEGORY)}
              typeInput="text"
              requiredInput={true}
              nameText="description-category"
              defaultValueInput={descriptionCategory}
              onInput = {e => onChange(e)}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {getLabel(LangConstant.TXT_CANCER)}
            </Button>
            <Button onClick={handleClose} type="submit" color="primary">
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
    "& .MuiDialog-container .MuiDialog-paperWidthSm " :{
      width: "600px"
    }   
  },
  dialogTitleBox: {
    color: "#000000",
    padding: "20px 0px 0px 20px",
    fontSize: "20px",
  },
});
export default memo(PopupCategory);