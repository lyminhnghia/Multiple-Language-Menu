import React, { memo, useState } from "react";
import { makeStyles, Box, Avatar, Fab } from "@material-ui/core";
import { AddPhotoAlternate, PhotoCamera } from "@material-ui/icons";

const UploadImage = ({ onChooseFile }) => {
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
      <Avatar className={classes.smallImage} src={selectedFile}>
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
      <label
        htmlFor="contained-button-file"
        style={{ width: "56px", height: "56px" }}
      >
        <Fab component="span" className={classes.button}>
          <AddPhotoAlternate />
        </Fab>
      </label>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  largerImage: {
    width: "350px",
    height: "350px",
  },
  smallImage: {
    width: "100px",
    height: "100px",
  },
}));
export default memo(UploadImage);
