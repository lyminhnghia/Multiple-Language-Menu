import React, { memo } from "react";
import { Box, Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#305C8B',
    border: 0,
    borderRadius: 20,
    color: 'white',
    height: 40,
    width:"100%",
    padding: '0',
    fontWeight:"600",
    '&:hover':{
      backgroundColor:"#1C4877"
    }
  }
});

const ButtonBox = ({nameButton,onClick,typeButton}) => {
  const classes = useStyles();
  return (
    <Box>
        <Button 
          className={classes.root} 
          onClick={onClick}
          type={typeButton}
        >
          {nameButton}
        </Button>
    </Box>
  );
};

export default memo(ButtonBox);
