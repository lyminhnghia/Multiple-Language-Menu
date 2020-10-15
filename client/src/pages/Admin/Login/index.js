import React, { memo } from "react";
import { PathConstant, LangConstant } from "../../../const";
import { Redirect, useHistory } from "react-router-dom";
import AuthAction from "../../../redux/auth.redux";
import {
  makeStyles,
  Box,
  Link
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ButtonBox from "../../../components/buttonBox";
import InputText from "../../../components/inputText"

const LoginAdminPage = () => {
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
      <Box
        style={{
          width: 1000,
          display: "flex",
          flexWrap: "wrap",
          height: 430,
          backgroundColor: "#fff",
          borderRadius: "50px",
          boxShadow: "0 5px 5px 0 rgba(0,0,0,.2), 0 6px 18px 0 rgba(0,0,0,.19)",
        }}
      >
        <Box
          style={{
            backgroundColor: "#305C8B",
            width: 500,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: "50px",
            borderTopLeftRadius: "50px",
          }}
        >
          <h1 style={{ color: "white" }}>This is login page</h1>
        </Box>
        <Box
          style={{
            backgroundColor: "#fff",
            width: 500,
            paddingTop: 100,
            boxSizing: "border-box",
            paddingLeft: "100px",
            paddingRight: "100px",
            borderBottomRightRadius: "50px",
            borderTopRightRadius: "50px",
          }}
        >
          <form >
              <InputText
                nameLabel="loginID" 
                typeInput="text"
              />
              <InputText 
                nameLabel="Password" 
                typeInput="password" 
              />
          </form>
          <Box style={{ marginTop: "20px" }}>
            {/* <Button variant="contained" color="primary" onClick={onLogin}>
              {getLabel(LangConstant.TXT_LOGIN)}
            </Button>
            <Button variant="contained" color="secondary" onClick={onChangeLanguage}>
              Change language to English
            </Button> */}
            <ButtonBox
              nameButton={getLabel(LangConstant.TXT_LOGIN)}
              onClick={onLogin}
            />
            <Box className={classes.boxLink}>
              <Link className={classes.a} onClick={onChangeLanguage}>
                Change language to English
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


const useStyles = makeStyles({
  a: {
    cursor: "pointer",
    height: 25,
    width: 25,
    "&:hover": {
        textDecoration: "underline",
    },
  },
  boxParent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  boxLink: {
    paddingTop: "20px",
    borderTop: "1px solid black",
    marginTop: "20px",
    textAlign: "center",
  }
});

export default memo(LoginAdminPage);
