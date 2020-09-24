import React, { memo } from "react";
import { PathConstant, LangConstant } from "../../const";
import { Redirect, useHistory } from "react-router-dom";
import AuthAction from "../../redux/auth.redux";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t: getLabel, i18n } = useTranslation(LangConstant.NS_LOGIN);

  const isLogin = useSelector(state => state.authRedux.isLogin);

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
    dispatch(AuthAction.requestLogin({ username: "hieucv", password: "123465" }));
    history.push("/");
  };

  return (
    <div>
      <h1>This is login page</h1>
      <Button variant="contained" color="primary" onClick={onLogin}>
        {getLabel(LangConstant.TXT_LOGIN)}
      </Button>
      <Button variant="contained" color="secondary" onClick={onChangeLanguage}>
        Change language to English
      </Button>
    </div>
  );
};

export default memo(Login);
