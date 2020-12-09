import React, { memo, useState } from "react";
import { makeStyles, Box, IconButton } from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { AppConstant } from "../../../const";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useSelector, useDispatch } from "react-redux";
import CustomerAction from "../../../redux/customer.redux";
import Cookie from "js-cookie";

const TranferLang = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const dataLanguage = useSelector((state) => state.customerRedux.language);

  const [checked, setChecked] = useState(Cookie.get(AppConstant.KEY_LANG));

  if (!dataLanguage) {
    dispatch(CustomerAction.getLanguageCustomer({}));
  }

  const changeBbutton = (lang_code) => {
    setChecked(lang_code);
    Cookie.set(AppConstant.KEY_LANG, lang_code);
  };
  return (
    <CustomerLayout>
      <Box className={classes.boxHeader}>Language</Box>
      <Box className={classes.boxPara}>
        {dataLanguage &&
          dataLanguage.map((lang, index) => (
            <Box key={"lang" + index} className={classes.boxBorder}>
              <IconButton
                onClick={(e) => changeBbutton(lang.lang_code)}
                className={classes.menuButton}
                value="hihi"
              >
                <CheckCircleIcon
                  style={{
                    color: lang.lang_code == checked ? "rgb(48, 92, 139)" : "",
                  }}
                />
              </IconButton>
              <Box className={classes.boxContent}>
                <Box style={{ fontSize: "18px", fontWeight: "500" }}>
                  {lang.lang_name}
                </Box>
                <Box>{lang.name}</Box>
              </Box>
            </Box>
          ))}
      </Box>
    </CustomerLayout>
  );
};

const useStyles = makeStyles({
  boxHeader: {
    width: "100%",
    height: "40px",
    backgroundColor: "#F2F3F5",
    lineHeight: "40px",
    paddingLeft: "4%",
    fontSize: "18px",
  },
  boxPara: {
    width: "92%",
    margin: "0 auto",
  },
  boxBorder: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    borderBottom: "1px solid rgb(0 0 0 / 0.1)",
  },
  boxContent: {
    padding: "10px 0px",
  },
});

export default memo(TranferLang);
