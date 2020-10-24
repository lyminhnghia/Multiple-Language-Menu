import React,{memo, useState} from 'react';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {
    makeStyles,
    Box,
    Avatar,
    Fab
  } from "@material-ui/core";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
const UploadImage = ()=> {
  const [chooseFile,setSelectedFile] = useState({
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  })
  const [displays,setDisplay] = useState(false)  
  const handleUploadClick = event => {
    console.log();
    var file = event.target.files[0];
    if(file.size <= 2097152){
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);
        console.log(event.target.files[0].size)//2097152b
        reader.onloadend = function(e) {
        setSelectedFile({...chooseFile, ["selectedFile"]:[reader.result]});
        console.log(reader.result)
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
        <Avatar className = {classes.largerImage} src={chooseFile.selectedFile}>
            <PhotoCameraIcon style={{width: "50%",height:"50%"}}/>
        </Avatar>
        <Avatar className = {classes.smallImage} src={chooseFile.selectedFile}>
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
        <label htmlFor="contained-button-file" style={{width:"56px",height:"56px"}}>
            <Fab component="span" className={classes.button}>
            <AddPhotoAlternateIcon />
            </Fab>
        </label>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "100%",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    largerImage: {
        width: "350px",
        height: "350px"
    },
    smallImage:{
        width: "100px",
        height: "100px"
    }
}));
export default memo(UploadImage);