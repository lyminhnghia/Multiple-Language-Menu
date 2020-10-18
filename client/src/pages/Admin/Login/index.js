import React, { memo, useState } from "react";
import { PathConstant, LangConstant } from "../../../const";
import { Redirect, useHistory } from "react-router-dom";
import AuthAction from "../../../redux/auth.redux";
import { makeStyles, Box, Link } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ButtonBox from "../../../components/buttonBox";
import InputText from "../../../components/inputText";

const LoginAdminPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t: getLabel } = useTranslation();
  const isLogin = useSelector((state) => state.authRedux.isLogin);
  const [data, setData] = useState({});

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  if (isLogin) {
    return (
      <Redirect
        to={{
          pathname: PathConstant.ADMIN_SHOP_LIST,
          state: {
            from: this.props.location,
          },
        }}
      />
    );
  }

  const onLogin = () => {
    dispatch(AuthAction.requestLogin(data));
  };

  return (
    <Box className={classes.boxParent}>
      <Box className={classes.box1}>
        <Box className={classes.box2}>
          <h1 className={classes.h1}>Admin Page</h1>
        </Box>
        <Box className={classes.box3}>
          <form>
            <InputText
              nameLabel={getLabel(LangConstant.TXT_USER_NAME)}
              typeInput="text"
              nameText="username"
              onInput={onChange}
            />
            <InputText
              nameLabel={getLabel(LangConstant.TXT_PASSWORD)}
              typeInput="password"
              nameText="password"
              onInput={onChange}
            />
          </form>
          <Box className={classes.box4}>
            <ButtonBox
              nameButton={getLabel(LangConstant.TXT_LOGIN)}
              onClick={onLogin}
            />
          </Box>
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
  box1: {
    width: 1000,
    display: "flex",
    flexWrap: "wrap",
    height: 430,
    backgroundColor: "#fff",
    borderRadius: 50,
    boxShadow: "0 5px 5px 0 rgba(0,0,0,.2), 0 6px 18px 0 rgba(0,0,0,.19)",
  },
  box2: {
    backgroundColor: "#305C8B",
    width: 500,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  h1: { color: "white" },
  box3: {
    backgroundColor: "#fff",
    width: 500,
    paddingTop: 80,
    boxSizing: "border-box",
    paddingLeft: 100,
    paddingRight: 100,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  box4: {
    marginTop: 40,
    height: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default memo(LoginAdminPage);
