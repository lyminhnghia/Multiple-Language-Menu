import React, { memo, useState } from "react";
import {
  makeStyles,
  Box,
  Checkbox,
  ListItemIcon,
  ListItem,
} from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { AppConstant } from "../../../const";
import { useTranslation } from "react-i18next";
import { BoxButton } from "../../../components";
import { useParams } from "react-router-dom";
import Cookie from "js-cookie";
import ListCategory from "./Components/listCategory";

const Category = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const { categoryId } = useParams();

  const [checked, setChecked] = useState(false);
  const [isStart, setIsStart] = useState(
    Boolean(Cookie.get(AppConstant.KEY_RESTAURANT))
  );

  const onStartUsePage = () => {
    if (checked) {
      setIsStart(true);
      Cookie.set(AppConstant.KEY_RESTAURANT, categoryId);
      Cookie.set(AppConstant.KEY_LANG, AppConstant.DEFAULT_LANG);
    }
  };

  return (
    <CustomerLayout>
      <Box
        className={classes.boxPara}
        style={{ display: !isStart ? "flex" : "none" }}
      >
        <Box className={classes.boxBorder}>
          <Box className={classes.boxHeader}>
            <Box className={classes.boxContent}>Thông Tin</Box>
            <ListItem className={classes.iconBox} role="listitem" button>
              <ListItemIcon>
                <Checkbox
                  checked={checked}
                  className={classes.checkBox}
                  onClick={() => setChecked(true)}
                />
              </ListItemIcon>
              <Box className={classes.boxList}>
                <Box className={classes.listText}>
                  Nội dung trên đã được xác thực
                </Box>
              </Box>
            </ListItem>
          </Box>
          <Box className={classes.boxButton}>
            <BoxButton
              nameButton="bắt đầu sử dụng"
              onClick={() => onStartUsePage()}
            />
          </Box>
        </Box>
      </Box>
      <Box style={{ display: isStart ? "block" : "none" }}>
        <ListCategory />
      </Box>
    </CustomerLayout>
  );
};

const useStyles = makeStyles({
  boxPara: {
    width: "100%",
    height: "90vh",
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
  boxButton: {
    height: "50px",
    "& .MuiButtonBase-root": {
      borderRadius: "0px",
    },
  },
});

export default memo(Category);
