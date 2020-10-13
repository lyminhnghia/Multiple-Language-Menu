import React, { memo } from "react";
import { PathConstant, LangConstant } from "../../../const";
import { Redirect, useHistory } from "react-router-dom";
import AuthAction from "../../../redux/auth.redux";
import {
  makeStyles,
  TextField,
  createMuiTheme,
  Box,
  Link
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";


const ShopRegisterAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t: getLabel, i18n } = useTranslation();
  const isLogin = useSelector((state) => state.authRedux.isLogin);

  if (isLogin) {
    return (
      <Redirect
        to={{
          pathname: PathConstant.DASHBOARD,
          state: {
            from: this.props.location,
          },
        }}
      />
    );
  }

  const onChangeLanguage = () => {
    i18n.changeLanguage("en");
  };
  const onLogin = () => {
    dispatch(
      AuthAction.requestLogin({ username: "hieucv", password: "123465" })
    );
    history.push("/");
  };

  return (
    <Box className={classes.boxParent}>
        <Box className={classes.boxBorder}>
            <Box className={classes.boxHeader}>Owner information</Box>
            <Box className={classes.boxContent}>
                <InputText 
                    nameLabel="Company name" 
                    typeInput="text"
                    requiredInput={true}
                />
                <InputText 
                    nameLabel="Address"
                    typeInput="text"
                    requiredInput={true}
                />
                <InputText 
                    nameLabel="Tel"
                    typeInput="number"
                    requiredInput={true}
                />
                <InputText 
                    nameLabel="Staff name"
                    typeInput="text"
                    requiredInput={true}
                />
                <InputText 
                    nameLabel="Email"
                    typeInput="text"
                    requiredInput={true}
                />
            </Box>
        </Box>
    </Box>
  );
};


const useStyles = makeStyles({
  boxParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  boxBorder:{
    width:"1000px",
    height:"500px",
  },
  boxHeader:{
      width: "200px",
      background: "rgb(48, 92, 139)",
      border: "none",
      boxShadow: "-4px -2px 6px -3px rgba(0,0,0,.2)",
      height: "35px",
      position: "relative",
      paddingLeft: "15px",
      fontSize: "18px",
      color: "#fff",
      lineHeight: "35px",
      fontWeight: "500",    
      "&:before": {
        background: "rgb(48, 92, 139)",
        boxShadow: "0 0 10px -1px rgba(0,0,0,.2)",
        content: "''",
        height: "36px",
        width: "51px",
        overflow: "hidden",
        position: "absolute",
        right: "-31px",
        top: "38%",
        transform: "rotate(45deg)",
        zIndex: "-1",
      }
  },
  boxContent: {
    boxShadow:" 0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
    background: "#fff",
    padding: "20px 50px",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
});

export default memo(ShopRegisterAdmin);
