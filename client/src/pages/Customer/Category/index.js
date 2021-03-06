import React, { memo, useState } from "react";
import {
  makeStyles,
  Box,
  Checkbox,
  ListItemIcon,
  ListItem
} from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { useTranslation } from "react-i18next";
import ButtonBox from "../../../components/buttonBox"
import StartCategory from "./Components/startCategory"
import ListCategory from "./Components/listCategory"
const Category = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const [checked, setChecked] = useState(true)
  return (
    <CustomerLayout>
      <Box className={classes.boxPara} style={{display: checked?"flex":"none"}}>
        <Box className={classes.boxBorder}>
          <Box className={classes.boxHeader}>
            <Box className={classes.boxContent}>
              thong Tin
            </Box>
            <ListItem
                className={classes.iconBox}
                role="listitem"
                button
                // onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    className={classes.checkBox}
                  />
                </ListItemIcon>
                <Box className={classes.boxList}>
                  <Box className={classes.listText} >
                    Nội dung trên đã được xác thực
                  </Box>
                </Box>
              </ListItem>
          </Box>
          <Box className={classes.boxButton}>
            <ButtonBox
                nameButton="bắt đầu sử dụng"
                // typeButton="submit"
                onClick={e=>setChecked(false)}
              />
          </Box>
        </Box>       
      </Box>
      {/* <StartCategory/> */}
      <Box style={{display: checked?"none":"block"}}>
        <ListCategory/>
      </Box>
    </CustomerLayout>
  );
};

const useStyles = makeStyles({
  boxPara:{
    width:"100%",
    height: "90vh",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxBorder: {
    width: "80%",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
  },
  boxContent: {
    width: "100%",
    fontSize: "24px",
    fontWeight: "500",
    marginTop: "20px",
    textAlign: "center",
  },
  iconBox: {
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "rgb(48, 92, 139)",
    },
  },
  checkBox: {
    color: "#000000",
  },
  boxButton:{
    height: "50px",
    "& .MuiButtonBase-root":{
      borderRadius: "0px"
    }
  }
});

export default memo(Category);
