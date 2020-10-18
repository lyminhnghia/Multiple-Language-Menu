import React, { memo, useState } from "react";
import { LangConstant } from "../../../../const";
import { 
    Button, 
    makeStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    IconButton,
    Box,
    TextareaAutosize,
} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InputText from "../../../../components/inputText";
import { useTranslation } from "react-i18next";

const PopupBox = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel} = useTranslation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };
  return (
    <Box>
      <IconButton className={classes.iconButton} aria-label="add" onClick={handleClickOpen}>
        <AddCircleIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
        <Box className={classes.dialogTitleBox}>{getLabel(LangConstant.TXT_ADD_CATEGORY)}</Box>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <InputText 
              nameLabel={getLabel(LangConstant.TXT_NEW_CATEGORY)}
              typeInput="text"
              requiredInput={true}
              nameText="email"
              // onInput = {e => onChange(e)}
            />
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
            </Box>
            <TextareaAutosize
              style={{width:"100%"}}
              rowsMax={4}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua."
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
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
    '& .MuiIconButton-label .MuiSvgIcon-root': {
      fontSize: "2.5rem"
    },
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
  boxLabel: {
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "15px",
    color: "rgb(48, 92, 139)"
  },  
});
export default memo(PopupBox);