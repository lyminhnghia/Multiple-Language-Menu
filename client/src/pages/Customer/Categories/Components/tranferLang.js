import React, { useState, memo } from "react";
import { makeStyles, Box, IconButton, Dialog } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import { useTranslation } from "react-i18next";
import ClearIcon from "@material-ui/icons/Clear";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const TranferLang = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel } = useTranslation();
  const onClickOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(data[0].value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <IconButton className={classes.IconButton} onClick={onClickOpen}>
        <TranslateIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
        <Box className={classes.boxBorder}>
          <Box className={classes.boxHeader}>
            <Box>Tranfer Language</Box>
            {/* Order List */}
            <IconButton onClick={(e) => setOpen(false)}>
              <ClearIcon />
            </IconButton>
          </Box>
          <Box>
            <FormControl component="fieldset" style={{ width: "100%" }}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                {data.map((data, index) => (
                  <FormControlLabel
                    key={"radio" + index}
                    className={classes.labelBox}
                    value={data.value}
                    control={<Radio className={classes.radioBox} />}
                    label={data.value}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};
const data = [
  {
    value: "Tiếng Việt",
  },
  {
    value: "Tiếng Anh",
  },
  {
    value: "Tiếng Nhật",
  },
  {
    value: "Tiếng Pháp",
  },
  {
    value: "Tiếng Trung Quốc",
  },
];
const useStyles = makeStyles({
  iconButton: {
    padding: "9px",
    color: "#305C8B",
  },
  dialogBox: {
    "& .MuiDialog-container .MuiDialog-paperWidthSm ": {
      width: "600px",
      margin: "0px",
    },
  },
  boxBorder: {
    width: "100%",
    height: "80%",
    position: "fixed",
    bottom: "0",
    backgroundColor: "#ffffff",
    color: "#000000",
    left: "0",
    right: "0",
  },
  boxHeader: {
    width: "100%",
    height: "50px",
    backgroundColor: "#F2F3F5",
    lineHeight: "50px",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 8px",
    "& .MuiButtonBase-root": {
      margin: "7px 0px",
      backgroundColor: "rgb(0 0 0 / 0.2)",
      color: "white",
      width: "35px",
      height: "35px",
    },
  },
  labelBox: {
    "& .MuiTypography-root": {
      color: "black",
    },
  },
  radioBox: {
    "& .MuiIconButton-label": {
      color: "rgb(48, 92, 139)",
    },
  },
});
export default memo(TranferLang);
