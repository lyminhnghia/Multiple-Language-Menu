import React,{memo, useState} from 'react';
import { LangConstant } from "../../../../const";
import {
  makeStyles,
  Box,
  Avatar,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const EditImage = ({getData,src})=> {
  const { t: getLabel } = useTranslation();
  const [chooseFile,setSelectedFile] = useState({
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: src
  })

  const [displays,setDisplay] = useState(false)  
  const handleUploadClick = event => {
    var file = event.target.files[0];
    if(file.size <= 2097152){
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);
        // console.log(event.target.files[0].size)//2097152b
        reader.onloadend = function(e) {
        setSelectedFile({...chooseFile, ["selectedFile"]:[reader.result]});
        getData(reader.result);
        };
        setSelectedFile({
            mainState: "uploaded",
            selectedFile: event.target.files[0],
            imageUploaded: 1
        });
    }
    else {
        setDisplay(true) 
    }
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        <Avatar className = {classes.boxImage} src={chooseFile.selectedFile}>
            <PhotoCameraIcon style={{width: "50%",height:"50%"}}/>
        </Avatar>
        <input
            accept=".png,.jpg,.jpeg"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleUploadClick}
        />
        <label className={classes.boxLabel} htmlFor="contained-button-file">
          {getLabel(LangConstant.TXT_CHANGE_IMAGE)}  
        </label>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "100%",
        position: "relative",
    },
    input: {
      display: 'none',
    },
    boxImage: {
        width: "350px",
        height: "350px",
        position : "absolute",
        borderRadius: "0"
    },
    boxLabel: {
        width: "350px",
        height: "175px",      
        zIndex: "1",
        marginTop: "175px",
        // borderBottomRightRadius: "180px",
        // borderBottomLeftRadius: "180px",
        textAlign: "center",
        paddingTop: "80px",
        fontSize: "18px",
        fontWeight: "500",
        opacity: "0",
        '&:hover': {
            opacity: "1",
            backgroundColor: "rgb(104 98 98 / 0.6)",
            color: "white"
        }
    }
}));
export default memo(EditImage);