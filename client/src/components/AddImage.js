import React, { memo, useState } from "react";
import { makeStyles, Box, Avatar } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { LangConstant } from "../const";
import { useTranslation } from "react-i18next";

const UploadImage = ({ onChooseFile }) => {
  const { t: getLabel } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);

  const onClickUpload = (event) => {
    let file = event.target.files[0];
    if (file.size <= 2097152) {
      onChooseFile(file);
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar className={classes.largerImage} src={selectedFile}>
        <PhotoCamera style={{ width: "50%", height: "50%" }} />
      </Avatar>
      <input
        accept=".png,.jpg,.jpeg"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={onClickUpload}
      />
      <label className={classes.boxLabel} htmlFor="contained-button-file">
        {getLabel(LangConstant.TXT_CHANGE_IMAGE)}
      </label>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    position: "relative",
  },
  input: {
    display: "none",
  },
  largerImage: {
    width: "100%",
    height: 350,
    borderRadius: 0,
    position: "absolute",
  },
  boxLabel: {
    width: "100%",
    height: 175,
    zIndex: 1,
    marginTop: 175,
    textAlign: "center",
    paddingTop: 80,
    fontSize: 18,
    fontWeight: 500,
    opacity: 0,
    "&:hover": {
      opacity: 1,
      backgroundColor: "rgb(104 98 98 / 0.6)",
      color: "white",
    },
  },
}));
export default memo(UploadImage);
