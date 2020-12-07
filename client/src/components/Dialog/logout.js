import React, { memo } from "react";
import {
  makeStyles,
  Dialog,
  Button,
  Box,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { LangConstant } from "../../const";
import { useTranslation } from "react-i18next";

const Logout = ({ isOpen, setIsOpen, onSubmit }) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const onSubmitForm = (e) => {
    onSubmit();
  };

  return (
    <Dialog open={isOpen}>
      <Box>
        <Box className={classes.dialogTitleBox}>
          {getLabel(LangConstant.TXT_LOGOUT)}
        </Box>
        <DialogContent>
          <Box className={classes.dialogContentBox}>
            {getLabel(LangConstant.TXT_NOTIFICATION_LOGOUT)}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} className={classes.button}>
            {getLabel(LangConstant.TXT_CANCER)}
          </Button>
          <Button onClick={onSubmitForm} className={classes.button}>
            {getLabel(LangConstant.TXT_CONFIRM)}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
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
  button: {
    backgroundColor: "#305C8B",
    "&:hover": {
      backgroundColor: "#305C8B",
      opacity: 0.7,
    },
  },
});

export default memo(Logout);
