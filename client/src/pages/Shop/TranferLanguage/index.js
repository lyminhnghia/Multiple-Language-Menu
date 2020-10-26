import React, { memo, useState } from "react";
import { ShopLayout } from "../../../layouts";
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
  Button,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
const not = (a, b) => {
  return a.filter((value) => b.indexOf(value) === -1);
};

const intersection = (a, b) => {
  return a.filter((value) => b.indexOf(value) !== -1);
};

const TranferLanguage = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([
    ["Vietnam", "Việt Nam"],
    ["indog", "Indog"],
    ["pinoy", "Pinoy"],
    ["thai gay", "thaiGay"],
    ["Sin", "Sin"],
    ["polpot", "polpot"],
    ["laos", "laos"],
    ["malay", "malay"],
  ]);
  const [right, setRight] = useState([]);

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
    setRight([]);
    setRight(right.concat(left));
    // setLeft([]);
  };

  const handleCheckedRight = () => {
    for (var i = 0; i < leftChecked.length; i++) {
      if (right.indexOf(leftChecked[i]) === -1) {
        setRight(right.concat(leftChecked));
        console.log(leftChecked);
      }
    }
    // setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    // setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    // setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items, name) => (
    <Box className={classes.rootBox}>
      <Box className={classes.textHeader}>
        {name == "left" ? "Các ngôn ngữ hiện có" : "Ngôn ngữ ưu tiên dịch"}
      </Box>
      <Paper className={classes.paper}>
        <List dense component="div" role="list">
          {items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;
            return (
              <ListItem
                className={classes.iconBox}
                key={value}
                role="listitem"
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    className={classes.checkBox}
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <Box className={classes.boxList}>
                  <Box className={classes.listText} id={labelId}>
                    {value[0]}
                  </Box>
                  <Box className={classes.listText} id={labelId}>
                    {value[1]}
                  </Box>
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
    <ShopLayout>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>{customList(left, "left")}</Grid>
        <Grid className={classes.gridControl} item>
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
        <Grid item>{customList(right, "right")}</Grid>
      </Grid>
    </ShopLayout>
  );
};

const useStyles = makeStyles({
  root: {
    margin: "auto",
    backgroundColor: "#e9ebee",
    width: "100vw",
    height: "100vh",
    "& .MuiGrid-root ": {
      height: "100%",
    },
  },
  gridControl: {
    "& .MuiGrid-root": {
      display: "flex",
      justifyContent: "center",
    },
  },
  rootBox: {
    height: "80%",
  },
  paper: {
    width: 500,
    height: "100%",
    overflow: "auto",
  },
  checkBox: {
    color: "#000000",
  },
  listText: {
    color: "#000000",
    // "& .MuiTypography-body2": {
    //     color: "#000000"
    // }
  },
  button: {
    color: "#000000",
    backgroundColor: "#ffffff",
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
    fontSize: "20px",
  },
  iconBox: {
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "rgb(48, 92, 139)",
    },
  },
});

export default memo(TranferLanguage);
