import React, { memo, useState } from "react";
import { LangConstant } from "../../../const";
import {
  makeStyles,
  Box,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemIcon,
  List,
  Paper,
  Grid,
  Button
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
const not = (a, b) => {
    return a.filter((value) => b.indexOf(value) === -1);
  }
  
const intersection = (a, b) => {
    return a.filter((value) => b.indexOf(value) !== -1);
  }
  
const TranferLanguage = () => {
  const classes = useStyles();
  const { t: getLabel} = useTranslation();
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([
      ["Vietnam","Việt Nam"],
      ["indog","Indog"],
      ["pinoy","Pinoy"],
      ["thai gay","thaiGay"]
    ]);
  const [right, setRight] = useState([
      ["Sin","Sin"],
      ["polpot","polpot"],
      ["laos","laos"],
      ["malay","malay"]
    ]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items,name) => (
    <Box>
        <Box className = {classes.textHeader}>{name == "left"? "Các ngôn ngữ hiện có":"Ngôn ngữ ưu tiên dịch"}</Box>
            <Paper className={classes.paper}>       
            <List dense component="div" role="list">
                {items.map((value) => {
                const labelId = `transfer-list-item-${value}-label`;

                return (
                    <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                className = {classes.checkbox}
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <Box className = {classes.boxList}>
                            <Box className = {classes.listText} id={labelId} >{value[0]}</Box>
                            <Box className = {classes.listText} id={labelId} >{value[1]}</Box>
                        </Box>                   
                    </ListItem>
                );
                })}
                <ListItem />
            </List>
        </Paper>
    </Box>
    );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList(left,"left")}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right,"right")}</Grid>
    </Grid>
  )
};


const useStyles = makeStyles({
    root: {
        margin: 'auto',
        backgroundColor: "#e9ebee",
        width:"100vw",
        height: "100vh"
    },
    paper: {
        width: 500,
        height: 230,
        overflow: 'auto',
    },
    checkbox: {
        color: "#000000"
    },
    listText: {
        color: "#000000",
        // "& .MuiTypography-body2": {
        //     color: "#000000"
        // }       
    },
    button: {
        color: "#000000",
        backgroundColor: "#ffffff"
    },
    boxList: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
    },
    textHeader: {
        color: "#000000",
        width: "100%",
        textAlign: "center",
        padding: "20px 0px",
        fontSize: "20px"
    }
});

export default memo(TranferLanguage);
